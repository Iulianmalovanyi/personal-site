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
  content/        Content collections
    projects/     Projects — one file per project
    reading/      Books read — one file per book
  i18n/           Centralised UI strings (ui.ts) + t() helper
  layouts/        Shared page layouts
  pages/          Routes
  styles/         global.css — design tokens + Tailwind
public/           Static assets (favicon, CV, OG images)
```

## Adding content

Each section is a content collection, and **adding an item = adding one file**.

### Adding a book (Reading)

The `/reading` page lists books with a short review, most recent first.
Duplicate an existing file in `src/content/reading/`, rename it, and edit the
fields:

| Field | Required | Purpose |
|-------|----------|---------|
| `title` | yes | Book title |
| `author` | yes | Author name |
| `review` | yes | Your take. Start the value with `|`, then write paragraphs separated by a blank line |
| `rating` | no | Number out of 5 (e.g. `4.5`) — shown as stars; **books are sorted by rating, highest first**; omit the line for none (unrated go last) |
| `url` | no | Link to the book — omit the line if none |
| `order` | no | Tie-breaker when two books share a rating (lower shows first) |

### Adding a project

The `/projects` page is a stacked, expandable list. **Adding a project = adding
one file** in `src/content/projects/`. Copy `example-project.md`, rename it, and
edit the fields:

| Field | Required | Purpose |
|-------|----------|---------|
| `title` | yes | Project name (the collapsed row heading) |
| `shortDescription` | yes | One–two line summary shown in the collapsed row |
| `fullDescription` | yes | Longer text revealed when the row is expanded |
| `githubUrl` | yes | "View on GitHub" link (always shown) |
| `liveUrl` | no | "Live site" link — **omit the line entirely** if there's no live site |
| `image` | no | Screenshot shown when the row is expanded; put the file in `public/projects/` and use the path, e.g. `/projects/my-shot.png` |
| `imageAlt` | no | Alt text for the screenshot |
| `features` | no | A "What you can do" bullet list — a YAML list of short capability lines |
| `order` | no | Lower numbers appear first (defaults to 100) |

That's it — no code changes needed.

## Milestones

Build proceeds milestone by milestone (see `BRIEF.md` §9): M0 scaffold ·
M1 design system · M2 home/about · M3 projects · M4 writing · M5 learning hub
shell · M6 lessons · M7 polish.
