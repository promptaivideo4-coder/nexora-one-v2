export interface MissionPillar {
  id: number;
  title: string;
  copy: string;
  iconName: string;
}

export const VISION_STATEMENT =
  'ONE CONNECTED BEAUTY NETWORK: Nexora aims to bring customers, salons, professionals, Growth Partners, brands and suppliers into one connected digital network.';

export const MISSION_STATEMENT =
  'MAKE DIGITAL GROWTH SIMPLE FOR LOCAL BUSINESSES: Give local businesses digital presence, useful tools and growth opportunities — while connecting the people around them.';

export const LONG_TERM_DIRECTION =
  'Beauty is the starting point. The same technology foundation can expand into other industries as Nexora grows.';

export const MISSION_PILLARS: MissionPillar[] = [
  {
    id: 1,
    title: 'DIGITIZE LOCAL BUSINESSES',
    copy: 'Make digital tools accessible and easy to use for every salon.',
    iconName: 'Boxes',
  },
  {
    id: 2,
    title: 'HELP CUSTOMERS DISCOVER',
    copy: 'Make it easy for people to find and book trusted beauty services.',
    iconName: 'Users',
  },
  {
    id: 3,
    title: 'HELP BUSINESS OWNERS GROW',
    copy: 'Provide tools that help salons get more customers and save time.',
    iconName: 'Target',
  },
  {
    id: 4,
    title: 'CREATE PROFESSIONAL OPPORTUNITIES',
    copy: 'Connect talented stylists and artists with the right jobs.',
    iconName: 'Briefcase',
  },
  {
    id: 5,
    title: 'BUILD THE GROWTH PARTNER NETWORK',
    copy: 'Empower partners to help local businesses join the digital world.',
    iconName: 'Network',
  },
  {
    id: 6,
    title: 'CONNECT BRANDS & SUPPLIERS',
    copy: 'Link salons directly with the products and brands they need.',
    iconName: 'Layers',
  },
  {
    id: 7,
    title: 'USE AI & AUTOMATION',
    copy: 'Simplify marketing and operations using smart technology.',
    iconName: 'Bot',
  },
  {
    id: 8,
    title: 'BUILD TECHNOLOGY THAT CAN GROW',
    copy: 'Create a foundation that can expand into many new industries.',
    iconName: 'RefreshCw',
  },
];

export const FRAGMENTATION_PROBLEM = {
  label: 'TODAY, EVERYTHING IS SEPARATE.',
  title: 'Fragmented Tools',
  body: 'Today, businesses often use different tools for different needs — one for booking, one for marketing, one for staff. This keeps them disconnected.',
};

export const NEXORA_APPROACH = {
  label: 'NEXORA CONNECTS IT.',
  title: 'One Ecosystem',
  body: 'Nexora connects those needs through one ecosystem, bringing customers, businesses, and suppliers together.',
};
