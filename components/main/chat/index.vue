<script setup lang="ts">
const { messages, sendMessage, isThinking, isEmbeddingLoading, progress } = useChat()

const isOpen = ref(false)
const inputText = ref('')
const messagesEl = ref<HTMLElement | null>(null)

async function handleSend() {
  const text = inputText.value.trim()
  if (!text) return
  inputText.value = ''
  await sendMessage(text)
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    handleSend()
  }
}

watch(
  () => messages.value.length,
  async () => {
    await nextTick()
    if (messagesEl.value) {
      messagesEl.value.scrollTop = messagesEl.value.scrollHeight
    }
  },
)
</script>

<template>
  <div class="chat-wrapper">
    <button class="chat-toggle" :class="{ 'chat-toggle--open': isOpen }" @click="isOpen = !isOpen">
      <span class="chat-toggle__icon">{{ isOpen ? '✕' : '?' }}</span>
      <span class="chat-toggle__label">{{ isOpen ? 'close' : 'ask me' }}</span>
    </button>

    <Transition name="chat">
      <div v-if="isOpen" class="chat-panel">
        <div class="chat-header">
          <span class="chat-header__title font-b4">// AI chat</span>
          <span class="chat-header__hint font-b4">на основе документов</span>
        </div>

        <div v-if="isEmbeddingLoading" class="chat-loading">
          <span class="chat-loading__text font-b4">Загрузка модели... {{ progress }}%</span>
          <div class="chat-loading__bar">
            <div class="chat-loading__fill" :style="{ width: `${progress}%` }" />
          </div>
        </div>

        <div ref="messagesEl" class="chat-messages">
          <div v-if="messages.length === 0" class="chat-empty">
            <p class="font-b4">Задайте вопрос о моём опыте, проектах или навыках</p>
          </div>
          <div
            v-for="(msg, i) in messages"
            :key="i"
            class="chat-message"
            :class="`chat-message--${msg.role}`"
          >
            <span class="chat-message__prefix font-b4">{{
              msg.role === 'user' ? '>' : '//'
            }}</span>
            <span class="chat-message__content font-b4">{{
              msg.content || (isThinking ? '▋' : '')
            }}</span>
          </div>
        </div>

        <div class="chat-input-row">
          <span class="chat-input-row__prompt font-b4">>&nbsp;</span>
          <textarea
            v-model="inputText"
            class="chat-input font-b4"
            placeholder="Введите вопрос..."
            rows="1"
            :disabled="isThinking || isEmbeddingLoading"
            @keydown="handleKeydown"
          />
          <button
            class="chat-send font-b4"
            :disabled="isThinking || isEmbeddingLoading || !inputText.trim()"
            @click="handleSend"
          >
            ↩
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.chat-wrapper {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

.chat-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: transparent;
  border: 1px solid var(--color-text-green);
  color: var(--color-text-green);
  cursor: pointer;
  font-family: inherit;
  text-shadow: var(--text-shadow-parametrs);
  box-shadow: 0 0 8px rgba(203, 251, 131, 0.2);
  transition: box-shadow 0.2s;
}

.chat-toggle:hover {
  box-shadow: 0 0 16px rgba(203, 251, 131, 0.4);
}

.chat-toggle--open {
  border-color: var(--color-pure-lamp);
  color: var(--color-pure-lamp);
}

.chat-toggle__icon {
  font-size: 18px;
  line-height: 1;
}

.chat-toggle__label {
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: lowercase;
}

.chat-panel {
  width: 380px;
  max-width: calc(100vw - 48px);
  background: #0a0f06;
  border: 1px solid var(--color-text-green);
  box-shadow: 0 0 24px rgba(203, 251, 131, 0.15), inset 0 0 12px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-header {
  padding: 8px 12px;
  border-bottom: 1px solid rgba(203, 251, 131, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-header__title {
  color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs);
}

.chat-header__hint {
  color: rgba(203, 251, 131, 0.4);
  font-size: 11px;
}

.chat-loading {
  padding: 8px 12px;
  border-bottom: 1px solid rgba(203, 251, 131, 0.2);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.chat-loading__text {
  color: var(--color-pure-lamp);
  font-size: 11px;
}

.chat-loading__bar {
  height: 2px;
  background: rgba(203, 251, 131, 0.1);
  width: 100%;
}

.chat-loading__fill {
  height: 100%;
  background: var(--color-text-green);
  box-shadow: 0 0 6px var(--color-text-green);
  transition: width 0.3s;
}

.chat-messages {
  height: 280px;
  overflow-y: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  scrollbar-width: thin;
  scrollbar-color: rgba(203, 251, 131, 0.3) transparent;
}

.chat-empty {
  color: rgba(203, 251, 131, 0.4);
  text-align: center;
  margin: auto;
}

.chat-message {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.chat-message__prefix {
  flex-shrink: 0;
  font-size: 12px;
}

.chat-message--user .chat-message__prefix {
  color: var(--color-pure-lamp);
}

.chat-message--user .chat-message__content {
  color: var(--color-pure-lamp);
  text-shadow: 0 0 2px rgba(254, 254, 166, 0.4);
}

.chat-message--assistant .chat-message__prefix {
  color: rgba(203, 251, 131, 0.5);
}

.chat-message--assistant .chat-message__content {
  color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs);
  white-space: pre-wrap;
  line-height: 1.6;
}

.chat-input-row {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-top: 1px solid rgba(203, 251, 131, 0.2);
  gap: 4px;
}

.chat-input-row__prompt {
  color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs);
  flex-shrink: 0;
}

.chat-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--color-pure-lamp);
  font-family: inherit;
  font-size: 12px;
  resize: none;
  line-height: 1.5;
  caret-color: var(--color-text-green);
}

.chat-input::placeholder {
  color: rgba(203, 251, 131, 0.25);
}

.chat-input:disabled {
  opacity: 0.5;
}

.chat-send {
  background: transparent;
  border: none;
  color: var(--color-text-green);
  cursor: pointer;
  font-size: 16px;
  padding: 0 4px;
  text-shadow: var(--text-shadow-parametrs);
  transition: opacity 0.2s;
  flex-shrink: 0;
}

.chat-send:disabled {
  opacity: 0.3;
  cursor: default;
}

.chat-enter-active,
.chat-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.chat-enter-from,
.chat-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 480px) {
  .chat-wrapper {
    bottom: 16px;
    right: 16px;
  }

  .chat-panel {
    width: calc(100vw - 32px);
  }
}
</style>
