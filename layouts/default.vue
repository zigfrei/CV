<script setup lang="ts">
import { useMainStore } from '@/stores/main.store';

const mainStore = useMainStore();

const hideHeaderFooter = computed(() => {
  return mainStore.showMatrix || mainStore.showLoading;
});

// useHead({
//   link: [
//   { rel: "icon", type: "image/png", sizes: "120x120", href: "/favicon-120x120.png" },
//   { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
//   { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
//   { rel: "shortcut icon", href: "/favicon.ico" },
//   { rel: "apple-touch-icon", sizes:"180x180", href: "/apple-touch-icon.png" },
//   { rel: "manifest", href: "/site.webmanifest" }, 
//   ],
//   meta: [
//     { name: "yandex-verification", content: "fca727eaa2be41f5" },
//   ]
// });
</script>

<template>
  <div class="content-wrapper">
    <base-header v-if="!hideHeaderFooter" />
    <div class="content">
      <slot />
    </div>
    <!-- <base-footer /> -->
  </div>
</template>

<style scoped>
.content-wrapper {
  position: relative;
  width: 100dvw;
  /* height: 100dvh; */
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--main-background-gradient);
  animation: screen-effects-module 10s linear infinite;
  overflow: hidden;
}

.content-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Covers the content-wrapper */
  height: 100%; /* Covers the content-wrapper */
  box-shadow: var(--main-box-shadow-view);
  z-index: 1; /* Ensure it's above .content's default plane but below any interactive UI on top of the effect */
  background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.21) 0),
    linear-gradient(
      90deg,
      rgba(255, 0, 0, 0.055),
      rgba(0, 255, 0, 0.03),
      rgba(0, 0, 255, 0.055)
    );
  background-size: 100% 0.2142857143rem, 0.2857142857rem 100%;
  pointer-events: none; /* Crucial: makes the overlay non-interactive */
}

/* .monitorCRTEffect {
  position: absolute;
  width: 100dvw;
  height: 100dvh;
  box-shadow: var(--main-box-shadow-view);
  z-index: var(--top-layer);
  background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.21) 0), linear-gradient(90deg, rgba(255, 0, 0, 0.055), rgba(0, 255, 0, 0.03), rgba(0, 0, 255, 0.055));
  background-size: 100% 0.2142857143rem, 0.2857142857rem 100%;
  pointer-events: none;
  overflow: hidden;
} */

.content {
  /* width: fit-content; */
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  overflow-x: hidden;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto; */
}

.content::-webkit-scrollbar {
  width: 6px;
  /* padding-right: 20px; */
}

.content::-webkit-scrollbar-track {
  background-color: var(--color-black);
  border-radius: 4px;
  margin: 0;
}

.content::-webkit-scrollbar-thumb {
  background-color: var(--color-text-green);
  border-radius: 5px;
}

/* animation: text-effect-glow  5s linear infinite; */
/* h1, h2, h3, h4, h5, p, span {
  animation: text-effect 5s linear infinite;
  animation: text-effect-glow  5s linear infinite;
} */

@keyframes screen-effects-module {
  0% {
    transform: skewX(0deg);
  }

  4% {
    transform: skewX(0.7deg) scale(1.0001);
  }

  8% {
    transform: skewX(0.2deg) skewY(-0.1deg);
  }

  16% {
    transform: skewX(0.2deg);
  }

  50% {
    transform: skewX(0.2deg);
  }
}

/* @keyframes text-effect {
50% {
  text-shadow: 0 0 0.2857142857rem white, 0 0 0.5714285714rem white;
  color: #c6fc7e;
}
} */

/* @keyframes text-effect-glow {
    50% {
      text-shadow: 0 0 0.2857142857rem white, 0 0 0.5714285714rem white;
      color: #c6fc7e;
    }
    } */
</style>
