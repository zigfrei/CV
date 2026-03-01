import { pipeline } from '@huggingface/transformers'
import * as fs from 'fs'
import * as path from 'path'
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'

const CHUNK_SIZE = 500
const CHUNK_OVERLAP = 50
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

function chunkText(text: string, source: string) {
  const chunks = []
  let i = 0
  let id = 0
  while (i < text.length) {
    const chunk = text.slice(i, i + CHUNK_SIZE)
    if (chunk.trim().length > 20) {
      chunks.push({ id: id++, text: chunk.trim(), source })
    }
    i += CHUNK_SIZE - CHUNK_OVERLAP
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

  const results = []
  for (let i = 0; i < allChunks.length; i++) {
    const chunk = allChunks[i]
    process.stdout.write(`\rEmbedding chunk ${i + 1}/${allChunks.length}...`)
    const output = await extractor(`search_document: ${chunk.text}`, {
      pooling: 'mean',
      normalize: true,
    })
    results.push({ ...chunk, embedding: Array.from(output.data as Float32Array) })
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(results))
  console.log(`\n\nDone! Saved to ${OUTPUT}`)
}

main().catch(console.error)