// https://nuxt.com/docs/api/configuration/nuxt-config
import { definePerson } from 'nuxt-schema-org/schema';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", sizes: "120x120", href: "/favicon-120x120.png" },
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" }, 
      ],
        meta: [
    { name: "yandex-verification", content: "fca727eaa2be41f5" },
  ]
    },
  },
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
