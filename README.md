# Semeniuk Drift School — сайт школы дрифта Дмитрия Семенюка

Статический сайт на [Astro](https://astro.build). Новый сайт школы дрифта Дмитрия Семенюка
(Semeniuk Drift School), заточенный под поисковые запросы по обучению дрифту и персоне
Дмитрия Семенюка. Гео-фокус — Краснодар и Краснодарский край.

## Страницы

- Главная — `/`
- Дмитрий Семенюк — `/dmitrij-semenyuk/`
- Обучение — `/obuchenie/`
- Цены — `/ceny/`
- Ученики — `/ucheniki/`
- FAQ — `/faq/`
- Контакты — `/kontakty/`

## Запуск

```bash
npm install
npm run dev       # режим разработки (http://localhost:4321)
npm run build     # сборка в dist/
npm run preview   # предпросмотр собранной версии
```

## Структура

- `src/config.ts` — контакты, телефон, домен (меняется в одном месте)
- `src/data/content.ts` — цены, ученики, FAQ, достижения, хронология
- `src/styles/global.css` — дизайн-система (палитра, шрифты, компоненты)
- `src/layouts/`, `src/components/`, `src/pages/` — макет, компоненты, страницы
- `public/` — изображения, favicon, robots.txt

## Прочее

- Яндекс.Метрика: счётчик `103437129` (подключён в `src/layouts/BaseLayout.astro`)
- Канонический домен: `https://schooldrift.ru` (меняется в `src/config.ts` → `site.url`)
