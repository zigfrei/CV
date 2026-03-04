<script setup lang="ts">

const { t } = useI18n();

const faqData = [
  {
    question: t('faq.question1'),
    answer: t('faq.answer1'),
  },
  {
    question: t('faq.question2'),
    answer: t('faq.answer2'),
  },
  {
    question: t('faq.question3'),
    answer: t('faq.answer3'),
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
