import { StatusType } from '../components/common/StatusBadge';

export interface ProductItem {
  id: string;
  name: string;
  oneLiner: string;
  audience: string;
  benefits: string;
  status: StatusType;
  demoUrl: string | null;
  secondaryLinks?: { label: string; url: string }[];
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'customer-app',
    name: 'Nexora Customer App',
    oneLiner: 'Discover local businesses, book services and earn loyalty benefits in one place.',
    audience: 'Customers',
    benefits: 'Discovery • Offers • Booking where supported • Loyalty and rewards • Reviews',
    status: 'Demo',
    demoUrl: 'https://final-salon-app.vercel.app/',
    secondaryLinks: [
      { label: 'Salon Customer App Demo', url: 'https://final-salon-app.vercel.app/' },
      { label: 'GlowSlot Source Repository', url: 'https://github.com/lremlaha77922-ai/GlowSlot-.git' },
      { label: 'Beauty Directory Platform', url: 'https://beauty-directory-zeta.vercel.app/' },
    ],
  },
  {
    id: 'salonos',
    name: 'Nexora SalonOS',
    oneLiner: 'A digital operating system for salons and beauty businesses.',
    audience: 'Salon owners, professionals',
    benefits: 'Booking • CRM • Loyalty • WhatsApp automation • Recall • Analytics',
    status: 'Demo',
    demoUrl: 'https://fanal-templetes-app.vercel.app/templates',
  },
  {
    id: 'white-label',
    name: 'White-Label Websites & Apps',
    oneLiner: 'Your brand. Your digital presence. Powered by Nexora.',
    audience: 'Salon owners, business owners',
    benefits: 'Your own brand • Online presence • Booking • Designed for fast setup • Connected to SalonOS',
    status: 'Demo',
    demoUrl: 'https://prompt-b-g.vercel.app/',
    secondaryLinks: [
      { label: 'More template examples', url: 'https://final-new-app-templete.vercel.app/' },
    ],
  },
  {
    id: 'growth-partner',
    name: 'Nexora Growth Partner',
    oneLiner: 'Nexora’s local expansion engine for onboarding and activating salon businesses.',
    audience: 'Growth Partners',
    benefits: 'Partner dashboard • Activation tracking • Milestones • Rewards • Training & support',
    status: 'Demo',
    demoUrl: 'https://fanal-templetes-app.vercel.app/partner/dashboard',
    secondaryLinks: [
      { label: 'Partner Portal & Application', url: 'https://pink-growth-partner.vercel.app/' },
      { label: 'Growth Partner Dashboard', url: 'https://fanal-templetes-app.vercel.app/partner/dashboard' },
    ],
  },
  {
    id: 'salon-jobs',
    name: 'Nexora Salon Jobs',
    oneLiner: 'Jobs and opportunities for beauty professionals, connected to salons and employers.',
    audience: 'Professionals, salon owners',
    benefits: 'Job discovery • Professional profiles • Hiring connections',
    status: 'Demo',
    demoUrl: 'https://job-portal-nexora.vercel.app/',
  },
  {
    id: 'beauty-b2b',
    name: 'Nexora Beauty B2B',
    oneLiner: 'A B2B network connecting beauty brands, distributors and suppliers with salons and professionals.',
    audience: 'Brands, distributors, suppliers, salons',
    benefits: 'Product listing • Wholesale opportunities • Leads • Brand visibility',
    status: 'Demo',
    demoUrl: 'https://beauty-shop-2.vercel.app/',
  },
  {
    id: 'real-estate-platform',
    name: 'Nexora Real Estate Platform',
    oneLiner: 'Buy, sell and rent property through a Nexora One vertical.',
    audience: 'Buyers, sellers, tenants, owners',
    benefits: 'Listings • Leads • Property services',
    status: 'Demo',
    demoUrl: 'https://no-broker-delta.vercel.app/',
  },
  {
    id: 'food-platform',
    name: 'Nexora Food Delivery Platform',
    oneLiner: 'Discover, order and grow: restaurants and customers on one platform.',
    audience: 'Restaurants, customers',
    benefits: 'Discovery • Ordering • Delivery',
    status: 'Planned',
    demoUrl: null,
  },
  {
    id: 'advertising-platform',
    name: 'Nexora Advertising Platform',
    oneLiner: 'Reach, promote, grow across the Nexora network.',
    audience: 'Brands, businesses',
    benefits: 'Promotion • Reach • Offers',
    status: 'Planned',
    demoUrl: null,
  },
  {
    id: 'ai-tools',
    name: 'Nexora AI Business Tools',
    oneLiner: 'Intelligent business automation for marketing, retention and decisions.',
    audience: 'Businesses, professionals, partners, brands',
    benefits: 'AI-assisted marketing content • Automated recall • Booking-demand insights',
    status: 'Demo',
    demoUrl: 'https://business-web-solutions-kohl.vercel.app/',
  },
];
