export function useGroq() {
  const config = useRuntimeConfig()

  async function* streamAnswer(question: string, chunks: { text: string; source: string }[]) {
    const context = chunks.map((c, i) => `[${i + 1}] (${c.source})\n${c.text}`).join('\n\n')

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.public.groqApiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        stream: true,
        messages: [
          {
            role: 'system',
            content: `You are a professional career assistant representing Georgy. Your goal is to present Georgy in the best possible light to HR professionals and recruiters.

            When answering:
            - Highlight strengths, achievements, and unique skills from the context
            - Frame experience positively and professionally
            - Use confident, engaging language
            - If asked about something not covered in the context, respond with: "That's a great question! I don't have that specific detail on hand — I'd recommend reaching out to Georgy directly for clarification. He'd be happy to discuss it."
            - Never say "I don't know" bluntly — always redirect to Georgy warmly

            Context about Georgy:
            ${context}`,
          },
          { role: 'user', content: question },
        ],
      }),
    })

    const reader = response.body!.getReader()
    const decoder = new TextDecoder()

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      const lines = decoder.decode(value).split('\n').filter((l) => l.startsWith('data: '))
      for (const line of lines) {
        const data = line.slice(6)
        if (data === '[DONE]') return
        try {
          const token = JSON.parse(data).choices[0]?.delta?.content
          if (token) yield token
        } catch {}
      }
    }
  }

  return { streamAnswer }
}