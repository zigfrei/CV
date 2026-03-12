<script setup lang="ts">
import { cards } from '@/assets/data/cards';

const { t } = useI18n();
</script>

<template>
  <section class="section" >
    <div class="content">
      <div class="content-text">
        <p class="content-subtitle font-b5"> > root / projects</p>
        <h1 class="font-h1 content-title">{{ t('projects.title') }}</h1>
        <p class="content-subtitle font-b1">{{ t('projects.description') }}</p>
      </div>
      <div class="content-grid">
        <projects-card
          v-for="(card, index) in cards"
          :key="index"
          v-bind="card"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1520px;
  padding: 0 40px 64px 40px;
  transition: opacity 0.3s ease-in-out;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: thick double var(--color-text-green);
  padding: 24px;
  gap: 60px;
}

.avatar-image {
}

.content-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 16px;
  padding-left: 16px;
  border-left: solid 3px var(--color-text-green);
}

.content-title {
  color: var(--color-text-green);
}

.content-subtitle {
  color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs);
}

.content-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1100px) {
  .section {
    padding: 0 16px 32px 16px;
  }

  .content {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    gap: 40px;
  }

  .avatar-image {
  }

  .content-text {
    padding: 0;
    gap: 12px;
    border: none;
    /* text-align: center; */
    /* align-items: center; */
  }

  .content-title {
    
  }

  .content-subtitle {
    
  }

  .content-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 0;
  }
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
