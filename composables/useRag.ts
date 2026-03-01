import { pipeline } from '@huggingface/transformers'

interface VectorChunk {
  id: number
  text: string
  source: string
  embedding: number[]
}

let extractor: Awaited<ReturnType<typeof pipeline>> | null = null
let vectors: VectorChunk[] | null = null

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, normA = 0, normB = 0
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i]
    normA += a[i] * a[i]
    normB += b[i] * b[i]
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB))
}

export function useRag() {
  const isLoading = ref(false)
  const progress = ref(0)

  async function loadVectors() {
    if (vectors) return
    const data = await $fetch<VectorChunk[]>('/vectors.json')
    vectors = data
  }

  async function loadModel() {
    if (extractor) return
    isLoading.value = true
    extractor = await pipeline('feature-extraction', 'nomic-ai/nomic-embed-text-v1.5', {
      dtype: 'q8',
      progress_callback: (p: any) => {
        if (p.progress) progress.value = Math.round(p.progress)
      },
    })
    isLoading.value = false
  }

  async function search(query: string, topK = 3) {
    await Promise.all([loadVectors(), loadModel()])

    const output = await extractor!(`search_query: ${query}`, {
      pooling: 'mean',
      normalize: true,
    })
    const queryEmbedding = Array.from(output.data as Float32Array)

    return vectors!
      .map((chunk) => ({ ...chunk, score: cosineSimilarity(queryEmbedding, chunk.embedding) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
  }

  return { search, isLoading, progress }
}