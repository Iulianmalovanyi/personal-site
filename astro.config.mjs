// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// NOTE: `site` is a placeholder until a real domain is chosen.
// It's used for canonical URLs, sitemap, and RSS — update it before going live.
// The site is English-only for now (the bilingual version was removed — see
// DECISIONS.md), so no i18n routing is configured.
export default defineConfig({
  site: 'https://iulian.example',

  integrations: [mdx(), sitemap()],
});
