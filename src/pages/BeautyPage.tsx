import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  User,
  Store,
  Globe,
  Scissors,
  TrendingUp,
  Boxes,
  Layers,
  ChevronRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ShieldCheck,
  Smartphone,
  Laptop,
  QrCode,
  MapPin,
  Users,
  ShoppingBag,
  Award,
  Zap,
  Building2,
  ExternalLink,
  PhoneCall,
  Calendar,
  DollarSign,
  Percent,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { SectionDivider } from '../components/common/SectionDivider';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/common/MotionWrapper';
import { InteractiveImage } from '../components/common/InteractiveImage';
import { HorizontalCarousel } from '../components/common/HorizontalCarousel';

// Visual Assets
import productsEcosystemVisual from '../assets/images/products_ecosystem_hero_reference_1791375256897.jpg';
import jaipurSalonBrandingImg from '../assets/images/nexora_one_branding_vision_cinematic_1791371326735.jpg';

export const BeautyPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'salon' | 'customer' | 'stylist' | 'partner' | 'b2b'>('salon');

  const stakeholderData = {
    salon: {
      tag: 'For Salon & Parlor Owners',
      title: 'Apne Customers Ko Wapas Lao. Build Your Own Database. Manage Your Brand.',
      desc: 'Nexora is your customer retention engine. Instead of losing client records, add your own customers to build a permanent database with service history, automated 30-day recall, and birthday automation — while keeping 100% of your earnings.',
      benefits: [
        {
          title: 'Core Customer Retention Engine',
          desc: 'Add your own customers, save visit history, and let Nexora automatically send 30-day recall and rebooking reminders via WhatsApp/SMS.',
        },
        {
          title: 'Automated Birthday & Anniversary Wishes',
          desc: 'Build deep loyalty with automatic personal greetings and special gifts sent from your salon to your customers on their special days.',
        },
        {
          title: 'New Customer Discovery Layer',
          desc: 'Get discovered by new nearby customers through the Nexora platform with high-ranking search and special deals for first-time visitors.',
        },
        {
          title: 'Free Professional Branded Website',
          desc: 'Get your own high-converting luxury website with your own domain, photo gallery, and direct booking engine live in 24 hours.',
        },
      ],
      ctaText: 'Explore SalonOS Solutions',
      ctaLink: '/who-benefits#salon-owner',
      badge: 'Retention First Approach',
    },
    customer: {
      tag: 'For Beauty Customers',
      title: 'Discover Trusted Local Salons. Book Instantly. Earn Real Rewards.',
      desc: 'No more waiting in long salon queues or making awkward phone calls. The Nexora Customer App connects you with certified beauty destinations, transparent service menus, and universal loyalty perks.',
      benefits: [
        {
          title: 'Hyperlocal Verified Discovery',
          desc: 'Search top-rated hair, skin, nail, and makeup studios in your neighborhood with real customer reviews and hygiene standards.',
        },
        {
          title: 'Real-Time Slot Booking',
          desc: 'View live chair availability and book your favorite stylist with instant confirmation.',
        },
        {
          title: 'Transparent Pricing & Exclusive Packages',
          desc: 'No hidden charges. Clear service breakdowns and seasonal digital combo offers.',
        },
        {
          title: 'Universal Nexora Loyalty Points',
          desc: 'Earn rewards on every service and redeem them seamlessly across any verified Nexora member salon.',
        },
      ],
      ctaText: 'Explore Customer App',
      ctaLink: '/products#customer-app',
      badge: 'Verified Salons Only',
    },
    stylist: {
      tag: 'For Stylists & Beauticians',
      title: 'Build Your Verified Portfolio. Find Better Jobs. Grow Your Career.',
      desc: 'Beauticians, hairdressers, and makeup artists are the backbone of the industry. Nexora provides verified career mobility and professional recognition.',
      benefits: [
        {
          title: 'Digital Professional Portfolio',
          desc: 'Showcase your real haircut, bridal, and skincare transformations on a shareable digital profile.',
        },
        {
          title: 'Nexora Salon Jobs Network',
          desc: 'Direct recruitment connections with premium salons seeking certified talent—no middlemen or job agencies.',
        },
        {
          title: 'Skill Certifications & Workshops',
          desc: 'Access advanced beauty masterclasses, brand workshops, and certified styling techniques.',
        },
        {
          title: 'Transparent Earnings & Performance',
          desc: 'Track service commissions, client ratings, and tips directly inside your staff mobile dashboard.',
        },
      ],
      ctaText: 'Explore Salon Jobs',
      ctaLink: '/products#salon-jobs',
      badge: 'Verified Career Mobility',
    },
    partner: {
      tag: 'For Growth Partners (Expansion Engine)',
      title: 'Nexora Ka Local Expansion Engine. Onboard Salons. Track Your Progress.',
      desc: 'Growth Partners are the expansion layer connecting Nexora with local salon businesses — helping neighborhood businesses adopt technology and tracking growth through a dedicated dashboard.',
      benefits: [
        {
          title: 'Dedicated Partner Dashboard',
          desc: 'Track your total salons, active onboardings, and milestone progress in real-time with your own partner portal.',
        },
        {
          title: 'Planned Reward Framework',
          desc: 'Reach shop-onboarding milestones (25, 50, 100+) to unlock planned rewards like T-Shirts, Tablets, and more.',
        },
        {
          title: 'Territory-Based Growth',
          desc: 'Expand the Nexora network in your city or area. Help salons setup their websites, SalonOS, and digital tools.',
        },
        {
          title: 'Marketing & Training Kits',
          desc: 'Receive official Nexora branding support, demo training, marketing materials, and dedicated corporate guidance.',
        },
      ],
      ctaText: 'Become a Growth Partner',
      ctaLink: '/who-benefits#growth-partner',
      badge: 'Local Expansion Network',
    },
    b2b: {
      tag: 'For Beauty Brands & Wholesale Suppliers',
      title: 'Sell Directly to Thousands of Salons Without Middleman Friction.',
      desc: 'Traditional beauty supply chains lose 30% to 40% of margin in multi-tiered distributors and offline wholesaler networks. Nexora connects manufacturers straight to salon counters.',
      benefits: [
        {
          title: 'Direct Wholesale Marketplace',
          desc: 'List professional shampoos, dyes, waxes, equipment, and salon furniture for verified salon owners.',
        },
        {
          title: 'Bulk Order Management & Logistics',
          desc: 'Receive consolidated repeat orders with verified business delivery addresses and automated invoicing.',
        },
        {
          title: 'Brand Promotion & Discovery Zones',
          desc: 'Feature your products directly inside high-performing member salons and white-label eCommerce catalogs.',
        },
        {
          title: 'Predictable Demand & Real-Time Analytics',
          desc: 'Gain visibility into real product consumption trends across cities and regional market clusters.',
        },
      ],
      ctaText: 'Explore B2B Marketplace',
      ctaLink: '/who-benefits#b2b',
      badge: 'Direct Manufacturer Trade',
    },
  };

  const currentStakeholder = stakeholderData[activeTab];

  const coreLayers = [
    {
      num: '01',
      title: 'Customer Discovery & Booking',
      subtitle: 'Customer App & Local Web Portals',
      desc: 'Nearby salon discovery, instant appointment reservation, digital service menus, and unified loyalty wallet.',
      icon: <User className="w-5 h-5" />,
      route: '/products#customer-app',
    },
    {
      num: '02',
      title: 'SalonOS Business Operating System',
      subtitle: 'Point-of-Sale & CRM Engine',
      desc: 'Cloud appointment scheduler, staff attendance, commission tracking, inventory alerts, and WhatsApp client recall.',
      icon: <Store className="w-5 h-5" />,
      route: '/products#salonos',
    },
    {
      num: '03',
      title: '30+ White-Label Website Templates',
      subtitle: 'Free Branded Online Presence',
      desc: 'Every onboarded salon receives a custom branded website on its own domain, completely eliminating high web agency costs.',
      icon: <Globe className="w-5 h-5" />,
      route: '/products#white-label',
    },
    {
      num: '04',
      title: 'Growth Partner Network',
      subtitle: 'On-Ground City Expansion Team',
      desc: 'Trained local ambassadors who visit salons, configure digital tools, setup QR payment counter stands, and support owners.',
      icon: <TrendingUp className="w-5 h-5" />,
      route: '/who-benefits#growth-partner',
    },
    {
      num: '05',
      title: 'Salon Jobs & Talent Platform',
      subtitle: 'Verified Beautician Recruitment',
      desc: 'Connecting trained hair stylists, nail technicians, and estheticians directly with verified salon employers.',
      icon: <Scissors className="w-5 h-5" />,
      route: '/products#salon-jobs',
    },
    {
      num: '06',
      title: 'Beauty B2B Wholesale Marketplace',
      subtitle: 'Direct Factory-to-Salon Procurement',
      desc: 'Wholesale marketplace enabling salons to purchase authentic salon products, cosmetics, and equipment at wholesale trade rates.',
      icon: <Boxes className="w-5 h-5" />,
      route: '/products#beauty-b2b',
    },
    {
      num: '07',
      title: 'Nexora One Brand Acceleration',
      subtitle: 'Physical Branding & Visibility Support',
      desc: 'Top-performing verified member salons qualify for physical Nexora One 3D LED signage, branded uniforms, and marketing kits.',
      icon: <Award className="w-5 h-5" />,
      route: '/about#branding-vision',
    },
  ];

  const faqs = [
    {
      q: 'What exactly is the Nexora One Beauty Ecosystem?',
      a: 'Nexora One is not just a booking app or isolated POS tool. It is an integrated industry ecosystem linking customers, salon owners, stylists, growth partners, and wholesale suppliers into one connected system so all participants grow together.',
    },
    {
      q: 'How does Nexora One differ from aggregators like Urban Company or Fresha?',
      a: 'Aggregators lock salons into their platform, hide customer contact details, and charge heavy commissions (up to 20%–30%) on every booking. Nexora One gives the salon its OWN branded website and app, direct customer ownership, and zero commission on repeat walk-in clients.',
    },
    {
      q: 'Why does Nexora provide 30+ free website templates to salons?',
      a: 'Most local salon owners cannot afford ₹40,000–₹80,000 for a private digital agency to build and maintain a custom website. Nexora provides high-converting luxury web templates free of cost as part of the ecosystem onboarding.',
    },
    {
      q: 'What is the role of a Growth Partner on the ground?',
      a: 'Growth Partners are our local expansion ambassadors. They visit neighborhood salons, conduct hands-on software training, install QR stands and soundboxes, and assist salon owners in reaching growth milestones.',
    },
    {
      q: 'How does the B2B Wholesale Marketplace benefit salon owners?',
      a: 'Salons usually buy shampoos, dyes, bleaches, and equipment from middlemen distributors who inflate prices by 30% to 40%. The Nexora B2B Marketplace connects salons directly with verified manufacturers and master distributors at wholesale trade rates.',
    },
    {
      q: 'Can a salon keep its existing brand name and identity?',
      a: 'Yes, 100%! Nexora empowers independent salons with white-label technology under their own brand. Only selected top-performing salons that meet specific milestones may optionally participate in the co-branded NEXORA ONE showcase program.',
    },
  ];

  return (
    <div className="w-full bg-[#0A0A0A] text-white">
      {/* 1. HERO SECTION — UNDERSTAND THE BEAUTY ECOSYSTEM */}
      <section className="relative overflow-hidden w-full border-b border-white/[0.08] pt-12 sm:pt-16 pb-12 sm:pb-16 bg-[#0A0A0A]">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#DAAF37]/10 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#DAAF37]/08 blur-[130px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#F4D03F] animate-pulse" />
              INDIA&apos;S BEAUTY INDUSTRY GROWTH ECOSYSTEM
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F5F5F5] tracking-tight max-w-4xl mx-auto leading-[1.15] mb-5">
              The Nexora One{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF6D6] via-[#F4D03F] to-[#DAAF37]">
                Beauty Ecosystem
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/85 font-sans leading-relaxed max-w-3xl mx-auto mb-6">
              Beyond isolated booking apps and billing software. A unified connected network bringing{' '}
              <strong className="text-white font-semibold">Customers, Salons, Stylists, Growth Partners, and B2B Brands</strong>{' '}
              into one seamless digital engine.
            </p>

            {/* Core Explanation Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white/[0.04] via-[#DAAF37]/10 to-white/[0.02] border border-[#DAAF37]/35 max-w-3xl mx-auto mb-8 sm:mb-10 text-xs sm:text-sm text-white/80 font-sans leading-relaxed shadow-[0_8px_32px_rgba(0,0,0,0.7)]">
              <strong className="text-[#F4D03F] font-heading font-semibold uppercase tracking-wider block mb-1">
                Ecosystem Vision in One Sentence:
              </strong>
              &ldquo;Nexora One transforms independent local beauty parlors into tech-enabled, highly visible, profitable businesses connected to clients, talent, and wholesale supply.&rdquo;
            </div>

            {/* PRIMARY CINEMATIC SHOWCASE IMAGE */}
            <div className="max-w-[1360px] mx-auto text-left mb-8">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_24px_70px_rgba(0,0,0,0.9),0_0_40px_rgba(218,175,55,0.15)] group bg-[#0A0A0A]">
                <InteractiveImage
                  src={productsEcosystemVisual}
                  alt="Nexora One Connected Beauty Ecosystem Architecture"
                  className="w-full h-auto object-cover select-none group-hover:scale-[1.01] transition-transform duration-700 block"
                  loading="eager"
                />
              </div>

              {/* 4 Instant Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] flex-shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-heading font-bold text-white mb-0.5">Free Branded Websites</div>
                    <div className="text-[11px] text-white/60 font-sans">30+ luxury templates for every local salon.</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] flex-shrink-0 mt-0.5">
                    <Store className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-heading font-bold text-white mb-0.5">Zero Commission Walk-Ins</div>
                    <div className="text-[11px] text-white/60 font-sans">SalonOS manages bookings without 20% fees.</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] flex-shrink-0 mt-0.5">
                    <Boxes className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-heading font-bold text-white mb-0.5">B2B Wholesale Procurement</div>
                    <div className="text-[11px] text-white/60 font-sans">Direct factory prices on beauty supplies.</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-heading font-bold text-white mb-0.5">Growth Partner Ground Team</div>
                    <div className="text-[11px] text-white/60 font-sans">Local on-boarding and hardware setup.</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. WHY THIS MATTERS — TRADITIONAL FRAGMENTED MARKET VS NEXORA ONE */}
      <section className="py-12 sm:py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <SectionHeading
          eyebrow="Market Problem & Solution"
          title="The Fragmented Reality Today vs."
          titleAccent="The Nexora Connected Solution"
          subtitle="Understanding why conventional point software fails Indian salon owners, and how our unified ecosystem fixes the root cause."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Old Fragmented Reality */}
          <GlassCard className="p-6 sm:p-8 border-red-500/25 bg-gradient-to-b from-red-950/15 via-black to-black">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-bold">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-heading font-bold text-red-400 uppercase tracking-widest block">
                  Conventional Beauty Industry (Broken)
                </span>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
                  Fragmented & High-Commission Silos
                </h3>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm font-sans text-white/75">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">✕</span>
                <div>
                  <strong className="text-white block mb-0.5">Aggregator Commission Trap:</strong>
                  Platforms take 20% to 30% per booking and mask customer contact details, preventing direct salon loyalty.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">✕</span>
                <div>
                  <strong className="text-white block mb-0.5">No Private Digital Brand:</strong>
                  Over 90% of local salons lack their own website, relying only on passing foot traffic or manual paper ledgers.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">✕</span>
                <div>
                  <strong className="text-white block mb-0.5">Costly Wholesale Supplies:</strong>
                  Salons buy dyes, shampoos, and tools through 3-tier distributor layers, losing massive profit margin.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">✕</span>
                <div>
                  <strong className="text-white block mb-0.5">Unstructured Stylist Hiring:</strong>
                  Recruitment happens through chaotic WhatsApp groups with unverified credentials and high turnover.
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Nexora One Connected Reality */}
          <GlassCard className="p-6 sm:p-8 border-[#DAAF37]/40 bg-gradient-to-b from-[#DAAF37]/10 via-black to-black" glow="gold">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/20 border border-[#DAAF37]/50 flex items-center justify-center text-[#F4D03F] font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                  The Nexora One Solution (Connected)
                </span>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF6D6] to-[#DAAF37]">
                  Unified Digital Growth Architecture
                </h3>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm font-sans text-white/85">
              <div className="p-3.5 rounded-xl bg-black/60 border border-[#DAAF37]/30 flex items-start gap-3">
                <span className="text-[#DAAF37] font-bold mt-0.5">✓</span>
                <div>
                  <strong className="text-[#F4D03F] block mb-0.5">Direct Customer Ownership (0% Commission):</strong>
                  Salon gets its own branded booking link and QR stand. All direct client relationships and revenues remain 100% yours.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/60 border border-[#DAAF37]/30 flex items-start gap-3">
                <span className="text-[#DAAF37] font-bold mt-0.5">✓</span>
                <div>
                  <strong className="text-[#F4D03F] block mb-0.5">Free Custom Website with 30+ Templates:</strong>
                  Instant luxury website hosted on salon domain with photo gallery, service list, staff showcase, and WhatsApp button.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/60 border border-[#DAAF37]/30 flex items-start gap-3">
                <span className="text-[#DAAF37] font-bold mt-0.5">✓</span>
                <div>
                  <strong className="text-[#F4D03F] block mb-0.5">Direct B2B Factory Purchasing:</strong>
                  Order genuine salon products straight from manufacturers at wholesale trade discounts, saving 25%–35% on supplies.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/60 border border-[#DAAF37]/30 flex items-start gap-3">
                <span className="text-[#DAAF37] font-bold mt-0.5">✓</span>
                <div>
                  <strong className="text-[#F4D03F] block mb-0.5">Verified Salon Jobs Talent Network:</strong>
                  Connect directly with certified stylists and makeup artists backed by digital portfolios and verified skills.
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* 3. INTERACTIVE STAKEHOLDER NAVIGATOR — HOW THE ECOSYSTEM WORKS FOR YOU */}
      <section className="py-12 sm:py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-[#F4D03F]" />
            ROLE-BASED VALUE NAVIGATOR
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-3">
            How The Ecosystem Works{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF6D6] via-[#F4D03F] to-[#DAAF37]">
              For You
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-sans">
            Select your role to understand exactly how Nexora One delivers tangible value to your day-to-day operations.
          </p>
        </div>

        {/* Stakeholder Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {[
            { id: 'salon', label: 'Salon Owners', icon: <Store className="w-4 h-4" /> },
            { id: 'customer', label: 'Customers', icon: <User className="w-4 h-4" /> },
            { id: 'stylist', label: 'Stylists & Staff', icon: <Scissors className="w-4 h-4" /> },
            { id: 'partner', label: 'Growth Partners', icon: <TrendingUp className="w-4 h-4" /> },
            { id: 'b2b', label: 'B2B Brands & Suppliers', icon: <Boxes className="w-4 h-4" /> },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F4D03F] to-[#DAAF37] text-[#0A0A0A] shadow-[0_4px_20px_rgba(218,175,55,0.35)] scale-105'
                    : 'bg-white/[0.04] border border-white/10 text-white/70 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stakeholder Detailed Display */}
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-6 sm:p-10 border-[#DAAF37]/35 shadow-[0_16px_50px_rgba(0,0,0,0.8)]" glow="gold">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block">
                  {currentStakeholder.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                  {currentStakeholder.title}
                </h3>
              </div>
              <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold">
                {currentStakeholder.badge}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-6">
              {currentStakeholder.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {currentStakeholder.benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-start gap-3 hover:border-[#DAAF37]/30 transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-[#DAAF37]/20 border border-[#DAAF37]/40 text-[#F4D03F] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-xs font-heading font-bold text-white mb-1">
                      {b.title}
                    </h4>
                    <p className="text-[11px] text-white/65 font-sans leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <span className="text-xs text-white/50 font-sans">
                Ready to participate in the Nexora Beauty Network?
              </span>
              <Button
                to={currentStakeholder.ctaLink}
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {currentStakeholder.ctaText}
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* GROWTH PARTNER EXPANSION LAYER — CONCISE VISUAL */}
      <section className="py-12 bg-white/[0.02] border-b border-white/[0.08]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-[0.2em] mb-3">Expansion Layer</span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white uppercase tracking-wider">The Nexora Expansion Path</h3>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] sm:text-xs font-heading font-bold">
            {[
              { label: 'NEXORA', color: 'text-white' },
              { label: 'GROWTH PARTNER', color: 'text-[#DAAF37]' },
              { label: 'SALON OWNER', color: 'text-white' },
              { label: 'SALONOS', color: 'text-[#DAAF37]' },
              { label: 'CUSTOMER MANAGEMENT', color: 'text-white' },
              { label: 'RECALL / BOOKING / GROWTH', color: 'text-[#DAAF37]' }
            ].map((item, i, arr) => (
              <React.Fragment key={i}>
                <div className={`px-4 py-2 rounded-lg bg-white/5 border border-white/10 ${item.color} shadow-sm`}>
                  {item.label}
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-white/20" />
                )}
              </React.Fragment>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-xs text-white/40 font-sans italic">
              Growth Partner is the expansion layer connecting Nexora with local salon businesses.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE 7 CONNECTED LAYERS BREAKDOWN */}
      <section className="py-12 sm:py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <SectionHeading
          eyebrow="System Architecture"
          title="The Seven Pillars of the"
          titleAccent="Nexora Network"
          subtitle="How each technological and operational module fits together to create a continuous, compounding growth loop."
        />

        {/* Mobile Horizontal Carousel */}
        <div className="block lg:hidden">
          <HorizontalCarousel
            scrollStep={320}
            alignArrows="top-right"
          >
            {coreLayers.map((layer) => (
              <div
                key={layer.num}
                className="w-[calc(100vw-32px)] min-w-[calc(100vw-32px)] sm:w-auto sm:min-w-[340px] max-w-[380px] flex-shrink-0 snap-start flex px-0.5"
              >
                <GlassCard
                  className="p-5 sm:p-6 flex flex-col justify-between w-full border-white/[0.12] hover:border-[#DAAF37]/50 transition-all group rounded-2xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#DAAF37]">
                        LAYER {layer.num}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                        {layer.icon}
                      </div>
                    </div>

                    <h3 className="text-base font-heading font-bold text-white mb-1">
                      {layer.title}
                    </h3>
                    <div className="text-xs text-[#DAAF37] font-medium mb-2.5">
                      {layer.subtitle}
                    </div>
                    <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                      {layer.desc}
                    </p>
                  </div>

                  <Link
                    to={layer.route}
                    className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-heading font-medium text-[#DAAF37] hover:text-[#F4D03F] transition-colors"
                  >
                    <span>Learn Details</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </GlassCard>
              </div>
            ))}
          </HorizontalCarousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-5">
          {coreLayers.map((layer) => (
            <GlassCard
              key={layer.num}
              className="p-5 sm:p-6 flex flex-col justify-between border-white/[0.12] hover:border-[#DAAF37]/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#DAAF37]">
                    LAYER {layer.num}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                    {layer.icon}
                  </div>
                </div>

                <h3 className="text-base font-heading font-bold text-white mb-1">
                  {layer.title}
                </h3>
                <div className="text-xs text-[#DAAF37] font-medium mb-2.5">
                  {layer.subtitle}
                </div>
                <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                  {layer.desc}
                </p>
              </div>

              <Link
                to={layer.route}
                className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-heading font-medium text-[#DAAF37] hover:text-[#F4D03F] transition-colors"
              >
                <span>Learn Details</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 5. REAL-WORLD SHOWCASE — THE JAIPUR SALON BLUEPRINT */}
      <section className="py-12 sm:py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#F4D03F]" />
            REAL-WORLD BLUEPRINT
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-3">
            Jaipur → Rajasthan →{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF6D6] via-[#F4D03F] to-[#DAAF37]">
              All-India
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
            See how an everyday neighborhood beauty salon evolves into an established, branded, tech-equipped NEXORA ONE destination.
          </p>
        </div>

        {/* Cinematic Salon Visual */}
        <div className="max-w-[1360px] mx-auto mb-8">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_24px_70px_rgba(0,0,0,0.85)] group bg-[#0A0A0A]">
            <InteractiveImage
              src={jaipurSalonBrandingImg}
              alt="Nexora One Luxury Branded Salon Destination in Jaipur Rajasthan"
              className="w-full h-auto object-cover select-none group-hover:scale-[1.01] transition-transform duration-700 block"
              loading="lazy"
            />
          </div>
        </div>

        {/* 5-Step Transformation Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 max-w-[1360px] mx-auto">
          {[
            {
              step: 'Step 01',
              title: 'Ground Partner Onboarding',
              desc: 'Local Growth Partner visits salon, sets up tablet software, and registers business credentials.',
            },
            {
              step: 'Step 02',
              title: 'Instant White-Label Launch',
              desc: 'Salon gets custom branded website with service menu, online booking, and WhatsApp chat.',
            },
            {
              step: 'Step 03',
              title: 'QR Stand & Soundbox Active',
              desc: 'Payment counter upgraded with zero-fee QR stand and real-time audio payment confirmations.',
            },
            {
              step: 'Step 04',
              title: 'B2B Wholesale Supplies',
              desc: 'Salon switches to direct manufacturer ordering, saving 30% on salon cosmetics and equipment.',
            },
            {
              step: 'Step 05',
              title: 'Brand Qualification Milestone',
              desc: 'Qualifying high-performing salons receive official physical NEXORA ONE signage and marketing kits.',
            },
          ].map((s, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/35 transition-colors"
            >
              <div className="text-xs font-mono font-bold text-[#DAAF37] mb-1">{s.step}</div>
              <h3 className="text-xs font-heading font-bold text-white mb-1.5">{s.title}</h3>
              <p className="text-[11px] text-white/60 font-sans leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS — CLARIFYING EVERYTHING */}
      <section className="py-12 sm:py-16 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#F4D03F]" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Common Questions About The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF6D6] via-[#F4D03F] to-[#DAAF37]">
              Beauty Ecosystem
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-sans mt-2">
            Clear, honest answers to help every user understand how Nexora One operates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqs.map((faq, idx) => (
            <GlassCard key={idx} className="p-5 sm:p-6 border-white/10 hover:border-[#DAAF37]/40 transition-colors">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/35 text-[#F4D03F] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  ?
                </span>
                <div>
                  <h3 className="text-sm font-heading font-bold text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-xs text-white/70 font-sans leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="py-12 sm:py-16 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <GlassCard className="p-8 sm:p-12 border-[#DAAF37]/40 shadow-[0_20px_60px_rgba(0,0,0,0.85)]" glow="gold">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/40 text-[#F4D03F] text-xs font-heading font-medium tracking-wide uppercase mb-4">
            JOIN THE BEAUTY REVOLUTION
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-3">
            Ready to Connect Your Beauty Business?
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/75 font-sans max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you are a salon owner wanting your own white-label website, an entrepreneur exploring the Growth Partner program, or a brand seeking direct salon distribution—Nexora One welcomes you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Button
              to="/who-benefits#salon-owner"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Onboard Your Salon
            </Button>
            <Button
              to="/who-benefits#growth-partner"
              variant="secondary"
              size="md"
            >
              Become a Growth Partner
            </Button>
            <Button
              to="/products"
              variant="secondary"
              size="md"
            >
              View All Products
            </Button>
          </div>
        </GlassCard>
      </section>
    </div>
  );
};
