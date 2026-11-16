// Единый источник данных о сайте и контактах школы.
// Меняйте значения здесь — они подхватятся на всех страницах.

export const site = {
  name: 'Semeniuk Drift School',
  shortName: 'Semeniuk DS',
  founder: 'Дмитрий Семенюк',
  founderShort: 'Дмитрий Семенюк',
  url: 'https://schooldrift.ru',
  // Канонический домен для SEO и sitemap
  description:
    'Школа дрифта Дмитрия Семенюка в Краснодарском крае. Обучение дрифту без ручника по авторской методике основателя RDS. Гоночные Toyota Mark II, трасса СТК «Пилот» в Усть-Лабинске.',
  phone: '+79147060711',
  phoneDisplay: '+7 914 706-07-11',
  phoneHref: 'tel:+79147060711',
  telegram: 'https://t.me/semeniukd',
  telegramHandle: '@semeniukd',
  whatsapp: 'https://wa.me/79147060711',
  whatsappDisplay: 'WhatsApp',
  instagram: 'https://www.instagram.com/schooldrift',
  instagramHandle: '@schooldrift',
  email: 'semeniuk@d7racingteam.ru',
  address: 'СТК «Пилот», г. Усть-Лабинск, Краснодарский край',
  addressShort: 'Усть-Лабинск, Краснодарский край',
  city: 'Краснодар',
  region: 'Краснодарский край',
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: 'Главная', href: '/' },
  { label: 'Дмитрий Семенюк', href: '/dmitrij-semenyuk/' },
  { label: 'Обучение', href: '/obuchenie/' },
  { label: 'Цены', href: '/ceny/' },
  { label: 'Ученики', href: '/ucheniki/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Контакты', href: '/kontakty/' },
];

// Соцсети/мессенджеры для футера и блока контактов
export const contacts = [
  { label: 'Телефон', value: site.phoneDisplay, href: site.phoneHref, icon: 'phone' },
  { label: 'Telegram', value: site.telegramHandle, href: site.telegram, icon: 'telegram' },
  { label: 'WhatsApp', value: site.whatsappDisplay, href: site.whatsapp, icon: 'whatsapp' },
  { label: 'Instagram', value: site.instagramHandle, href: site.instagram, icon: 'instagram' },
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, icon: 'mail' },
] as const;
