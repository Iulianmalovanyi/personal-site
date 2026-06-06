import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Content collections are configured from the start (BRIEF.md §9 / M0).
// The site is English-only for now, so articles live directly in the collection
// folder, e.g. src/content/writing/<slug>.mdx (no per-locale subfolders).
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
