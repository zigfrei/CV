<script setup lang="ts"></script>

<template>
  <header class="header">
    <nuxt-link to="/" class="logo">
      <nuxt-img
        src="/logo.png"
        alt="Logo"
        width="64"
        height="64"
        class="logo-image"
      />
    </nuxt-link>
    <nav class="main">
      <nuxt-link to="#" class="main-link font-b4"> > DEMO </nuxt-link>
      <nuxt-link to="#" class="main-link font-b4"> > ROOT </nuxt-link>
      <nuxt-link to="#" class="main-link font-b4"> > EXAMPLE </nuxt-link>
      <nuxt-link to="#" class="main-link font-b4"> > LOCALE </nuxt-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 40px;
  max-width: 1920px;
  gap: 32px;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 80px;
  height: 80px;
  border: 1px solid var(--color-text-green);
  flex-shrink: 0;
}

.logo-image {
  transition: transform 0.3s ease;
}

.logo:hover .logo-image {
  transform: scale(1.1);
}

.main-link {
  color: var(--color-text-green);
  transition: color 0.3s ease;
  text-decoration: none;
  text-shadow: var(--text-shadow-parametrs);
}

.main-link:hover {
  color: var(--color-lemon);
}

.main {
  width: 100%;
  height: auto;
  border: 1px solid var(--color-text-green);
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 32px;
}

@media (max-width: 1100px) {
.header {
  /* width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 40px;
  max-width: 1920px;
  gap: 32px; */
  padding: 12px 16px;
  gap: 12px;
}

.logo {
  /* display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 80px;
  height: 80px;
  border: 1px solid var(--color-text-green);
  flex-shrink: 0; */
}

.logo-image {
  /* transition: transform 0.3s ease; */
}

.logo:hover .logo-image {
  /* transform: scale(1.1); */
}

.main-link {
  /* color: var(--color-text-green);
  transition: color 0.3s ease;
  text-decoration: none;
  text-shadow: var(--text-shadow-parametrs); */
  display: none;
}

.main-link:hover {
  /* color: var(--color-lemon); */
}

.main {
  /* width: 100%;
  height: auto;
  border: 1px solid var(--color-text-green);
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 32px; */
  height: 80px;
}
}
</style>
