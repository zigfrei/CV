<script setup lang="ts">
interface Props {
    status?: 'active' | 'archived' | 'upcoming';
}
const props = defineProps<Props>();

const imageSrc = computed(() => {
    switch (props.status) {
        case 'active':
            return 'icons:active-black';
        case 'archived':
            return 'icons:archived-black';
        case 'upcoming':
            return 'icons:upcoming-black';
        default:
            return '';
    }
});
</script>

<template>
    <div class="label-wrapper">
        <icon size="16px" :name="imageSrc" mode="svg"/>
        <span class="label font-b5">{{ status }}</span>
    </div>
</template>

<style scoped>
.label-wrapper {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 4px;
  border: 1px solid var(--color-black);
  /* background-color: var(--color-black);
  color: var(--color-text-green); */
  text-shadow: var(--text-shadow-parametrs);
    background-color: var(--color-text-green);
    color: var(--color-black);

}
.label {
  text-transform: capitalize;
}
</style>