export type CellStatus = 'Observed' | 'Not observed' | 'Pending';

export interface FeatureMatrixRow {
  featureName: string;
  category: string;
  industryStandard: CellStatus;
  nexoraArchitecture: CellStatus;
  notes: string;
}

export interface ArchitectureDimension {
  dimension: string;
  conventionalApproach: string;
  nexoraApproach: string;
}

export interface CompetitorPlatform {
  id: number;
  name: string;
  focus: string;
  features: string[];
  focusTags: string[];
  platformType: string;
  website: string;
}

export interface SolvedCategory {
  title: string;
  description: string;
  examples: string[];
  iconName: string;
}

export const RESEARCH_SNAPSHOT_DATE = '05/10/2026';

export const CORPORATE_ENTITY_NAME = 'NEXORA ONE GLOBAL INTERNATIONAL PRIVATE LIMITED';

export const RESEARCH_OBJECTIVE =
  'India already has multiple platforms serving parts of the beauty discovery, booking, salon-management, wellness, barber and customer-engagement market. The purpose of this research is to understand the existing landscape before defining Nexora One\'s differentiation.';

export const KNOWN_FINDING =
  'Competitive research has found substantial market overlap across single-point solutions. Nexora\'s differentiation is described as an architecture and combination of layers, not as an isolated feature or an absolute claim.';

export const METHODOLOGY_POINTS = [
  'Public information only: platform websites, official product pages and published documentation.',
  `Research snapshot review date: ${RESEARCH_SNAPSHOT_DATE}.`,
  'Scope: 12 key candidate platforms across salon software, B2C discovery, home services, queue management and enterprise ops.',
  'A feature marked "Not observed" means it was not found in public materials on the review date. It does not mean the feature does not exist.',
];

export const COMPETITORS: CompetitorPlatform[] = [
  {
    id: 1,
    name: 'Urban Company',
    focus: 'Salon, spa, massage, makeup, nail and home services',
    features: ['Home services', 'Beauty/wellness discovery', 'Service booking'],
    focusTags: ['Home Services', 'Discovery', 'Booking'],
    platformType: 'iOS, Android, Web',
    website: 'urbancompany.com',
  },
  {
    id: 2,
    name: 'LUZO',
    focus: 'Salon, spa, massage, dermatology and beauty/wellness discovery',
    features: ['Reviews', 'Pricing & offers', 'Location-based discovery', 'Booking'],
    focusTags: ['Discovery', 'Booking'],
    platformType: 'iOS, Android, Web',
    website: 'luzo.app',
  },
  {
    id: 3,
    name: 'YesMadam',
    focus: 'Beauty and wellness services at home',
    features: ['Hair & skin care', 'Salon-at-home', 'Spa & beauty services'],
    focusTags: ['Home Services', 'Booking'],
    platformType: 'iOS, Android, Web',
    website: 'yesmadam.com',
  },
  {
    id: 4,
    name: 'BarberDekho',
    focus: 'Barber and salon discovery',
    features: ['Barber/salon search', 'Reviews', 'Priority/check-in style experience'],
    focusTags: ['Discovery', 'Queue Management'],
    platformType: 'iOS, Android, Web',
    website: 'barberdekho.com',
  },
  {
    id: 5,
    name: 'GoBarber',
    focus: 'Salon and spa discovery',
    features: ['Salon/spa discovery', 'Appointment booking'],
    focusTags: ['Discovery', 'Booking'],
    platformType: 'iOS, Android, Web',
    website: 'gobarber.co.in',
  },
  {
    id: 6,
    name: 'Zapocuts',
    focus: 'Salon and barber discovery',
    features: ['Deals', 'Booking', 'Remote queue', 'Real-time wait experience'],
    focusTags: ['Discovery', 'Booking', 'Queue Management'],
    platformType: 'Web, Android',
    website: 'zapocuts.com',
  },
  {
    id: 7,
    name: 'NumberApp',
    focus: 'Salon queue and booking',
    features: ['Walk-in queue', 'Online booking', 'Salon discovery'],
    focusTags: ['Queue Management', 'Booking', 'Discovery'],
    platformType: 'Web, Android',
    website: 'numberapp.in',
  },
  {
    id: 8,
    name: 'Fresha',
    focus: 'Salon/spa business software + beauty marketplace',
    features: ['Booking', 'Client management', 'Team management', 'Payments', 'Marketing', 'Marketplace', 'Reviews', 'Notifications', 'Rebooking & favourites'],
    focusTags: ['Salon Management', 'Marketplace', 'Payments', 'Marketing', 'Booking'],
    platformType: 'iOS, Android, Web',
    website: 'fresha.com',
  },
  {
    id: 9,
    name: 'Booksy',
    focus: 'Salon/barber booking and business discovery',
    features: ['Booking', 'Profiles', 'Reviews', 'Reminders'],
    focusTags: ['Booking', 'Discovery', 'Marketing'],
    platformType: 'iOS, Android, Web',
    website: 'getbooksy.com',
  },
  {
    id: 10,
    name: 'Zenoti',
    focus: 'Salon/spa management and enterprise operations',
    features: ['Booking', 'POS', 'Memberships', 'Commissions', 'Inventory', 'Marketing', 'Automation', 'Reporting', 'Multi-location capabilities'],
    focusTags: ['Enterprise Operations', 'Salon Management', 'Payments', 'Marketing'],
    platformType: 'Web, iOS, Android',
    website: 'zenoti.com',
  },
  {
    id: 11,
    name: 'Mindbody',
    focus: 'Fitness, wellness and beauty marketplace/business platform',
    features: ['Discovery', 'Booking & rebooking', 'Memberships', 'Business tools', 'Marketplace exposure'],
    focusTags: ['Marketplace', 'Salon Management', 'Booking', 'Payments'],
    platformType: 'iOS, Android, Web',
    website: 'mindbodyonline.com',
  },
  {
    id: 12,
    name: 'Vagaro',
    focus: 'Salon/spa business management and booking',
    features: ['Online booking', 'Scheduling', 'Payments', 'Business management', 'Customer engagement'],
    focusTags: ['Salon Management', 'Booking', 'Payments', 'Marketing'],
    platformType: 'iOS, Android, Web',
    website: 'vagaro.com',
  },
];

