// The Learning Hub's ten topics, in the roadmap's order (see §5.3).
// `status: 'available'` topics have lessons; the rest are placeholders for now.

export interface Topic {
  slug: string;
  title: string;
  blurb: string;
  status: 'available' | 'planned';
}

export const topics: Topic[] = [
  {
    slug: 'how-it-fits',
    title: 'How a connected product fits together',
    blurb: 'The system map: hardware, firmware, connectivity, cloud and apps as one whole.',
    status: 'available',
  },
  {
    slug: 'electronics',
    title: 'Electronics, the basics',
    blurb: 'Just enough: microcontrollers, sensors, actuators, and how software controls physical things.',
    status: 'planned',
  },
  {
    slug: 'embedded-firmware',
    title: 'Embedded systems & firmware',
    blurb: "What runs on the device, why it's constrained, and why firmware changes are slow and careful.",
    status: 'planned',
  },
  {
    slug: 'connectivity-iot',
    title: 'Connectivity & IoT',
    blurb: 'How devices talk, how data reaches the cloud, and what an IoT product is end to end.',
    status: 'planned',
  },
  {
    slug: 'robotics',
    title: 'Robotics, high level',
    blurb: 'What robotics adds on top of IoT: sensing, actuation and control.',
    status: 'planned',
  },
  {
    slug: 'hardware-lifecycle',
    title: 'The hardware product lifecycle',
    blurb: 'Idea → design → validation → manufacturing → support, and the gates along the way.',
    status: 'available',
  },
  {
    slug: 'manufacturing-ops',
    title: 'Manufacturing, quality & operations',
    blurb: 'BOM/cost, supply chain, yield and certification — the realities that make hardware different.',
    status: 'planned',
  },
  {
    slug: 'lean-six-sigma',
    title: 'Lean & Six Sigma',
    blurb: "Process and quality methodologies, and what's worth certifying.",
    status: 'planned',
  },
  {
    slug: 'hardware-vs-software-pm',
    title: 'How hardware PM differs from software PM',
    blurb: 'The mindset shift: irreversibility, lead times, certification gates, field quality.',
    status: 'planned',
  },
  {
    slug: 'terminology-interview',
    title: 'Terminology & interview readiness',
    blurb: "The vocabulary to speak each team's language, and how to tell your story.",
    status: 'planned',
  },
];

export const topicBySlug = (slug: string) => topics.find((t) => t.slug === slug);
export const topicIndex = (slug: string) => topics.findIndex((t) => t.slug === slug);
