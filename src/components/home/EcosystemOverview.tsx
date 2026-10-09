import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';

// Custom Warm Gold Illuminated SVG Icons matching the reference closely
const CustomerIcon: React.FC = () => (
  <div className="relative w-12 h-12 rounded-full bg-gradient-to-b from-[#2A2210] to-[#120F08] border border-[#DAAF37]/50 flex items-center justify-center shadow-[0_0_20px_rgba(218,175,55,0.35)] flex-shrink-0 group-hover:shadow-[0_0_28px_rgba(218,175,55,0.55)] transition-shadow">
    <div className="absolute inset-0 rounded-full bg-radial from-[#F4D03F]/20 to-transparent pointer-events-none" />
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7 relative z-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldCust" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF4C2" />
          <stop offset="50%" stopColor="#F4D03F" />
          <stop offset="100%" stopColor="#DAAF37" />
        </linearGradient>
      </defs>
      {/* Woman silhouette with updo/ponytail */}
      <circle cx="20" cy="13" r="5" fill="url(#goldCust)" />
      <path d="M24 11C26 10 27 12 26 14C25 15 24 15 24 15" stroke="url(#goldCust)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 29C12 24.5 15.5 21 20 21C24.5 21 28 24.5 28 29V31H12V29Z" fill="url(#goldCust)" />
      <path d="M16 23C17.5 24.5 22.5 24.5 24 23" stroke="#997517" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  </div>
);

const SalonOwnerIcon: React.FC = () => (
  <div className="relative w-12 h-12 rounded-full bg-gradient-to-b from-[#2A2210] to-[#120F08] border border-[#DAAF37]/50 flex items-center justify-center shadow-[0_0_20px_rgba(218,175,55,0.35)] flex-shrink-0 group-hover:shadow-[0_0_28px_rgba(218,175,55,0.55)] transition-shadow">
    <div className="absolute inset-0 rounded-full bg-radial from-[#F4D03F]/20 to-transparent pointer-events-none" />
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7 relative z-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldSalon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF4C2" />
          <stop offset="50%" stopColor="#F4D03F" />
          <stop offset="100%" stopColor="#DAAF37" />
        </linearGradient>
      </defs>
      {/* Two figures/team */}
      <circle cx="16" cy="14" r="4.5" fill="url(#goldSalon)" />
      <path d="M9 29C9 25 12 22 16 22C20 22 23 25 23 29V31H9V29Z" fill="url(#goldSalon)" />
      <circle cx="26" cy="16" r="3.5" fill="url(#goldSalon)" opacity="0.85" />
      <path d="M22 29C22 26.5 24 24.5 26.5 24.5C29 24.5 31 26.5 31 29V31H22V29Z" fill="url(#goldSalon)" opacity="0.85" />
    </svg>
  </div>
);

const GrowthPartnerIcon: React.FC = () => (
  <div className="relative w-12 h-12 rounded-full bg-gradient-to-b from-[#2A2210] to-[#120F08] border border-[#DAAF37]/50 flex items-center justify-center shadow-[0_0_20px_rgba(218,175,55,0.35)] flex-shrink-0 group-hover:shadow-[0_0_28px_rgba(218,175,55,0.55)] transition-shadow">
    <div className="absolute inset-0 rounded-full bg-radial from-[#F4D03F]/20 to-transparent pointer-events-none" />
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7 relative z-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldPartner" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF4C2" />
          <stop offset="50%" stopColor="#F4D03F" />
          <stop offset="100%" stopColor="#DAAF37" />
        </linearGradient>
      </defs>
      {/* Figure with target badge / star */}
      <circle cx="20" cy="14" r="5" fill="url(#goldPartner)" />
      <circle cx="20" cy="14" r="7" stroke="url(#goldPartner)" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M12 30C12 25.5 15.5 22 20 22C24.5 22 28 25.5 28 30V31H12V30Z" fill="url(#goldPartner)" />
      <polygon points="20,11 21.2,13.5 24,13.8 22,15.7 22.5,18.5 20,17.2 17.5,18.5 18,15.7 16,13.8 18.8,13.5" fill="#120F08" />
    </svg>
  </div>
);

const B2BBrandsIcon: React.FC = () => (
  <div className="relative w-12 h-12 rounded-full bg-gradient-to-b from-[#2A2210] to-[#120F08] border border-[#DAAF37]/50 flex items-center justify-center shadow-[0_0_20px_rgba(218,175,55,0.35)] flex-shrink-0 group-hover:shadow-[0_0_28px_rgba(218,175,55,0.55)] transition-shadow">
    <div className="absolute inset-0 rounded-full bg-radial from-[#F4D03F]/20 to-transparent pointer-events-none" />
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7 relative z-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldB2B" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF4C2" />
          <stop offset="50%" stopColor="#F4D03F" />
          <stop offset="100%" stopColor="#DAAF37" />
        </linearGradient>
      </defs>
      {/* Interconnected storefronts / supply hubs */}
      <rect x="9" y="15" width="10" height="14" rx="2" fill="url(#goldB2B)" />
      <rect x="21" y="12" width="10" height="17" rx="2" fill="url(#goldB2B)" />
      <line x1="14" y1="21" x2="26" y2="21" stroke="#120F08" strokeWidth="1.5" />
      <circle cx="14" cy="18" r="1.5" fill="#120F08" />
      <circle cx="26" cy="16" r="1.5" fill="#120F08" />
      <path d="M12 15L14 12H19L17 15" stroke="url(#goldB2B)" strokeWidth="1" />
      <path d="M24 12L26 9H31L29 12" stroke="url(#goldB2B)" strokeWidth="1" />
    </svg>
  </div>
);

// 7 Vertical Strip Items Icons
const BeautyIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#F4D03F]" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
);

const RealEstateIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#F4D03F]" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="9" y1="6" x2="9" y2="6.01" />
    <line x1="15" y1="6" x2="15" y2="6.01" />
    <line x1="9" y1="10" x2="9" y2="10.01" />
    <line x1="15" y1="10" x2="15" y2="10.01" />
    <line x1="9" y1="14" x2="9" y2="14.01" />
    <line x1="15" y1="14" x2="15" y2="14.01" />
    <path d="M10 22v-4h4v4" />
  </svg>
);

const FoodIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#F4D03F]" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const JobsIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#F4D03F]" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M12 12v2" />
  </svg>
);

const CommerceIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#F4D03F]" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const AdvertisingIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#F4D03F]" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11l15-7v14L3 11z" />
    <path d="M18 10a4 4 0 0 1 0 4" />
    <path d="M21 8a7 7 0 0 1 0 8" />
    <path d="M11.5 14.5L9 21" strokeWidth="1.8" />
  </svg>
);

const AIIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#F4D03F]" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
    <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" />
    <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" />
  </svg>
);

const verticalsData = [
  { id: 'beauty', label: 'Beauty', icon: <BeautyIcon /> },
  { id: 'real-estate', label: 'Real Estate', icon: <RealEstateIcon /> },
  { id: 'food', label: 'Food', icon: <FoodIcon /> },
  { id: 'jobs', label: 'Jobs', icon: <JobsIcon /> },
  { id: 'commerce', label: 'Commerce', icon: <CommerceIcon /> },
  { id: 'advertising', label: 'Advertising', icon: <AdvertisingIcon /> },
  { id: 'ai', label: 'AI', icon: <AIIcon /> },
];

