# Iulian Malovanyi — Personal Site

Personal website, portfolio, and a learning-in-public hub for robotics &
electronics. Built with **Astro + Tailwind + MDX**, bilingual (English default,
Ukrainian under `/uk`).

> The authoritative spec for this project is [`BRIEF.md`](./BRIEF.md). Read it
> before making changes.

## Tech stack

- **Framework:** Astro (content collections + MDX)
- **Styling:** Tailwind CSS v4 (design tokens in `src/styles/global.css`)
- **i18n:** Astro built-in routing — `en` at the root, `uk` under `/uk`
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
    writing/      Blog posts — writing/en/<slug>.mdx + writing/uk/<slug>.mdx
  i18n/           UI-strings dictionaries (en/uk) + helpers
  layouts/        Shared page layouts
  pages/          Routes (en at root, uk under /uk)
  styles/         global.css — design tokens + Tailwind
public/           Static assets (favicon, CV, OG images)
```

## Adding content

Full non-developer instructions for adding an article in both languages are
documented in M7 (see `BRIEF.md` §11). In short: copy the English template
`.mdx`, then copy it into the `uk/` folder and translate the prose — keeping
technical terms in English.

## Milestones

Build proceeds milestone by milestone (see `BRIEF.md` §9): M0 scaffold ·
M1 design system · M2 home/about · M3 projects · M4 writing · M5 learning hub
shell · M6 lessons · M7 polish.
