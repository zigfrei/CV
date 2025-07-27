// https://nuxt.com/docs/api/configuration/nuxt-config
import { definePerson } from 'nuxt-schema-org/schema';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: [
    'nuxt-schema-org',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/seo',
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
    identity: definePerson({
      // Basic Information, if applicable
      name: 'Ревазашвили Георгий',
      givenName: 'Георгий',
      familyName: 'Ревазашвили',
      additionalName: 'Владимирович', // middle name or other additional names
      alternateName: 'Георгий Д. Ревазашвили',

      // Profile Information, if applicable
      image: '/avatar-photo.jpg',
      description:
        'Фронтенд разработчик с опытом работы в веб-разработке и мобильной разработке. Специализируюсь на создании адаптивных и доступных веб-приложений с использованием современных технологий и инструментов.',
      jobTitle: 'Фронтенд разработчик',

      // Contact & Social, if applicable
      email: 'georgyrevazashvili@yandex.ru',
      url: 'https://revaz.vercel.app/',
      sameAs: [
        'https://www.linkedin.com/in/zigfrei',
        'https://github.com/zigfrei',
      ],

      // Professional Details, if applicable
      worksFor: {
        '@type': 'Organization',
        name: 'Switch Case',
        url: 'https://switchcase.dev',
      },
    }),
  },
  plugins: [{ src: '~/plugins/yaMetrica.ts', mode: 'client' }],
});
