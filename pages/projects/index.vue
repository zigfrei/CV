<script setup lang="ts">
import { useMainStore } from '@/stores/main.store';

const { t } = useI18n();

useSeoMeta({
  title: t('opengraph.projectsTitle'),
  description: t('opengraph.projectsDescription'),
  ogTitle: t('opengraph.projectsTitle'),
  ogDescription:t('opengraph.projectsDescription'),
  ogImageAlt: t('opengraph.imageAlt'),
  ogImageHeight: '630',
  ogImageWidth: '1200',
  ogImageType: 'image/png',
  ogImageUrl: `/og-image.png`,
  ogType: 'website',
  ogUrl: 'https://revaz.vercel.app/',
  ogSiteName: t('opengraph.imageAlt'),
  twitterImage: {
    url: `/twitter-image.png`,
    alt: t('opengraph.imageAlt'),
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
    <projects-page />
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