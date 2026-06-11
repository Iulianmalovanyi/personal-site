# Personal site

My personal website — a short portfolio, a reading list with notes, and a place
to write as I learn. Built with [Astro](https://astro.build) and Tailwind CSS.

## Develop

```bash
npm install      # install dependencies
npm run dev      # local dev server (http://localhost:4321)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Project layout

```
src/
  pages/        Routes
  components/   UI components
  content/      Content collections (projects, reading)
  layouts/      Shared page layout
  styles/       global.css — design tokens + Tailwind
public/         Static assets (images, CV, favicon)
```

## Content

Projects and reading entries are simple content files under `src/content/`.
Adding one is a matter of creating a new file in the relevant folder and filling
in its fields — no code changes required.
