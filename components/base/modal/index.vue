<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';

interface Props {
  showPopup: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
  (e: 'close'): void
}>();

function close() {
  emit('close');
}

function handleKey(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    close();
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKey);
  // Lock scroll
  const previous = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKey);
    document.body.style.overflow = previous;
  });
});
</script>

<template>
    <Transition name="fade">
  <Teleport v-if="showPopup" to="body">
    <div  class="modal-root" role="dialog" aria-modal="true">
      <div class="modal-backdrop" @click="close"></div>
      <div class="modal-content" tabindex="-1">
        <slot />
        <button
          class="modal-close"
          type="button"
          aria-label="Close"
          @click="close"
        >
          ×
        </button>
      </div>
    </div>
  </Teleport>
  </Transition>
</template>

<style scoped>
.modal-root {
  position: fixed;
  inset: 0;
  z-index: var(--layer-popup);
  display: flex;
  align-items: center;
  justify-content: center;
  /* Prevent children from shrinking weirdly */
  pointer-events: none;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  /* backdrop-filter: blur(2px); */
  pointer-events: auto;
}

/* Viewport-safe height for mobile browsers */
@supports (height: 100dvh) {
  .modal-root {
    height: 100dvh;
  }
}

.modal-content {
  position: relative;
  box-sizing: border-box;
  width: min(100% - 32px, 600px);
  max-height: calc(100vh - 64px);
  overflow: auto;
  background-color: transparent;
  border: solid 1px var(--color-text-green);
  padding: 24px;
  box-shadow: 0 8px 32px -4px rgba(0, 0, 0, 0.25);
  pointer-events: auto;
}

@supports (height: 100dvh) {
  .modal-content {
    max-height: calc(100dvh - 64px);
  }
}

.modal-close {
  position: absolute;
  top: 8px;
  right: 8px;
  font: inherit;
  font-size: 20px;
  line-height: 1;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.06);
}
</style>