export const SOLVED_CATEGORIES: SolvedCategory[] = [
  {
    title: 'Customer Discovery',
    description: 'High consumer visibility for local salons, spas, dermatologists & barbers.',
    examples: ['LUZO', 'BarberDekho', 'GoBarber', 'Mindbody'],
    iconName: 'Search',
  },
  {
    title: 'Booking Engine',
    description: 'Real-time calendar scheduling, online appointments & client self-booking.',
    examples: ['Booksy', 'Fresha', 'Vagaro', 'Zapocuts'],
    iconName: 'Calendar',
  },
  {
    title: 'Salon Management',
    description: 'Daily appointment management, client history, staff rosters & POS.',
    examples: ['Fresha', 'Vagaro', 'Zenoti'],
    iconName: 'Building2',
  },
  {
    title: 'Payments',
    description: 'Integrated card processing, checkout terminals & deposit collection.',
    examples: ['Fresha', 'Zenoti', 'Vagaro'],
    iconName: 'CreditCard',
  },
  {
    title: 'Reviews & Rating',
    description: 'Verified client feedback, star ratings & public salon reputations.',
    examples: ['LUZO', 'BarberDekho', 'Fresha', 'Booksy'],
    iconName: 'Star',
  },
  {
    title: 'Marketing & Loyalty',
    description: 'Automated SMS/email reminders, memberships & promo campaigns.',
    examples: ['Booksy', 'Fresha', 'Mindbody', 'Vagaro'],
    iconName: 'Megaphone',
  },
  {
    title: 'Marketplace Exposure',
    description: 'Centralized consumer hubs driving organic footfall & new leads.',
    examples: ['Fresha', 'Mindbody', 'LUZO'],
    iconName: 'Store',
  },
  {
    title: 'Queue Management',
    description: 'Remote waitlists, live queue tracking & walk-in check-in systems.',
    examples: ['Zapocuts', 'NumberApp', 'BarberDekho'],
    iconName: 'Users',
  },
  {
    title: 'Home Services',
    description: 'On-demand salon, spa, massage & beauty delivered directly to doorstep.',
    examples: ['Urban Company', 'YesMadam'],
    iconName: 'Home',
  },
  {
    title: 'Enterprise Operations',
    description: 'Multi-chain governance, inventory control, automated payroll & custom reporting.',
    examples: ['Zenoti', 'Mindbody'],
    iconName: 'Globe',
  },
];

