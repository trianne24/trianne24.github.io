export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export const PORTFOLIO_FILTERS = [
  { id: 'ui', label: 'UI Design' },
  { id: 'creative', label: 'Creative Design' },
  { id: 'print', label: 'Print Design' },
  { id: 'dev', label: 'Dev Project' },
  { id: 'ux', label: 'UX Case Study' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Modern Dashboard UI',
    description: 'A clean and functional dashboard for data analytics.',
    imageUrl: 'https://picsum.photos/seed/ui1/600/400',
    tags: ['UI Design'],
  },
  {
    id: '2',
    title: 'Brand Identity Concept',
    description: 'Creative logo and branding for a tech startup.',
    imageUrl: 'https://picsum.photos/seed/creative1/600/400',
    tags: ['Creative Design'],
  },
  {
    id: '3',
    title: 'Annual Report 2025',
    description: 'Professional print layout for a corporate annual report.',
    imageUrl: 'https://picsum.photos/seed/print1/600/400',
    tags: ['Print Design'],
  },
  {
    id: '4',
    title: 'E-commerce Platform',
    description: 'Full-stack development of a modern online store.',
    imageUrl: 'https://picsum.photos/seed/dev1/600/400',
    tags: ['Dev Project', 'UI Design'],
  },
  {
    id: '5',
    title: 'User Research for Travel App',
    description: 'Deep dive into user pain points for a travel booking experience.',
    imageUrl: 'https://picsum.photos/seed/ux1/600/400',
    tags: ['UX Case Study'],
  },
  {
    id: '6',
    title: 'Mobile Banking App',
    description: 'End-to-end design and research for a fintech solution.',
    imageUrl: 'https://picsum.photos/seed/fintech/600/400',
    tags: ['UI Design', 'UX Case Study'],
  },
  {
    id: '7',
    title: 'Event Poster Series',
    description: 'Vibrant posters for a local music festival.',
    imageUrl: 'https://picsum.photos/seed/poster/600/400',
    tags: ['Creative Design', 'Print Design'],
  },
  {
    id: '8',
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React and Tailwind CSS.',
    imageUrl: 'https://picsum.photos/seed/portfolio/600/400',
    tags: ['Dev Project', 'Creative Design'],
  },
];
