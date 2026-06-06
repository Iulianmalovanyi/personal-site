# PROJECT BRIEF — Personal Site for Iulian Malovanyi

**Read this whole file before writing any code.** This is the authoritative spec for the website. Build it incrementally, milestone by milestone (see §9). Confirm each milestone runs and is deployed before starting the next.

---

## 1. What we're building & who it's for

A personal website that does three jobs at once:

1. **Positions Iulian as a product professional** — a regulated-product PM (NHS clinical software, 20k+ clinicians) moving into hardware-enabled / connected products.
2. **Hosts a portfolio** of projects, including small "live-coded" demos (embedded or linked) and PM case studies.
3. **Is a learning-in-public hub** — a blog for study progress, plus a structured, beginner-friendly **"Robotics & Electronics for Product Managers"** course built from the author's existing roadmap.

**Audiences:** recruiters and hiring managers in deep-tech / IoT / hardware (primary), peers in the PM/hardware community, and the author himself (the learning hub must actually be usable to study from).

**Author profile:** strong product/business background, **not** a deep software engineer. The learning content must be written for an intelligent non-engineer learning hardware from scratch, step by step.

**Languages:** the site is **bilingual** — **English by default**, with a complete **Ukrainian** version reached via a language switcher. Every page and every article must be translatable; English is the authoritative source version, Ukrainian is a translation that may lag behind. See §11.

---

## 2. Tech stack (use this unless there's a strong reason not to)

- **Framework:** Astro (latest stable). Chosen because the site is content-heavy, needs excellent performance/SEO, and the author will add articles over time. Ships minimal JS by default.
- **Content:** Astro Content Collections with **MDX** for articles (lets us embed diagrams/components inside prose).
- **Styling:** Tailwind CSS (latest). Use a small, centralised design-token layer (see §6) — do not scatter magic values.
- **Interactivity:** island components only where needed (theme toggle, progress tracker, nav). Keep the rest static.
- **Diagrams:** inline **SVG** components authored in code (no external image dependencies, fully themeable, zero copyright risk). See §7.
- **i18n:** Astro's built-in internationalised routing — `en` as the default locale (served at the root, no URL prefix) and `uk` served under `/uk`. See §11.
- **Deploy:** GitHub repo → Vercel or Netlify free tier. Set this up in Milestone 0 so there's a live URL from day one.
- **Node:** 18+ (the author may use the Claude Code native installer instead of npm — either is fine).

If you prefer Next.js, flag the trade-off first and wait for confirmation; default to Astro.

---

## 3. Site architecture

```
/                      Home
/about                 About + professional story + CV download
/projects              Portfolio grid
/projects/[slug]       Individual project case study
/writing               Blog index (learning-in-public + progress logs)
/writing/[slug]        Individual article
/learn                 Learning Hub landing ("Robotics & Electronics for PMs")
/learn/[phase]/[slug]  Individual lesson article
```

Global: sticky minimal header (logo/name, nav, **language switcher (EN/UK)**, theme toggle), footer (LinkedIn, email, RSS, GitHub). Every page has correct meta/OG tags (§8).

Every route above also exists under `/uk/…` for the Ukrainian version (English is the unprefixed default). The language switcher swaps to the equivalent page in the other language; if a Ukrainian translation doesn't exist yet, it falls back gracefully (see §11).

---

## 4. Page-by-page requirements

**Home** — Hero with name + a one-line positioning statement ("Product Manager building at the intersection of software and hardware — regulated digital health → connected products"). Below: 3 featured projects (cards), 3 latest articles, a short "what I'm learning right now" strip linking to the Learning Hub, and clear CTAs (View work · Read the learning hub · Connect on LinkedIn).

**About** — The transition narrative (regulated-product + QA background → hardware-enabled product leadership), a skills summary, and a CV download button (PDF placed in `/public`). Honest, first-person, concise.

