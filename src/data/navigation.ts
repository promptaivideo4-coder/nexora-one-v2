export interface NavItem {
  id: string;
  fullLabel: string;
  shortLabel: string;
  route: string;
  description?: string;
}

export const NAV_ITEMS: NavItem[] = [
 { id: 'home', fullLabel: 'Home', shortLabel: 'Home', route: '/' },
 { id: 'salons', fullLabel: 'For Salons', shortLabel: 'For Salons', route: '/for-salons' },
 { id: 'customers', fullLabel: 'For Customers', shortLabel: 'For Customers', route: '/for-customers' },
 { id: 'pricing', fullLabel: 'Pricing', shortLabel: 'Pricing', route: '/pricing' },
 { id: 'investors', fullLabel: 'Investors', shortLabel: 'Investors', route: '/investors' },
];
export const HEADER_CTA = { label: 'Try the salon demo', target: '/for-salons#demo' };

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
