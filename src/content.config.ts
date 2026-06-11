import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Content collections are configured from the start (BRIEF.md §9 / M0).
// The site is English-only, so entries live directly in each collection folder,
// e.g. src/content/reading/<slug>.md (no per-locale subfolders).

// Reading: a list of books I've read recently, each with a short review.
// One entry = one file (see README). Ordered by `order` (lower first).
const reading = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reading' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    review: z.string(), // short feedback / thoughts
    rating: z.number().min(0).max(5).optional(), // out of 5 (supports halves)
    url: z.string().url().optional(), // optional link to the book
    order: z.number().default(100), // lower shows first
  }),
});

// Projects are shown as a stacked, expandable list on /projects (one entry =
// one file). githubUrl is required; liveUrl is optional (link omitted if absent).
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(), // collapsed row
    fullDescription: z.string(), // expanded view
    githubUrl: z.string().url(),
    liveUrl: z.string().url().optional(),
    image: z.string().optional(), // optional screenshot in /public (shown when expanded)
    imageAlt: z.string().optional(),
    features: z.array(z.string()).optional(), // "what you can do" bullet list
    order: z.number().default(100), // lower shows first
  }),
});

export const collections = { reading, projects };
