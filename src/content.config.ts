import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Content collections are configured from the start (BRIEF.md §9 / M0).
// Each collection stores content per locale so a page/article has an English
// file and a Ukrainian file sharing a slug (BRIEF.md §11). The locale is the
// top-level folder, e.g. src/content/writing/en/<slug>.mdx.
// Schemas are intentionally minimal for M0 and expand in M3/M4/M5.

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
