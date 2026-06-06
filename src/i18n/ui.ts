// UI-strings dictionary for all site chrome (nav, buttons, labels, footer).
// English is authoritative; Ukrainian is a translation that may lag (§11).
// Per §5.5 / §11, technical terms, methodology names and resource names stay
// in English in BOTH locales — translate only the surrounding explanation.

export const languages = {
  en: 'English',
  uk: 'Українська',
} as const;

export const defaultLang = 'en';

/** Canonical (English) paths for the primary nav. Localised at render time. */
export const navItems = [
  { key: 'nav.about', path: '/about' },
  { key: 'nav.projects', path: '/projects' },
  { key: 'nav.writing', path: '/writing' },
  { key: 'nav.learn', path: '/learn' },
] as const;

export const ui = {
  en: {
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
    'lang.switch': 'Switch language',
    'lang.label': 'Language',
    'lang.untranslated': 'This page isn’t in Ukrainian yet — showing English.',

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
      'A personal site, portfolio, and a learning-in-public hub for robotics & electronics — built milestone by milestone.',

    // styleguide
    'sg.title': 'Style guide',
    'sg.intro':
      'Design tokens and components for the site. This page exists to keep the system consistent and re-themeable.',
    'sg.colours': 'Colours',
    'sg.type': 'Typography',
    'sg.buttons': 'Buttons',
    'sg.callouts': 'Callouts',
    'sg.cards': 'Cards',
  },
  uk: {
    // identity
    'site.title': 'Юліан Маловани',
    'site.role': 'Product Manager',
    'site.tagline':
      'Product Manager, що працює на перетині software та hardware — від regulated digital health до connected products.',

    // navigation
    'nav.home': 'Головна',
    'nav.about': 'Про мене',
    'nav.projects': 'Проєкти',
    'nav.writing': 'Нотатки',
    'nav.learn': 'Навчальний хаб',
    'nav.menu': 'Меню',
    'nav.close': 'Закрити',
    'nav.skip': 'Перейти до вмісту',

    // controls
    'theme.toggle': 'Перемкнути тему',
    'theme.light': 'Світла',
    'theme.dark': 'Темна',
    'lang.switch': 'Змінити мову',
    'lang.label': 'Мова',
    'lang.untranslated': 'Цієї сторінки ще немає українською — показано англійську.',

    // footer
    'footer.connect': 'Контакти',
    'footer.email': 'Пошта',
    'footer.rss': 'RSS',
    'footer.rights': 'Усі права захищені.',
    'footer.built': 'Зроблено на Astro.',

    // generic
    'cta.viewWork': 'Переглянути роботи',
    'cta.readHub': 'До навчального хабу',
    'cta.connect': 'LinkedIn',
    'placeholder.heading': 'Незабаром',
    'placeholder.body':
      'Персональний сайт, портфоліо та хаб навчання у відкритому форматі про robotics та electronics — будується крок за кроком.',

    // styleguide
    'sg.title': 'Гайд по стилю',
    'sg.intro':
      'Design tokens та компоненти сайту. Ця сторінка тримає систему послідовною та придатною до зміни теми.',
    'sg.colours': 'Кольори',
    'sg.type': 'Типографіка',
    'sg.buttons': 'Кнопки',
    'sg.callouts': 'Виноски',
    'sg.cards': 'Картки',
  },
} as const;

export type UiLang = keyof typeof ui;
export type UiKey = keyof (typeof ui)[typeof defaultLang];
