<script setup lang="ts"></script>

<template>
  <aside class="resume-aside">
    <div class="contats">
      <base-title>Контакты</base-title>
      <ul class="contact-list">
        <li class="contact-item">
          <icon size="32px" name="icons:mail" class="hover-scale-light" />
          <div class="contact-item-text">
            <p class="contact-item-title font-b4">Электронная почта</p>
            <nuxt-link
              to="mailto:georgyrevazashvili@yandex.ru"
              class="contact-item-link font-b5"
              >georgyrevazashvili@yandex.ru</nuxt-link
            >
          </div>
        </li>

        <li class="contact-item">
          <nuxt-link
            to="https://t.me/georrg55"
            target="_blank"
            class="contact-item-link-icon"
            ><icon size="32px" name="icons:telegram" class="hover-scale-light"
          /></nuxt-link>
          <div class="contact-item-text">
            <p class="contact-item-title font-b4">Телеграм</p>
            <nuxt-link
              to="https://t.me/georrg55"
              target="_blank"
              class="contact-item-link font-b5"
              >t.me/georrg55</nuxt-link
            >
          </div>
        </li>

        <li class="contact-item">
          <nuxt-link
            to="https://www.linkedin.com/in/georgyrevazashvili/"
            target="_blank"
            class="contact-item-link-icon"
            ><icon size="32px" name="icons:linkedin" class="hover-scale-light"
          /></nuxt-link>
          <div class="contact-item-text">
            <p class="contact-item-title font-b4">LinkedIn</p>
            <nuxt-link
              to="https://www.linkedin.com/in/georgyrevazashvili/"
              target="_blank"
              class="contact-item-link font-b5"
              >linkedin.com/in/georgyrevazashvili</nuxt-link
            >
          </div>
        </li>

        <li class="contact-item">
          <nuxt-link
            to="https://github.com/zigfrei"
            target="_blank"
            class="contact-item-link-icon"
            ><icon size="32px" name="icons:github" class="hover-scale-light"
          /></nuxt-link>
          <div class="contact-item-text">
            <p class="contact-item-title font-b4">GitHub</p>
            <nuxt-link
              to="https://github.com/zigfrei"
              target="_blank"
              class="contact-item-link font-b5"
              >github.com/zigfrei</nuxt-link
            >
          </div>
        </li>
      </ul>
    </div>

      <base-title>Навыки</base-title>
      <div class="skills">
        <p class="paragraf-title font-b3">Знание языков</p>
        <p class="paragraf-text font-b4">Русский - родной</p>
        <p class="paragraf-text font-b4">
          Английский - B2 - Upper Intermediate
        </p>
      </div>
      <div class="skills">
        <p class="paragraf-title font-b3">Программирование</p>
        <p class="paragraf-text font-b4">
          <span class="paragraf-text-main">Основные:</span> HTML, CSS,
          JavaScript, TypeScript, Vue3, Nuxt3, Vuetify, Git, SEO оптимизация,
          верстка писем HTML, Progressive Web App, CSS анимации
        </p>
        <p class="paragraf-text font-b4">
          <span class="paragraf-text-main">Знаком с:</span> React.js, Next.js,
          Redux Toolkit, Node.js (NestJS), jQuery, Jest, Storybook, Wordpress
        </p>
      </div>
      <base-title>Хобби</base-title>
      <div class="hobby">
        <icon size="48px" name="icons:gym-icon" />
        <icon size="48px" name="icons:game-icon" />
        <icon size="48px" name="icons:book-icon" />
        <icon size="48px" name="icons:cooking-icon" />
        <icon size="48px" name="icons:forest-icon" />
      </div>
  </aside>
</template>

<style scoped>
.resume-aside {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 32px 16px;
  border-right: thick double var(--color-text-green);
  gap: 16px;
}

.contats {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.contact-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-item {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
}

.contact-item-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
}

.contact-item-title {
  color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs);
}

.contact-item-link {
  color: var(--color-text-green);
  text-decoration: none;
  transition: color 0.3s ease;
  text-shadow: var(--text-shadow-parametrs);
}
.contact-item-link:hover {
  color: var(--color-lemon);
}

.skills {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
}

.paragraf-title {
  width: 100%;
  text-align: left;
  padding: 0 0 0 5px;
  color: var(--color-black);
  background-color: var(--color-text-green);
}

.paragraf-text {
  color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs);
}

.paragraf-text-main {
  text-decoration: underline;
}

.hobby {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}

@media (max-width: 1100px) {
.resume-aside {
  /* width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 32px 16px;
  border-right: thick double var(--color-text-green);
  gap: 16px; */
  border: none;
}

.contats {
  /* width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px; */
}

.contact-list {
  /* width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;
  list-style: none;
  padding: 0;
  margin: 0; */
}

.contact-item {
  /* width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px; */
}

.contact-item-text {
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px; */
}

.contact-item-title {
  /* color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs); */
}

.contact-item-link {
  /* color: var(--color-text-green);
  text-decoration: none;
  transition: color 0.3s ease;
  text-shadow: var(--text-shadow-parametrs); */
}
.contact-item-link:hover {
  /* color: var(--color-lemon); */
}

.skills {
  /* width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px; */
}

.paragraf-title {
  /* width: 100%;
  text-align: left;
  padding: 0 0 0 5px;
  color: var(--color-black);
  background-color: var(--color-text-green); */
}

.paragraf-text {
  /* color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs); */
}

.paragraf-text-main {
  /* text-decoration: underline; */
}

.hobby {
  /* width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px; */
}


}
</style>
