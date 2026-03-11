export interface CardItem {
  image: string;
  title: string;
  description: string;
  label: string;
  link: string;
}

export const cards: CardItem[] = [
  {
    image: 'https://placehold.co/600x400/0f140a/cbfb83?text=Project+1',
    title: 'FinTrack Dashboard',
    description: 'Панель аналитики для финансовых операций с интерактивными графиками и фильтрами в реальном времени.',
    label: 'Vue 3 / Nuxt',
    link: '#',
  },
  {
    image: 'https://placehold.co/600x400/0f140a/cbfb83?text=Project+2',
    title: 'CryptoVault',
    description: 'Лендинг для криптовалютного кошелька с мультиязычностью и адаптивной вёрсткой.',
    label: 'Nuxt / i18n',
    link: '#',
  },
  {
    image: 'https://placehold.co/600x400/0f140a/cbfb83?text=Project+3',
    title: 'PropMarket',
    description: 'Маркетплейс токенизированной недвижимости с каталогом объектов и системой фильтрации.',
    label: 'Vue 3 / TypeScript',
    link: '#',
  },
  {
    image: 'https://placehold.co/600x400/0f140a/cbfb83?text=Project+4',
    title: 'DevBoard',
    description: 'Внутренняя панель управления для команды разработки с Kanban-доской и метриками.',
    label: 'Nuxt / Pinia',
    link: '#',
  },
  {
    image: 'https://placehold.co/600x400/0f140a/cbfb83?text=Project+5',
    title: 'EventHub',
    description: 'Платформа для управления мероприятиями с регистрацией участников и email-уведомлениями.',
    label: 'Vue 3 / SSR',
    link: '#',
  },
];