export const EcosystemOverview: React.FC = () => {
  // Intersection Observer Hooks for Scroll Fade-In Reveal
  const customerCard = useFadeInOnScroll<HTMLDivElement>({
    delay: 100,
    direction: 'left',
    distance: 30,
    duration: 700,
  });

  const salonOwnerCard = useFadeInOnScroll<HTMLDivElement>({
    delay: 220,
    direction: 'left',
    distance: 30,
    duration: 700,
  });

  const centerMedallion = useFadeInOnScroll<HTMLDivElement>({
    delay: 260,
    direction: 'up',
    distance: 20,
    duration: 800,
  });

  const growthPartnerCard = useFadeInOnScroll<HTMLDivElement>({
    delay: 160,
    direction: 'right',
    distance: 30,
    duration: 700,
  });

  const b2bBrandsCard = useFadeInOnScroll<HTMLDivElement>({
    delay: 280,
    direction: 'right',
    distance: 30,
    duration: 700,
  });

  const bottomStrip = useFadeInOnScroll<HTMLDivElement>({
    delay: 360,
    direction: 'up',
    distance: 24,
    duration: 700,
  });

  return (
    <section className="relative py-6 sm:py-8 overflow-hidden bg-[#0A0A0A] border-t border-white/[0.08]">
      {/* Background Cinematic Warm Golden Ambient Glows and Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central Ambient Gold Bloom */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-radial from-[#DAAF37]/15 via-[#DAAF37]/5 to-transparent blur-[140px]" />
        {/* Soft Side Glows */}
        <div className="absolute top-1/4 left-10 w-[350px] h-[350px] bg-radial from-[#DAAF37]/8 to-transparent blur-[100px]" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-radial from-[#DAAF37]/8 to-transparent blur-[100px]" />
        
        {/* Floating subtle gold bokeh particles */}
        <div className="absolute top-[20%] left-[25%] w-1.5 h-1.5 rounded-full bg-[#F4D03F]/40 blur-[0.5px] animate-pulse" />
        <div className="absolute top-[65%] left-[18%] w-2 h-2 rounded-full bg-[#DAAF37]/35 blur-[1px]" />
        <div className="absolute top-[35%] right-[22%] w-1.5 h-1.5 rounded-full bg-[#F4D03F]/50 blur-[0.5px] animate-pulse" />
        <div className="absolute top-[70%] right-[30%] w-2.5 h-2.5 rounded-full bg-[#DAAF37]/30 blur-[1px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow and Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#DAAF37]/30 text-[11px] font-heading font-medium tracking-wider text-[#DAAF37] uppercase mb-2 shadow-[0_0_15px_rgba(218,175,55,0.1)]">
            02. ECOSYSTEM OVERVIEW (Home Page)
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
              One Ecosystem.
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D03F] via-[#DAAF37] to-[#B38728]">
              Many Opportunities.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed max-w-2xl mx-auto">
            From Beauty to Real Estate, Food to Jobs — Nexora connects people, businesses and opportunities.
          </p>
        </div>

        {/* Central Architecture Interactive Diagram */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop SVG Connecting Lines */}
          <svg
            className={`hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-1000 delay-300 ${
              centerMedallion.isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            viewBox="0 0 1000 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="goldLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DAAF37" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#F4D03F" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#DAAF37" stopOpacity="0.4" />
              </linearGradient>
              <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Orbital Rings around center */}
            <circle cx="500" cy="210" r="96" stroke="#DAAF37" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
            <circle cx="500" cy="210" r="120" stroke="#DAAF37" strokeWidth="1" strokeOpacity="0.15" />

            {/* Glowing Golden Lines: Card 1 (Customer: Top-Left) to Center */}
            <path
              d="M 335 110 C 410 110, 440 185, 470 195"
              stroke="url(#goldLineGrad)"
              strokeWidth="1.8"
              filter="url(#goldGlow)"
            />
            <circle cx="335" cy="110" r="3.5" fill="#F4D03F" filter="url(#goldGlow)" />
            <circle cx="470" cy="195" r="3" fill="#F4D03F" />

            {/* Glowing Golden Lines: Card 2 (Salon Owner: Bottom-Left) to Center */}
            <path
              d="M 335 310 C 410 310, 440 235, 470 225"
              stroke="url(#goldLineGrad)"
              strokeWidth="1.8"
              filter="url(#goldGlow)"
            />
            <circle cx="335" cy="310" r="3.5" fill="#F4D03F" filter="url(#goldGlow)" />
            <circle cx="470" cy="225" r="3" fill="#F4D03F" />

            {/* Glowing Golden Lines: Card 3 (Growth Partner: Top-Right) to Center */}
            <path
              d="M 665 110 C 590 110, 560 185, 530 195"
              stroke="url(#goldLineGrad)"
              strokeWidth="1.8"
              filter="url(#goldGlow)"
            />
            <circle cx="665" cy="110" r="3.5" fill="#F4D03F" filter="url(#goldGlow)" />
            <circle cx="530" cy="195" r="3" fill="#F4D03F" />

            {/* Glowing Golden Lines: Card 4 (B2B Brands: Bottom-Right) to Center */}
            <path
              d="M 665 310 C 590 310, 560 235, 530 225"
              stroke="url(#goldLineGrad)"
              strokeWidth="1.8"
              filter="url(#goldGlow)"
            />
            <circle cx="665" cy="310" r="3.5" fill="#F4D03F" filter="url(#goldGlow)" />
            <circle cx="530" cy="225" r="3" fill="#F4D03F" />
          </svg>

          {/* Diagram Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center relative z-10">
            {/* Left Column: Customer & Salon Owner */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-4">
              {/* Card 1: Customer */}
              <div
                ref={customerCard.ref}
                style={customerCard.style}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group relative rounded-2xl bg-gradient-to-r from-[#171717]/95 via-[#121212]/95 to-[#0D0D0D]/95 border border-[#DAAF37]/30 hover:border-[#DAAF37]/80 p-5 sm:p-5.5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(218,175,55,0.25)] transition-all cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <CustomerIcon />
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white tracking-wide group-hover:text-[#F4D03F] transition-colors">
                        Customer
                      </h3>
                      <p className="text-xs sm:text-sm text-white/60 font-sans tracking-wide mt-1">
                        Discover • Book • Save • Earn
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Card 2: Salon Owner */}
              <div
                ref={salonOwnerCard.ref}
                style={salonOwnerCard.style}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group relative rounded-2xl bg-gradient-to-r from-[#171717]/95 via-[#121212]/95 to-[#0D0D0D]/95 border border-[#DAAF37]/30 hover:border-[#DAAF37]/80 p-5 sm:p-5.5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(218,175,55,0.25)] transition-all cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <SalonOwnerIcon />
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white tracking-wide group-hover:text-[#F4D03F] transition-colors">
                        Salon Owner
                      </h3>
                      <p className="text-xs sm:text-sm text-white/60 font-sans tracking-wide mt-1">
                        Grow • Automate • Succeed
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Center Column: NEXORA ONE Circular Medallion */}
            <div
              ref={centerMedallion.ref}
              style={centerMedallion.style}
              className="lg:col-span-2 flex flex-col items-center justify-center my-2 lg:my-0"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 25px rgba(218,175,55,0.3)',
                    '0 0 45px rgba(218,175,55,0.5)',
                    '0 0 25px rgba(218,175,55,0.3)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-b from-[#242424] via-[#141414] to-[#080808] border-2 border-[#DAAF37] flex flex-col items-center justify-center p-3 text-center group cursor-pointer shadow-[0_0_35px_rgba(218,175,55,0.35)] overflow-hidden"
              >
                {/* Spherical specular gloss layer */}
                <div className="absolute -top-12 -left-12 w-28 h-28 rounded-full bg-white/10 blur-[12px] pointer-events-none" />
                <div className="absolute inset-0 rounded-full bg-radial from-[#DAAF37]/25 via-transparent to-black/80 pointer-events-none" />

                {/* Golden Stylized Monogram N */}
                <div className="relative z-10 w-12 h-12 flex items-center justify-center mb-1">
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    <defs>
                      <linearGradient id="medallionGold" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFF2B2" />
                        <stop offset="40%" stopColor="#F4D03F" />
                        <stop offset="80%" stopColor="#DAAF37" />
                        <stop offset="100%" stopColor="#997517" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M26 80V20L54 58V20H74V80L46 42V80H26Z"
                      fill="url(#medallionGold)"
                      stroke="#F4D03F"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                {/* Medallion Text */}
                <span className="relative z-10 text-[11px] sm:text-xs font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37] tracking-[0.18em] uppercase">
                  NEXORA ONE
                </span>
              </motion.div>
            </div>

            {/* Right Column: Growth Partner & B2B Brands */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-4">
              {/* Card 3: Growth Partner */}
              <div
                ref={growthPartnerCard.ref}
                style={growthPartnerCard.style}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group relative rounded-2xl bg-gradient-to-r from-[#171717]/95 via-[#121212]/95 to-[#0D0D0D]/95 border border-[#DAAF37]/30 hover:border-[#DAAF37]/80 p-5 sm:p-5.5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(218,175,55,0.25)] transition-all cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <GrowthPartnerIcon />
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white tracking-wide group-hover:text-[#F4D03F] transition-colors">
                        Growth Partner
                      </h3>
                      <p className="text-xs sm:text-sm text-white/60 font-sans tracking-wide mt-1">
                        Onboard • Earn • Grow
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Card 4: B2B Brands */}
              <div
                ref={b2bBrandsCard.ref}
                style={b2bBrandsCard.style}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group relative rounded-2xl bg-gradient-to-r from-[#171717]/95 via-[#121212]/95 to-[#0D0D0D]/95 border border-[#DAAF37]/30 hover:border-[#DAAF37]/80 p-5 sm:p-5.5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(218,175,55,0.25)] transition-all cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <B2BBrandsIcon />
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white tracking-wide group-hover:text-[#F4D03F] transition-colors">
                        B2B Brands
                      </h3>
                      <p className="text-xs sm:text-sm text-white/60 font-sans tracking-wide mt-1">
                        Connect • Supply • Expand
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* 7 Vertical Icons Strip at the Bottom */}
          <div
            ref={bottomStrip.ref}
            style={bottomStrip.style}
            className="mt-6 md:mt-8"
          >
            <div className="rounded-2xl md:rounded-full bg-gradient-to-r from-[#181818]/90 via-[#121212]/95 to-[#181818]/90 border border-[#DAAF37]/30 backdrop-blur-xl px-4 sm:px-8 py-3 sm:py-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.7)]">
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 sm:gap-2 items-center justify-between">
                {verticalsData.map((vert) => (
                  <Link
                    key={vert.id}
                    to={`/verticals#${vert.id}`}
                    className="flex flex-col items-center justify-center p-2 rounded-xl hover:bg-white/[0.05] transition-all group cursor-pointer text-center"
                  >
                    <div className="mb-1.5 transition-transform duration-200 group-hover:scale-115 drop-shadow-[0_0_8px_rgba(218,175,55,0.4)]">
                      {vert.icon}
                    </div>
                    <span className="text-[11px] sm:text-xs font-heading font-medium text-white/80 group-hover:text-[#F4D03F] transition-colors whitespace-nowrap">
                      {vert.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
