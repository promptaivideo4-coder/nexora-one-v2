import { StatusType } from '../components/common/StatusBadge';

export interface VerticalItem {
  id: string;
  name: string;
  maturityLabel: 'Core' | 'Expansion';
  oneLiner: string;
  description: string;
  audience: string;
  coreOpportunity: string;
  relatedProducts: string[];
  status: StatusType;
  statusText: string;
  ctaText: string;
  ctaTarget: string;
}

export const VERTICALS_DATA: VerticalItem[] = [
  {
    id: 'beauty',
    name: 'Beauty',
    maturityLabel: 'Core',
    oneLiner: 'The original Nexora ecosystem.',
    description:
      'A connected ecosystem for customers, salons, professionals, growth partners, brands and distributors.',
    audience: 'Customers, salon owners, professionals, growth partners, brands, distributors',
    coreOpportunity: 'Connect every layer of the beauty industry',
    relatedProducts: [
      'Customer App',
      'SalonOS',
      'White-Label Websites & Apps',
      'Growth Partner',
      'Salon Jobs',
      'Beauty B2B',
    ],
    status: 'Core',
    statusText: 'Core, demos available',
    ctaText: 'Explore the Beauty Ecosystem',
    ctaTarget: '/beauty-ecosystem',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    maturityLabel: 'Expansion',
    oneLiner: 'Buy • Sell • Rent',
    description: 'A connected vertical for property buyers, sellers, tenants and owners.',
    audience: 'Buyers, sellers, tenants, owners',
    coreOpportunity: 'Listings, leads and related services',
    relatedProducts: ['Real Estate Platform'],
    status: 'Demo',
    statusText: 'Demo Available',
    ctaText: 'Open Demo →',
    ctaTarget: 'https://no-broker-delta.vercel.app/',
  },
  {
    id: 'food',
    name: 'Food Delivery',
    maturityLabel: 'Expansion',
    oneLiner: 'Discover • Order • Grow',
    description: 'A planned vertical connecting restaurants and customers through discovery and ordering.',
    audience: 'Restaurants, customers',
    coreOpportunity: 'Ordering and delivery',
    relatedProducts: ['Food Delivery Platform'],
    status: 'Planned',
    statusText: 'Planned',
    ctaText: 'View Vertical',
    ctaTarget: '#food',
  },
  {
    id: 'jobs',
    name: 'Jobs & Professionals',
    maturityLabel: 'Expansion',
    oneLiner: 'Opportunities for professionals.',
    description: 'A jobs layer connecting professionals with employers, starting with beauty.',
    audience: 'Professionals, employers',
    coreOpportunity: 'Structured professional opportunities',
    relatedProducts: ['Salon Jobs'],
    status: 'Demo',
    statusText: 'Demo (beauty jobs)',
    ctaText: 'Open Demo →',
    ctaTarget: 'https://job-portal-nexora.vercel.app/',
  },
  {
    id: 'commerce',
    name: 'Commerce',
    maturityLabel: 'Expansion',
    oneLiner: 'Marketplace and product discovery.',
    description: 'A commerce layer for product discovery and purchasing across Nexora verticals.',
    audience: 'Businesses, brands, customers',
    coreOpportunity: 'Marketplace for products',
    relatedProducts: ['Beauty B2B'],
    status: 'Planned',
    statusText: 'Planned',
    ctaText: 'View Vertical',
    ctaTarget: '#commerce',
  },
  {
    id: 'advertising',
    name: 'Advertising',
    maturityLabel: 'Expansion',
    oneLiner: 'Reach • Promote • Grow',
    description: 'An advertising layer to help brands and businesses reach audiences across the network.',
    audience: 'Brands, businesses, advertisers',
    coreOpportunity: 'Promotion across the ecosystem',
    relatedProducts: ['Advertising Platform'],
    status: 'Planned',
    statusText: 'Planned',
    ctaText: 'View Vertical',
    ctaTarget: '#advertising',
  },
  {
    id: 'ai',
    name: 'AI & Technology',
    maturityLabel: 'Expansion',
    oneLiner: 'Intelligent Business Automation',
    description: 'A technology layer applying automation and AI to marketing, retention and operations.',
    audience: 'Businesses, professionals, partners',
    coreOpportunity: 'Automation and insights across verticals',
    relatedProducts: ['AI Business Tools'],
    status: 'Demo',
    statusText: 'Demo Available',
    ctaText: 'Open Demo →',
    ctaTarget: 'https://business-web-solutions-kohl.vercel.app/',
  },
];
