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

// Learning Hub lessons. One file per lesson, grouped by topic folder:
// src/content/lessons/<topic>/<order>-<slug>.mdx — the topic is the folder name.
// The §5.4 template: most sections are structured frontmatter; the MDX body holds
// "the concept, in plain language" + embedded diagram components.
const lessons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(100), // order within the topic
    objective: z.string(), // "After this lesson you'll be able to …"
    why: z.string(), // why it matters for a PM
    summary: z.string(), // meta description + topic listing
    keyTerms: z.array(z.object({ term: z.string(), definition: z.string() })).default([]),
    check: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    resources: z.array(z.object({ label: z.string(), url: z.string().url().optional() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { reading, projects, lessons };
