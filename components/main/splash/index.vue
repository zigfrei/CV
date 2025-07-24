<script setup lang="ts">
import { useMainStore } from '@/stores/main.store';

const mainStore = useMainStore();
</script>

<template>
    <transition name="fade" mode="out-in">
      <main-matrix v-if="mainStore.showMatrix" />
      <main-loading v-else-if="mainStore.showLoading" />
    </transition>
</template>

<style scoped>
</style>
