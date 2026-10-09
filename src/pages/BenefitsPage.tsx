import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';
import {
  User,
  Store,
  TrendingUp,
  Briefcase,
  ArrowRight,
  ExternalLink,
  Scissors,
  RotateCcw,
  Gift,
  Cake,
  Search,
  Star,
  Globe,
  Layout,
  Zap,
  CheckCircle2,
  XCircle,
  CreditCard,
  Users,
  LineChart,
  MapPin,
  Clock,
  ShieldCheck,
  BarChart3,
  Target,
  Activity,
  Truck,
  HelpCircle,
  Sparkles,
  Tag,
  Calendar,
  Crown,
  Heart,
  UserPlus,
  QrCode,
  Smartphone,
  Bot,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/common/MotionWrapper';
import { SectionHeading } from '../components/common/SectionHeading';
import {
  STAKEHOLDERS,
} from '../data/stakeholders';

// Asset Imports for Premium Quality and Bundler Integration
import customerExperienceCinematic from '../assets/images/customer_experience_cinematic_v1_1791355836248.jpg';
import salonOwnerCinematic from '../assets/images/salon_owner_cinematic_solution_1791351356455.jpg';
import salonOwnerWomanLeaderImg from '../assets/images/salon_owner_woman_leader_1791474356699.jpg';
import birthdayCustomerImg from '../assets/images/birthday_salon_customer_1791472653649.jpg';
import salonCustomerReturnImg from '../assets/images/salon_customer_return_1791473223522.jpg';
import salonCustomerJoinImg from '../assets/images/salon_customer_join_1791473262003.jpg';
import growthPartnerRewards from '../assets/images/growth_partner_rewards_v3_clean_1791353469029.jpg';
import b2bNetworkCinematic from '../assets/images/b2b_network_cinematic_v1_1791353692628.jpg';
import beautyProfessionalDigitalTools from '../assets/images/beauty_professional_digital_tools_1791355546827.jpg';
import investorEcosystemInfographic from '../assets/images/investor_ecosystem_infographic_1791355198970.jpg';
import jaipurBrandingImg from '../assets/images/nexora_one_branding_vision_cinematic_1791371326735.jpg';
import salonVisionImg from '../assets/images/nexora_one_brand_vision_salon_final_1791368325988.jpg';
import { InteractiveImage } from '../components/common/InteractiveImage';
import shotGrowthPartnerV2Img from '../assets/images/shot_growth_partner_v2_1791208604943.jpg';
import shotGrowthPartnerImg from '../assets/images/shot_growth_partner_1791206982477.jpg';
import shotSalonosRefinedImg from '../assets/images/shot_salonos_refined_1791206865248.jpg';
import shotWhiteLabelImg from '../assets/images/shot_white_label_1791206764231.jpg';
import shotSalonosImg from '../assets/images/shot_salonos_1791206633802.jpg';
import growthPartnerRewardSystemImg from '../assets/images/growth_partner_reward_system_cinematic_1791237816011.jpg';

export const BenefitsPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>('customer');
  const shouldReduceMotion = useReducedMotion();

  const customerStakeholder = STAKEHOLDERS.find((s) => s.id === 'customer')!;
  const salonOwnerStakeholder = STAKEHOLDERS.find((s) => s.id === 'salon-owner')!;
  const growthPartnerStakeholder = STAKEHOLDERS.find((s) => s.id === 'growth-partner')!;
  const b2bStakeholder = STAKEHOLDERS.find((s) => s.id === 'b2b')!;
  const investorStakeholder = STAKEHOLDERS.find((s) => s.id === 'investor')!;

  const growthPartnerVisualSteps = [
    {
      num: '01',
      title: 'Find a Salon',
      subtitle: 'Locate local salon prospects in your area',
      image: shotGrowthPartnerV2Img,
      icon: Search,
    },
    {
      num: '02',
      title: 'Meet the Owner',
      subtitle: 'Connect directly with the decision maker',
      image: salonOwnerWomanLeaderImg,
      icon: Users,
    },
    {
      num: '03',
      title: 'Show Nexora',
      subtitle: 'Demonstrate live website & digital tools',
      image: shotGrowthPartnerImg,
      icon: Smartphone,
    },
    {
      num: '04',
      title: 'Launch the Salon',
      subtitle: 'Activate SalonOS and free web presence',
      image: shotSalonosRefinedImg,
      icon: Zap,
    },
    {
      num: '05',
      title: 'Grow & Earn Rewards',
      subtitle: 'Track verified activations & wallet rewards',
      image: growthPartnerRewards,
      icon: Crown,
    },
  ];

  const partnerBenefitCards = [
    {
      badge: 'Zero Upfront Cost',
      title: 'Free Website',
      subtitle: 'Custom Branded Web Presence',
      desc: 'Give salons a professional, mobile-first website with custom domain readiness, menu showcase, and Google discovery at zero development cost.',
      image: shotWhiteLabelImg,
      icon: Globe,
      features: [
        'Instant live URL with mobile-first design',
        'Showcase service catalog, photos & pricing',
        'Zero upfront or ongoing hosting fees for owners',
      ],
    },
    {
      badge: 'Digital Operations',
      title: 'SalonOS Tools',
      subtitle: 'Complete Daily Operating System',
      desc: 'Equip salon owners with smart appointment scheduling, customer history, staff commissions, and automated WhatsApp appointment reminders.',
      image: shotSalonosImg,
      icon: Zap,
      features: [
        'Real-time appointment calendar & bookings',
        'Customer database with automated birthday wishes',
        'Daily billing, expense tracking & staff management',
      ],
    },
    {
      badge: 'Transparent Payouts',
      title: 'Partner Rewards',
      subtitle: 'Direct & Milestone Earnings',
      desc: 'Earn verified onboarding incentives, unlock territory milestone bonuses, and build recurring network rewards tracked live on your partner wallet.',
      image: growthPartnerRewardSystemImg,
      icon: TrendingUp,
      features: [
        'Direct cash credit for every active salon onboarded',
        'City territory milestone unlock bonuses',
        'Transparent tracking on Growth Partner dashboard',
      ],
    },
  ];

  const salonOwnerFeatureCards = [
    {
      num: '01',
      title: 'CUSTOMER MANAGEMENT & RETENTION',
      desc: 'Har customer ka complete record — booking, history, preferences aur follow-ups.',
      icon: Users,
    },
    {
      num: '02',
      title: 'BIRTHDAY & CUSTOMER BENEFITS',
      desc: 'Customer ke birthday par automatic wish, special offer ya discount bhejne ka system.',
      icon: Cake,
    },
    {
      num: '03',
      title: 'NEW CUSTOMER DISCOVERY',
      desc: 'Naye customers aapke salon ko search karke aapke salon tak pahunch sakte hain.',
      icon: Search,
    },
    {
      num: '04',
      title: 'BOOKING & APPOINTMENT',
      desc: 'Online booking, appointment management aur automatic reminders.',
      icon: Calendar,
    },
    {
      num: '05',
      title: 'WEBSITE & DIGITAL BRAND',
      desc: 'Apne salon ki professional website banaye aur online presence mazboot kare.',
      icon: Globe,
    },
    {
      num: '06',
      title: 'AI GROWTH SYSTEM',
      desc: 'Marketing ideas, customer recall aur business growth ke liye smart tools.',
      icon: Bot,
    },
    {
      num: '07',
      title: 'QR & PAYMENT',
      desc: 'QR code se easy payment, online aur offline payment options.',
      icon: QrCode,
    },
    {
      num: '08',
      title: 'STAFF MANAGEMENT',
      desc: 'Staff attendance, services, performance aur commission tracking.',
      icon: Briefcase,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="pt-12 pb-12 sm:pt-20 sm:pb-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-medium tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] animate-pulse" />
            Stakeholders
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F5F5F5] tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6">
            What does Nexora{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
              give me?
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/75 font-sans leading-relaxed max-w-2xl mx-auto mb-6">
            Nexora serves four main groups. Find yours.
          </p>

          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white/50 text-center font-sans max-w-2xl mx-auto mb-10">
            Benefits describe planned and demonstrated capabilities. Availability varies by product. See each product&apos;s status.
          </div>

          {/* Hero Visual Display */}
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
            <img
              src="/assets/who-benefits-hero.webp"
              alt="Nexora Who Benefits - Customer, Salon Owner, Professional, Growth Partner"
              className="w-full h-auto object-contain select-none"
              loading="eager"
            />
          </div>
        </FadeIn>
      </section>

      {/* 4 Deep Stakeholder Sections */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* 4.1 Customer */}
        <section id="customer" className="scroll-mt-28">
          <FadeIn distance={30} duration={0.8}>
            <GlassCard className="p-8 sm:p-12 border-[#DAAF37]/30" glow="subtle">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8 pb-8 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] flex-shrink-0 shadow-[0_0_25px_rgba(218,175,55,0.25)]">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-wider block">
                    Participant 01
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white">
                    {customerStakeholder.name}
                  </h2>
                  <p className="text-sm font-sans text-[#DAAF37] font-medium mt-1">
                    {customerStakeholder.tagline}
                  </p>
                </div>
              </div>
              {customerStakeholder.ctaTarget.startsWith('http') ? (
                <Button href={customerStakeholder.ctaTarget} variant="primary" size="md" icon={<ExternalLink className="w-4 h-4" />}>
                  {customerStakeholder.ctaLabel}
                </Button>
              ) : (
                <Button to={customerStakeholder.ctaTarget} variant="primary" size="md">
                  {customerStakeholder.ctaLabel}
                </Button>
              )}
            </div>

            {/* Primary Cinematic Visual */}
            <motion.div 
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30, scale: 0.98 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full mb-10 rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <img
                src={customerExperienceCinematic}
                alt="Nexora Customer Experience Cinematic Visual"
                className="w-full h-auto object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Premium Supporting Content */}
            <div className="mb-10 text-center lg:text-left">
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-1 mb-4">
                {['DISCOVER.', 'BOOK.', 'SAVE.', 'EARN.', 'REPEAT.'].map((text, i) => (
                  <span key={i} className="text-sm sm:text-base font-heading font-bold tracking-widest text-[#DAAF37]">
                    {text}
                  </span>
                ))}
              </div>
              <p className="text-base sm:text-lg text-white/85 font-sans leading-relaxed max-w-3xl">
                {customerStakeholder.solution} Find trusted beauty businesses, compare services and offers, book where supported, and earn loyalty benefits.
              </p>
            </div>

            {/* Benefits List */}
            <div className="pt-8 border-t border-white/10">
              <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/50 block mb-4">
                Planned Customer Benefits
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {customerStakeholder.benefits.map((b, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white/80 font-sans flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Journey Flow */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/50 block mb-4">
                Customer Journey Flow
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs font-heading">
                {customerStakeholder.journeySteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white shadow-sm hover:border-[#DAAF37]/30 transition-colors">
                      {step}
                    </span>
                    {idx < customerStakeholder.journeySteps.length - 1 && (
                      <span className="text-[#DAAF37] font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* 4.2 Salon Owner — ENHANCED SECTION */}
      <section id="salon-owner" className="scroll-mt-28">
        <FadeIn distance={30} duration={0.8}>
          <GlassCard className="p-8 sm:p-12 border-[#DAAF37]/40" glow="gold">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-12 pb-8 border-b border-white/10">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#DAAF37]/30 to-[#DAAF37]/5 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] flex-shrink-0 shadow-[0_0_35px_rgba(218,175,55,0.3)]">
                  <Store className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-xs uppercase font-heading font-bold text-[#DAAF37] tracking-[0.2em] block mb-1">
                    Participant 02
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
                    {salonOwnerStakeholder.name}
                  </h2>
                  <p className="text-lg font-sans text-[#DAAF37]/90 font-medium mt-1">
                    {salonOwnerStakeholder.tagline}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href={salonOwnerStakeholder.ctaTarget}
                  variant="primary"
                  size="lg"
                  icon={<ExternalLink className="w-5 h-5" />}
                  className="shadow-[0_10px_30px_rgba(218,175,55,0.3)]"
                >
                  {salonOwnerStakeholder.ctaLabel}
                </Button>
              </div>
            </div>

            {/* 1. CORE RETENTION ENGINE — CUSTOMER WAPAS AAYEGA (PRIMARY VISUAL POSTER) */}
            <div className="mb-20">
              {/* Grand Promotional Poster Container */}
              <div className="relative rounded-3xl bg-gradient-to-b from-[#141414] via-[#0A0A0A] to-[#040404] border-2 border-[#DAAF37]/50 shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_50px_rgba(218,175,55,0.2)] overflow-hidden p-6 sm:p-8 lg:p-10">
                {/* Background Ambient Glows */}
                <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#DAAF37]/15 blur-[130px] pointer-events-none rounded-full" />
                <div className="absolute top-1/2 -right-20 w-96 h-96 bg-[#DAAF37]/10 blur-[130px] pointer-events-none rounded-full" />

                {/* Poster Header */}
                <div className="relative z-10 pb-6 mb-8 border-b border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#DAAF37]/30 to-[#DAAF37]/10 border border-[#DAAF37]/50 flex items-center justify-center text-[#F4D03F] shadow-[0_0_20px_rgba(218,175,55,0.3)]">
                      <Crown className="w-6 h-6 text-[#F4D03F]" />
                    </div>
                    <span className="text-xs uppercase font-heading font-bold text-[#DAAF37] tracking-[0.25em]">
                      Participant 02 • Salon Owner / Business Owner
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white tracking-tight uppercase leading-tight mb-3">
                    CORE RETENTION ENGINE{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D0] via-[#F4D03F] to-[#DAAF37]">
                      — CUSTOMER WAPAS AAYEGA
                    </span>
                  </h3>

                  <p className="text-sm sm:text-base lg:text-lg text-white/85 font-sans leading-relaxed max-w-4xl">
                    “Nexora ka goal hai <strong className="text-white">sirf booking nahi</strong>, balki <strong className="text-[#F4D03F]">long-term relationship</strong> — taaki customer ko hamesha wapas aane ka reason mile.”
                  </p>
                </div>

                {/* 4-Step Visual Story Grid with Connected Gold Arrows */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                  {/* STEP 01 */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-[#DAAF37]/35 hover:border-[#DAAF37]/70 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#DAAF37]/5 blur-xl pointer-events-none" />
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F]">
                          <UserPlus className="w-4 h-4" />
                        </div>
                        <span className="text-2xl font-heading font-black text-[#DAAF37]/50 group-hover:text-[#F4D03F] transition-colors">
                          01
                        </span>
                      </div>
                      <h4 className="text-base font-heading font-bold text-white mb-2 uppercase tracking-wide">
                        NEXORA SE JUDE
                      </h4>
                      <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                        Customer app me register karta hai, booking karta hai aur aapke salon se judta hai.
                      </p>
                    </div>

                    {/* Step Visual: Customer Photo + App Badge */}
                    <div className="space-y-3 pt-3 border-t border-white/10">
                      <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-white/15 shadow-md">
                        <img
                          src={salonCustomerJoinImg}
                          alt="Customer joining Nexora salon on mobile"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-heading font-semibold text-white/90">
                          <span className="flex items-center gap-1">
                            <Store className="w-3 h-3 text-[#DAAF37]" /> Salon Network
                          </span>
                          <span className="text-[#DAAF37]">Active</span>
                        </div>
                      </div>

                      {/* Mini UI Join Pill */}
                      <div className="p-2.5 rounded-xl bg-black/60 border border-[#DAAF37]/40 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-md bg-[#DAAF37] text-black font-black text-[10px] flex items-center justify-center font-heading">
                            N
                          </div>
                          <span className="text-[11px] font-heading font-bold text-white">Nexora Salon</span>
                        </div>
                        <span className="px-2.5 py-1 rounded-md bg-gradient-to-r from-[#DAAF37] to-[#F4D03F] text-black text-[9px] font-heading font-bold uppercase tracking-wider">
                          Join Now
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* STEP 02 */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-[#DAAF37]/35 hover:border-[#DAAF37]/70 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#DAAF37]/5 blur-xl pointer-events-none" />
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F]">
                          <Cake className="w-4 h-4" />
                        </div>
                        <span className="text-2xl font-heading font-black text-[#DAAF37]/50 group-hover:text-[#F4D03F] transition-colors">
                          02
                        </span>
                      </div>
                      <h4 className="text-base font-heading font-bold text-white mb-2 uppercase tracking-wide">
                        BIRTHDAY WISH
                      </h4>
                      <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                        Customer ke birthday par automatic wish message jata hai.
                      </p>
                    </div>

                    {/* Step Visual: Birthday Photo + Notification Card */}
                    <div className="space-y-3 pt-3 border-t border-white/10">
                      <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-white/15 shadow-md">
                        <img
                          src={birthdayCustomerImg}
                          alt="Customer receiving birthday wish"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-heading font-semibold text-white/90">
                          <span className="flex items-center gap-1">🎂 Birthday Delight</span>
                          <span className="text-[#DAAF37]">Automatic</span>
                        </div>
                      </div>

                      {/* Mini Birthday Notification Card */}
                      <div className="p-2.5 rounded-xl bg-black/60 border border-[#DAAF37]/40 space-y-1">
                        <div className="flex items-center justify-between text-[9px] text-white/50">
                          <span className="font-heading font-bold text-[#F4D03F]">Nexora Salon</span>
                          <span>Now</span>
                        </div>
                        <p className="text-[11px] font-heading font-bold text-white leading-tight">
                          Happy Birthday Ritu! 🎂
                        </p>
                        <p className="text-[9px] text-white/70 font-sans leading-tight">
                          Aapke liye ek special din! Nexora ki taraf se bahut saari shubhkaamayein
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* STEP 03 */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-[#DAAF37]/35 hover:border-[#DAAF37]/70 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#DAAF37]/5 blur-xl pointer-events-none" />
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F]">
                          <Tag className="w-4 h-4" />
                        </div>
                        <span className="text-2xl font-heading font-black text-[#DAAF37]/50 group-hover:text-[#F4D03F] transition-colors">
                          03
                        </span>
                      </div>
                      <h4 className="text-base font-heading font-bold text-white mb-2 uppercase tracking-wide">
                        SPECIAL OFFER
                      </h4>
                      <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                        Wish ke saath special offer, discount ya free service bheja jata hai.
                      </p>
                    </div>

                    {/* Step Visual: Special Offer Notification Card */}
                    <div className="space-y-3 pt-3 border-t border-white/10">
                      {/* Mini Offer Visual Card */}
                      <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#DAAF37]/20 via-black to-black border border-[#DAAF37]/50 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded bg-[#DAAF37] text-black text-[9px] font-heading font-black uppercase">
                            Exclusive
                          </span>
                          <span className="text-[9px] text-[#F4D03F]">Valid for 7 Days</span>
                        </div>
                        <div className="text-xs font-heading font-bold text-white">
                          Birthday Special Offer! 🎁
                        </div>
                        <div className="p-2 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/40 text-[10px] font-heading font-bold text-[#FFF2B2]">
                          20% OFF on Hair Spa + Free Blow Dry
                        </div>
                        <button className="w-full py-1.5 rounded-lg bg-gradient-to-r from-[#DAAF37] to-[#F4D03F] text-black text-[10px] font-heading font-black uppercase tracking-wider shadow-sm hover:brightness-110 transition-all">
                          Claim Offer →
                        </button>
                      </div>

                      {/* Gift / Discount Highlight Strip */}
                      <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-[10px]">
                        <span className="text-white/70 flex items-center gap-1.5 font-sans">
                          <Gift className="w-3.5 h-3.5 text-[#DAAF37]" /> Personalized Treat
                        </span>
                        <span className="text-[#DAAF37] font-bold font-heading">Zero Waste</span>
                      </div>
                    </div>
                  </div>

                  {/* STEP 04 */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-[#DAAF37]/15 via-white/[0.04] to-black border-2 border-[#DAAF37]/60 hover:border-[#DAAF37] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-[0_10px_30px_rgba(218,175,55,0.15)]">
                    <div className="absolute top-0 right-0 w-28 h-28 bg-[#DAAF37]/10 blur-xl pointer-events-none" />
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-[#DAAF37] text-black flex items-center justify-center font-bold">
                          <RotateCcw className="w-4 h-4" />
                        </div>
                        <span className="text-2xl font-heading font-black text-[#F4D03F]">
                          04
                        </span>
                      </div>
                      <h4 className="text-base font-heading font-bold text-white mb-2 uppercase tracking-wide">
                        CUSTOMER WAPAS AAYEGA
                      </h4>
                      <p className="text-xs text-white/80 font-sans leading-relaxed mb-4">
                        Special occasions, offers aur personal communication ki wajah se customer dobara salon aane ka reason paata hai.
                      </p>
                    </div>

                    {/* Step Visual: Happy Customer Returning to Salon with Stylist */}
                    <div className="space-y-3 pt-3 border-t border-[#DAAF37]/30">
                      <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-[#DAAF37]/50 shadow-md">
                        <img
                          src={salonCustomerReturnImg}
                          alt="Happy customer returning to salon chair with friendly stylist"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-heading font-semibold text-white/95">
                          <span className="flex items-center gap-1 text-[#F4D03F]">
                            💖 Repeat Relationship
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-[#DAAF37] text-black text-[8px] font-bold uppercase">
                            Retained
                          </span>
                        </div>
                      </div>

                      {/* Returning Badge Callout */}
                      <div className="p-2.5 rounded-xl bg-gradient-to-r from-black via-[#DAAF37]/20 to-black border border-[#DAAF37]/50 text-center">
                        <p className="text-[11px] font-serif italic font-bold text-[#FFF2B2]">
                          “Happy Customers Come Back Always!”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connected Flow Roadmap Bar (Desktop Indicator) */}
                <div className="relative z-10 hidden lg:flex items-center justify-between px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 mb-8 text-xs font-heading font-medium text-white/70">
                  <span className="text-[#DAAF37] font-bold">Step 1: Onboard & Register</span>
                  <ArrowRight className="w-4 h-4 text-[#DAAF37]/60" />
                  <span className="text-[#DAAF37] font-bold">Step 2: Birthday Automation</span>
                  <ArrowRight className="w-4 h-4 text-[#DAAF37]/60" />
                  <span className="text-[#DAAF37] font-bold">Step 3: Exclusive Gift / Offer</span>
                  <ArrowRight className="w-4 h-4 text-[#DAAF37]/60" />
                  <span className="text-emerald-400 font-bold">Step 4: Repeat Visit to Salon</span>
                </div>

                {/* MAIN HIGHLIGHT RIBBON & 4 BOTTOM BENEFIT PILLS */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  {/* Left / Major Highlight Statement (Col 7) */}
                  <div className="lg:col-span-7 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-black via-[#16140A] to-black border-2 border-[#DAAF37] shadow-[0_10px_35px_rgba(218,175,55,0.25)] flex items-center gap-4 sm:gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DAAF37] to-[#F4D03F] text-black flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(218,175,55,0.4)]">
                      <Heart className="w-7 h-7 fill-black text-black" />
                    </div>
                    <div>
                      <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-[0.2em] block mb-1">
                        Nexora Retention Goal
                      </span>
                      <p className="text-base sm:text-xl lg:text-2xl font-heading font-black text-white leading-snug">
                        “Hamara kaam hai —{' '}
                        <span className="text-[#F4D03F]">Customer ek baar Nexora app me aa gaya</span>{' '}
                        to jaa hi nahi paye!”
                      </p>
                    </div>
                  </div>

                  {/* Right / 4 Benefit Pills (Col 5) */}
                  <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                    {[
                      { icon: Calendar, title: 'Repeat Bookings', sub: 'Regular Walk-ins' },
                      { icon: Users, title: 'Loyal Customers', sub: 'Long-term Bond' },
                      { icon: TrendingUp, title: 'Higher Lifetime Value', sub: 'Maximum LTV' },
                      { icon: Crown, title: 'Stronger Salon Growth', sub: 'Stable Revenue' },
                    ].map((benefit, i) => {
                      const IconComp = benefit.icon;
                      return (
                        <div
                          key={i}
                          className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#DAAF37]/50 transition-colors flex items-center gap-3"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] flex-shrink-0">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <h5 className="text-xs font-heading font-bold text-white truncate">
                              {benefit.title}
                            </h5>
                            <span className="text-[10px] text-white/50 font-sans block truncate">
                              {benefit.sub}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. NEW CUSTOMER DISCOVERY (Visual Layer) */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Search className="w-6 h-6 text-[#DAAF37]" />
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white uppercase tracking-wider">
                  New Discovery Layer — Naye Customers Tak Pahonchiye
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <p className="text-white/85 font-sans leading-relaxed text-lg">
                    Sirf purane customers hi nahi, Nexora nearby discovery platform ke through naye customers ko aapka salon aur offers dikhata hai.
                  </p>
                  
                  <ul className="space-y-4">
                    {[
                      'Nearby Salon Discovery on Map',
                      'Special Deals for New Customers',
                      'High Ranking in Search Result',
                      'Direct Booking via Discovery Platform'
                    ].map((text, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-white/70 font-sans">
                        <CheckCircle2 className="w-5 h-5 text-[#DAAF37] flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#DAAF37] to-transparent rounded-2xl opacity-20 blur group-hover:opacity-30 transition duration-500" />
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src={salonOwnerCinematic}
                      alt="Discovery Layer Visualization"
                      className="w-full h-auto object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-[#DAAF37]" />
                        <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">Nearby Discovery</span>
                      </div>
                      <h4 className="text-white font-heading font-bold text-lg mb-1">Nexora Discovery Platform</h4>
                      <p className="text-[10px] text-white/60">Connect with local customers actively searching for services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. BRANDED SALON MESSAGING — 3 EXAMPLES */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Globe className="w-6 h-6 text-[#DAAF37]" />
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white uppercase tracking-wider">
                  Your Salon. Your Brand. Powered by Nexora.
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: 'The Vibe Salon',
                    location: 'JAIPUR',
                    tagline: 'Modern Styling. Premium Experience.',
                    img: jaipurBrandingImg
                  },
                  {
                    name: 'Mirror Mirror Parlor',
                    location: 'MUMBAI',
                    tagline: 'Reflect Your True Beauty.',
                    img: salonVisionImg
                  },
                  {
                    name: 'Aura Beauty Studio',
                    location: 'DELHI',
                    tagline: 'Elegance Redefined.',
                    img: salonOwnerCinematic
                  }
                ].map((salon, i) => (
                  <div key={i} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-[#DAAF37]/50 transition-all duration-500">
                    <div className="aspect-[4/5] relative">
                      <img 
                        src={salon.img} 
                        alt={salon.name}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 flex flex-col justify-end">
                        <div className="mb-4">
                          <span className="px-2 py-1 rounded bg-[#DAAF37] text-black text-[9px] font-bold tracking-[0.1em] uppercase">
                            {salon.location}
                          </span>
                        </div>
                        <h4 className="text-white font-heading font-black text-2xl mb-1 group-hover:text-[#DAAF37] transition-colors uppercase italic tracking-tighter">
                          {salon.name}
                        </h4>
                        <p className="text-white/60 font-sans text-xs italic">
                          "{salon.tagline}"
                        </p>
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-black/40 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase">Nexora Ecosystem</span>
                      <ExternalLink className="w-3 h-3 text-[#DAAF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 rounded-xl bg-[#DAAF37]/5 border border-[#DAAF37]/20 text-center">
                <p className="text-sm text-[#DAAF37]/90 font-medium font-sans italic">
                  "Aapke salon ko milegi apni identity aur naye zamaane ke digital tools — bina kisi technical headache ke."
                </p>
              </div>
            </div>

            {/* 6. NEW SALON OWNER MASTER VISUAL POSTER (Inspired by Reference) */}
            <div className="pt-12 border-t border-white/10">
              <div className="relative rounded-3xl bg-gradient-to-b from-[#141414] via-[#0A0A0A] to-[#040404] border-2 border-[#DAAF37]/50 shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_50px_rgba(218,175,55,0.2)] overflow-hidden p-6 sm:p-8 lg:p-10 mb-8">
                {/* Background Golden Radiance */}
                <div className="absolute -top-24 left-1/3 w-96 h-96 bg-[#DAAF37]/15 blur-[140px] pointer-events-none rounded-full" />
                <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#DAAF37]/10 blur-[140px] pointer-events-none rounded-full" />

                {/* Top Poster Headline Banner */}
                <div className="relative z-10 pb-6 mb-8 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DAAF37]/20 border border-[#DAAF37]/40 text-[#F4D03F] text-[11px] font-heading font-bold uppercase tracking-widest mb-3">
                      <Crown className="w-3.5 h-3.5" />
                      Nexora SalonOS Platform
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-white tracking-tight uppercase leading-tight mb-2">
                      NEXORA —{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D0] via-[#F4D03F] to-[#DAAF37]">
                        SALON OWNER KE LIYE COMPLETE SOLUTION
                      </span>
                    </h3>
                    <p className="text-sm sm:text-base text-white/85 font-sans leading-relaxed">
                      Salon ka har zaroori kaam ek hi platform par —{' '}
                      <strong className="text-[#F4D03F]">Simple, Smart aur Growth ke saath!</strong>
                    </p>
                  </div>

                  {/* Golden Ribbon Badge */}
                  <div className="flex-shrink-0 self-start lg:self-center">
                    <div className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#DAAF37] via-[#F4D03F] to-[#DAAF37] text-black shadow-[0_0_25px_rgba(218,175,55,0.4)] text-center">
                      <span className="text-[11px] sm:text-xs font-heading font-black uppercase tracking-wider block">
                        8 TAAKAT SE BHARE FEATURES
                      </span>
                      <span className="text-[10px] font-heading font-bold opacity-80 block uppercase tracking-widest">
                        — Aapke Salon Ke Liye
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main Composition: Left Side Salon Owner Portrait + Right 8 Feature Cards */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* LEFT COLUMN: Large Realistic Salon Owner Photo & Slogan */}
                  <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-between rounded-2xl bg-gradient-to-b from-white/[0.04] to-black border border-[#DAAF37]/40 p-4 sm:p-5 relative overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                    <div className="relative rounded-xl overflow-hidden aspect-[3/4] border border-[#DAAF37]/40 shadow-xl mb-5">
                      <img
                        src={salonOwnerWomanLeaderImg}
                        alt="Confident Indian female salon owner in modern salon"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-heading">
                        <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-[#DAAF37]/40 text-[#F4D03F] font-bold">
                          Nexora Partner
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#DAAF37] text-black text-[9px] font-black uppercase">
                          Salon Owner
                        </span>
                      </div>
                    </div>

                    {/* Slogan Badge */}
                    <div className="space-y-3 pt-2 text-center lg:text-left">
                      <div className="space-y-0.5">
                        <p className="text-2xl sm:text-3xl font-serif font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37] leading-none">
                          Grow.
                        </p>
                        <p className="text-2xl sm:text-3xl font-serif font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37] leading-none">
                          Manage.
                        </p>
                        <p className="text-2xl sm:text-3xl font-serif font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37] leading-none">
                          Connect
                        </p>
                        <p className="text-xs font-heading font-bold text-white tracking-widest uppercase pt-1">
                          with Nexora!
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-left">
                        <p className="text-xs text-white/80 font-sans leading-relaxed italic">
                          “Aap salon chalaiye, Nexora aapke digital kaam ko aasaan banaye.”
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: 8 Feature Panels (2 rows x 4 cols on desktop, responsive) */}
                  <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    {/* CARD 01: Customer Management */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-[#DAAF37]/35 hover:border-[#DAAF37] transition-all flex flex-col justify-between group shadow-md">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F]">
                            <Users className="w-5 h-5" />
                          </div>
                          <span className="text-xl font-heading font-black text-[#DAAF37]/50 group-hover:text-[#F4D03F] transition-colors">
                            01
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-heading font-black uppercase tracking-wider text-[#F4D03F] mb-1.5 leading-snug">
                          CUSTOMER MANAGEMENT & RETENTION
                        </h4>
                        <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                          Har customer ka complete record — booking, history, preferences aur follow-ups.
                        </p>
                      </div>

                      {/* Mini Widget: Customer List */}
                      <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 space-y-1.5 text-[10px]">
                        <div className="flex items-center justify-between py-0.5 border-b border-white/5">
                          <span className="text-white/90 font-medium">Neha Sharma</span>
                          <span className="px-1.5 py-0.5 rounded bg-[#DAAF37]/20 text-[#F4D03F] font-bold text-[8px]">Gold</span>
                        </div>
                        <div className="flex items-center justify-between py-0.5 border-b border-white/5">
                          <span className="text-white/90 font-medium">Priya Mehta</span>
                          <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold text-[8px]">Regular</span>
                        </div>
                        <div className="flex items-center justify-between py-0.5">
                          <span className="text-white/90 font-medium">Ankita Verma</span>
                          <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold text-[8px]">VIP</span>
                        </div>
                      </div>
                    </div>

                    {/* CARD 02: Birthday Benefits */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-[#DAAF37]/35 hover:border-[#DAAF37] transition-all flex flex-col justify-between group shadow-md">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F]">
                            <Cake className="w-5 h-5" />
                          </div>
                          <span className="text-xl font-heading font-black text-[#DAAF37]/50 group-hover:text-[#F4D03F] transition-colors">
                            02
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-heading font-black uppercase tracking-wider text-[#F4D03F] mb-1.5 leading-snug">
                          BIRTHDAY & CUSTOMER BENEFITS
                        </h4>
                        <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                          Customer ke birthday par automatic wish, special offer ya discount bhejne ka system.
                        </p>
                      </div>

                      {/* Mini Widget: Birthday Offer Pill */}
                      <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#DAAF37]/20 to-black border border-[#DAAF37]/40 space-y-1 text-[10px]">
                        <div className="flex items-center justify-between text-[9px] text-[#F4D03F] font-bold">
                          <span>🎉 Happy Birthday!</span>
                          <span>🎁 Gift</span>
                        </div>
                        <p className="text-white text-[10px] font-heading font-bold">
                          Free Hair Spa + 20% OFF
                        </p>
                        <span className="text-white/50 text-[8px] block">Valid for 7 Days • Auto Sent</span>
                      </div>
                    </div>

                    {/* CARD 03: New Customer Discovery */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-[#DAAF37]/35 hover:border-[#DAAF37] transition-all flex flex-col justify-between group shadow-md">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F]">
                            <Search className="w-5 h-5" />
                          </div>
                          <span className="text-xl font-heading font-black text-[#DAAF37]/50 group-hover:text-[#F4D03F] transition-colors">
                            03
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-heading font-black uppercase tracking-wider text-[#F4D03F] mb-1.5 leading-snug">
                          NEW CUSTOMER DISCOVERY
                        </h4>
                        <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                          Naye customers aapke salon ko search karke aapke salon tak pahunch sakte hain.
                        </p>
                      </div>

                      {/* Mini Widget: Nearby Salons Map Preview */}
                      <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-[10px]">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs">
                            📍
                          </div>
                          <div>
                            <span className="text-white font-bold block">Nearby Salons</span>
                            <span className="text-[#DAAF37] text-[9px]">Local Map Search</span>
                          </div>
                        </div>
                        <span className="text-xs text-emerald-400 font-bold">★ 4.9</span>
                      </div>
                    </div>

                    {/* CARD 04: Booking & Appointment */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-[#DAAF37]/35 hover:border-[#DAAF37] transition-all flex flex-col justify-between group shadow-md">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F]">
                            <Calendar className="w-5 h-5" />
                          </div>
                          <span className="text-xl font-heading font-black text-[#DAAF37]/50 group-hover:text-[#F4D03F] transition-colors">
                            04
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-heading font-black uppercase tracking-wider text-[#F4D03F] mb-1.5 leading-snug">
                          BOOKING & APPOINTMENT
                        </h4>
                        <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                          Online booking, appointment management aur automatic reminders.
                        </p>
                      </div>

                      {/* Mini Widget: Slot Buttons */}
                      <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 space-y-1.5">
                        <div className="grid grid-cols-2 gap-1 text-[9px] text-center font-heading">
                          <span className="py-1 rounded bg-white/5 text-white/70">10:00 AM</span>
                          <span className="py-1 rounded bg-[#DAAF37] text-black font-bold">12:00 PM</span>
                        </div>
                        <div className="py-1 rounded bg-[#DAAF37]/20 border border-[#DAAF37]/40 text-center text-[9px] font-bold text-[#F4D03F]">
                          Instant Confirmation
                        </div>
                      </div>
                    </div>

                    {/* CARD 05: Website & Digital Brand */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-[#DAAF37]/35 hover:border-[#DAAF37] transition-all flex flex-col justify-between group shadow-md">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F]">
                            <Globe className="w-5 h-5" />
                          </div>
                          <span className="text-xl font-heading font-black text-[#DAAF37]/50 group-hover:text-[#F4D03F] transition-colors">
                            05
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-heading font-black uppercase tracking-wider text-[#F4D03F] mb-1.5 leading-snug">
                          WEBSITE & DIGITAL BRAND
                        </h4>
                        <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                          Apne salon ki professional website banaye aur online presence mazboot kare.
                        </p>
                      </div>

                      {/* Mini Widget: Website Preview */}
                      <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-[9px]">
                        <div className="flex items-center gap-1.5 mb-1 text-white/50">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span className="text-[8px] truncate">yoursalon.com</span>
                        </div>
                        <p className="font-heading font-bold text-white text-[10px] truncate">
                          Look Beautiful. Feel Confident.
                        </p>
                      </div>
                    </div>

                    {/* CARD 06: AI Growth System */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-[#DAAF37]/35 hover:border-[#DAAF37] transition-all flex flex-col justify-between group shadow-md">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F]">
                            <Bot className="w-5 h-5" />
                          </div>
                          <span className="text-xl font-heading font-black text-[#DAAF37]/50 group-hover:text-[#F4D03F] transition-colors">
                            06
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-heading font-black uppercase tracking-wider text-[#F4D03F] mb-1.5 leading-snug">
                          AI GROWTH SYSTEM
                        </h4>
                        <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                          Marketing ideas, customer recall aur business growth ke liye smart tools.
                        </p>
                      </div>

                      {/* Mini Widget: AI Smart Pills */}
                      <div className="space-y-1 text-[9px]">
                        <div className="p-1 px-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-white/90">
                          <span>💡 Marketing Ideas</span>
                          <span className="text-[#DAAF37]">Auto</span>
                        </div>
                        <div className="p-1 px-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-white/90">
                          <span>🔄 Customer Recall</span>
                          <span className="text-[#DAAF37]">Smart</span>
                        </div>
                      </div>
                    </div>

                    {/* CARD 07: QR & Payment */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-[#DAAF37]/35 hover:border-[#DAAF37] transition-all flex flex-col justify-between group shadow-md">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F]">
                            <QrCode className="w-5 h-5" />
                          </div>
                          <span className="text-xl font-heading font-black text-[#DAAF37]/50 group-hover:text-[#F4D03F] transition-colors">
                            07
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-heading font-black uppercase tracking-wider text-[#F4D03F] mb-1.5 leading-snug">
                          QR & PAYMENT
                        </h4>
                        <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                          QR code se easy payment, online aur offline payment options.
                        </p>
                      </div>

                      {/* Mini Widget: QR Standee Mockup */}
                      <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-[10px]">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center font-bold text-xs">
                            <QrCode className="w-4 h-4 text-black" />
                          </div>
                          <span className="text-white font-bold">SCAN & PAY</span>
                        </div>
                        <span className="text-emerald-400 font-bold flex items-center gap-1 text-[9px]">
                          ✓ Paid
                        </span>
                      </div>
                    </div>

                    {/* CARD 08: Staff Management */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-[#DAAF37]/35 hover:border-[#DAAF37] transition-all flex flex-col justify-between group shadow-md">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F]">
                            <Briefcase className="w-5 h-5" />
                          </div>
                          <span className="text-xl font-heading font-black text-[#DAAF37]/50 group-hover:text-[#F4D03F] transition-colors">
                            08
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-heading font-black uppercase tracking-wider text-[#F4D03F] mb-1.5 leading-snug">
                          STAFF MANAGEMENT
                        </h4>
                        <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                          Staff attendance, services, performance aur commission tracking.
                        </p>
                      </div>

                      {/* Mini Widget: Staff Badges */}
                      <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 space-y-1 text-[9px]">
                        <div className="flex items-center justify-between text-white/90">
                          <span>Team Attendance</span>
                          <span className="text-emerald-400 font-bold">100%</span>
                        </div>
                        <div className="flex items-center justify-between text-white/70">
                          <span>Commissions</span>
                          <span className="text-[#DAAF37] font-bold">Auto Track</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final CTA Footer */}
            <div className="mt-16 pt-12 border-t border-white/10 flex flex-col items-center text-center">
              <h4 className="text-2xl font-heading font-bold text-white mb-4">
                Apne Salon Ko Nexora Power Dejiye.
              </h4>
              <p className="text-white/60 font-sans max-w-xl mb-8">
                Ek hi platform par booking, customer retention, automated marketing aur payments. Nexora join karna simple hai aur results immediate hain.
              </p>
              <Button href={salonOwnerStakeholder.ctaTarget} variant="secondary" size="lg" className="w-full sm:w-auto px-12">
                Join Nexora One Today
              </Button>
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* 4.3 Growth Partner — EXPANSION ENGINE */}
      <section id="growth-partner" className="scroll-mt-28">
        <FadeIn distance={30} duration={0.8}>
          <GlassCard className="p-8 sm:p-12 border-[#DAAF37]/40" glow="gold">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-12 pb-8 border-b border-white/10">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#DAAF37]/30 to-[#DAAF37]/5 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] flex-shrink-0 shadow-[0_0_35px_rgba(218,175,55,0.3)]">
                  <TrendingUp className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-xs uppercase font-heading font-bold text-[#DAAF37] tracking-[0.2em] block mb-1">
                    Participant 03
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
                    {growthPartnerStakeholder.name}
                  </h2>
                  <p className="text-lg font-sans text-[#DAAF37]/90 font-medium mt-1">
                    Nexora Ka Local Expansion Engine.
                  </p>
                </div>
              </div>
              <Button
                href={growthPartnerStakeholder.ctaTarget}
                variant="primary"
                size="lg"
                icon={<ExternalLink className="w-5 h-5" />}
                className="shadow-[0_10px_30px_rgba(218,175,55,0.3)]"
              >
                {growthPartnerStakeholder.ctaLabel}
              </Button>
            </div>

            {/* 3. SIMPLIFIED PARTNER JOURNEY */}
            <div className="mb-16">
              {/* Core Message & Header */}
              <div className="mb-10 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 mb-4 shadow-[0_0_15px_rgba(218,175,55,0.15)]">
                  <Sparkles className="w-3.5 h-3.5 text-[#DAAF37]" />
                  <span className="text-[11px] font-heading font-bold uppercase tracking-[0.2em] text-[#DAAF37]">
                    Nexora Growth Partner Journey
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight">
                  Find a salon, help it go digital, and grow with Nexora.
                </h3>
                <p className="mt-3 text-sm sm:text-base font-sans text-white/70 max-w-2xl mx-auto leading-relaxed">
                  Ek saral aur prabhavi 5-step digital transformation safar: local salons ko digital kijiye, unhe modern tools dijiye, aur apna partner milestone progress track kijiye.
                </p>
              </div>

              {/* 5 Visual Steps: Desktop Horizontal with Connecting Arrows / Mobile Compact Layout */}
              <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3 items-stretch">
                  {growthPartnerVisualSteps.map((step, idx) => (
                    <div key={idx} className="relative flex flex-col h-full">
                      {/* Step Card */}
                      <div className="relative h-full flex flex-col rounded-2xl bg-black/60 border border-white/10 hover:border-[#DAAF37]/50 transition-all duration-300 overflow-hidden group shadow-lg hover:shadow-[0_0_25px_rgba(218,175,55,0.2)]">
                        {/* Image Container with Luxury Overlay */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/80">
                          <InteractiveImage
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                          
                          {/* Step Number Badge */}
                          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-[#DAAF37]/40 text-[#DAAF37] text-[10px] font-heading font-bold tracking-widest flex items-center gap-1 shadow-md">
                            <span>STEP {step.num}</span>
                          </div>

                          {/* Icon Badge */}
                          <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#DAAF37] group-hover:border-[#DAAF37]/50 transition-colors">
                            <step.icon className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-4 flex flex-col flex-1 justify-between bg-gradient-to-b from-transparent to-white/[0.02]">
                          <div>
                            <h5 className="font-heading font-bold text-white text-sm sm:text-base tracking-wide group-hover:text-[#DAAF37] transition-colors leading-snug">
                              {step.title}
                            </h5>
                            <p className="mt-1.5 text-xs font-sans text-white/60 leading-relaxed">
                              {step.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Desktop Connecting Arrow between steps */}
                      {idx < growthPartnerVisualSteps.length - 1 && (
                        <div className="hidden lg:flex absolute -right-2.5 top-[35%] -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-black/90 border border-[#DAAF37]/60 items-center justify-center text-[#DAAF37] shadow-[0_0_12px_rgba(218,175,55,0.4)] pointer-events-none">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      )}

                      {/* Mobile Connecting Arrow between steps */}
                      {idx < growthPartnerVisualSteps.length - 1 && (
                        <div className="flex sm:hidden justify-center py-1 text-[#DAAF37]/60">
                          <div className="w-6 h-6 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#DAAF37]">
                            <ArrowRight className="w-3 h-3 rotate-90" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 BENEFIT CARDS */}
              <div className="mt-14 pt-12 border-t border-white/10">
                <div className="text-center mb-10">
                  <span className="text-xs uppercase font-heading font-bold text-[#DAAF37] tracking-[0.25em] block mb-2">
                    Partner & Salon Benefits
                  </span>
                  <h4 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
                    Three Pillars of Nexora Growth
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {partnerBenefitCards.map((card, i) => (
                    <div
                      key={i}
                      className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.04] to-black/80 border border-white/10 hover:border-[#DAAF37]/50 transition-all duration-300 p-6 flex flex-col group relative overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(218,175,55,0.15)]"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#DAAF37]/5 rounded-full blur-2xl group-hover:bg-[#DAAF37]/10 transition-colors pointer-events-none" />

                      {/* Badge & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-md bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#DAAF37]">
                          {card.badge}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-black/60 border border-[#DAAF37]/30 flex items-center justify-center text-[#DAAF37] group-hover:scale-110 transition-transform">
                          <card.icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Image Preview */}
                      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 mb-5 group-hover:border-[#DAAF37]/30 transition-colors bg-black/60">
                        <InteractiveImage
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                        <div className="absolute bottom-2.5 left-3">
                          <span className="text-[11px] font-heading font-semibold text-white/90">
                            {card.subtitle}
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h5 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-[#DAAF37] transition-colors">
                        {card.title}
                      </h5>
                      <p className="text-xs font-sans text-white/70 leading-relaxed mb-6">
                        {card.desc}
                      </p>

                      {/* Feature Bullet Points */}
                      <div className="mt-auto pt-4 border-t border-white/10 space-y-2.5">
                        {card.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2.5 text-xs text-white/80 font-sans">
                            <CheckCircle2 className="w-4 h-4 text-[#DAAF37] flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. TRAINING & SUPPORT */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <HelpCircle className="w-6 h-6 text-[#DAAF37]" />
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white uppercase tracking-wider">
                  Training & Corporate Support
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Onboarding Training', desc: 'How to register as a partner and setup profile.' },
                  { title: 'Product Training', desc: 'Deep dive into SalonOS and website tools.' },
                  { title: 'Demo Guidance', desc: 'How to explain Nexora benefits to owners.' },
                  { title: 'Marketing Kits', desc: 'Brochures, branding and digital materials.' },
                  { title: 'Onboarding Help', desc: 'Corporate assistance during first signups.' },
                  { title: 'GP Dashboard Support', desc: 'Assistance with tracking and credits.' },
                  { title: 'Territory Insights', desc: 'Local growth area data and guidance.' },
                  { title: 'Regular Updates', desc: 'New product features and reward news.' }
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/30 transition-all">
                    <h4 className="text-xs font-heading font-bold text-[#DAAF37] mb-2 uppercase tracking-widest">{item.title}</h4>
                    <p className="text-[11px] text-white/50 font-sans leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Benefits List (Columns) */}
            <div className="pt-12 border-t border-white/10">
              <span className="text-xs uppercase font-heading font-bold tracking-[0.3em] text-white/40 block mb-10 text-center">
                VISTAAR SE SAMJHIYE — FULL PARTNER BENEFITS
              </span>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  {growthPartnerStakeholder.benefits.slice(0, 5).map((b, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm text-white/70 font-sans group">
                      <CheckCircle2 className="w-5 h-5 text-[#DAAF37] flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  {growthPartnerStakeholder.benefits.slice(5).map((b, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm text-white/70 font-sans group">
                      <CheckCircle2 className="w-5 h-5 text-[#DAAF37] flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA Footer */}
            <div className="mt-16 pt-12 border-t border-white/10 flex flex-col items-center text-center">
              <h4 className="text-2xl font-heading font-bold text-white mb-4">
                Be a Part of India's Beauty Transformation.
              </h4>
              <p className="text-white/60 font-sans max-w-xl mb-8">
                Growth Partner bankar apne city ke salons ko modern banaiye aur unki digital journey ke saath grow kijiye.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href={growthPartnerStakeholder.ctaTarget} variant="secondary" size="lg" className="px-12">
                  Join Growth Partner
                </Button>
                <Button to="/ecosystem" variant="primary" size="lg" className="px-12 shadow-[0_10px_30px_rgba(218,175,55,0.3)]">
                  Explore Ecosystem
                </Button>
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* 4.4 B2B Brands / Distributors */}
        <section id="b2b" className="scroll-mt-28">
          <FadeIn distance={30} duration={0.8}>
            <GlassCard className="p-8 sm:p-12 border-[#DAAF37]/30" glow="subtle">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8 pb-8 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] flex-shrink-0 shadow-[0_0_25px_rgba(218,175,55,0.25)]">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-wider block">
                    Participant 04
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white">
                    {b2bStakeholder.name}
                  </h2>
                  <p className="text-sm font-sans text-[#DAAF37] font-medium mt-1">
                    {b2bStakeholder.tagline}
                  </p>
                </div>
              </div>
              <Button href="https://beauty-shop-2.vercel.app/" variant="primary" size="md" icon={<ExternalLink className="w-4 h-4" />}>
                {b2bStakeholder.ctaLabel}
              </Button>
            </div>

            {/* NEW B2B CINEMATIC VISUAL */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-10 rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <img
                src={b2bNetworkCinematic}
                alt="NEXORA B2B Network Cinematic Visual - Connecting Brands, Distributors and Businesses"
                className="w-full h-auto object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/40 block mb-2">
                  The Problem
                </span>
                <p className="text-sm text-white/75 font-sans leading-relaxed">
                  {b2bStakeholder.problem}
                </p>
              </div>
              <div>
                <span className="text-xs uppercase font-heading font-semibold tracking-wider text-[#DAAF37] block mb-2">
                  The Nexora Solution
                </span>
                <p className="text-sm text-white/85 font-sans leading-relaxed">
                  {b2bStakeholder.solution}
                </p>
              </div>
            </div>

            {/* B2B Flow */}
            <div className="mb-8 pt-6 border-t border-white/10">
              <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/50 block mb-4">
                Planned B2B Commerce Flow
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs font-heading">
                {b2bStakeholder.journeySteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-3.5 py-2 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/35 text-white font-medium">
                      {step}
                    </span>
                    {idx < b2bStakeholder.journeySteps.length - 1 && (
                      <span className="text-[#DAAF37] font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* B2B Benefits */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/50 block mb-3">
                Planned B2B Capabilities
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {b2bStakeholder.benefits.map((b, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white/80 font-sans flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* 4.5 Beauty Professionals */}
        <section id="professionals" className="scroll-mt-28">
          <FadeIn distance={30} duration={0.8}>
            <GlassCard className="p-8 sm:p-12 border-[#DAAF37]/30" glow="subtle">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] flex-shrink-0 shadow-[0_0_25px_rgba(218,175,55,0.25)]">
                  <Scissors className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-wider block">
                    Participant 05
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white">
                    Beauty Professionals
                  </h2>
                  <p className="text-sm font-sans text-[#DAAF37] font-medium mt-1">
                    Stylists, Therapists, Technicians & Beauty Specialists
                  </p>
                </div>
              </div>
              <Button to="/products#professional-tools" variant="primary" size="md">
                Join as Professional
              </Button>
            </div>

            {/* CINEMATIC VISUAL */}
            <motion.div 
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30, scale: 0.98 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full mb-10 rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <img
                src={beautyProfessionalDigitalTools}
                alt="Nexora Beauty Professional Digital Empowerment Visual"
                className="w-full h-auto object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Core Capabilities */}
            <div className="mb-10">
              <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/50 block mb-4">
                Core Capabilities
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Portfolio', desc: 'Showcase your best work digitally.' },
                  { title: 'Job Network', desc: 'Connect with verified salon owners.' },
                  { title: 'Certifications', desc: 'Display and verify your skills.' },
                  { title: 'Direct Booking', desc: 'Manage your own client schedule.' }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <h4 className="text-sm font-heading font-bold text-[#DAAF37] mb-1">{item.title}</h4>
                    <p className="text-xs text-white/60 font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Journey Flow */}
            <div className="pt-8 border-t border-white/10">
              <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/50 block mb-6">
                Professional Journey Flow
              </span>
              <div className="flex flex-wrap items-center gap-3 text-xs font-heading">
                {[
                  'Create Profile',
                  'Upload Portfolio',
                  'Connect with Businesses',
                  'Apply for Jobs',
                  'Manage Bookings',
                  'Grow Brand'
                ].map((step, idx, arr) => (
                  <React.Fragment key={idx}>
                    <span className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-white shadow-sm">
                      {step}
                    </span>
                    {idx < arr.length - 1 && (
                      <span className="text-[#DAAF37] font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 flex justify-center lg:justify-start">
              <Button to="/products#professional-tools" variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore Professional Tools
              </Button>
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* 4.6 Investors */}
        <section id="investor-section" className="scroll-mt-28">
          <FadeIn distance={30} duration={0.8}>
            <GlassCard className="p-8 sm:p-12 border-[#DAAF37]/30" glow="subtle">
            {/* 1. SECTION HEADING */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] flex-shrink-0 shadow-[0_0_25px_rgba(218,175,55,0.25)]">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-wider block">
                    Participant 06
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white">
                    {investorStakeholder.name}
                  </h2>
                  <p className="text-sm font-sans text-[#DAAF37] font-medium mt-1">
                    {investorStakeholder.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* 2. NEW LARGE CINEMATIC INFOGRAPHIC IMAGE */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full mb-10 rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <img
                src={investorEcosystemInfographic}
                alt="NEXORA Investors & Ecosystem Growth Strategic Infographic"
                className="w-full h-auto object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* 3. VERY SHORT SUPPORTING TEXT */}
            <div className="mb-10 text-center lg:text-left">
              <p className="text-base sm:text-lg text-white/85 font-sans leading-relaxed max-w-3xl">
                Nexora One connects fragmented digital markets into a single, scalable architecture, creating long-term business value through network effects and recurring monetization.
              </p>
            </div>

            {/* 4. EXISTING INVESTMENT PILLARS / SUPPORTING CONTENT */}
            <div className="space-y-12">
              {/* Problem & Strategy Summary */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/40 block mb-2">
                    Market Opportunity
                  </span>
                  <p className="text-sm text-white/75 font-sans leading-relaxed">
                    {investorStakeholder.problem}
                  </p>
                </div>
                <div>
                  <span className="text-xs uppercase font-heading font-semibold tracking-wider text-[#DAAF37] block mb-2">
                    Strategy
                  </span>
                  <p className="text-sm text-white/85 font-sans leading-relaxed">
                    {investorStakeholder.solution}
                  </p>
                </div>
              </div>

              {/* Pillars & Why it Matters */}
              <div className="pt-8 border-t border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Pillars */}
                  <div>
                    <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/50 block mb-4">
                      Investment Pillars
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {investorStakeholder.benefits.map((b, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white/80 font-sans flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why it Matters */}
                  <div>
                    <span className="text-xs uppercase font-heading font-semibold tracking-wider text-[#DAAF37] block mb-4">
                      Why This Opportunity Matters
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-3">
                      {[
                        {
                          title: 'Ready Ecosystem',
                          desc: 'Products, platforms and business layers already being developed.'
                        },
                        {
                          title: 'Multiple Growth Layers',
                          desc: 'Beauty core + digital services + B2B + advertising + future expansion verticals.'
                        },
                        {
                          title: 'Long-Term Network Value',
                          desc: 'More businesses, customers and partners can strengthen the connected ecosystem.'
                        }
                      ].map((card, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#DAAF37] flex-shrink-0 mt-1.5" />
                          <div>
                            <h4 className="text-xs font-heading font-bold text-white mb-0.5 uppercase tracking-wide">
                              {card.title}
                            </h4>
                            <p className="text-[11px] text-white/60 font-sans leading-relaxed">
                              {card.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. VIEW INVESTOR STRATEGY BUTTON */}
            <div className="mt-12 pt-8 border-t border-white/10 flex justify-center lg:justify-start">
              <Button to={investorStakeholder.ctaTarget} variant="primary" size="lg" className="w-full sm:w-auto shadow-[0_10px_30px_rgba(218,175,55,0.25)]">
                {investorStakeholder.ctaLabel}
              </Button>
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      </div>

      <div className="py-10 sm:py-12 text-center">
        <Button to="/ecosystem" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
          Explore the Ecosystem
        </Button>
      </div>
    </div>
  );
};