export const NEXORA_LAYERS = [
  { name: 'Discover', role: 'Customer-facing service discovery & local search' },
  { name: 'Nexora Business', role: 'SalonOS management, CRM, bookings & revenue' },
  { name: 'Nexora Sites', role: 'Free custom beauty websites & domain hosting' },
  { name: 'Templates', role: '30+ beauty & wellness high-converting website themes' },
  { name: 'Nexora Jobs', role: 'Professional beauty talent recruitment & hiring board' },
  { name: 'Nexora Market', role: 'Zero-commission B2B beauty supply & equipment store' },
  { name: 'Nexora Rewards', role: 'Customer engagement, point redemption & loyalty tiers' },
  { name: 'Growth Partner', role: 'Human field-assisted merchant onboarding & activation' },
  { name: 'Enterprise', role: 'Large chain, franchise & brand infrastructure' },
];

export const DIFFERENTIATOR_CHAIN = [
  { step: 'Website', desc: 'Free custom salon website' },
  { step: 'Digital Identity', desc: '30+ template selection & branding' },
  { step: 'Discovery', desc: 'Local search & customer visibility' },
  { step: 'Booking', desc: 'Real-time scheduling & calendar sync' },
  { step: 'Customer Engagement', desc: 'Automated recall & WhatsApp alerts' },
  { step: 'Jobs', desc: 'Beauty professional talent hiring' },
  { step: 'Market', desc: 'B2B supply & equipment procurement' },
  { step: 'Rewards', desc: 'Unified customer loyalty points' },
  { step: 'Growth Partner Support', desc: 'Dedicated human field onboarding' },
  { step: 'Connected Ecosystem', desc: 'Compounding network value across stakeholders' },
];

export const FEATURE_MATRIX: FeatureMatrixRow[] = [
  {
    featureName: 'Customer discovery marketplace',
    category: 'Discovery',
    industryStandard: 'Observed',
    nexoraArchitecture: 'Observed',
    notes: 'Observed across B2C aggregator platforms like LUZO, Fresha & Booksy',
  },
  {
    featureName: 'Salon booking engine',
    category: 'Operations',
    industryStandard: 'Observed',
    nexoraArchitecture: 'Observed',
    notes: 'Core foundation across traditional salon software tools',
  },
  {
    featureName: 'Salon CRM & Customer Database',
    category: 'Operations',
    industryStandard: 'Observed',
    nexoraArchitecture: 'Observed',
    notes: 'Standard across business management products',
  },
  {
    featureName: 'Customer Loyalty & Points',
    category: 'Retention',
    industryStandard: 'Observed',
    nexoraArchitecture: 'Observed',
    notes: 'Varies between custom points and membership programs',
  },
  {
    featureName: 'WhatsApp automation & Recall',
    category: 'Communication',
    industryStandard: 'Pending',
    nexoraArchitecture: 'Observed',
    notes: 'Often requires third-party API plugins in conventional setups',
  },
  {
    featureName: 'White-label salon websites (30+ templates)',
    category: 'Branding',
    industryStandard: 'Not observed',
    nexoraArchitecture: 'Observed',
    notes: 'Most market competitors enforce their marketplace brand over client brand',
  },
  {
    featureName: 'Professionals / beauty jobs layer',
    category: 'Workforce',
    industryStandard: 'Not observed',
    nexoraArchitecture: 'Observed',
    notes: 'Typically isolated on separate generalist job portals',
  },
  {
    featureName: 'Growth Partner onboarding network',
    category: 'Acquisition',
    industryStandard: 'Not observed',
    nexoraArchitecture: 'Observed',
    notes: 'Structured community field-assisted merchant onboarding framework',
  },
  {
    featureName: 'B2B beauty marketplace & supply',
    category: 'Commerce',
    industryStandard: 'Not observed',
    nexoraArchitecture: 'Observed',
    notes: 'Wholesale distributor integration is rarely connected directly to salon POS',
  },
  {
    featureName: 'Advertising layer across network',
    category: 'Growth',
    industryStandard: 'Pending',
    nexoraArchitecture: 'Observed',
    notes: 'Cross-network promotional mechanism for brands and salons',
  },
  {
    featureName: 'Multi-vertical expansion architecture',
    category: 'Scale',
    industryStandard: 'Not observed',
    nexoraArchitecture: 'Observed',
    notes: 'Most platforms remain strictly single-vertical salon or food point-solutions',
  },
];

