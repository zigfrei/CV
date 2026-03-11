<script setup lang="ts">
import type { CardItem } from '@/assets/data/cards';

defineProps<CardItem>();
</script>

<template>
  <nuxt-link :to="link" target="_blank" class="card">
    <div class="card-image-wrapper">
      <nuxt-img :src="image" :alt="title" class="card-image" width="600" height="400" />
      <span class="card-label font-b5">{{ label }}</span>
    </div>
    <div class="card-body">
      <h3 class="card-title font-b2">{{ title }}</h3>
      <p class="card-description font-b4">{{ description }}</p>
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
}

.card-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.card-label {
  position: absolute;
  top: 8px;
  left: 8px;
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
