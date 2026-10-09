export interface EcosystemNode {
  id: string;
  label: string;
  category: 'participant' | 'capability' | 'vertical';
  ring: 1 | 2 | 3;
  connectedTo: string[];
  description: string;
}

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  // Ring 1: Participants
  {
    id: 'customer',
    label: 'Customer',
    category: 'participant',
    ring: 1,
    connectedTo: ['business', 'booking', 'loyalty', 'marketplace', 'advertising'],
    description: 'Discover businesses, book where supported, and earn loyalty benefits.',
  },
  {
    id: 'business',
    label: 'Business / Salon Owner',
    category: 'participant',
    ring: 1,
    connectedTo: ['customer', 'professional', 'growth-partner', 'b2b', 'booking', 'crm', 'loyalty', 'marketing', 'ai'],
    description: 'Digital presence, SalonOS, CRM, and growth automation tools.',
  },
  {
    id: 'professional',
    label: 'Beauty Professional',
    category: 'participant',
    ring: 1,
    connectedTo: ['business', 'jobs', 'ai'],
    description: 'Career discovery, professional profile, and salon connections.',
  },
  {
    id: 'growth-partner',
    label: 'Growth Partner',
    category: 'participant',
    ring: 1,
    connectedTo: ['business', 'b2b', 'marketing'],
    description: 'Onboard local businesses and build digital network recognition.',
  },
  {
    id: 'b2b',
    label: 'B2B Brand / Distributor',
    category: 'participant',
    ring: 1,
    connectedTo: ['business', 'professional', 'marketplace', 'advertising'],
    description: 'Direct wholesale, product discovery, and salon distribution.',
  },

  // Ring 2: Capabilities
  {
    id: 'booking',
    label: 'Booking',
    category: 'capability',
    ring: 2,
    connectedTo: ['customer', 'business'],
    description: 'Online reservation and scheduling coordination.',
  },
  {
    id: 'crm',
    label: 'CRM',
    category: 'capability',
    ring: 2,
    connectedTo: ['business', 'marketing', 'loyalty'],
    description: 'Customer relationship tracking and record management.',
  },
  {
    id: 'loyalty',
    label: 'Loyalty',
    category: 'capability',
    ring: 2,
    connectedTo: ['customer', 'business'],
    description: 'Points, promotions, and return customer rewards.',
  },
  {
    id: 'marketing',
    label: 'Marketing',
    category: 'capability',
    ring: 2,
    connectedTo: ['business', 'growth-partner', 'ai'],
    description: 'WhatsApp campaigns and automated customer communication.',
  },
  {
    id: 'jobs',
    label: 'Jobs',
    category: 'capability',
    ring: 2,
    connectedTo: ['professional', 'business'],
    description: 'Opportunities and talent discovery for salons and specialists.',
  },
  {
    id: 'marketplace',
    label: 'Marketplace',
    category: 'capability',
    ring: 2,
    connectedTo: ['b2b', 'customer', 'business'],
    description: 'Wholesale, supplies, and commerce catalogue access.',
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    category: 'capability',
    ring: 2,
    connectedTo: ['business', 'marketing', 'professional'],
    description: 'Intelligent content, demand insights, and recall automation.',
  },
  {
    id: 'advertising',
    label: 'Advertising',
    category: 'capability',
    ring: 2,
    connectedTo: ['b2b', 'business', 'customer'],
    description: 'Cross-network promotion and targeted reach.',
  },

  // Ring 3: Verticals
  {
    id: 'vert-beauty',
    label: 'Beauty (Core)',
    category: 'vertical',
    ring: 3,
    connectedTo: ['business', 'customer', 'professional', 'b2b'],
    description: 'The foundational and deepest multi-layered ecosystem.',
  },
  {
    id: 'vert-real-estate',
    label: 'Real Estate',
    category: 'vertical',
    ring: 3,
    connectedTo: ['customer', 'advertising'],
    description: 'Planned vertical for property buyers, sellers, and tenants.',
  },
  {
    id: 'vert-food',
    label: 'Food Delivery',
    category: 'vertical',
    ring: 3,
    connectedTo: ['customer', 'business'],
    description: 'Planned vertical connecting restaurants and consumers.',
  },
  {
    id: 'vert-commerce',
    label: 'Commerce',
    category: 'vertical',
    ring: 3,
    connectedTo: ['marketplace', 'customer'],
    description: 'Product discovery and retail layer across sectors.',
  },
  {
    id: 'vert-tech',
    label: 'AI / Technology',
    category: 'vertical',
    ring: 3,
    connectedTo: ['ai', 'business'],
    description: 'Intelligent business automation framework.',
  },
];

export const ECOSYSTEM_LAYERS = [
  {
    id: 'customer-layer',
    title: 'Customer Layer',
    desc: 'Customers discover businesses, book where supported, and collect loyalty benefits.',
  },
  {
    id: 'business-layer',
    title: 'Business / Salon Layer',
    desc: 'Owners run and grow with websites, SalonOS and automation tools.',
  },
  {
    id: 'professional-layer',
    title: 'Professional Layer',
    desc: 'Beauty professionals find opportunities and connect with salons.',
  },
  {
    id: 'growth-layer',
    title: 'Growth Partner Layer',
    desc: 'Partners help local businesses join the network and track their progress.',
  },
  {
    id: 'b2b-layer',
    title: 'B2B Layer',
    desc: 'Brands and distributors reach businesses and professionals through a B2B network.',
  },
  {
    id: 'cross-vertical-layer',
    title: 'Cross-Vertical Layer',
    desc: 'The same architecture is planned to extend beyond Beauty into other local-commerce verticals.',
  },
];
