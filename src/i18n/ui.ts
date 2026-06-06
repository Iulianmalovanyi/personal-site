// UI-strings dictionary for all site chrome (nav, buttons, labels).
// English is authoritative; Ukrainian is a translation that may lag.
// Per BRIEF.md §5.5 / §11, technical terms stay in English in both locales.
// This is intentionally small for M0 and grows in M1.

export const languages = {
  en: 'English',
  uk: 'Українська',
} as const;

export const defaultLang = 'en';

export const ui = {
  en: {
    'site.title': 'Iulian Malovanyi',
    'site.tagline':
      'Product Manager building at the intersection of software and hardware.',
    'placeholder.heading': 'Coming soon',
    'placeholder.body':
      'A personal site, portfolio, and a learning-in-public hub for robotics & electronics — built milestone by milestone.',
  },
  uk: {
    'site.title': 'Юліан Маловани',
    'site.tagline':
      'Product Manager, що працює на перетині software та hardware.',
    'placeholder.heading': 'Незабаром',
    'placeholder.body':
      'Персональний сайт, портфоліо та хаб навчання у відкритому форматі про robotics та electronics — будується крок за кроком.',
  },
} as const;

export type UiLang = keyof typeof ui;
export type UiKey = keyof (typeof ui)[typeof defaultLang];
