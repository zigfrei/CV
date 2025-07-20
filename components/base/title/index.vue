<template>
  <h2 class="common-title font-h2">
    <slot />
  </h2>
</template>

<style scoped>
.common-title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-green);
  padding: 16px;
  border-top: 1px dashed var(--color-text-green);
  border-bottom: 1px dashed var(--color-text-green);
}
</style>
