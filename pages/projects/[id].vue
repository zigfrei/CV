<script setup lang="ts">
import { cards } from '@/assets/data/cards';

const route = useRoute();
const { t } = useI18n();
const id = computed(() => String(route.params.id));
const card = computed(() => cards.find((c) => c.id === id.value));

const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.ogg', '.mov'];
const isVideo = (src: string) =>
  VIDEO_EXTENSIONS.some((ext) => src.toLowerCase().endsWith(ext));

const dialogRef = ref<HTMLDialogElement | null>(null);
const currentIndex = ref(0);

const gallery = computed(() => card.value?.gallery ?? []);
const currentSrc = computed(() => gallery.value[currentIndex.value] ?? '');
const isCurrentVideo = computed(() => isVideo(currentSrc.value));

function openGallery(index: number) {
  currentIndex.value = index;
  dialogRef.value?.showModal();
}

function closeGallery() {
  dialogRef.value?.close();
}

function prev() {
  if (!gallery.value.length) return;
  currentIndex.value =
    (currentIndex.value - 1 + gallery.value.length) % gallery.value.length;
}

function next() {
  if (!gallery.value.length) return;
  currentIndex.value = (currentIndex.value + 1) % gallery.value.length;
}

function onDialogClick(e: MouseEvent) {
  if (e.target === dialogRef.value) closeGallery();
}

function onKeydown(e: KeyboardEvent) {
  if (!dialogRef.value?.open) return;
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    prev();
  }
  if (e.key === 'ArrowRight') {
    e.preventDefault();
    next();
  }
}

const { direction } = useSwipe(dialogRef, {
  onSwipeEnd() {
    if (!dialogRef.value?.open || gallery.value.length <= 1) return;
    if (direction.value === 'left') next();
    if (direction.value === 'right') prev();
  },
});

onMounted(() => window.addEventListener('keydown', onKeydown));
onUnmounted(() => window.removeEventListener('keydown', onKeydown));
</script>

<template>
  <div class="main-content">
    <section class="section">
      <!-- <nuxt-link to="/projects" class="back-button font-b3">
        &lt; {{ t('projects.back') }}
      </nuxt-link> -->
      <div class="content">
        <div class="content-text">
          <span class="status font-b4">{{ card?.status }}</span>
          <p class="content-subtitle font-b5">> root / projects / {{ id }}</p>
          <h1 class="font-h1 content-title">{{ t(`cards.${id}.title`) }}</h1>
          <nuxt-link
            v-if="card?.url"
            :to="card.url"
            target="_blank"
            class="content-subtitle font-b1"
            >{{ card?.url }}</nuxt-link
          >
          <p class="content-subtitle font-b1">
            <span>{{ t('projects.fullDescription') }}</span> {{ t(`cards.${id}.fullDescription`) }}
          </p>
        </div>
        <div
          v-if="card?.additionalsCount"
          class="additionals"
        >
          <h2 class="font-h3">{{ t('projects.additionals') }}</h2>
          <ul class="additionals-items">
            <li
              class="additionals-item"
              v-for="i in card.additionalsCount"
              :key="i"
            >
              <h3 class="font-h4">{{ t(`cards.${id}.additionals.${i - 1}.title`) }}</h3>
              <p class="font-b3">{{ t(`cards.${id}.additionals.${i - 1}.description`) }}</p>
            </li>
          </ul>
        </div>
        <!-- галерея -->
        <div v-if="gallery.length" class="gallery">
          <h2 class="font-h3">{{ t('projects.gallery') }}</h2>
          <div class="gallery-grid">
            <button
              v-for="(src, index) in gallery"
              :key="src"
              class="gallery-item"
              @click="openGallery(index)"
            >
              <video
                v-if="isVideo(src)"
                :src="src"
                muted
                playsinline
                preload="metadata"
                class="gallery-thumb"
              />
              <img
                v-else
                :src="src"
                alt=""
                loading="lazy"
                class="gallery-thumb"
              />
              <span v-if="isVideo(src)" class="gallery-play">&#9654;</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Fullscreen Dialog -->
    <dialog ref="dialogRef" class="gallery-dialog" @click="onDialogClick">
      <div class="dialog-wrapper">
        <button class="dialog-close" @click="closeGallery">&times;</button>

        <button
          v-if="gallery.length > 1"
          class="dialog-nav dialog-nav--prev"
          @click="prev"
        >
          &lsaquo;
        </button>

        <div class="dialog-media">
          <video
            v-if="isCurrentVideo"
            :key="'v-' + currentSrc"
            :src="currentSrc"
            controls
            autoplay
            class="dialog-content"
          />
          <img
            v-else
            :key="'i-' + currentSrc"
            :src="currentSrc"
            alt=""
            class="dialog-content"
          />
        </div>

        <button
          v-if="gallery.length > 1"
          class="dialog-nav dialog-nav--next"
          @click="next"
        >
          &rsaquo;
        </button>

        <span v-if="gallery.length > 1" class="dialog-counter font-b4">
          {{ currentIndex + 1 }} / {{ gallery.length }}
        </span>
      </div>
    </dialog>
  </div>
