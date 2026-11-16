// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE || 'https://schooldrift.ru';
const base = process.env.BASE || '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  trailingSlash: 'always',
  compressHTML: true,
});
