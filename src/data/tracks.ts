/**
 * Learning Hub tracks (the self-development umbrella — see DECISIONS.md).
 * Single source of truth for the Home "what I'm exploring" strip and the
 * /learn landing (M5).
 */
export type TrackStatus = 'active' | 'planned';

export interface Track {
  slug: string;
  path: string;
  status: TrackStatus;
  /** Short symbol used in the card chip (no icon dependency). */
  glyph: string;
  title: string;
  blurb: string;
}

export const tracks: Track[] = [
  {
    slug: 'robotics',
    path: '/learn/robotics',
    status: 'active',
    glyph: '⚡',
    title: 'Robotics & Electronics for PMs',
    blurb:
      'A from-zero, in-public course on connected hardware — for an intelligent non-engineer learning step by step.',
  },
  {
    slug: 'bookshelf',
    path: '/learn/bookshelf',
    status: 'active',
    glyph: '◳',
    title: 'Bookshelf',
    blurb:
      'Notes and honest reviews of the books I read — what stuck, and what I disagreed with.',
  },
  {
    slug: 'pm-craft',
    path: '/learn/pm-craft',
    status: 'planned',
    glyph: '◆',
    title: 'PM Craft',
    blurb:
      'Lessons from building regulated products — discovery, prioritisation, working with clinicians and engineers.',
  },
  {
    slug: 'growth',
    path: '/learn/growth',
    status: 'planned',
    glyph: '↗',
    title: 'Personal Growth',
    blurb:
      'Reflections on developing as a product manager and as a person — habits, focus, and learning how to learn.',
  },
];