</template>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.section {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1520px;
  padding: 0 40px 64px 40px;
  transition: opacity 0.3s ease-in-out;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--color-text-green);
  text-decoration: none;
  transition: opacity 0.2s;
}

.back-button:hover {
  opacity: 0.7;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: thick double var(--color-text-green);
  padding: 24px;
  gap: 40px;
}

.status {
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: var(--color-text-green);
  color: var(--color-black);
  padding: 4px 8px;
  font-weight: bold;
  text-transform: uppercase;
}

.content-text {
  width: 100%;
  position: relative;
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

.content-subtitle span {
  text-decoration: underline;
}

.additionals {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.additionals-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.additionals-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

@media (max-width: 1100px) {
  .section {
    padding: 0 16px 32px 16px;
  }

  .content {
    flex-direction: column;
    padding: 8px;
  }

  .content-text {
    border: none;
    padding: 0;
    gap: 12px;
  }
}

/* Gallery grid */
.gallery {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.gallery-item {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  background: none;
  padding: 0;
  transition: border-color 0.2s;
  isolation: isolate;
}

.gallery-item::after {
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

.gallery-item:hover,
.gallery-item:focus-visible {
  border-color: var(--color-text-green);
}

.gallery-item:hover::after,
.gallery-item:focus-visible::after {
  opacity: 0; /* на hover возвращаем оригинальные цвета */
}
.gallery-item:hover .gallery-thumb,
.gallery-item:focus-visible .gallery-thumb {
  filter: none;
}

.gallery-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  filter: grayscale(1) contrast(1.05);
  transition: filter 0.25s ease-in-out;
  will-change: filter;
}

.gallery-play {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: var(--color-text-green);
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
  pointer-events: none;
}

/* Dialog */
.gallery-dialog {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  overflow: hidden;
  z-index: var(--layer-popup, 1000);
}

.gallery-dialog::backdrop {
  background: rgba(0, 0, 0, 0.92);
}

.dialog-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
}

.dialog-close {
  position: absolute;
  top: 16px;
  right: 24px;
  background: none;
  border: none;
  color: var(--color-text-green);
  font-size: 48px;
  cursor: pointer;
  line-height: 1;
  z-index: 2;
  transition: opacity 0.2s;
  background-color: rgba(0, 0, 0, 0.2);
}

.dialog-close:hover {
  opacity: 0.7;
}

.dialog-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--color-text-green);
  font-size: 64px;
  cursor: pointer;
  z-index: 2;
  padding: 8px 16px;
  line-height: 1;
  transition: opacity 0.2s;
  user-select: none;
}

.dialog-nav:hover {
  opacity: 0.7;
}

.dialog-nav--prev {
  left: 8px;
}

.dialog-nav--next {
  right: 8px;
}

.dialog-media {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 85vw;
  max-height: 85vh;
}

.dialog-content {
  max-width: 85vw;
  max-height: 85vh;
  object-fit: contain;
  display: block;
}

.dialog-counter {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs);
}

@media (max-width: 1100px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .dialog-nav {
    font-size: 48px;
    padding: 4px 8px 8px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
  }

  .dialog-close {
    font-size: 36px;
    top: 8px;
    right: 12px;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .dialog-nav--prev {
    left: 0;
  }

  .dialog-nav--next {
    right: 0;
  }

  .dialog-media {
    max-width: 95vw;
    max-height: 80vh;
  }

  .dialog-content {
    max-width: 95vw;
    max-height: 80vh;
  }
}
</style>
