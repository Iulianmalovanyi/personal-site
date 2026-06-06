// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// NOTE: `site` is a placeholder until a real domain is chosen.
// It's used for canonical URLs, sitemap, and RSS — update it before going live.
export default defineConfig({
  site: 'https://iulian.example',

  // English is the default locale, served at the root with NO prefix.
  // Ukrainian is served under /uk. See BRIEF.md §11.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [mdx(), sitemap()],
});
