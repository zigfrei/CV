export interface CardItem {
  id: string;
  image: string;
  label: string;
  status?: 'active' | 'archived' | 'upcoming';
  link: string;
  additionalsCount?: number;
  gallery?: string[];
  url?: string;
}

export const cards: CardItem[] = [
  {
    id: '1',
    image: '/projects/1/main.png',
    label: 'Vue 3 / Nuxt',
    status: 'archived',
    link: '/projects/1',
    additionalsCount: 3,
    gallery: [
      '/projects/1/main_hero.png',
      '/projects/1/main_hero.png',
      '/projects/1/mobile_overview_small.mp4',
      '/projects/1/ads_overview.mp4',
      '/projects/1/leaderboard.png',
      '/projects/1/error.png',
      '/projects/1/main_locale.png',
      '/projects/1/advertisers.png',
      '/projects/1/events.png',
    ],
  },
  {
    id: '2',
    image: '/projects/2/main.png',
    label: 'Vue 3 / Nuxt',
    status: 'archived',
    link: '/projects/2',
    additionalsCount: 2,
    gallery: [
      '/projects/2/main_hero.png',
      '/projects/2/VOV_mobile_screen.mp4',
      '/projects/2/news.png',
      '/projects/2/single_news.png',
      '/projects/2/petiton_1.png',
      '/projects/2/petition_req.png',
      '/projects/2/profile.png',
      '/projects/2/quiz.png',
      '/projects/2/quiz_1.png',
      '/projects/2/quiz_2.png',
      '/projects/2/pwa.png',
    ],
  },
  {
    id: '3',
    image: '/projects/3/main.png',
    label: 'NDA',
    status: 'active',
    link: '/projects/3',
    additionalsCount: 5,
    url: 'https://tokenizer.estate/',
    gallery: [
      '/projects/3/1.png',
      '/projects/3/2.png',
      '/projects/3/3.png',
      '/projects/3/4.png',
    ],
  },
  {
    id: '4',
    image: '/projects/4/main.png',
    label: 'NDA',
    status: 'active',
    link: '/projects/4',
    url: 'https://marginrise.com/',
    gallery: ['/projects/4/1.png'],
  },
  {
    id: '5',
    image: '/projects/5/main.png',
    label: 'NDA',
    status: 'active',
    link: '/projects/5',
    url: 'https://retc.info/',
    gallery: [
      '/projects/5/1.png',
      '/projects/5/2.png',
      '/projects/5/3.png',
      '/projects/5/4.png',
    ],
  },
  {
    id: '6',
    image: '/projects/6/main.png',
    label: 'Vue 3 / Nuxt',
    status: 'archived',
    link: '/projects/6',
    additionalsCount: 1,
    gallery: ['/projects/6/1.png', '/projects/6/2.png'],
  },
  {
    id: '7',
    image: '/projects/7/main.png',
    label: 'Vue 3 / Nuxt',
    status: 'archived',
    link: '/projects/7',
    gallery: [
      '/projects/7/1.png',
      '/projects/7/2.png',
      '/projects/7/3.png',
      '/projects/7/4.png',
      '/projects/7/5.png',
    ],
  },
  {
    id: '8',
    image: '/projects/8/main.png',
    label: 'React / Next',
    status: 'archived',
    link: '/projects/8',
    gallery: [
      '/projects/8/1.png',
      '/projects/8/2.png',
      '/projects/8/3.png',
      '/projects/8/4.png',
      '/projects/8/5.png',
      '/projects/8/6.png',
      '/projects/8/7.png',
    ],
  },
  {
    id: '9',
    image: '/projects/9/main.png',
    label: 'HTML / CSS / JS',
    status: 'active',
    url: 'https://www.accu-traffic.ca/',
    link: '/projects/9',
    gallery: ['/projects/9/1.png'],
  },
];
