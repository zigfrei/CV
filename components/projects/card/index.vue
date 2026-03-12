<script setup lang="ts">
import type { CardItem } from '@/assets/data/cards';

const props = defineProps<CardItem>();
const { t } = useI18n();
</script>

<template>
  <nuxt-link :to="link" class="card">
    <div class="card-image-wrapper">
      <nuxt-img :src="image" :alt="t(`cards.${props.id}.title`)" class="card-image" width="1200" height="630" />
      <div class="labels-wrapper">
      <span class="card-label font-b5">{{ label }}</span>
      <base-ui-label v-if="status" :status="status" />
      </div>
    </div>
    <div class="card-body">
      <h3 class="card-title font-b2">{{ t(`cards.${props.id}.title`) }}</h3>
      <p class="card-description font-b4">{{ t(`cards.${props.id}.description`) }}</p>
    </div>
  </nuxt-link>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-text-green);
  background-color: var(--color-black);
  text-decoration: none;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0 0 12px rgba(203, 251, 131, 0.4), 0 0 24px rgba(203, 251, 131, 0.15);
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  isolation: isolate;
}

.card-image-wrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #cbfb83; /* плотность подбери */
  mix-blend-mode: multiply; /* попробуй также: multiply */
  opacity: 1;
  transition: opacity 0.25s ease-in-out;
  pointer-events: none;
  z-index: 1;
}

.card:hover .card-image-wrapper::after {
  opacity: 0; /* на hover возвращаем оригинальные цвета */
}

.card:hover .card-image {
  filter: none;
}

.card-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  filter: grayscale(1) contrast(1.05);
  transition: filter 0.25s ease-in-out;
  will-change: filter;
  position: relative;
  z-index: 0;
}

.labels-wrapper {
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 2;
}

.card-label {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border: 1px solid var(--color-text-green);
  background-color: var(--color-black);
  color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs);
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
}

.card-title {
  color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs);
}

.card-description {
  color: var(--color-text-green);
  opacity: 0.8;
}
</style>
