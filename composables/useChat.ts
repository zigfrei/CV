interface Message {
  role: 'user' | 'assistant'
  content: string
}

export function useChat() {
  const messages = ref<Message[]>([])
  const isThinking = ref(false)
  const { search, isLoading: isEmbeddingLoading, progress } = useRag()
  const { streamAnswer } = useGroq()

  async function sendMessage(text: string) {
    if (!text.trim() || isThinking.value) return

    messages.value.push({ role: 'user', content: text })
    messages.value.push({ role: 'assistant', content: '' })
    isThinking.value = true

    try {
      const chunks = await search(text)
      const lastIndex = messages.value.length - 1

      for await (const token of streamAnswer(text, chunks)) {
        messages.value[lastIndex].content += token
      }
    } catch (e) {
      messages.value[messages.value.length - 1].content = 'Error: could not get response.'
    } finally {
      isThinking.value = false
    }
  }

  return { messages, sendMessage, isThinking, isEmbeddingLoading, progress }
}