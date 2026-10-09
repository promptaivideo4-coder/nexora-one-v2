export interface NavItem {
  id: string;
  fullLabel: string;
  shortLabel: string;
  route: string;
  description?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', fullLabel: 'nav.home.full', shortLabel: 'nav.home.short', route: '/' },
  { id: 'ecosystem', fullLabel: 'nav.ecosystem.full', shortLabel: 'nav.ecosystem.short', route: '/ecosystem' },
  { id: 'products', fullLabel: 'nav.products.full', shortLabel: 'nav.products.short', route: '/products' },
  { id: 'beauty', fullLabel: 'nav.beauty.full', shortLabel: 'nav.beauty.short', route: '/beauty-ecosystem' },
  { id: 'benefits', fullLabel: 'nav.benefits.full', shortLabel: 'nav.benefits.short', route: '/who-benefits' },
  { id: 'verticals', fullLabel: 'nav.verticals.full', shortLabel: 'nav.verticals.short', route: '/verticals' },
  { id: 'vision', fullLabel: 'nav.vision.full', shortLabel: 'nav.vision.short', route: '/vision-mission' },
  { id: 'investors', fullLabel: 'nav.investors.full', shortLabel: 'nav.investors.short', route: '/investors' },
  { id: 'research', fullLabel: 'nav.research.full', shortLabel: 'nav.research.short', route: '/market-research' },
  { id: 'insights', fullLabel: 'nav.investor_guide.full', shortLabel: 'nav.investor_guide.short', route: '/insights' },
  { id: 'about', fullLabel: 'nav.about.full', shortLabel: 'nav.about.short', route: '/about' },
];

export const HEADER_CTA = {
  label: 'nav.cta',
  target: '/ecosystem',
};

export const FOOTER_SECTIONS = {
  brand: {
    name: 'NEXORA ONE',
    descriptor: 'Connected Digital Ecosystem',
    statement: 'footer.brand.statement',
  },
  ecosystem: [
    { label: 'Beauty', key: 'beauty', href: '/verticals#beauty' },
    { label: 'Real Estate', key: 'realEstate', href: '/verticals#real-estate' },
    { label: 'Food Delivery', key: 'foodDelivery', href: '/verticals#food' },
    { label: 'Jobs', key: 'jobs', href: '/verticals#jobs' },
    { label: 'Commerce', key: 'commerce', href: '/verticals#commerce' },
    { label: 'Advertising', key: 'advertising', href: '/verticals#advertising' },
    { label: 'AI & Technology', key: 'aiTechnology', href: '/verticals#ai' },
  ],
  products: [
    { label: 'SalonOS', key: 'salonos', href: '/products#salonos' },
    { label: 'White-Label Websites & Apps', key: 'whiteLabelWebsitesApps', href: '/products#white-label' },
    { label: 'Growth Partner', key: 'growthPartner', href: '/products#growth-partner' },
    { label: 'Beauty B2B', key: 'beautyB2B', href: '/products#beauty-b2b' },
    { label: 'Customer App', key: 'customerApp', href: '/products#customer-app' },
  ],
  company: [
    { label: 'Vision & Mission', key: 'visionMission', href: '/vision-mission' },
    { label: 'Market Research', key: 'marketResearch', href: '/market-research' },
    { label: 'About', key: 'about', href: '/about' },
    { label: 'Investor Guide / Shark Tank', key: 'investorGuideSharkTank', href: '/insights' },
  ],
  policies: [
    { label: 'Privacy Policy', key: 'privacyPolicy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', key: 'termsConditions', href: '/terms-and-conditions' },
    { label: 'Cookie Policy', key: 'cookiePolicy', href: '/cookie-policy' },
    { label: 'Refund & Cancellation Policy', key: 'refundCancellationPolicy', href: '/refund-cancellation-policy' },
    { label: 'Disclaimer', key: 'disclaimer', href: '/disclaimer' },
    { label: 'Grievance / Support', key: 'grievanceSupport', href: '/grievance-support' },
  ],
  contactEmail: 'nexoraallapps@gmail.com',
  contactPhone: '+91 9782105055',
};
