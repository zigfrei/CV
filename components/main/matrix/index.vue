<script setup lang="ts">
import { useMainStore } from '@/stores/main.store';

const mainStore = useMainStore();
const canvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
const showHelper = ref(false);

let w = 0;
let h = 0;

const handleInteraction = () => {
  showHelper.value = false;
  setTimeout(() => {
    mainStore.showMatrix = false;
    mainStore.showLoading = true;
  }, 500);

  document.removeEventListener('keydown', handleInteraction);
};

onMounted(() => {
  if (!canvas.value) return;
  ctx = canvas.value.getContext('2d');

  w = canvas.value.width = document.body.offsetWidth;
  h = canvas.value.height = document.body.offsetHeight;

  if (ctx) {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);
  }

  const cols = Math.floor(w / 20) + 1;
  const ypos = Array(cols).fill(0);

  function matrix() {
    if (ctx) {
      ctx.fillStyle = '#0001';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#CFFD80';

      ctx.font = w > 700 ? '15pt monospace' : '12pt monospace';
    }

    ypos.forEach((y, ind) => {
      const text = getRandomChar();
      const x = ind * 20;
      ctx?.fillText(text, x, y);
      if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
      else ypos[ind] = y + 20;
    });
  }

  const matrixInterval = setInterval(matrix, 50);

  setTimeout(() => {
    showHelper.value = true;
  }, 2000);

  document.addEventListener('keydown', handleInteraction);

  onUnmounted(() => {
    clearInterval(matrixInterval);
    document.removeEventListener('keydown', handleInteraction);
  });
});

const getRandomChar = () => {
  const minAscii = 32; // ASCII code for space
  const maxAscii = 126; // ASCII code for ~
  const randomAscii =
    Math.floor(Math.random() * (maxAscii - minAscii + 1)) + minAscii;
  return String.fromCharCode(randomAscii);
};

const handlePressAnyKey = () => {
  handleInteraction();
};
</script>

<template>
  <section class="matrix-content">
    <div class="overlayWrapper">
      <canvas ref="canvas" class="canvas" width="500" height="200" />
      <div class="overlay" @click="handlePressAnyKey">
        <transition name="fade" mode="out-in">
          <div v-if="showHelper" class="titleWrapper">
            <h1 class="title">Добро пожаловать.</h1>
            <h2 class="subTitle">Для продолжения нажмите любую клавишу ...</h2>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.matrix-content {
  position: relative;
  margin: 0;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.section {
  position: absolute;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
}

.overlayWrapper {
  opacity: 1;
  visibility: visible;
  transition: all 3s ease-in-out;
}

.overlay {
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: var(--layer-of-matrix-text);
}

.titleWrapper {
  margin: 10px;
  background-color: var(--color-black-overlay);
  width: 100%;
  max-width: 500px;
  border: 1px dashed var(--color-text-green);
}

.title {
  text-wrap: balance;
  text-align: center;
  margin: 0;
  padding: 30px 30px 5px 30px;
  font-style: normal;
  color: var(--color-text-green);
  font-size: 30px;
  font-weight: 400;
  font-family: var(--font-handjet);
  text-shadow: var(--text-shadow-parametrs);
  /* animation: text-effect-glow  5s linear infinite;  */
}

.subTitle {
  text-wrap: balance;
  text-align: center;
  margin: 0;
  padding: 0px;
  font-style: normal;
  color: var(--color-text-green);
  font-size: 24px;
  font-weight: 400;
  font-family: var(--font-handjet);
  padding-bottom: 30px;
  text-shadow: var(--text-shadow-parametrs);
  /* animation: text-effect-glow  5s linear infinite; */
}

.deleteMatrix {
  display: none;
}

@media (max-width: 700px) {
  .title {
    font-size: 26px;
    padding: 20px 10px 5px 10px;
  }

  .subTitle {
    font-size: 20px;
    padding-bottom: 20px;
  }
}

@keyframes text-effect-glow {
  50% {
    text-shadow: 0 0 4px white, 0 0 9px white;
    color: #c6fc7e;
  }
}
</style>
