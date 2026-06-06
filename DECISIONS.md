# Decisions log

Amendments and clarifications agreed during the build. `BRIEF.md` is the
original authoritative spec; this file records where we've consciously deviated
or extended it. Most recent first.

## 2026-06-06 (latest)

### Site is English-only — Ukrainian version removed
The bilingual setup was removed and the site is now English-only. Reason:
machine translation quality wasn't good enough, and maintaining a correct,
separate Ukrainian version of every article would roughly 2–3× the content
effort. Removed: `/ua` routes, the language switcher, Astro i18n config,
`hreflang`/`og:locale` locale logic, and the per-locale content-folder
convention. Kept: centralised UI strings in `src/i18n/ui.ts` (now English-only,
via a `t()` helper). `<html lang="en">` everywhere.

The bilingual implementation remains in git history (commit `3bb6cb8`) if a
language is re-added later — at which point the §11 i18n rules in the brief apply
again.

## 2026-06-06 (later)

### i18n: Ukrainian URL path is `/ua`, language code stays `uk`
The Ukrainian version is served under the URL path **`/ua`** (so it doesn't read
as "United Kingdom"), but the **language code remains `uk`** — the correct ISO
639-1 / BCP 47 tag. `ua` is a country code and must never appear in `<html lang>`
or `hreflang`. Implemented via Astro's object locale syntax
(`{ path: 'ua', codes: ['uk'] }`) and a path↔code map in `src/i18n/ui.ts`.
Content folders use `ua/` to match the URL; the emitted language tag is still
`uk`. Switcher label for Ukrainian: "УКР".

## 2026-06-06

### Workflow: local-first, no auto-push
Work happens locally and is committed locally. **Do not push to the remote**
until explicitly told. (Initial M0/M1 commits were already pushed before this.)

### Scope: Learning Hub is broader than robotics & electronics
The brief framed `/learn` narrowly as the "Robotics & Electronics for PMs"
course. Agreed reframing: `/learn` is a self-development **umbrella hub** with
multiple **tracks**, of which Robotics & Electronics is one:

- **Robotics & Electronics for PMs** — the structured, phased course from
  `Hardware-Software-PM-Roadmap.md` (deep, sequential). Still the flagship track.
- **Bookshelf** — books read, with reviews and notes.
- **PM Craft** — product-management learnings.
- **Personal Growth** — reflections on developing as a PM and a person.

`/writing` remains the dated, chronological blog (essays, reflections, progress
logs), cross-cutting and tagged. The Hub is evergreen/structured; Writing is the
stream. §5 of the brief (lesson template, accuracy rules) still governs the
Robotics track specifically.

### About copy / CV
Real bio + CV PDF to be supplied by the author later. Until then, About uses
clearly-marked placeholder copy (`TODO: verify`) and the CV button shows a
"coming soon" state. LinkedIn: https://www.linkedin.com/in/iulian-malovanyi/

## Earlier

### M0: Tailwind via PostCSS, not the Vite plugin
Astro 6 ships a rolldown-based Vite that is incompatible with
`@tailwindcss/vite` (build error: missing `tsconfigPaths`). We use
`@tailwindcss/postcss` instead — same Tailwind v4, same tokens.

### M1: Fonts imported in the layout, not via CSS @import
`@import "@fontsource-..."` inside the Tailwind-processed CSS did not emit the
woff2 files (they 404'd). Fonts are imported as JS modules in `BaseLayout.astro`
so Vite rebases the URLs and ships the files.
