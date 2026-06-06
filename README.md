# Iulian Malovanyi — Personal Site

Personal website, portfolio, and a learning-in-public hub covering product
management, reading/book notes, robotics & electronics, and personal growth.
Built with **Astro + Tailwind + MDX**. English-only for now (the bilingual
version was removed — see `DECISIONS.md`).

> The authoritative spec for this project is [`BRIEF.md`](./BRIEF.md). Read it
> before making changes.

## Tech stack

- **Framework:** Astro (content collections + MDX)
- **Styling:** Tailwind CSS v4 (design tokens in `src/styles/global.css`)
- **Language:** English-only (`<html lang="en">`). UI strings are centralised in
  `src/i18n/ui.ts` via a small `t()` helper.
- **Deploy:** local for now (`npm run dev`); host + custom domain TBD

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the local dev server (http://localhost:4321)
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  content/        Content collections (articles, lessons, projects)
    writing/      Blog posts — writing/<slug>.mdx
  i18n/           Centralised UI strings (ui.ts) + t() helper
  layouts/        Shared page layouts
  pages/          Routes
  styles/         global.css — design tokens + Tailwind
public/           Static assets (favicon, CV, OG images)
```

## Adding content

Full non-developer instructions for adding an article are documented in M7. In
short: copy the template `.mdx` into the relevant collection folder and edit the
frontmatter + prose.

## Milestones

Build proceeds milestone by milestone (see `BRIEF.md` §9): M0 scaffold ·
M1 design system · M2 home/about · M3 projects · M4 writing · M5 learning hub
shell · M6 lessons · M7 polish.
