// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// NOTE: `site` is a placeholder until a real domain is chosen.
// It's used for canonical URLs, sitemap, and RSS — update it before going live.
export default defineConfig({
  site: 'https://iulian.example',

  // English is the default locale, served at the root with NO prefix.
  // Ukrainian is served under the URL path /ua, but its language CODE is `uk`
  // (correct ISO 639-1 / BCP 47 tag). `ua` is only a URL path, never a lang tag.
  // See BRIEF.md §11 and DECISIONS.md.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', { path: 'ua', codes: ['uk'] }],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [mdx(), sitemap()],
});
