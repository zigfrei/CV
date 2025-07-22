<script setup lang="ts">
interface Props {
  isOpen?: boolean;
  question?: string;
  answer?: string;
}

const props = defineProps<Props>();
const isOpen = ref(props.isOpen || false);
const headerRef = ref<HTMLElement | undefined>();
const detailsRef = ref<HTMLElement | undefined>();



const headerHeight = computed(() => {
  if (headerRef.value && headerRef.value instanceof HTMLElement) {
    return headerRef.value.offsetHeight +  32 + "px"; //header + padding
  }
  return "32px";
});

const detailsHeight = computed(() => {
  if (
    detailsRef.value &&
    headerRef.value &&
    detailsRef.value instanceof HTMLElement &&
    headerRef.value instanceof HTMLElement
  ) {
    return (
      detailsRef.value.offsetHeight +
      headerRef.value.offsetHeight +
       16 +
       32 +
      "px"
    ); //details + header + gap + padding
  }
  return "48px";
});

function toggleDetails() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <section :class="['faq-box', { open: isOpen }]" >
    <div ref="headerRef" class="faq-box-flex font-b3" @click="toggleDetails">
      <slot name="title" />
      <button :class="['plusminus', { active: isOpen }]" />
    </div>
    <div ref="detailsRef" class="faq-box-details font-b4">
      <slot name="details" />
    </div>
  </section>
  <details v-show="false" :open="isOpen">
    <summary >{{ props.question }}</summary>
    <p>
      {{ props.answer }}
    </p>
  </details>
</template>

<style scoped>
.faq-box {
  position: relative;
  width: 100%;
  min-width: 310px;
  height: auto;
  max-height: v-bind(headerHeight);
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  padding: 16px 24px;
  border-radius: 16px;
  background-color: transparent;
  border: 1px dashed var(--color-text-green);
}

.faq-box-flex {
  cursor: pointer;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.plusminus {
  flex-shrink: 0;
  position: relative;
  width: 24px;
  height: 24px;
  cursor: pointer;
  padding: 0;
  margin: 0;
  outline: none;
  background-color: transparent;
  border: none;
}

.plusminus:before,
.plusminus:after {
  content: "";
  display: block;
  background-color: var(--color-text-green);
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 0.35s;
  width: 16px;
  height: 2px;
  border-radius: 2px;
}

.plusminus:before {
  transform: translate(-50%, -50%);
}

.plusminus:after {
  transform: translate(-50%, -50%) rotate(90deg);
}

.plusminus.active:before {
  opacity: 0;
}

.plusminus.active:after {
  transform: translate(-50%, -50%) rotate(180deg);
  height: 2px;
  width: 16px;
  border-radius: 2px;
}

.open {
  gap: 16px;
  max-height: v-bind(detailsHeight);
}

@media (max-width: 820px) {
  .faq-box {
    gap: 16px;
    padding: 16px;
  }

  .open {
    gap: 8px;
  }

  .plusminus {
    width: 24px;
    height: 24px;
  }

  .plusminus:before,
  .plusminus:after {
    width: 13px;
    height: 2px;
  }

  .plusminus.active:after {
  height: 2px;
  width: 13px;
}
}
</style>
