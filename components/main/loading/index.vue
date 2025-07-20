<script setup lang="ts">
import { useMainStore } from '@/stores/main.store';
import { ANIMATION_SHOWN } from '@/stores/main.store';

const mainStore = useMainStore();
const lineText = ref('');
const show = ref(-1);
const charIndex = ref(0);
const lineNumber = ref(0);
const stopTyping = ref(false);
const hideContent = ref(false);

const TYPING_DELAY = 50;
const NEW_TEXT_DELAY = 1500;
let typingIntervalId: NodeJS.Timeout | null = null;

const handleInteraction = () => {
  lineText.value = '';
  charIndex.value = 0;
  lineNumber.value = 0;
  show.value = 11;
  stopTyping.value = true;
  hideContent.value = true;
  
  setTimeout(() => {
    mainStore.showMainPage = true;
    mainStore.showLoading = false;
    window.localStorage.setItem(ANIMATION_SHOWN, 'true');
  }, NEW_TEXT_DELAY);

  document.removeEventListener('keydown', handleInteraction);
};

const textArray = [
  'Loading ...',
  'Rendering a web page ...',
  'Start to parse the HTML ...',
  'Fetch external resources ...',
  'Parse the CSS and build the CSSOM ...',
  'Execute the JavaScript ...',
  'Merge DOM and CSSOM to construct the render tree ...',
  'Calculate layout and paint ...',
  'Done',
  '>',
];

onMounted(() => {
  show.value++;
  typingIntervalId = setInterval(() => {
    if (lineNumber.value < textArray.length - 1) {
      if (charIndex.value < textArray[lineNumber.value].length && !stopTyping.value) {
        lineText.value =
          lineText.value + textArray[lineNumber.value][charIndex.value];
        charIndex.value++;
      } else {
        setTimeout(() => {
          lineNumber.value++;
          charIndex.value = 0;
          lineText.value = '';
          show.value++;
        }, NEW_TEXT_DELAY);
        if (typingIntervalId) {
          clearInterval(typingIntervalId);
          typingIntervalId = null;
        }
      }
    }
  }, TYPING_DELAY);

  document.addEventListener('keydown', handleInteraction);
});

watch(show, (newValue) => {
  if (newValue > 0 && newValue < textArray.length) {
    typingIntervalId = setInterval(() => {
      if (lineNumber.value < textArray.length) {
        if (charIndex.value < textArray[lineNumber.value].length && !stopTyping.value) {
          lineText.value =
            lineText.value + textArray[lineNumber.value][charIndex.value];
          charIndex.value++;
        } else {
          setTimeout(() => {
            if (newValue < textArray.length - 1) {
              lineNumber.value++;
              charIndex.value = 0;
              lineText.value = '';
              show.value++;
            } else {
              hideContent.value = true;
              mainStore.showLoading = false;
              mainStore.showMainPage = true;
              window.localStorage.setItem(ANIMATION_SHOWN, 'true');
            }
          }, NEW_TEXT_DELAY);
          if (typingIntervalId) {
            clearInterval(typingIntervalId);
            typingIntervalId = null;
          }
        }
      }
    }, TYPING_DELAY);
  }
});

onUnmounted(() => {
  if (typingIntervalId) {
    clearInterval(typingIntervalId);
  }
});
</script>

<template>
  <div class="layout-loading">
  <section v-if="!hideContent" class="loading-wrapper loading" @click="handleInteraction">
    <p v-if="show > 0" class="text">{{ textArray[0] }}</p>
    <p v-if="show > 1" class="text">{{ textArray[1] }}</p>
    <p v-if="show > 2" class="text">{{ textArray[2] }}</p>
    <p v-if="show > 3" class="text">{{ textArray[3] }}</p>
    <p v-if="show > 4" class="text">{{ textArray[4] }}</p>
    <p v-if="show > 5" class="text">{{ textArray[5] }}</p>
    <p v-if="show > 6" class="text">{{ textArray[6] }}</p>
    <p v-if="show > 7" class="text">{{ textArray[7] }}</p>
    <p v-if="show > 8" class="text">{{ textArray[8] }}</p>
    <p v-if="show > 9" class="text">{{ textArray[9] }}</p>
    <p class="text">{{ lineText }}<span class="cursor">&nbsp;</span></p>
  </section>
  </div>
</template>

<style scoped>
.layout-loading {
  position: relative;
  width: 100dvw;
  height: 100dvh;
}

.loading-wrapper {
  position: absolute;
  top: 40px;
  left: 40px;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  /* transition: all 0.3s 4s; */
}

.loading {
  opacity: 1;
  visibility: visible;
}

.text {
  width: 550px;
  text-align: left;
  margin: 0;
  padding: 0;
  font-style: normal;
  color: var(--color-text-green);
  font-size: 24px;
  font-weight: 400;
  font-family: var(--font-handjet);
  text-shadow: var(--text-shadow-parametrs);
  /* animation: text-effect-glow  5s linear infinite; */
}

.cursor {
  display: inline-block;
  background-color: var(--color-text-green);
  margin-left: 0.5rem;
  width: 8px;
  animation: blink 1s infinite;
  text-shadow: var(--text-shadow-parametrs);
  /* animation: text-effect-glow  5s linear infinite; */
}

@keyframes blink {
  0% {
    background-color: var(--color-text-green);
  }

  49% {
    background-color: var(--color-text-green);
  }

  50% {
    background-color: transparent;
  }

  99% {
    background-color: transparent;
  }

  100% {
    background-color: var(--color-text-green);
  }
}

@media (max-width: 700px) {
  .text {
    width: calc(100dvw - 60px);
  }
}
</style>
