<script setup lang="ts">
import { useMainStore } from '@/stores/main.store';
const { t, setLocale } = useI18n();
const mainStore = useMainStore();

const onLocaleChange = (locale: 'ru' | 'en') => {
  setLocale(locale);
  mainStore.toggleShowLocalizationModal();
};  
</script>
<template>
<div class="modal">
    <div
      v-if="mainStore.showLocalizationModal"
      class="overlay"
      @click.stop="mainStore.toggleShowLocalizationModal"
    />
    <transition name="fade">
    <div
      v-if="mainStore.showLocalizationModal"
      class="modal-content"
    >
      <button class="button font-b4" @click="onLocaleChange('ru')">{{ t('popups.locale.rus') }}</button>
      <button class="button font-b4" @click="onLocaleChange('en')">{{ t('popups.locale.eng') }}</button>
    </div>
  </transition>
</div> 
</template>
<style scoped>

.modal {
  position: relative;
  z-index: var(--layer-popup);  
}

.overlay {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100%; 
  background: rgb(0 0 0 / 0.5);
  /* backdrop-filter: blur(5px); */
  /* z-index: var(--layer-popup-backdrop); */
}

.modal-content {
  padding: 16px;
  position: fixed;
  inset: 0;
  background-color: var(--color-black-overlay);
  border: dashed 1px var(--color-pure-lamp);
  inset: 50% auto auto 50%;

  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  /* width: 100%;
  max-width: 260px; */
  /* rest unchanged */
}

.button {
  
    cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--color-text-green);
  border-bottom: solid 1px transparent;
  transition: border-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.button:hover {
  border-color: var(--color-text-green);
}
</style>