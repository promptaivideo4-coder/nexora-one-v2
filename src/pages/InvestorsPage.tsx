import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Sparkles,
  Users,
  Store,
  Briefcase,
  TrendingUp,
  ShoppingBag,
  Building2,
  ArrowRight,
  Workflow,
  Network,
  AlertCircle,
  Unlink,
  Search,
  PhoneCall,
  MessageSquare,
  Clock,
  Gift,
  Repeat,
  Layers,
  Split,
  FileQuestion,
  HelpCircle,
  Boxes,
  TrendingDown,
  BarChart3,
  ArrowUpRight,
  ShieldCheck,
  Compass,
  CheckCircle2,
  HeartHandshake,
  RefreshCw,
  Star,
  Check,
  Calendar,
  ExternalLink,
  Globe,
  RotateCcw,
  Cake,
  Database,
  Eye,
  AlertTriangle,
  UserMinus,
  Zap,
  Activity,
  Trophy,
  Home,
  Cpu,
  Megaphone,
  ArrowDown,
  ChevronDown,
  ChevronUp,
  Coins,
  CreditCard,
  Scale,
  FileText,
  Lock,
  CheckSquare,
  FileCheck,
  FileCode,
  Target,
  Award,
  ArrowLeftRight,
  LayoutDashboard,
  UserPlus,
  Truck,
  Heart,
  Palette,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { InteractiveImage } from '../components/common/InteractiveImage';
import mainWebsiteAdRevenueImg from '../assets/images/main_website_ad_revenue_cinematic_1791377142564.jpg';
import goldenGrowthEngineImg from '../assets/images/why_nexora_can_scale_cinematic_1791238442191.jpg';
import founderVijayImg from '../assets/images/founder_vijay_final_v1_1791369165812.jpg';

// Lazy load Recharts projection chart to optimize initial load & keep execution lightweight
const InvestmentProjectionChart = React.lazy(
  () => import('../components/investors/InvestmentProjectionChart')
);

interface EcosystemNode {
  id: string;
  name: string;
  subheadline: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string;
}

const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: 'customers',
    name: 'Customers',
    subheadline: 'Discover • Book • Rewards',
    image: '/assets/investor-node-customers.webp',
    icon: Users,
    tags: 'Salons • Spas • Rewards',
  },
  {
    id: 'businesses',
    name: 'Businesses',
    subheadline: 'Customer Retention • Database • CRM • Growth',
    image: '/assets/investor-node-businesses.webp',
    icon: Store,
    tags: 'Salons • Barbers • Spas • Studios',
  },
  {
    id: 'professionals',
    name: 'Professionals',
    subheadline: 'Jobs • Profiles • Opportunities',
    image: '/assets/investor-node-professionals.webp',
    icon: Briefcase,
    tags: 'Stylists • Artists • Opportunities',
  },
  {
    id: 'growth-partners',
    name: 'Growth Partners',
    subheadline: 'Expansion Engine • Activation • Rewards',
    image: '/assets/investor-node-partners.webp',
    icon: TrendingUp,
    tags: 'Onboarding • Field Support • Network',
  },
  {
    id: 'market',
    name: 'Market',
    subheadline: 'Products • Suppliers • B2B',
    image: '/assets/investor-node-market.webp',
    icon: ShoppingBag,
    tags: 'Brands • Wholesale • B2B Supply',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subheadline: 'Chains • Franchises • Brands',
    image: '/assets/investor-node-enterprise.webp',
    icon: Building2,
    tags: 'Chains • Franchises • Multi-Unit',
  },
];

export const InvestorsPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // State variables for Section 19 Interactive Form
  const [enquiryName, setEnquiryName] = React.useState('');
  const [enquiryEmail, setEnquiryEmail] = React.useState('');
  const [enquiryPhone, setEnquiryPhone] = React.useState('');
  const [enquiryTickets, setEnquiryTickets] = React.useState('1');
  const [enquiryMessage, setEnquiryMessage] = React.useState('');
  const [isEnquirySubmitting, setIsEnquirySubmitting] = React.useState(false);
  const [enquirySubmitted, setEnquirySubmitted] = React.useState(false);
  const [enquiryError, setEnquiryError] = React.useState('');

  // State for FAQ accordion
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  // Animation variants respecting prefers-reduced-motion
  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-[#DAAF37]/30 selection:text-white relative overflow-hidden flex flex-col justify-center">
      {/* SECTION 1 — INVESTOR HERO */}
      <section
        id="investor-hero"
        aria-label="Investor Hero Section"
        className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full flex-grow flex flex-col justify-center"
      >
        {/* Subtle Ambient Golden Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-b from-[#DAAF37]/10 via-[#DAAF37]/5 to-transparent blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#DAAF37]/8 blur-[120px] pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center relative z-10">
          {/* LEFT COLUMN: APPROVED INVESTOR HERO CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center text-left"
          >
            {/* 1. Eyebrow */}
            <motion.div variants={fadeIn} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(218,175,55,0.15)]">
                <Sparkles className="w-3.5 h-3.5 text-[#F4D03F]" />
                NEXORA ONE
              </span>
            </motion.div>

            {/* 2. Main Heading */}
            <motion.h1
              variants={fadeIn}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] font-serif font-bold text-white tracking-tight leading-[1.1] mb-4 text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
            >
              Beauty Industry को आपस में{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
                जोड़ने वाला System
              </span>
            </motion.h1>

            {/* 3. Subheadline */}
            <motion.p
              variants={fadeIn}
              className="text-lg sm:text-xl font-heading font-medium text-[#F4D03F] mb-5 tracking-tight leading-snug"
            >
              जब Beauty Business और Technology मिलते हैं, तो सबको फायदा होता है।
            </motion.p>

            {/* 4. Supporting Text */}
            <motion.p
              variants={fadeIn}
              className="text-sm sm:text-base text-white/80 font-sans leading-relaxed mb-6 font-normal"
            >
              Nexora One beauty industry के लिए एक ऐसा platform बना रहा है जहाँ customers, salons, professionals और suppliers सब एक साथ काम कर सकेंगे।
            </motion.p>

            {/* Hero Message Callout */}
            <motion.div
              variants={fadeIn}
              className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white/[0.06] to-white/[0.02] border border-[#DAAF37]/35 backdrop-blur-md mb-8 shadow-[0_4px_24px_rgba(0,0,0,0.5),0_0_20px_rgba(218,175,55,0.1)] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]" />
              <div className="flex items-start gap-3">
                <Network className="w-5 h-5 text-[#F4D03F] flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-sans text-white/90 leading-relaxed italic">
                  &ldquo;एक ऐसा तरीका जिससे लोग आसानी से services ढूंढ सकें, businesses बढ़ सकें और professionals को नए काम मिल सकें।&rdquo;
                </p>
              </div>
            </motion.div>

            {/* 5. Primary & 6. Secondary CTAs */}
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4"
            >
              <Button
                to="/ecosystem"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-[0_6px_28px_rgba(218,175,55,0.45)] hover:shadow-[0_8px_36px_rgba(218,175,55,0.65)]"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Nexora को समझें
              </Button>
              <Button
                to="/vision-mission"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                icon={<Workflow className="w-4 h-4 text-[#DAAF37]" />}
              >
                Nexora कैसे काम करता है
              </Button>
              <Button
                href="#how-your-5-lakh-works"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto border-[#DAAF37]/80 text-[#F4D03F] hover:bg-[#DAAF37]/10"
                icon={<ArrowDown className="w-4 h-4 text-[#DAAF37]" />}
              >
                आपका ₹5 लाख कैसे काम करेगा
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: LARGE PREMIUM CONNECTED ECOSYSTEM VISUAL */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center">
            {/* Background Ambient Aura */}
            <div className="relative w-full max-w-[680px] p-2 sm:p-4 rounded-3xl bg-gradient-to-b from-white/[0.04] via-black/80 to-[#0A0A0A] border border-[#DAAF37]/30 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(218,175,55,0.15)] overflow-hidden">
              {/* Cinematic Center Visual Plate (Depth Layer) */}
              <div className="absolute inset-0 z-0 opacity-25 mix-blend-screen pointer-events-none">
                <InteractiveImage
                  src="/assets/investor-ecosystem-core.webp"
                  alt="Nexora Connected Digital Core"
                  width={680}
                  height={680}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dynamic Connection Lines (SVG Vector Circuitry) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden sm:block"
                viewBox="0 0 680 540"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="goldCircuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DAAF37" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#F4D03F" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#DAAF37" stopOpacity="0.4" />
                  </linearGradient>
                  <filter id="goldGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Concentric Orbital Network Guides */}
                <circle cx="340" cy="270" r="110" stroke="url(#goldCircuitGrad)" strokeWidth="1" strokeDasharray="4 6" opacity="0.45" />
                <circle cx="340" cy="270" r="190" stroke="url(#goldCircuitGrad)" strokeWidth="1" strokeDasharray="3 8" opacity="0.3" />

                {/* Subtle Radial Connection Lines to 6 Node Quadrants */}
                {/* Node 1 Top Left */}
                <path d="M 340 270 L 160 85" stroke="url(#goldCircuitGrad)" strokeWidth="1.2" opacity="0.6" filter="url(#goldGlowFilter)" />
                {/* Node 2 Top Center/Right */}
                <path d="M 340 270 L 520 85" stroke="url(#goldCircuitGrad)" strokeWidth="1.2" opacity="0.6" filter="url(#goldGlowFilter)" />
                {/* Node 3 Mid Left */}
                <path d="M 340 270 L 120 270" stroke="url(#goldCircuitGrad)" strokeWidth="1.2" opacity="0.6" filter="url(#goldGlowFilter)" />
                {/* Node 4 Mid Right */}
                <path d="M 340 270 L 560 270" stroke="url(#goldCircuitGrad)" strokeWidth="1.2" opacity="0.6" filter="url(#goldGlowFilter)" />
                {/* Node 5 Bottom Left */}
                <path d="M 340 270 L 160 455" stroke="url(#goldCircuitGrad)" strokeWidth="1.2" opacity="0.6" filter="url(#goldGlowFilter)" />
                {/* Node 6 Bottom Right */}
                <path d="M 340 270 L 520 455" stroke="url(#goldCircuitGrad)" strokeWidth="1.2" opacity="0.6" filter="url(#goldGlowFilter)" />

                {/* Micro Animated Connection Pulses */}
                {!shouldReduceMotion && (
                  <>
                    <motion.circle
                      cx="340"
                      cy="270"
                      r="3"
                      fill="#FFF2B2"
                      animate={{
                        cx: [340, 160],
                        cy: [270, 85],
                        opacity: [0, 1, 0],
                      }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.circle
                      cx="340"
                      cy="270"
                      r="3"
                      fill="#FFF2B2"
                      animate={{
                        cx: [340, 520],
                        cy: [270, 85],
                        opacity: [0, 1, 0],
                      }}
                      transition={{ duration: 3.6, repeat: Infinity, delay: 0.8, ease: 'easeInOut' }}
                    />
                    <motion.circle
                      cx="340"
                      cy="270"
                      r="3"
                      fill="#FFF2B2"
                      animate={{
                        cx: [340, 120],
                        cy: [270, 270],
                        opacity: [0, 1, 0],
                      }}
                      transition={{ duration: 3.0, repeat: Infinity, delay: 0.4, ease: 'easeInOut' }}
                    />
                    <motion.circle
                      cx="340"
                      cy="270"
                      r="3"
                      fill="#FFF2B2"
                      animate={{
                        cx: [340, 560],
                        cy: [270, 270],
                        opacity: [0, 1, 0],
                      }}
                      transition={{ duration: 3.4, repeat: Infinity, delay: 1.2, ease: 'easeInOut' }}
                    />
                    <motion.circle
                      cx="340"
                      cy="270"
                      r="3"
                      fill="#FFF2B2"
                      animate={{
                        cx: [340, 160],
                        cy: [270, 455],
                        opacity: [0, 1, 0],
                      }}
                      transition={{ duration: 3.3, repeat: Infinity, delay: 0.6, ease: 'easeInOut' }}
                    />
                    <motion.circle
                      cx="340"
                      cy="270"
                      r="3"
                      fill="#FFF2B2"
                      animate={{
                        cx: [340, 520],
                        cy: [270, 455],
                        opacity: [0, 1, 0],
                      }}
                      transition={{ duration: 3.5, repeat: Infinity, delay: 1.0, ease: 'easeInOut' }}
                    />
                  </>
                )}
              </svg>

              <div className="relative z-20 p-3 sm:p-5 flex flex-col gap-4">
                {/* Visual Header Ribbon */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DAAF37] animate-pulse" />
                    <span className="text-[11px] font-heading font-semibold uppercase tracking-[0.2em] text-[#DAAF37]">
                      Connected Digital Ecosystem
                    </span>
                  </div>
                  <span className="text-[10px] font-sans text-white/50 tracking-wider">
                    Connection → Network → Scale
                  </span>
                </div>

                {/* THE 6 CONNECTED ECOSYSTEM NODES & CENTRAL NEXORA HUB */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5 sm:gap-4 relative">
                  {/* CENTRAL NEXORA ONE HUB (Positioned prominently in the composition) */}
                  <div className="sm:col-span-2 flex justify-center py-2 sm:py-3">
                    <div className="relative flex items-center gap-3.5 sm:gap-4 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#1A1A1A] via-black to-[#1A1A1A] border-2 border-[#DAAF37] shadow-[0_0_35px_rgba(218,175,55,0.4),0_8px_30px_rgba(0,0,0,0.8)] z-30 group hover:scale-[1.02] transition-transform duration-300">
                      {/* Ambient Core Glow */}
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#DAAF37]/30 via-[#F4D03F]/40 to-[#DAAF37]/30 blur-md opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

                      {/* Golden Lotus / Emblem */}
                      <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#2A2A2A] to-black border border-[#DAAF37]/60 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(218,175,55,0.3)]">
                        <svg
                          viewBox="0 0 100 100"
                          fill="none"
                          className="w-3/4 h-3/4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                        >
                          <defs>
                            <linearGradient id="invGoldCore" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#FFF2B2" />
                              <stop offset="50%" stopColor="#F4D03F" />
                              <stop offset="100%" stopColor="#DAAF37" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M26 80V20L54 58V20H74V80L46 42V80H26Z"
                            fill="url(#invGoldCore)"
                            stroke="#DAAF37"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>

                      <div className="relative text-left leading-tight">
                        <div className="text-sm sm:text-base font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF2B2] to-[#DAAF37] tracking-wider">
                          NEXORA ONE
                        </div>
                        <div className="text-[10px] sm:text-[11px] font-heading font-semibold text-[#F4D03F] uppercase tracking-widest">
                          Central Ecosystem Hub
                        </div>
                      </div>

                      <span className="relative ml-2 hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-[#DAAF37]/20 border border-[#DAAF37]/40 text-[#FFF2B2] text-[9px] font-heading font-medium tracking-wide">
                        Core Architecture
                      </span>
                    </div>
                  </div>

                  {/* 6 CONNECTED ORBIT NODES */}
                  {ECOSYSTEM_NODES.map((node, index) => {
                    const IconComponent = node.icon;
                    return (
                      <div
                        key={node.id}
                        className="group relative rounded-2xl bg-gradient-to-br from-white/[0.08] via-black/80 to-[#101010] border border-[#DAAF37]/30 hover:border-[#DAAF37] p-3 sm:p-3.5 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_32px_rgba(218,175,55,0.25)] hover:scale-[1.02] flex items-center gap-3 sm:gap-3.5 overflow-hidden"
                      >
                        {/* Node Number Badge */}
                        <div className="absolute top-2 right-2 text-[9px] font-heading font-bold text-[#DAAF37]/50 group-hover:text-[#F4D03F] transition-colors">
                          0{index + 1}
                        </div>

                        {/* Node Photorealistic Sector Imagery */}
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-[#DAAF37]/40 flex-shrink-0 bg-black shadow-inner">
                          <InteractiveImage
                            src={node.image}
                            alt={`${node.name} representation`}
                            width={56}
                            height={56}
                            className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-110"
                            loading="eager"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Node Content */}
                        <div className="flex-1 min-w-0 text-left">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <IconComponent className="w-3.5 h-3.5 text-[#F4D03F] flex-shrink-0" />
                            <h3 className="text-xs sm:text-sm font-heading font-bold text-white group-hover:text-[#FFF2B2] transition-colors truncate">
                              {node.name}
                            </h3>
                          </div>
                          <p className="text-[11px] sm:text-xs text-[#DAAF37] font-sans font-medium tracking-tight truncate">
                            {node.subheadline}
                          </p>
                          <span className="text-[10px] text-white/50 font-sans block truncate mt-0.5">
                            {node.tags}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Ecosystem Visual Sub-bar */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[10px] font-sans text-white/60 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#DAAF37]">●</span>
                    <span>Salons • Barbers • Spas • Tattoo Studios • Clinics</span>
                  </div>
                  <div className="text-[#F4D03F] font-heading font-medium">
                    Integrated Ecosystem Architecture
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE INVESTOR SUMMARY — HOW YOUR ₹5 LAKH WORKS */}
      <section
        id="how-your-5-lakh-works"
        aria-label="How Your 5 Lakh Investment Works Section"
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-[#DAAF37]/25"
      >
        {/* Subtle Ambient Gold Radiance */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. SECTION HEADING */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/35 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Coins className="w-3.5 h-3.5 text-[#F4D03F]" />
            इन्वेस्टर्स के लिए जरूरी जानकारी
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            आपका{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              ₹5 LAKH का निवेश
            </span>{' '}
            कैसे काम करेगा
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-sans max-w-3xl mx-auto leading-relaxed">
            समझें: कंपनी में हिस्सेदारी, वैल्यू और पैसा वापस आने का अनुमान।
          </p>
        </div>

        {/* 2. THE 7-STEP VISUAL FLOW IN ONE COHESIVE PROGRESSION */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/35 shadow-[0_16px_48px_rgba(0,0,0,0.8),0_0_30px_rgba(218,175,55,0.08)] relative overflow-hidden">
            {/* Header Tag */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#DAAF37] animate-pulse" />
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                  Investment की पूरी प्रक्रिया (Step-by-Step)
                </h3>
              </div>
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-[#DAAF37] px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 self-start sm:self-auto">
                सिर्फ 10 Angel Slots उपलब्ध हैं
              </span>
            </div>

            {/* Step Sequence Cards with Downward Arrows */}
            <div className="flex flex-col items-center gap-3">
              {[
                {
                  step: '01',
                  title: '₹5,00,000 का निवेश',
                  subtitle: 'एक इन्वेस्टर का हिस्सा',
                  desc: 'हर इन्वेस्टर ₹5,00,000 के साथ शामिल होता है ताकि टेक्नोलॉजी, मार्केटिंग और सैलून जोड़ने का काम किया जा सके।',
                  highlight: '1 Ticket = ₹5 Lakh',
                  icon: Coins,
                },
                {
                  step: '02',
                  title: 'NEXORA में 1% की हिस्सेदारी',
                  subtitle: 'कंपनी में आपकी पार्टनरशिप',
                  desc: 'हर ₹5 Lakh के निवेश पर आपको Nexora में 1.0% की सीधी हिस्सेदारी (Equity) मिलती है।',
                  highlight: '1% Direct Equity',
                  icon: Sparkles,
                },
                {
                  step: '03',
                  title: '10 INVESTORS = ₹50 LAKH TOTAL',
                  subtitle: 'शुरुआती राउंड (Angel Round)',
                  desc: '10 इन्वेस्टर मिलकर कुल ₹50,00,000 का निवेश करते हैं, जिससे उन्हें कुल 10% हिस्सेदारी मिलती है।',
                  highlight: '10 Investors • 10% Pool',
                  icon: Users,
                },
                {
                  step: '04',
                  title: 'कंपनी की वैल्यू = ₹5 करोड़',
                  subtitle: 'Valuation',
                  desc: '₹50 Lakh पर 10% हिस्सेदारी के हिसाब से, पूरी कंपनी की वैल्यू ₹5,00,00,000 मानी जाती है।',
                  highlight: '₹5.00 Cr Valuation',
                  icon: Building2,
                },
                {
                  step: '05',
                  title: '1,000 सैलून — सालाना कमाई = ₹3.72 करोड़',
                  subtitle: '1,000 सैलून का लक्ष्य',
                  desc: 'सैलून से मिलने वाली फीस, कमीशन और विज्ञापनों से होने वाली अनुमानित सालाना कमाई।',
                  highlight: '₹3,72,00,000 Annual Revenue',
                  icon: TrendingUp,
                },
                {
                  step: '06',
                  title: 'सालाना मुनाफा (Tax से पहले) = ₹1.38 करोड़',
                  subtitle: 'सारा खर्च निकालने के बाद मुनाफा',
                  desc: 'सैलरी, ऑफिस और बाकी खर्चों को घटाने के बाद बचा हुआ मुनाफा।',
                  highlight: '₹1,38,90,254 Annual Profit',
                  icon: BarChart3,
                },
                {
                  step: '07',
                  title: '1% हिस्सा ≈ ₹11,575/महीना',
                  subtitle: 'हर महीने की संभावित कमाई',
                  desc: 'आपकी 1% हिस्सेदारी के हिसाब से आपको मुनाफे का 1% मिलता है, जो करीब ₹11,575 प्रति महीना होता है।',
                  highlight: '≈ ₹11,575 / Month',
                  icon: RefreshCw,
                },
                {
                  step: '08',
                  title: 'पैसा वसूली ≈ 43 महीने',
                  subtitle: 'लगाया हुआ पैसा वापस आने का समय',
                  desc: '₹11,575/महीना की कमाई से, आपका लगाया हुआ ₹5,00,000 करीब 43 महीनों में वापस आ सकता है।',
                  highlight: '≈ 43 Months',
                  icon: Clock,
                },
              ].map((item, idx, arr) => {
                const IconComponent = item.icon;
                return (
                  <React.Fragment key={item.step}>
                    <div className="w-full p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#DAAF37]/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                      <div className="flex items-start sm:items-center gap-3.5">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                          <IconComponent className="w-5 h-5 text-[#F4D03F]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-heading font-bold text-[#DAAF37] tracking-widest uppercase">
                              STEP {item.step}
                            </span>
                            <span className="text-[10px] font-sans text-white/50">•</span>
                            <span className="text-[11px] font-sans text-white/70">
                              {item.subtitle}
                            </span>
                          </div>
                          <h4 className="text-base sm:text-lg font-heading font-bold text-white group-hover:text-[#FFF2B2] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-white/70 font-sans mt-0.5 max-w-2xl">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <div className="flex-shrink-0 self-start md:self-center">
                        <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/35 text-[#F4D03F] text-xs font-heading font-bold tracking-wide shadow-[0_0_12px_rgba(218,175,55,0.15)]">
                          {item.highlight}
                        </span>
                      </div>
                    </div>

                    {/* Downward Connector Arrow */}
                    {idx < arr.length - 1 && (
                      <div className="flex flex-col items-center py-0.5 text-[#DAAF37]/60 group-hover:text-[#DAAF37]">
                        <ArrowDown className="w-5 h-5 animate-bounce" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. TWO CRITICAL INVESTOR CLARIFICATIONS */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 sm:mb-16">
          {/* A. WHAT HAPPENS AFTER 43 MONTHS? */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#DAAF37]/[0.08] via-[#0D0D0D] to-[#070707] border-2 border-[#DAAF37]/50 shadow-[0_12px_36px_rgba(218,175,55,0.15)] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DAAF37]/10 blur-2xl pointer-events-none rounded-full" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/20 border border-[#DAAF37]/40 text-[#F4D03F] text-xs font-heading font-bold uppercase tracking-wider mb-4">
                <CheckCircle2 className="w-4 h-4 text-[#F4D03F]" />
                पैसे वापस आने के बाद क्या होगा?
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3">
                ~43 महीनों के बाद क्या होगा?
              </h3>
              <p className="text-sm sm:text-base text-white/90 font-sans leading-relaxed mb-4">
                <strong className="text-[#F4D03F]">आपकी 1% Equity (हिस्सेदारी) हमेशा आपके पास रहेगी।</strong> पैसा वसूल होने के बाद भी आपकी ओनरशिप खत्म <strong className="text-white">नहीं</strong> होगी।
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-sans">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#DAAF37] flex-shrink-0 mt-0.5" />
                  <span>जब तक Nexora मुनाफा कमाएगा, आपको हिस्सा मिलता रहेगा।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#DAAF37] flex-shrink-0 mt-0.5" />
                  <span>जैसे-जैसे salons की संख्या 1,000 से बढ़कर 2,500+ होगी, आपकी कमाई भी बढ़ेगी।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#DAAF37] flex-shrink-0 mt-0.5" />
                  <span>भविष्य में company की valuation बढ़ने का फायदा भी आपको मिलता रहेगा।</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#DAAF37]/30 text-xs font-heading font-semibold text-[#F4D03F]">
              स्थायी हिस्सेदारी • कभी वापस नहीं ली जाएगी
            </div>
          </div>

          {/* B. EQUITY PROFIT SHARE vs GUARANTEED REFUND */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-white/20 transition-colors shadow-[0_12px_36px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-heading font-bold uppercase tracking-wider mb-4">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                पारदर्शिता और नियम
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3">
                मुनाफे में हिस्सा vs. Refund की गारंटी
              </h3>
              <p className="text-sm sm:text-base text-white/90 font-sans leading-relaxed mb-4">
                यह एक <strong className="text-[#F4D03F]">Equity Investment</strong> है, bank loan या FD नहीं।
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-sans">
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span><strong>FD की तरह fixed कमाई नहीं:</strong> मुनाफा business की performance और salons की संख्या पर निर्भर करता है।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Performance-linked recovery:</strong> अगर growth तेज़ होगी तो पैसा जल्दी वसूल होगा, अगर धीमी होगी तो समय लग सकता है।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Business alignment:</strong> Founders और Investors दोनों का एक ही लक्ष्य है—तेज़ी से और मुनाफे के साथ आगे बढ़ना।</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-heading font-semibold text-white/60">
              संभावित मुनाफे का Model • पारदर्शी हिसाब-किताब
            </div>
          </div>
        </div>

        {/* 4. FIRST-TIME INVESTOR FAQ: 6 CORE QUESTIONS ANSWERED */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="text-center mb-8">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
              तुरंत समाधान
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              हर Investor के मन में आने वाले 6 सवाल
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                q: '1. मुझे कितना निवेश करना होगा?',
                a: 'कुल ₹5,00,000 (पाँच लाख रुपये)। इस syndicate round में केवल 10 angel slots ही उपलब्ध हैं।',
                tag: '₹5 Lakh Ticket',
              },
              {
                q: '2. मुझे कितनी Equity (हिस्सेदारी) मिलेगी?',
                a: '₹5 Lakh के निवेश पर आपको Nexora Salon App + Website में 1.0% की सीधी हिस्सेदारी मिलेगी।',
                tag: '1.0% Equity',
              },
              {
                q: '3. ₹5 Crore Valuation का क्या मतलब है?',
                a: '₹50 Lakh में 10% हिस्सेदारी का मतलब है कि पूरी company की आज की कीमत (valuation) ₹5 Crore मानी जा रही है।',
                tag: '₹5 Cr Valuation',
              },
              {
                q: '4. मेरा ₹5 Lakh वापस कैसे आएगा?',
                a: 'हर महीने के मुनाफे में आपकी 1% हिस्सेदारी होगी। 1,000 salons के model पर यह ~₹11,575/महीना हो सकता है, जिससे ~43 महीनों में आपकी रकम वापस आ सकती है।',
                tag: '~43 Months Payback',
              },
              {
                q: '5. 43 महीनों के बाद क्या होगा?',
                a: 'आपकी 1% हिस्सेदारी हमेशा बनी रहेगी! भविष्य में होने वाले हर मुनाफे और valuation बढ़ने का फायदा आपको मिलता रहेगा।',
                tag: 'Permanent Equity',
              },
              {
                q: '6. क्या पैसे वापस आने की गारंटी है?',
                a: 'नहीं। यह एक equity investment है जहाँ कमाई business की growth और मुनाफे पर निर्भर करती है।',
                tag: 'Equity Model',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/35 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#DAAF37]">
                      {faq.tag}
                    </span>
                    <HelpCircle className="w-3.5 h-3.5 text-white/40" />
                  </div>
                  <h4 className="text-base font-heading font-bold text-white mb-2">
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Deep-Dive Section 17.3 CTA */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-white/[0.04] via-black to-white/[0.04] border border-[#DAAF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-base sm:text-lg font-heading font-bold text-white">
                Need the comprehensive 17-part financial model?
              </h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans mt-0.5">
                Explore our full CAC/LTV, unit economics, risk mitigation, and interactive revenue vs cost chart.
              </p>
            </div>
            <Button
              href="#investment-opportunity"
              variant="primary"
              size="md"
              className="flex-shrink-0 shadow-[0_4px_20px_rgba(218,175,55,0.35)]"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Section 17.3 Deep Dive
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE INDUSTRY PROBLEM */}
      <section
        id="the-industry-problem"
        aria-label="The Industry Problem Section"
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Darkness & Warning Aura */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[400px] bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. SECTION HEADING & CONTRAST EMPHASIS */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          {/* Eyebrow & Contrast Emphasis */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/[0.08] border border-amber-500/30 text-amber-300 text-xs font-heading font-semibold uppercase tracking-wider mb-6 shadow-[0_0_24px_rgba(245,158,11,0.12)]">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>1. PROBLEM</span>
            <span className="text-white/40">•</span>
            <span>असली दुनिया में जुड़े हुए</span>
            <span className="text-white/40">vs.</span>
            <span className="text-amber-200">DIGITAL दुनिया में बिखरे हुए</span>
          </div>

          {/* Exact Approved Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            Beauty Industry असली दुनिया में तो जुड़ी हुई है —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-[#DAAF37]">
              पर Digital दुनिया में सब कुछ बिखरा हुआ है।
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-sans max-w-2xl mx-auto leading-relaxed">
            Customers, salons, professionals और suppliers—ये सब एक ही industry का हिस्सा हैं, लेकिन इनके काम करने के तरीके और tools एक-दूसरे से जुड़े हुए नहीं हैं।
          </p>
        </div>

        {/* CINEMATIC CUSTOMER PROBLEMS VISUAL (Visual representation of the 5 customer pain points) */}
        <div className="mb-12 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/30 shadow-[0_16px_48px_rgba(0,0,0,0.8),0_0_30px_rgba(218,175,55,0.12)]">
          <InteractiveImage
            src="/assets/customer-problems-cinematic.webp"
            alt="Beauty Booking Journey: Five Customer Problems - Finding Service, Booking Uncertainty, Waiting and Overcrowding, Scattered Offers, Weak Repeat Engagement"
            width={1920}
            height={740}
            className="w-full h-auto object-cover select-none block"
            loading="eager"
          />
        </div>

        {/* 2. CUSTOMER PROBLEMS */}
        <div className="mb-16 sm:mb-20">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Header Block */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-amber-400/80 uppercase tracking-widest block">
                    पहला हिस्सा
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    Customers की समस्याएँ
                  </h3>
                </div>
              </div>
              <span className="text-xs font-sans text-white/50 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 self-start sm:self-auto">
                5 मुख्य चुनौतियाँ
              </span>
            </div>

            {/* 5 Primary Problems Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                {
                  num: '01',
                  text: 'सही service ढूँढना मुश्किल और थकाऊ है।',
                  desc: 'बिखरी हुई जानकारी और पुराने profiles के कारण सही salon चुनना मुश्किल होता है।',
                },
                {
                  num: '02',
                  text: 'Booking में अनिश्चितता और इंतज़ार।',
                  desc: 'Phone calls और messages में समय खराब होता है और booking confirm होने की गारंटी नहीं होती।',
                },
                {
                  num: '03',
                  text: 'भीड़ और खाली समय का सही तालमेल नहीं।',
                  desc: 'कभी बहुत ज़्यादा भीड़ और कभी एकदम खाली—customer को पता नहीं चलता कि कब आना सही रहेगा।',
                },
                {
                  num: '04',
                  text: 'Offers और Rewards बिखरे हुए हैं।',
                  desc: 'पुरानी पर्चियाँ और अलग-अलग schemes के कारण customer अपने फायदों को भूल जाता है।',
                },
                {
                  num: '05',
                  text: 'Customer और Business का रिश्ता कमज़ोर है।',
                  desc: 'एक बार salon से बाहर निकलने के बाद customer से दोबारा संपर्क बनाए रखना मुश्किल होता है।',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-500/40 transition-colors group relative"
                >
                  <div className="text-xs font-heading font-bold text-amber-400/70 mb-2">
                    Problem {item.num}
                  </div>
                  <h4 className="text-sm sm:text-base font-heading font-semibold text-white mb-2 leading-snug">
                    {item.text}
                  </h4>
                  <p className="text-xs text-white/50 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}

              {/* Detailed Customer Pain Points Summary Card */}
              <div className="p-5 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 flex flex-col justify-center">
                <span className="text-xs font-heading font-semibold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Key Friction Areas
                </span>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  Every step of the customer journey involves friction: discovery, availability checks, waiting, and retaining loyalty.
                </p>
              </div>
            </div>

            {/* Detailed Customer Pain Points List */}
            <div className="mb-10 p-5 rounded-2xl bg-black/50 border border-white/10">
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-white/60 block mb-3">
                Detailed Customer Pain Points
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs text-white/80 font-sans">
                {[
                  'finding nearby salons, barbers, spas, tattoo studios, clinics and beauty professionals',
                  'knowing availability',
                  'knowing whether a favourite professional is available',
                  'waiting time',
                  'repeated phone/WhatsApp contact',
                  'discovering offers and loyalty benefits',
                  'maintaining a connected long-term relationship with a business',
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-2 bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Direction: Fragmented Customer Touchpoint Journey */}
            <div>
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-heading font-semibold uppercase tracking-wider text-amber-400">
                  Fragmented Customer Touchpoint Journey
                </span>
                <span className="text-[11px] font-sans text-white/40 flex items-center gap-1">
                  <Unlink className="w-3 h-3 text-amber-400/80" /> Disconnected Touchpoints
                </span>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-amber-500/25">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 items-center">
                  {[
                    { label: 'Search', icon: Search, note: 'Scattered channels' },
                    { label: 'Phone', icon: PhoneCall, note: 'Unanswered calls' },
                    { label: 'WhatsApp', icon: MessageSquare, note: 'Manual chats' },
                    { label: 'Waiting', icon: Clock, note: 'Unknown queue' },
                    { label: 'Visit', icon: Store, note: 'Isolated appointment' },
                    { label: 'Offer', icon: Gift, note: 'Forgotten coupons' },
                    { label: 'Repeat Visit', icon: Repeat, note: 'No digital bond' },
                  ].map((step, idx) => {
                    const StepIcon = step.icon;
                    return (
                      <div key={idx} className="flex flex-col items-center text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] relative group">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-2">
                          <StepIcon className="w-4 h-4" />
                        </div>
                        <div className="text-xs font-heading font-bold text-white mb-0.5">
                          {step.label}
                        </div>
                        <div className="text-[10px] font-sans text-amber-400/80">
                          {step.note}
                        </div>
                        {idx < 6 && (
                          <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-amber-500/40 font-bold text-xs">
                            ⚡
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. SALON / SHOP OWNER PROBLEMS */}
        <div className="mb-16 sm:mb-20">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Header Block */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 flex-shrink-0">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-amber-400/80 uppercase tracking-widest block">
                    दूसरा हिस्सा
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    Salons और Shop Owners की समस्याएँ
                  </h3>
                </div>
              </div>
              <span className="text-xs font-sans text-white/50 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 self-start sm:self-auto">
                10 मुख्य चुनौतियाँ
              </span>
            </div>

            {/* Approved Introductory Text & Free Nexora Website Teaser */}
            <div className="mb-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-amber-500/[0.12] via-black to-[#DAAF37]/10 border border-[#DAAF37]/35 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_24px_rgba(218,175,55,0.12)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]" />
              
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/35 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#F4D03F]" />
                  Small Business Digital Enablement
                </span>
                <p className="text-sm sm:text-base text-white/95 font-sans leading-relaxed mt-2 font-medium">
                  &ldquo;हर छोटा Haircut / Hair Salon / Beauty Shop owner अपनी website नहीं बनाता।
                  Nexora One हर छोटे business owner को उनके अपने नाम और branding के साथ FREE website दे रहा है — 30+ ready templates में से choose करके, लगभग 30 minutes में digital presence तैयार करने के लिए।&rdquo;
                </p>
              </div>

              {/* Free Nexora website solution teaser */}
              <div className="pt-3.5 border-t border-white/10 flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-heading font-semibold text-[#F4D03F]">
                <span>30+ templates</span>
                <span className="text-white/40">•</span>
                <span>Own business name</span>
                <span className="text-white/40">•</span>
                <span>Own branding</span>
                <span className="text-white/40">•</span>
                <span>Approx. 30-minute setup</span>
              </div>
            </div>

            {/* NEW CINEMATIC SALON / SHOP OWNER PROBLEMS & SOLUTIONS INFOGRAPHIC */}
            <div className="mb-12 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
              <img
                src="/assets/salon-owner-problems.webp"
                alt="Salon and Shop Owner Challenges and Nexora One Solutions Infographic"
                width={1920}
                height={960}
                className="w-full h-auto object-cover select-none block"
                loading="eager"
              />
            </div>

            {/* Salon / Shop Owner Problem Details & Cards */}
            {/* Disconnected Technology Stack Banner */}
            <div className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-amber-500/[0.08] via-black to-amber-500/[0.05] border border-amber-500/30">
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-amber-400 block mb-2">
                Disconnected Technology Stack Burden
              </span>
              <p className="text-xs sm:text-sm text-white/80 font-sans mb-4">
                Business owners are forced to juggle multiple disjointed tools with separate accounts, recurring subscriptions, and no unified data:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-heading font-bold text-white">
                {[
                  'Website',
                  'Booking',
                  'CRM',
                  'Marketing',
                  'Loyalty',
                  'Reviews',
                  'Communication',
                ].map((tool, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-3.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/15 text-white/90 shadow-sm flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-amber-400" />
                      {tool}
                    </span>
                    {idx < 6 && (
                      <span className="text-amber-400/60 font-serif font-normal">+</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* 10 Salon / Shop Owner Problems Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
              {[
                {
                  id: '01',
                  title: 'Weak or fragmented digital presence.',
                  desc: 'Outdated social links or lack of a customized, branded website to represent the business professionally.',
                },
                {
                  id: '02',
                  title: 'Website cost / complexity.',
                  desc: 'High upfront development agency costs, technical maintenance hurdles, and slow turnaround times.',
                },
                {
                  id: '03',
                  title: 'Manual booking management.',
                  desc: 'Pen-and-paper diaries, double-bookings, and hours lost manually responding to appointment requests.',
                },
                {
                  id: '04',
                  title: 'Empty capacity / uneven workload.',
                  desc: 'Dead hours during midweek and overwhelming weekend surges with no dynamic load leveling.',
                },
                {
                  id: '05',
                  title: 'Customer acquisition difficulty.',
                  desc: 'Relying purely on unpredictable physical footfall and expensive, un-targeted local ads.',
                },
                {
                  id: '06',
                  title: 'Customer retention difficulty.',
                  desc: 'Clients drift away to competitors because there is no automated recall or retention system.',
                },
                {
                  id: '07',
                  title: 'Manual marketing and follow-up.',
                  desc: 'Zero automated campaigns; staff lack time or tools to run regular SMS or WhatsApp follow-ups.',
                },
                {
                  id: '08',
                  title: 'Scattered customer information.',
                  desc: 'Client treatment history, preferences, and contact details are spread across notes and personal phones.',
                },
                {
                  id: '09',
                  title: 'Local visibility and ranking challenges.',
                  desc: 'Struggling to compete against large salon chains for local search discoverability and verified reviews.',
                },
                {
                  id: '10',
                  title: 'Fragmented technology stack.',
                  desc: 'Software tools that do not talk to each other, creating duplicated work and fragmented reports.',
                },
              ].map((prob) => (
                <div
                  key={prob.id}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-500/35 transition-colors flex items-start gap-3.5"
                >
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-heading font-bold flex-shrink-0 mt-0.5">
                    {prob.id}
                  </span>
                  <div>
                    <h4 className="text-sm font-heading font-semibold text-white mb-1 leading-snug">
                      {prob.title}
                    </h4>
                    <p className="text-xs text-white/55 font-sans leading-relaxed">
                      {prob.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. PROFESSIONAL / JOB SEEKER PROBLEMS */}
        <div className="mb-16 sm:mb-20">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Header Block */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 flex-shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-amber-400/80 uppercase tracking-widest block">
                    तीसरा हिस्सा
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    Professionals और Job ढूँढने वालों की समस्याएँ
                  </h3>
                </div>
              </div>
              <span className="text-xs font-sans text-white/50 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 self-start sm:self-auto">
                रोज़गार ढूँढने में आने वाली बाधाएँ
              </span>
            </div>

            {/* Section Introduction */}
            <div className="mb-6">
              <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
                Talented professionals are ready, but finding the right opportunities is still difficult due to fragmented local salon openings, disconnected portfolios, and informal hiring channels.
              </p>
            </div>

            {/* EXACT UPLOADED CINEMATIC IMAGE */}
            <div className="mb-10 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
              <img
                src="/assets/professional-problems-cinematic.webp"
                alt="Beauty Industry Job-Seeker Challenges: Relevant Jobs Difficult to Discover, Local Salon Opportunities Fragmented, Weak Profiles, Limited Business Connections"
                width={1920}
                height={960}
                className="w-full h-auto object-cover select-none block"
                loading="eager"
              />
            </div>

            {/* Existing Detailed Problem Content / Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  title: 'relevant jobs are difficult to discover',
                  desc: 'Openings are scattered across generic job portals, social media groups, or word-of-mouth.',
                },
                {
                  title: 'local salon opportunities are fragmented',
                  desc: 'No dedicated single channel showing nearby verified salons actively hiring for specific specialties.',
                },
                {
                  title: 'professional profile / portfolio is weak or disconnected',
                  desc: 'Stylists and artists lack a verified digital portfolio to showcase their client results, ratings, and skills.',
                },
                {
                  title: 'business-to-professional connection is limited',
                  desc: 'Direct hiring relationships depend on chance personal networks rather than an industry talent hub.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-500/30 transition-colors flex items-start gap-3.5"
                >
                  <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-heading font-semibold text-white">
                      {item.title}
                    </div>
                    <div className="text-xs text-white/50 font-sans mt-1 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Direction: Disconnected Opportunity Channels */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10">
              <span className="text-[11px] font-heading font-semibold text-white/60 uppercase tracking-wider block mb-3">
                Disconnected Opportunity Channels
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs font-sans text-white/70">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-dashed border-white/15">
                  Generic Classifieds
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-dashed border-white/15">
                  Informal Word-of-Mouth
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-dashed border-white/15">
                  Scattered Social DMs
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-dashed border-white/15">
                  Isolated Paper Resumes
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. SUPPLIER / BRAND PROBLEMS */}
        <div className="mb-16 sm:mb-20">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Header Block */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 flex-shrink-0">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-amber-400/80 uppercase tracking-widest block">
                    Stakeholder 04
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    Supplier / Brand Problems
                  </h3>
                </div>
              </div>
              <span className="text-xs font-sans text-white/50 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 self-start sm:self-auto">
                4 Core B2B Supply Disconnects
              </span>
            </div>

            {/* Short Introduction */}
            <div className="mb-6">
              <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
                Manufacturers, distributors, and brands face fragmented access to beauty businesses, relying on door-to-door sales reps, static PDF catalogues, and disjointed messaging threads for wholesale supply.
              </p>
            </div>

            {/* EXACT SUPPLIER / BRAND PROBLEMS IMAGE */}
            <div className="mb-10 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
              <img
                src="/assets/supplier-problems-cinematic.webp"
                alt="Beauty Industry Supply Challenges: Fragmented Access, Supplier Discovery Difficulty, Scattered Catalogues, Fragmented B2B Enquiries"
                width={1920}
                height={960}
                className="w-full h-auto object-cover select-none block"
                loading="eager"
              />
            </div>

            {/* Existing Four Written Problem Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  title: 'fragmented access to beauty businesses',
                  desc: 'Manufacturers and distributors must rely on individual field sales reps knocking on salon doors.',
                },
                {
                  title: 'supplier discovery difficulty',
                  desc: 'Salons cannot easily discover new certified brands, compare wholesale terms, or verify suppliers.',
                },
                {
                  title: 'catalogue/product visibility scattered',
                  desc: 'Product lines, ingredients, and bulk availability remain buried in static PDF sheets or paper booklets.',
                },
                {
                  title: 'business enquiry channels are fragmented',
                  desc: 'Ordering, re-stock inquiries, and B2B communications are lost in informal messaging threads.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-500/30 transition-colors flex items-start gap-3.5"
                >
                  <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-heading font-semibold text-white">
                      {item.title}
                    </div>
                    <div className="text-xs text-white/50 font-sans mt-1 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Direction: Fragmented Relationship Flow */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10">
              <span className="text-[11px] font-heading font-semibold text-white/60 uppercase tracking-wider block mb-2.5">
                Fragmented Supply Relationship Flow
              </span>
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-sans text-center">
                <div className="font-heading font-bold text-amber-300">
                  Brand / Supplier
                </div>
                <div className="text-amber-400/60 font-mono text-[10px]">
                  → [Multiple Channels] →
                </div>
                <div className="font-heading font-bold text-white/90">
                  Beauty Businesses
                </div>
              </div>
              <div className="text-[10px] text-white/40 text-center mt-2">
                Unstructured orders, delayed delivery inquiries & isolated accounts
              </div>
            </div>
          </div>
        </div>

        {/* 6. INDUSTRY-LEVEL PROBLEM & FRAGMENTED ECOSYSTEM DIAGRAM */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-b from-[#141414] via-black to-[#090909] border-2 border-amber-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(245,158,11,0.1)] relative overflow-hidden">
          {/* Ambient Danger / Disconnect Aura */}
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-amber-500/[0.06] blur-[100px] pointer-events-none" />

          {/* Section 6 Heading & Statement */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-amber-400 block mb-3">
              Industry-Level Problem
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
              &ldquo;Customers, businesses, professionals, Growth Partners, brands and suppliers exist, but they are not sufficiently connected in one digital network.&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed">
              Every participant operates within the physical economy of beauty, yet each remains isolated behind separate platforms, manual interactions, and disconnected technology silos.
            </p>
          </div>

          {/* Fragmented Ecosystem Diagram (Participant groups separated from each other) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-black/80 border border-white/10 relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Unlink className="w-4 h-4" />
                Fragmented Industry Architecture (Current State)
              </span>
              <span className="text-[11px] font-sans text-white/50">
                Disconnected Silos • No Unified Network
              </span>
            </div>

            {/* 6 Disconnected Participant Groups */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 relative">
              {[
                {
                  name: 'Customer',
                  icon: Users,
                  status: 'Isolated Search',
                  barrier: 'Disconnected from direct inventory',
                },
                {
                  name: 'Business',
                  icon: Store,
                  status: 'Manual Workflows',
                  barrier: 'Siloed booking & retention tools',
                },
                {
                  name: 'Professional',
                  icon: Briefcase,
                  status: 'Scattered Jobs',
                  barrier: 'No verified industry profile',
                },
                {
                  name: 'Growth Partner',
                  icon: TrendingUp,
                  status: 'Unstructured Field',
                  barrier: 'Lacking digital tracking infrastructure',
                },
                {
                  name: 'Brand',
                  icon: ShoppingBag,
                  status: 'Indirect Reach',
                  barrier: 'Dependent on fragmented distributors',
                },
                {
                  name: 'Supplier',
                  icon: Boxes,
                  status: 'Scattered Catalogues',
                  barrier: 'Informal B2B ordering channels',
                },
              ].map((group, index) => {
                const GroupIcon = group.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-white/[0.03] border border-dashed border-amber-500/30 flex flex-col items-center text-center relative group"
                  >
                    {/* Disconnect indicator */}
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-2.5">
                      <GroupIcon className="w-4 h-4" />
                    </div>

                    <div className="text-sm font-heading font-bold text-white mb-1">
                      {group.name}
                    </div>

                    <div className="text-[10px] font-heading font-medium text-amber-400 uppercase tracking-wide mb-1">
                      {group.status}
                    </div>

                    <div className="text-[10px] text-white/45 font-sans leading-tight">
                      {group.barrier}
                    </div>

                    {/* Broken Link Indicator */}
                    <div className="mt-3 px-2 py-0.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-300 text-[9px] font-sans">
                      Disconnected
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Fragmentation Callout Ribbon */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-white/60 gap-3 text-center sm:text-left">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>All operating around the same industry, but without a connected digital network.</span>
              </div>
              <div className="text-amber-400 font-heading font-semibold text-[11px] uppercase tracking-wider">
                The Core Structural Gap
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CURRENT TRACTION & PRODUCT PROOF */}
      <section
        id="current-traction"
        aria-label="Current Traction and Product Proof Section"
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[400px] bg-gradient-to-b from-[#DAAF37]/[0.05] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Key Question */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Activity className="w-3.5 h-3.5 text-[#F4D03F]" />
            2. CURRENT TRACTION & PRODUCT PROOF
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            Nexora आज{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              कहाँ खड़ा है?
            </span>
          </h2>

          <p className="text-base sm:text-lg font-heading font-medium text-[#F4D03F] mb-6">
            &ldquo;Product तैयार है, अब फोकस मार्केट में उतरने और काम शुरू करने पर है।&rdquo;
          </p>

          <GlassCard className="p-6 sm:p-8 border-[#DAAF37]/40 bg-gradient-to-br from-[#DAAF37]/10 via-black to-black max-w-3xl mx-auto" glow="gold">
            <p className="text-sm sm:text-base text-white/90 font-sans leading-relaxed">
              Nexora लॉन्च के लिए तैयार किया जा रहा है। Product का ढांचा तैयार है, और अब असली काम मार्केट में उतरकर होगा।
            </p>
          </GlassCard>
        </div>

        {/* 2. TRACTION DASHBOARD (FULL TRANSPARENCY) */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: 'Salons', icon: Store },
              { label: 'Active Salons', icon: Activity },
              { label: 'Customers', icon: Users },
              { label: 'Bookings', icon: Calendar },
              { label: 'Repeat Bookings', icon: Repeat },
              { label: 'Growth Partners', icon: UserPlus },
              { label: 'Active Partners', icon: Target },
              { label: 'Revenue', icon: Coins },
              { label: 'Retention', icon: Heart },
            ].map((metric, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col items-center text-center">
                <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] mb-3">
                  <metric.icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-heading font-bold mb-1">{metric.label}</span>
                <span className="text-[11px] font-sans font-bold text-white/30 italic leading-tight">Data Not Available Yet</span>
              </div>
            ))}
            {/* Final Summary Card */}
            <div className="p-4 rounded-2xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex flex-col items-center justify-center text-center col-span-2 md:col-span-1">
              <span className="text-[10px] text-[#F4D03F] uppercase tracking-widest font-heading font-bold mb-1">Status</span>
              <span className="text-xs font-heading font-extrabold text-white">PRE-LAUNCH</span>
            </div>
          </div>
        </div>

        {/* 3. PRODUCT PROOF VISUAL STACK */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">Product Proof</h3>
            <p className="text-xs text-white/50 font-sans uppercase tracking-widest">Actual evidence of built architecture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Customer Experience', 
                desc: 'Discovery / Offers / Booking', 
                icon: Search, 
                status: 'READY' 
              },
              { 
                title: 'SalonOS', 
                desc: 'CRM / Recall / Loyalty', 
                icon: Database, 
                status: 'DEMONSTRATED' 
              },
              { 
                title: 'Website Layer', 
                desc: 'Salon Web / Branding / Templates', 
                icon: Globe, 
                status: 'READY' 
              },
              { 
                title: 'Growth Partner', 
                desc: 'Dashboard / Onboarding', 
                icon: LayoutDashboard, 
                status: 'DEMONSTRATED' 
              },
              { 
                title: 'B2B', 
                desc: 'Market / Supplier Network', 
                icon: ShoppingBag, 
                status: 'PLANNED' 
              },
              { 
                title: 'Investor', 
                desc: 'Model / Financials / Evidence', 
                icon: ShieldCheck, 
                status: 'READY' 
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-white/10 group hover:border-[#DAAF37]/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] px-2.5 py-1 rounded-full font-heading font-bold uppercase tracking-wider ${
                    item.status === 'READY' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                    item.status === 'DEMONSTRATED' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    item.status === 'PLANNED' ? 'bg-white/10 text-white/50 border border-white/20' :
                    'bg-[#DAAF37]/20 text-[#F4D03F] border border-[#DAAF37]/30'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <h4 className="text-base font-heading font-bold text-white mb-1">{item.title}</h4>
                <p className="text-xs text-white/60 font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. PRODUCT READINESS VS COMMERCIAL TRACTION COMPARISON */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Readiness */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-emerald-500/[0.08] via-black to-black border border-emerald-500/30">
            <h4 className="text-lg font-heading font-bold text-emerald-400 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              PRODUCT READINESS
            </h4>
            <div className="space-y-4">
              {[
                'Product architecture complete',
                'User journeys fully designed',
                'Working/demo components verified',
                'Ecosystem structure established',
                'Business model ready for execution'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-white/80 font-sans">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Traction */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] via-black to-black border border-white/10">
            <h4 className="text-lg font-heading font-bold text-white/60 mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              COMMERCIAL TRACTION
            </h4>
            <div className="space-y-4">
              {[
                'Actual salons on-ground',
                'Actual customers active',
                'Actual monthly bookings',
                'Actual repeat booking rate',
                'Actual monthly revenue',
                'Actual customer retention',
                'Actual partner activations'
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-dashed border-white/10">
                  <span className="text-sm text-white/50 font-sans">{item}</span>
                  <span className="text-[10px] font-heading font-bold text-white/30 italic uppercase">Not Yet Measured</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. VISUAL LAUNCH FLOW & INVESTOR NOTE */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center mb-10">
            {[
              { label: 'PRODUCT READY', active: true },
              { label: 'MARKET LAUNCH', active: false },
              { label: 'REAL-WORLD ACTIVATION', active: false },
              { label: 'TRACTION DATA', active: false },
              { label: 'VALIDATION', active: false }
            ].map((step, i, arr) => (
              <React.Fragment key={i}>
                <div className={`px-4 py-2 rounded-xl border font-heading font-bold text-[10px] tracking-widest ${
                  step.active 
                    ? 'bg-[#DAAF37]/20 border-[#DAAF37] text-[#F4D03F] shadow-[0_0_15px_rgba(218,175,55,0.2)]' 
                    : 'bg-white/[0.02] border-white/10 text-white/30'
                }`}>
                  {step.label}
                </div>
                {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-white/10 hidden sm:block" />}
              </React.Fragment>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#090909] border border-[#DAAF37]/30 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-[#DAAF37]" />
              <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-[0.2em]">Investor Note</span>
            </div>
            <h4 className="text-base sm:text-xl font-heading font-bold text-white mb-3">
              &ldquo;Readiness is not the same as traction.&rdquo;
            </h4>
            <p className="text-sm text-white/70 font-sans leading-relaxed max-w-2xl mx-auto">
              Nexora should be evaluated separately on what has been built (the product engine) and what the market has already validated (the commercial traction). We invite investors to verify the <strong>Product Proof</strong> while preparing for the <strong>Traction Validation</strong> stage.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY WILL SALONS ADOPT NEXORA? */}
      <section
        id="customer-solution"
        aria-label="Why Will Salons Adopt Nexora Section"
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Aura */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#F4D03F]" />
            3. WHY SALONS ADOPT NEXORA
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            सैलून Nexora से{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              क्यों जुड़ेंगे?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/80 font-sans max-w-3xl mx-auto leading-relaxed mb-6">
            &ldquo;Nexora का काम सैलून को नए कस्टमर ढूंढने में मदद करना, बुकिंग मैनेज करना और पुराने कस्टमर्स के साथ रिश्ता बनाए रखना है।&rdquo;
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-heading font-medium text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
            Value Proposition • भविष्य की योजना
          </div>
        </div>

        {/* 2. 6 CORE SALON BENEFITS CARDS */}
        <div className="mb-14 sm:mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
              Core Operational Benefits
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              6 Core Salon Benefits
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Card 1 — New Customer Bookings */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] group-hover:scale-105 transition-transform">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-heading font-bold text-[#DAAF37]/70 uppercase tracking-widest">
                    Benefit 01
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-2.5">
                  New Customer Bookings
                </h4>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  Nexora helps salons become discoverable to customers looking for beauty services and can provide an additional source of customer bookings.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-[#DAAF37] font-sans">
                Additional Customer Acquisition Channel
              </div>
            </div>

            {/* Card 2 — Digital Presence */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] group-hover:scale-105 transition-transform">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-heading font-bold text-[#DAAF37]/70 uppercase tracking-widest">
                    Benefit 02
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-2.5">
                  Digital Presence
                </h4>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  Salon gets a professional digital presence within the Nexora ecosystem, helping customers discover its services, profile, offers and booking options.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-[#DAAF37] font-sans">
                Professional Branded Storefront
              </div>
            </div>

            {/* Card 3 — Online Booking & Management */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] group-hover:scale-105 transition-transform">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-heading font-bold text-[#DAAF37]/70 uppercase tracking-widest">
                    Benefit 03
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-2.5">
                  Online Booking & Management
                </h4>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  Customers can discover services and submit bookings digitally, reducing dependence on purely manual booking communication.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-[#DAAF37] font-sans">
                Structured Schedule Workflow
              </div>
            </div>

            {/* Card 4 — Marketing & Customer Reach */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] group-hover:scale-105 transition-transform">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-heading font-bold text-[#DAAF37]/70 uppercase tracking-widest">
                    Benefit 04
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-2.5">
                  Marketing & Customer Reach
                </h4>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  Nexora provides a connected platform for offers, promotions, customer communication and digital marketing support.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-[#DAAF37] font-sans">
                Connected Promotional Support
              </div>
            </div>

            {/* Card 5 — Customer Retention */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] group-hover:scale-105 transition-transform">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-heading font-bold text-[#DAAF37]/70 uppercase tracking-widest">
                    Benefit 05
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-2.5">
                  Customer Retention
                </h4>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  Nexora's loyalty, recall and customer-engagement capabilities are designed to help salons encourage repeat visits and stronger customer relationships.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-[#DAAF37] font-sans">
                Automated Loyalty & Recall
              </div>
            </div>

            {/* Card 6 — Online Payment Workflow */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] group-hover:scale-105 transition-transform">
                    <Coins className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-heading font-bold text-[#DAAF37]/70 uppercase tracking-widest">
                    Benefit 06
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-2.5">
                  Online Payment Workflow
                </h4>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  Where enabled, Nexora can support online advance payment and digital booking/payment workflows.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-[#DAAF37] font-sans">
                Digital Payment Integration
              </div>
            </div>
          </div>
        </div>

        {/* 3. 10% COMMISSION MODEL & COMMERCIAL LOGIC */}
        <div className="mb-14 sm:mb-16">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/30 shadow-[0_16px_48px_rgba(0,0,0,0.7)] relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
                  Commercial Logic
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  10% Commission Structure
                </h3>
              </div>
              <span className="text-xs font-sans text-[#F4D03F] px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 self-start sm:self-auto font-medium">
                Approved Business Model
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
                  Modeled Commission Logic
                </div>
                <p className="text-sm text-white/90 font-sans leading-relaxed">
                  &ldquo;Nexora's modeled salon booking commission is 10% of the booked service value.&rdquo;
                </p>
                <p className="text-xs text-white/60 font-sans">
                  Note: Individual Salon Partner agreements may differ based on scale and specific partnership terms. No new fees are introduced.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
                  The Value Exchange
                </div>
                <p className="text-sm text-white/90 font-sans leading-relaxed">
                  &ldquo;The salon pays a commission in exchange for access to Nexora's customer discovery, booking and digital growth ecosystem.&rdquo;
                </p>
                <p className="text-xs text-white/60 font-sans">
                  Mutually aligned growth: salons only pay when service value is successfully booked and delivered through the platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. SALON VALUE EQUATION */}
        <div className="mb-14 sm:mb-16">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-white/[0.06] via-[#121212] to-white/[0.06] border border-[#DAAF37]/40 text-center shadow-[0_16px_48px_rgba(0,0,0,0.8),0_0_30px_rgba(218,175,55,0.12)]">
            <span className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-[#DAAF37] block mb-3">
              Structural Formula
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-6">
              Salon Value Equation
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm md:text-base font-heading font-bold text-white">
              <span className="px-3.5 py-2 rounded-xl bg-white/[0.06] border border-white/15 text-[#FFF2B2]">
                आसान खोज (DISCOVERY)
              </span>
              <span className="text-[#DAAF37] text-lg">+</span>
              <span className="px-3.5 py-2 rounded-xl bg-white/[0.06] border border-white/15 text-[#FFF2B2]">
                DIGITAL पहुँच
              </span>
              <span className="text-[#DAAF37] text-lg">+</span>
              <span className="px-3.5 py-2 rounded-xl bg-white/[0.06] border border-white/15 text-[#FFF2B2]">
                BOOKING की सुविधा
              </span>
              <span className="text-[#DAAF37] text-lg">+</span>
              <span className="px-3.5 py-2 rounded-xl bg-white/[0.06] border border-white/15 text-[#FFF2B2]">
                CUSTOMERS से जुड़ाव
              </span>
              <span className="text-[#DAAF37] text-lg">=</span>
              <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#DAAF37] to-[#F4D03F] text-black font-extrabold shadow-[0_0_20px_rgba(218,175,55,0.4)]">
                BUSINESS में संभावित बढ़ोत्तरी
              </span>
            </div>

            <p className="text-xs text-white/50 font-sans mt-4">
              यह growth बाज़ार और salons के प्रदर्शन पर निर्भर करती है।
            </p>
          </div>
        </div>

        {/* 5. WHY THIS IS BETTER THAN ONLY WHATSAPP / INSTAGRAM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 sm:mb-16">
          {/* Traditional Setup */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-red-950/20 via-[#0D0D0D] to-[#070707] border border-red-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-heading font-bold text-xs">
                  ✕
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-red-400 uppercase tracking-widest block">
                    पुराना तरीका
                  </span>
                  <h4 className="text-xl font-heading font-bold text-white">
                    सिर्फ WhatsApp और Instagram
                  </h4>
                </div>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-white/70 font-sans">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span>बिखरे हुए मैसेजेस और बार-बार फोन कॉल्स</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span>Booking का कोई सही रिकॉर्ड या schedule नहीं</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span>पुराने customers को याद करने का कोई automatic ज़रिया नहीं</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 text-xs text-red-300 font-sans italic">
              सारा काम manual मेहनत पर टिका है।
            </div>
          </div>

          {/* Nexora Setup */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/35 shadow-[0_16px_48px_rgba(0,0,0,0.7)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] font-heading font-bold text-xs">
                  ✓
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                    Nexora का आधुनिक तरीका
                  </span>
                  <h4 className="text-xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF2B2] to-[#DAAF37]">
                    Nexora Ecosystem
                  </h4>
                </div>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-white/80 font-sans">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                  <span>Digital पहचान और नये customers की खोज</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                  <span>सटीक booking और व्यवस्थित कामकाज</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                  <span>Payments और business growth के लिए आधुनिक सिस्टम</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 text-xs text-[#DAAF37] font-sans">
              यह आपके मौजूदा तरीकों को और मज़बूत बनाने वाला system है।
            </div>
          </div>
        </div>

        {/* 6. WHAT DOES THE SALON OWNER GET? */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.7)]">
          <div className="text-center mb-8">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
              Salon Owner के लिए मुख्य फायदे
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Salon Owner को क्या मिलेगा?
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {[
              { label: 'Customer Database की ओनरशिप', icon: Database },
              { label: 'Automatic 30-Day Recall', icon: RotateCcw },
              { label: 'Birthday और Anniversary Automation', icon: Cake },
              { label: 'नये Customers की खोज का जरिया', icon: Search },
              { label: 'फ्री Professional Website', icon: Globe },
              { label: 'Online Booking और Calendar', icon: Calendar },
              { label: 'Staff और Salary Management', icon: Users },
              { label: 'Business Growth Analytics', icon: TrendingUp },
            ].map((benefit, idx) => {
              const BenefitIcon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#DAAF37]/40 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] flex-shrink-0 group-hover:scale-105 transition-transform">
                    <BenefitIcon className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-heading font-semibold text-white/90 group-hover:text-white">
                    {benefit.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 7. GROWTH PARTNER NETWORK — THE EXPANSION ENGINE */}
        <div className="mt-12 p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[#DAAF37]/10 via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 space-y-6">
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
                  Distribution Strategy
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
                  Growth Partner Network
                </h3>
                <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
                  Growth Partners help Nexora acquire and activate salons at the local level. They are the expansion layer connecting our technology with neighborhood beauty businesses.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { step: 'Partner', icon: Users },
                  { step: 'Salon Onboarding', icon: Store },
                  { step: 'Activation', icon: Activity },
                  { step: 'Network Growth', icon: Network }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 group hover:border-[#DAAF37]/40 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/10 flex items-center justify-center text-[#F4D03F]">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-heading font-bold text-white/80">{item.step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-5/12 p-6 rounded-2xl bg-black/40 border border-[#DAAF37]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DAAF37]/5 blur-2xl" />
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <Trophy className="w-5 h-5 text-[#DAAF37]" />
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-white/50">Milestone Recognition</span>
              </div>
              <ul className="space-y-4">
                {[
                  { m: '25 Shops', r: 'Nexora T-Shirt' },
                  { m: '100 Shops', r: 'HP Laptop' },
                  { m: '1000 Shops', r: 'District Partner Level' }
                ].map((row, i) => (
                  <li key={i} className="flex items-center justify-between text-xs">
                    <span className="font-heading font-bold text-[#DAAF37]">{row.m}</span>
                    <span className="font-sans text-white/60">{row.r}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <span className="text-[10px] font-sans text-white/30 italic">Planned Reward Framework • Performance Based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW DOES NEXORA MAKE MONEY? */}
      <section
        id="how-does-nexora-make-money"
        aria-label="How Does Nexora Make Money Section"
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Coins className="w-3.5 h-3.5 text-[#F4D03F]" />
            कमाई का तरीका (Business Model)
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            Nexora{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              पैसे कैसे कमाएगा?
            </span>
          </h2>

          <p className="text-base sm:text-lg font-heading font-medium text-[#F4D03F] mb-4">
            &ldquo;Nexora की कमाई कहाँ से होगी?&rdquo;
          </p>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed">
            Nexora की कमाई मुख्य रूप से बुकिंग कमीशन और विज्ञापनों (Ads) से होगी। यहाँ इसका पूरा हिसाब दिया गया है:
          </p>
        </div>

        {/* 2. PRIMARY REVENUE SOURCES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {/* Stream 1: Salon Booking Commission */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-[#DAAF37]/30 hover:border-[#DAAF37]/50 transition-all shadow-[0_16px_48px_rgba(0,0,0,0.7)] flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] group-hover:scale-105 transition-transform">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                      कमाई का पहला ज़रिया
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Salon Booking पर Commission
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#FFF2B2] text-xs font-heading font-bold">
                  10% Commission
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-6">
                जब कोई customer Nexora के ज़रिए salon या spa बुक करता है, तो उस transaction पर platform 10% का commission लेता है।
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-white/75 font-sans">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-4 h-4 text-[#DAAF37] flex-shrink-0" />
                  <span>काम होने पर पेमेंट: Salons तभी पैसे देते हैं जब उन्हें booking मिलती है।</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-4 h-4 text-[#DAAF37] flex-shrink-0" />
                  <span>बढ़त का फायदा: जितने ज़्यादा customers, उतनी ज़्यादा कमाई।</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-heading font-semibold text-[#DAAF37]">
              मुख्य कमाई का ज़रिया
            </div>
          </div>

          {/* Stream 2: Advertising Revenue */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-[#DAAF37]/30 hover:border-[#DAAF37]/50 transition-all shadow-[0_16px_48px_rgba(0,0,0,0.7)] flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] group-hover:scale-105 transition-transform">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                      कमाई का दूसरा ज़रिया
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white">
                      विज्ञापन (Ads) से कमाई
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#FFF2B2] text-xs font-heading font-bold">
                  Promotional Spots
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-6">
                Brands, beauty products और salons अपने प्रमोशन के लिए Nexora platform पर विज्ञापन (ads) दिखा सकते हैं।
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-white/75 font-sans">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-4 h-4 text-[#DAAF37] flex-shrink-0" />
                  <span>सही लोगों तक पहुँच: विज्ञापन सीधे उन लोगों को दिखेंगे जो beauty services ढूँढ रहे हैं।</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-4 h-4 text-[#DAAF37] flex-shrink-0" />
                  <span>आधुनिक विज्ञापन: जो user experience को खराब नहीं करते।</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-heading font-semibold text-[#DAAF37]">
              Ads और प्रमोशन से होने वाली कमाई
            </div>
          </div>
        </div>

        {/* 3. STRICT BOUNDARY & CLARITY CALLOUT */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-white/[0.04] via-black to-white/[0.04] border border-white/10 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-[#DAAF37]" />
            <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
              Business Model की साफ़ बात
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white/75 font-sans max-w-3xl mx-auto leading-relaxed">
            Nexora की कमाई का model साफ़ है: यह booking commission और विज्ञापन (ads) पर आधारित है। अन्य कोई भी नया काम इस मुख्य model से अलग रखा गया है।
          </p>
        </div>
      </section>

      {/* SECTION 5 — ₹30,000 BOOKING PAYMENT FLOW */}
      <section
        id="booking-payment-flow"
        aria-label="₹30,000 Booking Payment Flow Section"
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Coins className="w-3.5 h-3.5 text-[#F4D03F]" />
            5. ₹30,000 की बुकिंग होने पर पैसा किसके पास कितना जाता है
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            ₹30,000 की बुकिंग पर{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              पैसों का लेनदेन
            </span>
          </h2>

          <p className="text-base sm:text-lg font-heading font-medium text-[#F4D03F] mb-4">
            &ldquo;जब ₹30,000 की बुकिंग होती है, तो पैसा कैसे काम करता है?&rdquo;
          </p>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-4">
            नीचे दिए गए उदाहरण से समझें कि पेमेंट कैसे प्रोसेस होती है और किसको कितना हिस्सा मिलता है:
          </p>

          {/* Illustrative Example Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/40 text-[#FFF2B2] text-xs font-heading font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(218,175,55,0.2)]">
            <ShieldCheck className="w-4 h-4 text-[#DAAF37]" />
            यह सिर्फ एक उदाहरण है
          </div>
        </div>

        {/* 2. VISUAL PAYMENT FLOW CARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {/* Step 1: Customer Payment */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-[#DAAF37]/30 hover:border-[#DAAF37]/50 transition-all shadow-[0_16px_48px_rgba(0,0,0,0.7)] flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] group-hover:scale-105 transition-transform">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                      पहला चरण
                    </span>
                    <h3 className="text-lg font-heading font-bold text-white">
                      Customer का Payment
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#FFF2B2] text-xs font-heading font-bold">
                  ₹30,000
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-6">
                Customer एक प्रीमियम पैकेज या ब्राइडल सर्विस के लिए <strong className="text-white">₹30,000</strong> का ऑनलाइन भुगतान (payment) करता है।
              </p>

              <div className="space-y-2 mb-4 text-xs text-white/70 font-sans">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>सुरक्षित पेमेंट गेटवे के ज़रिए भुगतान</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>Booking तुरंत confirm हो जाती है</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-[11px] font-heading font-semibold text-[#DAAF37]">
              कुल लेनदेन (Gross Value)
            </div>
          </div>

          {/* Step 2: Gateway & Commission Split */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-[#DAAF37]/30 hover:border-[#DAAF37]/50 transition-all shadow-[0_16px_48px_rgba(0,0,0,0.7)] flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] group-hover:scale-105 transition-transform">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                      दूसरा चरण
                    </span>
                    <h3 className="text-lg font-heading font-bold text-white">
                      Nexora का हिस्सा (10%)
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#FFF2B2] text-xs font-heading font-bold">
                  ₹3,000
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-6">
                Nexora अपने 10% commission के हिसाब से <strong className="text-white">₹3,000</strong> कमाता है। यह platform चलाने और सुधारने का खर्च है।
              </p>

              <div className="space-y-2 mb-4 text-xs text-white/70 font-sans">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>पारदर्शी 10% commission मॉडल</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>Platform को बेहतर बनाने के लिए उपयोग</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-[11px] font-heading font-semibold text-[#DAAF37]">
              Nexora की होने वाली कमाई
            </div>
          </div>

          {/* Step 3: Salon Payout */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-[#DAAF37]/30 hover:border-[#DAAF37]/50 transition-all shadow-[0_16px_48px_rgba(0,0,0,0.7)] flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] group-hover:scale-105 transition-transform">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                      तीसरा चरण
                    </span>
                    <h3 className="text-lg font-heading font-bold text-white">
                      Salon Partner को Payment
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#FFF2B2] text-xs font-heading font-bold">
                  ₹27,000
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-6">
                बाकी के <strong className="text-white">₹27,000 (90%)</strong> सीधे partner salon को मिलते हैं जो customer को service प्रदान करते हैं।
              </p>

              <div className="space-y-2 mb-4 text-xs text-white/70 font-sans">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>Salon Partner के पास सीधा भुगतान</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>हिसाब-किताब एकदम साफ़ और पारदर्शी</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-[11px] font-heading font-semibold text-[#DAAF37]">
              Salon Partner का शुद्ध हिस्सा
            </div>
          </div>
        </div>

        {/* 3. SUMMARY CALCULATION BREAKDOWN BOX */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#DAAF37]/[0.1] via-black to-black border border-[#DAAF37]/40 shadow-[0_16px_48px_rgba(0,0,0,0.8)] mb-8">
          <div className="text-center mb-6">
            <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#DAAF37] block mb-1">
              पूरे लेनदेन का विवरण
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
              ₹30,000 की Booking का पूरा हिसाब
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-xs text-white/50 font-sans block mb-1">कुल Booking की कीमत</span>
              <span className="text-2xl font-heading font-bold text-white">₹30,000</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#DAAF37]/10 border border-[#DAAF37]/30">
              <span className="text-xs text-[#FFF2B2] font-sans block mb-1">Nexora का Commission (10%)</span>
              <span className="text-2xl font-heading font-bold text-[#F4D03F]">₹3,000</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-xs text-white/50 font-sans block mb-1">Salon Partner का हिस्सा (90%)</span>
              <span className="text-2xl font-heading font-bold text-white">₹27,000</span>
            </div>
          </div>
        </div>

        {/* 4. IMPORTANT DISCLAIMER & BOUNDARY NOTICE */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white/[0.03] border border-white/15 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-[#DAAF37]" />
            <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
              ज़रूरी जानकारी
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white/70 font-sans max-w-3xl mx-auto leading-relaxed">
            यह सिर्फ एक <strong className="text-white">उदाहरण</strong> है ताकि आप process को समझ सकें। हर booking ₹30,000 की नहीं होगी और न ही ₹3,000 हर बार Nexora की कमाई होगी। असली कमाई salon की सर्विस, उनकी कीमतों और customers की संख्या पर निर्भर करेगी।
          </p>
        </div>
      </section>

      {/* SECTION 6 — WHY 1,000 SALONS? */}
      <section
        id="why-1000-salons"
        aria-label="Why 1,000 Salons Section"
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <TrendingUp className="w-3.5 h-3.5 text-[#F4D03F]" />
            6. हमने 1,000 सैलून का लक्ष्य क्यों चुना?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            हिसाब-किताब के लिए 1,000 सैलून का ही{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              आधार क्यों?
            </span>
          </h2>

          <p className="text-base sm:text-lg font-heading font-medium text-[#F4D03F] mb-4">
            &ldquo;1,000 सैलून का लक्ष्य किस आधार पर बनाया गया है?&rdquo;
          </p>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            1,000 सैलून का आँकड़ा एक शुरुआती लक्ष्य (Target) है ताकि बिज़नेस की कमाई और मजबूती को समझा जा सके।
          </p>

          {/* Modeled Target Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/40 text-[#FFF2B2] text-xs font-heading font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(218,175,55,0.2)]">
            <ShieldCheck className="w-4 h-4 text-[#DAAF37]" />
            एक लक्ष्य जिसे हम हासिल करना चाहते हैं
          </div>
        </div>

        {/* 2. CORE EXPLANATION CARDS (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {/* Card 1: Not Current Traction */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-[#DAAF37]/30 hover:border-[#DAAF37]/50 transition-all shadow-[0_16px_48px_rgba(0,0,0,0.7)] flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] group-hover:scale-105 transition-transform">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                      मौजूदा स्थिति
                    </span>
                    <h3 className="text-lg font-heading font-bold text-white">
                      यह भविष्य का लक्ष्य है
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/70 text-xs font-heading font-bold">
                  Baseline
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-6">
                Nexora के सभी platforms लॉन्च के लिए तैयार हैं। 1,000 salons का आंकड़ा पहले दिन की सच्चाई नहीं, बल्कि एक तय किया गया मील का पत्थर (milestone) है।
              </p>

              <div className="space-y-2 mb-4 text-xs text-white/70 font-sans">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>लॉन्च के लिए पूरी तैयारी</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>कोई बनावटी या झूठे आंकड़े नहीं</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-[11px] font-heading font-semibold text-[#DAAF37]">
              Business की साफ़ स्थिति
            </div>
          </div>

          {/* Card 2: Target & Management Assumption */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-[#DAAF37]/30 hover:border-[#DAAF37]/50 transition-all shadow-[0_16px_48px_rgba(0,0,0,0.7)] flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] group-hover:scale-105 transition-transform">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                      Model का आधार
                    </span>
                    <h3 className="text-lg font-heading font-bold text-white">
                      Management का अनुमान
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#FFF2B2] text-xs font-heading font-bold">
                  Scale Target
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-6">
                यह आंकड़ा भविष्य की planning के लिए उपयोग किया गया है। इससे यह समझने में मदद मिलती है कि एक बड़े स्तर पर पहुँचने के बाद business कितना टिकाऊ होगा।
              </p>

              <div className="space-y-2 mb-4 text-xs text-white/70 font-sans">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>Planning के लिए चुना गया एक पैमाना</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>एक सोची-समझी growth strategy</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-[11px] font-heading font-semibold text-[#DAAF37]">
              Financial Model की बनावट
            </div>
          </div>

          {/* Card 3: Per-Salon Operating Assumption */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-[#DAAF37]/30 hover:border-[#DAAF37]/50 transition-all shadow-[0_16px_48px_rgba(0,0,0,0.7)] flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] group-hover:scale-105 transition-transform">
                    <Coins className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                      औसत अनुमान
                    </span>
                    <h3 className="text-lg font-heading font-bold text-white">
                      एक Salon का औसत कामकाज
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#FFF2B2] text-xs font-heading font-bold">
                  Unit Output
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-6">
                Model में यह मानकर चला गया है कि हर partner salon हर महीने एक औसत संख्या में digital bookings करेगा, जिससे platform की कमाई होगी।
              </p>

              <div className="space-y-2 mb-4 text-xs text-white/70 font-sans">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>एक salon से होने वाली औसत bookings का अनुमान</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>हर लेनदेन पर 10% commission का योगदान</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-[11px] font-heading font-semibold text-[#DAAF37]">
              कमाई का मुख्य आधार
            </div>
          </div>

          {/* Card 4: Connection to Financial Model */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-[#DAAF37]/30 hover:border-[#DAAF37]/50 transition-all shadow-[0_16px_48px_rgba(0,0,0,0.7)] flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] group-hover:scale-105 transition-transform">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                      पूरे Model का आधार
                    </span>
                    <h3 className="text-lg font-heading font-bold text-white">
                      हिसाब-किताब का तरीका
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#FFF2B2] text-xs font-heading font-bold">
                  Scale Link
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-6">
                1,000 active salons के आंकड़े को औसत booking और commission से गुणा करने पर वह सालाना कमाई का अनुमान मिलता है जो हमारे model का आधार है।
              </p>

              <div className="space-y-2 mb-4 text-xs text-white/70 font-sans">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>Salons की संख्या और कमाई का सीधा संबंध</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>बड़े स्तर (Scale) पर business की मज़बूती</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-[11px] font-heading font-semibold text-[#DAAF37]">
              भविष्य की मज़बूत नीव
            </div>
          </div>
        </div>

        {/* 3. SUMMARY HIGHLIGHT BOX */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#DAAF37]/[0.1] via-black to-black border border-[#DAAF37]/40 shadow-[0_16px_48px_rgba(0,0,0,0.8)] mb-8 text-center">
          <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#DAAF37] block mb-2">
            Model की मुख्य बात
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3">
            लक्ष्य बनाम हकीकत
          </h3>
          <p className="text-xs sm:text-sm text-white/75 font-sans max-w-2xl mx-auto leading-relaxed">
            1,000 salons का लक्ष्य निवेशकों को यह समझाने के लिए है कि जब business बढ़ेगा तो आंकड़े कैसे दिखेंगे। यह एक सोची-समझी रणनीति है, कोई गारंटी नहीं।
          </p>
        </div>

        {/* 4. IMPORTANT DISCLAIMER */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white/[0.03] border border-white/15 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-[#DAAF37]" />
            <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
              Management की ओर से जानकारी
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white/70 font-sans max-w-3xl mx-auto leading-relaxed">
            यह Model हमारी उम्मीदों और बाज़ार के रुझानों पर आधारित है। असली परिणाम बाज़ार की स्थिति और salons के काम करने के तरीके पर निर्भर करेंगे।
          </p>
        </div>
      </section>

      {/* SECTION 7 — HOW DOES NEXORA REACH ₹3.72 Cr ANNUAL REVENUE? */}
      <section
        id="how-does-nexora-reach-3-72-cr"
        aria-label="How Does Nexora Reach 3.72 Cr Annual Revenue Section"
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <TrendingUp className="w-3.5 h-3.5 text-[#F4D03F]" />
            7. सालाना ₹3.72 करोड़ की कमाई कैसे होगी?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            सालाना ₹3.72 करोड़ की{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              कमाई का हिसाब
            </span>
          </h2>

          <p className="text-base sm:text-lg font-heading font-medium text-[#F4D03F] mb-4">
            &ldquo;यह ₹3.72 करोड़ का आँकड़ा कहाँ से आया?&rdquo;
          </p>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            सालाना कमाई के हर हिस्से को बारीकी से समझें। यह हिसाब एकदम साफ़ है ताकि आप खुद इसे देख सकें:
          </p>

          {/* Modeled Projection Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/40 text-[#FFF2B2] text-xs font-heading font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(218,175,55,0.2)]">
            <ShieldCheck className="w-4 h-4 text-[#DAAF37]" />
            कमाई का एक अनुमान
          </div>
        </div>

        {/* 2. MODEL INPUTS OVERVIEW CARDS (Grid of 5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12 max-w-6xl mx-auto">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/40 transition-all text-center">
            <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
              Active Salons का लक्ष्य
            </span>
            <div className="text-2xl font-heading font-bold text-white mb-1">1,000</div>
            <p className="text-xs text-white/60 font-sans">सालाना लक्ष्य</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/40 transition-all text-center">
            <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
              महीने की औसत Booking
            </span>
            <div className="text-2xl font-heading font-bold text-white mb-1">₹30,000</div>
            <p className="text-xs text-white/60 font-sans">प्रति Salon औसत</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/40 transition-all text-center">
            <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
              Commission की दर
            </span>
            <div className="text-2xl font-heading font-bold text-[#F4D03F] mb-1">10%</div>
            <p className="text-xs text-white/60 font-sans">Platform की कमाई</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/40 transition-all text-center">
            <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
              ऑनलाइन Payment हिस्सा
            </span>
            <div className="text-2xl font-heading font-bold text-white mb-1">25%</div>
            <p className="text-xs text-white/60 font-sans">Advance बुकिंग शेयर</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/40 transition-all text-center sm:col-span-2 lg:col-span-1">
            <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
              Ads से कमाई का लक्ष्य
            </span>
            <div className="text-2xl font-heading font-bold text-[#F4D03F] mb-1">₹1 Lakh/mo</div>
            <p className="text-xs text-white/60 font-sans">सालाना ₹12 लाख</p>
          </div>
        </div>

        {/* 3. STEP-BY-STEP CALCULATION BREAKDOWN */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-[#DAAF37]/40 shadow-[0_16px_48px_rgba(0,0,0,0.8)] mb-12">
          <div className="text-center mb-8">
            <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#DAAF37] block mb-1">
              कमाई का पूरा गणित
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              कमाई तक पहुँचने का तरीका
            </h3>
          </div>

          <div className="space-y-4 mb-8">
            {/* Step 1 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-0.5">
                  पहला कदम: कुल सालाना Booking Value
                </span>
                <span className="text-xs sm:text-sm font-sans text-white/80">
                  1,000 salons × ₹30,000 / माह × 12 महीने
                </span>
              </div>
              <div className="text-lg sm:text-xl font-heading font-bold text-white">
                = ₹36.00 Cr
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-0.5">
                  Step 2: सालाना ऑनलाइन कलेक्शन (25%)
                </span>
                <span className="text-xs sm:text-sm font-sans text-white/80">
                  ₹36.00 Cr × 25% डिजिटल एडवांस कलेक्शन रेट
                </span>
              </div>
              <div className="text-lg sm:text-xl font-heading font-bold text-white">
                = ₹9.00 Cr
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-0.5">
                  Step 3: सालाना कमीशन रेवेन्यू (10%)
                </span>
                <span className="text-xs sm:text-sm font-sans text-white/80">
                  ₹36.00 Cr कुल बुकिंग वैल्यू × 10% प्लेटफार्म कमीशन
                </span>
              </div>
              <div className="text-lg sm:text-xl font-heading font-bold text-[#F4D03F]">
                = ₹3.60 Cr
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-0.5">
                  Step 4: सालाना विज्ञापन (Ads) रेवेन्यू
                </span>
                <span className="text-xs sm:text-sm font-sans text-white/80">
                  ₹1 लाख / महीना × 12 महीने (मुख्य वेबसाइट विज्ञापन)
                </span>
              </div>
              <div className="text-lg sm:text-xl font-heading font-bold text-[#F4D03F]">
                = ₹0.12 Cr (₹12 लाख)
              </div>
            </div>

            {/* Step 5: Final Total */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#DAAF37]/20 via-black to-[#DAAF37]/20 border-2 border-[#DAAF37] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[0_0_30px_rgba(218,175,55,0.25)]">
              <div>
                <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-widest block mb-1">
                  Step 5: कुल सालाना रेवेन्यू कैलकुलेशन
                </span>
                <span className="text-xs sm:text-sm font-sans text-white/90">
                  ₹3.60 Cr कमीशन रेवेन्यू + ₹0.12 Cr विज्ञापन रेवेन्यू
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF2B2] to-[#DAAF37]">
                = ₹3.72 Cr
              </div>
            </div>
          </div>
        </div>

        {/* Comparative Projection Bar Chart Card */}
        <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-all shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
                सालाना मॉडल्ड प्रोजेक्शन
              </span>
              <h4 className="text-lg font-heading font-bold text-white">
                कमाई (Revenue) और खर्च (Cost) का मुकाबला
              </h4>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-heading">
              <span className="inline-flex items-center gap-1.5 text-white/85">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F4D03F]" />
                कुल कमाई: ₹3,72,00,000
              </span>
              <span className="inline-flex items-center gap-1.5 text-white/85">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DAAF37]" />
                कुल खर्च: ₹1,76,12,500
              </span>
            </div>
          </div>

          <React.Suspense
            fallback={
              <div className="h-64 sm:h-72 w-full flex items-center justify-center bg-white/[0.02] rounded-xl border border-white/5">
                <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-[#DAAF37] animate-spin" />
              </div>
            }
          >
            <InvestmentProjectionChart />
          </React.Suspense>

          <p className="text-[11px] text-white/50 font-sans text-center mt-3">
            चार्ट पर माउस ले जाएँ (Hover) ताकि आप सटीक आंकड़े देख सकें (कमाई: ₹3,72,00,000 | खर्च: ₹1,76,12,500). प्रॉफिट मार्जिन लगभग 37.34% है।
          </p>
        </div>

        {/* 4. IMPORTANT DISCLAIMER */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white/[0.03] border border-white/15 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-[#DAAF37]" />
            <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
              मैनेजमेंट डिस्क्लेमर
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white/70 font-sans max-w-3xl mx-auto leading-relaxed">
            यह पूरी कैलकुलेशन मैनेजमेंट की धारणाओं (Assumptions) पर आधारित एक वित्तीय प्रोजेक्शन है। यह मौजूदा वास्तविक कमाई, सक्रिय सैलून की संख्या या गारंटीकृत व्यावसायिक लेन-देन का प्रतिनिधित्व नहीं करता है।
          </p>
        </div>
      </section>

      {/* SECTION 8 — WHO DOES NEXORA COMPETE WITH? (DIFFERENTIATION & POSITIONING) */}
      <section
        id="who-does-nexora-compete-with"
        aria-label="Competition and Differentiation Section"
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Verbatim Statement */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-6 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Compass className="w-3.5 h-3.5 text-[#F4D03F]" />
            8. Nexora दूसरों से अलग कैसे है?
          </div>

          <GlassCard className="p-8 sm:p-10 border-[#DAAF37]/40 bg-gradient-to-br from-[#DAAF37]/15 via-black to-black mb-8" glow="gold">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white leading-relaxed text-balance italic">
              “हम feature invent करने का दावा नहीं कर रहे। हम beauty industry के अलग-अलग लोगों और businesses को एक साथ जोड़ने की कोशिश कर रहे हैं — और अब हम इसे अपने product और मार्केट के डेटा से साबित करेंगे।”
            </h2>
          </GlassCard>

          <p className="text-sm sm:text-base text-white/70 font-sans max-w-3xl mx-auto leading-relaxed">
            Nexora का असली फायदा नए फीचर्स में नहीं, बल्कि इस बात में है कि यह ब्यूटी इंडस्ट्री के हर हिस्से को एक ही system में जोड़ देता है।
          </p>
        </div>

        {/* 2. THE STORY FLOW: EXISTING MARKET TO VALIDATION */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-col items-center gap-6">
            {/* Existing Market */}
            <div className="w-full p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-widest block mb-2">मौजूदा मार्केट</span>
              <h3 className="text-base font-heading font-bold text-white mb-4">कई अलग-अलग सेवाएं पहले से मौजूद हैं</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Booking', 'CRM', 'Loyalty', 'Customer Recall', 'Discovery', 'Websites', 'Marketing', 'B2B', 'Partner Programs'].map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[10px] text-white/60">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <ArrowDown className="w-6 h-6 text-[#DAAF37] animate-bounce" />

            {/* Nexora Approach */}
            <div className="w-full p-6 rounded-2xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-center">
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block mb-2">Nexora का तरीका</span>
              <h3 className="text-lg font-heading font-bold text-[#F4D03F] mb-4">कनेक्टेड आर्किटेक्चर (Connected Architecture)</h3>
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-heading font-bold text-white">
                <span>Customer</span>
                <ArrowLeftRight className="w-3 h-3 text-[#DAAF37]" />
                <span>Salon Owner</span>
                <ArrowLeftRight className="w-3 h-3 text-[#DAAF37]" />
                <span>Growth Partner</span>
                <ArrowLeftRight className="w-3 h-3 text-[#DAAF37]" />
                <span>Professionals</span>
                <ArrowLeftRight className="w-3 h-3 text-[#DAAF37]" />
                <span>B2B Brands / Distributors</span>
              </div>
            </div>

            <ArrowDown className="w-6 h-6 text-[#DAAF37]" />

            {/* Validation Thesis */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-xs font-heading font-bold text-white">प्रोडक्ट का प्रमाण (Product Proof)</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-xs font-heading font-bold text-white">उपयोग का डेटा (Adoption Data)</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-xs font-heading font-bold text-white">मार्केट के साक्ष्य (Market Evidence)</span>
              </div>
            </div>

            <ArrowDown className="w-6 h-6 text-[#DAAF37]" />

            {/* Validation Final */}
            <div className="w-full p-5 rounded-xl bg-gradient-to-r from-[#F4D03F] to-[#DAAF37] text-[#0A0A0A] text-center font-heading font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(218,175,55,0.3)]">
              सत्यापन (Validation)
            </div>
          </div>
        </div>

        {/* 3. PREMIUM CONNECTED ARCHITECTURE VISUAL */}
        <div className="max-w-6xl mx-auto mb-16 p-8 sm:p-12 rounded-3xl bg-[#0D0D0D] border border-[#DAAF37]/30 shadow-[0_24px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#DAAF37_0%,transparent_70%)]" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-center text-xl font-heading font-bold text-white mb-10 uppercase tracking-wider">
              Nexora का कनेक्टेड ढाँचा (Architecture)
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Customer', desc: 'Discovery, Booking, Loyalty', icon: Users },
                { title: 'Salon Owner', desc: 'Database, CRM, Operations', icon: Store },
                { title: 'Customer Management', desc: 'Recall, Rebooking, Automation', icon: Database },
                { title: 'Digital Salon Brand', desc: 'Branded Web, Storefront', icon: Globe },
                { title: 'Nearby Discovery', desc: 'Hyper-local Visibility', icon: Search },
                { title: 'Growth Partner', desc: 'On-ground Support & Onboarding', icon: Target },
                { title: 'Professional Network', desc: 'Jobs, Profiles, Community', icon: Award },
                { title: 'B2B Beauty Network', desc: 'Wholesale, Brands, Inventory', icon: ShoppingBag },
              ].map((node, i) => {
                const Icon = node.icon;
                return (
                  <div key={i} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col items-center text-center group hover:border-[#DAAF37]/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-heading font-bold text-white mb-1">{node.title}</h4>
                    <p className="text-[10px] text-white/50 font-sans leading-tight">{node.desc}</p>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-10 pt-6 border-t border-white/10 flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/40 text-[#F4D03F] font-heading font-bold text-xs uppercase tracking-widest">
                <Layers className="w-4 h-4" />
                Unified Network Layer
              </div>
            </div>
          </div>
        </div>

        {/* 4. EVIDENCE SECTION (3 Blocks) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* 01 — PRODUCT PROOF */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl font-heading font-bold text-[#DAAF37]">01</span>
              <h4 className="text-lg font-heading font-bold text-white uppercase tracking-wider">प्रोडक्ट का प्रमाण</h4>
            </div>
            <p className="text-xs text-white/50 font-sans mb-4">बनाई गई और प्रमाणित की गई क्षमताएं (Actual Capabilities).</p>
            
            <div className="space-y-3">
              {[
                { name: 'Nexora SalonOS CRM', status: 'Verified Product' },
                { name: 'Branded Salon Websites', status: 'Working Demo' },
                { name: 'Customer Discovery App', status: 'Working Demo' },
                { name: 'B2B Wholesale Portal', status: 'Planned' },
                { name: 'AI Marketing Assistant', status: 'To Be Verified' },
              ].map((item, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
                  <span className="text-xs font-heading font-semibold text-white/90">{item.name}</span>
                  <span className={`text-[9px] px-2 py-0.5 rounded-full font-heading font-bold uppercase tracking-wider ${
                    item.status === 'Verified Product' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                    item.status === 'Working Demo' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    item.status === 'Planned' ? 'bg-white/10 text-white/60 border border-white/20' :
                    'bg-[#DAAF37]/20 text-[#F4D03F] border border-[#DAAF37]/30'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 02 — ADOPTION DATA */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl font-heading font-bold text-[#DAAF37]">02</span>
              <h4 className="text-lg font-heading font-bold text-white uppercase tracking-wider">उपयोग का डेटा (Adoption)</h4>
            </div>
            <p className="text-xs text-white/50 font-sans mb-4">वास्तविक ट्रैक्शन मेट्रिक्स (Traction Metrics).</p>
            
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-dashed border-white/20 flex flex-col items-center justify-center text-center">
              <Activity className="w-8 h-8 text-white/20 mb-3" />
              <span className="text-sm font-heading font-bold text-white/40 uppercase tracking-widest">
                Data Not Available Yet
              </span>
              <p className="text-[10px] text-white/30 font-sans mt-2 max-w-[180px]">
                Adoption मेट्रिक्स कमर्शियल लॉन्च के बाद ही प्रकाशित किए जाएंगे।
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {['Salons', 'Active Salons', 'Customers', 'Bookings', 'Repeat Bookings', 'Retention'].map((metric) => (
                <div key={metric} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 opacity-50">
                  <span className="text-[9px] text-white/40 block mb-1 uppercase tracking-widest">{metric}</span>
                  <span className="text-sm font-heading font-bold text-white/20">--</span>
                </div>
              ))}
            </div>
          </div>

          {/* 03 — ONGOING MARKET EVIDENCE */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl font-heading font-bold text-[#DAAF37]">03</span>
              <h4 className="text-lg font-heading font-bold text-white uppercase tracking-wider">मार्केट के साक्ष्य</h4>
            </div>
            <p className="text-xs text-white/50 font-sans mb-4">प्रतिस्पर्धी रिसर्च और भारत के मार्केट ट्रेंड्स।</p>
            
            <div className="space-y-3">
              {[
                { title: 'Competitor Research', desc: '12+ भारतीय ब्यूटी एग्रीगेटर्स और SaaS टूल्स का ऑडिट।', date: 'Oct 2026' },
                { title: 'Pricing Comparison', desc: 'प्रमुख प्लेटफार्मों के कमीशन स्ट्रक्चर का विश्लेषण।', date: 'Oct 2026' },
                { title: 'India Market Study', desc: 'टियर-2/3 शहरों में डिजिटल डिस्कवरी की बढ़त।', date: 'Sept 2026' },
                { title: 'B2B Model Benchmark', desc: 'क्षेत्रीय सैलून नेटवर्क में सप्लाई चेन का विश्लेषण।', date: 'Oct 2026' },
              ].map((item, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-heading font-bold text-white">{item.title}</span>
                    <span className="text-[9px] text-[#DAAF37] font-mono">{item.date}</span>
                  </div>
                  <p className="text-[10px] text-white/60 font-sans leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="p-3 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[10px] text-[#F4D03F] font-sans italic text-center">
              Source: Internal Market Intelligence Reports
            </div>
          </div>
        </div>

        {/* 5. FINAL REINFORCEMENT DISCLAIMER */}
        <div className="max-w-4xl mx-auto mt-16 p-6 rounded-2xl bg-white/[0.03] border border-white/15 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-[#DAAF37]" />
            <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
              Positioning + Validation Thesis
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white/70 font-sans max-w-3xl mx-auto leading-relaxed">
            ऊपर दिया गया बयान Nexora का मुख्य <strong>Positioning Statement</strong> है। हम मार्केट मोनोपोली या नए फीचर के आविष्कार का दावा नहीं कर रहे हैं; हमारा ध्यान आर्किटेक्चरल तालमेल और लोकल नेटवर्क की मजबूती पर है। सभी दावे आगामी प्रोडक्ट और डेटा के ज़रिये सत्यापित (Validate) किए जाएंगे।
          </p>
        </div>
      </section>

      {/* SECTION 9 — SALON ACQUISITION COST */}
      <section
        id="salon-acquisition-cost"
        aria-label="Salon Acquisition Cost Section"
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Coins className="w-3.5 h-3.5 text-[#F4D03F]" />
            9. Salons को साथ जोड़ने का खर्च (CAC)
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            Salon Acquisition Cost &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              खर्च की भरपाई
            </span>
          </h2>

          <p className="text-base sm:text-lg font-heading font-medium text-[#F4D03F] mb-4">
            &ldquo;एक सैलून को जोड़ने में क्या खर्च आएगा और उस खर्च की भरपाई (Recovery) कैसे होगी?&rdquo;
          </p>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            बिज़नेस का गणित जो बताता है कि सैलून जोड़ने में क्या खर्च आता है और बिज़नेस एक्टिविटी के ज़रिये उसकी भरपाई कैसे होती है।
          </p>

          {/* No Unsupported Placeholder Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/40 text-[#FFF2B2] text-xs font-heading font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(218,175,55,0.2)]">
            <ShieldCheck className="w-4 h-4 text-[#DAAF37]" />
            डेटा-आधारित हिसाब — कोई काल्पनिक आंकड़े नहीं
          </div>
        </div>

        {/* 2. CORE ANSWERS GRID (2 Columns: CAC Cost Structure & Activity Recovery) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-6xl mx-auto">
          {/* Card 1: Salon Acquisition Cost (CAC) Structure */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                    सवाल 01
                  </span>
                  <h3 className="text-lg font-heading font-bold text-white">
                    सैलून जोड़ने का खर्च (CAC) कैसे तय होता है?
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed mb-4">
                <strong>&ldquo;एक salon को Nexora पर onboard करने में कितना खर्च आएगा?&rdquo;</strong>
              </p>

              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                यह खर्च ऑन-ग्राउंड ऑपरेशंस, ग्रोथ पार्टनर्स के सपोर्ट, डिजिटल कैंपेन और सैलून सेटअप पर निर्भर करता है।
              </p>

              <div className="space-y-2 mb-4 text-xs text-white/70 font-sans">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>Growth Partner फील्ड सपोर्ट और सैलून सेटअप में मदद</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>30+ रेडी टेम्पलेट्स के साथ फ्री वेबसाइट सेटअप</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>पार्टनर कमीशन और काम के आधार पर रिवॉर्ड्स</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-[11px] font-heading font-semibold text-[#DAAF37]">
              सटीक CAC की जानकारी मार्केट में विस्तार और डेटा आने के बाद ही मिलेगी।
            </div>
          </div>

          {/* Card 2: Activity Recovery & Payback */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                    सवाल 02
                  </span>
                  <h3 className="text-lg font-heading font-bold text-white">
                    खर्च की भरपाई (Recovery) कैसे होगी?
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed mb-4">
                <strong>&ldquo;उस acquisition cost को recover करने के लिए उस salon से कितनी business activity चाहिए?&rdquo;</strong>
              </p>

              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                प्लेटफार्म पर होने वाले ट्रांजेक्शन और कमीशन के ज़रिये खर्च की भरपाई होती है।
              </p>

              <div className="space-y-2 mb-4 text-xs text-white/70 font-sans">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>डिजिटल ट्रांजेक्शन पर 10% प्लेटफार्म कमीशन</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>एक्टिव मासिक बुकिंग (जैसे ₹30k बुकिंग वॉल्यूम)</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                  <span>सैलून का लंबे समय तक बने रहना और पुराने ग्राहकों की वापसी</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-[11px] font-heading font-semibold text-[#DAAF37]">
              शुरुआती कुछ महीनों के एक्टिव बिज़नेस से ही खर्च की भरपाई हो जाती है।
            </div>
          </div>
        </div>

        {/* 3. UNIT ECONOMICS RECOVERY FORMULA BANNER */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-black via-[#DAAF37]/15 to-black border border-[#DAAF37]/45 mb-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
          <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#DAAF37] block mb-2">
            Unit Economics Framework
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3">
            एक्टिव सैलून बिज़नेस → कमीशन और कमाई → CAC की भरपाई
          </h3>
          <p className="text-xs sm:text-sm text-white/80 font-sans max-w-2xl mx-auto leading-relaxed">
            कम खर्च में सैलून को जोड़ने और उनके डिजिटल बिज़नेस को बढ़ाने से, हर एक्टिव सैलून कंपनी के लिए फायदे का सौदा साबित होता है।
          </p>
        </div>

        {/* 4. MANAGEMENT DISCLAIMER */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white/[0.03] border border-white/15 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-[#DAAF37]" />
            <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
              Management Disclaimer &amp; Finalization Note
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white/70 font-sans max-w-3xl mx-auto leading-relaxed">
            Salon acquisition cost and recovery timelines are based on modeled operational assumptions and will be finalized from actual acquisition, onboarding, retention, and transaction data as the network scales. No unsupported arbitrary figures are assumed.
          </p>
        </div>
      </section>

      {/* SECTION 10 — CUSTOMER ACQUISITION & REPEAT BOOKING */}
      <section
        id="customer-economics"
        aria-label="Customer Acquisition and Repeat Booking Section"
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Users className="w-3.5 h-3.5 text-[#F4D03F]" />
            10. कस्टमर्स को जोड़ना और उनकी वैल्यू
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            Customer Acquisition &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              Repeat Booking
            </span>
          </h2>

          <p className="text-base sm:text-lg font-heading font-medium text-[#F4D03F] mb-4">
            &ldquo;Nexora कस्टमर्स को कैसे जोड़ेगा और पुराने कस्टमर्स दोबारा कैसे आएँगे?&rdquo;
          </p>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            कस्टमर्स को जोड़ने का तरीका और उन्हें प्लेटफॉर्म पर वापस लाने का सिस्टम।
          </p>

          {/* Planned Model Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/40 text-[#FFF2B2] text-xs font-heading font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(218,175,55,0.2)]">
            <ShieldCheck className="w-4 h-4 text-[#DAAF37]" />
            कस्टमर-आधारित सिस्टम — आज की स्थिति
          </div>
        </div>

        {/* 2. CORE QUESTIONS & ANSWERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {/* Card A: How Will Nexora Acquire Customers? */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-widest block mb-1">ग्रोथ के ज़रिये (Growth Channels)</span>
              <h3 className="text-lg font-heading font-bold text-white mb-4">1. Nexora ग्राहकों को कैसे जोड़ेंगे?</h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Nexora महंगे विज्ञापनों के बजाय एक नेटवर्क आधारित तरीके से ग्राहकों को जोड़ता है:
              </p>
              <ul className="space-y-2 text-xs text-white/60 font-sans">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37] mt-1.5 flex-shrink-0" />
                  <span><strong>सैलून स्टोरफ्रंट सुझाव:</strong> सैलून अपने मौजूदा ग्राहकों को सीधे Nexora पर लाते हैं (QR कोड और स्पेशल ऑफर्स के ज़रिये)।</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37] mt-1.5 flex-shrink-0" />
                  <span><strong>डिजिटल डिस्कवरी इंजन:</strong> सैलून पेजों का SEO और लोकल ब्यूटी डिस्कवरी लिस्टिंग।</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37] mt-1.5 flex-shrink-0" />
                  <span><strong>सोशल मीडिया इंटीग्रेशन:</strong> इंस्टाग्राम और फेसबुक बिजनेस पेजों के ज़रिये सीधे बुकिंग।</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37] mt-1.5 flex-shrink-0" />
                  <span><strong>ग्राउंड ऑपरेशंस:</strong> लोकल पार्टनर्स (Growth Partners) द्वारा इलाके में ब्रांड जागरूकता।</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-white/10 text-xs text-white/50 italic mt-6">
              * यह नेटवर्क आधारित तरीका ग्राहकों को जोड़ने का खर्च बहुत कम रखता है।
            </div>
          </div>

          {/* Card B: What is Actual Customer CAC & Repeat Booking? */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-red-500/25 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-heading font-bold text-red-400/80 uppercase tracking-widest block mb-1">डेटा की स्थिति</span>
              <h3 className="text-lg font-heading font-bold text-white mb-4">2. अभी का कस्टमर डेटा</h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                सटीकता बनाए रखने के लिए, Nexora लॉन्च से पहले कोई भी काल्पनिक (Invented) आंकड़े नहीं दिखाता:
              </p>
              
              <div className="space-y-2.5 mb-2">
                {[
                  { label: 'Customer CAC (ग्राहक जोड़ने का खर्च)', value: 'डेटा अभी उपलब्ध नहीं है' },
                  { label: 'Repeat Booking Rate (दोबारा बुकिंग की दर)', value: 'डेटा अभी उपलब्ध नहीं है' },
                  { label: 'Average Booking Frequency (औसत बुकिंग फ्रीक्वेंसी)', value: 'डेटा अभी उपलब्ध नहीं है' },
                  { label: 'Average Lifetime Value (LTV)', value: 'डेटा अभी उपलब्ध नहीं है' },
                ].map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-white/60 font-sans">{item.label}:</span>
                    <span className="font-heading font-semibold text-white/45 italic">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-white/10 text-xs text-[#F4D03F] font-heading font-semibold mt-4">
              वास्तविक कस्टमर डेटा लॉन्च के बाद ही सत्यापित किया जाएगा।
            </div>
          </div>
        </div>

        {/* 3. CONSUMER JOURNEY FLOW (Acquire to LTV) */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 text-center mb-12">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
            बिजनेस का गणित (Logic)
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6">
            कस्टमर कैसे जुड़ेंगे और टिकेंगे
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4 max-w-4xl mx-auto mb-6 text-xs font-heading font-bold">
            <div className="px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              1. कस्टमर को जोड़ना
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              2. पहली बुकिंग
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              3. सर्विस का अनुभव
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-4 py-2.5 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/35 text-[#F4D03F] w-full sm:w-auto">
              4. दोबारा बुकिंग (Repeat)
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-4 py-2.5 rounded-lg bg-[#DAAF37]/25 border border-[#DAAF37]/50 text-[#F4D03F] w-full sm:w-auto">
              5. लंबे समय का फायदा
            </div>
          </div>

          <p className="text-xs text-white/50 font-sans italic max-w-2xl mx-auto">
            हर दोबारा होने वाली बुकिंग सैलून के बिज़नेस को मज़बूत करती है और प्लेटफॉर्म की कमाई बढ़ाती है।
          </p>
        </div>

        {/* 4. CRITICAL RECONCILIATION DISCLOSURE */}
        <div className="max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#0A0905] border border-[#DAAF37]/25 mb-8">
          <div className="flex items-start justify-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#DAAF37] flex-shrink-0 mt-0.5" />
            <div className="text-left">
              <span className="text-xs font-heading font-bold text-[#F4D03F] uppercase tracking-wider block mb-1">
                Critical Number Reconciliation Notice
              </span>
              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                <strong>Important Distinction:</strong> The ₹30,000 monthly service value per salon used elsewhere on this page represents the <strong>total aggregated booking volume across all customers</strong> of a single active salon. It is <strong>NOT</strong> an individual customer's transaction or average booking value. Individual booking values and customer-level retention rates will be measured and final-locked based on post-launch platform usage data.
              </p>
            </div>
          </div>
        </div>

        {/* 5. TAKEAWAY HERO BOX */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-black via-[#DAAF37]/15 to-black border border-[#DAAF37]/45 text-center shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">Investor Takeaway</span>
          <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-2 leading-snug">
            &ldquo;CUSTOMER ECONOMICS WILL BE RECONCILED FROM ACTUAL SCALE METRICS.&rdquo;
          </h4>
          <p className="text-xs text-white/60 font-sans">
            Our multi-sided growth loop leverages salons to acquire customers naturally, keeping customer acquisition efficient. Actual CAC, repeat rates, and LTV will be reported from launch analytics.
          </p>
        </div>
      </section>

      {/* SECTION 11 — HOW WILL THE ₹50 LAKH INVESTMENT BE USED? */}
      <section
        id="how-investment-used"
        aria-label="Investment Capital Allocation Section"
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Coins className="w-3.5 h-3.5 text-[#F4D03F]" />
            11. पैसा कहाँ इस्तेमाल होगा? (USE OF FUNDS)
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            ₹50 Lakh के{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              इन्वेस्टमेंट की योजना
            </span>
          </h2>

          <p className="text-base sm:text-lg font-heading font-medium text-[#F4D03F] mb-4">
            &ldquo;इन्वेस्टर से मिलने वाले ₹50 लाख का उपयोग कैसे किया जाएगा?&rdquo;
          </p>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            यह पैसा मुख्य रूप से टेक्नोलॉजी को मज़बूत करने, सैलून जोड़ने और मार्केट में ब्रांड बनाने के लिए खर्च किया जाएगा।
          </p>

          {/* Transparent Planned Model Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/40 text-[#FFF2B2] text-xs font-heading font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(218,175,55,0.2)]">
            <ShieldCheck className="w-4 h-4 text-[#DAAF37]" />
            पैसे के इस्तेमाल की योजना — ज़रूरी जानकारी
          </div>
        </div>

        {/* 2. TOTAL CAPITAL TARGET */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-black via-[#DAAF37]/10 to-black border-2 border-[#DAAF37]/45 text-center shadow-[0_12px_40px_rgba(0,0,0,0.9)] mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F4D03F] to-transparent" />
          <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#DAAF37] block mb-2">
            कुल प्लान्ड इन्वेस्टमेंट मॉडल
          </span>
          <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#FFF2B2] to-[#DAAF37] tracking-tight mb-2 drop-shadow-[0_0_30px_rgba(218,175,55,0.3)]">
            ₹50,00,000
          </div>
          <p className="text-sm sm:text-base text-white font-heading font-semibold mb-2">
            &ldquo;वर्तमान मॉडल के तहत अनुमानित कुल निवेश&rdquo;
          </p>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-sans text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]/80" />
            प्लान्ड लक्ष्य — यह राशि अभी जुटाई नहीं गई है
          </div>
        </div>

        {/* 3. THE 5 CAPITAL DEPLOYMENT CATEGORY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12 max-w-[1440px] mx-auto">
          {/* Card 1: PRODUCT / TECHNOLOGY */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-4">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-base font-heading font-bold text-white mb-2">
                1. Product &amp; Tech
              </h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Continue development, maintenance, hosting infrastructure, integrations, security, scalability and technical operations required to support Nexora&apos;s ecosystem.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-1">
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-wider">Planned Amount</span>
              <span className="text-xs font-heading font-bold text-[#F4D03F]">Management allocation — to be finalized</span>
            </div>
          </div>

          {/* Card 2: SALON ACQUISITION & ONBOARDING */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-4">
                <Store className="w-4 h-4" />
              </div>
              <h3 className="text-base font-heading font-bold text-white mb-2">
                2. Salon Onboarding
              </h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Acquire, onboard, activate and support Salon Partners. Covers sales outreach, setup, KYC verification, merchant training, and Growth Partner acquisition activity.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-1">
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-wider">Planned Amount</span>
              <span className="text-xs font-heading font-bold text-[#F4D03F]">Management allocation — to be finalized</span>
            </div>
          </div>

          {/* Card 3: CUSTOMER ACQUISITION & MARKETING */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-4">
                <Megaphone className="w-4 h-4" />
              </div>
              <h3 className="text-base font-heading font-bold text-white mb-2">
                3. Customer Marketing
              </h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Build customer awareness, acquisition and transaction activity through approved marketing channels, including digital marketing, local promotions, and awareness campaigns.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-1">
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-wider">Planned Amount</span>
              <span className="text-xs font-heading font-bold text-[#F4D03F]">Management allocation — to be finalized</span>
            </div>
          </div>

          {/* Card 4: OPERATIONS & CUSTOMER SUPPORT */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-4">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-base font-heading font-bold text-white mb-2">
                4. Operations &amp; Support
              </h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Support day-to-day commercial operations, user support, salon support, system monitoring, and digital booking service delivery under verified guidelines.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-1">
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-wider">Planned Amount</span>
              <span className="text-xs font-heading font-bold text-[#F4D03F]">Management allocation — to be finalized</span>
            </div>
          </div>

          {/* Card 5: LEGAL / COMPLIANCE / WORKING CAPITAL */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-4">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-base font-heading font-bold text-white mb-2">
                5. Legal &amp; Working Capital
              </h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Support necessary legal/compliance work, professional services, statutory requirements and working-capital needs associated with launch and operations.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-1">
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-wider">Planned Amount</span>
              <span className="text-xs font-heading font-bold text-[#F4D03F]">Management allocation — to be finalized</span>
            </div>
          </div>
        </div>

        {/* 4. STRATEGIC CAPITAL USE FLOW CHART */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-[#DAAF37]/30 text-center shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#DAAF37] block mb-2">
            Strategic Capital Journey Map
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6">
            Capital Deployment Flow Model
          </h3>

          {/* Flow Visual */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4 max-w-5xl mx-auto mb-6">
            <div className="px-4 py-3 rounded-xl bg-[#DAAF37]/20 border border-[#DAAF37]/50 text-[#F4D03F] text-xs font-heading font-bold text-center w-full sm:w-auto">
              <span className="block text-[10px] text-[#DAAF37]/80 uppercase font-sans tracking-wider">Planned Capital</span>
              ₹50 LAKH INVESTMENT
            </div>
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />

            <div className="px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-heading font-bold text-center w-full sm:w-auto">
              <span className="block text-[10px] text-white/45 uppercase font-sans tracking-wider">Deployment Model</span>
              CAPITAL DEPLOYMENT PLAN
            </div>
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />

            <div className="px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-sans text-center w-full lg:max-w-xs leading-relaxed">
              <span className="block text-[10px] text-white/45 uppercase font-sans font-bold tracking-wider mb-1">Operational Pillars</span>
              Product Tech + Salon Onboarding + Customer Marketing + Support Operations + Working Capital
            </div>
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />

            <div className="px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-sans text-center w-full sm:w-auto font-medium">
              <span className="block text-[10px] text-white/45 uppercase font-sans font-bold tracking-wider">Milestones</span>
              Market Launch → Salon Growth → Bookings
            </div>
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />

            <div className="px-4 py-3 rounded-xl bg-[#DAAF37]/20 border border-[#DAAF37]/50 text-[#F4D03F] text-xs font-heading font-bold text-center w-full sm:w-auto">
              <span className="block text-[10px] text-[#DAAF37]/80 uppercase font-sans tracking-wider">Ecosystem Goal</span>
              REVENUE GENERATION
            </div>
          </div>
          
          <p className="text-xs text-white/50 font-sans italic max-w-2xl mx-auto">
            * Note: This is a modeled strategic capital-use flow mapping planned structural inputs to milestone channels — it does not represent or guarantee a fixed outcome or return.
          </p>
        </div>

        {/* 5. TRANSPARENCY PANEL: WHAT THE MONEY IS NOT FOR */}
        <div className="max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#090909] border border-white/10 mb-6 text-left sm:text-center">
          <div className="flex items-start sm:items-center justify-start sm:justify-center gap-3 mb-2.5">
            <ShieldCheck className="w-5 h-5 text-[#DAAF37] flex-shrink-0" />
            <span className="text-xs font-heading font-bold text-white uppercase tracking-wider">
              Investor Integrity &amp; Transparency Notice
            </span>
          </div>
          <p className="text-xs text-white/70 font-sans leading-relaxed max-w-3xl mx-auto">
            <strong>Transparency Commitment:</strong> Investment capital is intended solely to support business growth, technology operations, and merchant acquisition, not to represent or promise guaranteed investor returns. Nexora does not guarantee profitability, yield, or specific returns from the use of funds. All deployment of capital remains subject to progressive operational milestones, launch timelines, and actual operating performance.
          </p>
        </div>

        {/* 6. PROGRESSIVE DEPLOYMENT PRINCIPLE */}
        <div className="max-w-4xl mx-auto p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center mb-8">
          <p className="text-xs text-white/60 font-sans">
            <strong>Deployment Principle:</strong> &ldquo;Capital will be deployed progressively according to business priorities, launch requirements and actual operating performance.&rdquo; This ensures optimal resource allocation as scaling metrics are verified in real time.
          </p>
        </div>

        {/* 7. PLANNED VS ACTUAL STATUS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">CAPITAL MODEL STATUS</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">PLANNED USE OF FUNDS</h4>
              <p className="text-xs text-white/65 font-sans leading-relaxed">
                The progressive, milestone-linked deployment plan represents the management framework designed to activate local beauty-discovery corridors and establish positive unit economics.
              </p>
            </div>
            <div className="mt-4 p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-center">
              <span className="text-xs font-sans text-white/80 font-semibold">&ldquo;Management plan&rdquo;</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-wider block mb-1">TRANSPARENT ACCOUNTING</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">CURRENT CAPITAL DEPLOYMENT</h4>
              <p className="text-xs text-white/65 font-sans leading-relaxed">
                No investor capital has been spent as capital raising is not finalized. Actual expenditures will be logged in company records following professional accounting principles.
              </p>
            </div>
            <div className="mt-4 p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-center">
              <span className="text-xs font-sans text-white/80 font-semibold">&ldquo;To be reported from actual company records&rdquo;</span>
            </div>
          </div>
        </div>

        {/* 8. AUDIT TRANSPARENCY DISCLOSURE */}
        <div className="max-w-4xl mx-auto text-center mb-10 px-4">
          <p className="text-xs text-white/50 font-sans leading-relaxed max-w-2xl mx-auto">
            Investors should distinguish between planned allocation and actual expenditure. Actual utilization will be tracked meticulously by company accounting, and will be made available to verified partners during scheduled due-diligence data-room sessions.
          </p>
        </div>

        {/* 9. STRONG TAKEAWAY HERO BOX */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-black via-[#DAAF37]/15 to-black border border-[#DAAF37]/45 text-center shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">Investor Takeaway</span>
          <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-2 leading-snug">
            &ldquo;₹50 Lakh is growth capital — intended to strengthen the technology, acquire and activate salons, acquire customers and support the operating foundation needed to scale Nexora.&rdquo;
          </h4>
          <p className="text-xs text-white/60 font-sans">
            Actual deployment should be tracked against company records and the approved financial plan.
          </p>
        </div>
      </section>

      {/* SECTION 12 — WHAT DOES 1% EQUITY ACTUALLY MEAN? */}
      <section
        id="what-equity-means"
        aria-label="What Does 1% Equity Actually Mean Section"
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Coins className="w-3.5 h-3.5 text-[#F4D03F]" />
            12. हिस्सेदारी (EQUITY)
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            1% हिस्सेदारी का{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              असल मतलब क्या है?
            </span>
          </h2>

          <p className="text-base sm:text-lg font-heading font-medium text-[#F4D03F] mb-4">
            &ldquo;₹5,00,000 के बदले 1% हिस्सेदारी मिलने का क्या मतलब है?&rdquo;
          </p>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            कंपनी में आपकी पार्टनरशिप और हक को आसान भाषा में समझें।
          </p>

          {/* Planned Model Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/40 text-[#FFF2B2] text-xs font-heading font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(218,175,55,0.2)]">
            <ShieldCheck className="w-4 h-4 text-[#DAAF37]" />
            INVESTOR EDUCATION LAYER — NO UNVERIFIED CLAIMS OR GUARANTEES
          </div>
        </div>

        {/* 2. CORE EXPLANATION FLOW */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-black via-[#DAAF37]/10 to-black border-2 border-[#DAAF37]/45 text-center shadow-[0_12px_40px_rgba(0,0,0,0.9)] mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F4D03F] to-transparent" />
          <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#DAAF37] block mb-3">
            APPROVED INVESTMENT MODEL
          </span>

          {/* Ownership flow diagram */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <div className="px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white font-heading font-bold">
              ₹5,00,00,000 का निवेश
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden sm:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] sm:hidden" />
            <div className="px-4 py-3.5 rounded-xl bg-[#DAAF37]/20 border border-[#DAAF37]/50 text-[#F4D03F] font-heading font-extrabold text-base">
              1% इक्विटी
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden sm:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] sm:hidden" />
            <div className="px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white font-heading font-bold uppercase">
              Nexora में हिस्सेदारी
            </div>
          </div>

          <p className="text-xs sm:text-sm text-white/85 font-sans leading-relaxed max-w-2xl mx-auto">
            <strong>सरल भाषा में:</strong> &ldquo;1% इक्विटी का मतलब है कि इन्वेस्टर के पास कंपनी का 1% मालिकाना हक है। यह हक शेयर क्लास और लागू कानूनों के आधार पर तय होता है।&rdquo;
          </p>
        </div>

        {/* 3. THE VERY IMPORTANT DISTINCTIONS (CRITICAL EDUCATION PANEL) */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-red-500/20 shadow-[0_12px_36px_rgba(0,0,0,0.8)] mb-12">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <div className="w-9 h-9 rounded-xl bg-red-950/20 border border-red-500/30 flex items-center justify-center text-red-400">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-heading font-bold text-red-400 uppercase tracking-widest block">CRITICAL LESSONS</span>
              <h3 className="text-lg font-heading font-bold text-white">Very Important Distinctions</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 text-center">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
              <span className="text-xs font-heading font-bold text-[#F4D03F] block mb-1">1% EQUITY</span>
              <div className="text-lg font-bold text-red-400 my-1">≠</div>
              <span className="text-[11px] text-white/80 font-sans leading-tight">1% of every rupee of Revenue</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
              <span className="text-xs font-heading font-bold text-[#F4D03F] block mb-1">1% EQUITY</span>
              <div className="text-lg font-bold text-red-400 my-1">≠</div>
              <span className="text-[11px] text-white/80 font-sans leading-tight">Fixed Monthly Income</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
              <span className="text-xs font-heading font-bold text-[#F4D03F] block mb-1">1% EQUITY</span>
              <div className="text-lg font-bold text-red-400 my-1">≠</div>
              <span className="text-[11px] text-white/80 font-sans leading-tight">Guaranteed Profit</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
              <span className="text-xs font-heading font-bold text-[#F4D03F] block mb-1">1% EQUITY</span>
              <div className="text-lg font-bold text-red-400 my-1">≠</div>
              <span className="text-[11px] text-white/80 font-sans leading-tight">Guaranteed Repayment</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
              <span className="text-xs font-heading font-bold text-[#F4D03F] block mb-1">1% EQUITY</span>
              <div className="text-lg font-bold text-red-400 my-1">≠</div>
              <span className="text-[11px] text-white/80 font-sans leading-tight">Guaranteed Exit</span>
            </div>
          </div>
        </div>

        {/* 4. WHAT DOES THE INVESTOR OWN? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {/* Card: Ownership Interest */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 flex flex-col justify-between hover:border-[#DAAF37]/35 transition-all">
            <div>
              <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block mb-1">Ownership Rights</span>
              <h3 className="text-lg font-heading font-bold text-white mb-4">What Does the Investor Own?</h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                An equity holder owns a proportionate ownership interest in the company according to the shares or share class actually issued to them.
              </p>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                The economic and legal rights attached to that equity depend strictly on the **company structure**, the **share class**, the **Articles of Association**, the **shareholder/investment agreement**, and **applicable law**. No custom voting or dividend rights are assumed or created automatically.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-sans text-white/50 italic mt-6">
              * Subject to share class and executed legal documents.
            </div>
          </div>

          {/* Card: Profit & Dividend Policy */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 flex flex-col justify-between hover:border-[#DAAF37]/35 transition-all">
            <div>
              <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block mb-1">Income & Dividends</span>
              <h3 className="text-lg font-heading font-bold text-white mb-4">Profit &amp; Dividend Explanation</h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                &ldquo;Owning equity does not automatically mean receiving a fixed monthly amount.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                If the company generates profit, any distribution (dividend) to shareholders depends entirely on actual profit generation, legally distributable reserves, applicable corporate taxes/liabilities, Board of Directors approvals, and the specific rights of your share class.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-sans text-[#F4D03F] mt-6 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
              <span className="font-heading font-semibold">See Profit Distribution &amp; Investor Return Disclosure (Section 14)</span>
            </div>
          </div>
        </div>

        {/* 5. REVENUE VS OWNERSHIP VISUAL COMPARISON */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 mb-12">
          <div className="text-center mb-6">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">FINANCIAL RECONCILIATION</span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">Revenue vs. Ownership Interest</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center mb-6">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-xs font-heading font-bold text-[#DAAF37] block mb-2 uppercase">NEXORA REVENUE</span>
              <div className="text-2xl font-bold text-white font-heading">Company-Level Income</div>
              <p className="text-xs text-white/60 font-sans mt-2">
                All collections from bookings, advertising, and operations belong entirely to the corporate entity.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#DAAF37]/10 border border-[#DAAF37]/30">
              <span className="text-xs font-heading font-bold text-[#F4D03F] block mb-2 uppercase">INVESTOR EQUITY</span>
              <div className="text-2xl font-bold text-[#F4D03F] font-heading">Proportionate Ownership</div>
              <p className="text-xs text-white/80 font-sans mt-2">
                Represents a 1% claim on residual corporate assets, valuation appreciation, and legally distributed dividends.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/70 font-sans max-w-3xl mx-auto leading-relaxed">
            <strong>Illustrative Example:</strong> If Nexora records transaction or advertisement revenue, that money belongs strictly to the company. It does <strong>NOT</strong> mean the investor receives 1% of every transaction automatically in their personal bank account.
          </div>
        </div>

        {/* 6. COHESIVE 10-INVESTOR MODEL ILLUSTRATION */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-black via-white/[0.03] to-black border border-white/10 text-center mb-12">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">ANGEL POOL FRAMEWORK</span>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4">10 Investor Pool Representation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center max-w-3xl mx-auto mb-6">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-[10px] text-white/50 uppercase block mb-0.5">Angel Syndicate</span>
              <div className="text-lg font-bold text-white">10 Investors</div>
            </div>
            <div className="p-4 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/35">
              <span className="text-[10px] text-[#DAAF37] uppercase block mb-0.5">Aggregate Equity</span>
              <div className="text-lg font-bold text-[#F4D03F]">10% Pool (1% Each)</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-[10px] text-white/50 uppercase block mb-0.5">Retained Stake</span>
              <div className="text-lg font-bold text-white">90% Founders</div>
            </div>
          </div>
          <p className="text-xs text-white/60 font-sans max-w-2xl mx-auto">
            * Note: This is an ownership structure illustration under the current model. For details regarding how company-wide valuation was determined, please refer to Section 13 (Valuation Methodology).
          </p>
        </div>

        {/* 7. RIGHTS CHECKLISTS & DILUTION WARNINGS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {/* Section: Future Dilution */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-xs font-heading font-bold text-red-400 uppercase tracking-wider block mb-1">Cap Table Changes</span>
              <h4 className="text-base font-heading font-bold text-white mb-3">Future Dilution Disclosure</h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                &ldquo;If Nexora issues additional shares in a future funding round, an existing investor&apos;s ownership percentage **may be diluted** unless protected rights apply under the applicable legal documents.&rdquo; Anti-dilution guarantees are not promised.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-xs font-sans text-white/50 italic mt-4">
              * Dilution remains a standard operational possibility as any company scales.
            </div>
          </div>

          {/* Section: Share Allotment Documentation */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">Legal Safeguards</span>
              <h4 className="text-base font-heading font-bold text-white mb-3">Share &amp; Ownership Documentation</h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                The final equity ownership and any transfer arrangements will be supported strictly by formal transaction documentation, including:
              </p>
              <ul className="space-y-1.5 text-xs text-white/60 font-sans mt-3">
                <li>• Formal board share allotment/issuance records</li>
                <li>• Finalized company capitalization table (Cap Table)</li>
                <li>• Executed Shareholder &amp; Investment Agreement</li>
                <li>• Applicable statutory filings &amp; share certificates</li>
              </ul>
            </div>
            <div className="pt-3 border-t border-white/10 text-xs font-sans text-white/50 italic mt-4">
              * Documents govern the transaction; website content serves only as a summary.
            </div>
          </div>
        </div>

        {/* 8. WHAT THE INVESTOR DOES NOT GET AUTOMATICALLY (CHECKLIST) */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0B0B0B] border border-white/10 mb-12">
          <h4 className="text-base font-heading font-bold text-white text-center mb-6 uppercase tracking-wider">
            What the Investor Does Not Get Automatically
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {[
              'No Automatic Fixed Salary',
              'No Automatic Monthly Return',
              'No Guaranteed Dividends',
              'No Guaranteed Exit Timeline',
              'No Guaranteed Repayment',
              'No Guaranteed Corporate Buyback',
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                <span className="text-xs font-heading font-semibold text-white/90">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/60 font-sans leading-relaxed text-center max-w-2xl mx-auto">
            These outcomes are not automatic consequences of owning 1% equity. For complete parameters, please refer to Section 14 (Profit Distribution Disclosure) and Section 15 (Exit Opportunities).
          </p>
        </div>

        {/* 9. PUBLIC WEBSITE DISCLAIMER NOTEE */}
        <div className="max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#0A0905] border border-[#DAAF37]/25 mb-8">
          <p className="text-xs text-white/70 font-sans leading-relaxed text-left sm:text-center">
            <strong>Website Summary Note:</strong> &ldquo;The information shown on this website is a summary of the proposed/current investment model. The investor&apos;s actual rights and obligations will be governed entirely by the executed legal and statutory documents applicable to the transaction.&rdquo; This website serves as a summary evaluation and does not constitute a final binding investment contract.
          </p>
        </div>

        {/* 10. CURRENT INVESTMENT MODEL AS ACTUALLY RECONCILED */}
        <div className="max-w-md mx-auto p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center mb-10">
          <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">PROPOSED ALLOTMENT STATUS</span>
          <div className="text-xs font-sans text-white/70">
            <strong>Current Model:</strong> ₹5,00,000 → 1% Equity (&ldquo;Current proposed / modeled structure&rdquo;). Actual shares will be registered upon executed transaction closures.
          </div>
        </div>

        {/* 11. END TAKEAWAY HERO BOX */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-black via-[#DAAF37]/15 to-black border border-[#DAAF37]/45 text-center shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">Investor Takeaway</span>
          <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-2 leading-snug">
            &ldquo;1% EQUITY = OWNERSHIP, NOT A FIXED MONTHLY RETURN.&rdquo;
          </h4>
          <p className="text-xs text-white/60 font-sans">
            The value and economic benefit of equity depend entirely on the company&apos;s actual performance, applicable shareholder rights, future dilution and the terms of the executed investment documents.
          </p>
        </div>
      </section>

      {/* SECTION 13 — HOW WAS THE ₹4.50 Cr PRE-MONEY / ₹5 Cr POST-MONEY VALUATION DETERMINED? */}
      <section
        id="valuation-methodology"
        aria-label="Valuation Methodology Section"
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Coins className="w-3.5 h-3.5 text-[#F4D03F]" />
            13. वैल्यूएशन (VALUATION)
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            कंपनी की वैल्यू{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              ₹5 करोड़ कैसे तय हुई?
            </span>
          </h2>

          <p className="text-base sm:text-lg font-heading font-medium text-[#F4D03F] mb-4">
            &ldquo;वैल्यूएशन का हिसाब कैसे लगाया गया है?&rdquo;
          </p>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            इस हिसाब को समझें कि कैसे इन्वेस्टमेंट के आधार पर कंपनी की वैल्यू तय की गई है।
          </p>

          {/* Core Transparency Wording Banner */}
          <div className="max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 text-left sm:text-center">
            <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
              <strong>Valuation Transparency Statement:</strong> &ldquo;Under the current proposed investment model, the ₹5 Cr post-money and ₹4.50 Cr pre-money figures are implied by the proposed investment-for-equity structure. These figures should not be presented as an independent third-party valuation unless supported by a formal valuation report or other applicable professional documentation.&rdquo;
            </p>
          </div>
        </div>

        {/* 2. THE THREE-STEP MATHEMATICAL CALCULATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {/* STEP 1: INDIVIDUAL INVESTMENT LOGIC */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 flex flex-col justify-between hover:border-[#DAAF37]/35 transition-all">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">Step 01</span>
              <h3 className="text-lg font-heading font-bold text-white mb-4">Individual Investment Logic</h3>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center mb-4">
                <span className="text-xs text-white/50 block mb-1 uppercase tracking-wider">Individual Allocation</span>
                <div className="text-2xl font-heading font-extrabold text-white">₹5,00,000</div>
                <span className="text-xs text-[#F4D03F] block mt-1 font-heading font-semibold">for 1% Equity</span>
              </div>

              {/* Visual Formula */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-[#DAAF37]/30 text-center mb-4">
                <span className="text-[10px] text-[#DAAF37] block uppercase tracking-wider mb-1 font-heading font-bold">Calculation Formula</span>
                <code className="text-xs sm:text-sm text-white font-mono font-bold">
                  ₹5,00,000 &divide; 1%
                </code>
                <div className="text-lg font-heading font-bold text-[#F4D03F] mt-1">
                  = ₹5,00,00,000
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-white/10 text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
              Implied Post-Money Valuation: ₹5 Cr
            </div>
          </div>

          {/* STEP 2: TOTAL INVESTMENT LOGIC */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 flex flex-col justify-between hover:border-[#DAAF37]/35 transition-all">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">Step 02</span>
              <h3 className="text-lg font-heading font-bold text-white mb-4">Total Syndicate Round Logic</h3>
              <div className="space-y-2 mb-4">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-white/60">10 Investors &times; ₹5,00,000:</span>
                  <span className="font-heading font-bold text-white">₹50,00,000 Total Capital</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-white/60">10 Investors &times; 1% Equity:</span>
                  <span className="font-heading font-bold text-[#F4D03F]">10% Total Investor Equity</span>
                </div>
              </div>

              {/* Visual Formula */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-[#DAAF37]/30 text-center mb-4">
                <span className="text-[10px] text-[#DAAF37] block uppercase tracking-wider mb-1 font-heading font-bold">Verification Formula</span>
                <code className="text-xs sm:text-sm text-white font-mono font-bold">
                  ₹50,00,000 &divide; 10%
                </code>
                <div className="text-lg font-heading font-bold text-[#F4D03F] mt-1">
                  = ₹5,00,00,000
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-white/10 text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
              Implied Post-Money Valuation: ₹5 Cr
            </div>
          </div>

          {/* STEP 3: PRE-MONEY CALCULATION */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 flex flex-col justify-between hover:border-[#DAAF37]/35 transition-all">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">Step 03</span>
              <h3 className="text-lg font-heading font-bold text-white mb-4">Pre-Money Bridge Logic</h3>
              <div className="space-y-3 mb-4">
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  <strong>Pre-Money:</strong> Implied company value immediately before adding new proposed investment.
                </p>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  <strong>Post-Money:</strong> Implied company value immediately after adding proposed investment.
                </p>
              </div>

              {/* Visual Formula */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-[#DAAF37]/30 text-center mb-4">
                <span className="text-[10px] text-[#DAAF37] block uppercase tracking-wider mb-1 font-heading font-bold">Pre-Money Derivation</span>
                <code className="text-xs sm:text-sm text-white font-mono font-bold leading-relaxed block">
                  ₹5,00,00,000 Post-Money<br />
                  &minus; ₹50,00,000 Investment
                </code>
                <div className="text-lg font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF2B2] to-[#DAAF37] mt-1">
                  = ₹4,50,00,000
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-white/10 text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
              Implied Pre-Money Valuation: ₹4.50 Cr
            </div>
          </div>
        </div>

        {/* 3. VISUAL VALUATION BRIDGE SUMMARY */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-black via-[#DAAF37]/15 to-black border border-[#DAAF37]/45 text-center shadow-[0_8px_32px_rgba(0,0,0,0.8)] mb-12">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#DAAF37] block mb-2">
            implied transaction capitalization
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6">Implied Capitalization Bridge</h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center max-w-3xl mx-auto mb-6">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 w-full sm:w-auto">
              <span className="text-[10px] text-white/50 block mb-0.5">Implied Pre-Money</span>
              <div className="text-lg sm:text-xl font-heading font-bold text-white">₹4.50 Cr</div>
            </div>
            <div className="text-2xl font-bold text-[#DAAF37] font-heading">+</div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 w-full sm:w-auto">
              <span className="text-[10px] text-white/50 block mb-0.5">Proposed Cash Input</span>
              <div className="text-lg sm:text-xl font-heading font-bold text-[#F4D03F]">₹50 Lakh</div>
            </div>
            <div className="text-2xl font-bold text-[#DAAF37] font-heading">=</div>
            <div className="p-4 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 w-full sm:w-auto">
              <span className="text-[10px] text-[#DAAF37] block mb-0.5">Implied Post-Money</span>
              <div className="text-lg sm:text-xl font-heading font-bold text-[#F4D03F]">₹5.00 Cr</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-white/10 max-w-xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#DAAF37]" />
              <span className="text-xs text-white/80 font-sans">Investor Equity: <strong>10%</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-xs text-white/80 font-sans">Founders / Existing Stake: <strong>90%</strong></span>
            </div>
          </div>
          <span className="text-[10px] text-white/40 font-sans block mt-3 uppercase tracking-wider">
            Current Proposed Ownership Model (Shares Not Yet Issued)
          </span>
        </div>

        {/* 4. COMPARISON: INDIVIDUAL VS TOTAL ROUND MODEL */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center mb-12">
          <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">CAPITAL MODEL COHERENCE</span>
          <h4 className="text-base font-heading font-bold text-white mb-4">Comparison: Individual vs. Syndicate Round</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between text-left">
              <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase">ONE INVESTOR MODEL</span>
              <div className="text-base font-bold text-white mt-1">₹5 Lakh &rarr; 1% Equity</div>
              <span className="text-[11px] text-white/50 font-sans mt-1">Same Implied Valuation: <strong>₹5 Cr Post-Money</strong></span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between text-left">
              <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase">10 INVESTOR SYNDICATE</span>
              <div className="text-base font-bold text-white mt-1">₹50 Lakh &rarr; 10% Equity</div>
              <span className="text-[11px] text-white/50 font-sans mt-1">Same Implied Valuation: <strong>₹5 Cr Post-Money</strong></span>
            </div>
          </div>
        </div>

        {/* 5. WHAT DOES ₹4.50 Cr ACTUALLY REPRESENT? */}
        <div className="max-w-4xl mx-auto p-6 rounded-3xl bg-[#090909] border border-white/10 mb-12 text-left sm:text-center">
          <div className="flex items-start sm:items-center justify-start sm:justify-center gap-3 mb-3">
            <ShieldCheck className="w-5 h-5 text-[#DAAF37] flex-shrink-0" />
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              Implied Pre-Money Valuation Meaning
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed max-w-3xl mx-auto">
            The ₹4.50 Cr figure represents the implied pre-money valuation used in the current proposed financing structure. It is not a proven market value, a guaranteed worth, a government-certified valuation, or an independently certified valuation. No unverified third-party claims are represented on this page.
          </p>
        </div>

        {/* 6. VALUATION BASIS PANEL */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.03] via-[#0E0E0E] to-[#070707] border border-[#DAAF37]/30 mb-12">
          <div className="text-center mb-6 pb-4 border-b border-white/10">
            <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">QUALITATIVE BASIS</span>
            <h3 className="text-lg font-heading font-bold text-white">Why Should Nexora Be Valued at ₹4.50 Cr Pre-Money?</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-left">
            {[
              { title: 'Product & Ecosystem Readiness', desc: 'The completed customer-facing mobile application, white-label websites, and integrated SalonOS CRM are fully prepared for deployment.' },
              { title: 'Differentiated Revenue Model', desc: 'Dual-layer revenue architecture based on a 10% transactional commission and dedicated website direct advertising.' },
              { title: 'Salon-Market Opportunity', desc: 'High-yield targeting of unorganized regional beauty corridors through assisted on-ground onboarding and customization.' },
              { title: 'Ground-Level Growth Strategy', desc: 'Deploying the Hyperlocal Growth Partner Network layer to secure merchant relationships without clunky overheads.' },
            ].map((factor, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <h5 className="text-xs sm:text-sm font-heading font-bold text-[#F4D03F] mb-1.5">{factor.title}</h5>
                <p className="text-xs text-white/70 font-sans leading-relaxed">{factor.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-white/60 font-sans italic text-center max-w-2xl mx-auto leading-relaxed">
            &ldquo;The proposed valuation is a management/transaction assumption supported by the business plan, product readiness and projected operating model, subject to due diligence and applicable valuation requirements.&rdquo; Individual factors are not assigned separate mathematical values.
          </p>
        </div>

        {/* 7. CURRENT PROPOSED VS ACTUAL VALUATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-[#DAAF37]/35 shadow-[0_4px_24px_rgba(218,175,55,0.08)] flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">PROPOSED TRANSACTIONAL MODEL</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">PROPOSED VALUATION MODEL</h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                <strong>Pre-Money:</strong> ₹4.50 Cr<br />
                <strong>Post-Money:</strong> ₹5.00 Cr
              </p>
            </div>
            <div className="mt-4 p-2.5 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-center text-xs font-heading font-bold text-[#F4D03F]">
              &ldquo;Proposed / Implied by current investment structure&rdquo;
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-wider block mb-1">REGULATORY COMPLIANCE</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">ACTUAL / INDEPENDENT VALUATION</h4>
              <p className="text-xs text-white/65 font-sans leading-relaxed">
                No third-party independent valuation report has been filed yet. Actual statutory valuation certificates will be acquired as legally required during formal capitalization.
              </p>
            </div>
            <div className="mt-4 p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-center text-xs font-sans text-white/70">
              &ldquo;Not Available Yet&rdquo;
            </div>
          </div>
        </div>

        {/* 8. EDUCATIONAL CORRELATION PANEL: VALUATION ≠ REVENUE */}
        <div className="max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#090909] border border-white/10 mb-8 text-left sm:text-center">
          <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-3">
            Valuation &ne; Revenue &ne; Profit
          </h4>
          <p className="text-xs text-white/75 font-sans leading-relaxed max-w-2xl mx-auto">
            <strong>Key Distinction:</strong> **Valuation** is the implied value assigned to the company for the financing transaction, whereas **Revenue** represents top-line business income, and **Profit** represents distributable yields after taxes and expenses. Specifically: A ₹5 Cr transactional valuation does <strong>NOT</strong> mean Nexora currently earns ₹5 Cr in active business revenue.
          </p>
        </div>

        {/* 9. NO-GUARANTEE WARNING CLARIFICATION */}
        <div className="max-w-4xl mx-auto p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center mb-10">
          <p className="text-xs text-white/50 font-sans">
            <strong>Risk Warning:</strong> &ldquo;An investment valuation is not a guarantee of future company value.&rdquo; Nexora does not claim or guarantee that the company will definitely maintain or exceed a ₹5 Cr worth, or that any investor stake will generate specific future asset worth.
          </p>
        </div>

        {/* 10. END TAKEAWAY HERO BOX */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-black via-[#DAAF37]/15 to-black border border-[#DAAF37]/45 text-center shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">Investor Takeaway</span>
          <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-2 leading-snug">
            &ldquo;₹5 Cr POST-MONEY VALUATION IS IMPLIED BY THE CURRENT ₹50 LAKH FOR 10% EQUITY STRUCTURE.&rdquo;
          </h4>
          <p className="text-xs text-white/60 font-sans max-w-2xl mx-auto leading-relaxed">
            ₹4.50 Cr is the corresponding pre-money valuation before the proposed ₹50 lakh investment. This is a proposed transaction valuation, not a guarantee of future company value.
          </p>
        </div>
      </section>

      {/* SECTION 14 — IS THE ₹11,575 MONTHLY FIGURE GUARANTEED? */}
      <section
        id="guarantee-clarification"
        aria-label="Guarantee Clarification Section"
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <AlertTriangle className="w-3.5 h-3.5 text-[#F4D03F]" />
            14. मुनाफे का बँटवारा (PROFIT)
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            क्या हर महीने{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              ₹11,575 मिलना तय है?
            </span>
          </h2>

          <p className="text-base sm:text-lg font-heading font-medium text-[#F4D03F] mb-4">
            &ldquo;क्या मुझे हर महीने यह पैसा गारंटी के साथ मिलेगा?&rdquo;
          </p>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            मुनाफे के गणित को सरल भाषा में समझें।
          </p>
        </div>

        {/* 2. THE ANSWER CARD (FIRST VISUAL) */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-black via-[#DAAF37]/10 to-black border-2 border-red-500/30 text-center shadow-[0_12px_40px_rgba(0,0,0,0.9)] mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
          <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#DAAF37] block mb-2">
            सीधा जवाब
          </span>
          <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-white tracking-tight mb-2">
            ₹11,575 / माह
          </div>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-red-950/40 border border-red-500/40 text-red-400 text-xs font-heading font-bold uppercase tracking-wider mb-4">
            गारंटी नहीं है — यह सिर्फ एक उदाहरण है
          </span>
          <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-2 leading-relaxed max-w-2xl mx-auto">
            &ldquo;₹11,575 का आंकड़ा अनुमानित मुनाफे के 1% हिस्से पर आधारित है। यह कोई फिक्स्ड मंथली इनकम नहीं है।&rdquo;
          </h4>
        </div>

        {/* 3. STEP-BY-STEP CALCULATION FLOW */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 mb-12">
          <h3 className="text-lg font-heading font-bold text-white text-center mb-8 uppercase tracking-wider">
            यह ₹11,575 का आंकड़ा कहाँ से आया?
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center max-w-3xl mx-auto">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 w-full md:w-1/3 flex flex-col justify-between">
              <span className="text-[10px] text-white/50 block mb-1 uppercase tracking-wider">अनुमानित सालाना मुनाफा</span>
              <div className="text-base font-bold text-white font-heading">₹1,38,90,254</div>
              <span className="text-[10px] text-[#DAAF37] block mt-1">टैक्स से पहले (Before Tax)</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden md:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] md:hidden" />

            <div className="p-4 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 w-full md:w-1/3 flex flex-col justify-between">
              <span className="text-[10px] text-[#DAAF37] block mb-1 uppercase tracking-wider">आपका 1% हिस्सा</span>
              <div className="text-base font-bold text-[#F4D03F] font-heading">≈ ₹1,38,903</div>
              <span className="text-[10px] text-white/50 block mt-1">सालाना अनुमानित हिस्सा</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden md:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] md:hidden" />

            <div className="p-4 rounded-xl bg-[#DAAF37]/20 border border-[#DAAF37]/50 w-full md:w-1/3 flex flex-col justify-between">
              <span className="text-[10px] text-[#DAAF37] block mb-1 uppercase tracking-wider">महीने का औसत</span>
              <div className="text-lg font-extrabold text-[#F4D03F] font-heading">≈ ₹11,575</div>
              <span className="text-[10px] text-white/60 block mt-1">मासिक अनुमान</span>
            </div>
          </div>
        </div>

        {/* 4. MOST IMPORTANT EDUCATIONAL DISTINCTIONS */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-red-500/20 shadow-[0_12px_36px_rgba(0,0,0,0.8)] mb-12">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <div className="w-9 h-9 rounded-xl bg-red-950/20 border border-red-500/30 flex items-center justify-center text-red-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-heading font-bold text-red-400 uppercase tracking-widest block">ज़रूरी डिस्क्लेमर</span>
              <h3 className="text-lg font-heading font-bold text-white">रिटर्न से जुड़ी ज़रूरी बातें</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-center">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
              <span className="text-xs font-heading font-bold text-[#F4D03F] block mb-1">₹11,575 / माह</span>
              <div className="text-lg font-bold text-red-400 my-1">≠</div>
              <span className="text-[11px] text-white/80 font-sans leading-tight">फिक्स्ड मंथली इनकम</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
              <span className="text-xs font-heading font-bold text-[#F4D03F] block mb-1">₹11,575 / माह</span>
              <div className="text-lg font-bold text-red-400 my-1">≠</div>
              <span className="text-[11px] text-white/80 font-sans leading-tight">गारंटीड रिटर्न</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
              <span className="text-xs font-heading font-bold text-[#F4D03F] block mb-1">₹11,575 / माह</span>
              <div className="text-lg font-bold text-red-400 my-1">≠</div>
              <span className="text-[11px] text-white/80 font-sans leading-tight">गारंटीड डिविडेंड</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
              <span className="text-xs font-heading font-bold text-[#F4D03F] block mb-1">₹11,575 / माह</span>
              <div className="text-lg font-bold text-red-400 my-1">≠</div>
              <span className="text-[11px] text-white/80 font-sans leading-tight">पैसे की वापसी की गारंटी</span>
            </div>
          </div>
        </div>

        {/* 5. CONCEPTUAL PATHWAY: PROFIT BEFORE TAX ≠ CASH PAID */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 mb-12">
          <div className="text-center mb-6">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">RECONCILIATION PATHWAY</span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">Profit Before Tax vs. Distributable Cash</h3>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4 max-w-4xl mx-auto mb-6 text-xs text-center font-heading font-bold">
            <div className="px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              MODELED PROFIT BEFORE TAX
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-red-400 w-full sm:w-auto">
              TAXES &amp; CORPORATE LIABILITIES
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              LEGALLY DISTRIBUTABLE AMOUNT, IF ANY
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto font-medium">
              COMPANY DISTRIBUTION DECISION
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3 py-2 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/35 text-[#F4D03F] w-full sm:w-auto">
              INVESTOR&apos;S ACTUAL YIELD, IF ANY
            </div>
          </div>

          <p className="text-xs text-white/60 font-sans leading-relaxed text-center max-w-2xl mx-auto">
            * Note: No custom corporate tax rates or dividend payout percentages are assumed here. Owning equity does not promise that all business profits will be distributed to equity holders immediately.
          </p>
        </div>

        {/* 6. EARNINGS UNDERPERFORMANCE & OVERPERFORMANCE SCENARIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {/* Scenario: Underperformance */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-red-500/20 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-heading font-bold text-red-400 uppercase tracking-wider block mb-1">Risk Protection</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">What If actual Profit is lower?</h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                If actual profit is lower than the modeled profit, the actual economic outcome may also be lower. Furthermore, if there is no legally distributable profit under corporate law, **there may be no profit distribution** whatsoever for that period.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-xs font-sans text-white/50 italic mt-4">
              * Standard risk characteristic associated with early-stage business equity.
            </div>
          </div>

          {/* Scenario: Overperformance */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-heading font-bold text-emerald-400 uppercase tracking-wider block mb-1">Growth Upside</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">What If actual Profit is higher?</h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Actual results may also exceed the model. However, higher actual profit does not automatically create a guaranteed monthly payout or higher immediate distributions. Any actual dividend distribution remains subject to company decisions and applicable law.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-xs font-sans text-white/50 italic mt-4">
              * Upside returns depend entirely on board-approved profit payouts.
            </div>
          </div>
        </div>

        {/* 7. WHY IS THE FIGURE SHOWN? & REGULATORY QUESTIONS (FAQ) */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0B0B0B] border border-white/10 mb-12">
          <h4 className="text-base font-heading font-bold text-white text-center mb-6 uppercase tracking-wider">
            Investor Clarifications &amp; Frequently Asked Questions
          </h4>

          <div className="space-y-4 text-left">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-heading font-bold text-[#F4D03F] block mb-1.5 uppercase">
                1. Then why show the ₹11,575 figure on this website?
              </span>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                The figure is shown solely to help investors understand the unit economics and aggregate mechanics of the current financial model. It serves as an illustrative mathematical scenario for structural evaluation, not as a promise of future cash payments.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-heading font-bold text-[#F4D03F] block mb-1.5 uppercase">
                2. When would any actual profit payment start?
              </span>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                The timing and method of any actual profit distribution will depend entirely on the company&apos;s actual distributable profits, applicable shareholder rights, company approvals, and the terms of the final executed investment/shareholder documentation. No start date is invented here.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-heading font-bold text-[#F4D03F] block mb-1.5 uppercase">
                3. Can ₹5 Lakh be recovered in exactly 43 months?
              </span>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                The approximately 43-month figure shown elsewhere is an illustrative recovery calculation based entirely on modeled figures and is not a guaranteed recovery timeline.
              </p>
            </div>
          </div>
        </div>

        {/* 8. ACTUAL VS MODELED DATA COMPARISON CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {/* Actual Card */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-wider block mb-1">VERIFIED HISTORICAL PERFORMANCE</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">ACTUAL PERFORMANCE DATA</h4>
              <p className="text-xs text-white/65 font-sans leading-relaxed">
                No verified historical investor payouts are available as the project is preparing for market launch and capital raising is not finalized.
              </p>
            </div>
            <div className="mt-4 p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-center text-xs font-heading font-bold text-white/60">
              &ldquo;Data Not Available Yet&rdquo;
            </div>
          </div>

          {/* Modeled Card */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-[#DAAF37]/35 flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">AGGREGATE PROJECTION DATA</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">MODELED FINANCIAL DATA</h4>
              <ul className="space-y-1 text-xs text-white/75 font-sans">
                <li>• Modeled Profit Before Tax: <strong>₹1,38,90,254</strong></li>
                <li>• Illustrative 1% annual portion: <strong>≈ ₹1,38,903</strong></li>
                <li>• Illustrative monthly equivalent: <strong>≈ ₹11,575</strong></li>
              </ul>
            </div>
            <div className="mt-4 p-2.5 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-center text-xs font-heading font-bold text-[#F4D03F]">
              &ldquo;Modeled / Illustrative Scenario Only&rdquo;
            </div>
          </div>
        </div>

        {/* 9. DISCLOSURES & SECTION REFERENCES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10 text-center">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-sans text-white/70">
            For complete investment-risk parameters and comprehensive disclosures, please see our dedicated <a href="/disclaimer" className="text-[#DAAF37] hover:underline font-heading font-bold inline-flex items-center gap-1">Disclaimer Page <ExternalLink className="w-3.5 h-3.5" /></a>.
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-sans text-white/70">
            1% represents an ownership interest under the proposed structure. Refer to <a href="#what-equity-means" className="text-[#DAAF37] hover:underline font-heading font-bold">Section 12 (What Does 1% Equity Mean?)</a> for structural details.
          </div>
        </div>

        {/* 10. END TAKEAWAY HERO BOX */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-black via-[#DAAF37]/15 to-black border border-[#DAAF37]/45 text-center shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">Investor Takeaway</span>
          <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-2 leading-snug">
            &ldquo;₹11,575 IS A MODELED MONTHLY EQUIVALENT — NOT A GUARANTEED MONTHLY RETURN.&rdquo;
          </h4>
          <p className="text-xs text-white/60 font-sans max-w-2xl mx-auto leading-relaxed">
            The actual outcome depends entirely on Nexora&apos;s real business performance, legally distributable profits, company decisions, shareholder rights and applicable law.
          </p>
        </div>
      </section>

      {/* SECTION 15 — HOW CAN AN INVESTOR EXIT? */}
      <section
        id="exit-opportunities"
        aria-label="Investor Exit Opportunities Section"
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Compass className="w-3.5 h-3.5 text-[#F4D03F]" />
            15. एग्जिट (EXIT)
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            इन्वेस्टर अपनी हिस्सेदारी से{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              बाहर (Exit)
            </span>{' '}
            कैसे निकल सकता है?
          </h2>

          <p className="text-base sm:text-lg font-heading font-medium text-[#F4D03F] mb-4">
            &ldquo;अगर मैं Nexora में equity investment करता हूँ, तो भविष्य में अपनी investment से exit कैसे कर सकता हूँ?&rdquo;
          </p>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            इक्विटी एक लंबे समय का निवेश है। एग्जिट की प्रक्रिया शेयर अधिकारों, ट्रांसफर की शर्तों और कानूनी दस्तावेजों पर निर्भर करती है।
          </p>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/40 text-[#FFF2B2] text-xs font-heading font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(218,175,55,0.2)]">
            <ShieldCheck className="w-4 h-4 text-[#DAAF37]" />
            एग्जिट की शर्तें — कानूनी समझौते के अधीन
          </div>
        </div>

        {/* 2. CORE EXIT DISCLOSURE CARD (LARGE VISUAL STATEMENT) */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-black via-[#DAAF37]/10 to-black border-2 border-red-500/30 text-center shadow-[0_12px_40px_rgba(0,0,0,0.9)] mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
          <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#DAAF37] block mb-2">
            महत्वपूर्ण जानकारी (Liquidity)
          </span>
          <div className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
            1% इक्विटी का मतलब यह नहीं कि एग्जिट की गारंटी है।
          </div>
          <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed max-w-2xl mx-auto">
            एक इन्वेस्टर भविष्य के फंडिंग राउंड, किसी बड़ी कंपनी द्वारा अधिग्रहण (Acquisition) या अन्य कानूनी तरीकों से अपनी हिस्सेदारी बेचकर वैल्यू पा सकता है।
          </p>
        </div>

        {/* 3. FOUR POTENTIAL EXIT ROUTE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-[1440px] mx-auto">
          {/* Route 1: Secondary Share Sale */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-4">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-base font-heading font-bold text-white mb-2">
                1. हिस्सेदारी की बिक्री (Secondary Sale)
              </h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                एक इन्वेस्टर अपनी हिस्सेदारी किसी योग्य खरीदार को बेच सकता है, बशर्ते वह कानूनी नियमों और कंपनी के समझौतों के अनुसार हो।
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-[10px] font-sans text-white/45 italic mt-4">
              * खरीदार की उपलब्धता मार्केट की स्थिति पर निर्भर करती है।
            </div>
          </div>

          {/* Route 2: Founder / Shareholder Purchase */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-4">
                <Store className="w-4 h-4" />
              </div>
              <h3 className="text-base font-heading font-bold text-white mb-2">
                2. फाउंडर्स या शेयरधारकों द्वारा खरीद
              </h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                कंपनी के फाउंडर्स या मौजूदा शेयरधारक आपसी सहमति से आपकी हिस्सेदारी खरीद सकते हैं।
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-[10px] font-sans text-white/45 italic mt-4">
              * इसकी कोई पहले से तय गारंटी (Buyback Obligation) नहीं होती।
            </div>
          </div>

          {/* Route 3: Future Funding Transaction */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] mb-4">
                <Coins className="w-4 h-4" />
              </div>
              <h3 className="text-base font-heading font-bold text-white mb-2">
                3. भविष्य के फंडिंग राउंड्स
              </h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                भविष्य में आने वाले बड़े संस्थागत (Institutional) इन्वेस्टर्स को अपनी हिस्सेदारी बेचना।
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-[10px] font-sans text-white/45 italic mt-4">
              * यह भविष्य के राउंड्स की शर्तों और बोर्ड की मंजूरी पर निर्भर करेगा।
            </div>
          </div>

          {/* Route 4: Strategic Acquisition */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-4">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-base font-heading font-bold text-white mb-2">
                4. कंपनी का अधिग्रहण (Strategic Sale)
              </h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                अगर कोई बड़ी कंपनी Nexora को खरीदती है, तो आपकी हिस्सेदारी की वैल्यू उस डील के आधार पर दी जाएगी।
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-[10px] font-sans text-white/45 italic mt-4">
              * भविष्य में अधिग्रहण की कोई गारंटी नहीं दी जा सकती।
            </div>
          </div>
        </div>

        {/* 4. EXIT FLOW JOURNEY VISUAL */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-[#DAAF37]/35 text-center shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#DAAF37] block mb-2">
            Conceptual Liquidity Path
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6">
            Illustrative Share Exit Flow
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4 max-w-5xl mx-auto mb-6 text-xs font-heading font-bold">
            <div className="px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              INVESTOR OWNS 1% EQUITY
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              HOLDS corporate SHARES
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-[#F4D03F] w-full sm:w-auto">
              FUTURE PERMITTED TRANSACTION
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-4 py-2.5 rounded-lg bg-[#DAAF37]/20 border border-[#DAAF37]/45 text-[#F4D03F] w-full sm:w-auto">
              SHARES TRANSFERRED / SOLD
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-4 py-2.5 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-white w-full sm:w-auto">
              RECOVERY / EXCHANGED VALUE
            </div>
          </div>

          <p className="text-xs text-white/50 font-sans italic max-w-2xl mx-auto">
            * Warning: Exit depends strictly on the occurrence of an actual transaction and market buyers. Equity holding itself does not guarantee any secondary-market liquidity.
          </p>
        </div>

        {/* 5. WHAT DETERMINES THE EXIT VALUE? */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 mb-12">
          <div className="flex items-start justify-start gap-3 mb-4">
            <FileQuestion className="w-5 h-5 text-[#DAAF37] flex-shrink-0" />
            <h4 className="text-sm sm:text-base font-heading font-bold text-white uppercase tracking-wider">
              अगर मैं exit करूँगा तो मुझे कितना पैसा मिलेगा?
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed text-left max-w-3xl">
            <strong>Exit Value Calculation Basis:</strong> Exit value cannot be guaranteed in advance. It depends on the future transaction price, company valuation at that specific time, the number/class of shares held, applicable corporate rights, and the terms of the actual transaction. No future exit valuation is promised. Your ₹5,00,000 corresponds to 1% equity under the current proposed structure, but its future liquidity worth remains entirely dependent on the company&apos;s real operating metrics.
          </p>
        </div>

        {/* 6. WARNING CHECKS: NO GUARANTEED BUYBACKS & LOCK-INS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {/* No Buybacks Panel */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.02] border border-red-500/20 text-left flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-red-400 uppercase tracking-wider block mb-1">CONTRACTUAL CONDITIONS</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">NO GUARANTEED BUYBACK</h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                &ldquo;Unless expressly documented in the executed legal agreement and permitted under applicable law, Nexora does not represent that the company or founders will be required to repurchase an investor&apos;s shares.&rdquo;
              </p>
            </div>
          </div>

          {/* No Resale Panel */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.02] border border-red-500/20 text-left flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-red-400 uppercase tracking-wider block mb-1">LIQUIDITY LIMITS</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">NO GUARANTEED EXIT</h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                &ldquo;An investor may be unable to sell shares immediately or at the desired price. Liquidity depends strictly on available buyers, transaction terms, company circumstances and applicable transfer restrictions.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* 7. REGULATORY & AGREEMENT CONDITIONS (FAQ) */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0B0B0B] border border-white/10 mb-12">
          <h4 className="text-base font-heading font-bold text-white text-center mb-6 uppercase tracking-wider">
            Transfer Regulations &amp; Governance
          </h4>

          <div className="space-y-4 text-left text-xs">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-heading font-bold text-[#F4D03F] block mb-1 uppercase">
                1. Lock-in Period &amp; Transfer Restrictions
              </span>
              <p className="text-white/70 font-sans leading-relaxed">
                Any lock-in period, transfer restriction, Right of First Refusal (ROFR), consent requirement, or similar corporate transfer condition will be governed entirely by the final executed shareholder/investment agreements. No specific lock-in duration is invented or represented here.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-heading font-bold text-[#F4D03F] block mb-1 uppercase">
                2. Recovery Period vs. Share Exit Date
              </span>
              <p className="text-white/70 font-sans leading-relaxed">
                The approximately 43-month figure shown elsewhere in our materials is an illustrative recovery calculation based entirely on modeled profit assumptions. It is **not** a contractual exit date, a guaranteed repayment period, or a guaranteed buyback timeline.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-heading font-bold text-[#F4D03F] block mb-1 uppercase">
                3. No resale marketplace on this website
              </span>
              <p className="text-white/70 font-sans leading-relaxed">
                The Nexora website does not itself constitute a marketplace, broker platform, or promise for secondary resale of investor shares. Any actual share transfer/exit must follow the formal legal, statutory, and corporate process as required under corporate laws.
              </p>
            </div>
          </div>
        </div>

        {/* 8. ACTUAL VS POTENTIAL VALUES COMPARISON CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {/* Actual Card */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-wider block mb-1">LIQUIDITY STATUS</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">CURRENT EXIT PROMISE</h4>
              <p className="text-xs text-white/65 font-sans leading-relaxed">
                No guaranteed exit, mandatory buyback, or liquidity timeline is currently promised or offered.
              </p>
            </div>
            <div className="mt-4 p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-center text-xs font-heading font-bold text-white/60">
              &ldquo;No guaranteed exit / buyback is currently promised.&rdquo;
            </div>
          </div>

          {/* Modeled Card */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-[#DAAF37]/35 flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">PROPOSED TRANSACTION ROUTES</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">POTENTIAL FUTURE EXIT PATHS</h4>
              <ul className="space-y-1 text-xs text-white/75 font-sans">
                <li>• Approved secondary share sale or private transfer</li>
                <li>• Retrospective founder or partner share purchase</li>
                <li>• Participation in future financing rounds</li>
                <li>• Strategic sale or entity level acquisition</li>
              </ul>
            </div>
            <div className="mt-4 p-2.5 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-center text-xs font-heading font-bold text-[#F4D03F]">
              &ldquo;POTENTIAL / SUBJECT TO DOCUMENTATION&rdquo;
            </div>
          </div>
        </div>

        {/* 9. DISCLOSURES & SECTION REFERENCES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10 text-center">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-sans text-white/70">
            For complete investment-risk parameters and comprehensive disclosures, please see our dedicated <a href="/disclaimer" className="text-[#DAAF37] hover:underline font-heading font-bold inline-flex items-center gap-1">Disclaimer Page <ExternalLink className="w-3.5 h-3.5" /></a>.
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-sans text-white/70">
            Exit parameters depend strictly on shareholder agreements. Refer to <a href="#what-equity-means" className="text-[#DAAF37] hover:underline font-heading font-bold">Section 12 (What Does 1% Equity Mean?)</a> for structural details.
          </div>
        </div>

        {/* 10. END TAKEAWAY HERO BOX */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-black via-[#DAAF37]/15 to-black border border-[#DAAF37]/45 text-center shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">Investor Takeaway</span>
          <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-2 leading-snug">
            &ldquo;1% EQUITY = OWNERSHIP, NOT GUARANTEED LIQUIDITY.&rdquo;
          </h4>
          <p className="text-xs text-white/60 font-sans max-w-2xl mx-auto leading-relaxed">
            An investor&apos;s actual exit depends entirely on future transaction opportunities, applicable shareholder rights, negotiated terms, and formal legal documentation.
          </p>
        </div>
      </section>

      {/* SECTION 16 — WHO OWNS NEXORA'S TECHNOLOGY, CODE & BRAND? */}
      <section
        id="technology-ownership"
        aria-label="Technology and IP Ownership Section"
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Cpu className="w-3.5 h-3.5 text-[#F4D03F]" />
            16. टेक्नोलॉजी और ब्रांड
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            Nexora की{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              टेक्नोलॉजी और ब्रांड
            </span>{' '}
            का मालिक कौन है?
          </h2>

          <p className="text-base sm:text-lg font-heading font-medium text-[#F4D03F] mb-4">
            &ldquo;Website, app, source code, domain और brand किसके नियंत्रण में हैं?&rdquo;
          </p>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            Nexora की सभी डिजिटल प्रॉपर्टीज कंपनी के मालिकाना हक और नियंत्रण में रहती हैं।
          </p>

          {/* Model Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/40 text-[#FFF2B2] text-xs font-heading font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(218,175,55,0.2)]">
            <ShieldCheck className="w-4 h-4 text-[#DAAF37]" />
            IP सुरक्षा — कंपनी के दस्तावेजों द्वारा प्रमाणित
          </div>
        </div>

        {/* 2. SIX VISUAL ASSET CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-12">
          {/* CARD 1: SOURCE CODE */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">प्रॉपर्टी 01</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">प्लेटफार्म कोड (Code)</h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                वेबसाइट और एप्लीकेशन का पूरा सोर्स कोड कंपनी के मालिकाना हक में है।
              </p>
            </div>
            <div className="mt-4 p-2 rounded-lg bg-white/[0.03] border border-white/10 text-center">
              <span className="text-[10px] font-heading font-semibold text-white/50 uppercase">Ownership Documentation</span>
            </div>
          </div>

          {/* CARD 2: WEBSITE & APPLICATION */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">प्रॉपर्टी 02</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">डिजिटल प्रोडक्ट्स</h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                Nexora की वेबसाइट और कस्टमर/सैलून एप्स कंपनी की मुख्य संपत्ति (Assets) हैं।
              </p>
            </div>
            <div className="mt-4 p-2 rounded-lg bg-white/[0.03] border border-white/10 text-center">
              <span className="text-[10px] font-heading font-semibold text-white/50 uppercase">Company Control</span>
            </div>
          </div>

          {/* CARD 3: DOMAIN */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">प्रॉपर्टी 03</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">डोमेन (Domain)</h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                Nexora का मुख्य इंटरनेट डोमेन कंपनी के आधिकारिक अकाउंट के ज़रिये नियंत्रित होता है।
              </p>
            </div>
            <div className="mt-4 p-2 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/25 text-center">
              <span className="text-[10px] font-heading font-semibold text-[#F4D03F] uppercase">Official Control</span>
            </div>
          </div>

          {/* CARD 4: BRAND / TRADEMARK */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">प्रॉपर्टी 04</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">ब्रांड और ट्रेडमार्क</h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                Nexora का नाम और लोगो कानूनी रूप से कंपनी की पहचान और संपत्ति हैं।
              </p>
            </div>
            <div className="mt-4 p-2 rounded-lg bg-white/[0.03] border border-white/10 text-center">
              <span className="text-[10px] font-heading font-semibold text-white/50 uppercase">Protected Asset</span>
            </div>
          </div>

          {/* CARD 5: DESIGN & CONTENT */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">प्रॉपर्टी 05</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">UI/UX और डिज़ाइन</h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                एप और वेबसाइट के सभी डिज़ाइन और कंटेंट पर कंपनी का पूर्ण अधिकार है।
              </p>
            </div>
            <div className="mt-4 p-2 rounded-lg bg-white/[0.03] border border-white/10 text-center">
              <span className="text-[10px] font-heading font-semibold text-white/50 uppercase">Documented</span>
            </div>
          </div>

          {/* CARD 6: INFRASTRUCTURE & ACCOUNTS */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">प्रॉपर्टी 06</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">टेक्निकल नियंत्रण</h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                क्लाउड होस्टिंग और डेटाबेस जैसे महत्वपूर्ण सिस्टम कंपनी के कंट्रोल में रहते हैं।
              </p>
            </div>
            <div className="mt-4 p-2 rounded-lg bg-red-950/20 border border-red-500/25 text-center">
              <span className="text-[10px] font-heading font-semibold text-red-400 uppercase">To Be Verified</span>
            </div>
          </div>
        </div>

        {/* 3. OWNERSHIP MAP DIAGRAM */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-[#DAAF37]/35 text-center mb-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#DAAF37] block mb-2">
            Technical Control Architecture
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6">
            Nexora Corporate IP &amp; Asset Map
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 max-w-4xl mx-auto mb-6 text-xs font-heading font-bold">
            <div className="px-4 py-2.5 rounded-lg bg-[#DAAF37]/25 border border-[#DAAF37]/50 text-[#F4D03F] w-full sm:w-auto">
              NEXORA COMPANY
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden md:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] md:hidden" />

            <div className="px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              CORE DIGITAL ASSETS
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden md:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] md:hidden" />

            <div className="px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              Company Control + Documented Ownership
            </div>
          </div>

          {/* Sub nodes diagram block */}
          <div className="p-4 rounded-xl bg-black/60 border border-white/5 max-w-2xl mx-auto">
            <span className="text-[10px] font-heading font-bold text-white/45 uppercase block mb-3">
              Protected Asset Categories
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-heading font-bold uppercase tracking-wide">
              <span className="p-2 rounded bg-white/[0.02] border border-white/[0.05] text-white/80">SOURCE CODE</span>
              <span className="p-2 rounded bg-white/[0.02] border border-white/[0.05] text-white/80">WEBSITE</span>
              <span className="p-2 rounded bg-white/[0.02] border border-white/[0.05] text-white/80">APP</span>
              <span className="p-2 rounded bg-white/[0.02] border border-white/[0.05] text-white/80">DOMAIN</span>
              <span className="p-2 rounded bg-white/[0.02] border border-white/[0.05] text-white/80">BRAND</span>
              <span className="p-2 rounded bg-white/[0.02] border border-white/[0.05] text-white/80">DESIGN</span>
              <span className="p-2 rounded bg-white/[0.02] border border-white/[0.05] text-white/80">DATA / DATABASE</span>
              <span className="p-2 rounded bg-white/[0.02] border border-white/[0.05] text-white/80">TECH ACCOUNTS</span>
            </div>
          </div>
        </div>

        {/* 4. INVESTOR Q&A SUB-SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {/* Question 1: What if a developer leaves? */}
          <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/10 text-left flex flex-col justify-between">
            <div>
              <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">IP RISK MANAGEMENT</span>
              <h4 className="text-base font-heading font-bold text-white mb-3">What if a developer leaves?</h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                &ldquo;Developer access should not determine ownership of Nexora&apos;s core technology. Appropriate IP assignment, confidentiality and access-control agreements should protect the company&apos;s rights.&rdquo;
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 text-[10px] font-sans text-white/45 italic mt-4">
              * Governance protocols protect repository access and deployment credentials.
            </div>
          </div>

          {/* Question 2: Can the developer take the code? */}
          <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/10 text-left flex flex-col justify-between">
            <div>
              <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">LEGAL SAFEGUARDS</span>
              <h4 className="text-base font-heading font-bold text-white mb-3">Can the developer take the code?</h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                &ldquo;Ownership and permitted use of source code should be governed by written IP assignment/licensing and confidentiality agreements with developers and vendors.&rdquo; Final legal ownership depends on the executed agreements and applicable law.
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 text-[10px] font-sans text-white/45 italic mt-4">
              * IP covenants and non-compete clauses govern development contracts.
            </div>
          </div>
        </div>

        {/* 5. TECHNOLOGY DUE-DILIGENCE PANEL */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0B0B0B] border border-white/10 mb-12">
          <h4 className="text-base font-heading font-bold text-white text-center mb-6 uppercase tracking-wider">
            Technology Due-Diligence Checklist
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
            {[
              { title: 'CODE OWNERSHIP', status: 'To Be Verified', desc: 'IP assignment documentation with active development team.' },
              { title: 'DOMAIN CONTROL', status: 'Company-Controlled / To Verify', desc: 'Domain registry registration and company billing accounts.' },
              { title: 'BRAND RIGHTS', status: 'To Be Verified', desc: 'Name, logo usage rights, and trademark registration files.' },
              { title: 'DEVELOPER AGREEMENTS', status: 'To Be Verified', desc: 'Executed confidentiality and work-for-hire covenants.' },
              { title: 'THIRD-PARTY LICENSES', status: 'Review Required', desc: 'Review of open-source libraries and proprietary APIs.' },
              { title: 'PRODUCTION ACCESS', status: 'Company-Controlled / To Verify', desc: 'Administrative credentials for servers, hosting, and datastores.' },
            ].map((check, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-heading font-bold text-white">{check.title}</span>
                  <span className="text-[9px] font-heading font-bold uppercase px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300">
                    {check.status}
                  </span>
                </div>
                <p className="text-xs text-white/50 font-sans leading-relaxed">
                  {check.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-white/45 font-sans leading-relaxed text-center mt-6">
            Detailed contracts, registrar files, and development covenants can be made available to qualified, verified partners inside the secure due-diligence data-room.
          </p>
        </div>

        {/* 6. INVESTOR TAKEAWAY HERO BOX */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-black via-[#DAAF37]/15 to-black border border-[#DAAF37]/45 text-center shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">Intellectual Property Takeaway</span>
          <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-2 leading-snug">
            &ldquo;TECHNOLOGY IS AN IMPORTANT COMPANY ASSET. ITS OWNERSHIP, ACCESS AND TRANSFER RIGHTS SHOULD BE DOCUMENTED—NOT ASSUMED.&rdquo;
          </h4>
          <p className="text-xs text-white/60 font-sans max-w-2xl mx-auto leading-relaxed">
            Nexora&apos;s due-diligence records should establish ownership/control of source code, domains, brand assets, infrastructure and other material intellectual property.
          </p>
        </div>
      </section>

      {/* SECTION 17 — TECHNOLOGY SECURITY & SCALABILITY */}
      <section
        id="security-scalability"
        aria-label="Technology Security and Scalability Section"
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Cpu className="w-3.5 h-3.5 text-[#F4D03F]" />
            17. SECURITY &amp; SCALABILITY
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            Technology Security &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              Scalability Foundations
            </span>
          </h2>

          <p className="text-base sm:text-lg font-heading font-medium text-[#F4D03F] mb-4">
            &ldquo;Nexora is designed with a scalable digital architecture, while security, performance and reliability are continuously strengthened as commercial usage grows.&rdquo;
          </p>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            An honest, transparent overview of our digital architecture, operational security controls, and infrastructure pathways for handling rapid system expansion.
          </p>
        </div>

        {/* 2. TOP STATUS STRIP (4 Visual Status Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {[
            { title: 'PRODUCT TECHNOLOGY', status: 'READY', desc: 'Fully developed modular React & TypeScript frontend application.' },
            { title: 'SECURITY CONTROLS', status: 'IMPLEMENTED / TO BE VERIFIED', desc: 'Operational security checks and account controls prepared for audit.' },
            { title: 'SCALABILITY', status: 'DESIGNED FOR GROWTH', desc: 'Sleek component architecture structured to support increasing scale.' },
            { title: 'LIVE LARGE-SCALE PROOF', status: 'TO BE MEASURED', desc: 'Performance and concurrency load to be formally logged post-launch.' },
          ].map((card, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-[#DAAF37]/30 transition-colors text-left flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-widest block mb-1">
                  {card.title}
                </span>
                <div className="text-base sm:text-lg font-heading font-extrabold text-[#F4D03F] mb-2 leading-tight">
                  {card.status}
                </div>
                <p className="text-xs text-white/60 font-sans leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. SECTION 1 — TECHNOLOGY ARCHITECTURE VISUAL */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0B0B0B] border border-white/10 mb-12 text-center">
          <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#DAAF37] block mb-2">
            System Topology Map
          </span>
          <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-6">
            Nexora Product Technology Flow
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4 max-w-4xl mx-auto mb-6 text-xs font-heading font-bold">
            <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              CUSTOMER / SALON
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              NEXORA WEB / APP
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-2.5 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 text-[#F4D03F] w-full sm:w-auto">
              APPLICATION LOGIC / APIs
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              DATABASE / STORAGE
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              THIRD-PARTY SERVICES
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-2.5 rounded-xl bg-[#DAAF37]/25 border border-[#DAAF37]/45 text-[#F4D03F] w-full sm:w-auto">
              REPORTING / OPERATIONS
            </div>
          </div>

          <p className="text-xs text-white/50 font-sans italic max-w-2xl mx-auto leading-relaxed">
            * Note: Visual mapping outlines client-facing portals, processing layers, and merchant operations. Private hosting resources and sensitive server specifications are kept secure and protected.
          </p>
        </div>

        {/* 4. SECTION 2 — SECURITY FOUNDATIONS */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="text-center mb-8">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
              SYSTEM PROTECTION
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Actual &amp; Planned Security Foundations
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'AUTHENTICATION', desc: 'Controlled user access via secure interface logins.', status: 'PLANNED' },
              { title: 'AUTHORIZATION', desc: 'Role-based permissions governing salon, customer, and admin profiles.', status: 'PLANNED' },
              { title: 'DATA PROTECTION', desc: 'Appropriate security of stored and transmitted information across channels.', status: 'PLANNED' },
              { title: 'SECRETS', desc: 'Sensitive API keys and configurations isolated outside of public repositories.', status: 'IMPLEMENTED' },
              { title: 'ACCESS CONTROL', desc: 'Production resources and administrative configurations restricted by personnel role.', status: 'PLANNED' },
              { title: 'BACKUPS', desc: 'Business-critical merchant and account data governed by structured recovery plans.', status: 'PLANNED' },
              { title: 'LOGGING / MONITORING', desc: 'Operational flow, exceptions, and security alerts logged where implemented.', status: 'PLANNED' },
            ].map((control, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-heading font-bold text-white tracking-wide">
                      {control.title}
                    </span>
                    <span className={`text-[9px] font-heading font-bold uppercase px-2 py-0.5 rounded border ${
                      control.status === 'IMPLEMENTED'
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                        : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                    }`}>
                      {control.status}
                    </span>
                  </div>
                  <p className="text-xs text-white/60 font-sans leading-relaxed">
                    {control.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. SECTION 3 & 4 — CUSTOMER DATA & PAYMENT SECURITY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {/* Section 3: Customer Data Security */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 flex flex-col justify-between hover:border-[#DAAF37]/35 transition-colors">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-4">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-3">
                Customer Data Security &amp; Handling
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                To run the marketplace operations, Nexora is designed to handle necessary ecosystem details, including:
              </p>
              <ul className="space-y-1.5 text-xs text-white/60 font-sans mb-5">
                <li>• Customer Account Information</li>
                <li>• Booking Details &amp; Calendars</li>
                <li>• Salon Partner Profile Records</li>
                <li>• Numerical Transaction References</li>
                <li>• Customer Support Inquiries</li>
              </ul>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                Customer and business data is handled according to Nexora&apos;s Privacy Policy and applicable data-protection requirements.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 mt-6 flex items-center gap-1">
              <span className="text-xs text-white/50">View resource:</span>
              <a href="/privacy-policy" className="text-xs text-[#DAAF37] hover:underline font-heading font-bold flex items-center gap-1">
                Privacy Policy <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Section 4: Payment Security */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 flex flex-col justify-between hover:border-[#DAAF37]/35 transition-colors">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-4">
                <CreditCard className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-3">
                Payment Security Integration
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-5">
                Financial transaction integrity is managed cleanly by isolating payment information from platform storage:
              </p>
              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed bg-white/[0.02] border border-white/5 p-4 rounded-xl italic mb-5">
                &ldquo;Payment credentials are handled through the applicable payment-provider architecture rather than unnecessarily stored by Nexora.&rdquo;
              </p>
              <p className="text-xs text-white/60 font-sans leading-relaxed">
                This minimizes platform liability, avoids client-side credit card interception risks, and leverages established transactional processing corridors.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 mt-6 flex flex-wrap items-center gap-4">
              <a href="/refund-policy" className="text-xs text-[#DAAF37] hover:underline font-heading font-bold flex items-center gap-1">
                Refund &amp; Cancellation Policy <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-white/20">|</span>
              <a href="/terms-and-conditions" className="text-xs text-[#DAAF37] hover:underline font-heading font-bold flex items-center gap-1">
                Terms &amp; Conditions <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 6. SECTION 5 & 6 — ADMIN ACCESS & BACKUP RECOVERY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {/* Section 5: Admin & Developer Access */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 flex flex-col justify-between hover:border-[#DAAF37]/35 transition-colors">
            <div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-4">
                System Access Controls &amp; Roles
              </h3>
              <p className="text-xs text-white/40 font-heading font-bold uppercase tracking-wider block mb-4">
                Investor Question: &ldquo;Who can access the system?&rdquo;
              </p>

              <div className="space-y-2.5 mb-5">
                {[
                  { label: 'ADMIN ACCESS', val: 'Authorized roles' },
                  { label: 'DEVELOPER ACCESS', val: 'Controlled through appropriate account permissions' },
                  { label: 'PRODUCTION ACCESS', val: 'Restricted where implemented' },
                  { label: 'DATABASE ACCESS', val: 'Restricted where implemented' },
                ].map((row, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-sans">
                    <span className="text-white/60 font-medium">{row.label}:</span>
                    <span className="text-white/90 text-right">{row.val}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-white/70 font-sans leading-relaxed">
                Access controls should be maintained according to role and business need. Administrative accounts are protected by multi-factor workflows to ensure strict digital hygiene.
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 text-[10px] text-white/45 font-sans mt-4">
              * Governance protocols protect repository access and server credentials.
            </div>
          </div>

          {/* Section 6: Backup & Recovery */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 flex flex-col justify-between hover:border-[#DAAF37]/35 transition-colors">
            <div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-3">
                Backup &amp; Disaster Recovery
              </h3>
              <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed mb-4">
                A scalable, production-ready enterprise structure requires formal backup, redundancy, and incident response procedures to handle:
              </p>
              
              <div className="grid grid-cols-2 gap-2 mb-5 text-center">
                {['Database Failure', 'Accidental Deletion', 'Infrastructure Failure', 'Security Incidents'].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] font-heading font-semibold text-white/75">
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm font-heading font-bold text-[#F4D03F] text-center bg-[#DAAF37]/10 p-3.5 border border-[#DAAF37]/35 rounded-xl">
                Disaster recovery procedures — To Be Finalized / Verified
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 text-[10px] text-white/45 font-sans mt-4">
              * Backup protocols and failover timelines will be locked as production systems scale.
            </div>
          </div>
        </div>

        {/* 7. SECTION 7 — SCALABILITY DIAGRAM */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 text-center mb-12">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
            Designed for growth
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6">
            Ecosystem Capacity Scalability Pathway
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4 max-w-4xl mx-auto mb-6 text-xs font-heading font-bold">
            <div className="px-3.5 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              LAUNCH
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              MORE CUSTOMERS
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              MORE SALONS
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              MORE BOOKINGS
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-2 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/35 text-[#F4D03F] w-full sm:w-auto">
              HIGHER DATA / API LOAD
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-2 rounded-lg bg-[#DAAF37]/25 border border-[#DAAF37]/50 text-[#F4D03F] w-full sm:w-auto">
              SCALE INFRASTRUCTURE
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-2 rounded-lg bg-[#DAAF37]/40 border border-[#DAAF37]/60 text-[#FFF2B2] w-full sm:w-auto">
              NEXORA GROWTH
            </div>
          </div>

          <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed max-w-2xl mx-auto">
            &ldquo;The architecture is intended to scale as customer, salon and booking activity increases.&rdquo;
          </p>
        </div>

        {/* 8. SECTION 8 — 1,000 SALON SCALE */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-black via-[#DAAF37]/10 to-black border-2 border-[#DAAF37]/45 text-center shadow-[0_12px_40px_rgba(0,0,0,0.9)] mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F4D03F] to-transparent" />
          <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#DAAF37] block mb-2">
            INFRASTRUCTURE TARGET MODEL
          </span>
          <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#FFF2B2] to-[#DAAF37] tracking-tight mb-2">
            1,000 SALONS TARGET SCALE
          </div>
          <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-sans text-white/60 mb-4">
            Management operating target — Technology scalability design
          </span>
          <p className="text-xs sm:text-sm text-white/80 font-sans max-w-2xl mx-auto leading-relaxed">
            Technology scalability is being designed to support increasing salon, customer and booking volumes. Infrastructure capacity will be scaled proportionally to actual performance requirements.
          </p>
        </div>

        {/* 9. SECTION 9 — SCALE COMPONENTS */}
        <div className="max-w-5xl mx-auto mb-12 text-center">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
            GROWTH CHANNELS
          </span>
          <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-6">
            Core Scalability Elements
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'DATABASE CAPACITY', desc: 'Designed to manage increasing transaction and booking records.', icon: Database },
              { title: 'API / APP CAPACITY', desc: 'Architected to handle rising queries and coordinate request traffic.', icon: Cpu },
              { title: 'STORAGE', desc: 'Designed to support growing salon media, images, and documents.', icon: Layers },
              { title: 'MONITORING', desc: 'Equipped to identify performance bottlenecks and track service health.', icon: Clock },
              { title: 'INFRASTRUCTURE', desc: 'Planned expansion routes to increase processing resources as demand grows.', icon: RefreshCw },
            ].map((comp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0D0D0D] border border-white/10 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between text-left">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-[#F4D03F] mb-3">
                    <comp.icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-heading font-bold text-white tracking-wide mb-1">
                    {comp.title}
                  </h4>
                  <p className="text-[11px] text-white/60 font-sans leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 10. SECTION 10 — WHAT HAPPENS DURING RAPID GROWTH? */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0B0B0B] border border-white/10 text-center mb-12">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
            RAPID DEMAND RESPONSE
          </span>
          <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-6">
            Scaling Operations Control Loop
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4 max-w-5xl mx-auto mb-6 text-xs font-heading font-bold">
            <div className="px-3.5 py-3 rounded-lg bg-red-950/20 border border-red-500/30 text-red-400 w-full sm:w-auto">
              <span className="block text-[9px] text-red-400/70 uppercase">Triggers</span>
              MORE USERS + BOOKINGS + SALONS
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-3 rounded-lg bg-white/[0.02] border border-white/10 text-white w-full sm:w-auto">
              MONITOR LOAD
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-3 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] w-full sm:w-auto">
              IDENTIFY BOTTLENECKS
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-3 rounded-lg bg-[#DAAF37]/20 border border-[#DAAF37]/45 text-[#F4D03F] w-full sm:w-auto">
              INCREASE CAPACITY
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-3 rounded-lg bg-[#DAAF37]/30 border border-[#DAAF37]/60 text-white w-full sm:w-auto">
              OPTIMIZE SYSTEM
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-3 rounded-lg bg-[#DAAF37]/45 border border-[#DAAF37]/75 text-[#F4D03F] w-full sm:w-auto">
              CONTINUE SCALE
            </div>
          </div>

          <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed max-w-2xl mx-auto italic">
            &ldquo;Scalability is an ongoing operational process, not a one-time feature.&rdquo;
          </p>
        </div>

        {/* 11. SECTION 11 — SECURITY & SCALABILITY DIFFERENCE */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white/[0.02] border border-white/10 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#DAAF37]" />
                <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider">
                  System Security Role
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                <strong>SECURITY:</strong> Protects data, accounts, systems, and transactions from unauthorized access and potential digital vulnerabilities. Keeps access strictly aligned with business needs.
              </p>
            </div>
            <div className="border-t border-white/10 pt-4 md:pt-0 md:border-t-0 md:border-l md:pl-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-[#DAAF37]" />
                <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider">
                  System Scalability Role
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                <strong>SCALABILITY:</strong> Handles increasing users, salons, booking transactions, and concurrent system loads efficiently without degrading performance or reliability.
              </p>
            </div>
          </div>
        </div>

        {/* 12. SECTION 12 — CURRENT STATUS VS FUTURE CAPABILITY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12 text-left">
          {/* Current Panel */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-wider block mb-1">
                OPERATIONAL MATURITY
              </span>
              <h4 className="text-base font-heading font-bold text-white mb-4">
                CURRENT SYSTEM STATUS
              </h4>
              <ul className="space-y-2 text-xs font-sans text-white/75">
                <li className="flex justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                  <span>Product ecosystem:</span>
                  <strong className="text-emerald-400">READY</strong>
                </li>
                <li className="flex justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                  <span>Verified large-scale commercial usage:</span>
                  <strong className="text-white/50 italic">Data Not Available Yet</strong>
                </li>
                <li className="flex justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                  <span>Verified 1,000-salon production scale:</span>
                  <strong className="text-white/50 italic">Data Not Available Yet</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Future Designed Panel */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-[#DAAF37]/35 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
                SYSTEM SCALABILITY DESIGN
              </span>
              <h4 className="text-base font-heading font-bold text-white mb-4">
                FUTURE / DESIGNED PLANS
              </h4>
              <ul className="space-y-1 text-xs text-white/75 font-sans">
                <li>• Scale infrastructure dynamically with demand</li>
                <li>• Performance optimization loops</li>
                <li>• Comprehensive tracking &amp; logging monitor systems</li>
                <li>• Incremental security hardening &amp; audits</li>
                <li>• Operational access control refinement</li>
              </ul>
            </div>
            <div className="mt-4 p-2.5 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-center text-xs font-heading font-bold text-[#F4D03F]">
              Designed For Progressive Scaling
            </div>
          </div>
        </div>

        {/* 13. SECTION 13 — WHAT MUST BE CONTINUOUSLY IMPROVED */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0B0B0B] border border-white/10 mb-12">
          <h4 className="text-base font-heading font-bold text-white text-center mb-6 uppercase tracking-wider">
            Operational Growth Roadmap
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            {[
              'Security Monitoring',
              'Performance Monitoring',
              'Infrastructure Capacity',
              'Backup & Recovery',
              'Access Control',
              'Software Updates',
              'Third-Party Risk',
              'Incident Response',
            ].map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-center flex flex-col justify-center">
                <span className="text-xs font-heading font-semibold text-white/90 leading-tight">
                  {item}
                </span>
                <span className="text-[9px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider mt-1.5 block">
                  CONTINUOUS
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 14. DUE DILIGENCE PANEL */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white/[0.03] border border-white/15 text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-[#DAAF37]" />
            <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
              Technical Due Diligence Room
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white/75 font-sans max-w-3xl mx-auto leading-relaxed">
            &ldquo;Detailed technical architecture, security controls, infrastructure documentation and relevant access/ownership records can be reviewed during appropriate due diligence.&rdquo; No keys, passwords, database credentials, private repositories, or private servers are published.
          </p>
        </div>

        {/* 15. SHORT LEGAL & PRIVACY LINKS */}
        <div className="flex items-center justify-center gap-4 text-xs font-heading font-bold text-white/40 mb-10">
          <a href="/privacy-policy" className="hover:text-[#DAAF37] transition-colors">Privacy Policy</a>
          <span>·</span>
          <a href="/terms-and-conditions" className="hover:text-[#DAAF37] transition-colors">Terms &amp; Conditions</a>
          <span>·</span>
          <a href="/disclaimer" className="hover:text-[#DAAF37] transition-colors">Disclaimer</a>
        </div>

        {/* 16. HERO TAKEAWAY HERO BOX */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-black via-[#DAAF37]/15 to-black border border-[#DAAF37]/45 text-center shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
            Investor Scalability Statement
          </span>
          <h4 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-white mb-2 tracking-tight uppercase leading-snug">
            &ldquo;READY TO SCALE DOES NOT MEAN SCALE IS ALREADY PROVEN.&rdquo;
          </h4>
          <p className="text-xs sm:text-sm text-white/70 font-sans max-w-2xl mx-auto leading-relaxed">
            Nexora&apos;s technology is prepared for commercial growth, while real-world scale, performance and operational resilience will be continuously validated as usage increases.
          </p>
        </div>
      </section>

      {/* SECTION 18 — PAYMENT / REFUND / CANCELLATION ARCHITECTURE */}
      <section
        id="payment-architecture"
        aria-label="Payment and Refund Architecture Section"
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <CreditCard className="w-3.5 h-3.5 text-[#F4D03F]" />
            18. पेमेंट और रिफंड का सिस्टम
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            Nexora में पैसे का{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              लेनदेन कैसे होता है?
            </span>
          </h2>

          <p className="text-base sm:text-lg font-heading font-medium text-[#F4D03F] mb-4">
            &ldquo;Nexora का पेमेंट सिस्टम ग्राहक, सैलून और कंपनी के हिस्से को बहुत सफाई से अलग रखता है।&rdquo;
          </p>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            इन्वेस्टर्स के लिए यह समझना जरूरी है कि बुकिंग का पैसा कहाँ जाता है, रिफंड कैसे होता है और कंपनी अपना कमीशन कैसे लेती है।
          </p>
        </div>

        {/* 2. ILLUSTRATIVE PAYMENT EXAMPLE FLOW (Visual Money Journey) */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 mb-12 text-center relative overflow-hidden">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#DAAF37] block mb-2">
            पैसे के आने-जाने का रास्ता (Cash Flow Journey)
          </span>
          <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-6 uppercase">
            एक बुकिंग का हिसाब कैसे होता है?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center justify-center max-w-4xl mx-auto mb-8 text-xs font-heading font-bold">
            {/* Step 1: Booking Value */}
            <div className="md:col-span-1 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white flex flex-col justify-center">
              <span className="text-[9px] text-white/50 block uppercase font-sans mb-1">Customer Booking</span>
              <span className="text-base font-extrabold">₹30,000</span>
              <span className="text-[9px] font-medium text-white/60 mt-1">कुल सर्विस वैल्यू</span>
            </div>

            <div className="flex justify-center text-[#DAAF37]"><ArrowRight className="w-4 h-4 hidden md:block" /><ArrowDown className="w-4 h-4 md:hidden" /></div>

            {/* Step 2: Online Advance */}
            <div className="md:col-span-1 p-3.5 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/35 text-[#F4D03F] flex flex-col justify-center">
              <span className="text-[9px] text-[#DAAF37]/80 block uppercase font-sans mb-1">25% Advance</span>
              <span className="text-base font-extrabold">₹7,500</span>
              <span className="text-[9px] font-medium text-white/60 mt-1">ऑनलाइन पेमेंट</span>
            </div>

            <div className="flex justify-center text-[#DAAF37]"><ArrowRight className="w-4 h-4 hidden md:block" /><ArrowDown className="w-4 h-4 md:hidden" /></div>

            {/* Step 3: Platform Distribution Split */}
            <div className="md:col-span-3 p-4 rounded-xl bg-[#070707] border border-white/10 grid grid-cols-2 gap-3 text-left">
              <div className="p-2.5 rounded-lg bg-[#DAAF37]/20 border border-[#DAAF37]/50 text-center">
                <span className="text-[9px] text-[#DAAF37] block uppercase font-sans mb-0.5">Nexora 10% Revenue</span>
                <span className="text-sm font-extrabold text-[#F4D03F]">₹3,000</span>
                <span className="text-[8px] block text-white/50 font-sans mt-0.5">कंपनी का कमीशन</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-center">
                <span className="text-[9px] text-white/60 block uppercase font-sans mb-0.5">Salon advance port</span>
                <span className="text-sm font-extrabold text-white">₹4,500</span>
                <span className="text-[8px] block text-white/50 font-sans mt-0.5">सैलून का हिस्सा</span>
              </div>
            </div>
          </div>

          {/* Checkout Direct Settlement */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 max-w-2xl mx-auto mb-6 text-xs text-white/70 font-sans">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <strong className="text-white block font-heading font-bold mb-0.5 uppercase text-[10px] tracking-wider text-[#DAAF37]">बाकी पेमेंट सैलून पर</strong>
                सर्विस खत्म होने पर ग्राहक बाकी के <strong>₹22,500 (75%)</strong> सीधे सैलून मालिक को देता है।
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/35 text-[#F4D03F] font-heading font-bold">
                ₹22,500 Payout
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-4 border-t border-white/10">
            <div className="p-3 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-xs">
              <span className="text-[9px] text-[#DAAF37] block uppercase font-sans font-bold">सैलून को कुल मिले</span>
              <strong className="text-base text-[#F4D03F] font-heading">₹27,000</strong>
              <p className="text-[9px] text-white/50 mt-0.5 font-sans">(₹4,500 एडवांस + ₹22,500 डायरेक्ट पेमेंट)</p>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/10 text-xs">
              <span className="text-[9px] text-white/50 block uppercase font-sans font-bold">Nexora की कमाई</span>
              <strong className="text-base text-white font-heading">₹3,000</strong>
              <p className="text-[9px] text-white/50 mt-0.5 font-sans">(कुल सर्विस का 10% कमीशन)</p>
            </div>
          </div>

          <p className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#DAAF37] mt-6 bg-[#DAAF37]/10 inline-block px-4 py-1.5 rounded-full border border-[#DAAF37]/30">
            बुकिंग का हिसाब: यह एक उदाहरण है, असल आंकड़े सर्विस के आधार पर बदल सकते हैं
          </p>
        </div>

        {/* 3. VERY IMPORTANT DISTINCTION (BOOKING VALUE ≠ REVENUE) */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-black via-red-950/20 to-black border border-red-500/35 text-center shadow-[0_8px_32px_rgba(0,0,0,0.8)] mb-12">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-red-400 block mb-2">
            जरूरी जानकारी: हिसाब का तरीका
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6">
            बुकिंग की वैल्यू और Nexora की कमाई में फर्क
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center max-w-2xl mx-auto mb-6">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 w-full sm:w-auto">
              <span className="text-[10px] text-white/50 block mb-0.5 uppercase">कुल बुकिंग वैल्यू</span>
              <div className="text-lg sm:text-xl font-heading font-bold text-white">₹30,000</div>
            </div>
            <div className="text-2xl font-bold text-red-400 font-heading">≠</div>
            <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 w-full sm:w-auto">
              <span className="text-[10px] text-red-400 block mb-0.5 uppercase">Nexora की असली कमाई</span>
              <div className="text-lg sm:text-xl font-heading font-bold text-red-300">₹3,000</div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-white/80 font-sans max-w-2xl mx-auto leading-relaxed">
            हम ग्राहक द्वारा सैलून को दिए गए पूरे पैसे को अपनी कमाई नहीं मानते। हमारी कमाई सिर्फ उस पर मिलने वाला 10% कमीशन है।
          </p>
        </div>

        {/* 4. PAYMENT PROVIDER ROLE */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0B0B0B] border border-white/10 text-center mb-12">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
            Third-party gateway isolation
          </span>
          <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-6">
            Transactional Interface Gateway Model
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4 max-w-3xl mx-auto mb-6 text-xs font-heading font-bold">
            <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              CUSTOMER
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-2.5 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 text-[#F4D03F] w-full sm:w-auto">
              PAYMENT PROVIDER / GATEWAY
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white w-full sm:w-auto">
              BOOKING PAYMENT PROCESS
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3.5 py-2.5 rounded-xl bg-[#DAAF37]/25 border border-[#DAAF37]/45 text-[#F4D03F] w-full sm:w-auto">
              APPLICABLE SETTLEMENT / REFUND FLOW
            </div>
          </div>

          <p className="text-xs text-white/60 font-sans max-w-2xl mx-auto leading-relaxed">
            Formal online payment provider relationships will be final-locked during commercial system integration. Nexora is not a regulated payment aggregator, nor does it hold customer funds directly outside standard gateway settlement rules.
          </p>
        </div>

        {/* 5. NEXORA COMMISSION & SALON SETTLEMENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto text-left">
          {/* Platform Commission Panel */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 flex flex-col justify-between hover:border-[#DAAF37]/35 transition-colors">
            <div>
              <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
                REVENUE REALIZATION
              </span>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-4">
                Platform Commission Structure
              </h3>
              
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center mb-5">
                <span className="text-[10px] text-white/50 block uppercase font-sans mb-1">Platform-Level Commission</span>
                <span className="text-2xl font-heading font-extrabold text-[#F4D03F]">10%</span>
                <span className="text-[10px] text-[#DAAF37] block mt-1 font-heading font-bold">Of Full Booked Service Value</span>
              </div>

              {/* Visual Formula */}
              <div className="p-4 rounded-xl bg-black border border-[#DAAF37]/30 text-center mb-4">
                <span className="text-[9px] text-[#DAAF37] block uppercase tracking-wider font-heading font-bold mb-1">
                  Commission Formula
                </span>
                <code className="text-xs text-white font-mono font-bold leading-normal block">
                  BOOKED SERVICE VALUE &times; 10%<br />
                  = NEXORA MODELED COMMISSION
                </code>
                <div className="text-xs text-white/50 font-sans mt-1.5 italic">
                  Illustrative: ₹30,000 booked &times; 10% = ₹3,000 commission
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-white/10 text-xs font-sans text-white/50 italic">
              * Commission is connected strictly to full booking value, not only the advance.
            </div>
          </div>

          {/* Salon Payout Settlement Panel */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 flex flex-col justify-between hover:border-[#DAAF37]/35 transition-colors">
            <div>
              <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
                MERCHANT PAYOUTS
              </span>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-4">
                Salon Settlement Parameters
              </h3>

              <div className="space-y-4 mb-6">
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  Settlement pathways represent the operational mechanisms used to deliver advanced deposits to Salon Partners once booking status has been validated.
                </p>
                <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed bg-white/[0.02] border border-white/5 p-4 rounded-xl italic">
                  &ldquo;The actual salon settlement amount and timing depend on the implemented payment architecture, booking status, applicable Salon Partner terms and payment-provider process.&rdquo;
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-white/10 text-xs font-sans text-white/50 italic">
              * No unverified payout timelines (e.g. Same Day, 24 Hours, or 48 Hours) are assumed here.
            </div>
          </div>
        </div>

        {/* 6. BOOKING CONFIRMATION FLOW */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 text-center mb-12">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
            Verification steps
          </span>
          <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-6">
            Ecosystem Booking Confirmation Loop
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-white/60 font-sans font-bold w-full sm:w-auto">
              BOOKING REQUEST
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden sm:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] sm:hidden" />

            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-white/60 font-sans font-bold w-full sm:w-auto">
              PAYMENT / VERIFICATION
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden sm:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] sm:hidden" />

            <div className="p-3 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-xs text-[#F4D03F] font-sans font-bold w-full sm:w-auto">
              SALON CONFIRMATION WHERE APPLICABLE
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden sm:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] sm:hidden" />

            <div className="p-3 rounded-lg bg-[#DAAF37]/20 border border-[#DAAF37]/45 text-xs text-[#F4D03F] font-sans font-bold w-full sm:w-auto">
              BOOKING CONFIRMED
            </div>
          </div>

          <p className="text-xs text-white/50 font-sans italic max-w-2xl mx-auto mt-5">
            * Operational Rule: System request acknowledgement does not represent a finalized booking. Only formal validation and salon-level system confirmation triggers the active state.
          </p>
        </div>

        {/* 7. CANCELLATION & REFUND PROTOCOLS */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0B0B0B] border border-white/10 text-center mb-12">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
            Disruption handling
          </span>
          <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-6">
            Ecosystem Cancellation Control Flow
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-heading font-bold max-w-3xl mx-auto mb-6">
            <span className="px-3 py-1.5 rounded bg-white/[0.02] border border-white/5 text-white/60">BOOKING</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/30" />
            <span className="px-3 py-1.5 rounded bg-white/[0.02] border border-white/5 text-white/60">CANCELLATION REQUEST</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/30" />
            <span className="px-3 py-1.5 rounded bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F]">CHECK STATUS</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/30" />
            <span className="px-3 py-1.5 rounded bg-[#DAAF37]/15 border border-[#DAAF37]/35 text-[#F4D03F]">CHECK APPLICABLE RULE</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/30" />
            <span className="px-3 py-1.5 rounded bg-white/[0.02] border border-white/10 text-white">ELIGIBILITY REVIEW</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#DAAF37]" />
            <span className="px-3 py-1.5 rounded bg-[#DAAF37]/20 border border-[#DAAF37]/45 text-[#F4D03F]">REFUND / NO REFUND DECISION</span>
          </div>

          <p className="text-xs sm:text-sm text-white/70 font-sans max-w-2xl mx-auto leading-relaxed italic">
            &ldquo;Refund eligibility and cancellation terms are governed strictly by the formal customer terms. Detailed conditions can be reviewed on our dedicated Refund Policy resource.&rdquo;
          </p>
        </div>

        {/* 8. SALON & CUSTOMER CANCELLATION FLOW PANELS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto text-left">
          {/* Salon Cancellation */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between hover:border-[#DAAF37]/35 transition-colors">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
                DISRUPTION PROTOCOLS
              </span>
              <h4 className="text-base font-heading font-bold text-white mb-3">
                Salon-Triggered Cancellation
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                If an onboarded Salon Partner cancels an active booked service due to operational conflicts or scheduling errors:
              </p>

              <div className="flex flex-col gap-2 mb-4 text-xs font-sans font-medium text-white/85">
                <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span>1. SALON CANCELS</span>
                  <span className="text-[10px] font-bold text-red-400">Trigger</span>
                </div>
                <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span>2. BOOKING STATUS REVIEW</span>
                  <span className="text-[10px] text-white/40">Evaluation</span>
                </div>
                <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span>3. CUSTOMER COMMUNICATION</span>
                  <span className="text-[10px] text-white/40">Alert</span>
                </div>
                <div className="p-2 rounded bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-between text-[#F4D03F]">
                  <span>4. APPLICABLE REFUND / RESOLUTION</span>
                  <span className="text-[10px] font-bold">Outcome</span>
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-white/10 text-[10px] text-white/50 font-sans">
              * Resolving salon cancels helps protect platform-wide consumer trust.
            </div>
          </div>

          {/* Customer Cancellation */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between hover:border-[#DAAF37]/35 transition-colors">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
                DISRUPTION PROTOCOLS
              </span>
              <h4 className="text-base font-heading font-bold text-white mb-3">
                Customer-Triggered Cancellation
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                If a registered customer cancels their booking, refund eligibility is checked based on timing and merchant-specific guidelines:
              </p>

              <div className="flex flex-col gap-2 mb-4 text-xs font-sans font-medium text-white/85">
                <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span>1. CUSTOMER CANCELS</span>
                  <span className="text-[10px] font-bold text-red-400">Trigger</span>
                </div>
                <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span>2. BOOKING STATUS + CANCELLATION TERMS</span>
                  <span className="text-[10px] text-white/40">Evaluation</span>
                </div>
                <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span>3. REFUND ELIGIBILITY Check</span>
                  <span className="text-[10px] text-white/40">Review</span>
                </div>
                <div className="p-2 rounded bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-between text-[#F4D03F]">
                  <span>4. APPLICABLE ACTION</span>
                  <span className="text-[10px] font-bold">Outcome</span>
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-white/10 text-[10px] text-white/50 font-sans">
              * No arbitrary cancellation hours or custom refund ratios are invented.
            </div>
          </div>
        </div>

        {/* 9. FAILED, PENDING, SUCCESSFUL-BUT-FAILED TRANSACTION PROTOCOLS */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 mb-12">
          <h4 className="text-base font-heading font-bold text-white text-center mb-6 uppercase tracking-wider">
            Failed &amp; Exception Transaction Handling
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left text-xs font-sans">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <strong className="text-white block font-heading font-bold text-xs uppercase tracking-wide mb-1.5 text-red-400">1. PAYMENT FAILED</strong>
                <p className="text-white/70 leading-relaxed">
                  Session terminates; booking is discarded and not recorded in calendars. No payment is drawn.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <strong className="text-white block font-heading font-bold text-xs uppercase tracking-wide mb-1.5 text-[#F4D03F]">2. PAYMENT PENDING</strong>
                <p className="text-white/70 leading-relaxed">
                  Gateway verification active; calendar slot temporarily held pending processing response.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <strong className="text-white block font-heading font-bold text-xs uppercase tracking-wide mb-1.5 text-emerald-400">3. SUCCESSFUL BUT FAILED BOOKING</strong>
                <p className="text-white/70 leading-relaxed">
                  Rare session mismatch; transaction recorded and routed for support review and resolution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 10. DUPLICATE PAYMENT RESOLUTION */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white/[0.02] border border-white/10 mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div className="max-w-lg">
              <h4 className="text-sm sm:text-base font-heading font-bold text-white uppercase tracking-wider mb-2">
                Duplicate Transaction Resolution
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                If network dropouts or gateway retry triggers a duplicate payment for the same booking request, the transaction is reconciled against ledger records to confirm double charges before routing to the gateway for resolution.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-heading font-bold text-white/80 bg-white/[0.02] border border-white/5 p-3 rounded-xl shrink-0">
              <span>DUPLICATE</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#DAAF37]" />
              <span>VERIFY</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#DAAF37]" />
              <span>REFUND</span>
            </div>
          </div>
        </div>

        {/* 11. REFUND FLOW & GATEWAY STATUSES */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0B0B0B] border border-white/10 mb-12">
          <div className="text-center mb-6">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
              FINANCIAL RESOLUTION
            </span>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
              Ecosystem Refund &amp; Processing Flows
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4 max-w-4xl mx-auto mb-8 text-xs font-heading font-bold">
            <div className="px-3 py-2 rounded-lg bg-white/[0.02] border border-white/10 text-white w-full sm:w-auto">
              ELIGIBLE REFUND
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3 py-2 rounded-lg bg-white/[0.02] border border-white/10 text-white w-full sm:w-auto">
              REFUND REQUEST / APPROVAL
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3 py-2 rounded-lg bg-white/[0.02] border border-white/10 text-[#F4D03F] w-full sm:w-auto">
              PAYMENT PROVIDER PROCESSING
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3 py-2 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/35 text-[#F4D03F] w-full sm:w-auto">
              REFUND STATUS
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden lg:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] lg:hidden" />

            <div className="px-3 py-2 rounded-lg bg-[#DAAF37]/25 border border-[#DAAF37]/50 text-white w-full sm:w-auto">
              CUSTOMER BANK / PAYMENT METHOD
            </div>
          </div>

          <p className="text-xs text-white/50 font-sans italic max-w-xl mx-auto mb-6">
            * Warning: Actual credit timing may depend on the specific payment provider or bank processing. No fixed timeline is contractually promised here.
          </p>

          <div className="pt-4 border-t border-white/5">
            <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-white/40 block mb-3 text-center">
              Reconciled Gateway Status Labels
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto text-[10px] font-heading font-bold">
              {['Refund Requested', 'Under Review', 'Approved', 'Processing', 'Processed', 'Failed', 'Rejected', 'Completed'].map((status, idx) => (
                <span key={idx} className="p-2 rounded bg-white/[0.02] border border-white/5 text-white/70">
                  {status}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 12. DISPUTES / CHARGEBACKS */}
        <div className="max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#090909] border border-white/10 mb-8 text-left sm:text-center">
          <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-2">
            Disputes &amp; Chargebacks Handling
          </h4>
          <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed max-w-2xl mx-auto">
            Payment disputes or chargebacks may involve the payment provider or issuing bank independently of Nexora&apos;s internal support. Nexora verifies transaction records and submits evidence. No final decision is controlled by Nexora.
          </p>
        </div>

        {/* 13. FRAUD / PAYMENT SECURITY RISKS */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-[#DAAF37]/25 mb-12">
          <h4 className="text-base font-heading font-bold text-white text-center mb-6 uppercase tracking-wider">
            Transactional Security &amp; Fraud Monitoring
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3.5 text-center text-xs font-heading font-semibold">
            {[
              'Prevent fraudulent bookings',
              'Verify transactions',
              'Monitor suspicious activity',
              'Protect account access',
              'Restrict unauthorized actions',
            ].map((risk, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-center">
                <span className="text-[#F4D03F]">{risk}</span>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-white/45 font-sans leading-relaxed text-center mt-5">
            * Security Disclaimer: Fraud-mitigation safeguards and monitoring protocols reduce transactional risk, but do not imply 100% fraud prevention or zero payment risks.
          </p>
        </div>

        {/* 14. CUSTOMER SAFETY WARNING (SUPPORT OTP PIN NOTICE) */}
        <div className="max-w-3xl mx-auto p-6 rounded-3xl bg-[#0D0D0D] border border-red-500/20 shadow-[0_12px_36px_rgba(0,0,0,0.8)] mb-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-950/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="text-left font-sans">
              <span className="text-xs font-heading font-bold text-red-400 uppercase tracking-widest block mb-1">
                CRITICAL CONSUMER SECURITY WARNING
              </span>
              <h4 className="text-base font-heading font-bold text-white mb-2">
                NEXORA SUPPORT WILL NEVER NEED:
              </h4>
              <div className="flex flex-wrap gap-2 text-xs font-heading font-bold text-red-400 mb-3">
                {['OTP', 'UPI PIN', 'CVV', 'Password', 'Card Credentials'].map((term, idx) => (
                  <span key={idx} className="px-2 py-1 rounded bg-red-500/10 border border-red-500/30">
                    {term}
                  </span>
                ))}
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Customers and Salon Partners should never share sensitive payment credentials. Nexora support staff do not require, and will never request, full card details, security codes, or account passwords.
              </p>
            </div>
          </div>
        </div>

        {/* 15. INVESTOR RISK & CONTROL LAYER VIEW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto text-left">
          {/* Risk Panel */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-red-400 uppercase tracking-wider block mb-1">
                TRANSACTIONAL RISKS
              </span>
              <h4 className="text-base font-heading font-bold text-white mb-4">
                INVESTOR RISK VIEW
              </h4>
              <ul className="space-y-1.5 text-xs text-white/70 font-sans">
                <li>• Gateway downtime or connectivity failure</li>
                <li>• Transaction processing failure rates</li>
                <li>• Salon vs. customer refund disputes</li>
                <li>• Chargeback and billing discrepancy claims</li>
                <li>• Cancellation and calendar vacancy loss</li>
                <li>• Card fraud and fraudulent booking requests</li>
              </ul>
            </div>
          </div>

          {/* Control Panel */}
          <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-[#DAAF37]/35 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
                MITIGATION SAFEGUARDS
              </span>
              <h4 className="text-base font-heading font-bold text-white mb-4">
                PLATFORM CONTROL LAYERS
              </h4>
              <ul className="space-y-1.5 text-xs text-white/75 font-sans">
                <li>• Strict transaction ledger verification</li>
                <li>• Licensed payment-provider routing</li>
                <li>• Meticulous booking and calendar records</li>
                <li>• Contractually agreed refund rules</li>
                <li>• Dedicated support and grievance channels</li>
                <li>• Transaction audit trail where implemented</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 16. ACTUAL VS MODEL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12 text-left">
          {/* Actual Card */}
          <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-wider block mb-1">
                TECHNICAL CAPABILITY
              </span>
              <h4 className="text-base font-heading font-bold text-white mb-4">
                ACTUAL IMPLEMENTATION
              </h4>
              <p className="text-xs text-white/60 font-sans leading-relaxed">
                Platform transaction, commission split, refund trigger, and payment gateway controls represent the planned operational code layers to be validated against live payment provider APIs.
              </p>
            </div>
            <div className="mt-4 p-2 rounded-lg bg-white/[0.04] border border-white/5 text-center text-xs text-white/50">
              Only verified technical behavior and system statuses apply.
            </div>
          </div>

          {/* Illustrative Card */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-[#DAAF37]/30 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
                FINANCIAL MODELING
              </span>
              <h4 className="text-base font-heading font-bold text-white mb-4">
                ILLUSTRATIVE BUSINESS MODEL
              </h4>
              <ul className="space-y-1.5 text-xs text-white/70 font-sans">
                <li>• Booked Service Value: <strong>₹30,000</strong></li>
                <li>• Online Reservation Advance: <strong>₹7,500 (25%)</strong></li>
                <li>• Platform commission portion: <strong>₹3,000 (10%)</strong></li>
                <li>• Salon advance portion: <strong>₹4,500</strong></li>
                <li>• Remaining checkout payment: <strong>₹22,500 (75%)</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 17. SHORT LEGAL REFERENCE LINKS */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-heading font-bold text-white/40 mb-10">
          <a href="/refund-policy" className="hover:text-[#DAAF37] transition-colors">Refund &amp; Cancellation Policy</a>
          <span>·</span>
          <a href="/terms" className="hover:text-[#DAAF37] transition-colors">Terms &amp; Conditions</a>
          <span>·</span>
          <a href="/privacy" className="hover:text-[#DAAF37] transition-colors">Privacy Policy</a>
          <span>·</span>
          <a href="/support" className="hover:text-[#DAAF37] transition-colors">Grievance &amp; Support</a>
        </div>

        {/* 18. END TAKEAWAY HERO BOX */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-black via-[#DAAF37]/15 to-black border border-[#DAAF37]/45 text-center shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
            Investor Takeaway
          </span>
          <h4 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-white mb-2 tracking-tight uppercase leading-snug">
            &ldquo;Payment is not just a collection step — it is a controlled flow between customer, salon, payment provider, booking status, commission and refund handling.&rdquo;
          </h4>
          <p className="text-xs sm:text-sm text-white/70 font-sans max-w-2xl mx-auto leading-relaxed">
            Nexora&apos;s actual financial and payment performance will depend on real transaction volume, successful settlements, cancellations, refunds and payment-provider processing.
          </p>
        </div>
      </section>

      {/* SECTION 19 — LEGAL ENTITY & INVESTMENT DOCUMENTS */}
      <section
        id="legal-entity-documents"
        aria-label="Legal Entity & Investment Documents Section"
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-[#DAAF37]/25"
      >
        {/* Subtle Ambient Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[400px] bg-gradient-to-b from-[#DAAF37]/[0.06] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Status Badge inside a beautiful, subtle container matching zero-pill discipline */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/35 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Scale className="w-3.5 h-3.5 text-[#F4D03F]" />
            लीगल कंपनी और इन्वेस्टमेंट के पेपर्स
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4">
            इन्वेस्टर असल में किस{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              कंपनी में इन्वेस्ट
            </span>{' '}
            करेगा?
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-sans max-w-3xl mx-auto leading-relaxed">
            Nexora ब्रांड और लीगल कंपनी के फर्क को समझना जरूरी है। आपका निवेश और मालिकाना हक सरकारी रजिस्टर्ड कंपनी के पेपर्स पर आधारित होगा।
          </p>
        </div>

        {/* SECTION 1 — NEXORA BRAND VS LEGAL ENTITY */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: Brand */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-[#0A0A0A] border border-white/10 hover:border-[#DAAF37]/40 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
            <span className="text-xs font-heading font-semibold text-[#DAAF37] uppercase tracking-wider block mb-2">
              ब्रांड का नाम
            </span>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              NEXORA ONE
            </h3>
            <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
              <strong>Nexora One</strong> हमारे पूरे सिस्टम, प्लेटफॉर्म और नेटवर्क का ब्रांड नाम है। यह हमारी कमर्शियल पहचान है।
            </p>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-white/50 font-sans italic">
              * ध्यान दें: ब्रांड का नाम खुद एक लीगल कंपनी नहीं है, बल्कि हमारे काम करने की पहचान है।
            </div>
          </div>

          {/* Card 2: Legal Entity */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#DAAF37]/5 to-[#0D0D0D] border border-[#DAAF37]/35 shadow-[0_12px_40px_rgba(218,175,55,0.08)]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-heading font-semibold text-[#F4D03F] uppercase tracking-wider">
                लीगल कंपनी (एंटिटी)
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] font-heading text-amber-300">
                जल्द ही कंफर्म होगी
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4 tracking-tight uppercase">
              LEGAL ENTITY
            </h3>
            <p className="text-sm sm:text-base text-white/85 font-sans leading-relaxed">
              निवेश और मालिकाना हक उसी कंपनी के जरिए होगा जो फाइनल एग्रीमेंट और शेयर अलॉटमेंट प्रोसेस में बताई जाएगी।
            </p>
            <div className="mt-6 pt-4 border-t border-[#DAAF37]/15 text-xs text-[#F4D03F] font-sans">
              यह हमारी लीगल टीम और एडवाइजरी काउंसिल द्वारा तय किया जाएगा।
            </div>
          </div>
        </div>

        {/* SECTION 2 — INVESTMENT ENTITY FLOW */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.03] to-black border border-white/10 mb-12">
          <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-4 text-center">
            इन्वेस्टमेंट से मालिकाना हक तक का सफर
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 lg:gap-4 max-w-4xl mx-auto text-xs font-heading font-bold text-center">
            <div className="px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-white w-full md:w-auto min-w-[120px]">
              INVESTOR
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden md:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] md:hidden" />

            <div className="px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-[#F4D03F] w-full md:w-auto">
              जरूरी कानूनी पेपर्स
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden md:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] md:hidden" />

            <div className="px-4 py-2.5 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/35 text-[#F4D03F] w-full md:w-auto">
              लीगल कंपनी
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden md:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] md:hidden" />

            <div className="px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-white w-full md:w-auto">
              शेयर्स / इक्विटी
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden md:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] md:hidden" />

            <div className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-black via-[#DAAF37]/20 to-black border-2 border-[#DAAF37] text-white w-full md:w-auto">
              इन्वेस्टर का अधिकार
            </div>
          </div>
          <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed text-center mt-6 max-w-3xl mx-auto">
            आपका असली अधिकार शेयर्स और एग्रीमेंट के जरिए तय होगा। मार्केटिंग मटेरियल को फाइनल लीगल क्लेम न समझें।
          </p>
        </div>

        {/* SECTION 3 — INVESTMENT SE PEHLE KYA VERIFY KAREN? */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#080808] border border-white/10 mb-12">
          <div className="text-center mb-8">
            <span className="text-xs font-heading font-semibold text-[#DAAF37] uppercase tracking-wider block mb-1">
              DUE DILIGENCE PROTOCOL
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              इन्वेस्टमेंट से पहले क्या-क्या चेक कर सकते हैं?
            </h3>
            <p className="text-xs sm:text-sm text-white/60 font-sans mt-2">
              इन्वेस्टमेंट करने से पहले आपको कंपनी के इन जरूरी डॉक्यूमेंट्स की समरी दी जाएगी ताकि आप सब कुछ अच्छे से समझ सकें।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Certificate of Incorporation', desc: 'कंपनी के रजिस्ट्रेशन का आधिकारिक सर्टिफिकेट।', status: 'TO BE VERIFIED', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
              { name: 'Memorandum of Association (MOA)', desc: 'कंपनी के मुख्य उद्देश्य और काम करने का कानूनी ढांचा।', status: 'TO BE FINALIZED', color: 'text-red-400 bg-red-500/10 border-red-500/20' },
              { name: 'Articles of Association (AOA)', desc: 'कंपनी मैनेजमेंट और डायरेक्टर्स के काम करने के नियम।', status: 'TO BE FINALIZED', color: 'text-red-400 bg-red-500/10 border-red-500/20' },
              { name: 'Company PAN Card Details', desc: 'टैक्स और बैंकिंग ट्रांजेक्शन के लिए कंपनी का पैन कार्ड।', status: 'TO BE VERIFIED', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
              { name: 'Company GSTIN Details', desc: 'जीएसटी रजिस्ट्रेशन और कंप्लायंस के पेपर्स।', status: 'TO BE VERIFIED', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
              { name: 'Proposed Cap Table Model', desc: 'कंपनी में किसकी कितनी हिस्सेदारी होगी, इसका पूरा चार्ट।', status: 'VERIFIED / AVAILABLE', color: 'text-[#F4D03F] bg-[#DAAF37]/10 border-[#DAAF37]/30' },
              { name: 'Valuation Support Model', desc: 'कंपनी की ₹5 करोड़ वैल्यू कैसे तय हुई, उसका गणित।', status: 'VERIFIED / AVAILABLE', color: 'text-[#F4D03F] bg-[#DAAF37]/10 border-[#DAAF37]/30' },
              { name: 'Board / Shareholder Resolutions', desc: 'इन्वेस्टमेंट और शेयर्स बांटने के लिए बोर्ड की मंजूरी।', status: 'TO BE FINALIZED', color: 'text-red-400 bg-red-500/10 border-red-500/20' },
              { name: 'Investor Term Sheet & Agreement', desc: 'इन्वेस्टमेंट की शर्तें, शेयर्स की संख्या और एग्जिट पॉलिसी।', status: 'TO BE FINALIZED', color: 'text-red-400 bg-red-500/10 border-red-500/20' },
              { name: 'Shareholders Agreement (SHA)', desc: 'फाउंडर्स और इन्वेस्टर्स के बीच आपसी तालमेल के नियम।', status: 'TO BE FINALIZED', color: 'text-red-400 bg-red-500/10 border-red-500/20' },
              { name: 'Operational & Financial Models', desc: 'अगले कुछ सालों के बिजनेस और मुनाफे का विस्तृत प्लान।', status: 'Available for Due Diligence', color: 'text-white bg-white/5 border-white/10' },
              { name: 'IP & Code Asset Ownership Docs', desc: 'सॉफ्टवेयर कोड और ब्रांड के मालिकाना हक के दस्तावेज।', status: 'Available for Due Diligence', color: 'text-white bg-white/5 border-white/10' },
            ].map((doc, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-sm font-heading font-bold text-white leading-tight">
                      {doc.name}
                    </span>
                    <FileText className="w-4 h-4 text-white/30" />
                  </div>
                  <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                    {doc.desc}
                  </p>
                </div>
                <div className={`px-2.5 py-1 rounded text-[10px] font-heading font-semibold text-center border ${doc.color}`}>
                  {doc.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4 — INVESTOR DOCUMENT FLOW */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 mb-12">
          <div className="text-center mb-6">
            <span className="text-xs font-heading font-semibold text-[#DAAF37] uppercase tracking-wider block mb-1">
              THE JOURNEY
            </span>
            <h3 className="text-xl font-heading font-bold text-white">
              इन्वेस्टर ऑनबोर्डिंग का सफर
            </h3>
            <p className="text-xs text-white/50 font-sans mt-1">
              पूछताछ से लेकर मालिकाना हक मिलने तक के कदम:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-center text-xs font-heading font-semibold">
            {[
              { step: '01', title: 'Investor Enquiry', desc: 'अपनी जानकारी सबमिट करें' },
              { step: '02', title: 'Initial Discussion', desc: 'मॉडल और प्लान पर चर्चा' },
              { step: '03', title: 'Due Diligence Access', desc: 'डेटा रूम में डॉक्यूमेंट्स चेक करें' },
              { step: '04', title: 'Financial Review', desc: 'वैल्यूएशन और निवेश तय करें' },
              { step: '05', title: 'Formal Agreement Draft', desc: 'एग्रीमेंट के ड्राफ्ट को रिव्यू करें' },
              { step: '06', title: 'Required Approvals', desc: 'बोर्ड से जरूरी मंजूरी लें' },
              { step: '07', title: 'Transaction Payment', desc: 'तय बैंक अकाउंट में फंड ट्रांसफर' },
              { step: '08', title: 'Share Allotment Issue', desc: 'कंपनी द्वारा शेयर्स जारी करना' },
              { step: '09', title: 'Ownership Records Map', desc: 'सरकारी रिकॉर्ड में नाम दर्ज होना' },
            ].map((stepObj, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between text-left group hover:border-[#DAAF37]/30 transition-colors">
                <div>
                  <span className="text-[10px] font-heading font-bold text-[#DAAF37] block mb-1">
                    STEP {stepObj.step}
                  </span>
                  <h4 className="text-xs font-heading font-bold text-white group-hover:text-[#FFF2B2] transition-colors leading-tight mb-1">
                    {stepObj.title}
                  </h4>
                </div>
                <p className="text-[11px] text-white/60 font-sans mt-2">
                  {stepObj.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-white/45 font-sans italic text-center mt-4">
            * यह प्रक्रिया लीगल टीम और सरकारी नियमों के हिसाब से थोड़ा बदल सकती है।
          </p>
        </div>

        {/* SECTIONS 5 & 6 — AGREEMENTS & UNDERTAKINGS */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 5: Investor Agreement */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0C0C0C] to-black border border-white/10 hover:border-[#DAAF37]/40 transition-colors shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F]">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-heading font-semibold text-[#DAAF37] uppercase tracking-wider block">
                    PRIMARY CONTRACT
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white">
                    INVESTOR AGREEMENT
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-6">
                Investment amount, equity share, rights, obligations aur transaction terms formal agreement mein clearly defined honge. <strong className="text-[#DAAF37]">Subject to final executed agreement.</strong>
              </p>

              <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-white/40 block mb-3">
                Included Terms Drafts (Sample Parameters):
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/70 font-sans">
                {['Investment Amount', 'Equity Holding %', 'Class of Shares', 'Investor Voting Rights', 'Specified Use of Funds', 'Financial Reports schedule', 'Secondary Transfer Rules', 'Anti-Dilution Rights', 'Corporate Tax Obligations', 'Dispute Resolution Route'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckSquare className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 6: Shareholders' Agreement */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0C0C0C] to-black border border-white/10 hover:border-[#DAAF37]/40 transition-colors shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-heading font-semibold text-[#DAAF37] uppercase tracking-wider block">
                    GOVERNANCE COMPACT
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white">
                    SHAREHOLDERS&apos; AGREEMENT
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-6">
                Jahan applicable ho, shareholders ke mutual rights, transfer restrictions, dilution policies, founder relationships aur core governance parameters ko standard rule book mein formalize kiya ja sakta hai.
              </p>

              <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-white/40 block mb-3">
                Governance Framework:
              </span>
              <ul className="space-y-2.5 text-xs text-white/70 font-sans mb-4">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#DAAF37] flex-shrink-0 mt-0.5" />
                  <span>Relationship guidelines between Founders, Investors, and the operating board.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#DAAF37] flex-shrink-0 mt-0.5" />
                  <span>Mutual consent requirements for major corporate events (e.g. key asset sale, brand pivots).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#DAAF37] flex-shrink-0 mt-0.5" />
                  <span>Transfer parameters (ROFR / Tag-along / Drag-along) which govern any future secondary transactions.</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 p-2 rounded bg-white/[0.02] border border-white/5 text-center text-[10px] text-white/50 font-sans">
              * Note: Corporate structure finalized hone par hi draft draft aur sign kiya ja sakega.
            </div>
          </div>
        </div>

        {/* SECTION 7 — CAP TABLE PROPOSED MODEL */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#090909] border border-white/10 mb-12">
          <div className="text-center mb-6">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
              EQUITY ALLOCATION BASICS
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
              CURRENT PROPOSED / MODEL STRUCTURE
            </h3>
            <p className="text-xs text-[#F4D03F] font-sans italic mt-1">
              Please note: Shares are not yet allotted. This is a baseline illustrative cap table modeling for the angel syndicate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left: Cap table percentages */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-heading font-bold text-white/40 uppercase block mb-1">PROPOSED ALLOCATION</span>
                  <h4 className="text-base font-heading font-bold text-white">Founder &amp; Existing Ownership</h4>
                </div>
                <div className="text-2xl font-mono font-bold text-[#DAAF37]">90%</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-[#DAAF37]/35 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase block mb-1">SYNDICATE POOL</span>
                  <h4 className="text-base font-heading font-bold text-[#FFF2B2]">Angel Investor Syndicate Pool</h4>
                </div>
                <div className="text-2xl font-mono font-bold text-[#FFF2B2]">10%</div>
              </div>
            </div>

            {/* Right: Key Units */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3.5">
              <span className="text-[10px] font-heading font-bold uppercase text-white/50 block">Investment Metric Models:</span>
              <div className="flex items-center justify-between border-b border-white/5 pb-2 text-xs">
                <span className="text-white/70">Single Angel Ticket Price:</span>
                <span className="text-white font-mono font-bold">₹5,00,000</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2 text-xs">
                <span className="text-white/70">Allotted Equity Per Ticket:</span>
                <span className="text-white font-mono font-bold">1.0% Equity</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2 text-xs">
                <span className="text-white/70">Maximum Angel Capacity:</span>
                <span className="text-white font-sans font-bold">10 Investors Pool</span>
              </div>
              <p className="text-[11px] text-white/50 font-sans leading-relaxed pt-1">
                Investor ko 1% ownership claims ka baseline metrics proposed rules ke through secure kiya jayega, subject to final corporate filings.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 8 & SECTION 9 — AFTER INVESTMENT & DELIVERABLES */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 8: What happens after investment */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0A0A0A] to-black border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
                COMPLIANCE & ALLOTMENT
              </span>
              <h4 className="text-lg font-heading font-bold text-white mb-4 uppercase">
                What Happens After Investment?
              </h4>

              <div className="flex flex-col gap-3 text-xs text-white/80 font-sans">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#DAAF37] text-[10px] font-bold shrink-0">1</div>
                  <p><strong>Formal Documentation:</strong> Final investor and SHA agreement copy draft signed between company authorized representative and investor.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#DAAF37] text-[10px] font-bold shrink-0">2</div>
                  <p><strong>Corporate Approvals:</strong> Board resolution passes authorized corporate filings for syndicate equity pool release.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#DAAF37] text-[10px] font-bold shrink-0">3</div>
                  <p><strong>Allotment & Filings:</strong> Standard ROC share issuance, allotment filings, and legal registration on current operating company directories.</p>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-amber-300 font-sans leading-relaxed mt-6 pt-3 border-t border-white/5">
              * Legal note: Timeline and execution dates are subject to statutory company legal advisors. No exact allotment time limit is guaranteed here.
            </p>
          </div>

          {/* Card 9: What records does the investor receive */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#090909] border border-[#DAAF37]/35 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#F4D03F] uppercase tracking-wider block mb-1">
                LEGAL RECORD DELIVERABLES
              </span>
              <h4 className="text-lg font-heading font-bold text-white mb-4 uppercase">
                Investor Ko Kya Record Milega?
              </h4>

              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Investment complete hone par, compliance approvals ke baad standard accounting/legal rules ke through niche diye records verify karke submit kiye jayenge (where applicable):
              </p>

              <ul className="space-y-2.5 text-xs text-white/85 font-sans">
                {['Investment Receipt & Confirmation Ledger Record', 'Applicable Share / Allotment Certificate', 'Updated Cap Table showing ownership matrix', 'Fully Executed Legal Agreements with digital sign-offs', 'Statutory filing receipts with ROC (where applicable)'].map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckSquare className="w-4 h-4 text-[#DAAF37] flex-shrink-0 mt-0.5" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 text-[10px] text-white/50 font-sans">
              Subject to final legal structures and standard incorporation formats.
            </div>
          </div>
        </div>

        {/* SECTION 10 — DUE DILIGENCE FOUNDATIONS */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#070707] border border-[#DAAF37]/30 shadow-[0_12px_36px_rgba(218,175,55,0.05)] mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/35 text-[#F4D03F] text-[10px] font-heading font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F4D03F]" />
                INVESTOR DUE DILIGENCE FOUNDATION
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4">
                Investor Due Diligence Kaise Hogi?
              </h3>
              <p className="text-sm text-white/80 font-sans leading-relaxed mb-4">
                Investor investment se pehle available company, financial, technology aur legal records verify kar sakta hai, subject to confidentiality rules.
              </p>
              <p className="text-xs text-white/60 font-sans leading-relaxed mb-4">
                Humari transparency protocol ke anusaar, genuine investors ko critical details review karne ke liye secure sandbox access diya jata hai.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-white/85 font-sans">
                {['Proposed Financial Models', 'Incorporation Scopes', 'Technology & Platform Demos', 'Key Merchant Partnerships', 'Regulatory Tax Ledgers', 'Advisory Agreements'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#DAAF37] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-left">
              <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-white/40 block mb-2">
                Controlled Diligence Environment:
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Sensitive private documents ko publicly leak nahi kiya ja sakta. Yeh records strictly controlled and protected environment (Private Data Room) ke through review karne milenge.
              </p>
              <div className="p-3 rounded-lg bg-[#DAAF37]/5 border border-[#DAAF37]/20 flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-[#DAAF37] flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#F4D03F] font-sans leading-snug">
                  Data Room access verify karne ke liye complete confidentiality NDA compliance verification zaroori hai.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 11 — IMPORTANT DISTINCTION */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/20 via-black to-red-950/20 border-2 border-red-500/30 shadow-[0_16px_48px_rgba(0,0,0,0.8)] mb-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 via-amber-500/40 to-red-500/50" />
          <div className="flex items-center justify-center gap-2.5 text-red-400 text-xs font-heading font-bold uppercase tracking-[0.25em] mb-4">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            CRITICAL WARNING FOR REGISTERED INVESTORS
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white tracking-tight uppercase leading-none mb-3">
            WEBSITE INFORMATION ≠ FINAL LEGAL AGREEMENT
          </h3>

          <p className="text-sm sm:text-base text-white/95 font-sans leading-relaxed max-w-3xl mx-auto mb-4">
            Website par di gayi details investor ko business model aur proposed structure explain karne ke liye hain. Investor ke core rights, liability, and ownership claims formal legal agreements aur executed documents se hi decide aur enforce honge.
          </p>

          <p className="text-xs text-white/60 font-sans max-w-2xl mx-auto leading-relaxed italic">
            * Website data ko investment contract, offer letter or guaranteed corporate allotment rules nahi samjha jaye. Public representations are strictly informational.
          </p>
        </div>

        {/* SECTION 12 — INVESTMENT PAYMENT (Interactive Enquiry Form) */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-[#111] via-black to-[#080808] border border-[#DAAF37]/45 shadow-[0_16px_48px_rgba(0,0,0,0.8),0_0_30px_rgba(218,175,55,0.12)]">
          <div className="text-center mb-8 border-b border-white/10 pb-6">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#DAAF37] block mb-2">
              COMPLIANCE ORIENTED ENQUIRY
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              INVESTOR ENQUIRY &amp; REQUEST INFORMATION
            </h3>
            <p className="text-xs sm:text-sm text-[#F4D03F] font-sans leading-relaxed max-w-2xl mx-auto">
              Actual investment payment legal approvals, comprehensive due diligence, and mutual agreement sign hone ke baad hi accept kiya jayega. Yahan koi instant payment gateway available nahi hai.
            </p>
          </div>

          {!enquirySubmitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEnquiryError('');

                // Validation
                if (!enquiryName.trim() || !enquiryEmail.trim() || !enquiryMessage.trim()) {
                  setEnquiryError('Kripya apna Name, Email aur Message fields fill karein.');
                  return;
                }

                setIsEnquirySubmitting(true);

                // Simulate secure submission API delay
                setTimeout(() => {
                  setIsEnquirySubmitting(false);
                  setEnquirySubmitted(true);
                }, 1500);
              }}
              className="space-y-4 max-w-2xl mx-auto text-left font-sans"
            >
              {enquiryError && (
                <div className="p-3.5 rounded-lg bg-red-950/40 border border-red-500/40 text-red-200 text-xs font-medium">
                  {enquiryError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="enquiry-name" className="block text-xs font-heading font-semibold uppercase tracking-wider text-white/70 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    required
                    disabled={isEnquirySubmitting}
                    value={enquiryName}
                    onChange={(e) => setEnquiryName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-[#DAAF37] focus:outline-none focus:ring-1 focus:ring-[#DAAF37] text-white text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="enquiry-email" className="block text-xs font-heading font-semibold uppercase tracking-wider text-white/70 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="enquiry-email"
                    type="email"
                    required
                    disabled={isEnquirySubmitting}
                    value={enquiryEmail}
                    onChange={(e) => setEnquiryEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-[#DAAF37] focus:outline-none focus:ring-1 focus:ring-[#DAAF37] text-white text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="enquiry-phone" className="block text-xs font-heading font-semibold uppercase tracking-wider text-white/70 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    id="enquiry-phone"
                    type="tel"
                    disabled={isEnquirySubmitting}
                    value={enquiryPhone}
                    onChange={(e) => setEnquiryPhone(e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-[#DAAF37] focus:outline-none focus:ring-1 focus:ring-[#DAAF37] text-white text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="enquiry-tickets" className="block text-xs font-heading font-semibold uppercase tracking-wider text-white/70 mb-1">
                    Proposed Investment Level *
                  </label>
                  <select
                    id="enquiry-tickets"
                    disabled={isEnquirySubmitting}
                    value={enquiryTickets}
                    onChange={(e) => setEnquiryTickets(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 hover:border-white/20 focus:border-[#DAAF37] focus:outline-none focus:ring-1 focus:ring-[#DAAF37] text-white text-sm transition-all"
                  >
                    <option value="1">1 Ticket — ₹5,00,000 (1% Proposed Equity)</option>
                    <option value="2">2 Tickets — ₹10,00,000 (2% Proposed Equity)</option>
                    <option value="custom">Custom / Other Proposed Structure</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="enquiry-message" className="block text-xs font-heading font-semibold uppercase tracking-wider text-white/70 mb-1">
                  Message / Due Diligence Requests *
                </label>
                <textarea
                  id="enquiry-message"
                  rows={4}
                  required
                  disabled={isEnquirySubmitting}
                  value={enquiryMessage}
                  onChange={(e) => setEnquiryMessage(e.target.value)}
                  placeholder="Kripya apne background aur questions ke baare mein likhein..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-[#DAAF37] focus:outline-none focus:ring-1 focus:ring-[#DAAF37] text-white text-sm transition-all resize-none"
                />
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={isEnquirySubmitting}
                  className={`px-8 py-3.5 rounded-full bg-[#DAAF37] hover:bg-[#F4D03F] text-black text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_6px_24px_rgba(218,175,55,0.35)] hover:shadow-[0_8px_32px_rgba(218,175,55,0.55)] transition-all shrink-0 ${isEnquirySubmitting ? 'opacity-80 cursor-wait' : ''}`}
                >
                  {isEnquirySubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      SUBMITTING ENQUIRY...
                    </>
                  ) : (
                    <>
                      SUBMIT INTEREST ENQUIRY
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="max-w-xl mx-auto py-6 text-center font-sans">
              <div className="w-16 h-16 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37] flex items-center justify-center text-[#F4D03F] mx-auto mb-4 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-heading font-bold text-white mb-2 uppercase">
                Enquiry Received Successfully!
              </h4>
              <p className="text-sm text-white/90 leading-relaxed mb-6">
                Dhanyawad! Aapki investment interest details aur enquiries receive ho gayi hain. Humari Investor Relations aur Compliance team legal protocol aur due diligence details start karne ke liye jald hi aapse connection establish karegi.
              </p>
              <button
                type="button"
                onClick={() => {
                  setEnquirySubmitted(false);
                  setEnquiryName('');
                  setEnquiryEmail('');
                  setEnquiryPhone('');
                  setEnquiryMessage('');
                }}
                className="px-6 py-2 rounded-full border border-white/20 hover:border-[#DAAF37]/50 text-white text-xs font-heading font-bold uppercase transition-all"
              >
                SUBMIT ANOTHER ENQUIRY
              </button>
            </div>
          )}
        </div>

        {/* SECTION 13 — LEGAL ENTITY DETAILS PANEL */}
        <div className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 rounded-3xl bg-[#090909] border border-white/10">
          <h4 className="text-sm font-heading font-bold text-white text-center mb-6 uppercase tracking-wider">
            Nexora Operating Entity Details
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase block">LEGAL COMPANY NAME</span>
              <span className="text-white font-medium block">NEXORA ONE GLOBAL INTERNATIONAL PRIVATE LIMITED (Proposed)</span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase block">BRAND NAME</span>
              <span className="text-white font-medium block">Nexora One</span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase block">ENTITY TYPE</span>
              <span className="text-[#F4D03F] font-medium block">Private Limited Company (Proposed / Subject to final filings)</span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase block">REGISTRATION NUMBER (CIN / LLPIN)</span>
              <span className="text-[#DAAF37] font-medium block">To Be Confirmed Before Investment</span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase block">REGISTERED OFFICE</span>
              <span className="text-[#DAAF37] font-medium block">To Be Confirmed Before Investment</span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase block">OFFICIAL EMAIL &amp; PHONE</span>
              <span className="text-[#DAAF37] font-medium block">To Be Confirmed Before Investment</span>
            </div>
          </div>
        </div>

        {/* SECTION 14 — DOCUMENT AVAILABILITY STATUS EXPLANATION */}
        <div className="max-w-4xl mx-auto mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-wrap items-center justify-center gap-6 text-[10px] font-heading font-bold text-white/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DAAF37] block" />
            <span>VERIFIED / AVAILABLE : Available for review &amp; modeling</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 block" />
            <span>TO BE VERIFIED : Awaiting official registration audit</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 block" />
            <span>TO BE FINALIZED : Pending final contract approvals</span>
          </div>
        </div>

        {/* INVESTOR TAKEAWAY - SECTION 19 END STATEMENT */}
        <div className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-black via-[#DAAF37]/15 to-black border border-[#DAAF37]/45 text-center shadow-[0_4px_24px_rgba(0,0,0,0.6)] animate-pulse">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
            Legal &amp; Advisory Takeaway
          </span>
          <h4 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-white mb-2 tracking-tight uppercase leading-snug">
            &ldquo;INVESTMENT SE PEHLE ENTITY AUR DOCUMENTS VERIFY KARNA ZAROORI HAI.&rdquo;
          </h4>
          <p className="text-xs sm:text-sm text-white/70 font-sans max-w-2xl mx-auto leading-relaxed">
            Nexora ka public Investor Page business model aur operational potential explain karta hai; actual legal rights, equity status aur liability boundaries formal, signed legal contracts mein hi defined honge.
          </p>
        </div>
      </section>

      {/* SECTION 20 — LICENCES / REGISTRATIONS / COMPLIANCE */}
      <section
        id="compliance-and-licences"
        aria-label="Licences, Registrations, and Compliance Section"
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-[#DAAF37]/25"
      >
        {/* Subtle Ambient Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[400px] bg-gradient-to-b from-[#DAAF37]/[0.05] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/35 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F4D03F]" />
            लाइसेंस और कानूनी नियम (Compliance)
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            Nexora के पास कौन-से{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              जरूरी पेपर्स
            </span>{' '}
            हैं?
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-sans max-w-3xl mx-auto leading-relaxed text-wrap">
            Nexora की लीगल तैयारी: हम कंपनी, टैक्स, डेटा और पेमेंट के सभी जरूरी नियमों का पालन कर रहे हैं ताकि बिजनेस पूरी तरह से पारदर्शी और सुरक्षित रहे।
          </p>
        </div>

        {/* 10 COMPLIANCE AREA CARDS GRIDS */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Company / Entity Compliance */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-4 h-4 text-[#DAAF37]" />
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                  01. कंपनी का रजिस्ट्रेशन
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                इन्वेस्टर यह चेक कर सकते हैं कि Nexora किस कंपनी के नाम से रजिस्टर्ड है। इसमें MCA रिकॉर्ड्स और कंपनी के सभी लीगल पेपर्स शामिल हैं।
              </p>
              <div className="space-y-1.5 text-xs text-white/50 font-sans">
                <div>• लीगल एंटिटी का गठन</div>
                <div>• PAN और कॉर्पोरेट फाइलिंग्स</div>
                <div>• बोर्ड और शेयरहोल्डर्स के रिकॉर्ड</div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-heading font-semibold text-[#DAAF37]">
              <span>STATUS: TO BE VERIFIED</span>
              <span className="w-2 h-2 rounded-full bg-amber-400" />
            </div>
          </div>

          {/* Card 2: Tax / GST Compliance */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Coins className="w-4 h-4 text-[#DAAF37]" />
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                  02. टैक्स और GST नियम
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                हमारे बिजनेस मॉडल और कमाई के हिसाब से जो भी टैक्स या GST लागू होता है, उसका पालन CA के मार्गदर्शन में किया जा रहा है।
              </p>
              <div className="space-y-1.5 text-xs text-white/50 font-sans">
                <div>• GST रजिस्ट्रेशन का ढांचा</div>
                <div>• टैक्स इनवॉइस और रिटर्न</div>
                <div>• जरूरी सरकारी टैक्स की जानकारी</div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-heading font-semibold text-[#DAAF37]">
              <span>STATUS: TO BE VERIFIED</span>
              <span className="w-2 h-2 rounded-full bg-amber-400" />
            </div>
          </div>

          {/* Card 3: Customer / E-Commerce Compliance */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Store className="w-4 h-4 text-[#DAAF37]" />
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                  03. ग्राहक और ऑनलाइन नियम
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                हमारा प्लेटफॉर्म ई-कॉमर्स के नियमों (E-Commerce Rules 2020) के हिसाब से तैयार है, ताकि बुकिंग और ट्रांजेक्शन पूरी तरह से पारदर्शी हों।
              </p>
              <div className="space-y-1.5 text-xs text-white/50 font-sans">
                <div>• टर्म्स और कंडीशंस का पालन</div>
                <div>• पारदर्शी प्राइसिंग का सिस्टम</div>
                <div>• शिकायतों के लिए सपोर्ट डेस्क</div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-heading font-semibold text-red-400">
              <span>STATUS: TO BE FINALIZED</span>
              <span className="w-2 h-2 rounded-full bg-red-500" />
            </div>
          </div>

          {/* Card 4: Data Protection / Privacy */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Lock className="w-4 h-4 text-[#DAAF37]" />
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                  04. DATA PROTECTION (DPDP)
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Nexora customer, salon aur business-related personal data process karta hai. Applicable data-protection requirements DPDP Rules 2025 ke rules ke anusaar map aur verify kiye ja rahe hain.
              </p>
              <div className="space-y-1.5 text-xs text-white/50 font-sans">
                <div>• Consent &amp; notice framework</div>
                <div>• Data access &amp; storage controls</div>
                <div>• Incident response mapping rules</div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-heading font-semibold text-[#DAAF37]">
              <span>STATUS: TO BE VERIFIED</span>
              <span className="w-2 h-2 rounded-full bg-amber-400" />
            </div>
          </div>

          {/* Card 5: Payment / Settlement Compliance */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="w-4 h-4 text-[#DAAF37]" />
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                  05. PAYMENT &amp; SETTLEMENT
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Payment architecture ka legal treatment is baat par depend karega ki Nexora sirf PG API route karta hai ya intermediate role leta hai. RBI standards ke andara verify kiya jayega.
              </p>
              <div className="space-y-1.5 text-xs text-white/50 font-sans">
                <div>• Payment Gateway Agreements</div>
                <div>• Merchant settlement structures</div>
                <div>• Transaction ledgers records</div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-heading font-semibold text-[#DAAF37]">
              <span>STATUS: TO BE VERIFIED</span>
              <span className="w-2 h-2 rounded-full bg-amber-400" />
            </div>
          </div>

          {/* Card 6: Investment / Equity Compliance */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Scale className="w-4 h-4 text-[#DAAF37]" />
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                  06. INVESTMENT &amp; EQUITY
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                ₹5 Lakh → 1% Equity wala proposed structure applicable company-law process (such as private placement Section 42) aur formal investment documentation ke through hi implement kiya jayega.
              </p>
              <div className="space-y-1.5 text-xs text-white/50 font-sans">
                <div>• Private placement regulations</div>
                <div>• Official Share Allotment filings</div>
                <div>• CS verified Cap Table registry</div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-heading font-semibold text-red-400">
              <span>STATUS: TO BE FINALIZED</span>
              <span className="w-2 h-2 rounded-full bg-red-500" />
            </div>
          </div>

          {/* Card 7: IP / Brand Compliance */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileCode className="w-4 h-4 text-[#DAAF37]" />
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                  07. IP / BRAND COMPLIANCE
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Brand aur technology ownership ko documents se establish karna important hai; sirf website ya GitHub account hona complete legal proof nahi maana jayega.
              </p>
              <div className="space-y-1.5 text-xs text-white/50 font-sans">
                <div>• Domain ownership contracts</div>
                <div>• Developer IP Assignment agreements</div>
                <div>• Trademark verification (Proposed)</div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-heading font-semibold text-[#DAAF37]">
              <span>STATUS: TO BE VERIFIED</span>
              <span className="w-2 h-2 rounded-full bg-amber-400" />
            </div>
          </div>

          {/* Card 8: Salon Partner Compliance */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-[#DAAF37]" />
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                  08. SALON PARTNER COMPLIANCE
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Salon ki apni local business, tax, professional, safety ya health licensing responsibility partner-level par rahengi. Nexora relevant details verify karega.
              </p>
              <div className="space-y-1.5 text-xs text-white/50 font-sans">
                <div>• Partner KYC &amp; Address proof</div>
                <div>• Authorized business representation</div>
                <div>• Local salon service agreements</div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-heading font-semibold text-red-400">
              <span>STATUS: TO BE FINALIZED</span>
              <span className="w-2 h-2 rounded-full bg-red-500" />
            </div>
          </div>

          {/* Card 9: Advertising & Marketing Compliance */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Megaphone className="w-4 h-4 text-[#DAAF37]" />
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                  09. ADVERTISING &amp; MARKETING
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Nexora ke advertising aur promotional content ko truthful, identifiable aur consumer rules ke anusaar match karna zaroori hai. No ads are claimed as legally pre-approved without proper legal scrutiny.
              </p>
              <div className="space-y-1.5 text-xs text-white/50 font-sans">
                <div>• Truthful advertising standards</div>
                <div>• Opt-in/Opt-out customer marketing consent</div>
                <div>• Promotion-rule documentation alignment</div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-heading font-semibold text-[#DAAF37]">
              <span>STATUS: TO BE VERIFIED</span>
              <span className="w-2 h-2 rounded-full bg-amber-400" />
            </div>
          </div>

        </div>

        {/* Card 10: Grievance & Customer Support */}
        <div className="max-w-5xl mx-auto p-6 rounded-2xl bg-gradient-to-br from-[#DAAF37]/5 to-[#0D0D0D] border border-[#DAAF37]/30 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <div className="flex items-center gap-2.5 mb-2">
                <AlertCircle className="w-4 h-4 text-[#F4D03F]" />
                <h4 className="text-base font-heading font-bold text-white uppercase tracking-wider">
                  10. GRIEVANCE COMPLIANCE &amp; SUPPORT
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed text-wrap">
                Customer ya partner complaint ko structured, compliance-aligned support aur redressal process ke through handle kiya jayega. Hum koi bhi arbitrary resolution timelines guarantee nahi karte.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-white/60">
                <span>• Official support desk email escalation routing</span>
                <span>• Refund conflict tracking codes where applicable</span>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col justify-end items-start md:items-end">
              <Button
                to="/grievance-support"
                variant="secondary"
                size="sm"
                className="w-full md:w-auto shrink-0"
                icon={<ArrowRight className="w-4 h-4 text-[#DAAF37]" />}
              >
                Grievance Support Link
              </Button>
              <span className="text-[10px] text-white/40 block mt-2 text-left md:text-right italic">
                * Subject to standard operations protocol setup.
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 11 — WHAT IS VERIFIED VS WHAT IS PENDING? */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#080808] border border-white/10 mb-12">
          <div className="text-center mb-8">
            <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
              TRUTHFULNESS &amp; PROOF CHECK
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white uppercase">
              क्या वेरिफाई हो चुका है और क्या बाकी है?
            </h3>
            <p className="text-xs sm:text-sm text-white/60 font-sans mt-1">
              हमारा मकसद पूरी तरह से पारदर्शी रहना है। हम स्पष्ट करते हैं कि वर्तमान में हम किस स्तर पर हैं:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Level 1: Verified / Active */}
            <div className="p-5 rounded-2xl bg-[#DAAF37]/5 border border-[#DAAF37]/30 flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded bg-[#DAAF37]/25 text-[#FFF2B2] text-[9px] font-heading uppercase tracking-wider inline-block mb-3">
                  LEVEL 1 — वेरिफाइड / तैयार
                </span>
                <h4 className="text-sm font-heading font-bold text-white mb-4">
                  जहाँ काम पूरा हो चुका है
                </h4>
                <ul className="space-y-2 text-xs text-white/80 font-sans">
                  <li className="flex items-start gap-1.5">• बिजनेस और ऑपरेशन का मॉडल</li>
                  <li className="flex items-start gap-1.5">• प्लेटफॉर्म का सॉफ्टवेयर कोड</li>
                  <li className="flex items-start gap-1.5">• भविष्य की कमाई का गणित (Financials)</li>
                  <li className="flex items-start gap-1.5">• तकनीकी सुरक्षा का ढांचा</li>
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-white/5 text-[10px] text-white/50 italic">
                * रिव्यु के लिए उपलब्ध
              </div>
            </div>

            {/* Level 2: To Be Verified */}
            <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 text-[9px] font-heading uppercase tracking-wider inline-block mb-3">
                  LEVEL 2 — पेंडिंग वेरिफिकेशन
                </span>
                <h4 className="text-sm font-heading font-bold text-white mb-4">
                  लीगल टीम / CA के रिव्यू की जरूरत
                </h4>
                <ul className="space-y-2 text-xs text-white/80 font-sans">
                  <li className="flex items-start gap-1.5">• कंपनी का सरकारी रजिस्ट्रेशन</li>
                  <li className="flex items-start gap-1.5">• ट्रेडमार्क और ब्रांड के अधिकार</li>
                  <li className="flex items-start gap-1.5">• डेटा प्राइवेसी के नियमों का ऑडिट</li>
                  <li className="flex items-start gap-1.5">• पेमेंट पार्टनर के साथ पेपर्स</li>
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-white/5 text-[10px] text-white/50 italic">
                * रजिस्ट्रेशन की प्रक्रिया जारी है
              </div>
            </div>

            {/* Level 3: To Be Finalized */}
            <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/10 flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 text-[9px] font-heading uppercase tracking-wider inline-block mb-3">
                  LEVEL 3 — अंतिम चरण
                </span>
                <h4 className="text-sm font-heading font-bold text-white mb-4">
                  लॉन्च से पहले पूरा करना है
                </h4>
                <ul className="space-y-2 text-xs text-white/80 font-sans">
                  <li className="flex items-start gap-1.5">• शेयर्स बांटने के बोर्ड प्रस्ताव</li>
                  <li className="flex items-start gap-1.5">• सैलून और पार्टनर्स के साथ एग्रीमेंट</li>
                  <li className="flex items-start gap-1.5">• इन्वेस्टर एग्रीमेंट के अंतिम ड्राफ्ट</li>
                  <li className="flex items-start gap-1.5">• कस्टमर सपोर्ट डेस्क की शुरुआत</li>
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-white/5 text-[10px] text-white/50 italic">
                * लॉन्च से पहले पूरा कर लिया जाएगा
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 12 — COMPLIANCE MASTER CHECKLIST */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#090909] border border-white/10 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white uppercase">
              COMPLIANCE MASTER CHECKLIST
            </h3>
            <p className="text-xs text-[#F4D03F] font-sans mt-1">
              Nexora ke corporate checks aur advisors ka standard tracking ledger.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-sans text-white/80">
              <thead>
                <tr className="border-b border-white/10 text-[#DAAF37] font-heading uppercase font-semibold text-[10px]">
                  <th className="py-3 px-4">AREA OF COMPLIANCE</th>
                  <th className="py-3 px-4">CURRENT STATUS</th>
                  <th className="py-3 px-4">DESIGNATED ACCOUNTABLE ADVISOR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { area: 'Company / Operating Legal Entity', status: 'To Be Verified', owner: 'CS & Corporate Lawyer' },
                  { area: 'Taxation / GST Liability Thresholds', status: 'To Be Verified', owner: 'Chartered Accountant (CA)' },
                  { area: 'Customer Policies & E-Commerce rules', status: 'To Be Finalized', owner: 'E-Commerce Legal Counsel' },
                  { area: 'Data Protection & DPDP 2025 Framework', status: 'To Be Verified', owner: 'Privacy & IT Counsel' },
                  { area: 'Payment Structure & Gateway Processing', status: 'To Be Verified', owner: 'Legal Counsel + Payment Provider' },
                  { area: 'Investment Pool Syndicate & Equity allotment', status: 'To Be Finalized', owner: 'Company Secretary + Corporate Lawyer' },
                  { area: 'IP, Domains & Software Code assignment', status: 'To Be Verified', owner: 'IP Advisory Counsel' },
                  { area: 'Salon Partner local operations oversight', status: 'To Be Finalized', owner: 'Operations Head + Legal Counsel' },
                  { area: 'Truthful Advertising & Marketing limits', status: 'To Be Verified', owner: 'Marketing Compliance Lead' },
                  { area: 'Grievance support desk activation', status: 'To Be Finalized', owner: 'Operations Lead + Counsel' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                    <td className="py-3.5 px-4 font-heading font-semibold text-white">{row.area}</td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-heading font-semibold uppercase tracking-wider ${
                        row.status === 'Verified' ? 'text-[#FFF2B2] bg-[#DAAF37]/15 border border-[#DAAF37]/30' :
                        row.status === 'To Be Verified' ? 'text-amber-300 bg-amber-500/10 border border-amber-500/20' :
                        'text-red-400 bg-red-500/10 border border-red-500/20'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-white/60">{row.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 13 — LAUNCH-READINESS GATE */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.02] to-black border border-white/10 mb-12">
          <div className="text-center mb-8">
            <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
              INTERNAL LAUNCH MILESTONES
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white uppercase">
              Launch-Readiness Compliance Gate
            </h3>
            <p className="text-xs text-white/50 font-sans mt-1 text-wrap">
              * Note: Yeh Nexora ka internal launch preparation check map hai, iska sarkari approvals ya direct government license sequence se koi talluq nahi hai.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 max-w-xl mx-auto text-xs font-heading font-bold text-center">
            {[
              '01. Legal Operating Entity Confirmed',
              '02. Tax / GST Liability & Position Confirmed by CA',
              '03. Customer Terms & Conditions Prepared',
              '04. Privacy / Data Processing Framework (DPDP 2025) Ready',
              '05. Payment Structure & PG Integrations Reviewed',
              '06. Local Salon Service Agreement Formats Finalized',
              '07. Customer Grievance support desk Operational',
              '08. Investor Syndicate Share Placement docs Ready',
              '09. Tech Source Code IP Assignment Agreements signed',
              '10. FINAL COMPLIANCE VERIFICATION CHECK (LEGAL / CA / CS)',
            ].map((gate, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="w-full py-3 px-4 rounded-xl bg-white/[0.02] border border-white/5 text-white/90 hover:border-[#DAAF37]/30 hover:bg-white/[0.04] transition-all">
                  {gate}
                </div>
                {idx < arr.length - 1 && (
                  <ArrowDown className="w-4 h-4 text-[#DAAF37]/60 my-0.5 animate-bounce" />
                )}
              </React.Fragment>
            ))}
            <ArrowDown className="w-4 h-4 text-[#DAAF37] my-0.5" />
            <div className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-black via-[#DAAF37]/20 to-black border-2 border-[#DAAF37] text-white shadow-[0_0_20px_rgba(218,175,55,0.2)] font-heading uppercase text-sm tracking-wider">
              🚀 COMMERCIAL PLATFORM LAUNCH
            </div>
          </div>
        </div>

        {/* SECTION 14 — WHAT NEXORA SHOULD NOT CLAIM */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0F0D0A] border border-red-500/20 mb-12 text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-950/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-heading font-bold text-red-400 uppercase tracking-widest block mb-1">
                COMPLIANCE TRANSPARENCY NOTICE
              </span>
              <h4 className="text-base font-heading font-bold text-white mb-2 uppercase">
                NEXORA KYA CLAIMS NAI KARTA:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-white/70 mb-4">
                <div className="flex items-center gap-2">• &ldquo;100% Legally Compliant with zero risk&rdquo;</div>
                <div className="flex items-center gap-2">• &ldquo;Government Approved investment platform&rdquo;</div>
                <div className="flex items-center gap-2">• &ldquo;RBI approved transaction settlements&rdquo;</div>
                <div className="flex items-center gap-2">• &ldquo;SEBI verified / licensed share placements&rdquo;</div>
                <div className="flex items-center gap-2">• &ldquo;FSSAI / ISO certified technology assets&rdquo;</div>
                <div className="flex items-center gap-2">• &ldquo;Fully licensed startup exceptions status&rdquo;</div>
              </div>
              <p className="text-xs text-[#F4D03F] font-sans leading-relaxed italic border-t border-white/5 pt-3">
                &ldquo;Hum upar diye gae koi bhi claims verify kiye bina claim nahi karte. Nexora ke applicable compliances actual operating structures, activities aur statutory laws ke limits ke according hi process aur maintain honge.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 15 — DUE DILIGENCE LINK STATEMENT */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white/[0.02] border border-white/10 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#DAAF37]">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-heading font-bold uppercase tracking-wider">CONFIDENTIAL INVESTOR REVIEW</span>
          </div>
          <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed max-w-2xl mx-auto">
            Detailed registration certificates, tax records, agreements, corporate filings and compliance documents can be reviewed through the appropriate investor due-diligence process, subject to confidentiality. Public surface par hum koi bhi private records share nahi karte.
          </p>
        </div>

        {/* INVESTOR TAKEAWAY - SECTION 20 END STATEMENT */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-black via-[#DAAF37]/15 to-black border border-[#DAAF37]/45 text-center shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
            Investor Takeaway
          </span>
          <h4 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-white mb-2 tracking-tight uppercase leading-snug">
            &ldquo;NEXORA KA GOAL SIRF PRODUCT LAUNCH KARNA NAHI, BALKI APPLICABLE LEGAL, TAX, DATA, PAYMENT AUR OPERATIONAL COMPLIANCE KO PROPERLY STRUCTURE KARNA HAI.&rdquo;
          </h4>
          <p className="text-xs sm:text-sm text-white/70 font-sans max-w-2xl mx-auto leading-relaxed text-wrap">
            Exact compliance requirements Nexora ke final legal entity, activities, payment architecture aur operating model ke basis par CA, CS aur legal counsel ke saath verify ki jayengi.
          </p>
        </div>
      </section>

      {/* SECTION 21 — FOUNDER / MANAGEMENT / TEAM */}
      <section
        id="founder-management-team"
        aria-label="Founder, Management, and Team Section"
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-[#DAAF37]/25"
      >
        {/* Subtle Ambient Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[400px] bg-gradient-to-b from-[#DAAF37]/[0.05] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/35 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Users className="w-3.5 h-3.5 text-[#F4D03F]" />
            Nexora की टीम
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            Nexora को कौन{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              चलाएगा? (Execution)
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-sans max-w-3xl mx-auto leading-relaxed text-wrap">
            एक बेहतरीन प्रोडक्ट के साथ उसे चलाने वाली टीम का होना भी बहुत जरूरी है। Nexora की टीम इसी विजन के साथ तैयार की गई है।
          </p>
        </div>

        {/* SECTION 1 — FOUNDER & LEADERSHIP CARD */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#DAAF37]/5 via-[#0A0A0A] to-black border border-[#DAAF37]/35 shadow-[0_12px_40px_rgba(218,175,55,0.08)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Founder Image (Verified Asset from About Page) */}
              <div className="lg:col-span-4 max-w-[280px] mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-[#DAAF37]/40 shadow-xl bg-black">
                <div className="relative aspect-[4/5]">
                  <InteractiveImage
                    src={founderVijayImg}
                    alt="Vijay K. Tiwari - Founder of NEXORA ONE"
                    className="w-full h-full object-cover select-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-[10px] font-heading font-black text-[#DAAF37] uppercase tracking-wider block">
                      FOUNDER &amp; VISIONARY
                    </span>
                  </div>
                </div>
              </div>

              {/* Founder Details */}
              <div className="lg:col-span-8 space-y-4 text-left">
                <span className="inline-block px-3 py-1 rounded bg-[#DAAF37]/15 text-[#F4D03F] text-xs font-heading font-bold uppercase tracking-wider">
                  FOUNDER &amp; VISIONARY
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-none">
                  Vijay K. Tiwari
                </h3>
                <p className="text-xs sm:text-sm font-heading font-semibold text-[#DAAF37] uppercase tracking-wide">
                  बिजनेस विजन, स्ट्रेटेजी और पार्टनरशिप्स की जिम्मेदारी
                </p>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 italic text-white/90 text-xs sm:text-sm leading-relaxed font-sans relative">
                  <span className="text-2xl text-[#DAAF37] font-serif absolute -top-2 left-1">&ldquo;</span>
                  <p className="pl-4">
                    &quot;Nexora सिर्फ एक टेक्नोलॉजी नहीं है; यह भारत की ब्यूटी इंडस्ट्री के हर व्यक्ति को एक डिजिटल प्लेटफॉर्म से जोड़ने और उन्हें ताकत देने का एक मिशन है।&quot;
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-white/70 pt-2">
                  <div className="p-3 rounded-lg bg-white/[0.01] border border-white/5">
                    <strong className="text-white block mb-0.5">मुख्य भूमिका:</strong>
                    प्रोडक्ट के विजन को दिशा देना, बिजनेस का विस्तार करना और बड़े पार्टनर्स के साथ तालमेल बिठाना।
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.01] border border-white/5">
                    <strong className="text-white block mb-0.5">लीगल और फाइनेंस:</strong>
                    कंपनी के कानूनी ढांचे, इन्वेस्टमेंट राउंड्स और वित्तीय योजना की देखरेख करना।
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2 — KEY MANAGEMENT RESPONSIBILITIES */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="text-center mb-8">
            <span className="text-xs font-heading font-semibold text-[#DAAF37] uppercase tracking-wider block mb-1">
              ROLES &amp; RESPONSIBILITY BREAKDOWN
            </span>
            <h3 className="text-2xl font-serif font-bold text-white uppercase">
              मैनेजमेंट और जिम्मेदारियां
            </h3>
            <p className="text-xs sm:text-sm text-white/60 font-sans mt-2">
              हमने काम को अलग-अलग विभागों में बांटा है ताकि हर विभाग की जिम्मेदारी स्पष्ट रहे।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Business & Strategy */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/30 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F] mb-4">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="text-base font-heading font-bold text-white mb-2 uppercase">
                  बिजनेस और स्ट्रेटेजी
                </h4>
                <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                  बिजनेस की दिशा तय करना, बड़े पार्टनर्स बनाना और कंपनी के विस्तार के लिए बड़े फैसले लेना।
                </p>
              </div>
            </div>

            {/* Card 2: Product & Technology */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/30 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F] mb-4">
                  <FileCode className="w-5 h-5" />
                </div>
                <h4 className="text-base font-heading font-bold text-white mb-2 uppercase">
                  प्रोडक्ट और टेक्नोलॉजी
                </h4>
                <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                  वेबसाइट और ऐप का विकास, सॉफ्टवेयर की सुरक्षा और तकनीकी सिस्टम को सुचारू रूप से चलाना।
                </p>
              </div>
            </div>

            {/* Card 3: Salon Acquisition */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/30 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F] mb-4">
                  <Store className="w-5 h-5" />
                </div>
                <h4 className="text-base font-heading font-bold text-white mb-2 uppercase">
                  सैलून नेटवर्क का विस्तार
                </h4>
                <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                  नए सैलून को प्लेटफॉर्म से जोड़ना, पार्टनर नेटवर्क को मैनेज करना और उनके साथ अच्छे संबंध बनाए रखना।
                </p>
              </div>
            </div>

            {/* Card 4: Customer Growth */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/30 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F] mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="text-base font-heading font-bold text-white mb-2 uppercase">
                  कस्टमर ग्रोथ और मार्केटिंग
                </h4>
                <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                  नए ग्राहकों को जोड़ना, डिजिटल मार्केटिंग कैंपेन चलाना और ग्राहकों को दोबारा सर्विस लेने के लिए प्रेरित करना।
                </p>
              </div>
            </div>

            {/* Card 5: Operations & Support */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/30 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F] mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-base font-heading font-bold text-white mb-2 uppercase">
                  ऑपरेशंस और सपोर्ट
                </h4>
                <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                  रोजाना के कामकाज की देखरेख, ग्राहकों और सैलून मालिकों की समस्याओं का समाधान करना।
                </p>
              </div>
            </div>

            {/* Card 6: Finance & Compliance */}
            <div className="p-6 rounded-2xl bg-[#090909] border border-white/10 hover:border-[#DAAF37]/30 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F] mb-4">
                  <Coins className="w-5 h-5" />
                </div>
                <h4 className="text-base font-heading font-bold text-white mb-2 uppercase">
                  फाइनेंस और कंप्लायंस
                </h4>
                <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                  खातों का हिसाब-किताब, जीएसटी और टैक्स के नियमों का पालन और सरकारी रिकॉर्ड्स को मेंटेन करना।
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 3 — CURRENT TEAM VS FUTURE TEAM */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
          {/* Panel 1: Current Management */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0A0A0A] to-black border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
                CURRENT STRUCTURE
              </span>
              <h4 className="text-lg font-heading font-bold text-white mb-4 uppercase">
                Current Management Roles
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm text-white/80 font-sans">
                <li className="flex items-start gap-2.5">
                  <CheckSquare className="w-4 h-4 text-[#DAAF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading">Vijay K. Tiwari</strong>
                    <span className="text-xs text-white/50 block">Founder / Visionary &amp; Lead Strategy</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckSquare className="w-4 h-4 text-[#DAAF37]/30 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white/60 block font-heading">Co-Founder &amp; CFO / Tech Lead</strong>
                    <span className="text-xs text-amber-400 block font-semibold">To Be Confirmed / Management details to be finalized</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-6 p-2 rounded bg-white/[0.02] border border-white/5 text-center text-[10px] text-white/50">
              * Note: Operating structure handles early roles cleanly with advisory support.
            </div>
          </div>

          {/* Panel 2: Future Team Building */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#090909] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#F4D03F] uppercase tracking-wider block mb-1">
                FUTURE TALENT ROADMAP
              </span>
              <h4 className="text-lg font-heading font-bold text-white mb-4 uppercase">
                भविष्य की टीम का प्लान
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                जैसे-जैसे Nexora का विस्तार होगा, हम इन क्षेत्रों में एक्सपर्ट्स को जोड़ेंगे:
              </p>
              <div className="grid grid-cols-2 gap-2.5 text-xs text-white/80 font-sans">
                {['सेल्स ऑफिसर', 'सॉफ्टवेयर इंजीनियर', 'कस्टमर सपोर्ट एक्सपर्ट्स', 'मार्केटिंग लीड्स', 'अकाउंट्स ऑफिसर', 'लीगल एग्जीक्यूटिव्स'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#DAAF37] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-white/5 text-[10px] text-white/40 italic">
              * टीम का विस्तार बिजनेस की कमाई के आधार पर किया जाएगा।
            </div>
          </div>
        </div>

        {/* SECTION 4 — WHY TEAM MATTERS */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.03] to-[#070707] border border-white/10 mb-12 text-center">
          <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-2">
            EXECUTION EQUATION
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-6 uppercase">
            प्रोडक्ट + टीम = सफलता
          </h3>

          <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed max-w-3xl mx-auto mt-6">
            सिर्फ प्रोडक्ट तैयार होना काफी नहीं है। बिजनेस को चलाने और उसे बड़ा बनाने के लिए एक सक्षम टीम का होना बहुत जरूरी है। Nexora इसी सोच के साथ आगे बढ़ रहा है।
          </p>
        </div>

        {/* INVESTOR TAKEAWAY - SECTION 21 END STATEMENT */}
        <div className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-black via-[#DAAF37]/15 to-black border border-[#DAAF37]/45 text-center shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
            महत्वपूर्ण बात
          </span>
          <h4 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-white mb-2 tracking-tight uppercase leading-snug">
            &ldquo;प्रोडक्ट तैयार है — अब सही टीम और मेहनत से इसे मार्केट में सफल बनाना है।&rdquo;
          </h4>
          <p className="text-xs sm:text-sm text-white/70 font-sans max-w-2xl mx-auto leading-relaxed text-wrap">
            Nexora की सफलता सही तकनीक, सही लोग और सही समय पर लिए गए फैसलों पर निर्भर करती है।
          </p>
        </div>
      </section>

      {/* SECTION 22 — BUSINESS RISKS & HOW NEXORA WILL MANAGE THEM */}
      <section
        id="business-risks-management"
        aria-label="Business Risks and Management Section"
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-[#DAAF37]/25"
      >
        {/* Subtle Ambient Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[400px] bg-gradient-to-b from-[#DAAF37]/[0.05] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/35 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <AlertTriangle className="w-3.5 h-3.5 text-[#F4D03F]" />
            INVESTMENT INVOLVES RISK
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            WHAT ARE THE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              MAIN RISKS?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-sans max-w-3xl mx-auto leading-relaxed text-wrap">
            Har startup mein execution, market, financial aur operational risks hote hain. Nexora ka approach in risks ko hide ya ignore karna nahi, balki identify, measure aur manage karna hai.
          </p>
        </div>

        {/* 14 RISK FACTOR CARDS */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Risk 1: Salon Onboarding Risk */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-black text-red-400 block mb-1">RISK FACTORS 01</span>
              <h4 className="text-sm sm:text-base font-heading font-bold text-white mb-2 uppercase leading-snug">
                Salon Onboarding Risk
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Agar salons expected speed se onboard nahi hote, to customer choice, booking volume aur revenue growth slow ho sakti hai.
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 space-y-2 text-[11px] font-sans">
              <strong className="text-[#DAAF37] block font-heading text-[10px] uppercase">MONITOR &amp; MANAGE:</strong>
              <p className="text-white/50 leading-snug">
                Multiple acquisition channels activation, independent Growth Partners deployment, local outreach campaigns, and actual CAC performance tracking.
              </p>
            </div>
          </div>

          {/* Risk 2: Customer Acquisition Risk */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-black text-red-400 block mb-1">RISK FACTORS 02</span>
              <h4 className="text-sm sm:text-base font-heading font-bold text-white mb-2 uppercase leading-snug">
                Customer Acquisition Risk
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Sirf salons onboard karna enough nahi hai. Actual business scaling ke liye customers ka platform par aana aur bookings submit karna zaroori hai.
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 space-y-2 text-[11px] font-sans">
              <strong className="text-[#DAAF37] block font-heading text-[10px] uppercase">MONITOR &amp; MANAGE:</strong>
              <p className="text-white/50 leading-snug">
                Customer app promotions, localized digital marketing, organic referral network loops, and client conversion tracking parameters.
              </p>
            </div>
          </div>

          {/* Risk 3: Booking Volume Risk */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-black text-red-400 block mb-1">RISK FACTORS 03</span>
              <h4 className="text-sm sm:text-base font-heading font-bold text-white mb-2 uppercase leading-snug">
                Lower-Than-Modeled Booking Volume
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Actual bookings ₹30,000 per salon monthly model structure se kam ya zyada ho sakti hain, isme koi baseline validation fixed nahi hai.
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 space-y-2 text-[11px] font-sans">
              <strong className="text-[#DAAF37] block font-heading text-[10px] uppercase">MONITOR &amp; MANAGE:</strong>
              <p className="text-white/50 leading-snug">
                Tracking live salon booking transactions, deploying client acquisition adjustments, and launching optimized local promotional campaigns.
              </p>
            </div>
          </div>

          {/* Risk 4: Customer Retention Risk */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-black text-red-400 block mb-1">RISK FACTORS 04</span>
              <h4 className="text-sm sm:text-base font-heading font-bold text-white mb-2 uppercase leading-snug">
                Low Repeat Booking / Retention
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Agar first booking ke baad customer platform par repeat nahi karta, to customer acquisition economics naturally weak ho sakti hai.
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 space-y-2 text-[11px] font-sans">
              <strong className="text-[#DAAF37] block font-heading text-[10px] uppercase">MONITOR &amp; MANAGE:</strong>
              <p className="text-white/50 leading-snug">
                Loyalty integration, in-app push recall triggers, automated consumer engagement tools, and active service repeat-rate monitoring.
              </p>
            </div>
          </div>

          {/* Risk 5: Cancellation & Refund Risk */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-black text-red-400 block mb-1">RISK FACTORS 05</span>
              <h4 className="text-sm sm:text-base font-heading font-bold text-white mb-2 uppercase leading-snug">
                Cancellation &amp; Refund Risk
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Customer ya salon cancellations, refund requests aur service disputes transaction economics aur operations ko affect kar sakte hain.
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 space-y-2 text-[11px] font-sans">
              <strong className="text-[#DAAF37] block font-heading text-[10px] uppercase">MONITOR &amp; MANAGE:</strong>
              <p className="text-white/50 leading-snug text-wrap">
                Standard terms, clear refund guidelines, strict ledger records, and customer grievance routing. For details, see <a href="/refund-policy" className="text-[#DAAF37] underline">Refund &amp; Cancellation Policy</a>.
              </p>
            </div>
          </div>

          {/* Risk 6: Payment Transaction Risk */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-black text-red-400 block mb-1">RISK FACTORS 06</span>
              <h4 className="text-sm sm:text-base font-heading font-bold text-white mb-2 uppercase leading-snug">
                Payment &amp; Transaction Risk
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Payment failures, gateway downtimes, pending status, duplicate processing charges ya chargebacks operational challenges create kar sakte hain.
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 space-y-2 text-[11px] font-sans">
              <strong className="text-[#DAAF37] block font-heading text-[10px] uppercase">MONITOR &amp; MANAGE:</strong>
              <p className="text-white/50 leading-snug">
                Licensed payment gateway API routing integrations, transaction records reconciliation checklists, and standard support escalation paths.
              </p>
            </div>
          </div>

          {/* Risk 7: Competition Risk */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-black text-red-400 block mb-1">RISK FACTORS 07</span>
              <h4 className="text-sm sm:text-base font-heading font-bold text-white mb-2 uppercase leading-snug">
                Competition Risk
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Booking portals, local agency software, WhatsApp channels aur new start-ups merchant aur user attention ke liye compete kar sakte hain.
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 space-y-2 text-[11px] font-sans">
              <strong className="text-[#DAAF37] block font-heading text-[10px] uppercase">MONITOR &amp; MANAGE:</strong>
              <p className="text-white/50 leading-snug text-wrap">
                Establishing localized digital software advantages, and deploying independent Growth Partners. See <a href="#who-does-nexora-compete-with" className="text-[#DAAF37] underline">Section 8</a> for details.
              </p>
            </div>
          </div>

          {/* Risk 8: Technology & Security Risk */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-black text-red-400 block mb-1">RISK FACTORS 08</span>
              <h4 className="text-sm sm:text-base font-heading font-bold text-white mb-2 uppercase leading-snug">
                Technology &amp; Security Risk
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Service downtime, server bugs, data leaks, cyber incidents ya technology failures customer trust aur daily operations ko affect kar sakte hain.
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 space-y-2 text-[11px] font-sans">
              <strong className="text-[#DAAF37] block font-heading text-[10px] uppercase">MONITOR &amp; MANAGE:</strong>
              <p className="text-white/50 leading-snug text-wrap">
                Security logging protocols, regular automated backups, and database protections. See <a href="#technology-security-scalability" className="text-[#DAAF37] underline">Section 17</a> for technical details.
              </p>
            </div>
          </div>

          {/* Risk 9: Scaling Operational Risk */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-black text-red-400 block mb-1">RISK FACTORS 09</span>
              <h4 className="text-sm sm:text-base font-heading font-bold text-white mb-2 uppercase leading-snug">
                Scaling Operational Complexity
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Business scale hone ke saath onboarded salons, user activity, booking volumes, customer support load aur administrative complexity naturally increase hogi.
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 space-y-2 text-[11px] font-sans">
              <strong className="text-[#DAAF37] block font-heading text-[10px] uppercase">MONITOR &amp; MANAGE:</strong>
              <p className="text-white/50 leading-snug">
                Process standardization rules, admin automation development, customer support systems setup, and phased operations scaling checklists.
              </p>
            </div>
          </div>

          {/* Risk 10: Financial Cash Flow Risk */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-black text-red-400 block mb-1">RISK FACTORS 10</span>
              <h4 className="text-sm sm:text-base font-heading font-bold text-white mb-2 uppercase leading-snug">
                Financial &amp; Cash Flow Risk
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Actual revenues projected modeling targets se significantly lower ho sakte hain, jabki tech, marketing, operations aur support costs predicted budgets se exceed kar sakte hain.
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 space-y-2 text-[11px] font-sans">
              <strong className="text-[#DAAF37] block font-heading text-[10px] uppercase">MONITOR &amp; MANAGE:</strong>
              <p className="text-white/50 leading-snug">
                Strict weekly budget tracking, monthly financial audits, controlled capital deployment guidelines, and scenario-based expense planning.
              </p>
            </div>
          </div>

          {/* Risk 11: Legal & Regulatory Risk */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-black text-red-400 block mb-1">RISK FACTORS 11</span>
              <h4 className="text-sm sm:text-base font-heading font-bold text-white mb-2 uppercase leading-snug">
                Legal &amp; Regulatory Risk
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Ecosystem payment structures, DPDP personal data laws, taxation guidelines, e-commerce protections aur MCA statutory requirements dynamically evolve ho sakte hain.
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 space-y-2 text-[11px] font-sans">
              <strong className="text-[#DAAF37] block font-heading text-[10px] uppercase">MONITOR &amp; MANAGE:</strong>
              <p className="text-white/50 leading-snug text-wrap">
                Dedicated CS/CA audits, contract drafts oversight, and regulatory filings monitoring. See <a href="#compliance-and-licences" className="text-[#DAAF37] underline">Section 20</a> for more details.
              </p>
            </div>
          </div>

          {/* Risk 12: Salon Partner Service Risk */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-black text-red-400 block mb-1">RISK FACTORS 12</span>
              <h4 className="text-sm sm:text-base font-heading font-bold text-white mb-2 uppercase leading-snug">
                सैलून सर्विस और पार्टनर क्वालिटी
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                हमारा बिज़नेस इस बात पर टिका है कि सैलून पार्टनर कैसी सर्विस देते हैं। अगर वहां कुछ गलत होता है, तो वह Nexora की इमेज पर असर डालता है।
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 space-y-2 text-[11px] font-sans">
              <strong className="text-[#DAAF37] block font-heading text-[10px] uppercase">हम इसे कैसे मैनेज करेंगे:</strong>
              <p className="text-white/50 leading-snug">
                सैलून ऑनबोर्डिंग के वक्त ही कड़े चेक्स, बुकिंग रिकॉर्ड्स और कस्टमर्स के फीडबैक को लगातार मॉनिटर करेंगे। खराब सर्विस वाले पार्टनर को तुरंत हटा दिया जाएगा।
              </p>
            </div>
          </div>

          {/* Risk 13: Founder Dependency Risk */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-black text-red-400 block mb-1">RISK FACTORS 13</span>
              <h4 className="text-sm sm:text-base font-heading font-bold text-white mb-2 uppercase leading-snug">
                फाउंडर और टीम पर निर्भरता
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                अभी शुरुआत है, तो बहुत कुछ फाउंडर और शुरुआती टीम पर ही निर्भर है।
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 space-y-2 text-[11px] font-sans">
              <strong className="text-[#DAAF37] block font-heading text-[10px] uppercase">हम इसे कैसे मैनेज करेंगे:</strong>
              <p className="text-white/50 leading-snug text-wrap">
                हर काम का प्रोसेस डॉक्यूमेंट कर रहे हैं ताकि सब कुछ एक इंसान पर निर्भर न रहे। एक्सपर्ट्स को हायर कर रहे हैं (सेक्शन 21 देखें)।
              </p>
            </div>
          </div>

          {/* Risk 14: Market Adoption Risk */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-black text-red-400 block mb-1">RISK FACTORS 14</span>
              <h4 className="text-sm sm:text-base font-heading font-bold text-white mb-2 uppercase leading-snug">
                मार्केट एडॉप्शन रिस्क
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                सिर्फ ऐप या वेबसाइट रेडी होने से ही ग्राहक और सैलून नहीं जुड़ेंगे। इसे मार्केट में टेस्ट करना और लोगों को समझाना जरूरी है।
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 space-y-2 text-[11px] font-sans">
              <strong className="text-[#DAAF37] block font-heading text-[10px] uppercase">हम इसे कैसे मैनेज करेंगे:</strong>
              <p className="text-white/50 leading-snug">
                हम धीरे-धीरे और सही तरीके से काम शुरू करेंगे। जैसे-जैसे यूजर फीडबैक मिलेगा, हम ऐप और सर्विस में बदलाव करते रहेंगे।
              </p>
            </div>
          </div>

        </div>

        {/* VISUAL HIGHLIGHT CARD — PRODUCT READY ≠ MARKET SUCCESS */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/20 via-black to-red-950/20 border-2 border-red-500/30 text-center shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 via-amber-500/40 to-red-500/50" />
          <span className="text-xs font-heading font-bold text-red-400 uppercase tracking-widest block mb-2">
            इन्वेस्टर्स के लिए जरूरी बात
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-white tracking-tight uppercase leading-none mb-3">
            प्रोडक्ट रेडी होना ही काफी नहीं है
          </h3>
          <p className="text-xs sm:text-sm text-white/80 font-sans max-w-2xl mx-auto leading-relaxed">
            सिर्फ ऐप तैयार होने से बिज़नेस सफल नहीं होगा। असली सफलता इस बात पर निर्भर करेगी कि हम कितनी तेजी से सैलून जोड़ते हैं, ग्राहक कितनी बार ऐप यूज़ करते हैं, और हमारी ऑपरेशनल परफॉरमेंस कैसी रहती है।
          </p>
        </div>

        {/* RISK SCORECARD (Table) */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#090909] border border-white/10 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white uppercase">
              रिस्क मापने का तरीका
            </h3>
            <p className="text-xs text-[#F4D03F] font-sans mt-1">
              जब बिज़नेस शुरू होगा, तो हम इन चीजों को ध्यान से ट्रैक करेंगे।
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-sans text-white/80">
              <thead>
                <tr className="border-b border-white/10 text-[#DAAF37] font-heading uppercase font-semibold text-[10px]">
                  <th className="py-3 px-4">रिस्क (किस चीज पर ध्यान देना है)</th>
                  <th className="py-3 px-4">स्थिति</th>
                  <th className="py-3 px-4">हम क्या नापेंगे (KPI)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { risk: 'सैलून ऑनबोर्डिंग की स्पीड', status: 'अभी नापना बाकी है', kpi: 'कितने सैलून जुड़े / ऑनबोर्डिंग कॉस्ट' },
                  { risk: 'ग्राहक जुड़ने का खर्चा', status: 'अभी नापना बाकी है', kpi: 'ग्राहक को लाने का खर्चा (CAC)' },
                  { risk: 'कस्टमर का वापस आना', status: 'अभी नापना बाकी है', kpi: 'कितने ग्राहक रिपीट बुकिंग कर रहे हैं' },
                  { risk: 'औसत बुकिंग वैल्यू', status: 'अभी नापना बाकी है', kpi: 'हर सैलून से कितनी कमाई हो रही है' },
                  { risk: 'टेक्नोलॉजी की मजबूती', status: 'चेक करना बाकी है', kpi: 'ऐप की स्पीड / सर्वर डाउनटाइम' },
                  { risk: 'मुनाफा', status: 'अभी नापना बाकी है', kpi: 'कुल कमाई vs मार्केटिंग खर्च' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                    <td className="py-3.5 px-4 font-heading font-semibold text-white">{row.risk}</td>
                    <td className="py-3.5 px-4">
                      {row.status}
                    </td>
                    <td className="py-3.5 px-4 text-white/60">{row.kpi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 11 — WHAT IS READY VS WHAT IS STILL TO BE PROVEN */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
          {/* Panel 1: What is Ready */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#DAAF37]/5 to-black border border-[#DAAF37]/30 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
                TECHNOLOGY &amp; SYSTEMS COMPLETE
              </span>
              <h4 className="text-lg font-heading font-bold text-white mb-4 uppercase">
                What Is Built &amp; Ready
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-white/80 font-sans">
                <li className="flex items-start gap-2.5">
                  <CheckSquare className="w-4 h-4 text-[#DAAF37] flex-shrink-0 mt-0.5" />
                  <span>Core Product Software code bases (SalonOS &amp; Consumer templates)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckSquare className="w-4 h-4 text-[#DAAF37] flex-shrink-0 mt-0.5" />
                  <span>Core Technology architecture scaling plans</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckSquare className="w-4 h-4 text-[#DAAF37] flex-shrink-0 mt-0.5" />
                  <span>Integrated multi-vertical ecosystem blueprints</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckSquare className="w-4 h-4 text-[#DAAF37] flex-shrink-0 mt-0.5" />
                  <span>Launch infrastructure ready triggers</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Panel 2: What is still to be proven */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#090909] border border-white/10 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase block mb-1">
                COMMERCIAL SCALING RISK BARRIERS
              </span>
              <h4 className="text-lg font-heading font-bold text-white mb-4 uppercase">
                What Is Still To Be Proven
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-white/70 font-sans">
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Commercial scaling traction rates post-launch</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Salon onboarding efficiency &amp; partner conversion CAC</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Customer user acquisition economics (Ad spends vs transaction fees)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Ecosystem active repeat booking retention margins</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Large-scale support operations stability</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Long-term operational net profitability levels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RISK MANAGEMENT CYCLE PRINCIPLE */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.03] to-[#070707] border border-white/10 mb-12 text-center">
          <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
            CONTINUOUS VERIFICATION CYCLE
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-6 uppercase">
            Risk Management Life Cycle
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 lg:gap-4 max-w-4xl mx-auto text-xs font-heading font-bold text-center">
            <div className="px-5 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-white w-full md:w-auto min-w-[120px]">
              IDENTIFY
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden md:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] md:hidden" />

            <div className="px-5 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-white w-full md:w-auto min-w-[120px]">
              MEASURE
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden md:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] md:hidden" />

            <div className="px-5 py-2.5 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/35 text-[#F4D03F] w-full md:w-auto min-w-[120px]">
              MONITOR
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden md:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] md:hidden" />

            <div className="px-5 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-white w-full md:w-auto min-w-[120px]">
              IMPROVE
            </div>
            <ArrowRight className="w-4 h-4 text-[#DAAF37] hidden md:block" />
            <ArrowDown className="w-4 h-4 text-[#DAAF37] md:hidden" />

            <div className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-black via-[#DAAF37]/20 to-black border-2 border-[#DAAF37] text-white w-full md:w-auto min-w-[120px]">
              SCALE
            </div>
          </div>

          <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed max-w-3xl mx-auto mt-6">
            Nexora ka primary objective operational risks ko pretend karna nahi, balki actual live tracking data analysis ke through continuously monitor aur manage karna hai.
          </p>
        </div>

        {/* IMPORTANT INVESTOR WARNING NOTICE */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0C0908] border border-red-500/20 text-left mb-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-950/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-heading font-bold text-red-400 uppercase tracking-widest block">
                IMPORTANT WARNING REGARDING INVESTMENT RISKS
              </span>
              <p className="text-xs sm:text-sm text-white/90 font-sans leading-relaxed">
                Actual business results, operations, active transactions aur growth velocities humare initial management projections se materially different ho sakte hain.
              </p>
              <p className="text-xs text-white/75 font-sans leading-relaxed">
                Early-stage startup equity investments carry elevated levels of market volatility, competition threats aur capital constraints. Participation in this syndicate involves risk of partial or complete capital loss. Investors are advised to evaluate documents carefully before commitment.
              </p>
            </div>
          </div>
        </div>

        {/* INVESTOR TAKEAWAY - SECTION 22 END STATEMENT */}
        <div className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-black via-[#DAAF37]/15 to-black border border-[#DAAF37]/45 text-center shadow-[0_4px_24px_rgba(0,0,0,0.6)] animate-pulse">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
            Risk Takeaway
          </span>
          <h4 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-white mb-2 tracking-tight uppercase leading-snug">
            &ldquo;NEXORA KO SIRF GROWTH NAHI, RISK DISCIPLINE BHI CHAHIYE.&rdquo;
          </h4>
          <p className="text-xs sm:text-sm text-white/70 font-sans max-w-2xl mx-auto leading-relaxed text-wrap">
            Investor ke liye important hai ki company apne assumptions ko actual market data se continuously validate kare.
          </p>
        </div>
      </section>

      {/* SECTION 23 — ACTUAL BUSINESS REPORTING & INVESTOR TRANSPARENCY */}
      <section
        id="investor-actual-reporting"
        aria-label="Actual Business Reporting &amp; Investor Transparency Section"
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-[#DAAF37]/25"
      >
        {/* Subtle Ambient Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[400px] bg-gradient-to-b from-[#DAAF37]/[0.05] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/35 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F4D03F]" />
            INVESTOR REPORTING: TRANSPARENCY FIRST
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            INVESTOR KO ACTUAL{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              PERFORMANCE KAISE DIKHAYI
            </span>{' '}
            JAYEGI?
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-sans max-w-3xl mx-auto leading-relaxed text-wrap">
            Investor reporting ka focus verified business performance par hoga — projections ko actual results ke saath mix nahi kiya jayega.
          </p>
        </div>

        {/* SECTION 1 — WHAT WILL BE MEASURED? (KPI Dashboard Grid) */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="text-center mb-6">
            <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
              REPORTING KPI FRAMEWORK
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white uppercase">
              Actual business metrics ko kaise measure kiya jayega?
            </h3>
            <p className="text-xs text-white/50 font-sans mt-2">
              * Note: Yeh ek informational presentation grid hai, koi live analytics console ya fake automated dashboard nahi. Metrics platform launch ke baad operational hone par update honge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* KPI 1: Active Salons */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-heading font-black text-[#DAAF37] block mb-1 uppercase tracking-wider">
                  01. ACTIVE SALONS
                </span>
                <p className="text-xs text-white/60 font-sans mb-3">
                  Verified live salons jo platform ke active operating network ka part hain.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5">
                <span className="text-xs text-red-400 font-heading font-bold uppercase tracking-wider block">
                  Data Not Available Yet
                </span>
              </div>
            </div>

            {/* KPI 2: Total / Active Customers */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-heading font-black text-[#DAAF37] block mb-1 uppercase tracking-wider">
                  02. TOTAL / ACTIVE CUSTOMERS
                </span>
                <p className="text-xs text-white/60 font-sans mb-3">
                  Verified customer accounts and active booking clients counts in reporting periods.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5">
                <span className="text-xs text-red-400 font-heading font-bold uppercase tracking-wider block">
                  Data Not Available Yet
                </span>
              </div>
            </div>

            {/* KPI 3: Actual Bookings */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-heading font-black text-[#DAAF37] block mb-1 uppercase tracking-wider">
                  03. ACTUAL BOOKINGS
                </span>
                <p className="text-xs text-white/60 font-sans mb-3">
                  Completed &amp; eligible service bookings as defined by the core transaction database.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5">
                <span className="text-xs text-red-400 font-heading font-bold uppercase tracking-wider block">
                  Data Not Available Yet
                </span>
              </div>
            </div>

            {/* KPI 4: Booked Service Value / GMV */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-heading font-black text-[#DAAF37] block mb-1 uppercase tracking-wider">
                  04. BOOKED SERVICE VALUE / GMV
                </span>
                <p className="text-xs text-white/60 font-sans mb-3">
                  Actual booking transaction value processed or recorded through database logs.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5">
                <span className="text-xs text-red-400 font-heading font-bold uppercase tracking-wider block">
                  Data Not Available Yet
                </span>
              </div>
            </div>

            {/* KPI 5: Nexora Revenue */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-heading font-black text-[#DAAF37] block mb-1 uppercase tracking-wider">
                  05. NEXORA REVENUE
                </span>
                <p className="text-xs text-white/60 font-sans mb-3">
                  Actual recognized company revenue (10% commission recognized on platform settlements).
                </p>
              </div>
              <div className="pt-3 border-t border-white/5">
                <span className="text-xs text-red-400 font-heading font-bold uppercase tracking-wider block">
                  Data Not Available Yet
                </span>
              </div>
            </div>

            {/* KPI 6: Advertising Revenue */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-heading font-black text-[#DAAF37] block mb-1 uppercase tracking-wider">
                  06. ADVERTISING REVENUE
                </span>
                <p className="text-xs text-white/60 font-sans mb-3">
                  Actual advertising fee revenue collected from verified premium slots promotions.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5">
                <span className="text-xs text-red-400 font-heading font-bold uppercase tracking-wider block">
                  Data Not Available Yet
                </span>
              </div>
            </div>

            {/* KPI 7: Operating Costs */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-heading font-black text-[#DAAF37] block mb-1 uppercase tracking-wider">
                  07. OPERATING COSTS
                </span>
                <p className="text-xs text-white/60 font-sans mb-3">
                  Actual recorded operating costs, tech stacks, and customer/salon acquisition bills.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5">
                <span className="text-xs text-red-400 font-heading font-bold uppercase tracking-wider block">
                  Data Not Available Yet
                </span>
              </div>
            </div>

            {/* KPI 8: Profit / Loss */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-heading font-black text-[#DAAF37] block mb-1 uppercase tracking-wider">
                  08. PROFIT / LOSS
                </span>
                <p className="text-xs text-white/60 font-sans mb-3">
                  Actual reported statutory financial results generated from books of accounts.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5">
                <span className="text-xs text-red-400 font-heading font-bold uppercase tracking-wider block">
                  Data Not Available Yet
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2 — ACTUAL VS PROJECTED Visual Comparison */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          {/* Panel 1: ACTUAL / VERIFIED */}
          <div className="p-6 sm:p-8 rounded-3xl bg-red-500/5 border border-red-500/20 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-red-400 uppercase tracking-widest block mb-1">
                ACTUAL / VERIFIED RECORD
              </span>
              <h4 className="text-lg font-heading font-bold text-white mb-6 uppercase">
                Current Live Metrics
              </h4>
              <div className="space-y-4 text-xs sm:text-sm font-sans">
                <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                  <span className="text-white/60">Current Active Salons:</span>
                  <span className="text-red-400 font-heading font-bold uppercase text-[11px] tracking-wide">
                    Data Not Available Yet
                  </span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                  <span className="text-white/60">Current Customers:</span>
                  <span className="text-red-400 font-heading font-bold uppercase text-[11px] tracking-wide">
                    Data Not Available Yet
                  </span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                  <span className="text-white/60">Actual Booking volume:</span>
                  <span className="text-red-400 font-heading font-bold uppercase text-[11px] tracking-wide">
                    Data Not Available Yet
                  </span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                  <span className="text-white/60">Actual company revenue:</span>
                  <span className="text-red-400 font-heading font-bold uppercase text-[11px] tracking-wide">
                    Data Not Available Yet
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 p-3 rounded-xl bg-red-950/20 border border-red-500/10 text-center text-[10px] text-red-300 leading-relaxed font-sans">
              * Note: Nexora launch pre-stage par hai. Actual current traffic/salons count zero hai aur verification platform live hone ke baad hi start hogi.
            </div>
          </div>

          {/* Panel 2: MODELED / PROJECTED */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#DAAF37]/5 border border-[#DAAF37]/30 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block mb-1">
                MANAGEMENT MODEL / PROJECTION
              </span>
              <h4 className="text-lg font-heading font-bold text-white mb-6 uppercase">
                1,000 Salons Model target
              </h4>
              <div className="space-y-4 text-xs sm:text-sm font-sans">
                <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                  <span className="text-white/70">Modeled Active Salons:</span>
                  <span className="text-white font-heading font-semibold text-right">1,000 Salons</span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                  <span className="text-white/70">Annual Booked Service Value:</span>
                  <span className="text-white font-heading font-semibold text-right">₹36 Cr (Modeled GMV)</span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                  <span className="text-white/70">10% Platform Commission Revenue:</span>
                  <span className="text-white font-heading font-semibold text-right">₹3.60 Cr</span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                  <span className="text-white/70">Annual Modeled Advertising Revenue:</span>
                  <span className="text-white font-heading font-semibold text-right">₹12 Lakh</span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-b border-white/5 text-[#DAAF37]">
                  <span className="font-heading font-bold">Total Modeled Revenue:</span>
                  <span className="font-heading font-bold text-right text-base">₹3.72 Cr / Year</span>
                </div>
              </div>
            </div>
            <div className="mt-8 p-3 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/20 text-center text-[10px] text-[#FFF2B2] leading-relaxed font-sans">
              * Note: Yeh numbers standard operational efficiency and target parameters hain, actual financial outcomes ya guaranteed receipts nahi.
            </div>
          </div>
        </div>

        {/* SECTION 3 & 4 — REPORTING FREQUENCY & WHAT WILL A REPORT CONTAIN? */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          {/* Panel A: Reporting Frequency */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#090909] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-[#DAAF37]" />
                <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block">
                  Reporting Frequency Check
                </span>
              </div>
              <h4 className="text-lg font-heading font-bold text-white mb-4 uppercase">
                Ye information kitni frequently milegi?
              </h4>
              <div className="p-4 rounded-xl bg-white/[0.02] border-2 border-dashed border-amber-500/30 text-amber-300 font-heading font-bold text-center text-xs sm:text-sm py-6 my-4 leading-relaxed">
                Reporting frequency: To Be Finalized in the applicable investor documentation.
              </div>
              <p className="text-xs text-white/60 font-sans leading-relaxed">
                * Note: Standard regulatory or operational reporting schedule investor-agreements signoff aur formal syndicate structures complete hone par corporate advisory limits ke standard according hi establish kiya jayega. Hum koi arbitrary weekly/monthly reports claim nahi karte.
              </p>
            </div>
          </div>

          {/* Panel B: Report Content Breakdown */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#090909] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-[#DAAF37]" />
                <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block">
                  REPORT CONTENT STRUCTURE
                </span>
              </div>
              <h4 className="text-lg font-heading font-bold text-white mb-4 uppercase">
                Report ke andara kya metrics include honge?
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Hum standard operational ledger updates, balance details aur statutory sheets ko categorize karenge:
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-white/90 font-sans">
                <div>
                  <strong className="text-white block font-heading">• BUSINESS PERFORMANCE:</strong>
                  <span className="text-white/60 block text-xs pl-3">Active salons, Customers, Completed Bookings, and Booked Service Value (GMV).</span>
                </div>
                <div>
                  <strong className="text-white block font-heading">• FINANCIAL PERFORMANCE:</strong>
                  <span className="text-white/60 block text-xs pl-3">Recognized Commission Revenue, Major direct expenses, operating Profit / Loss, and banking cash balance position.</span>
                </div>
                <div>
                  <strong className="text-white block font-heading">• OPERATING PERFORMANCE:</strong>
                  <span className="text-white/60 block text-xs pl-3">New salon acquisition rates, Customer acquisition costs (CAC), Repeat booking retention percentages, and system metrics.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5 — DATA SOURCE / TRACEABILITY FLOW */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#090909] border border-white/10 mb-12">
          <div className="text-center mb-8">
            <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
              DATA TRACEABILITY FLOW
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white uppercase">
              Reporting Data Ka Source Kahan Se Aayega?
            </h3>
            <p className="text-xs text-white/50 font-sans mt-2 max-w-2xl mx-auto">
              Nexora reports mein static estimates ya guesses use karne ke bajaye live server logs, merchant portal databases aur bank transactional statements ko data pipeline source banayega.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 text-center">
            {/* Source 1 */}
            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-[#DAAF37]/30 transition-colors">
              <Database className="w-5 h-5 text-[#DAAF37] mx-auto mb-2" />
              <span className="text-[10px] font-heading font-black text-white uppercase block mb-1">BOOKINGS</span>
              <span className="text-[9px] text-white/50 font-sans leading-snug block">Booking database logs &amp; transaction database</span>
            </div>

            {/* Source 2 */}
            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-[#DAAF37]/30 transition-colors">
              <CreditCard className="w-5 h-5 text-[#DAAF37] mx-auto mb-2" />
              <span className="text-[10px] font-heading font-black text-white uppercase block mb-1">PAYMENTS</span>
              <span className="text-[9px] text-white/50 font-sans leading-snug block">Payment Gateway logs &amp; bank ledger records</span>
            </div>

            {/* Source 3 */}
            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-[#DAAF37]/30 transition-colors">
              <Coins className="w-5 h-5 text-[#DAAF37] mx-auto mb-2" />
              <span className="text-[10px] font-heading font-black text-white uppercase block mb-1">REVENUE</span>
              <span className="text-[9px] text-white/50 font-sans leading-snug block">Company Accounting records &amp; finance ledgers</span>
            </div>

            {/* Source 4 */}
            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-[#DAAF37]/30 transition-colors">
              <Building2 className="w-5 h-5 text-[#DAAF37] mx-auto mb-2" />
              <span className="text-[10px] font-heading font-black text-white uppercase block mb-1">SALON COUNT</span>
              <span className="text-[9px] text-white/50 font-sans leading-snug block">Verified active salon contracts &amp; onboarding registries</span>
            </div>

            {/* Source 5 */}
            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-[#DAAF37]/30 transition-colors">
              <Users className="w-5 h-5 text-[#DAAF37] mx-auto mb-2" />
              <span className="text-[10px] font-heading font-black text-white uppercase block mb-1">CUSTOMER COUNT</span>
              <span className="text-[9px] text-white/50 font-sans leading-snug block">Verified active consumer profiles database</span>
            </div>

            {/* Source 6 */}
            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-[#DAAF37]/30 transition-colors">
              <FileText className="w-5 h-5 text-[#DAAF37] mx-auto mb-2" />
              <span className="text-[10px] font-heading font-black text-white uppercase block mb-1">EXPENSES</span>
              <span className="text-[9px] text-white/50 font-sans leading-snug block">Accounting entries &amp; standard invoice/bank outputs</span>
            </div>

            {/* Source 7 */}
            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-[#DAAF37]/30 transition-colors">
              <BarChart3 className="w-5 h-5 text-[#DAAF37] mx-auto mb-2" />
              <span className="text-[10px] font-heading font-black text-white uppercase block mb-1">PROFIT / LOSS</span>
              <span className="text-[9px] text-white/50 font-sans leading-snug block">Financial statements &amp; standard management accounts</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 text-center text-[10px] text-white/40 italic">
            * Note: Nexora reports ko standard internal bookkeeping records se produce kiya jayega. Hum un-audited statements ko statutory audited data ke form mein claim nahi karte jab tak official yearly audit completed na ho.
          </div>
        </div>

        {/* SECTION 6 — VERIFIED DATA PRINCIPLE */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-black via-[#DAAF37]/15 to-black border border-[#DAAF37]/45 text-center shadow-md mb-12">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
            VERIFIED DATA PRINCIPLE
          </span>
          <h4 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-white mb-3 uppercase tracking-tight leading-snug">
            &ldquo;REPORTING SHOULD BE BASED ON RECORDS — NOT ESTIMATES.&rdquo;
          </h4>
          <p className="text-xs sm:text-sm text-white/80 font-sans max-w-2xl mx-auto leading-relaxed">
            Investor reporting mein actual transaction records aur company financial records ko priority di jayegi. Management projections ko baseline estimations ke andara clearly separate label kiya jayega.
          </p>
        </div>

        {/* SECTION 7 — INVESTOR REPORTING VS PUBLIC WEBSITE (3-Layer Hierarchy) */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#080808] border border-white/10 mb-12">
          <div className="text-center mb-8">
            <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
              INFORMATION ACCESS LEVELS
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white uppercase">
              How Information Is Managed (3-Layer Access)
            </h3>
            <p className="text-xs text-white/60 font-sans mt-2 max-w-2xl mx-auto">
              Har details ya financial spreadsheet ko public page par render karna business strategy, partner security aur compliance constraints ke rules ke against hai. Isliye information three structured layers mein share hoti hai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8">
            {/* Layer 1 */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 rounded bg-white/10 text-white text-[9px] font-heading font-bold uppercase tracking-wider inline-block mb-3">
                  LAYER 1 — PUBLIC WEBSITE
                </span>
                <h4 className="text-sm font-heading font-bold text-white mb-2 uppercase">
                  High-Level Business overview
                </h4>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  Basic corporate model concept, product workflows, brand roadmap structures, customer application demo platforms, and public investor presentation terms.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[9px] text-[#DAAF37] font-semibold">
                * ACCESSIBLE FOR ALL VISITORS
              </div>
            </div>

            {/* Layer 2 */}
            <div className="p-6 rounded-2xl bg-[#DAAF37]/5 border border-[#DAAF37]/35 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 rounded bg-[#DAAF37]/20 text-[#FFF2B2] text-[9px] font-heading font-bold uppercase tracking-wider inline-block mb-3">
                  LAYER 2 — INVESTOR REPORTING
                </span>
                <h4 className="text-sm font-heading font-bold text-white mb-2 uppercase">
                  Actual Business Performance
                </h4>
                <p className="text-xs text-white/80 font-sans leading-relaxed">
                  Actual operational KPIs, verified active salons count, bookings volume logs, generated commission revenues tracker sheets, and approved financial statements metrics.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#DAAF37]/20 text-[9px] text-[#F4D03F] font-semibold">
                * FOR CONTRACTUAL INVESTORS ONLY
              </div>
            </div>

            {/* Layer 3 */}
            <div className="p-6 rounded-2xl bg-[#DAAF37]/15 border border-[#DAAF37]/50 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 rounded bg-[#DAAF37]/30 text-white text-[9px] font-heading font-bold uppercase tracking-wider inline-block mb-3">
                  LAYER 3 — DATA ROOM
                </span>
                <h4 className="text-sm font-heading font-bold text-white mb-2 uppercase">
                  Due-Diligence Data Room
                </h4>
                <p className="text-xs text-white/90 font-sans leading-relaxed">
                  Highly confidential statutory filings, bank transaction statements, developer code assignment contracts, live servers logs access under signed confidentiality NDAs.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#DAAF37]/35 text-[9px] text-white font-semibold">
                * SUBJECT TO NDA / REGISTERED INVESTOR CHECKS
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed text-center max-w-3xl mx-auto">
            &ldquo;Har information public website par publish karna zaroori nahi hota. Detailed confidential records controlled investor due diligence ke through share kiye ja sakte hain.&rdquo;
          </p>
        </div>

        {/* SECTION 8 & 10 — TRANSPARENCY MODULES (NOT ACTUAL vs NEGATIVE OUTCOMES) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          {/* Panel 1: What is NOT actual */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0F0D0A] border border-red-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 text-red-400">
                <AlertCircle className="w-4 h-4" />
                <span className="text-xs font-heading font-bold uppercase tracking-wider">
                  MODEL ASSUMPTIONS TRANSPARENCY
                </span>
              </div>
              <h4 className="text-base font-heading font-bold text-white mb-4 uppercase">
                Investor ko kya nahi dikhaya jayega as Actual?
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                Yeh baseline parameters standard model projections hain, inhein actual company achievement ya verified outputs ke form mein publish nahi kiya jayega:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-white/80">
                <div className="p-2.5 rounded bg-white/[0.01] border border-white/5">• 1,000 Salons Target <span className="text-red-400 block font-heading font-bold text-[9px] uppercase mt-0.5">Not Current Actual</span></div>
                <div className="p-2.5 rounded bg-white/[0.01] border border-white/5">• ₹30,000 / Salon Monthly <span className="text-red-400 block font-heading font-bold text-[9px] uppercase mt-0.5">Assumption Only</span></div>
                <div className="p-2.5 rounded bg-white/[0.01] border border-white/5">• ₹36 Cr Modeled GMV <span className="text-red-400 block font-heading font-bold text-[9px] uppercase mt-0.5">Not Current Actual</span></div>
                <div className="p-2.5 rounded bg-white/[0.01] border border-white/5">• ₹3.60 Cr Commission Revenue <span className="text-red-400 block font-heading font-bold text-[9px] uppercase mt-0.5">Not Current Actual</span></div>
                <div className="p-2.5 rounded bg-white/[0.01] border border-white/5">• ₹12 Lakh Ad Revenue <span className="text-red-400 block font-heading font-bold text-[9px] uppercase mt-0.5">Not Current Actual</span></div>
                <div className="p-2.5 rounded bg-white/[0.01] border border-white/5">• ₹3.72 Cr Modeled total revenue <span className="text-red-400 block font-heading font-bold text-[9px] uppercase mt-0.5">Not Current Actual</span></div>
                <div className="p-2.5 rounded bg-white/[0.01] border border-white/5">• ₹11,575 Monthly equivalent <span className="text-red-400 block font-heading font-bold text-[9px] uppercase mt-0.5">Not Current Actual</span></div>
                <div className="p-2.5 rounded bg-white/[0.01] border border-white/5">• 43 Months Illustrative payback <span className="text-red-400 block font-heading font-bold text-[9px] uppercase mt-0.5">Projection Model</span></div>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-white/5 text-[9px] text-white/50 italic">
              * Note: Hum standard baseline model numbers (from Sections 2, 6, 7 &amp; 14) unchanged maintain karte hain aur initial projections mein koi change assume nahi karte.
            </div>
          </div>

          {/* Panel 2: Negative Outcomes Matter */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#090909] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 text-[#DAAF37]">
                <TrendingDown className="w-4 h-4" />
                <span className="text-xs font-heading font-bold uppercase tracking-wider">
                  HONEST REPORTING ETHIC
                </span>
              </div>
              <h4 className="text-base font-heading font-bold text-white mb-4 uppercase">
                Negative results also matter to us
              </h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                &ldquo;Reporting ka purpose sirf growth numbers dikhana nahi hai.&rdquo; Real operational risks, system failures aur challenges ko bhi standard transparency reports mein directly report kiya jayega:
              </p>
              <div className="space-y-3.5 text-xs sm:text-sm text-white/80 font-sans">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DAAF37] mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Lower bookings volume:</strong>
                    <span className="text-white/60 block text-xs">Expected target level calculations se transaction booking volume lower record hona.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DAAF37] mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Higher operational costs:</strong>
                    <span className="text-white/60 block text-xs">Customer marketing ad spreads or technical maintenance expenses target projections se badhna.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DAAF37] mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Cancellations, Churn &amp; Tech issues:</strong>
                    <span className="text-white/60 block text-xs">Salon partners and users dropouts metrics, cancellations rate spike, and server database downtime logs.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 9, 11 & 12 — TRENDS, ROLES & CORRECTIONS */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
          {/* Block 1: Trend Changes Mapping */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-[#DAAF37]" />
                <span className="text-[10px] font-heading font-black text-[#DAAF37] uppercase block tracking-wider">
                  TRENDS ANALYSIS LAYOUT
                </span>
              </div>
              <h4 className="text-sm font-heading font-bold text-white mb-2 uppercase">
                Performance Change tracking
              </h4>
              <p className="text-xs text-white/60 font-sans leading-relaxed mb-4">
                Comparison mapping logic (Previous Period vs Current Period) for tracking salon and user growth, transaction booking spikes, repeat booking curves, and acquisition costs.
              </p>
              <div className="p-3 rounded-lg bg-red-950/10 border border-red-500/15 text-[10px] text-red-300">
                <strong>Current History:</strong> Data Not Available Yet. Fictional baseline historical periods are not assumed or created.
              </div>
            </div>
          </div>

          {/* Block 2: Preparers & Review roles */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-[#DAAF37]" />
                <span className="text-[10px] font-heading font-black text-[#DAAF37] uppercase block tracking-wider">
                  REPORT PREPARATION DESK
                </span>
              </div>
              <h4 className="text-sm font-heading font-bold text-white mb-2 uppercase">
                Who Prepares &amp; Reviews?
              </h4>
              <div className="space-y-2.5 text-xs text-white/70 font-sans">
                <div>• <strong className="text-white">Business / Management:</strong> Real-time operational data collection &amp; team updates oversight.</div>
                <div>• <strong className="text-white">Finance / Accounting:</strong> Bank reconcile ledgers, receipts validation &amp; balance books.</div>
                <div>• <strong className="text-white">CA / Auditor:</strong> Statutory reviews, tax file registrations &amp; audit declarations where applicable.</div>
                <div>• <strong className="text-white">Investor Syndicate:</strong> Shared logs verification &amp; diligence ledger audits.</div>
              </div>
            </div>
          </div>

          {/* Block 3: Correction & updates */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <RefreshCw className="w-4 h-4 text-[#DAAF37]" />
                <span className="text-[10px] font-heading font-black text-[#DAAF37] uppercase block tracking-wider">
                  CORRECTION PRINCIPLE
                </span>
              </div>
              <h4 className="text-sm font-heading font-bold text-white mb-2 uppercase">
                Correction &amp; Data update rule
              </h4>
              <p className="text-xs text-white/75 font-sans leading-relaxed mb-4">
                &ldquo;Agar previously reported information mein material correction required ho, updated information ko appropriate note ke saath communicate kiya jana chahiye.&rdquo;
              </p>
              <p className="text-xs text-white/50 font-sans leading-relaxed">
                Nexora data integrity ko priority deta hai. Koi bhi reporting errors monitor hone par immediately note details ke saath reconcile karke resubmit ki jayegi.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 13 — INVESTOR TRUST PRINCIPLE CARD */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#DAAF37]/5 to-[#0A0A0A] border border-[#DAAF37]/30 text-center mb-12">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
            INVESTOR TRUST PRINCIPLE
          </span>
          <h4 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-white mb-3 uppercase tracking-tight leading-snug">
            &ldquo;ACTUAL DATA FIRST. PROJECTION SECOND.&rdquo;
          </h4>
          <p className="text-xs sm:text-sm text-[#FFF2B2] font-sans max-w-2xl mx-auto leading-relaxed">
            Projection business planning ke liye hai. Investor reporting mein actual verified performance ko priority milni chahiye taaki actual financial growth tracks par hi decisions liye ja sakein.
          </p>
        </div>

        {/* INVESTOR TAKEAWAY - SECTION 23 END STATEMENT */}
        <div className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-black via-[#DAAF37]/20 to-black border-2 border-[#DAAF37] text-center shadow-[0_4px_24px_rgba(218,175,55,0.25)] animate-pulse">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
            Investor Takeaway
          </span>
          <h4 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-white mb-2 tracking-tight uppercase leading-snug">
            &ldquo;INVESTOR KO PROJECTION NAHI, ACTUAL PERFORMANCE DEKHNI HAI.&rdquo;
          </h4>
          <p className="text-xs sm:text-sm text-white/70 font-sans max-w-2xl mx-auto leading-relaxed text-wrap">
            Nexora ka long-term investor reporting model actual business records, financial records aur clearly labelled management projections ke beech clear distinction maintain karega.
          </p>
        </div>
        {/* INVESTOR TAKEAWAY - SECTION 23 END STATEMENT */}
        <div className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-black via-[#DAAF37]/20 to-black border-2 border-[#DAAF37] text-center shadow-[0_4px_24px_rgba(218,175,55,0.25)] animate-pulse">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
            Investor Takeaway
          </span>
          <h4 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-white mb-2 tracking-tight uppercase leading-snug">
            &ldquo;INVESTOR KO PROJECTION NAHI, ACTUAL PERFORMANCE DEKHNI HAI.&rdquo;
          </h4>
          <p className="text-xs sm:text-sm text-white/70 font-sans max-w-2xl mx-auto leading-relaxed text-wrap">
            Nexora ka long-term investor reporting model actual business records, financial records aur clearly labelled management projections ke beech clear distinction maintain karega.
          </p>
        </div>
      </section>

      {/* SECTION 24 — INVESTOR DATA ROOM — KYA-KYA VERIFY KAR SAKTE HAIN? */}
      <section
        id="investor-data-room"
        aria-label="Investor Data Room and Document Verification Section"
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-[#DAAF37]/25"
      >
        {/* Subtle Ambient Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[400px] bg-gradient-to-b from-[#DAAF37]/[0.05] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/35 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Lock className="w-3.5 h-3.5 text-[#F4D03F]" />
            INVESTOR DATA ROOM: CONTROLLED ACCESS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            INVEST KARNE SE PEHLE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              KYA VERIFY KAR SAKTE
            </span>{' '}
            HAIN?
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-sans max-w-3xl mx-auto leading-relaxed text-wrap">
            Nexora ke important company, financial, legal, technology aur business records appropriate due diligence process mein review kiye ja sakte hain.
          </p>
        </div>

        {/* SECTION 7 — STATUS LEGEND CARD */}
        <div className="max-w-4xl mx-auto mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-wrap items-center justify-center gap-6 text-[10px] font-heading font-bold text-white/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DAAF37] block" />
            <span>✅ VERIFIED / AVAILABLE : Document actually available &amp; verified</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 block" />
            <span>🟡 TO BE VERIFIED : Document exists &amp; requires confirmation / review</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#757575] block" />
            <span>🟠 TO BE FINALIZED : Document/process is not yet complete</span>
          </div>
        </div>

        {/* SECTIONS 1–5: DOCUMENT CATEGORY CARDS GRIDS */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Company Documents */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-4 h-4 text-[#DAAF37]" />
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                  Company Documents
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Investor company ki legal identity aur ownership structure verify kar sakta hai.
              </p>
              <div className="space-y-2 text-xs text-white/50 font-sans">
                <div className="flex justify-between items-center">
                  <span>• Certificate of Incorporation</span>
                  <span className="text-amber-400 font-semibold uppercase text-[9px]">🟡 TO BE VERIFIED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• MOA / AOA Drafts</span>
                  <span className="text-amber-400 font-semibold uppercase text-[9px]">🟡 TO BE VERIFIED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• PAN Card Details</span>
                  <span className="text-amber-400 font-semibold uppercase text-[9px]">🟡 TO BE VERIFIED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Registered Office Details</span>
                  <span className="text-amber-400 font-semibold uppercase text-[9px]">🟡 TO BE VERIFIED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Current Cap Table Registry</span>
                  <span className="text-white/40 font-semibold uppercase text-[9px]">🟠 TO BE FINALIZED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Financial Documents */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Coins className="w-4 h-4 text-[#DAAF37]" />
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                  Financial Records
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Investor actual business performance aur financial model ko alag-alag samajh aur review kar sakta hai.
              </p>
              <div className="space-y-2 text-xs text-white/50 font-sans">
                <div className="flex justify-between items-center">
                  <span>• Financial Statements</span>
                  <span className="text-white/40 font-semibold uppercase text-[9px]">🟠 TO BE FINALIZED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Management Accounts</span>
                  <span className="text-white/40 font-semibold uppercase text-[9px]">🟠 TO BE FINALIZED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Revenue ledger reports</span>
                  <span className="text-white/40 font-semibold uppercase text-[9px]">🟠 TO BE FINALIZED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Expense bank transaction bills</span>
                  <span className="text-white/40 font-semibold uppercase text-[9px]">🟠 TO BE FINALIZED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Projection / Financial Model</span>
                  <span className="text-[#DAAF37] font-semibold uppercase text-[9px]">✅ VERIFIED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Investment Documents */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileCheck className="w-4 h-4 text-[#DAAF37]" />
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                  Investment Documents
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Investor ke actual rights aur obligations formal legal agreements aur signed terms se decide honge.
              </p>
              <div className="space-y-2 text-xs text-white/50 font-sans">
                <div className="flex justify-between items-center">
                  <span>• Investment Agreement Template</span>
                  <span className="text-white/40 font-semibold uppercase text-[9px]">🟠 TO BE FINALIZED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Shareholders&apos; Agreement Draft</span>
                  <span className="text-white/40 font-semibold uppercase text-[9px]">🟠 TO BE FINALIZED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Valuation Support files</span>
                  <span className="text-white/40 font-semibold uppercase text-[9px]">🟠 TO BE FINALIZED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Syndicate Allotment records</span>
                  <span className="text-white/40 font-semibold uppercase text-[9px]">🟠 TO BE FINALIZED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Proposed Investor Terms Sheet</span>
                  <span className="text-amber-400 font-semibold uppercase text-[9px]">🟡 TO BE VERIFIED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Technology & IP Documents */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileCode className="w-4 h-4 text-[#DAAF37]" />
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                  Technology / IP Records
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Investor verify kar sakta hai ki Nexora ke important technology assets ka ownership aur control kis ke paas hai.
              </p>
              <div className="space-y-2 text-xs text-white/50 font-sans">
                <div className="flex justify-between items-center">
                  <span>• Code Ownership / IP Assignment</span>
                  <span className="text-amber-400 font-semibold uppercase text-[9px]">🟡 TO BE VERIFIED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Developer NDAs &amp; Agreements</span>
                  <span className="text-amber-400 font-semibold uppercase text-[9px]">🟡 TO BE VERIFIED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Primary Domain Name contracts</span>
                  <span className="text-[#DAAF37] font-semibold uppercase text-[9px]">✅ VERIFIED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Brand / Trademark Applications</span>
                  <span className="text-amber-400 font-semibold uppercase text-[9px]">🟡 TO BE VERIFIED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Core Cloud Vendor contracts</span>
                  <span className="text-amber-400 font-semibold uppercase text-[9px]">🟡 TO BE VERIFIED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Business Documents */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4 text-[#DAAF37]" />
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                  Business Records
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Confidential / protected data will be shared only where appropriate and legally permitted, protecting merchant/user privacy.
              </p>
              <div className="space-y-2 text-xs text-white/50 font-sans">
                <div className="flex justify-between items-center">
                  <span>• Salon Partner Agreements Format</span>
                  <span className="text-amber-400 font-semibold uppercase text-[9px]">🟡 TO BE VERIFIED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Primary Business contracts</span>
                  <span className="text-white/40 font-semibold uppercase text-[9px]">🟠 TO BE FINALIZED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• PG Provider contract drafts</span>
                  <span className="text-amber-400 font-semibold uppercase text-[9px]">🟡 TO BE VERIFIED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Aggregated Booking logs format</span>
                  <span className="text-amber-400 font-semibold uppercase text-[9px]">🟡 TO BE VERIFIED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Data Room Status */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#DAAF37]/5 to-[#0D0D0D] border border-[#DAAF37]/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Lock className="w-4 h-4 text-[#F4D03F]" />
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                  Investor Data Room
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-4">
                Detailed documents appropriate investor due diligence ke stage par provide kiye ja sakte hain. Falsely open data rooms are not claimed.
              </p>
              <div className="p-2.5 rounded bg-black/40 border border-[#DAAF37]/25 text-[11px] text-[#F4D03F] font-sans text-center mb-2">
                STATUS: Controlled Access
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 6 — ACTUAL DATA VS PROJECTION (Critical Warning & Separation) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          {/* Column A: ACTUAL DATA */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-widest block mb-1">
                OPERATIONAL BASELINE (CURRENT)
              </span>
              <h4 className="text-lg font-heading font-bold text-white mb-6 uppercase">
                Actual Data
              </h4>
              <div className="space-y-3 text-xs sm:text-sm font-sans text-white/70">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span>Actual Salons:</span>
                  <span className="font-heading font-bold text-red-400 uppercase text-[10px]">Data Not Available Yet</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span>Actual Customers:</span>
                  <span className="font-heading font-bold text-red-400 uppercase text-[10px]">Data Not Available Yet</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span>Actual Bookings:</span>
                  <span className="font-heading font-bold text-red-400 uppercase text-[10px]">Data Not Available Yet</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span>Actual Revenue:</span>
                  <span className="font-heading font-bold text-red-400 uppercase text-[10px]">Data Not Available Yet</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span>Actual Expenses:</span>
                  <span className="font-heading font-bold text-red-400 uppercase text-[10px]">Data Not Available Yet</span>
                </div>
              </div>
            </div>
            <p className="mt-6 text-[10px] text-white/40 italic font-sans leading-relaxed">
              * Note: Hum core pre-stage traction sections ke records follow karte hain aur validation launch stage ke baad hi active status hold karegi.
            </p>
          </div>

          {/* Column B: MODEL / PROJECTION */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#DAAF37]/5 border border-[#DAAF37]/35 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block mb-1">
                MANAGEMENT MATHEMATICAL CALCULATIONS
              </span>
              <h4 className="text-lg font-heading font-bold text-white mb-6 uppercase">
                Model / Projection
              </h4>
              <div className="space-y-3 text-xs sm:text-sm font-sans text-white/80">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span>Modeled Salons:</span>
                  <span className="font-heading font-semibold text-white">1,000 Salons</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span>Modeled Booking Value (GMV):</span>
                  <span className="font-heading font-semibold text-white">₹36 Cr</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span>Modeled Commission Revenue:</span>
                  <span className="font-heading font-semibold text-white">₹3.60 Cr</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span>Modeled Advertising:</span>
                  <span className="font-heading font-semibold text-white">₹12 Lakh</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5 text-[#DAAF37]">
                  <span className="font-heading font-bold">Total Modeled Revenue:</span>
                  <span className="font-heading font-bold">₹3.72 Cr / Year</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span>Illustrative Monthly Equivalent:</span>
                  <span className="font-heading font-semibold text-white">₹11,575</span>
                </div>
              </div>
            </div>
            <p className="mt-6 text-[10px] text-red-300 font-sans leading-relaxed">
              * Important: Yeh projections mathematical modeling hain aur inhein current actual business results ke roop mein assume nahi karna chahiye.
            </p>
          </div>
        </div>

        {/* SECTION 8 — HOW DOES AN INVESTOR GET ACCESS? (Roadmap Flow) */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#090909] border border-white/10 mb-12 text-center">
          <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
            ACCESS PROTOCOL ROADMAP
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white uppercase mb-6">
            Document Access Kaise Milta Hai?
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
            {[
              { step: '01', name: 'Investor Enquiry' },
              { step: '02', name: 'Basic Discussion' },
              { step: '03', name: 'Identification' },
              { step: '04', name: 'DD Request' },
              { step: '05', name: 'Controlled Access' },
              { step: '06', name: 'Document Review' },
              { step: '07', name: 'Q&amp;A Session' },
              { step: '08', name: 'Decision' },
            ].map((flow, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/35 transition-colors">
                <span className="text-[#DAAF37] block font-heading mb-1 text-[8px] font-black">STEP {flow.step}</span>
                <span className="text-white text-xs block font-sans truncate" dangerouslySetInnerHTML={{ __html: flow.name }} />
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed max-w-3xl mx-auto mt-6">
            &ldquo;Sensitive documents ko public website par upload nahi kiya jayega. Appropriate investors ko controlled access diya ja sakta hai.&rdquo;
          </p>
        </div>

        {/* SECTION 9 — PUBLIC WEBSITE VS DATA ROOM (Comparison Layout) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          {/* Public Website */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-white/40 block mb-1 uppercase tracking-widest">
                INFORMATION LAYER 1
              </span>
              <h4 className="text-lg font-heading font-bold text-white mb-4 uppercase">
                Public Website
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/70 font-sans">
                <li className="flex items-center gap-2">• High-level Business overview &amp; flow maps</li>
                <li className="flex items-center gap-2">• Commission and vertical revenue models</li>
                <li className="flex items-center gap-2">• Standard modeling projections charts</li>
                <li className="flex items-center gap-2">• Operational &amp; execution risk disclosures</li>
                <li className="flex items-center gap-2">• Basic syndicate investment ticket information</li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[10px] text-white/40 uppercase font-heading font-black">
              * Summary Surface
            </div>
          </div>

          {/* Data Room */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#DAAF37]/5 to-[#090909] border border-[#DAAF37]/35 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] block mb-1 uppercase tracking-widest">
                INFORMATION LAYER 2
              </span>
              <h4 className="text-lg font-heading font-bold text-white mb-4 uppercase">
                Confidential Data Room
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/80 font-sans">
                <li className="flex items-center gap-2">• Detailed company incorporation &amp; registration files</li>
                <li className="flex items-center gap-2">• Ledger records, balance accounts &amp; accounting outputs</li>
                <li className="flex items-center gap-2">• Shareholder Agreements &amp; investment contract templates</li>
                <li className="flex items-center gap-2">• Tech assignment agreements &amp; cloud architecture contracts</li>
                <li className="flex items-center gap-2">• Supporting evidence databases logs outputs</li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[10px] text-[#F4D03F] uppercase font-heading font-black">
              * Verified Source
            </div>
          </div>
        </div>

        {/* Large Comparison Quote */}
        <div className="max-w-4xl mx-auto p-4 mb-12 rounded-xl bg-white/[0.01] border border-white/5 text-center text-xs sm:text-sm text-[#FFF2B2] font-sans font-semibold">
          &ldquo;Website summary hai. Data Room verification ke liye hai.&rdquo;
        </div>

        {/* SECTION 10 — CONFIDENTIALITY INFO BLOCK */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#090909] border border-white/10 text-left mb-12">
          <div className="flex items-start gap-4">
            <Lock className="w-6 h-6 text-[#DAAF37] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-base font-heading font-bold text-white mb-2 uppercase">
                Confidentiality and Verification limits
              </h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Some documents confidential ho sakte hain. Access investor verification, confidentiality requirements aur applicable rules ke according diya ja sakta hai. Hum arbitrary automated NDAs claim nahi karte, na hi yeh ensure karte hain ki har single applicant ko complete restricted technology assignments share honge.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 11 — WHAT INVESTOR CAN CHECK (Checklist) */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#080808] border border-white/10 mb-12">
          <div className="text-center mb-6">
            <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
              DUE DILIGENCE PROTOCOLS
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white uppercase">
              Investor Kya-Kya Check Kar Sakta Hai?
            </h3>
            <p className="text-xs text-white/50 font-sans mt-1">
              Easy and practical checklist for self-evaluation during document reviews:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-white/80 font-sans">
            <div className="p-3 rounded-lg bg-white/[0.01] border border-white/5 flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[#DAAF37] shrink-0" />
              <span>Company genuine hai? (Legal entity registries)</span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.01] border border-white/5 flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[#DAAF37] shrink-0" />
              <span>Ownership structure kya hai? (Cap table balance checks)</span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.01] border border-white/5 flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[#DAAF37] shrink-0" />
              <span>Financial model kya hai? (Baseline formula verification)</span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.01] border border-white/5 flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[#DAAF37] shrink-0" />
              <span>Actual aur projection mein kya difference hai? (Separation mapping)</span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.01] border border-white/5 flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[#DAAF37] shrink-0" />
              <span>Technology kis ke control mein hai? (IP source assignments)</span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.01] border border-white/5 flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[#DAAF37] shrink-0" />
              <span>Important agreements available hain? (Partner templates drafts)</span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.01] border border-white/5 flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[#DAAF37] shrink-0" />
              <span>Investment documents clear hain? (Rights &amp; liabilities check)</span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.01] border border-white/5 flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[#DAAF37] shrink-0" />
              <span>Risks properly disclosed hain? (Operational and market checklists)</span>
            </div>
          </div>
        </div>

        {/* SECTION 12 — WHAT WILL NOT BE SHARED PUBLICLY (Privacy & Security Card) */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0C0908] border border-red-500/10 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-950/20 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-heading font-bold text-red-400 uppercase block mb-1">
                SECURITY &amp; PRIVACY RESTRICTIONS
              </span>
              <h4 className="text-base font-heading font-bold text-white uppercase mb-3">
                Public website par normally share nahi honge:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-white/60 mb-4">
                <div>• Passwords &amp; cloud security tokens</div>
                <div>• Gateway API keys &amp; payment credentials</div>
                <div>• Customer personal identifiers data</div>
                <div>• Developer personal agreements salary terms</div>
                <div>• Sensitive system security setup scripts</div>
                <div>• Private repository credentials links</div>
                <div>• Restricted commercial arrangements records</div>
              </div>
              <p className="text-xs text-[#F4D03F] font-sans leading-relaxed italic border-t border-white/5 pt-3">
                &ldquo;Investor transparency aur customer/privacy protection ke beech proper balance maintain kiya jayega.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 14 — IMPORTANT INVESTOR NOTE (Disclaimers) */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white/[0.02] border border-white/10 mb-12 text-center font-sans text-xs sm:text-sm text-white/80 space-y-2 leading-relaxed">
          <p>
            Website par dikhaye gaye numbers aur business information ko supporting records ke saath verify karna investor ke liye important hai.
          </p>
          <p className="text-amber-300 font-semibold text-xs">
            * Actual investment decision se pehle independent legal, tax aur financial advice lena recommended hai.
          </p>
        </div>

        {/* INVESTOR TAKEAWAY - SECTION 24 END STATEMENT */}
        <div className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-black via-[#DAAF37]/20 to-black border-2 border-[#DAAF37] text-center shadow-[0_4px_24px_rgba(218,175,55,0.25)] animate-pulse">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
            Verification Takeaway
          </span>
          <h4 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-white mb-2 tracking-tight uppercase leading-snug">
            &ldquo;INVEST KARNE SE PEHLE VERIFY KAREIN. SIRF WEBSITE PAR DIKHAYE GAYE NUMBERS PAR DEPEND NA KAREIN.&rdquo;
          </h4>
          <p className="text-xs sm:text-sm text-white/70 font-sans max-w-2xl mx-auto leading-relaxed text-wrap">
            Nexora ka goal hai ki appropriate investor due diligence ke through company, financial, legal, technology aur business information ko properly verify kiya ja sake.
          </p>
        </div>
      </section>

      {/* SECTION 25 — INVESTOR JOURNEY — INTEREST SE INVESTMENT TAK */}
      <section
        id="investor-journey"
        aria-label="Investor Journey Section"
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-[#DAAF37]/25 animate-fadeIn"
      >
        {/* Subtle Ambient Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[400px] bg-gradient-to-b from-[#DAAF37]/[0.05] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/35 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Compass className="w-3.5 h-3.5 text-[#F4D03F]" />
            INVESTMENT PROCESS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            INVESTOR BANNE KA{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              PROCESS KYA HAI?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-sans max-w-3xl mx-auto leading-relaxed text-wrap">
            Interest se lekar due diligence, documentation aur applicable investment formalities tak poora process step-by-step.
          </p>
        </div>

        {/* 10 STEP ROADMAP - COMPACT GLASS CARDS */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Step 1: Investor Enquiry */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-heading font-black text-[#DAAF37] tracking-widest">STEP 01</span>
                <Search className="w-4 h-4 text-[#DAAF37]" />
              </div>
              <h4 className="text-base font-heading font-bold text-white uppercase tracking-wider mb-2">
                Investor Enquiry
              </h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Investor sabse pehle Nexora ke investment opportunity ko evaluate karne ke liye enquiry submit karega. Hum direct public checkouts or automatic purchases strictly avoid karte hain.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5">
              <a
                href="#legal-entity-documents"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wide hover:text-white transition-colors"
              >
                Request Investor Information <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Step 2: Initial Discussion */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-heading font-black text-[#DAAF37] tracking-widest">STEP 02</span>
                <MessageSquare className="w-4 h-4 text-[#DAAF37]" />
              </div>
              <h4 className="text-base font-heading font-bold text-white uppercase tracking-wider mb-2">
                Initial Discussion
              </h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Nexora team investor ke saath business model, revenue potential, operations dynamics aur proposed investment structures ke basic components alag-alag discuss karegi.
              </p>
            </div>
            <div className="mt-4 text-[10px] text-white/40 italic font-sans leading-snug">
              * Note: Specific meeting slots, guaranteed syndicate approvals ya equity share allocations is exploratory stage par pre-committed nahi hoti.
            </div>
          </div>

          {/* Step 3: Information Sharing */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-heading font-black text-[#DAAF37] tracking-widest">STEP 03</span>
                <FileText className="w-4 h-4 text-[#DAAF37]" />
              </div>
              <h4 className="text-base font-heading font-bold text-white uppercase tracking-wider mb-2">
                Information Sharing
              </h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Investor ko business model aur proposed structures ke parameters ko detailed level par samajhne ke liye core introductory files share ki jayengi.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-heading font-semibold text-white/50 uppercase">
                <span>• Business Model</span>
                <span>·</span>
                <span>• Revenue Model</span>
                <span>·</span>
                <span>• Projections</span>
                <span>·</span>
                <span>• Risk Map</span>
              </div>
            </div>
          </div>

          {/* Step 4: Due Diligence */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-heading font-black text-[#DAAF37] tracking-widest">STEP 04</span>
                <Lock className="w-4 h-4 text-[#DAAF37]" />
              </div>
              <h4 className="text-base font-heading font-bold text-white uppercase tracking-wider mb-2">
                Due Diligence
              </h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Investor company ke available records (corporate registry filings, legal drafts, cloud domains contracts aur core database log layouts) verify kar sakta hai.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5">
              <a
                href="#investor-data-room"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wide hover:text-white transition-colors"
              >
                See Investor Data Room <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Step 5: Questions & Clarification */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-heading font-black text-[#DAAF37] tracking-widest">STEP 05</span>
                <HelpCircle className="w-4 h-4 text-[#DAAF37]" />
              </div>
              <h4 className="text-base font-heading font-bold text-white uppercase tracking-wider mb-2">
                Questions &amp; Clarification
              </h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Investor apne investment structure, capital allocations, technology mechanisms ya risk parameters related specific queries direct ask kar sakta hai.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[9px] font-heading font-semibold text-white/40 uppercase">
                <span>• Valuation</span>
                <span>• Equity Allotment</span>
                <span>• Spends Split</span>
                <span>• Exit paths</span>
              </div>
            </div>
          </div>

          {/* Step 6: Formal Investment Documents */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-heading font-black text-[#DAAF37] tracking-widest">STEP 06</span>
                <FileCheck className="w-4 h-4 text-[#DAAF37]" />
              </div>
              <h4 className="text-base font-heading font-bold text-white uppercase tracking-wider mb-2">
                Formal Investment Documents
              </h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Agar investor aur company formal investment checks ke baad proceed karne ka clear decision lete hain, to final statutory legal agreements draft/execute honge.
              </p>
              <div className="space-y-1 text-[10px] text-white/50 font-sans">
                <div>• Shareholder Agreement (SHA) Template</div>
                <div>• Equity Share Issue / Subscription Contract</div>
              </div>
            </div>
          </div>

          {/* Step 7: Approvals & Compliance */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-heading font-black text-[#DAAF37] tracking-widest">STEP 07</span>
                <ShieldCheck className="w-4 h-4 text-[#DAAF37]" />
              </div>
              <h4 className="text-base font-heading font-bold text-white uppercase tracking-wider mb-2">
                Approvals &amp; Compliance
              </h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Statutory regulatory checkups, board resolutions approvals, tax registrations verification checks, and official company-law compliance parameters are standardized and closed.
              </p>
            </div>
            <div className="mt-4 text-[10px] text-white/40 italic font-sans leading-snug">
              * Note: Fast-track automatic filings ya pre-assumed fast approval timelines claim nahi kiye jaate.
            </div>
          </div>

          {/* Step 8: Investment Payment */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-heading font-black text-[#DAAF37] tracking-widest">STEP 08</span>
                <Coins className="w-4 h-4 text-[#DAAF37]" />
              </div>
              <h4 className="text-base font-heading font-bold text-white uppercase tracking-wider mb-2">
                Investment Payment
              </h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Formal legal paperwork aur regulatory board compliance approvals complete hone ke baad hi verified company banking channels ke through investment pools accept honge.
              </p>
            </div>
            <div className="mt-4 p-2 rounded bg-red-950/20 border border-red-500/10 text-[9px] text-red-300 font-sans leading-relaxed">
              * Warning: Nexora kisi bhi andara personal accounts, developers wallets ya local independent coordinators ke accounts mein cash/direct transfer support strict ban karta hai.
            </div>
          </div>

          {/* Step 9: Equity / Ownership Record */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DAAF37]/35 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-heading font-black text-[#DAAF37] tracking-widest">STEP 09</span>
                <CheckSquare className="w-4 h-4 text-[#DAAF37]" />
              </div>
              <h4 className="text-base font-heading font-bold text-white uppercase tracking-wider mb-2">
                Equity / Ownership Record
              </h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Company Secretary and advisory team formal filings updates complete hone par target cap tables, share registries registers aur statutory records verify karke update karegi, where applicable.
              </p>
            </div>
          </div>

          {/* Step 10: Ongoing Communication */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#DAAF37]/5 to-[#0D0D0D] border border-[#DAAF37]/30 hover:border-[#DAAF37]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-heading font-black text-[#DAAF37] tracking-widest">STEP 10</span>
                <TrendingUp className="w-4 h-4 text-[#F4D03F]" />
              </div>
              <h4 className="text-base font-heading font-bold text-white uppercase tracking-wider mb-2">
                Ongoing Communication
              </h4>
              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                Process close hone ke baad verified investor core performance matrices, tracking spreadsheets, data reports aur actual accounting records updates access kar sakta hai.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5">
              <a
                href="#investor-actual-reporting"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wide hover:text-white transition-colors"
              >
                See Investor Reporting Section <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* VISUAL ROADMAP TIMELINE */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#090909] border border-white/10 mb-12 text-center">
          <span className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-2">
            CHRONOLOGICAL STEP FLOWMAP
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white uppercase mb-8">
            Ecosystem Onboarding Sequence
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 max-w-4xl mx-auto text-[10px] font-heading font-bold uppercase tracking-wider text-center">
            {[
              '01. Enquiry',
              '02. Discussion',
              '03. Information',
              '04. Due Diligence',
              '05. Questions',
              '06. Documents',
              '07. Approvals',
              '08. Payment',
              '09. Ownership',
              '10. Reporting',
            ].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="py-2.5 px-3 rounded-lg bg-white/[0.02] border border-white/5 text-white/95 hover:border-[#DAAF37]/45 transition-all w-full lg:w-auto lg:min-w-[85px] truncate">
                  {step}
                </div>
                {idx < arr.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#DAAF37]/60 animate-pulse hidden lg:block" />
                )}
                {idx < arr.length - 1 && (
                  <ArrowDown className="w-4 h-4 text-[#DAAF37]/60 animate-bounce lg:hidden my-0.5" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* PUBLIC WEBSITE VS FORMAL INVESTMENT (Comparison Grid) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          {/* Box 1: Public Website */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold text-white/40 block mb-1 uppercase tracking-widest">
                INFORMATION BOUNDARY 01
              </span>
              <h4 className="text-lg font-heading font-bold text-white mb-4 uppercase">
                Public Website Summary
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/70 font-sans">
                <li className="flex items-start gap-1.5">• High-level corporate overviews &amp; product workflows</li>
                <li className="flex items-start gap-1.5">• Direct business models and commission allocations explanations</li>
                <li className="flex items-start gap-1.5">• High-level mathematical calculations &amp; target projections</li>
                <li className="flex items-start gap-1.5">• Public initial syndicate interest enquiry submit channels</li>
              </ul>
            </div>
            <div className="mt-6 pt-3 border-t border-white/5 text-[9px] text-[#DAAF37] font-semibold">
              * INFORMATION &amp; ENQUIRY STAGE
            </div>
          </div>

          {/* Box 2: Formal Legal Investment */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#DAAF37]/5 to-[#090909] border-2 border-[#DAAF37]/35 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-[10px] font-heading font-bold text-[#DAAF37] block mb-1 uppercase tracking-widest">
                INFORMATION BOUNDARY 02
              </span>
              <h4 className="text-lg font-heading font-bold text-white mb-4 uppercase">
                Formal Legal Investment Process
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/80 font-sans">
                <li className="flex items-start gap-1.5">• In-depth confidential corporate registry due diligence review</li>
                <li className="flex items-start gap-1.5">• Execution of applicable binding legal agreements (SHA / Terms)</li>
                <li className="flex items-start gap-1.5">• Compliance registrations, corporate resolutions and bank settlements</li>
                <li className="flex items-start gap-1.5">• Official updating of statutory registers &amp; cap table allotment files</li>
              </ul>
            </div>
            <div className="mt-6 pt-3 border-t border-[#DAAF37]/20 text-[9px] text-[#F4D03F] font-semibold">
              * FORMAL PROCESS &amp; LEGAL BINDING STAGE
            </div>
          </div>
        </div>

        {/* IMPORTANT DISCLOSURES REMINDERS */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0F0D0A] border border-red-500/10 mb-12 text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-950/20 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-heading font-bold text-red-400 uppercase tracking-widest block mb-1">
                IMPORTANT WARNING REGARDING ONBOARDING PROCESS
              </span>
              <div className="space-y-2 text-xs font-sans text-white/70">
                <p>
                  • Enquiry submit karne se investment guaranteed accept ya syndicate parameters approved assume na karein. All allocations are subject to rigorous due diligence, formal legal documentation, statutory compliance checks, and final corporate board approvals.
                </p>
                <p>
                  • Investment complete hona future returns, exits, fixed percentages share allocations ya direct cashbacks limits ki legal guarantee nahi banta. High startup risk guidelines apply directly. For full structural risk indices, see Section 14 (Projections Disclaimer) and Section 15 (Exit Disclosures) of this platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LEGAL BINDING STATEMENT CALLOUT */}
        <div className="max-w-4xl mx-auto p-5 rounded-2xl bg-white/[0.02] border border-white/10 mb-12 text-center text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
          &ldquo;Website par di gayi information business aur investment structure samajhne ke liye hai. Actual investment rights aur obligations executed legal documents aur applicable process se govern honge.&rdquo;
        </div>

        {/* CENTRAL ACTION CTAs */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            to="#legal-entity-documents"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto font-heading uppercase text-xs tracking-wider"
          >
            Request Investor Information
          </Button>
          <Button
            to="#legal-entity-documents"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto font-heading uppercase text-xs tracking-wider border-white/10 hover:border-[#DAAF37]/45"
          >
            Start Investor Enquiry
          </Button>
        </div>

        {/* INVESTOR TAKEAWAY - SECTION 25 END STATEMENT */}
        <div className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-black via-[#DAAF37]/20 to-black border-2 border-[#DAAF37] text-center shadow-[0_4px_24px_rgba(218,175,55,0.25)]">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2">
            Investor Journey Takeaway
          </span>
          <h4 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-white mb-2 tracking-tight uppercase leading-snug">
            &ldquo;INVEST KARNE SE PEHLE VERIFY KAREIN. SIRF WEBSITE PAR DIKHAYE GAYE NUMBERS PAR DEPEND NA KAREIN.&rdquo;
          </h4>
          <p className="text-xs sm:text-sm text-white/70 font-sans max-w-2xl mx-auto leading-relaxed text-wrap">
            Nexora ka goal hai ki appropriate investor due diligence ke through company, financial, legal, technology aur business information ko properly verify kiya ja sake.
          </p>
        </div>
      </section>

      {/* SECTION 26 — INVESTOR DECISION SNAPSHOT */}
      <section
        id="investor-decision-snapshot"
        aria-label="Investor Decision Snapshot Section"
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-[#DAAF37]/25 animate-fadeIn"
      >
        {/* Subtle Ambient Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[400px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/35 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#F4D03F]" />
            INVESTOR SNAPSHOT
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            INVESTOR DECISION{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              SNAPSHOT
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-sans max-w-2xl mx-auto leading-relaxed text-wrap">
            Nexora ko ek nazar mein samjhiye.
          </p>
        </div>

        {/* 6 CORE VISUAL SNAPSHOT CARDS */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Market Size */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#DAAF37]/40 transition-all text-center flex flex-col justify-center items-center group relative overflow-hidden h-[240px]">
            <div className="absolute inset-0 bg-[#DAAF37]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-[10px] font-heading font-black text-[#DAAF37] uppercase tracking-[0.2em] mb-4">
              MARKET SIZE
            </span>
            <div className="mb-4">
              <span className="text-4xl sm:text-5xl font-serif font-black text-white block leading-none">
                80,000+
              </span>
              <span className="text-xs font-heading font-bold text-white/60 block uppercase mt-2">
                Target Salons
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-white/40 font-sans leading-relaxed px-4">
              Sirf India mein target salons ka bada market.
            </p>
          </div>

          {/* Card 2: Revenue Target */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#DAAF37]/40 transition-all text-center flex flex-col justify-center items-center group relative overflow-hidden h-[240px]">
            <div className="absolute inset-0 bg-[#DAAF37]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-[10px] font-heading font-black text-[#DAAF37] uppercase tracking-[0.2em] mb-4">
              REVENUE TARGET
            </span>
            <div className="mb-4">
              <span className="text-4xl sm:text-5xl font-serif font-black text-white block leading-none">
                ₹1,000 Cr+
              </span>
              <span className="text-xs font-heading font-bold text-white/60 block uppercase mt-2">
                Projected Turnover
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-white/40 font-sans leading-relaxed px-4">
              Ecosystem maturity ke baad expected yearly turnover.
            </p>
          </div>

          {/* Card 3: Salon Profit */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#DAAF37]/40 transition-all text-center flex flex-col justify-center items-center group relative overflow-hidden h-[240px]">
            <div className="absolute inset-0 bg-[#DAAF37]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-[10px] font-heading font-black text-[#DAAF37] uppercase tracking-[0.2em] mb-4">
              SALON PROFIT
            </span>
            <div className="mb-4">
              <span className="text-4xl sm:text-5xl font-serif font-black text-white block leading-none">
                ₹11,575
              </span>
              <span className="text-xs font-heading font-bold text-white/60 block uppercase mt-2">
                Per Salon / Month
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-white/40 font-sans leading-relaxed px-4">
              Nexora model par based base profit target per month.
            </p>
          </div>

          {/* Card 4: Acquisition Cost */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#DAAF37]/40 transition-all text-center flex flex-col justify-center items-center group relative overflow-hidden h-[240px]">
            <div className="absolute inset-0 bg-[#DAAF37]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-[10px] font-heading font-black text-[#DAAF37] uppercase tracking-[0.2em] mb-4">
              ACQUISITION COST
            </span>
            <div className="mb-4">
              <span className="text-3xl sm:text-4xl font-serif font-black text-white block leading-tight px-2">
                Low CAC Strategy
              </span>
              <span className="text-xs font-heading font-bold text-white/60 block uppercase mt-2">
                Efficient Growth
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-white/40 font-sans leading-relaxed px-4">
              Digital-first distribution se customer cost control.
            </p>
          </div>

          {/* Card 5: Product Status */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#DAAF37]/40 transition-all text-center flex flex-col justify-center items-center group relative overflow-hidden h-[240px]">
            <div className="absolute inset-0 bg-[#DAAF37]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-[10px] font-heading font-black text-[#DAAF37] uppercase tracking-[0.2em] mb-4">
              PRODUCT STATUS
            </span>
            <div className="mb-4">
              <span className="text-3xl sm:text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] to-[#DAAF37] block leading-tight px-2">
                Ready for Launch
              </span>
              <span className="text-xs font-heading font-bold text-[#DAAF37] block uppercase mt-2">
                Core Ecosystem Done
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-white/40 font-sans leading-relaxed px-4">
              Core ecosystem development complete.
            </p>
          </div>

          {/* Card 6: Entry Stage */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#DAAF37]/40 transition-all text-center flex flex-col justify-center items-center group relative overflow-hidden h-[240px]">
            <div className="absolute inset-0 bg-[#DAAF37]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-[10px] font-heading font-black text-[#DAAF37] uppercase tracking-[0.2em] mb-4">
              ENTRY STAGE
            </span>
            <div className="mb-4">
              <span className="text-4xl sm:text-5xl font-serif font-black text-white block leading-none">
                Early Growth
              </span>
              <span className="text-xs font-heading font-bold text-white/60 block uppercase mt-2">
                Investor Opportunity
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-white/40 font-sans leading-relaxed px-4">
              Scalability se pehle participation ka sahi waqt.
            </p>
          </div>

        </div>

        {/* HIGH IMPACT SUMMARY STATEMENT */}
        <div className="max-w-4xl mx-auto p-1 rounded-3xl bg-gradient-to-r from-transparent via-[#DAAF37]/30 to-transparent mb-12">
          <div className="bg-black/90 p-8 rounded-[22px] text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-black text-white tracking-tight uppercase leading-tight mb-4">
              &ldquo;BUSINESS MODEL READY HAI.<br />
              AB MARKET SCALE PROVE KARNA HAI.&rdquo;
            </h3>
            <div className="h-px w-24 bg-[#DAAF37]/40 mx-auto mb-4" />
            <p className="text-xs sm:text-sm text-[#DAAF37] font-sans font-medium uppercase tracking-widest">
              High Scalability potential ke saath early-stage participation.
            </p>
          </div>
        </div>

        {/* DECISION CTAS */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            to="#legal-entity-documents"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto font-heading font-bold uppercase text-xs tracking-[0.15em] px-10 py-4 shadow-[0_0_30px_rgba(218,175,55,0.25)]"
          >
            Request Full Deck
          </Button>
          <Button
            to="#investor-journey"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto font-heading font-bold uppercase text-xs tracking-[0.15em] px-10 py-4 border-white/20 hover:border-[#DAAF37]/50"
          >
            Explore Next Steps
          </Button>
        </div>
      </section>

      {/* SECTION 27 — INVESTOR FAQ — QUICK ANSWERS */}
      <section
        id="investor-faq"
        aria-label="Investor FAQ Section"
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-[#DAAF37]/25 animate-fadeIn"
      >
        {/* Subtle Ambient Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[400px] bg-gradient-to-b from-[#DAAF37]/[0.05] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/35 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <HelpCircle className="w-3.5 h-3.5 text-[#F4D03F]" />
            QUICK ANSWERS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            INVESTOR{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              FAQ
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-sans max-w-2xl mx-auto leading-relaxed text-wrap">
            Important sawaalon ke seedhe aur simple answers.
          </p>
        </div>

        {/* FAQ ACCORDION */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          {[
            {
              q: "Kya Nexora ka product ready hai?",
              a: "Haan. Nexora ka ecosystem commercial launch ke liye ready hai. Actual market traction launch ke baad verified data se measure ki jayegi."
            },
            {
              q: "Abhi kitne salons aur customers hain?",
              a: "Verified commercial traction data abhi available nahi hai. Isliye website par current figures ko 'Data Not Available Yet' ke roop mein dikhaya gaya hai."
            },
            {
              q: "₹3.72 Cr actual revenue hai?",
              a: "Nahi. ₹3.72 Cr current financial model ka annual projection hai. Ye guaranteed ya historical actual revenue nahi hai."
            },
            {
              q: "₹5 Lakh invest karne par kya milega?",
              a: "Current proposed structure ke according ₹5 Lakh ke badle 1% equity hai, subject to final legal documentation and applicable process."
            },
            {
              q: "₹11,575 har month milega?",
              a: "Nahi. ₹11,575 sirf modeled profit ka illustrative monthly equivalent hai. Ye guaranteed monthly income nahi hai."
            },
            {
              q: "43 months mein paisa wapas ho jayega?",
              a: "Nahi. 43 months sirf modeled recovery calculation hai. Ye guaranteed repayment ya exit date nahi hai."
            },
            {
              q: "Investor exit kaise karega?",
              a: "Future share transfer, secondary transaction, founder/existing shareholder purchase ya strategic transaction jaise possible routes ho sakte hain, lekin koi guaranteed exit ya buyback promise nahi hai."
            },
            {
              q: "Investment se pehle documents dekh sakta hoon?",
              a: "Haan, appropriate due diligence process mein company, financial, legal, technology aur business records review kiye ja sakte hain, subject to confidentiality and access rules."
            },
            {
              q: "Investment ka paisa kahan use hoga?",
              a: "Technology, salon acquisition, customer acquisition, operations, legal/compliance aur working capital jaise approved business priorities ke liye. Exact allocation wahi dikhaya jayega jo finalized management plan mein approved ho."
            },
            {
              q: "Ab investor ko next kya karna hai?",
              a: "Investor Enquiry submit karein → information review karein → due diligence karein → formal documents review karein → applicable process ke baad investment decision lein."
            }
          ].map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 ${
                activeFaq === idx 
                ? 'bg-[#DAAF37]/10 border-[#DAAF37]/40 shadow-[0_0_25px_rgba(218,175,55,0.08)]' 
                : 'bg-white/[0.02] border-white/5 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className={`text-sm sm:text-base font-heading font-bold uppercase tracking-wide transition-colors ${
                  activeFaq === idx ? 'text-white' : 'text-white/80 group-hover:text-white'
                }`}>
                  {faq.q}
                </span>
                <div className={`p-1.5 rounded-lg transition-all duration-300 ${
                  activeFaq === idx ? 'bg-[#DAAF37] text-black rotate-180' : 'bg-white/5 text-white/40 rotate-0'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: activeFaq === idx ? 'auto' : 0,
                  opacity: activeFaq === idx ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-1">
                  <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed border-l-2 border-[#DAAF37]/30 pl-4">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* FINAL TRUST MESSAGE CARD */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#DAAF37]/5 via-[#0A0A0A] to-black border border-[#DAAF37]/30 text-center mb-12 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-[#DAAF37]/10 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F] mx-auto mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h4 className="text-xl sm:text-2xl font-heading font-black text-white uppercase mb-3">
            FACTS ALAG HAIN. PROJECTIONS ALAG HAIN.
          </h4>
          <p className="text-sm sm:text-base text-white/60 font-sans max-w-xl mx-auto">
            Nexora actual business data, management assumptions aur projections ko clearly separate rakhega. Hum transparency ko investment ka foundation maante hain.
          </p>
        </div>

        {/* FINAL CTAS */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            to="#legal-entity-documents"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto font-heading uppercase text-xs tracking-wider"
          >
            Request Investor Information
          </Button>
          <Button
            to="#legal-entity-documents"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto font-heading uppercase text-xs tracking-wider border-white/10 hover:border-[#DAAF37]/45"
          >
            Start Investor Enquiry
          </Button>
        </div>
      </section>

      {/* SECTION 29 — WHY NOW? */}
      <section
        id="why-now"
        aria-label="Why Now Section"
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-[#DAAF37]/25 animate-fadeIn"
      >
        {/* Subtle Ambient Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[400px] bg-gradient-to-b from-[#DAAF37]/[0.05] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/35 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Zap className="w-3.5 h-3.5 text-[#F4D03F]" />
            TIMING &amp; OPPORTUNITY
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            WHY{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              NOW?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-sans max-w-3xl mx-auto leading-relaxed text-wrap">
            Nexora ka product ecosystem ready hai aur ab focus market execution, salon acquisition aur customer growth par hai.
          </p>
        </div>

        {/* 3 VISUAL POINTS CARDS */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Product Ready */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#DAAF37]/35 transition-all group text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-[#DAAF37]/10 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F] mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-heading font-bold text-white uppercase tracking-wider mb-3">
              PRODUCT READY
            </h4>
            <p className="text-sm text-white/60 font-sans leading-relaxed">
              Core ecosystem commercial launch ke liye ready hai. Ab focus scaling par hai.
            </p>
          </div>

          {/* Card 2: Market Opportunity */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#DAAF37]/35 transition-all group text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-[#DAAF37]/10 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F] mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-heading font-bold text-white uppercase tracking-wider mb-3">
              MARKET OPPORTUNITY
            </h4>
            <p className="text-sm text-white/60 font-sans leading-relaxed">
              Salon businesses ko digital discovery aur booking tools ki growing need hai.
            </p>
          </div>

          {/* Card 3: Early-Stage Opportunity */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#DAAF37]/35 transition-all group text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-[#DAAF37]/10 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F] mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-heading font-bold text-white uppercase tracking-wider mb-3">
              EARLY-STAGE
            </h4>
            <p className="text-sm text-white/60 font-sans leading-relaxed">
              Investor early stage par company ke growth journey mein participate kar sakta hai.
            </p>
          </div>
        </div>

        {/* VISUAL FLOW TIMELINE */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-black/40 border border-white/10 mb-12 text-center overflow-hidden">
          <div className="mb-8">
            <span className="text-[10px] font-heading font-black text-[#DAAF37] uppercase tracking-[0.3em] block mb-2">
              EXECUTION ROADMAP
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white uppercase">
              NEXT PHASE = EXECUTION
            </h3>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4">
            {[
              { name: 'PRODUCT READY', active: true },
              { name: 'MARKET LAUNCH', active: false },
              { name: 'SALON ACQUISITION', active: false },
              { name: 'CUSTOMER GROWTH', active: false },
              { name: 'SCALE', active: false },
            ].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div className={`px-4 py-2.5 rounded-xl border text-[10px] font-heading font-bold uppercase tracking-wider transition-all
                  ${step.active 
                    ? 'bg-[#DAAF37]/20 border-[#DAAF37] text-white shadow-[0_0_15px_rgba(218,175,55,0.2)]' 
                    : 'bg-white/5 border-white/10 text-white/40'}
                `}>
                  {step.name}
                </div>
                {idx < arr.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#DAAF37]/40 hidden md:block" />
                )}
                {idx < arr.length - 1 && (
                  <ArrowDown className="w-4 h-4 text-[#DAAF37]/40 md:hidden my-1" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* IMPORTANT INVESTOR NOTE */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-[#0C0908] border border-red-500/20 mb-12">
          <p className="text-xs sm:text-sm text-white/70 font-sans text-center italic leading-relaxed">
            <span className="text-red-400 font-bold uppercase mr-1">Note:</span> 
            Current traction abhi build aur measure ki ja rahi hai. Isliye opportunity ke saath execution risk bhi exist karta hai jo investors ko review karna chahiye.
          </p>
        </div>

        {/* FINAL TAKEAWAY MESSAGE */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-black via-[#DAAF37]/15 to-black border border-[#DAAF37]/40 text-center shadow-2xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-black text-white tracking-tight uppercase leading-snug">
            &ldquo;NEXORA AB PRODUCT-BUILDING SE<br />
            MARKET-EXECUTION PHASE MEIN ENTER KAR RAHA HAI.&rdquo;
          </h3>
        </div>
      </section>

      {/* SECTION 28 — READY TO EXPLORE NEXORA? */}
      <section
        id="ready-to-explore"
        aria-label="Final Investor Call to Action Section"
        className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-[#DAAF37]/25 overflow-hidden"
      >
        {/* Cinematic Backdrop Background */}
        <div className="absolute inset-0 bg-black pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#DAAF37]/[0.08] via-transparent to-[#DAAF37]/[0.08] blur-[160px] opacity-50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* MAIN HEADLINE */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-white tracking-tight leading-[1.1] mb-6 animate-fadeIn">
            READY TO EXPLORE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              NEXORA?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-sans max-w-3xl mx-auto leading-relaxed mb-12 animate-fadeIn delay-100">
            Business, financial model aur investment structure samajhne ke baad next step hai proper investor discussion aur due diligence.
          </p>

          {/* 3 SIMPLE NEXT STEPS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { num: '01', title: 'ENQUIRY', desc: 'Apni investor interest submit karein.' },
              { num: '02', title: 'DUE DILIGENCE', desc: 'Available business, financial, legal aur technology information review karein.' },
              { num: '03', title: 'INVESTMENT PROCESS', desc: 'Formal documentation aur applicable process ke baad investment decision lein.' },
            ].map((step, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/35 transition-all group text-left flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-heading font-black text-[#DAAF37] tracking-[0.2em] block mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
                    {step.num}
                  </span>
                  <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-white/60 font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* MAIN ACTION CTAS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              to="#legal-entity-documents"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto font-heading font-bold uppercase text-xs tracking-[0.15em] px-10 py-4 shadow-[0_0_30px_rgba(218,175,55,0.2)]"
            >
              Request Investor Information
            </Button>
            <Button
              to="#legal-entity-documents"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto font-heading font-bold uppercase text-xs tracking-[0.15em] px-10 py-4 border-white/20 hover:border-[#DAAF37]/50"
            >
              Start Investor Enquiry
            </Button>
          </div>

          {/* DATA ROOM CTA */}
          <div className="mb-12">
            <p className="text-[10px] sm:text-xs text-white/50 font-sans mb-3">
              Detailed supporting documents appropriate investor due diligence process mein provide kiye ja sakte hain.
            </p>
            <a 
              href="#investor-data-room" 
              className="inline-flex items-center gap-2 text-[10px] font-heading font-black text-[#DAAF37] uppercase tracking-widest hover:text-white transition-colors"
            >
              <Lock className="w-3 h-3" /> REQUEST DUE DILIGENCE ACCESS
            </a>
          </div>

          {/* IMPORTANT INVESTOR NOTE */}
          <div className="max-w-2xl mx-auto p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/5 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-[11px] text-white/70 leading-relaxed max-w-md">
              <span className="text-[#DAAF37] font-bold">Important:</span> Investor decision lene se pehle independent legal, tax aur financial advice lena recommended hai.
            </p>
            <Button
              to="/policies?tab=disclaimer"
              variant="ghost"
              size="sm"
              className="text-[9px] font-heading font-bold uppercase tracking-widest text-white/40 hover:text-[#DAAF37]"
            >
              View Investor Disclaimer
            </Button>
          </div>

          {/* FINAL CLOSING STATEMENT */}
          <div className="py-12 border-t border-white/5">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white tracking-tight uppercase leading-none mb-4">
              UNDERSTAND THE BUSINESS.<br />
              VERIFY THE FACTS.<br />
              THEN MAKE THE DECISION.
            </h3>
            <p className="text-xs sm:text-sm text-[#DAAF37] font-sans font-medium uppercase tracking-[0.1em]">
              Jankari samjhiye, documents verify kijiye, phir investment decision lijiye.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 30 — FINAL INVESTOR DECISION */}
      <section
        id="final-decision"
        aria-label="Final Investor Decision Section"
        className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-[#DAAF37]/25 overflow-hidden"
      >
        {/* Subtle Ambient Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#DAAF37]/[0.03] blur-[160px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/35 text-[#F4D03F] text-[10px] font-heading font-semibold uppercase tracking-[0.2em] mb-6 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <CheckCircle2 className="w-3 h-3 text-[#F4D03F]" />
            FINAL STEP
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-white tracking-tight leading-[1.1] mb-6 animate-fadeIn">
            YOUR{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              NEXT STEP
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-sans max-w-3xl mx-auto leading-relaxed mb-12">
            Business samjhiye. Facts verify kijiye. Phir investment decision lijiye.
          </p>

          {/* 3 FINAL CHECKS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#DAAF37]/30 transition-all text-left group">
              <span className="text-[10px] font-heading font-black text-[#DAAF37] tracking-widest block mb-4 opacity-50 group-hover:opacity-100 transition-opacity">01</span>
              <h4 className="text-lg font-heading font-bold text-white uppercase tracking-wider mb-2">UNDERSTAND</h4>
              <p className="text-sm text-white/60 font-sans leading-relaxed">
                Nexora ka business model aur growth plan samjhiye.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#DAAF37]/30 transition-all text-left group">
              <span className="text-[10px] font-heading font-black text-[#DAAF37] tracking-widest block mb-4 opacity-50 group-hover:opacity-100 transition-opacity">02</span>
              <h4 className="text-lg font-heading font-bold text-white uppercase tracking-wider mb-2">VERIFY</h4>
              <p className="text-sm text-white/60 font-sans leading-relaxed">
                Financial, legal, technology aur business documents verify kijiye.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#DAAF37]/30 transition-all text-left group">
              <span className="text-[10px] font-heading font-black text-[#DAAF37] tracking-widest block mb-4 opacity-50 group-hover:opacity-100 transition-opacity">03</span>
              <h4 className="text-lg font-heading font-bold text-white uppercase tracking-wider mb-2">DECIDE</h4>
              <p className="text-sm text-white/60 font-sans leading-relaxed">
                Due diligence ke baad apna investment decision lijiye.
              </p>
            </div>
          </div>

          {/* FINAL CORE STATEMENT */}
          <div className="mb-16 py-10 border-y border-white/5">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white tracking-tight uppercase leading-none mb-6">
              NEXORA IS READY TO LAUNCH.<br />
              NOW THE MARKET HAS TO PROVE THE MODEL.
            </h3>
            <p className="text-sm sm:text-base text-[#DAAF37] font-sans font-medium uppercase tracking-[0.2em]">
              Nexora launch ke liye taiyar hai. Ab market model ko prove karega.
            </p>
          </div>

          {/* FINAL CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              to="#legal-entity-documents"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto font-heading font-bold uppercase text-xs tracking-[0.15em] px-12 py-5 shadow-[0_0_40px_rgba(218,175,55,0.25)]"
            >
              Request Investor Information
            </Button>
            <Button
              to="#investor-data-room"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto font-heading font-bold uppercase text-xs tracking-[0.15em] px-12 py-5 border-white/20 hover:border-[#DAAF37]/50"
            >
              Request Due Diligence Access
            </Button>
          </div>

          {/* FINAL INVESTOR NOTE */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-[10px] sm:text-[11px] text-white/40 font-sans leading-relaxed italic">
              Investment enquiry investment acceptance ki guarantee nahi hai. Actual investment applicable due diligence, formal documentation aur legal process ke subject mein hoga.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

