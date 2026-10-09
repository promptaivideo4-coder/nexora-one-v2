export interface StakeholderDetail {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  benefits: string[];
  journeySteps: string[];
  ctaLabel: string;
  ctaTarget: string;
}

export const STAKEHOLDERS: StakeholderDetail[] = [
  {
    id: 'customer',
    name: 'Customer',
    tagline: 'Discover. Book. Save. Earn. Repeat.',
    problem:
      'Finding a trusted local business, comparing options and getting rewarded for loyalty usually means juggling separate apps, calls and messages.',
    solution:
      'One place to discover businesses and services, book where supported, and collect loyalty benefits.',
    benefits: [
      'Business and service discovery',
      'Offers and promotions',
      'Online booking where supported',
      'Loyalty points and rewards',
      'Personalized recommendations',
      'Reviews and ratings',
      'Verified-business discovery',
      'Digital gift cards',
    ],
    journeySteps: [
      'Discover',
      'Find a business',
      'View services & offers',
      'Book or enquire',
      'Get confirmation',
      'Use the service',
      'Earn loyalty',
      'Return',
    ],
    ctaLabel: 'Explore Beauty Directory',
    ctaTarget: 'https://beauty-directory-zeta.vercel.app/',
  },
  {
    id: 'salon-owner',
    name: 'Salon Owner / Business Owner',
    tagline: 'Apne Customers Ko Sirf Manage Nahi — Automatically Wapas Lao.',
    problem:
      'Owners juggle bookings, customer records, and marketing across disconnected tools, often losing touch with existing clients and missing repeat visits.',
    solution:
      'Customer khud add kijiye, Nexora unhe manage karega, 30-day recall karega, birthday wish aur special gift bhejne mein help karega, rebooking karayega — aur nearby new customers ke liye discovery platform bhi dega.',
    benefits: [
      'Customer Management System (Owner Adds Customers)',
      'Digital Customer Database & Profile',
      'Service & Visit History Tracking',
      'Automatic 30-Day Customer Recall',
      'Automatic Rebooking Reminders',
      'Automatic Birthday Wishes & Special Gifts',
      'Personalized Anniversary & Loyalty Offers',
      'Nearby New Customer Discovery Layer',
      'Free Professional Branded Website (3 Templates)',
      'Online Booking & Calendar Management',
      'WhatsApp & SMS Marketing Automation',
      'Nexora Ranking & Reputation Growth',
      'QR Payments & Daily Revenue Reports',
      'Staff Attendance & Salary Management',
      'Business Growth Analytics & Insights',
      'No Joining Fee (Approved Offer Applies)',
    ],
    journeySteps: [
      'Customer visits salon',
      'Owner adds customer to Nexora',
      'Customer Profile + Visit History saved',
      '30-Day Auto Recall activated',
      'Automatic Direct Message sent',
      'Easy Rebooking by customer',
      'Repeat Visit confirmed',
      'Next Recall Cycle begins',
    ],
    ctaLabel: 'Create Salon Website',
    ctaTarget: 'https://fanal-templetes-app.vercel.app/templates',
  },
  {
    id: 'growth-partner',
    name: 'Growth Partner',
    tagline: 'Local salons ko digital banaiye. Nexora network ko apne city mein grow kijiye.',
    problem:
      'Local expansion and salon onboarding require a structured local network engine to help neighborhood businesses adopt technology.',
    solution:
      'Growth Partner is Nexora’s local expansion engine — connecting salon owners, assisting with setup, and tracking progress through milestone rewards.',
    benefits: [
      'Dedicated Growth Partner Dashboard',
      'Salon Onboarding & Activation Tracking',
      'Partner Performance Insights',
      'Local Network Expansion Opportunity',
      'Territory-based Growth Potential',
      'Marketing Kits & Branding Support',
      'Training & Corporate Guidance',
      'Onboarding & Setup Assistance',
      'Software & Hardware Deployment Tracking',
      'Milestone Progress & Rewards',
    ],
    journeySteps: [
      'Join Nexora',
      'Partner Profile',
      'Get Trained',
      'Find Local Salon',
      'Demo Nexora',
      'Salon Owner Joins',
      'Salon Setup',
      'Salon Activates',
      'Partner Credit',
      'Milestone Progress',
      'Rewards & Recognition',
      'Network Growth',
    ],
    ctaLabel: 'Join Growth Partner',
    ctaTarget: 'https://pink-growth-partner.vercel.app/',
  },
  {
    id: 'b2b',
    name: 'B2B Brands / Distributors',
    tagline: 'Connect brands, distributors and beauty businesses in one B2B network.',
    problem:
      'Reaching salons and professionals across regions depends on scattered relationships and limited visibility.',
    solution:
      'A B2B network and marketplace layer that connects supply with beauty businesses.',
    benefits: [
      'Access to salon and professional networks',
      'B2B marketplace presence',
      'Product discovery and listing',
      'Wholesale opportunities',
      'Lead generation and business enquiries',
      'Brand visibility across network',
      'Advertising opportunities',
      'Distributor network expansion',
      'Regional market expansion',
    ],
    journeySteps: [
      'Brand / Manufacturer',
      'Distributor / Supplier',
      'Salon / Business / Professional',
      'Customer',
    ],
    ctaLabel: 'Join B2B Network',
    ctaTarget: 'https://beauty-shop-2.vercel.app/',
  },
  {
    id: 'investor',
    name: 'Investors & Ecosystem Growth',
    tagline: 'Multi-Vertical • Scalability • Returns',
    problem:
      'Fragmented digital markets lack a consolidated platform that connects all participants across high-growth verticals.',
    solution:
      'Explore market opportunity, monetization streams, and long-term ecosystem expansion strategy.',
    benefits: [
      'Multi-vertical scalability',
      'Consolidated data & insights',
      'Recurring monetization streams',
      'Ecosystem network effects',
      'Long-term asset growth',
    ],
    journeySteps: [
      'Analyze market potential',
      'Review vertical ecosystems',
      'Assess platform scalability',
      'Evaluate monetization models',
      'Explore strategic partnership opportunities',
    ],
    ctaLabel: 'View Investor Strategy',
    ctaTarget: '/investors',
  },
  {
    id: 'professionals',
    name: 'Beauty Professionals',
    tagline: 'Stylists, Therapists, Technicians & Beauty Specialists',
    problem:
      'Finding verified opportunities and building a professional digital presence is difficult in a fragmented local market.',
    solution:
      'A dedicated professional portal for portfolio management, job discovery, and direct client connections.',
    benefits: [
      'Professional Digital Portfolio',
      'Verified Job Network',
      'Skill Certifications Display',
      'Direct Client Booking (where supported)',
      'Service Performance Insights',
      'Industry Networking Opportunities',
    ],
    journeySteps: [
      'Create Professional Profile',
      'Upload Portfolio & Skills',
      'Connect with Verified Businesses',
      'Apply for Opportunities',
      'Manage Direct Bookings',
      'Grow Professional Brand',
    ],
    ctaLabel: 'Join as Professional',
    ctaTarget: '/products#professional-tools',
  },
];

export const PLANNED_REWARD_FRAMEWORK = [
  { milestone: '25 shops', recognition: 'Official Nexora T-shirt', collection: 'Activation 01', cost: 'Approved' },
  { milestone: '50 shops', recognition: 'Samsung Tablet', collection: 'Activation 02', cost: 'Approved' },
  { milestone: '100 shops', recognition: 'Branded HP Laptop', collection: 'Activation 03', cost: 'Approved' },
  { milestone: '250 shops', recognition: 'Electric Scooter', collection: 'Activation 04', cost: 'Approved' },
  { milestone: '500 shops', recognition: 'Latest iPhone', collection: 'Activation 05', cost: 'Approved' },
  { milestone: '750 shops', recognition: 'Royal Enfield 350 CC', collection: 'Activation 06', cost: 'Approved' },
  { milestone: '1000+ shops', recognition: 'SUV Car (District Partner)', collection: 'Activation 07', cost: 'Approved' },
];

export const REWARD_DISCLAIMER =
  'Illustrative planned framework. Reward terms, eligibility, funding, compliance and availability are not yet finalized and this is not a guaranteed offer. Final terms will be published in the Growth Partner program terms.';
