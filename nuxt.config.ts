// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/seo',
    'nuxt-schema-org',
    '@nuxtjs/sitemap',
  ],
  css: ['~/assets/styles/main.css'],
  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: './assets/icons',
      },
    ],
  },
  schemaOrg: {
    enabled: true,
    identity: {
      type: 'Person',
      name: 'Ревазашвили Георгий',
      legalName: 'Ревазашвили Георгий',
      jobTitle: 'Фронтенд разработчик',
      // url: 'https://github.com/zigfrei',
      sameAs: [
        'https://www.linkedin.com/in/zigfrei',
        'https://github.com/zigfrei',
      ],
      // image: 'https://github.com/zigfrei/images/avatar.png',
      description:
        'Фронтенд разработчик с опытом работы в веб-разработке и мобильной разработке. Специализируюсь на создании адаптивных и доступных веб-приложений с использованием современных технологий и инструментов.',
      email: 'georgyrevazashvili@yandex.ru',
      knowsLanguage: [
        {
          '@type': 'Language',
          name: 'Русский',
          alternateName: 'Russian',
          proficiencyLevel: 'Native',
        },
        {
          '@type': 'Language',
          name: 'Английский',
          alternateName: 'English',
          proficiencyLevel: 'Professional working proficiency',
        },
      ],
    },
    defaults: false,
    reactive: true,
  },
});
