<script setup lang="ts">
const show = ref(false);

onMounted(() => {
  show.value = true;
});
</script>

<template>
  <section class="resume" :class="{ 'fade-in': show }">
    <div class="resume-header">
      <nuxt-img
        src="/avatar7.png"
        alt="Logo"
        width="350"
        height="350"
        class="avatar-image"
      />
      <div class="header-text">
        <h1 class="font-h1 header-title">Георгий<br >Ревазашвили</h1>
        <p class="header-subtitle font-b1">Frontend-разработчик</p>
      </div>
    </div>
    <div class="resume-content">
      <main-page-aside />
      <div class="resume-main">
        <div class="resume-main-block">
          <base-title>Опыт работы</base-title>
          <p class="paragraf-title font-b3">Коммерческий опыт</p>
          <div class="paragraf-grid">
            <p class="paragraf-text paragraf-text-subtitle font-b4">
              Апрель 2024 — настоящее время
            </p>
            <div class="paragraf-grid-main">
              <nuxt-link
                to="https://switchcase.dev/"
                target="_blank"
                class="paragraf-link font-b4"
                >SwitchCase</nuxt-link
              >
              <p class="paragraf-text font-b4">Фронтенд разработчик</p>
              <p class="paragraf-text font-b4">
                Разработка адаптивных пользовательских интерфейсов: landing
                pages (сложная анимация: GSAP, Lottie, CSS), веб-приложения
                (админ-панели), UI-киты, SEO. Интеграция с бэкендом (REST API).
              </p>
            </div>
          </div>

          <div class="paragraf-grid">
            <p class="paragraf-text paragraf-text-subtitle font-b4">
              Сентябрь 2023 — Апрель 2024
            </p>
            <div class="paragraf-grid-main">
              <p class="paragraf-text font-b4">Частная практика — фриланс</p>
              <p class="paragraf-text font-b4">Фронтенд разработчик</p>
              <p class="paragraf-text font-b4">
                Next.js - разработка лендинга с галереей, формой обратной связи,
                адаптив, SEO.
              </p>
              <p class="paragraf-text font-b4">
                Разработка темы на Wordpress + Cart js.
              </p>
              <p class="paragraf-text font-b4">
                HTML+CSS+JS:
                <nuxt-link
                  to="https://www.accu-traffic.ca/"
                  target="_blank"
                  class="paragraf-link font-b4"
                  >www.accu-traffic.ca</nuxt-link
                >
              </p>
            </div>
          </div>

          <div class="paragraf-grid">
            <p class="paragraf-text paragraf-text-subtitle font-b4">
              Сентябрь 2023 — Апрель 2024
            </p>
            <div class="paragraf-grid-main">
              <p class="paragraf-text font-b4">Неоплачиваемая стажировка</p>
              <p class="paragraf-text font-b4">Фронтенд разработчик</p>
              <p class="paragraf-text font-b4">
                Разработка сайта курсов
                <nuxt-link
                  to="https://tesseramosaic.art/"
                  target="_blank"
                  class="paragraf-link font-b4"
                  >https://tesseramosaic.art/</nuxt-link
                >
              </p>
            </div>
          </div>

          <p class="paragraf-title font-b3">Учебный опыт</p>
          <div class="paragraf-grid">
            <p class="paragraf-text paragraf-text-subtitle font-b4">
              Май 2021 — Май 2023
            </p>
            <div class="paragraf-grid-main">
              <p class="paragraf-text font-b4">
                Фронтенд / фулстек разработчик
              </p>
              <p class="paragraf-text font-b4">
                В рамках обучения делались проекты с функционалом:
              </p>
              <p class="paragraf-text font-b5">
                1. Взаимодействие с API бэкэнда -добавление удаление фотаграфий,
                адаптивная верстка. Написание кода на Vanila JS c использование
                классов. Технологии: JavaScript, HTML, CSS, Webpack, БЭМ, работа
                с напарником - VSCode Live Share.
              </p>

              <p class="paragraf-text font-b5">
                2. SPA, Drag & Drop, авторизация/регистрпация пользователя,
                клиентский роутинг с редиректом, добавление/удаление заказов,
                история заказов. Технологии: React, Redux, React DND, WebSocket,
                TypeScript.
              </p>

              <p class="paragraf-text font-b5">
                3. Unit-тестирование, E2E тестирование с использованием Cypress,
                изучение алгоритмов и структур данных на практике. Технологии:
                React js, TypeScript, Jest, Cypress, yarn
              </p>

              <p class="paragraf-text font-b5">
                4. Фулстэкпроект - бэкэнд на виртуальном серваке (Яндекс Облако)
                Node.js(Nest), Nginx, сборка pm2. Проект на докер образах - их
                взаимодействие друг с другом через Docker Compose. Https -
                certbot. Фронтенд на React.js, Redux Toolkit, TypeScript.
              </p>
            </div>
          </div>

          <p class="paragraf-title font-b3">Нерелевантный опыт</p>
          <div class="paragraf-grid">
            <p class="paragraf-text paragraf-text-subtitle font-b4">
              Август 2011 — Август 2023
            </p>
            <div class="paragraf-grid-main">
              <p class="paragraf-text font-b4">ОАО «Гродно Азот»</p>
              <p class="paragraf-text font-b5">Ведущий инженер-технолог</p>
              <p class="paragraf-text font-b5">
                12 лет в химической промышленности - производство серной кислоты
                / олеума
              </p>
              <p class="paragraf-text font-b5">
                Аппаратчик > Начальник смены > Ведущий инженер-технолог
              </p>
            </div>
          </div>
        </div>

        <div class="resume-main-block">
          <base-title>Образование</base-title>
          <p class="paragraf-title font-b3">
            Дополнительное профессиональное образование, курсы
          </p>
          <div class="paragraf-grid">
            <p class="paragraf-text font-b4">2021-2023</p>
            <div class="paragraf-grid-main">
              <p class="paragraf-text font-b4">
                Фронтенд / фулстек разработчик
              </p>
              <p class="paragraf-text font-b5">
                Название программы курса: "Веб-разработчик плюс"
              </p>
              <p class="paragraf-text font-b5">Яндекс Практикум</p>
            </div>
          </div>

          <p class="paragraf-title font-b3">Высшее образование</p>
          <div class="paragraf-grid">
            <p class="paragraf-text font-b4">2006-2011</p>
            <div class="paragraf-grid-main">
              <p class="paragraf-text font-b4">Химик, инженер-технолог</p>
              <p class="paragraf-text font-b5">
                Специализация: "Основной органический и нефтехимический синтез"
              </p>
              <p class="paragraf-text font-b5">
                Белорусский государственный технологический университет
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="faq-content">
      <base-title>Часто задаваемые вопросы</base-title>
      <main-faq />
    </div>
  </section>
