import type { UiLang } from '../i18n/ui';

/**
 * Learning Hub tracks (the self-development umbrella — see DECISIONS.md).
 * Single source of truth for the Home "what I'm exploring" strip and the
 * /learn landing (M5). Technical terms stay in English in both locales (§5.5).
 */
export type TrackStatus = 'active' | 'planned';

export interface Track {
  slug: string;
  /** Canonical (English) path; localised at render time. */
  path: string;
  status: TrackStatus;
  /** Short symbol used in the card chip (no icon dependency). */
  glyph: string;
  title: Record<UiLang, string>;
  blurb: Record<UiLang, string>;
}

export const tracks: Track[] = [
  {
    slug: 'robotics',
    path: '/learn/robotics',
    status: 'active',
    glyph: '⚡',
    title: {
      en: 'Robotics & Electronics for PMs',
      uk: 'Robotics & Electronics для PMs',
    },
    blurb: {
      en: 'A from-zero, in-public course on connected hardware — for an intelligent non-engineer learning step by step.',
      uk: 'Курс із нуля у відкритому форматі про connected hardware — для тих, хто вчиться крок за кроком без інженерного бекґраунду.',
    },
  },
  {
    slug: 'bookshelf',
    path: '/learn/bookshelf',
    status: 'active',
    glyph: '◳',
    title: { en: 'Bookshelf', uk: 'Bookshelf' },
    blurb: {
      en: 'Notes and honest reviews of the books I read — what stuck, and what I disagreed with.',
      uk: 'Нотатки та чесні рецензії на книги, які я читаю — що запам’яталось і з чим я не згоден.',
    },
  },
  {
    slug: 'pm-craft',
    path: '/learn/pm-craft',
    status: 'planned',
    glyph: '◆',
    title: { en: 'PM Craft', uk: 'PM Craft' },
    blurb: {
      en: 'Lessons from building regulated products — discovery, prioritisation, working with clinicians and engineers.',
      uk: 'Уроки з побудови regulated products — discovery, пріоритизація, робота з клініцистами та інженерами.',
    },
  },
  {
    slug: 'growth',
    path: '/learn/growth',
    status: 'planned',
    glyph: '↗',
    title: { en: 'Personal Growth', uk: 'Personal Growth' },
    blurb: {
      en: 'Reflections on developing as a product manager and as a person — habits, focus, and learning how to learn.',
      uk: 'Роздуми про розвиток як product manager і як особистість — звички, фокус і вміння вчитися.',
    },
  },
];
