import { pipeline } from '@huggingface/transformers'
import * as fs from 'fs'
import * as path from 'path'
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'

const CHUNK_SIZE = 500
const CHUNK_OVERLAP = 100
const MODEL = 'nomic-ai/nomic-embed-text-v1.5'
const OUTPUT = './public/vectors.json'

async function extractTextFromPdf(filePath: string): Promise<string> {
  const data = new Uint8Array(fs.readFileSync(filePath))
  const pdf = await getDocument({ data }).promise
  let text = ''
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const content = await page.getTextContent()
    text += content.items.map((item: any) => ('str' in item ? item.str : '')).join(' ') + '\n'
  }
  return text
}

/**
 * Разбивает текст на блоки по двойным переносам.
 * PDF-экстракторы вставляют \n\n между визуальными блоками независимо от языка.
 */
function splitByBlocks(text: string): string[] {
  return text
    .split(/\n{2,}/)
    .map((block) => block.replace(/\s+/g, ' ').trim())
    .filter((block) => block.length > 20)
}

/**
 * Нарезает длинный блок по предложениям с overlap.
 * Работает для русского и английского — опирается на .!?\n
 */
function chunkBySentences(text: string, source: string, startId: number) {
  const sentences = text.match(/[^.!?\n]+[.!?\n]+/g) || [text]
  const chunks: { id: number; text: string; source: string }[] = []
  let current = ''
  let id = startId

  for (const sentence of sentences) {
    if ((current + sentence).length > CHUNK_SIZE && current.length > 0) {
      chunks.push({ id: id++, text: current.trim(), source })
      const prev = current.match(/[^.!?\n]+[.!?\n]+/g) || []
      let overlap = ''
      for (let i = prev.length - 1; i >= 0; i--) {
        if ((prev[i] + overlap).length > CHUNK_OVERLAP) break
        overlap = prev[i] + overlap
      }
      current = overlap
    }
    current += sentence
  }

  if (current.trim().length > 20) {
    chunks.push({ id: id++, text: current.trim(), source })
  }

  return chunks
}

/**
 * Собирает блоки в чанки, не превышающие CHUNK_SIZE.
 * Overlap по целым блокам — слова никогда не разрезаются.
 */
function chunkText(text: string, source: string) {
  const blocks = splitByBlocks(text)
  const chunks: { id: number; text: string; source: string }[] = []
  let current = ''
  let id = 0
  let overlapBuffer: string[] = []

  for (const block of blocks) {
    // Если один блок длиннее CHUNK_SIZE — нарезаем по предложениям
    if (block.length > CHUNK_SIZE) {
      if (current.trim().length > 20) {
        chunks.push({ id: id++, text: current.trim(), source })
      }
      const subChunks = chunkBySentences(block, source, id)
      chunks.push(...subChunks)
      id += subChunks.length
      current = ''
      overlapBuffer = []
      continue
    }

    if ((current + ' ' + block).length > CHUNK_SIZE && current.length > 0) {
      chunks.push({ id: id++, text: current.trim(), source })

      // Overlap: берём последние блоки, укладывающиеся в CHUNK_OVERLAP
      let overlap = ''
      for (let i = overlapBuffer.length - 1; i >= 0; i--) {
        if ((overlapBuffer[i] + ' ' + overlap).length > CHUNK_OVERLAP) break
        overlap = overlapBuffer[i] + (overlap ? ' ' + overlap : '')
      }
      current = overlap
      overlapBuffer = overlap ? [overlap] : []
    }

    current += (current ? ' ' : '') + block
    overlapBuffer.push(block)
  }

  if (current.trim().length > 20) {
    chunks.push({ id: id++, text: current.trim(), source })
  }

  return chunks
}

async function main() {
  const pdfDir = process.argv[2] || './pdfs'
  const files = fs.readdirSync(pdfDir).filter((f) => f.endsWith('.pdf'))

  if (files.length === 0) {
    console.error('No PDF files found in', pdfDir)
    process.exit(1)
  }

  console.log(`Found ${files.length} PDF(s). Extracting text...`)

  const allChunks: { id: number; text: string; source: string }[] = []

  for (const file of files) {
    console.log(`  Processing: ${file}`)
    const text = await extractTextFromPdf(path.join(pdfDir, file))
    const chunks = chunkText(text, file)
    allChunks.push(...chunks)
    console.log(`  → ${chunks.length} chunks`)
  }

  console.log(`\nTotal chunks: ${allChunks.length}`)
  console.log(`Loading embedding model: ${MODEL}...`)

  const extractor = await pipeline('feature-extraction', MODEL, { dtype: 'q8' })

  const BATCH_SIZE = 16
  const results: { id: number; text: string; source: string; embedding: number[] }[] = []

  for (let i = 0; i < allChunks.length; i += BATCH_SIZE) {
    const batch = allChunks.slice(i, i + BATCH_SIZE)
    process.stdout.write(
      `\rEmbedding chunks ${i + 1}–${Math.min(i + BATCH_SIZE, allChunks.length)}/${allChunks.length}...`,
    )

    const texts = batch.map((c) => `search_document: ${c.text}`)
    const output = await extractor(texts, { pooling: 'mean', normalize: true })

    const dim = output.dims[1]
    for (let j = 0; j < batch.length; j++) {
      const embedding = Array.from(output.data.slice(j * dim, (j + 1) * dim) as Float32Array)
      results.push({ ...batch[j], embedding })
    }
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(results))
  console.log(`\n\nDone! Saved to ${OUTPUT}`)
}

main().catch(console.error)