</template>

<style scoped>
.resume {
  opacity: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1520px;
  padding: 0 40px 64px 40px;
  transition: opacity 0.3s ease-in-out;
  /* border: thick double var(--color-text-green) */
}

.fade-in {
  opacity: 1;
}

.resume-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: thick double var(--color-text-green);
  padding: 16px 24px;
  gap: 32px;
}

.avatar-image {
}

.header-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  /* width: 100%; */
  gap: 32px;
  padding-right: 160px;
}

.header-title {
  color: var(--color-text-green);
}

.header-subtitle {
  color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs);
}

.resume-content {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(320px, 400px) 1fr;
  border: thick double var(--color-text-green);
}

.paragraf-title {
  width: 100%;
  text-align: left;
  padding: 0 0 0 5px;
  color: var(--color-black);
  background-color: var(--color-text-green);
}

.paragraf-text {
  text-wrap: balance;
  color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs);
}

.paragraf-link {
  color: var(--color-text-green);
  text-decoration: none;
  transition: color 0.3s ease;
  text-shadow: var(--text-shadow-parametrs);
}
.paragraf-link:hover {
  color: var(--color-lemon);
}

.paragraf-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 16px;
  border-bottom: 1px dashed var(--color-text-green);
  padding-bottom: 4px;
}

.paragraf-grid-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
}

.paragraf-separator {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed var(--color-text-green);
  margin: 1 16px 0;
}

.resume-main {
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
}

.resume-main-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
}

.faq-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  border: thick double var(--color-text-green);
}

@media (max-width: 1100px) {
  .resume {
    /* width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1520px;
  padding: 0 40px 64px 40px; */
    /* border: thick double var(--color-text-green) */
    padding: 0 16px 32px 16px;
  }

  .resume-header {
    /* width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: thick double var(--color-text-green);
  padding: 16px 24px;
  gap: 32px; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
  }

  .avatar-image {
  }

  .header-text {
    /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
   width: 100%;
  gap: 32px;
  padding-right: 160px; */
    padding: 0;
    gap: 12px;
    text-align: center;
    align-items: center;
  }

  .header-title {
    /* color: var(--color-text-green); */
  }

  .header-subtitle {
    /* color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs); */
  }

  .resume-content {
    /* width: 100%;
  display: grid;
  grid-template-columns: minmax(320px, 400px) 1fr;
  border: thick double var(--color-text-green); */
    grid-template-columns: minmax(320px, 1fr);
  }

  .resume-content > aside {
    order: 2;
  }

  .paragraf-title {
    /* width: 100%;
  text-align: left;
  padding: 0 0 0 5px;
  color: var(--color-black);
  background-color: var(--color-text-green); */
  }

  .paragraf-text {
    /* text-wrap: balance;
  color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs); */
  }

  .paragraf-text-subtitle {
    text-align: center;
    font-weight: 600;
  }

  .paragraf-link {
    /* color: var(--color-text-green);
  text-decoration: none;
  transition: color 0.3s ease;
  text-shadow: var(--text-shadow-parametrs); */
  }
  .paragraf-link:hover {
    /* color: var(--color-lemon); */
  }

  .paragraf-grid {
    /* width: 100%;
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 16px;
  border-bottom: 1px dashed var(--color-text-green);
  padding-bottom: 4px; */
    grid-template-columns: 1fr;
  }

  .paragraf-grid-main {
    /* width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px; */
  }

  .paragraf-separator {
    /* width: 100%;
  height: 1px;
  border-bottom: 1px dashed var(--color-text-green);
  margin: 1 16px 0; */
  }

  .resume-main {
    /* padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px; */
    padding: 16px 6px;
    gap: 12px;
  }

  .resume-main-block {
    /* width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px; */
  }
}
</style>
