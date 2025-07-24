<script setup lang="ts">
const faqData = [
  {
    question: 'Как со мной лучше всего связаться?',
    answer:
      'Самый оперативный способ связаться со мной — написать в Telegram: @georrg55 или в LinkedIn: Георгий Ревазашвили. Обычно отвечаю в течение 1 рабочего дня. Для формальных запросов или предложений о сотрудничестве вы также можете использовать электронную почту: georgyrevazashvili@yandex.ru.',
  },
  {
    question:
      'Над какими типами проектов вы специализируетесь или предпочитаете работать?',
    answer:
      'Люблю верстать динамические лендинги с продуманной анимацией для усиления вовлеченности пользователей и конверсии. Разрабатвать интерактивные пользовательские интерфейсы с заботой о пользователе. Фронтенд SEO-оптимизация: семантическая верстка, динамические мета-теги, микроразметка, улучшение скорости загрузки.',
  },
  {
    question: 'Какие технологии и инструменты составляют ваш основной стек?',
    answer:
      'Мой основной стек включает в себя Vue.js, метафреймворк Nuxt, а также в меньшей степени React (Next).',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

useHead({
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(faqSchema) },
  ],
});
</script>

<template>
  <section class="faq-wrapper">
    <div class="faq__content">
      <base-faq
        v-for="(item, index) in faqData"
        :key="index"
        :question="item.question"
        :answer="item.answer"
      >
        <template #title>
          <h3 class="font-p">
            {{ item.question }}
          </h3>
        </template>
        <template #details>
          <p class="accordion__text font-pp">
            {{ item.answer }}
          </p>
        </template>
      </base-faq>
    </div>
  </section>
</template>

<style scoped>
.faq-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: var(--color-background); */
}

.faq__content {
  width: 100%;
  max-width: 800px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.accordion__text {
  /* color: var(--color-text-secondary); */
}
</style>