export const ARCHITECTURE_MATRIX: ArchitectureDimension[] = [
  {
    dimension: 'Hierarchy Model',
    conventionalApproach: 'Aggregator marketplace that owns the customer relationship.',
    nexoraApproach: 'Owner-first database where salon owners add their own customers and retain full relationship ownership.',
  },
  {
    dimension: 'Ecosystem Connectivity',
    conventionalApproach: 'Fragmented single-purpose tools requiring multi-app subscriptions.',
    nexoraApproach: 'Connected multi-product ecosystem sharing identity and data layers.',
  },
  {
    dimension: 'Branded Digital Presence',
    conventionalApproach: 'Merchants listed as commoditized profiles inside competitor branding.',
    nexoraApproach: 'Dedicated Free Websites with 30+ templates powered by central platform engine.',
  },
  {
    dimension: 'Network Growth Framework',
    conventionalApproach: 'Direct corporate sales forces with geographic limitations.',
    nexoraApproach: 'Structured Growth Partner network with transparent milestone tracking.',
  },
  {
    dimension: 'Supply Chain Integration',
    conventionalApproach: 'Salons purchase supplies offline or via unrelated B2B portals.',
    nexoraApproach: 'B2B beauty distribution layer connecting brands, distributors, and salons directly.',
  },
  {
    dimension: 'Industry Scope',
    conventionalApproach: 'Locked within single-vertical point solution.',
    nexoraApproach: 'Beauty-to-multi-vertical expansion framework (Real Estate, Food, Jobs, Commerce).',
  },
];

export const CANDIDATE_PLATFORMS = [
  { name: 'Urban Company', category: 'Home services & wellness' },
  { name: 'LUZO', category: 'Salon & spa discovery' },
  { name: 'YesMadam', category: 'Salon at home' },
  { name: 'BarberDekho', category: 'Barber & salon discovery' },
  { name: 'GoBarber', category: 'Salon & spa search' },
  { name: 'Zapocuts', category: 'Barber queue & booking' },
  { name: 'NumberApp', category: 'Salon queue & booking' },
  { name: 'Fresha', category: 'Salon marketplace & software' },
  { name: 'Booksy', category: 'Appointment booking' },
  { name: 'Zenoti', category: 'Enterprise salon & spa' },
  { name: 'Mindbody', category: 'Wellness & beauty software' },
  { name: 'Vagaro', category: 'Salon & spa management' },
];

export const WORDING_GUIDELINES = [
  {
    status: 'Allowed',
    text: 'Designed as a broader connected ecosystem',
    rationale: 'Accurately describes system-level architectural design.',
  },
  {
    status: 'Allowed',
    text: 'Differentiated by the combination of…',
    rationale: 'Focuses on structural synergy rather than isolated feature superiority.',
  },
  {
    status: 'Allowed',
    text: 'An ecosystem architecture that connects multiple participant layers',
    rationale: 'Evidence-based multi-stakeholder description.',
  },
  {
    status: 'Allowed',
    text: 'Research Snapshot: 05/10/2026',
    rationale: 'Time-bound empirical observation boundary.',
  },
  {
    status: 'Disallowed',
    text: "World's First",
    rationale: 'Forbidden unsupported absolute global claim.',
  },
  {
    status: 'Disallowed',
    text: "World's Best",
    rationale: 'Forbidden subjective market ranking claim.',
  },
  {
    status: 'Disallowed',
    text: 'No company in the world offers this',
    rationale: 'Unverified absolute claim regarding global competitors.',
  },
  {
    status: 'Disallowed',
    text: '100% unique in the world',
    rationale: 'Disregards observed market overlap across point features.',
  },
];
