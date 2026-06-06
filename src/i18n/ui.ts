// Centralised UI strings. The site is English-only for now — the bilingual
// (Ukrainian) version was removed; see DECISIONS.md. Strings stay centralised
// here so chrome copy lives in one place and a language could be re-added later.

/** Canonical paths for the primary nav. */
export const navItems = [
  { key: 'nav.about', path: '/about' },
  { key: 'nav.projects', path: '/projects' },
  { key: 'nav.writing', path: '/writing' },
  { key: 'nav.learn', path: '/learn' },
] as const;

export const ui = {
  // identity
  'site.title': 'Iulian Malovanyi',
  'site.role': 'Product Manager',
  'site.tagline':
    'Product Manager building at the intersection of software and hardware — regulated digital health → connected products.',

  // navigation
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.writing': 'Writing',
  'nav.learn': 'Learning Hub',
  'nav.menu': 'Menu',
  'nav.close': 'Close',
  'nav.skip': 'Skip to content',

  // controls
  'theme.toggle': 'Toggle colour theme',
  'theme.light': 'Light',
  'theme.dark': 'Dark',

  // footer
  'footer.connect': 'Connect',
  'footer.email': 'Email',
  'footer.rss': 'RSS',
  'footer.rights': 'All rights reserved.',
  'footer.built': 'Built with Astro.',

  // generic
  'cta.viewWork': 'View work',
  'cta.readHub': 'Read the learning hub',
  'cta.connect': 'Connect on LinkedIn',
  'placeholder.heading': 'Coming soon',
  'placeholder.body':
    'A personal site and portfolio, plus a learning-in-public hub — on product management, the books I read, robotics & electronics, and growing as a PM and a person.',

  // home
  'home.featured.title': 'Selected work',
  'home.featured.viewAll': 'All projects →',
  'home.exploring.title': 'What I’m exploring',
  'home.exploring.body':
    'Learning in public across a few tracks — one is robotics & electronics; the rest are about becoming a sharper PM and a better-rounded person.',
  'home.exploring.cta': 'Enter the Learning Hub →',
  'home.writing.title': 'Latest writing',
  'home.writing.viewAll': 'All writing →',
  'home.writing.empty': 'First posts are on the way.',
  'home.closing.title': 'Let’s talk',
  'home.closing.body':
    'Always up for a conversation about product, hardware, or health tech.',
  'track.active': 'In progress',
  'track.planned': 'Planned',

  // about
  'about.title': 'About',
  'about.cv.download': 'Download CV (PDF)',
  'about.cv.soon': 'CV — coming soon',
  'about.connect.title': 'Connect',

  // styleguide
  'sg.title': 'Style guide',
  'sg.intro':
    'Design tokens and components for the site. This page exists to keep the system consistent and re-themeable.',
  'sg.colours': 'Colours',
  'sg.type': 'Typography',
  'sg.buttons': 'Buttons',
  'sg.callouts': 'Callouts',
  'sg.cards': 'Cards',
} as const;

export type UiKey = keyof typeof ui;

/** Look up a UI string by key. */
export function t(key: UiKey): string {
  return ui[key];
}
