<script setup lang="ts">
import { useMainStore } from '@/stores/main.store';

useServerSeoMeta({
  title:
    'Ревазашвили Георгий | Резюме и Демки',
  description:
    'Доброго времени суток! Я Ревазашвили Георгий, фронтенд разработчик. Здесь вы можете ознакомиться с моим профессиональным резюме, навыками и проектами в области веб-разработки.',
  ogTitle:
    'Ревазашвили Георгий - Фронтенд разработчик | Резюме и Демки',
  ogDescription:
    'Доброго времени суток! Я Ревазашвили Георгий, фронтенд разработчик. Здесь вы можете ознакомиться с моим профессиональным резюме, навыками и проектами в области веб-разработки.',
  ogImageAlt: 'Ревазашвили Георгий',
  ogImageHeight: '630',
  ogImageWidth: '1200',
  ogImageType: 'image/png',
  ogImageUrl: `/og-image.png`,
  ogType: 'website',
  ogUrl: 'https://example.com',
  ogSiteName: 'Ревазашвили Георгий',
  twitterImage: {
    url: `/twitter-image.png`,
    alt: 'Ревазашвили Георгий',
    type: 'image/png',
    width: 1200,
    height: 600,
  },
  titleTemplate: '%s',
});

const mainStore = useMainStore();
</script>

<template>
  <div class="main-content">
    <main-splash />
    <main-page v-if="mainStore.showMainPage" />
  </div>
</template>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