**Projects** — Responsive grid of project cards. Each project page: problem, the author's role, stack/tools, key decisions & trade-offs, outcome/metrics, and — where it's a coded demo — an **embedded live demo** (StackBlitz/CodeSandbox iframe) or a link to a deployed demo + repo. Seed with: (a) the hardware capstone (connected-device project), (b) at least one PM case study (e.g. the clinical decision-support work, framed without breaching confidentiality), and (c) a placeholder for future live-coded experiments.

**Writing** — Reverse-chronological blog. Tags (e.g. `learning-log`, `hardware`, `product`). Per-article: title, date, reading time, tags, body (MDX), prev/next, and share-to-LinkedIn affordance. Generate an **RSS feed** and a **sitemap**.

**Learning Hub** — see §5. This is the centrepiece; treat it as a mini-course, not a blog category.

---

## 5. The Learning Hub — structure & content rules

### 5.1 Source of truth
The repo will contain `Hardware-Software-PM-Roadmap.md` (the author's roadmap). **That file is the authoritative source for what to teach, the sequence, and the depth of each topic.** Read it before generating any lesson. Do not contradict it or go deeper than its depth ratings (🟢 fluency / 🟡 conceptual / 🔴 awareness).

### 5.2 Hub landing page (`/learn`)
- Short intro: who this is for ("a product manager learning hardware from zero, in public") and how to use it.
- A visual **phase map** (SVG) showing Phases 1→5 and where the reader is.
- A **progress tracker**: mark lessons complete (persist in `localStorage`), show % per phase. (This is the one place `localStorage` is appropriate — it's the live site, not a sandbox.)
- Estimated time per phase (from the roadmap).

### 5.3 Lesson organisation
Create one lesson article per topic, grouped by the roadmap's phases plus its conceptual sections. At minimum, generate lessons for:
- **Foundations:** how a connected product fits together (the layer-stack model); the hardware product lifecycle; how hardware PM differs from software PM.
- **Phase 1:** electricity basics (V/I/R, power), digital vs analog, what an MCU is, sensors vs actuators, reading a schematic; the four Arduino starter exercises.
- **Phase 2:** firmware vs embedded vs app software; the main loop / interrupts / RTOS (conceptual); connectivity options (BLE/Wi-Fi/cellular/LoRa) and trade-offs; MQTT; OTA updates; power/battery basics; the ESP32 exercises.
- **Phase 3:** device→cloud→app end to end; fleet/device management; the capstone walk-through.
- **Phase 4:** lifecycle stage gates (EVT/DVT/PVT etc.); BOM/COGS/NRE/MOQ/yield/RMA; EU certification (CE, RED, EMC, RoHS/REACH).
- **Phase 5 / reference:** the terminology glossary (as a filterable reference page); interview-prep notes.

### 5.4 Lesson article template (use this exact structure for every lesson)
1. **Breadcrumb / "where this sits":** Phase X · Lesson Y of Z.
2. **Learning objective:** "After this lesson you'll be able to …" (1–2 outcomes).
3. **Why it matters for a PM:** the relevance hook (2–4 sentences).
4. **The concept, in plain language:** no assumed prior knowledge; use analogies; define every term on first use. Keep depth to the roadmap's rating for that topic.
5. **Diagram:** at least one labelled SVG illustration (§7).
6. **Hands-on (where relevant):** the Arduino/ESP32 exercise, with "what you should observe" so the reader knows it worked.
7. **Key terms:** glossary chips linking to the glossary page.
8. **Check yourself:** 2–3 short self-test questions (with collapsible answers).
9. **Resources:** 2–4 links (prefer the ones named in the roadmap).
10. **Prev / Next** navigation + "mark complete".

### 5.5 Content authoring & accuracy rules (important — the author learns from this)

**You (Claude Code) author the full lesson content** — write each lesson yourself from the roadmap and well-established fundamentals. The rules below are strict because the author studies from these pages.

- **Depth principle (the most important rule):** pitch every lesson at *conceptual depth for a non-engineer product manager*. Enough to understand what is happening, why it matters, and the trade-offs involved — **never** engineering/developer depth. No production code to memorise, no maths derivations, no exhaustive datasheet detail. Test each explanation against this question: *would this help a PM follow a technical conversation and make an informed product decision?* If yes, it's deep enough. If it's only useful to someone actually building the thing, it's too deep — cut it. The author is learning concepts, not becoming a developer.
- **No hallucination.** Explain only well-established fundamentals. **Do not invent** specific product prices, part numbers, spec values, or exam/cert details — if a concrete current figure is needed, leave a clearly marked `TODO: verify` placeholder rather than guessing. Prefer "roughly / typically / on the order of" over false precision.
- For anything regulatory (CE, RED, MDR, ISO standards): explain at a conceptual level and add a visible note: *"Regulatory detail — verify with a specialist before relying on it."*
- Keep a consistent beginner-friendly voice: short sentences, concrete examples and analogies, every term defined on first use, no unexplained jargon.
- **Technical terms stay in English in both language versions** — in the Ukrainian translation, keep methodology names, hardware/firmware terminology, and resource/course names in English (e.g. "firmware", "OTA", "Lean Six Sigma"), translating only the surrounding explanation.

---

## 6. Design direction

**Goal:** modern, editorial, confident — interesting but calm. Avoid both "boring corporate template" and "noisy over-animated" extremes. No generic AI-purple gradients, no glassmorphism soup.

**Art direction:**
- **Layout:** editorial / Swiss-influenced. Strong typographic hierarchy, generous whitespace, clear grid. A tasteful **bento-style** grid on the home page for featured work — used once, not everywhere.
- **Type:** a characterful display face for headings (a modern grotesque, or a contrasting serif) paired with a highly readable body face. For article/lesson body, optimise for reading: ~66–72ch line length, comfortable line-height, real vertical rhythm. Use a clean monospace for code/terms.
- **Colour:** neutral base (near-black / off-white) + **one** restrained accent used deliberately (links, active states, progress). Support **light and dark mode** with a toggle; pick a default that flatters the accent.
- **Motion:** subtle and purposeful only — gentle scroll-reveal, small hover micro-interactions, smooth theme transition. Respect `prefers-reduced-motion`. Nothing that moves on its own continuously.
- **Reading experience (lessons/articles):** sticky table-of-contents on desktop, reading-progress bar, estimated reading time, large readable headings, well-styled code blocks and callouts (info / warning / "PM takeaway" variants).

**Implement as tokens:** define colour, type scale, spacing, radius, and shadow as Tailwind theme tokens / CSS variables in one place so the whole site stays consistent and re-themeable.

**Accessibility is non-negotiable:** semantic HTML, keyboard navigable, visible focus states, WCAG AA contrast, alt text on every diagram, labelled controls.

---

## 7. Diagrams & illustrations

- Author diagrams as **reusable inline SVG components**, themed via the design tokens (so they adapt to light/dark). Examples needed: the layer-stack model (app→cloud→firmware→electronics→mechanical), the device→cloud→app data flow, the hardware lifecycle gate timeline, a simple breadboard/circuit concept sketch, the connectivity trade-off matrix.
- Keep them clean and conceptual, with clear labels — they're teaching aids, not engineering drawings.
- **Do not** pull in copyrighted images, branded logos, or stock photos of uncertain licence. Where a real photo belongs (e.g. the author's own Arduino build), leave a captioned placeholder for the author to drop in their own image.

---

## 8. SEO & LinkedIn sharing

- Per-page `<title>`, meta description, canonical URL.
- **Open Graph + Twitter card** tags on every page so links preview richly when shared on LinkedIn.
- **`hreflang` alternate tags** linking each page's English and Ukrainian versions, and a `lang` attribute matching the locale.
- Auto-generate a per-article **OG image** (title + section + accent) using an Astro OG-image approach. If that's too heavy for Milestone 1, use a clean static fallback OG image and add per-article generation later.
- `sitemap.xml`, `robots.txt`, and an RSS feed for `/writing`.
- Fast Core Web Vitals (Astro makes this easy — don't ship unnecessary JS).

---

## 9. Build sequence (milestones — do them in order, deploy after each)

- **M0 — Scaffold & deploy.** Astro + Tailwind + MDX + content collections, **with i18n routing configured from the start (`en` default, `uk` under `/uk`)**. One placeholder page in both locales. Push to GitHub, connect Vercel/Netlify, confirm a live URL. *Stop and report the URL.*
- **M1 — Design system.** Tokens (colour/type/space), layout primitives, header/footer, **language switcher (EN/UK)**, light/dark toggle, base typography, and a UI-strings dictionary (`en` + `uk`) for all chrome/labels. Build a `/styleguide` page demonstrating components.
- **M2 — Home + About** with real copy placeholders and CV download.
- **M3 — Projects** section + project schema + one fully built sample project (the capstone) + one PM case study.
- **M4 — Writing** blog + article schema + one sample post + RSS + sitemap + OG tags.
- **M5 — Learning Hub shell.** `/learn` landing, phase map SVG, lesson layout component implementing the §5.4 template, progress tracker, prev/next, glossary page scaffold.
- **M6 — Lessons.** Author lessons from `Hardware-Software-PM-Roadmap.md`, **one phase at a time**, following §5.4 and §5.5. Write the **English version first and stop for accuracy review**; once approved, produce the **Ukrainian translation** of that phase (terms stay in English per §5.5). Then move to the next phase.
- **M7 — Polish.** Accessibility pass, performance pass, OG-image generation, `hreflang`/SEO, 404 page, README with "how to add a new article (in both languages)" instructions for a non-developer.

After each milestone: list what changed, how to preview it locally (`npm run dev`), and confirm the deploy succeeded.

---

## 10. Constraints & guardrails

- Maintainability first: the author is not a developer. Adding a new article must be "create one `.mdx` file from a template" — document this in the README.
- Don't add heavy dependencies without explaining why. Prefer Astro-native solutions.
- No analytics/tracking that needs a cookie banner unless the author asks; if analytics is wanted, use a privacy-friendly, cookieless option and note it.
- Keep secrets out of the repo. If any service needs a key, use environment variables and document them.
- Ask before: changing the stack, adding paid services, or anything that would cost money.

---

## 11. Internationalisation (English default, Ukrainian secondary)

**Principle:** English is the default and authoritative version; Ukrainian is a complete parallel translation that may lag behind English. Nothing should ever appear half-translated or broken because a translation is missing.

**Routing**
- Use Astro's built-in i18n. `en` is the default locale served at the root with **no prefix** (`/about`, `/learn/...`); `uk` is served under `/uk` (`/uk/about`, `/uk/learn/...`).
- Set `<html lang>` per locale and emit `hreflang` alternates linking the two versions of each page (§8).

**Content structure**
- Store content per locale so each page/article has an English file and a Ukrainian file sharing a slug — e.g. `src/content/learn/en/<slug>.mdx` and `src/content/learn/uk/<slug>.mdx`. Same for `writing` and any other collection.
- Keep all UI/chrome strings (nav labels, buttons, "mark complete", "reading time", etc.) in locale dictionaries (`en.json` / `uk.json`), never hard-coded.

**Language switcher**
- In the header. Switching takes the reader to the **same page** in the other language.
- **Graceful fallback:** if the current page has no translation yet, either (a) keep the switcher but show a small "English only — Ukrainian coming" note when switched, or (b) link to the Ukrainian homepage rather than 404. Never produce a broken route. Pick one approach and apply it consistently.

**Translation rules**
- Author English first; translate to Ukrainian only after the English is reviewed (see M6).
- In Ukrainian text, **keep technical terms, methodology names, and resource/course names in English** (e.g. "firmware", "MQTT", "OTA", "Lean Six Sigma", "Green Belt"). Translate the surrounding explanation, not the terms.
- Diagrams: keep diagram labels in English in both versions (the terms are English by rule); translate only captions/surrounding prose.

**README**
- Document, for a non-developer, how to add a new article in both languages: copy the English template file, then copy it into the `uk` folder and translate the prose, leaving terms in English.
