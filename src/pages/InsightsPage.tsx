import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Coins,
  ArrowDown,
  Layers,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  PieChart,
  Users,
  UserCheck,
  Repeat,
  Zap,
  Scale,
  Target,
  Calculator,
  MinusCircle,
  PlusCircle,
  Receipt,
  Activity,
  CheckCircle,
  Award,
  Briefcase,
  Building2,
  BarChart3,
  LineChart,
  Wallet,
  Landmark,
  Gift,
  Percent,
  Handshake,
  FileText,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { SectionDivider } from '../components/common/SectionDivider';
import { FadeIn } from '../components/common/MotionWrapper';
import { InteractiveImage } from '../components/common/InteractiveImage';
import { HorizontalCarousel } from '../components/common/HorizontalCarousel';
import { INSIGHT_CATEGORIES, INSIGHTS_DATA } from '../data/insights';
import gmvVsRevenueImg from '../assets/images/gmv_vs_revenue_guide_1791435815534.jpg';
import revenueVsEbitdaVsNetProfitImg from '../assets/images/revenue_vs_ebitda_vs_net_profit_guide_1791436597712.jpg';
import cacVsLtvImg from '../assets/images/cac_vs_ltv_guide_1791436808116.jpg';
import unitEconImg from '../assets/images/unit_econ_guide_1791437293804.jpg';
import valuationGuideImg from '../assets/images/valuation_guide_1791437485546.jpg';
import equityDilutionGuideImg from '../assets/images/equity_dilution_guide_1791437767317.jpg';
import fundingModelsGuideImg from '../assets/images/funding_models_guide_1791437956559.jpg';
import dealStructuresGuideImg from '../assets/images/deal_structures_guide_1791438259562.jpg';

const EcosystemCharts = React.lazy(() =>
  import('../components/insights/EcosystemCharts').then((m) => ({ default: m.EcosystemCharts }))
);

export const InsightsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>('ins-all-01');

  const filteredInsights =
    selectedCategory === 'All'
      ? INSIGHTS_DATA
      : INSIGHTS_DATA.filter((item) => item.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full">
      {/* PAGE HEADER — INVESTOR GUIDE / SHARK TANK */}
      <section className="pt-6 pb-6 sm:pt-10 sm:pb-8 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 backdrop-blur-sm shadow-[0_0_20px_rgba(218,175,55,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] animate-pulse" />
              INVESTOR GUIDE / SHARK TANK
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F5F5F5] tracking-tight mx-auto leading-[1.15] mb-3">
              INVESTOR GUIDE /{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                SHARK TANK
              </span>
            </h1>

            <p className="text-base sm:text-lg font-heading font-semibold text-[#F4D03F] mb-2">
              Startup & Investment Terms — Simple Visual Explanation
            </p>

            <p className="text-sm sm:text-base text-white/75 font-sans leading-relaxed max-w-xl mx-auto">
              Understand important startup and investment numbers through simple visual examples.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 1 — GMV vs REVENUE */}
      <section className="py-6 sm:py-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <FadeIn>
          {/* Section Title & Subtitle */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/80 text-xs font-heading font-medium uppercase tracking-wider mb-2.5">
              SECTION 01
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-2">
              GMV vs REVENUE
            </h2>
            <p className="text-base sm:text-lg text-[#F4D03F] font-heading font-medium">
              Same business activity. Different numbers.
            </p>
          </div>

          {/* MAIN VISUAL — 60% Weight Original Cinematic Educational Graphic */}
          <div className="mb-6 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
            <InteractiveImage
              src={gmvVsRevenueImg}
              alt="GMV vs REVENUE - Nexora One Investor Guide & Shark Tank Term Visual Explanation"
              className="w-full h-auto object-cover select-none block"
              loading="eager"
            />
          </div>

          {/* Interactive Step-by-Step Flow & Visual Comparison Blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
            {/* Step 1: Customer Transaction */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-wider">
                    STEP 1
                  </span>
                  <Coins className="w-5 h-5 text-[#F4D03F]" />
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-2">
                  CUSTOMER TRANSACTION
                </h3>
                <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                  A customer purchases a beauty service or product through the platform.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                <span className="text-[10px] uppercase font-heading text-white/50 block">Customer Pays</span>
                <span className="text-xl font-heading font-bold text-[#F4D03F]">₹1,000</span>
              </div>
            </div>

            {/* Step 2: GMV Block */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#DAAF37]/10 via-white/[0.03] to-white/[0.02] border border-[#DAAF37]/40 flex flex-col justify-between shadow-[0_8px_30px_rgba(218,175,55,0.1)]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-wider">
                    STEP 2
                  </span>
                  <PieChart className="w-5 h-5 text-[#DAAF37]" />
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-2">
                  GMV (Gross Merchandise Value)
                </h3>
                <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                  Total value of transactions happening through the platform.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 text-center">
                <span className="text-[10px] uppercase font-heading text-[#DAAF37] block">Total Business Value</span>
                <span className="text-xl font-heading font-bold text-white">₹1,000</span>
              </div>
            </div>

            {/* Step 3: Company Revenue Block */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] via-white/[0.03] to-white/[0.02] border border-[#F4D03F]/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-wider">
                    STEP 3
                  </span>
                  <DollarSign className="w-5 h-5 text-[#F4D03F]" />
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-2">
                  NEXORA ONE REVENUE
                </h3>
                <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                  Actual company revenue earned through applicable commission, fees, subscriptions, or B2B sales.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.06] border border-[#F4D03F]/30 text-center">
                <span className="text-[10px] uppercase font-heading text-[#F4D03F] block">Actual Company Earning</span>
                <span className="text-xs font-heading font-bold text-white">PLATFORM'S EARNED SHARE / FEES</span>
              </div>
            </div>
          </div>

          {/* Key Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <GlassCard className="p-5 sm:p-6 border-[#DAAF37]/35" glow="subtle">
              <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-wider block mb-1.5">
                METRIC 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-1.5">
                GMV
              </h3>
              <div className="text-xs font-heading font-semibold text-[#F4D03F] mb-2">
                TOTAL BUSINESS VALUE
              </div>
              <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                The total value of products or services sold through a platform.
              </p>
            </GlassCard>

            <GlassCard className="p-5 sm:p-6 border-[#F4D03F]/35" glow="gold">
              <span className="text-xs font-mono font-bold text-[#F4D03F] uppercase tracking-wider block mb-1.5">
                METRIC 02
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-1.5">
                REVENUE
              </h3>
              <div className="text-xs font-heading font-semibold text-[#F4D03F] mb-2">
                COMPANY'S ACTUAL EARNING
              </div>
              <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                The amount the company actually earns from that business activity.
              </p>
            </GlassCard>
          </div>

          {/* Large Key Takeaway Card */}
          <GlassCard className="p-6 sm:p-8 border-[#DAAF37]/50 text-center" glow="gold">
            <span className="text-xs uppercase font-heading font-bold tracking-[0.2em] text-[#DAAF37] block mb-2">
              KEY TAKEAWAY
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#F4D03F] mb-3">
              GMV ≠ REVENUE
            </h3>
            <p className="text-sm sm:text-base text-white/90 font-sans max-w-2xl mx-auto leading-relaxed mb-3">
              GMV shows the total business value moving through the platform.<br />
              Revenue shows what the company actually earns.
            </p>
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 inline-block max-w-xl mx-auto text-xs text-white/70 italic">
              A platform can have high GMV without having the same amount as revenue.
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* SECTION 2 — REVENUE vs EBITDA vs NET PROFIT */}
      <section className="py-6 sm:py-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <FadeIn>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-2.5">
              SECTION 02
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-2">
              REVENUE vs EBITDA vs NET PROFIT
            </h2>
            <p className="text-base sm:text-lg text-[#F4D03F] font-heading font-medium">
              From Sales to Profit — Simple Example.
            </p>
          </div>

          {/* MAIN CINEMATIC EDUCATIONAL IMAGE (60% Weight) */}
          <div className="mb-6 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)] relative">
            <InteractiveImage
              src={revenueVsEbitdaVsNetProfitImg}
              alt="REVENUE vs EBITDA vs NET PROFIT - Nexora One Investor Guide & Shark Tank Financial Concept"
              className="w-full h-auto object-cover select-none block"
              loading="eager"
            />
          </div>

          {/* Illustrative Concept Flow Diagram (Educational Story) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {/* 1. SALES / REVENUE */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-wider">
                    STEP 1 — REVENUE
                  </span>
                  <Coins className="w-5 h-5 text-[#F4D03F]" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  1. Total Sales
                </h3>
                <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                  Total money received from business product and service sales.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-center">
                <span className="text-[10px] uppercase font-heading text-white/50 block">Illustrative Example</span>
                <span className="text-xl font-heading font-bold text-[#F4D03F]">₹10,00,000</span>
                <span className="text-[10px] text-[#DAAF37] font-heading block mt-0.5">REVENUE</span>
              </div>
            </div>

            {/* 2. OPERATING COSTS → EBITDA */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#DAAF37]/10 via-white/[0.03] to-white/[0.02] border border-[#DAAF37]/40 flex flex-col justify-between shadow-[0_8px_30px_rgba(218,175,55,0.1)]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-wider">
                    STEP 2 — OPERATING COSTS
                  </span>
                  <TrendingUp className="w-5 h-5 text-[#DAAF37]" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  2. Subtract Operating Costs
                </h3>
                <p className="text-xs text-white/70 font-sans leading-relaxed mb-3">
                  Staff salaries, rent, marketing, software & daily operating expenses.
                </p>
                <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] text-white/60 mb-4">
                  REVENUE − OPERATING COSTS = <strong>EBITDA</strong>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 text-center">
                <span className="text-[10px] uppercase font-heading text-[#DAAF37] block">Operating Performance</span>
                <span className="text-lg font-heading font-bold text-white">EBITDA</span>
              </div>
            </div>

            {/* 3. RELEVANT COSTS → NET PROFIT */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] via-white/[0.03] to-white/[0.02] border border-[#F4D03F]/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-wider">
                    STEP 3 — RELEVANT COSTS
                  </span>
                  <DollarSign className="w-5 h-5 text-[#F4D03F]" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  3. Subtract Interest, Tax, D&A
                </h3>
                <p className="text-xs text-white/70 font-sans leading-relaxed mb-3">
                  Interest, taxes, depreciation, and amortization expenses.
                </p>
                <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] text-white/60 mb-4">
                  EBITDA − INTEREST, TAX & D&A = <strong>NET PROFIT</strong>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.06] border border-[#F4D03F]/30 text-center">
                <span className="text-[10px] uppercase font-heading text-[#F4D03F] block">Actual Profit Remaining</span>
                <span className="text-lg font-heading font-bold text-white">NET PROFIT</span>
              </div>
            </div>
          </div>

          {/* Main Visual Comparison — 3 Connected Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            <GlassCard className="p-5 border-white/20">
              <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-wider block mb-1.5">
                01. REVENUE
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1.5">
                REVENUE
              </h3>
              <div className="text-xs font-heading font-semibold text-[#F4D03F] mb-2 uppercase">
                "Total sales"
              </div>
              <p className="text-xs text-white/75 font-sans leading-relaxed">
                Total money received from sales before any operating expenses or costs.
              </p>
            </GlassCard>

            <GlassCard className="p-5 border-[#DAAF37]/40" glow="subtle">
              <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-wider block mb-1.5">
                02. EBITDA
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1.5">
                EBITDA
              </h3>
              <div className="text-xs font-heading font-semibold text-[#F4D03F] mb-2 uppercase">
                "Operating performance before interest, tax, D&A"
              </div>
              <p className="text-xs text-white/75 font-sans leading-relaxed">
                What remains from the business after operating costs, before interest, taxes, depreciation and amortization.
              </p>
            </GlassCard>

            <GlassCard className="p-5 border-[#F4D03F]/40" glow="gold">
              <span className="text-xs font-mono font-bold text-[#F4D03F] uppercase tracking-wider block mb-1.5">
                03. NET PROFIT
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1.5">
                NET PROFIT
              </h3>
              <div className="text-xs font-heading font-semibold text-[#F4D03F] mb-2 uppercase">
                "Profit after relevant expenses"
              </div>
              <p className="text-xs text-white/75 font-sans leading-relaxed">
                What remains after all relevant operating expenses and applicable interest, taxes, depreciation and amortization.
              </p>
            </GlassCard>
          </div>

          {/* Large Key Takeaway Banner */}
          <GlassCard className="p-6 sm:p-8 border-[#DAAF37]/50 text-center" glow="gold">
            <span className="text-xs uppercase font-heading font-bold tracking-[0.2em] text-[#DAAF37] block mb-2">
              KEY TAKEAWAY
            </span>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F4D03F] mb-3">
              ₹10 LAKH SALES DOES NOT MEAN ₹10 LAKH PROFIT.
            </h3>
            <div className="text-lg sm:text-xl font-heading font-bold text-white mb-3">
              REVENUE ≠ EBITDA ≠ NET PROFIT
            </div>
            <p className="text-sm text-white/80 font-sans max-w-xl mx-auto leading-relaxed mb-3">
              High revenue does not automatically mean high profit.
            </p>
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 inline-block max-w-xl mx-auto text-[11px] text-white/60 italic">
              Illustrative educational example. Not representative of Nexora One actual financial figures.
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* SECTION 3 — CAC vs LTV */}
      <section className="py-6 sm:py-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <FadeIn>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-2.5">
              SECTION 03
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-2">
              CAC vs LTV
            </h2>
            <p className="text-base sm:text-lg text-[#F4D03F] font-heading font-medium">
              Customer ko lane ki cost vs customer ki total value.
            </p>
          </div>

          {/* MAIN CINEMATIC EDUCATIONAL IMAGE (60% Weight Visual) */}
          <div className="mb-6 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)] relative">
            <InteractiveImage
              src={cacVsLtvImg}
              alt="CAC vs LTV - Customer Acquisition Cost vs Lifetime Value Visual Explanation"
              className="w-full h-auto object-cover select-none block"
              loading="eager"
            />
          </div>

          {/* Definitions & Core Concepts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <GlassCard className="p-6 sm:p-8 border-[#DAAF37]/35" glow="subtle">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-wider">
                  01. CAC
                </span>
                <Target className="w-5 h-5 text-[#F4D03F]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
                CAC — Customer Acquisition Cost
              </h3>
              <p className="text-sm text-[#F4D03F] font-heading font-semibold mb-3">
                “Ek customer ko acquire karne mein average kitna cost aata hai.”
              </p>
              <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                Total spending on sales, marketing, and advertising divided by the total number of new customers acquired during that specific period.
              </p>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8 border-[#F4D03F]/35" glow="gold">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#F4D03F] uppercase tracking-wider">
                  02. LTV
                </span>
                <TrendingUp className="w-5 h-5 text-[#F4D03F]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
                LTV — Customer Lifetime Value
              </h3>
              <p className="text-sm text-[#F4D03F] font-heading font-semibold mb-3">
                “Ek customer se relationship ke dauran expected total value kitni generate hoti hai.”
              </p>
              <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                The total net revenue or gross margin generated by a customer throughout their entire relationship and recurring transactions with the platform.
              </p>
            </GlassCard>
          </div>

          {/* Visual Story / Journey Flow */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 mb-6">
            <div className="text-center mb-4">
              <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
                CUSTOMER JOURNEY & VALUE CREATION
              </span>
              <h4 className="text-base font-heading font-bold text-white">
                How CAC Transforms Into LTV
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center flex flex-col items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-[#DAAF37]/20 flex items-center justify-center text-[#F4D03F] mb-1.5">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-heading font-bold text-white block mb-0.5">1. Marketing / Sales Spend</span>
                <span className="text-[10px] text-white/60 font-sans">Acquisition Investment</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center flex flex-col items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-[#DAAF37]/20 flex items-center justify-center text-[#F4D03F] mb-1.5">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-heading font-bold text-white block mb-0.5">2. New Customer</span>
                <span className="text-[10px] text-white/60 font-sans">Onboarded to Platform</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center flex flex-col items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-[#DAAF37]/20 flex items-center justify-center text-[#F4D03F] mb-1.5">
                  <Coins className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-heading font-bold text-white block mb-0.5">3. First Booking / Purchase</span>
                <span className="text-[10px] text-white/60 font-sans">Initial CAC Offset</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center flex flex-col items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-[#DAAF37]/20 flex items-center justify-center text-[#F4D03F] mb-1.5">
                  <Repeat className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-heading font-bold text-white block mb-0.5">4. Repeat Booking / Purchase</span>
                <span className="text-[10px] text-white/60 font-sans">Retention & Loyalty</span>
              </div>

              <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#DAAF37]/20 to-[#DAAF37]/5 border border-[#DAAF37]/40 text-center flex flex-col items-center justify-center shadow-[0_0_20px_rgba(218,175,55,0.15)]">
                <div className="w-7 h-7 rounded-full bg-[#F4D03F] text-[#0A0A0A] flex items-center justify-center mb-1.5 font-bold">
                  <UserCheck className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-heading font-bold text-white block mb-0.5">5. Long-Term Customer Value</span>
                <span className="text-[10px] text-[#F4D03F] font-heading font-semibold">High Multiplier LTV</span>
              </div>
            </div>
          </div>

          {/* Visual Side-by-Side Comparison & Illustrative Numbers */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6">
            {/* Left Side: CAC Breakdown */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/10">
                  <h4 className="text-base font-heading font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    CAC — Acquisition Inputs
                  </h4>
                  <span className="text-xs font-mono font-bold text-red-400">COST</span>
                </div>
                <ul className="space-y-2 mb-4 text-xs text-white/80 font-sans">
                  <li className="flex items-center gap-2.5 p-1.5 rounded-lg bg-white/[0.02]">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    <span>Marketing Campaigns</span>
                  </li>
                  <li className="flex items-center gap-2.5 p-1.5 rounded-lg bg-white/[0.02]">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    <span>Digital Advertising & Ads</span>
                  </li>
                  <li className="flex items-center gap-2.5 p-1.5 rounded-lg bg-white/[0.02]">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    <span>Sales Effort & Onboarding</span>
                  </li>
                  <li className="flex items-center gap-2.5 p-1.5 rounded-lg bg-white/[0.02]">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    <span>Total Customer Acquisition Cost</span>
                  </li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
                <span className="text-[10px] uppercase font-heading text-red-300 block mb-0.5">Illustrative Example CAC</span>
                <span className="text-2xl font-heading font-bold text-white">₹500</span>
              </div>
            </div>

            {/* Center Multiplier Badge */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-b from-[#DAAF37]/15 via-white/[0.03] to-[#DAAF37]/10 border border-[#DAAF37]/40 text-center shadow-[0_0_30px_rgba(218,175,55,0.15)]">
              <Scale className="w-6 h-6 text-[#F4D03F] mb-1.5" />
              <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-wider block mb-0.5">RATIO</span>
              <span className="text-2xl font-serif font-bold text-white mb-0.5">4×</span>
              <span className="text-[11px] font-heading font-semibold text-[#F4D03F]">LTV = 4 × CAC</span>
              <div className="mt-2 px-2 py-0.5 rounded bg-[#DAAF37]/20 border border-[#DAAF37]/30 text-[9px] text-white/80 uppercase tracking-widest font-mono">
                Healthy Unit Economics
              </div>
            </div>

            {/* Right Side: LTV Breakdown */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-gradient-to-b from-[#DAAF37]/10 to-white/[0.02] border border-[#DAAF37]/40 flex flex-col justify-between shadow-[0_8px_30px_rgba(218,175,55,0.08)]">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/10">
                  <h4 className="text-base font-heading font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F4D03F]" />
                    LTV — Lifetime Value Driver
                  </h4>
                  <span className="text-xs font-mono font-bold text-[#F4D03F]">VALUE</span>
                </div>
                <ul className="space-y-2 mb-4 text-xs text-white/80 font-sans">
                  <li className="flex items-center gap-2.5 p-1.5 rounded-lg bg-white/[0.02]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] flex-shrink-0" />
                    <span>First Transaction Earnings</span>
                  </li>
                  <li className="flex items-center gap-2.5 p-1.5 rounded-lg bg-white/[0.02]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] flex-shrink-0" />
                    <span>Repeat Bookings & Purchases</span>
                  </li>
                  <li className="flex items-center gap-2.5 p-1.5 rounded-lg bg-white/[0.02]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] flex-shrink-0" />
                    <span>Loyalty, Up-sells & Retention</span>
                  </li>
                  <li className="flex items-center gap-2.5 p-1.5 rounded-lg bg-white/[0.02]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] flex-shrink-0" />
                    <span>Long-Term Customer Lifetime Value</span>
                  </li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-[#DAAF37]/20 border border-[#DAAF37]/40 text-center">
                <span className="text-[10px] uppercase font-heading text-[#F4D03F] block mb-0.5">Illustrative Example LTV</span>
                <span className="text-2xl font-heading font-bold text-white">₹2,000</span>
              </div>
            </div>
          </div>

          {/* Disclaimer Label */}
          <div className="text-center mb-5">
            <div className="inline-block px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white/70 font-mono tracking-wide">
              ILLUSTRATIVE EXAMPLE ONLY — NOT NEXORA ACTUAL FINANCIAL DATA.
            </div>
          </div>

          {/* Large Key Takeaway Banner */}
          <GlassCard className="p-6 sm:p-8 border-[#DAAF37]/50 text-center" glow="gold">
            <span className="text-xs uppercase font-heading font-bold tracking-[0.2em] text-[#DAAF37] block mb-2">
              KEY TAKEAWAY
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#F4D03F] mb-3">
              LTV &gt; CAC = Better Customer Economics
            </h3>
            <p className="text-sm sm:text-base text-white/90 font-sans max-w-2xl mx-auto leading-relaxed mb-3">
              When the value generated by a customer over time significantly exceeds the cost required to acquire them, the business builds strong, profitable, scalable unit economics.
            </p>
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 inline-block max-w-xl mx-auto text-[11px] text-white/60 italic">
              Illustrative educational guide for startup founders and investors.
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* SECTION 4 — UNIT ECONOMICS */}
      <section className="py-6 sm:py-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <FadeIn>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Calculator className="w-3.5 h-3.5" />
              SECTION 4 — INVESTOR GUIDE / SHARK TANK
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-3">
              UNIT ECONOMICS
            </h2>
            <p className="text-base sm:text-lg text-[#F4D03F] font-heading font-semibold mb-2">
              Ek customer / transaction par business kitna kamata hai aur uske against kitna cost karta hai.
            </p>
            <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
              Investor ko simple visual example ke through samjhana hai ki Unit Economics kisi business ki basic financial sustainability ko kaise evaluate karta hai.
            </p>
          </div>

          {/* Core Concept Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#DAAF37]/15 via-white/[0.03] to-[#DAAF37]/10 border border-[#DAAF37]/40 mb-6 text-center shadow-[0_0_30px_rgba(218,175,55,0.1)]">
            <span className="text-[10px] font-mono font-bold text-[#DAAF37] uppercase tracking-widest block mb-1">
              CORE CONCEPT
            </span>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-1.5">
              Unit Economics = Ek single customer, booking, order, ya transaction ko individual level par dekhna.
            </h3>
            <p className="text-xs text-white/70 font-sans max-w-2xl mx-auto">
              Evaluating profitability at the fundamental unit level before scaling operations or overhead.
            </p>
          </div>

          {/* Main Visual Image & 60% Visual Weight Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-8">
            {/* 60% Visual Component */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-[#DAAF37]/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] bg-black/60 relative group">
                <InteractiveImage
                  src={unitEconImg}
                  alt="Unit Economics Visual Explanation"
                  className="w-full h-auto object-cover rounded-2xl"
                  title="Unit Economics — Revenue minus Variable Cost equals Contribution"
                />
                <div className="p-3 bg-black/80 backdrop-blur-md border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                  <span className="font-mono text-[#F4D03F] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#DAAF37]" />
                    Original Shark-Tank-Style Visual Explanation
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-white/50">Click to expand</span>
                </div>
              </div>
            </div>

            {/* 40% Key Elements Explanation Cards */}
            <div className="lg:col-span-5 space-y-4">
              {/* Element 1: Customer / Transaction Value */}
              <GlassCard className="p-5 border-emerald-500/30 hover:border-emerald-500/50 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block">01. REVENUE INFLOW</span>
                    <h4 className="text-base font-heading font-bold text-white">1. Customer / Transaction Value</h4>
                  </div>
                </div>
                <p className="text-xs text-white/80 font-sans leading-relaxed">
                  Customer se business ko kitni value / revenue milti hai per booking or order.
                </p>
              </GlassCard>

              {/* Element 2: Variable Cost */}
              <GlassCard className="p-5 border-red-500/30 hover:border-red-500/50 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-red-500/20 text-red-400 font-bold">
                    <MinusCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest block">02. DIRECT OUTFLOW</span>
                    <h4 className="text-base font-heading font-bold text-white">2. Variable Cost</h4>
                  </div>
                </div>
                <p className="text-xs text-white/80 font-sans leading-relaxed">
                  Us customer / transaction ko serve karne mein directly related cost (e.g. materials, payment gateway fees, direct delivery).
                </p>
              </GlassCard>

              {/* Element 3: Contribution Margin */}
              <GlassCard className="p-5 border-[#DAAF37]/50 bg-gradient-to-r from-[#DAAF37]/10 to-transparent hover:border-[#DAAF37] transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#DAAF37]/20 text-[#F4D03F] font-bold">
                    <PlusCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#F4D03F] uppercase tracking-widest block">03. NET MARGIN</span>
                    <h4 className="text-base font-heading font-bold text-white">3. Contribution</h4>
                  </div>
                </div>
                <p className="text-xs text-[#F4D03F] font-heading font-semibold mb-1">
                  Revenue − Variable Cost = Contribution
                </p>
                <p className="text-[11px] text-white/70 font-sans">
                  The net amount contributed towards fixed operational overhead and net company growth.
                </p>
              </GlassCard>
            </div>
          </div>

          {/* Visual Flow Diagram */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 mb-6">
            <div className="text-center mb-4">
              <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
                TRANSACTION FLOW PIPELINE
              </span>
              <h4 className="text-base font-heading font-bold text-white">
                How Revenue Moves Through Unit Economics
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center flex flex-col items-center justify-center">
                <Users className="w-5 h-5 text-cyan-400 mb-1.5" />
                <span className="text-xs font-heading font-bold text-white block mb-0.5">CUSTOMER</span>
                <span className="text-[10px] text-white/50">Initial User Action</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center flex flex-col items-center justify-center">
                <Receipt className="w-5 h-5 text-blue-400 mb-1.5" />
                <span className="text-xs font-heading font-bold text-white block mb-0.5">TRANSACTION / BOOKING</span>
                <span className="text-[10px] text-white/50">Service Executed</span>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center flex flex-col items-center justify-center">
                <DollarSign className="w-5 h-5 text-emerald-400 mb-1.5" />
                <span className="text-xs font-heading font-bold text-emerald-300 block mb-0.5">REVENUE</span>
                <span className="text-[10px] text-emerald-400/80 font-mono font-semibold">Inflow (+₹1,000)</span>
              </div>

              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-center flex flex-col items-center justify-center">
                <MinusCircle className="w-5 h-5 text-red-400 mb-1.5" />
                <span className="text-xs font-heading font-bold text-red-300 block mb-0.5">MINUS VARIABLE COST</span>
                <span className="text-[10px] text-red-400/80 font-mono font-semibold">Direct Cost (-₹400)</span>
              </div>

              <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#DAAF37]/25 to-[#DAAF37]/5 border border-[#DAAF37]/50 text-center flex flex-col items-center justify-center shadow-[0_0_20px_rgba(218,175,55,0.15)]">
                <CheckCircle className="w-5 h-5 text-[#F4D03F] mb-1.5" />
                <span className="text-xs font-heading font-bold text-white block mb-0.5">CONTRIBUTION PER UNIT</span>
                <span className="text-[10px] text-[#F4D03F] font-mono font-bold">Positive Net (+₹600)</span>
              </div>
            </div>
          </div>

          {/* Illustrative Example Breakdown Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-white/10 mb-5">
              <div>
                <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-widest block mb-0.5">
                  ILLUSTRATIVE CALCULATION
                </span>
                <h4 className="text-xl font-heading font-bold text-white">
                  Step-by-Step Unit Example
                </h4>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-xs font-mono text-[#F4D03F] font-semibold">
                60% Contribution Margin
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
              {/* Step 1 */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-xs font-mono uppercase text-emerald-400 block mb-1">Revenue Per Transaction</span>
                <span className="text-2xl font-heading font-bold text-white mb-1 block">₹1,000</span>
                <span className="text-[11px] text-emerald-300 font-sans">Gross Customer Payment</span>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <span className="text-xs font-mono uppercase text-red-400 block mb-1">Variable Cost</span>
                <span className="text-2xl font-heading font-bold text-white mb-1 block">₹400</span>
                <span className="text-[11px] text-red-300 font-sans">Direct Operational Expense</span>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-xl bg-gradient-to-b from-[#DAAF37]/20 to-[#DAAF37]/5 border border-[#DAAF37]/40 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
                <span className="text-xs font-mono uppercase text-[#F4D03F] block mb-1">Contribution</span>
                <span className="text-2xl font-heading font-bold text-white mb-1 block">₹600</span>
                <span className="text-[11px] text-[#F4D03F] font-sans font-semibold">Positive Profit Contribution</span>
              </div>
            </div>
          </div>

          {/* Mandatory Disclaimer Label */}
          <div className="text-center mb-5">
            <div className="inline-block px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white/70 font-mono tracking-wide">
              ILLUSTRATIVE EXAMPLE ONLY — NOT NEXORA ACTUAL FINANCIAL DATA.
            </div>
          </div>

          {/* Key Takeaway Banner */}
          <GlassCard className="p-6 sm:p-8 border-[#DAAF37]/50 text-center" glow="gold">
            <span className="text-xs uppercase font-heading font-bold tracking-[0.2em] text-[#DAAF37] block mb-2">
              KEY TAKEAWAY
            </span>
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-[#F4D03F] mb-3 uppercase tracking-tight">
              POSITIVE UNIT ECONOMICS = EACH TRANSACTION CONTRIBUTES TOWARD BUSINESS GROWTH
            </h3>
            <p className="text-sm text-white/90 font-sans max-w-2xl mx-auto leading-relaxed mb-3">
              When every individual booking or order generates more revenue than its direct variable cost, scaling the transaction volume accelerates profitability rather than increasing losses.
            </p>
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 inline-block max-w-xl mx-auto text-[11px] text-white/60 italic">
              Illustrative educational guide for startup founders and investors.
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* SECTION 5: VALUATION */}
      <section className="py-6 sm:py-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionDivider className="mb-6" />

        <FadeIn>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Scale className="w-3.5 h-3.5" />
              SECTION 5 — INVESTOR GUIDE / SHARK TANK
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-3">
              VALUATION
            </h2>
            <p className="text-base sm:text-lg text-[#F4D03F] font-heading font-semibold mb-2">
              Company ki total estimated value kaise samjhi jaati hai?
            </p>
            <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
              Investor ko simple visual example ke through explain karna hai ki startup valuation kya hoti hai aur investment ke context mein iska basic meaning kya hai.
            </p>
          </div>

          {/* Section Purpose Callout Banner */}
          <div className="max-w-4xl mx-auto mb-6 p-5 rounded-2xl bg-gradient-to-r from-purple-500/10 via-[#DAAF37]/15 to-blue-500/10 border border-[#DAAF37]/40 shadow-[0_0_25px_rgba(218,175,55,0.15)] text-center">
            <div className="flex items-center justify-center gap-2 mb-1.5 text-[#F4D03F] font-mono text-xs uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#DAAF37]" />
              <span>Investor Education Objective</span>
            </div>
            <p className="text-xs sm:text-sm text-white/90 font-sans font-medium leading-relaxed">
              Investor ko simple visual example ke through explain karna hai ki startup valuation kya hoti hai aur investment ke context mein iska basic meaning kya hai.
            </p>
          </div>

          {/* Core Concept & Simple Explanation Box */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
            <GlassCard className="p-5 border-purple-500/40 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block">CORE CONCEPT</span>
                  <h4 className="text-base font-heading font-bold text-white">Valuation Definition</h4>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <p className="text-lg font-heading font-bold text-[#F4D03F] mb-1">
                  Valuation = Kisi company/business ki estimated value.
                </p>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  It serves as the financial baseline to evaluate how much equity or ownership stake an investor receives in exchange for capital.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-5 border-[#DAAF37]/40 bg-gradient-to-br from-[#DAAF37]/10 via-transparent to-transparent">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2 rounded-xl bg-[#DAAF37]/20 text-[#F4D03F]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#F4D03F] uppercase tracking-widest block">SIMPLE EXPLANATION</span>
                  <h4 className="text-base font-heading font-bold text-white">Agreement Basis</h4>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <blockquote className="text-xs sm:text-sm font-sans font-medium text-white/90 italic leading-relaxed border-l-2 border-[#DAAF37] pl-3">
                  “Company ki valuation ka matlab hai: Investor aur company ke beech agreement ke basis par company ki estimated value kitni consider ki ja rahi hai.”
                </blockquote>
              </div>
            </GlassCard>
          </div>

          {/* 60% Visual vs 40% Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-8">
            {/* 60% Left Side — Educational Cinematic Visual Image */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-[#DAAF37]/40 shadow-[0_0_30px_rgba(218,175,55,0.15)] bg-black/60 group">
                <InteractiveImage
                  src={valuationGuideImg}
                  alt="Valuation Shark Tank Visual Guide - NEXORA ONE"
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="p-3 bg-black/80 backdrop-blur-md border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                  <span className="font-mono text-[#F4D03F] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#DAAF37]" />
                    Original Shark-Tank-Style Visual Explanation
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-white/50">Click to expand</span>
                </div>
              </div>
            </div>

            {/* 40% Right Side — Key Principles Cards */}
            <div className="lg:col-span-5 space-y-3">
              {/* Element 1: Valuation Baseline */}
              <GlassCard className="p-4 sm:p-5 border-purple-500/30 hover:border-purple-500/50 transition-all">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300 font-bold">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block">01. BUSINESS WORTH</span>
                    <h4 className="text-sm font-heading font-bold text-white">Agreed Worth Baseline</h4>
                  </div>
                </div>
                <p className="text-xs text-white/80 font-sans leading-relaxed">
                  Sets the benchmark valuation for the entire company before fresh investment capital is injected.
                </p>
              </GlassCard>

              {/* Element 2: Capital Inflow */}
              <GlassCard className="p-4 sm:p-5 border-cyan-500/30 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 font-bold">
                    <Coins className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">02. CAPITAL INJECTION</span>
                    <h4 className="text-sm font-heading font-bold text-white">Investment Amount</h4>
                  </div>
                </div>
                <p className="text-xs text-white/80 font-sans leading-relaxed">
                  The actual funding provided by investors to accelerate technology development, expansion, and hiring.
                </p>
              </GlassCard>

              {/* Element 3: Agreed Equity Ownership */}
              <GlassCard className="p-4 sm:p-5 border-[#DAAF37]/50 bg-gradient-to-r from-[#DAAF37]/10 to-transparent hover:border-[#DAAF37] transition-all">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-1.5 rounded-lg bg-[#DAAF37]/20 text-[#F4D03F] font-bold">
                    <PieChart className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#F4D03F] uppercase tracking-widest block">03. EQUITY SHARE</span>
                    <h4 className="text-sm font-heading font-bold text-white">Agreed Ownership</h4>
                  </div>
                </div>
                <p className="text-xs text-[#F4D03F] font-heading font-semibold mb-0.5">
                  Valuation + Investment = Term Sheet Agreement
                </p>
                <p className="text-[11px] text-white/70 font-sans">
                  Investment amount and equity percentage are determined by the agreed valuation and deal terms.
                </p>
              </GlassCard>
            </div>
          </div>

          {/* Visual Story Flow Diagram */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 mb-6">
            <div className="text-center mb-4">
              <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
                VALUATION PROCESS PIPELINE
              </span>
              <h4 className="text-base font-heading font-bold text-white">
                Visual Story: How Valuation Connects Business to Equity
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center flex flex-col items-center justify-center">
                <Building2 className="w-5 h-5 text-purple-400 mb-1.5" />
                <span className="text-xs font-heading font-bold text-white block mb-0.5">BUSINESS</span>
                <span className="text-[10px] text-white/50">Core Product & Model</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center flex flex-col items-center justify-center">
                <TrendingUp className="w-5 h-5 text-cyan-400 mb-1.5" />
                <span className="text-xs font-heading font-bold text-white block mb-0.5">REVENUE / GROWTH</span>
                <span className="text-[10px] text-white/50">Market Potential</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-center flex flex-col items-center justify-center">
                <Scale className="w-5 h-5 text-[#F4D03F] mb-1.5" />
                <span className="text-xs font-heading font-bold text-[#F4D03F] block mb-0.5">VALUATION</span>
                <span className="text-[10px] text-[#F4D03F]/80 font-mono font-semibold">Agreed Company Value</span>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center flex flex-col items-center justify-center">
                <Coins className="w-5 h-5 text-emerald-400 mb-1.5" />
                <span className="text-xs font-heading font-bold text-emerald-300 block mb-0.5">INVESTMENT</span>
                <span className="text-[10px] text-emerald-400/80 font-mono font-semibold">Capital Injected</span>
              </div>

              <div className="p-3.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/40 text-center flex flex-col items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                <PieChart className="w-5 h-5 text-blue-300 mb-1.5" />
                <span className="text-xs font-heading font-bold text-white block mb-0.5">EQUITY SHARE</span>
                <span className="text-[10px] text-blue-200 font-mono font-bold">Agreed Ownership</span>
              </div>
            </div>
          </div>

          {/* Step-by-Step Illustrative Example Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-white/10 mb-5">
              <div>
                <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-widest block mb-0.5">
                  ILLUSTRATIVE EXAMPLE
                </span>
                <h4 className="text-xl font-heading font-bold text-white">
                  Valuation & Investment Interaction Example
                </h4>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-purple-500/20 border border-purple-500/40 text-xs font-mono text-purple-300 font-semibold">
                Illustrative Model Case
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              {/* Box 1: Company Valuation */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-purple-500/15 to-transparent border border-purple-500/30 text-center">
                <span className="text-xs font-mono uppercase text-purple-300 block mb-1">Company Valuation</span>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-white mb-1 block">₹10 Crore</span>
                <p className="text-xs text-white/70 font-sans">
                  Estimated baseline value agreed upon prior to investment round.
                </p>
              </div>

              {/* Box 2: Investment */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-500/15 to-transparent border border-emerald-500/30 text-center">
                <span className="text-xs font-mono uppercase text-emerald-300 block mb-1">Investment</span>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-white mb-1 block">₹1 Crore</span>
                <p className="text-xs text-white/70 font-sans">
                  Fresh capital invested into company growth and operations.
                </p>
              </div>
            </div>

            {/* Visual Formula Flow */}
            <div className="p-4 rounded-xl bg-black/40 border border-[#DAAF37]/30 text-center space-y-1.5">
              <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm font-heading font-bold">
                <span className="px-2.5 py-1 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/40">
                  ₹10 CRORE VALUATION
                </span>
                <span className="text-[#F4D03F] text-lg">+</span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  ₹1 CRORE INVESTMENT
                </span>
              </div>
              <div className="text-base text-[#F4D03F]">↓</div>
              <div className="text-xs sm:text-sm font-heading font-bold text-[#F4D03F]">
                INVESTOR GETS AN AGREED EQUITY SHARE
              </div>
              <p className="text-[11px] text-white/60 font-sans italic pt-0.5">
                “Investment amount and equity percentage are determined by the agreed valuation and deal terms.”
              </p>
            </div>
          </div>

          {/* Secondary Note: Factors Influencing Valuation Grid */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 mb-6">
            <div className="mb-4">
              <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-wider block mb-0.5">
                KEY INFLUENCING FACTORS
              </span>
              <h4 className="text-lg font-heading font-bold text-white">
                What Factors Influence Startup Valuation?
              </h4>
              <p className="text-xs text-white/70 font-sans mt-0.5">
                Valuation is not fixed by a single formula; it is influenced by multiple strategic business elements:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/40 transition-all">
                <div className="flex items-center gap-2 mb-1 text-[#F4D03F]">
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span className="text-xs font-heading font-bold text-white">1. Business Performance</span>
                </div>
                <p className="text-[11px] text-white/70 font-sans leading-snug">
                  Current revenue, growth rates, unit economics, retention, and gross margins.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/40 transition-all">
                <div className="flex items-center gap-2 mb-1 text-[#F4D03F]">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="text-xs font-heading font-bold text-white">2. Growth Potential</span>
                </div>
                <p className="text-[11px] text-white/70 font-sans leading-snug">
                  Scalability speed, network effects, and viral acquisition efficiency.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/40 transition-all">
                <div className="flex items-center gap-2 mb-1 text-[#F4D03F]">
                  <Target className="w-3.5 h-3.5" />
                  <span className="text-xs font-heading font-bold text-white">3. Market Opportunity</span>
                </div>
                <p className="text-[11px] text-white/70 font-sans leading-snug">
                  Total Addressable Market (TAM) size, industry growth rate, and disruption scope.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/40 transition-all">
                <div className="flex items-center gap-2 mb-1 text-[#F4D03F]">
                  <Users className="w-3.5 h-3.5" />
                  <span className="text-xs font-heading font-bold text-white">4. Team Strength</span>
                </div>
                <p className="text-[11px] text-white/70 font-sans leading-snug">
                  Founding team track record, domain experience, and operational execution capacity.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/40 transition-all">
                <div className="flex items-center gap-2 mb-1 text-[#F4D03F]">
                  <Layers className="w-3.5 h-3.5" />
                  <span className="text-xs font-heading font-bold text-white">5. Stage of Business</span>
                </div>
                <p className="text-[11px] text-white/70 font-sans leading-snug">
                  Maturity stage (Idea, Pre-Revenue, Seed, Series A/B, or Profitability).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/40 transition-all">
                <div className="flex items-center gap-2 mb-1 text-[#F4D03F]">
                  <Scale className="w-3.5 h-3.5" />
                  <span className="text-xs font-heading font-bold text-white">6. Negotiation & Deal Terms</span>
                </div>
                <p className="text-[11px] text-white/70 font-sans leading-snug">
                  Investor appetite, competitive term sheets, and mutual governance agreements.
                </p>
              </div>
            </div>
          </div>

          {/* Mandatory Disclaimer Label */}
          <div className="text-center mb-5">
            <div className="inline-block px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white/70 font-mono tracking-wide">
              ILLUSTRATIVE EXAMPLE ONLY — NOT NEXORA ACTUAL VALUATION OR INVESTMENT TERMS.
            </div>
          </div>

          {/* Key Takeaway Banner */}
          <GlassCard className="p-6 sm:p-8 border-[#DAAF37]/50 text-center" glow="gold">
            <span className="text-xs uppercase font-heading font-bold tracking-[0.2em] text-[#DAAF37] block mb-2">
              KEY TAKEAWAY
            </span>
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-[#F4D03F] mb-3 uppercase tracking-tight">
              VALUATION = COMPANY KI AGREED / ESTIMATED VALUE
            </h3>
            <p className="text-sm text-white/90 font-sans max-w-2xl mx-auto leading-relaxed mb-3">
              Valuation is an agreed financial benchmark between founders and investors that reflects business accomplishments, scalability, market opportunity, and potential future return on capital.
            </p>
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 inline-block max-w-xl mx-auto text-[11px] text-white/60 italic">
              Illustrative educational guide for startup founders and investors.
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* SECTION 6: EQUITY & DILUTION */}
      <section className="py-6 sm:py-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <FadeIn>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-mono uppercase tracking-widest mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#DAAF37]" />
              <span>SECTION 6: EQUITY & DILUTION</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight mb-3">
              EQUITY & DILUTION
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-sans font-medium leading-relaxed">
              Investment ke bad ownership share aur dilution ko simple tarike se samjhein.
            </p>
          </div>

          {/* Section Purpose Callout Banner */}
          <div className="max-w-4xl mx-auto mb-6 p-5 rounded-2xl bg-gradient-to-r from-blue-500/10 via-[#DAAF37]/15 to-purple-500/10 border border-[#DAAF37]/40 shadow-[0_0_25px_rgba(218,175,55,0.15)] text-center">
            <div className="flex items-center justify-center gap-2 mb-1.5 text-[#F4D03F] font-mono text-xs uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#DAAF37]" />
              <span>Investor Education Objective</span>
            </div>
            <p className="text-xs sm:text-sm text-white/90 font-sans font-medium leading-relaxed">
              Investor ko visually samjhana hai ki: <span className="text-[#F4D03F] font-bold">Equity</span> = company mein ownership ka share, aur <span className="text-[#F4D03F] font-bold">Dilution</span> = future investment / new shares ke baad existing shareholders ka ownership percentage reduce hona.
            </p>
          </div>

          {/* Core Concept Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
            <GlassCard className="p-5 border-blue-500/40 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-300">
                  <PieChart className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block">CORE CONCEPT 01</span>
                  <h4 className="text-base font-heading font-bold text-white">EQUITY</h4>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <p className="text-lg font-heading font-bold text-[#F4D03F] mb-1">
                  Equity = Company Ownership %
                </p>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  Equity represents the percentage of ownership in a company. Holding equity gives shareholders ownership rights in the company's growth, profits, and assets.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-5 border-purple-500/40 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block">CORE CONCEPT 02</span>
                  <h4 className="text-base font-heading font-bold text-white">DILUTION</h4>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <p className="text-lg font-heading font-bold text-[#F4D03F] mb-1">
                  Dilution = Existing Ownership % Reduction
                </p>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  Existing ownership percentage ka future financing / new shares issuance ke baad reduce hona. When new equity shares are created for new investors, existing shareholders' percentage slice becomes smaller.
                </p>
              </div>
            </GlassCard>
          </div>

          {/* 60% Visual vs 40% Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-8">
            {/* 60% Left Side — Educational Cinematic Visual Image */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-[#DAAF37]/40 shadow-[0_0_30px_rgba(218,175,55,0.15)] bg-black/60 group">
                <InteractiveImage
                  src={equityDilutionGuideImg}
                  alt="Equity and Dilution Shark Tank Visual Guide - NEXORA ONE"
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="p-3 bg-black/80 backdrop-blur-md border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                  <span className="font-mono text-[#F4D03F] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#DAAF37]" />
                    Original Shark-Tank-Style Ownership Pie Visual
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-white/50">Click to expand</span>
                </div>
              </div>
            </div>

            {/* 40% Right Side — Ownership Share Breakdown (Illustrative 3 Stages) */}
            <div className="lg:col-span-5 space-y-3">
              {/* Stage 1: Before Investment */}
              <GlassCard className="p-4 sm:p-5 border-emerald-500/30 hover:border-emerald-500/50 transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold text-xs">
                      STAGE 1
                    </div>
                    <h4 className="text-sm font-heading font-bold text-white">Before Investment</h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    100%
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-white/80 space-y-0.5">
                  <div className="flex justify-between font-mono font-semibold">
                    <span className="text-white">Founder / Existing Owners:</span>
                    <span className="text-emerald-300">100% Ownership</span>
                  </div>
                  <p className="text-[10px] text-white/60 font-sans">
                    Single ownership pie prior to external investor capital injection.
                  </p>
                </div>
              </GlassCard>

              {/* Stage 2: After Round 1 */}
              <GlassCard className="p-4 sm:p-5 border-blue-500/30 hover:border-blue-500/50 transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-lg bg-blue-500/20 text-blue-300 font-bold text-xs">
                      STAGE 2
                    </div>
                    <h4 className="text-sm font-heading font-bold text-white">After Round 1 Investment</h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/30">
                    Divided
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-white/80 space-y-1">
                  <div className="flex justify-between font-mono">
                    <span className="text-white/90">Founder Ownership:</span>
                    <span className="text-blue-300 font-bold">80%</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span className="text-[#F4D03F]">Investor A Equity:</span>
                    <span className="text-[#F4D03F] font-bold">20%</span>
                  </div>
                  <p className="text-[10px] text-white/50 font-mono italic">
                    (Illustrative Example numbers — Founder retains majority)
                  </p>
                </div>
              </GlassCard>

              {/* Stage 3: After Round 2 (Dilution) */}
              <GlassCard className="p-4 sm:p-5 border-purple-500/40 bg-gradient-to-r from-purple-500/10 to-transparent hover:border-purple-500 transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-lg bg-purple-500/20 text-purple-300 font-bold text-xs">
                      STAGE 3
                    </div>
                    <h4 className="text-sm font-heading font-bold text-white">Future Funding Round (Dilution)</h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/30">
                    Diluted %
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-white/80 space-y-1">
                  <div className="flex justify-between font-mono">
                    <span className="text-white/90">Founder Share:</span>
                    <span className="text-purple-300 font-bold">64%</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span className="text-blue-300">Investor A Share:</span>
                    <span className="text-blue-300 font-bold">16%</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span className="text-cyan-300">New Investor B Share:</span>
                    <span className="text-cyan-300 font-bold">20%</span>
                  </div>
                  <p className="text-[10px] text-[#F4D03F] font-heading font-semibold mt-0.5">
                    Existing Founder % may decrease after a new investment round.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Visual Story Flow Pipeline */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 mb-6">
            <div className="text-center mb-4">
              <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
                EQUITY & DILUTION PIPELINE
              </span>
              <h4 className="text-base font-heading font-bold text-white">
                Visual Story: How Ownership Changes Through Investment Rounds
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center flex flex-col items-center justify-center">
                <Users className="w-5 h-5 text-emerald-400 mb-1.5" />
                <span className="text-xs font-heading font-bold text-white block mb-0.5">BEFORE INVESTMENT</span>
                <span className="text-[10px] text-emerald-300 font-mono">Founder 100%</span>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center flex flex-col items-center justify-center">
                <Coins className="w-5 h-5 text-blue-400 mb-1.5" />
                <span className="text-xs font-heading font-bold text-white block mb-0.5">NEW INVESTMENT</span>
                <span className="text-[10px] text-blue-300 font-mono">Investor Enters</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-center flex flex-col items-center justify-center">
                <PieChart className="w-5 h-5 text-[#F4D03F] mb-1.5" />
                <span className="text-xs font-heading font-bold text-[#F4D03F] block mb-0.5">AFTER INVESTMENT</span>
                <span className="text-[10px] text-[#F4D03F]/80 font-mono">Ownership Divided</span>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-center flex flex-col items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-400 mb-1.5" />
                <span className="text-xs font-heading font-bold text-white block mb-0.5">FUTURE FUNDING</span>
                <span className="text-[10px] text-purple-300 font-mono">New Shares Issued</span>
              </div>

              <div className="p-3.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/40 text-center flex flex-col items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                <Scale className="w-5 h-5 text-purple-300 mb-1.5" />
                <span className="text-xs font-heading font-bold text-white block mb-0.5">DILUTION</span>
                <span className="text-[10px] text-purple-200 font-mono font-bold">Share % Adjusted</span>
              </div>
            </div>
          </div>

          {/* Illustrative Example Callout */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-white/10 mb-5">
              <div>
                <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-widest block mb-0.5">
                  ILLUSTRATIVE EXAMPLE ONLY
                </span>
                <h4 className="text-xl font-heading font-bold text-white">
                  Founding Equity vs Dilution Dynamics
                </h4>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-blue-500/20 border border-blue-500/40 text-xs font-mono text-blue-300 font-semibold">
                Illustrative Model Case
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-xs font-mono text-emerald-400 block mb-1">BEFORE ROUND</span>
                <span className="text-xl font-heading font-bold text-white mb-1 block">Founder = 100%</span>
                <p className="text-[11px] text-white/60 font-sans">
                  Founders own full ownership of the business entity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-xs font-mono text-[#F4D03F] block mb-1">FIRST INVESTMENT</span>
                <span className="text-xl font-heading font-bold text-white mb-1 block">Investor Share</span>
                <p className="text-[11px] text-white/60 font-sans">
                  Investor receives an agreed equity share in exchange for capital.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-xs font-mono text-purple-400 block mb-1">FUTURE ROUND</span>
                <span className="text-xl font-heading font-bold text-white mb-1 block">New Investor Enters</span>
                <p className="text-[11px] text-white/60 font-sans">
                  Existing Founder % may decrease after a new investment round.
                </p>
              </div>
            </div>

            <div className="text-center p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white/70 font-mono tracking-wide">
              ILLUSTRATIVE EXAMPLE ONLY — NOT NEXORA ACTUAL EQUITY OR INVESTMENT TERMS.
            </div>
          </div>

          {/* Secondary Note: Why Dilution Can Be Positive */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 mb-6">
            <div className="mb-3">
              <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-wider block mb-0.5">
                SECONDARY NOTE / INSIGHT
              </span>
              <h4 className="text-lg font-heading font-bold text-white">
                Is Dilution Always Negative for Founders and Early Investors?
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-2 mb-1.5 text-emerald-400 font-heading font-bold text-xs sm:text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Normal Part of Startup Fundraising</span>
                </div>
                <p className="text-xs text-white/75 font-sans leading-relaxed">
                  Dilution is a standard process as startups raise capital across multiple funding rounds to expand technology, hire top talent, and capture market share.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-2 mb-1.5 text-[#F4D03F] font-heading font-bold text-xs sm:text-sm">
                  <TrendingUp className="w-4 h-4 text-[#DAAF37]" />
                  <span>A Smaller Slice of a Much Bigger Pie</span>
                </div>
                <p className="text-xs text-white/75 font-sans leading-relaxed">
                  Even if ownership percentage reduces, if the overall company valuation increases significantly, the absolute monetary value of those diluted shares can grow substantially.
                </p>
              </div>
            </div>
          </div>

          {/* Mandatory Disclaimer Label */}
          <div className="text-center mb-5">
            <div className="inline-block px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white/70 font-mono tracking-wide">
              ILLUSTRATIVE EXAMPLE ONLY — NOT NEXORA ACTUAL EQUITY OR INVESTMENT TERMS.
            </div>
          </div>

          {/* Key Takeaway Banner */}
          <GlassCard className="p-6 sm:p-8 border-[#DAAF37]/50 text-center" glow="gold">
            <span className="text-xs uppercase font-heading font-bold tracking-[0.2em] text-[#DAAF37] block mb-2">
              KEY TAKEAWAY
            </span>
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-[#F4D03F] mb-3 uppercase tracking-tight">
              EQUITY = OWNERSHIP SHARE | DILUTION = NEW INVESTMENT SE SHARE % REDUCE HONA
            </h3>
            <p className="text-sm text-white/90 font-sans max-w-2xl mx-auto leading-relaxed mb-3">
              Equity gives investors an ownership stake in the company's future value. Dilution occurs as fresh capital creates new shares, dividing ownership across a larger pool while driving company growth.
            </p>
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 inline-block max-w-xl mx-auto text-[11px] text-white/60 italic">
              Illustrative educational guide for startup founders and investors.
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* ================================================== */}
      {/* SECTION 7: FUNDING MODELS */}
      {/* ================================================== */}
      <section className="py-6 sm:py-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <SectionHeading
          title="FUNDING MODELS"
          subtitle="Startup ko capital kaise mil sakta hai?"
          eyebrow="SECTION 7 — CAPITAL SOURCES"
        />

        <FadeIn delay={0.1}>
          {/* Main Visual & Visual Tree Summary (60% / 40%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-8">
            {/* 60% Left Side — Cinematic Visual Image */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-[#DAAF37]/30 shadow-[0_0_35px_rgba(218,175,55,0.15)] bg-slate-950/80">
                <InteractiveImage
                  src={fundingModelsGuideImg}
                  alt="Funding Models Explained — Bootstrapping vs Equity vs Debt vs Grants Visual Guide"
                  title="Startup Capital Sources & Funding Models"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 border border-[#DAAF37]/50 text-[10px] font-mono text-[#F4D03F] tracking-wide flex items-center gap-1.5 backdrop-blur-md">
                  <Coins className="w-3.5 h-3.5 text-[#DAAF37]" />
                  <span>SHARK TANK EDUCATIONAL VISUAL</span>
                </div>
              </div>

              {/* Explainer note */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/70 leading-relaxed font-sans">
                <p className="mb-1.5">
                  <strong className="text-[#F4D03F] font-heading">Objective:</strong> Startup ko business operations, product development, aur expansion ke liye different sources se capital praapt hota hai. Har source ka ownership aur financial risk par alag impact hota hai.
                </p>
                <div className="text-[11px] text-[#F4D03F] font-mono font-semibold">
                  ILLUSTRATIVE EXAMPLE ONLY — NOT NEXORA ACTUAL FUNDING STRUCTURE OR OFFER.
                </div>
              </div>
            </div>

            {/* 40% Right Side — Core Concept & Tree Summary */}
            <div className="lg:col-span-5 space-y-3">
              <GlassCard className="p-5 border-[#DAAF37]/30">
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="p-2 rounded-xl bg-[#DAAF37]/20 text-[#F4D03F]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#DAAF37] uppercase tracking-wider block">
                      CAPITAL SOURCES
                    </span>
                    <h3 className="text-base font-heading font-bold text-white">
                      Major Startup Funding Avenues
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-white/80 font-sans leading-relaxed mb-3">
                  Startup capital raise karne ke primary char (4) tareeqe hote hain: Bootstrapping, Equity, Debt, aur Grants.
                </p>

                {/* Visual Tree Structure Box */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 space-y-2">
                  <div className="text-center">
                    <span className="px-2.5 py-0.5 rounded-lg bg-[#DAAF37]/20 border border-[#DAAF37]/40 text-xs font-mono font-bold text-[#F4D03F] inline-block">
                      STARTUP CAPITAL
                    </span>
                  </div>
                  <div className="flex items-center justify-center text-white/30 text-xs font-mono">
                    │
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-mono">
                    <div className="p-1.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                      <strong>BOOTSTRAP</strong>
                      <span className="block text-[8px] text-emerald-400/80 mt-0.5">Founder Funds</span>
                    </div>
                    <div className="p-1.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-300">
                      <strong>EQUITY</strong>
                      <span className="block text-[8px] text-blue-400/80 mt-0.5">Investor Capital</span>
                    </div>
                    <div className="p-1.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300">
                      <strong>DEBT</strong>
                      <span className="block text-[8px] text-amber-400/80 mt-0.5">Borrowed Capital</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-white/30 text-xs font-mono">
                    +
                  </div>
                  <div className="text-center">
                    <span className="px-2.5 py-0.5 rounded-lg bg-purple-500/20 border border-purple-500/40 text-[10px] font-mono font-bold text-purple-300 inline-block">
                      GRANTS / SUPPORT (Non-Dilutive)
                    </span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Detailed 4 Funding Models Cards Grid */}
          <div className="mb-6">
            <div className="text-center mb-5">
              <span className="text-xs font-mono font-bold text-[#DAAF37] uppercase tracking-wider block mb-0.5">
                4 CORE FUNDING MODELS BREAKDOWN
              </span>
              <h4 className="text-lg sm:text-xl font-heading font-bold text-white">
                Money Source, Structure & Ownership Impact
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* 1. Bootstrapping */}
              <GlassCard className="p-5 border-emerald-500/40 hover:border-emerald-500 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Wallet className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block font-bold">
                        MODEL 1
                      </span>
                      <h4 className="text-base font-heading font-bold text-white">BOOTSTRAPPING</h4>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                    Self-Funded
                  </span>
                </div>

                <div className="space-y-2 text-xs text-white/80 font-sans">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-0.5">
                    <span className="text-[#DAAF37] font-mono font-semibold block text-[10px]">MONEY SOURCE:</span>
                    <p className="text-white/90">Founder apne khud ke funds se business build karta hai.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-0.5">
                    <span className="text-[#DAAF37] font-mono font-semibold block text-[10px]">BASIC STRUCTURE:</span>
                    <p className="text-white/90">Self-funded operations; growth momentum internal cash flows par depend karta hai.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 space-y-0.5">
                    <span className="text-emerald-300 font-mono font-bold block text-[10px]">OWNERSHIP IMPACT:</span>
                    <p className="text-emerald-200 font-semibold">100% Retained (No Equity Dilution — Complete control remains with founder).</p>
                  </div>
                </div>
              </GlassCard>

              {/* 2. Equity Funding */}
              <GlassCard className="p-5 border-blue-500/40 hover:border-blue-500 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider block font-bold">
                        MODEL 2
                      </span>
                      <h4 className="text-base font-heading font-bold text-white">EQUITY FUNDING</h4>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold">
                    Investor Capital
                  </span>
                </div>

                <div className="space-y-2 text-xs text-white/80 font-sans">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-0.5">
                    <span className="text-[#DAAF37] font-mono font-semibold block text-[10px]">MONEY SOURCE:</span>
                    <p className="text-white/90">Angel Investors, Venture Capitalists (VCs), institutional investors.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-0.5">
                    <span className="text-[#DAAF37] font-mono font-semibold block text-[10px]">BASIC STRUCTURE:</span>
                    <p className="text-white/90">Investor capital invest karta hai aur agreed ownership/equity receive karta hai.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30 space-y-0.5">
                    <span className="text-blue-300 font-mono font-bold block text-[10px]">OWNERSHIP IMPACT:</span>
                    <p className="text-blue-200 font-semibold">Agreed Equity Given (Shared ownership; dilution occurs upon share issuance).</p>
                  </div>
                </div>
              </GlassCard>

              {/* 3. Debt Funding */}
              <GlassCard className="p-5 border-amber-500/40 hover:border-amber-500 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                      <Landmark className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block font-bold">
                        MODEL 3
                      </span>
                      <h4 className="text-base font-heading font-bold text-white">DEBT FUNDING</h4>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold">
                    Borrowed Capital
                  </span>
                </div>

                <div className="space-y-2 text-xs text-white/80 font-sans">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-0.5">
                    <span className="text-[#DAAF37] font-mono font-semibold block text-[10px]">MONEY SOURCE:</span>
                    <p className="text-white/90">Banks, financial institutions, debt funds, commercial lenders.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-0.5">
                    <span className="text-[#DAAF37] font-mono font-semibold block text-[10px]">BASIC STRUCTURE:</span>
                    <p className="text-white/90">Business capital borrow karta hai aur agreed repayment terms ke according repay karta hai.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 space-y-0.5">
                    <span className="text-amber-300 font-mono font-bold block text-[10px]">OWNERSHIP IMPACT:</span>
                    <p className="text-amber-200 font-semibold">Ownership Retained (Repayment / interest obligations apply; no equity given).</p>
                  </div>
                </div>
              </GlassCard>

              {/* 4. Grants / Support */}
              <GlassCard className="p-5 border-purple-500/40 hover:border-purple-500 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                      <Gift className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block font-bold">
                        MODEL 4
                      </span>
                      <h4 className="text-base font-heading font-bold text-white">GRANTS / SUPPORT</h4>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-xs font-bold">
                    Non-Dilutive Support
                  </span>
                </div>

                <div className="space-y-2 text-xs text-white/80 font-sans">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-0.5">
                    <span className="text-[#DAAF37] font-mono font-semibold block text-[10px]">MONEY SOURCE:</span>
                    <p className="text-white/90">Government schemes, institutional programs, research grants, approved incubators.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-0.5">
                    <span className="text-[#DAAF37] font-mono font-semibold block text-[10px]">BASIC STRUCTURE:</span>
                    <p className="text-white/90">Eligible startup ko government, institution ya other approved programs se funding/support mil sakta hai.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 space-y-0.5">
                    <span className="text-purple-300 font-mono font-bold block text-[10px]">OWNERSHIP IMPACT:</span>
                    <p className="text-purple-200 font-semibold">Generally No Equity Loss (Subject to specific program/grant guidelines).</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Mandatory Disclaimer Label */}
          <div className="text-center mb-5">
            <div className="inline-block px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white/70 font-mono tracking-wide">
              ILLUSTRATIVE EXAMPLE ONLY — NOT NEXORA ACTUAL FUNDING STRUCTURE OR OFFER.
            </div>
          </div>

          {/* Key Takeaway Banner */}
          <GlassCard className="p-6 sm:p-8 border-[#DAAF37]/50 text-center" glow="gold">
            <span className="text-xs uppercase font-heading font-bold tracking-[0.2em] text-[#DAAF37] block mb-2">
              KEY TAKEAWAY
            </span>
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-[#F4D03F] mb-3 uppercase tracking-tight">
              HAR FUNDING MODEL KE KHUD KE ADVANTAGES AUR OWNERSHIP IMPACT HOTE HAIN
            </h3>
            <p className="text-sm text-white/90 font-sans max-w-2xl mx-auto leading-relaxed mb-3">
              Bootstrapping preserves ownership, Equity accelerates scale, Debt maintains equity with debt service, while Grants provide non-dilutive support.
            </p>
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 inline-block max-w-xl mx-auto text-[11px] text-white/60 italic">
              Illustrative educational guide for startup founders and investors.
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* ================================================== */}
      {/* SECTION 8: ROYALTY / DEAL STRUCTURES */}
      {/* ================================================== */}
      <section className="py-6 sm:py-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <FadeIn>
          <SectionHeading
            eyebrow="SECTION 08 — DEAL ARCHITECTURE"
            title="ROYALTY / DEAL STRUCTURES"
            subtitle="Investment deal sirf equity tak limited nahi hota."
            align="center"
          />

          {/* Objective & Core Concept Box */}
          <GlassCard className="p-5 sm:p-6 border-[#DAAF37]/30 bg-gradient-to-br from-[#121824] via-[#0A0D14] to-[#121824] mb-6" glow="gold">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              <div className="md:col-span-8 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-mono font-bold uppercase tracking-wider">
                  <Handshake className="w-3.5 h-3.5" />
                  <span>Core Deal Philosophy</span>
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white tracking-tight">
                  DEAL STRUCTURE = Investor aur Company ke beech agreed financial arrangement.
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                  Startups mein investment aur deal structures sirf ek hi format ke nahi hote. Investor aur founder ke agreement, cash flow preferences, risk appetite aur return targets ke mutabiq deal terms customize ho sakti hain.
                </p>
              </div>

              <div className="md:col-span-4 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-center space-y-1.5">
                <span className="text-[10px] font-mono text-[#DAAF37] uppercase tracking-widest block font-bold">OBJECTIVE</span>
                <p className="text-xs text-white/90 font-sans leading-normal">
                  Investor ko simple visual format mein samjhana ki deals multiple formats (Equity, Royalty, Debt, Hybrid) mein structure ho sakti hain.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Main Cinematic Visual & Flow Container */}
          <div className="mb-6 space-y-6">
            <div className="max-w-4xl mx-auto">
              <InteractiveImage
                src={dealStructuresGuideImg}
                alt="Royalty and Deal Structures Guide - Shark Tank Visual Explanation"
                title="ROYALTY & DEAL STRUCTURES VISUAL GUIDE"
                className="w-full h-auto rounded-2xl border border-[#DAAF37]/40 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
              />
            </div>

            {/* Visual Deal Flow Diagram */}
            <GlassCard className="p-5 sm:p-6 border-white/10">
              <h4 className="text-center text-xs font-mono font-bold uppercase tracking-widest text-[#DAAF37] mb-4">
                UNIVERSAL INVESTMENT DEAL FLOW
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-blue-500/30 flex flex-col items-center justify-center space-y-1 hover:border-blue-500/60 transition-all">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-xs font-mono">
                    01
                  </div>
                  <span className="text-xs font-heading font-bold text-white uppercase tracking-wider">INVESTOR</span>
                  <span className="text-[10px] text-white/60 font-mono">Capital Provider</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-amber-500/30 flex flex-col items-center justify-center space-y-1 hover:border-amber-500/60 transition-all">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-xs font-mono">
                    02
                  </div>
                  <span className="text-xs font-heading font-bold text-white uppercase tracking-wider">CAPITAL</span>
                  <span className="text-[10px] text-white/60 font-mono">Injected Funds</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-emerald-500/30 flex flex-col items-center justify-center space-y-1 hover:border-emerald-500/60 transition-all">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-xs font-mono">
                    03
                  </div>
                  <span className="text-xs font-heading font-bold text-white uppercase tracking-wider">COMPANY</span>
                  <span className="text-[10px] text-white/60 font-mono">Growth Engine</span>
                </div>

                <div className="p-3 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/40 flex flex-col items-center justify-center space-y-1 hover:border-[#DAAF37] transition-all">
                  <div className="w-7 h-7 rounded-lg bg-[#DAAF37]/20 border border-[#DAAF37]/50 flex items-center justify-center text-[#F4D03F] font-bold text-xs font-mono">
                    04
                  </div>
                  <span className="text-xs font-heading font-bold text-[#F4D03F] uppercase tracking-wider">DEAL STRUCTURE</span>
                  <span className="text-[10px] text-[#DAAF37]/80 font-mono font-semibold">Agreed Terms</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-purple-500/30 flex flex-col items-center justify-center space-y-1 hover:border-purple-500/60 transition-all">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 font-bold text-xs font-mono">
                    05
                  </div>
                  <span className="text-xs font-heading font-bold text-white uppercase tracking-wider">RETURN / EQUITY</span>
                  <span className="text-[10px] text-white/60 font-mono">Payout & Ownership</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-cyan-500/30 flex flex-col items-center justify-center space-y-1 hover:border-cyan-500/60 transition-all">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold text-xs font-mono">
                    06
                  </div>
                  <span className="text-xs font-heading font-bold text-white uppercase tracking-wider">CONTRACT TERMS</span>
                  <span className="text-[10px] text-white/60 font-mono">Legal Agreement</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* 4 Key Deal Structures Cards */}
          <div className="mb-6">
            <div className="text-center mb-5">
              <span className="text-xs font-mono text-[#DAAF37] uppercase tracking-widest block font-bold mb-0.5">
                STRUCTURE BREAKDOWN
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                4 COMMON INVESTMENT DEAL STRUCTURES
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* 1. EQUITY DEAL */}
              <GlassCard className="p-5 border-blue-500/40 hover:border-blue-500 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                      <PieChart className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider block font-bold">
                        STRUCTURE 1
                      </span>
                      <h4 className="text-base font-heading font-bold text-white">EQUITY DEAL</h4>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold">
                    Ownership Share
                  </span>
                </div>

                <div className="space-y-2 text-xs text-white/80 font-sans">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-0.5">
                    <span className="text-[#DAAF37] font-mono font-semibold block text-[10px]">HOW IT WORKS:</span>
                    <p className="text-white/90">Investor capital deta hai aur agreed ownership/equity receive karta hai.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-0.5">
                    <span className="text-[#DAAF37] font-mono font-semibold block text-[10px]">FINANCIAL NATURE:</span>
                    <p className="text-white/90">Investor becomes a co-owner; valuation-based share issuance applied per investment agreement.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30 space-y-0.5">
                    <span className="text-blue-300 font-mono font-bold block text-[10px]">KEY BENEFIT:</span>
                    <p className="text-blue-200 font-semibold">Long-term value creation; investor participates in future company growth and liquidity events.</p>
                  </div>
                </div>
              </GlassCard>

              {/* 2. ROYALTY-BASED DEAL */}
              <GlassCard className="p-5 border-emerald-500/40 hover:border-emerald-500 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Percent className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block font-bold">
                        STRUCTURE 2
                      </span>
                      <h4 className="text-base font-heading font-bold text-white">ROYALTY-BASED DEAL</h4>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                    Revenue Share
                  </span>
                </div>

                <div className="space-y-2 text-xs text-white/80 font-sans">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-0.5">
                    <span className="text-[#DAAF37] font-mono font-semibold block text-[10px]">HOW IT WORKS:</span>
                    <p className="text-white/90">Investor ko agreed revenue / sales basis par royalty mil sakti hai, according to the contract.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-0.5">
                    <span className="text-[#DAAF37] font-mono font-semibold block text-[10px]">FINANCIAL NATURE:</span>
                    <p className="text-white/90">Every sale or gross revenue unit pays a set percentage to the investor until agreed threshold/cap is reached.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 space-y-0.5">
                    <span className="text-emerald-300 font-mono font-bold block text-[10px]">KEY BENEFIT:</span>
                    <p className="text-emerald-200 font-semibold">Immediate cash flow for investor without requiring massive equity dilution for the founder.</p>
                  </div>
                </div>
              </GlassCard>

              {/* 3. DEBT / LOAN */}
              <GlassCard className="p-5 border-amber-500/40 hover:border-amber-500 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                      <Landmark className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block font-bold">
                        STRUCTURE 3
                      </span>
                      <h4 className="text-base font-heading font-bold text-white">DEBT / LOAN</h4>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold">
                    Fixed Repayment
                  </span>
                </div>

                <div className="space-y-2 text-xs text-white/80 font-sans">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-0.5">
                    <span className="text-[#DAAF37] font-mono font-semibold block text-[10px]">HOW IT WORKS:</span>
                    <p className="text-white/90">Company capital leti hai aur agreed repayment terms ke according repay karti hai.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-0.5">
                    <span className="text-[#DAAF37] font-mono font-semibold block text-[10px]">FINANCIAL NATURE:</span>
                    <p className="text-white/90">Principal + interest schedule governed strictly by the loan agreement and repayment tenure.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 space-y-0.5">
                    <span className="text-amber-300 font-mono font-bold block text-[10px]">KEY BENEFIT:</span>
                    <p className="text-amber-200 font-semibold">Zero equity dilution; founders retain full control while servicing predictable interest.</p>
                  </div>
                </div>
              </GlassCard>

              {/* 4. HYBRID / CUSTOM DEAL */}
              <GlassCard className="p-5 border-purple-500/40 hover:border-purple-500 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block font-bold">
                        STRUCTURE 4
                      </span>
                      <h4 className="text-base font-heading font-bold text-white">HYBRID / CUSTOM DEAL</h4>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-xs font-bold">
                    Customized Terms
                  </span>
                </div>

                <div className="space-y-2 text-xs text-white/80 font-sans">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-0.5">
                    <span className="text-[#DAAF37] font-mono font-semibold block text-[10px]">HOW IT WORKS:</span>
                    <p className="text-white/90">Equity + royalty, debt + equity, ya other negotiated structures possible ho sakte hain, depending on the agreement.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-0.5">
                    <span className="text-[#DAAF37] font-mono font-semibold block text-[10px]">FINANCIAL NATURE:</span>
                    <p className="text-white/90">Combines upfront stability (royalty/debt) with upside potential (equity options/warrants).</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 space-y-0.5">
                    <span className="text-purple-300 font-mono font-bold block text-[10px]">KEY BENEFIT:</span>
                    <p className="text-purple-200 font-semibold">Tailored win-win arrangement aligned precisely with risk tolerance and valuation expectations.</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Mandatory Disclaimer Label */}
          <div className="text-center mb-5">
            <div className="inline-block px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white/70 font-mono tracking-wide">
              ILLUSTRATIVE EXAMPLE ONLY — NOT NEXORA ACTUAL DEAL STRUCTURE OR INVESTMENT OFFER.
            </div>
          </div>

          {/* Key Takeaway Banner */}
          <GlassCard className="p-6 sm:p-8 border-[#DAAF37]/50 text-center" glow="gold">
            <span className="text-xs uppercase font-heading font-bold tracking-[0.2em] text-[#DAAF37] block mb-2">
              KEY TAKEAWAY
            </span>
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-[#F4D03F] mb-3 uppercase tracking-tight">
              DEAL TERMS AGREEMENT SE DECIDE HOTE HAIN — HAR STRUCTURE KA KHUD KA FINANCIAL STRUCTURE HOTA HAI
            </h3>
            <p className="text-sm text-white/90 font-sans max-w-2xl mx-auto leading-relaxed mb-3">
              Deal structures flexible hote hain, aur investment agreement par depend karta hai ki equity, royalty, repayment, ya hybrid model apply hoga.
            </p>
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 inline-block max-w-xl mx-auto text-[11px] text-white/60 italic">
              Illustrative educational guide for startup founders and investors.
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* 10. SECTION 09 — 5 NUMBERS TO REMEMBER */}
      <section className="py-6 sm:py-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionDivider width="lg" />

        <FadeIn>
          <SectionHeading
            eyebrow="SECTION 09 — QUICK SUMMARY"
            title="5 NUMBERS TO REMEMBER"
            subtitle="The five financial terms every startup investor should understand."
            align="center"
          />

          {/* Quick Intro Context */}
          <div className="max-w-3xl mx-auto text-center mb-6">
            <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
              This quick summary brings together the essential metrics introduced across the Investor Guide. Keep these 5 core financial concepts in mind when evaluating any startup pitch or business opportunity.
            </p>
          </div>

          {/* 5 LARGE VISUAL CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {/* CARD 01: GMV */}
            <GlassCard className="p-5 border-[#DAAF37]/30 hover:border-[#F4D03F] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden" glow="gold">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#DAAF37]/5 rounded-bl-full pointer-events-none group-hover:bg-[#DAAF37]/10 transition-colors" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-mono font-bold text-[#F4D03F] bg-[#DAAF37]/10 px-2.5 py-0.5 rounded-xl border border-[#DAAF37]/30">
                    #01
                  </span>
                  <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-[#DAAF37] px-1.5 py-0.5 rounded bg-[#DAAF37]/10 border border-[#DAAF37]/20">
                    Platform Volume
                  </span>
                </div>
                <h3 className="text-xl font-heading font-extrabold text-white tracking-tight mb-2 group-hover:text-[#F4D03F] transition-colors">
                  GMV
                </h3>
                <p className="text-xs text-white/80 font-sans leading-relaxed mb-3">
                  Total business value moving through a platform.
                </p>
              </div>
              <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-white/60 flex items-center justify-between">
                <span>Metric Type:</span>
                <span className="text-amber-300 font-semibold">Gross Throughput</span>
              </div>
            </GlassCard>

            {/* CARD 02: REVENUE */}
            <GlassCard className="p-5 border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-xl border border-emerald-500/30">
                    #02
                  </span>
                  <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    Actual Income
                  </span>
                </div>
                <h3 className="text-xl font-heading font-extrabold text-white tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                  REVENUE
                </h3>
                <p className="text-xs text-white/80 font-sans leading-relaxed mb-3">
                  Company ki actual earning.
                </p>
              </div>
              <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-white/60 flex items-center justify-between">
                <span>Metric Type:</span>
                <span className="text-emerald-300 font-semibold">Top Line Income</span>
              </div>
            </GlassCard>

            {/* CARD 03: EBITDA */}
            <GlassCard className="p-5 border-blue-500/30 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:bg-blue-500/10 transition-colors" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-mono font-bold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-xl border border-blue-500/30">
                    #03
                  </span>
                  <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-blue-400 px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                    Core Ops
                  </span>
                </div>
                <h3 className="text-xl font-heading font-extrabold text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                  EBITDA
                </h3>
                <p className="text-xs text-white/80 font-sans leading-relaxed mb-3">
                  Operating business performance before certain non-operating items.
                </p>
              </div>
              <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-white/60 flex items-center justify-between">
                <span>Metric Type:</span>
                <span className="text-blue-300 font-semibold">Operating Performance</span>
              </div>
            </GlassCard>

            {/* CARD 04: NET PROFIT */}
            <GlassCard className="p-5 border-purple-500/30 hover:border-purple-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-bl-full pointer-events-none group-hover:bg-purple-500/10 transition-colors" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-mono font-bold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-xl border border-purple-500/30">
                    #04
                  </span>
                  <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-purple-400 px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                    Final Earnings
                  </span>
                </div>
                <h3 className="text-xl font-heading font-extrabold text-white tracking-tight mb-2 group-hover:text-purple-400 transition-colors">
                  NET PROFIT
                </h3>
                <p className="text-xs text-white/80 font-sans leading-relaxed mb-3">
                  Relevant expenses ke baad bachne wala profit.
                </p>
              </div>
              <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-white/60 flex items-center justify-between">
                <span>Metric Type:</span>
                <span className="text-purple-300 font-semibold">Bottom Line Profit</span>
              </div>
            </GlassCard>

            {/* CARD 05: CAC / LTV */}
            <GlassCard className="p-5 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-xl border border-cyan-500/30">
                    #05
                  </span>
                  <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    Customer Economics
                  </span>
                </div>
                <h3 className="text-xl font-heading font-extrabold text-white tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
                  CAC / LTV
                </h3>
                <p className="text-xs text-white/80 font-sans leading-relaxed mb-3">
                  Customer acquisition cost vs customer lifetime value.
                </p>
              </div>
              <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-white/60 flex items-center justify-between">
                <span>Metric Type:</span>
                <span className="text-cyan-300 font-semibold">Unit Ratio & ROI</span>
              </div>
            </GlassCard>
          </div>

          {/* Mandatory Disclaimer Label */}
          <div className="text-center mb-5">
            <div className="inline-block px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white/70 font-mono tracking-wide">
              QUICK SUMMARY ONLY — FOUNDATIONAL FINANCIAL METRICS COVERED IN SECTIONS 1 TO 8.
            </div>
          </div>

          {/* Key Takeaway Banner */}
          <GlassCard className="p-6 sm:p-8 border-[#DAAF37]/50 text-center" glow="gold">
            <span className="text-xs uppercase font-heading font-bold tracking-[0.2em] text-[#DAAF37] block mb-2">
              QUICK TAKEAWAY
            </span>
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-[#F4D03F] mb-3 uppercase tracking-tight">
              THESE 5 METRICS FORM THE FOUNDATION OF ANY STARTUP FINANCIAL EVALUATION
            </h3>
            <p className="text-sm text-white/90 font-sans max-w-2xl mx-auto leading-relaxed mb-3">
              In 5 terms ko samajhne se investor scale, profitability, customer acquisition efficiency, aur business sustainability ko easily analyze kar sakte hain.
            </p>
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 inline-block max-w-xl mx-auto text-[11px] text-white/60 italic">
              Illustrative educational guide for startup founders and investors.
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* 11. SECTION 10 — FINAL KEY TAKEAWAY */}
      <section className="py-8 sm:py-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <SectionDivider width="lg" />

        <FadeIn>
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0B1021] via-[#050914] to-[#03060D] border border-[#DAAF37]/40 shadow-[0_20px_80px_rgba(0,0,0,0.8),0_0_50px_rgba(218,175,55,0.15)] overflow-hidden p-6 sm:p-10 lg:p-12 text-center">
            
            {/* Cinematic Background Elements (Subtle Financial Data / Ambient Glow / Chart lines) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Subtle Gold Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#DAAF37]/15 via-[#F4D03F]/10 to-[#DAAF37]/15 rounded-full blur-[100px] opacity-60" />
              
              {/* Subtle Financial Data / Grid overlay */}
              <div 
                className="absolute inset-0 opacity-[0.06]" 
                style={{
                  backgroundImage: `radial-gradient(rgba(244, 208, 63, 0.4) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                  backgroundSize: '32px 32px, 64px 64px, 64px 64px'
                }}
              />

              {/* Decorative Subtle Financial Wave Vector / Chart Path */}
              <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 400" preserveAspectRatio="none">
                <path 
                  d="M0,320 Q300,180 600,260 T1200,120" 
                  fill="none" 
                  stroke="url(#goldGradient10)" 
                  strokeWidth="2" 
                />
                <path 
                  d="M0,280 Q350,340 700,160 T1200,220" 
                  fill="none" 
                  stroke="url(#goldGradient10)" 
                  strokeWidth="1" 
                  strokeDasharray="6 6"
                />
                <defs>
                  <linearGradient id="goldGradient10" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DAAF37" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#F4D03F" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#DAAF37" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Faint Floating Metric Nodes for visual depth */}
              <div className="absolute top-10 left-12 text-[10px] font-mono text-[#F4D03F]/20 hidden md:block">
                GMV • REV • EBITDA • PAT • CAC • LTV
              </div>
              <div className="absolute bottom-10 right-12 text-[10px] font-mono text-[#F4D03F]/20 hidden md:block">
                NEXORA ONE • INVESTOR GUIDE • EDUCATIONAL SERIES
              </div>
            </div>

            {/* Branding Header Badge */}
            <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-mono font-semibold uppercase tracking-[0.25em] mb-5 shadow-[0_0_15px_rgba(218,175,55,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#F4D03F] animate-pulse" />
              NEXORA ONE • INVESTOR GUIDE
            </div>

            {/* Main Visual Typography Block */}
            <div className="relative z-10 max-w-4xl mx-auto space-y-2 mb-6">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37] uppercase drop-shadow-sm">
                UNDERSTAND THE NUMBERS.
              </h2>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-[#DAAF37] via-[#F4D03F] to-[#FFFFFF] uppercase drop-shadow-sm">
                THEN EVALUATE THE BUSINESS.
              </h2>
            </div>

            {/* Gold Accent Divider Bar */}
            <div className="relative z-10 w-20 h-1 mx-auto bg-gradient-to-r from-transparent via-[#F4D03F] to-transparent rounded-full mb-5 shadow-[0_0_10px_#F4D03F]" />

            {/* Supporting Line */}
            <div className="relative z-10 max-w-2xl mx-auto">
              <p className="text-sm sm:text-lg font-sans text-white/90 font-light leading-relaxed mb-5 tracking-wide">
                Financial numbers only make sense when you understand what each number actually represents.
              </p>

              {/* Purpose/Core Objective Tagline */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-[#DAAF37]/30 backdrop-blur-md inline-block max-w-xl mx-auto">
                <p className="text-xs sm:text-sm text-white/80 font-mono leading-relaxed">
                  First understand the meaning of the numbers — then use those numbers to evaluate the business with complete confidence.
                </p>
              </div>
            </div>

            {/* Educational Disclaimer Footer */}
            <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-white/50">
              <span>NEXORA ONE FINANCIAL LITERACY & INVESTOR EDUCATION</span>
              <span className="italic">Educational Series • For Founders & Investors</span>
            </div>

          </div>
        </FadeIn>
      </section>

      {/* 11.1 Data Visualization Section */}
      <section className="py-4 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <React.Suspense
          fallback={
            <div className="h-[280px] w-full flex items-center justify-center bg-white/[0.02] rounded-2xl border border-white/5">
              <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-[#DAAF37] animate-spin" />
            </div>
          }
        >
          <EcosystemCharts />
        </React.Suspense>
      </section>

      {/* 11.2 Category Filter Chips Bar */}
      <section className="pb-4 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <HorizontalCarousel
          scrollStep={220}
          alignArrows="top-right"
          className="pb-2"
        >
          {INSIGHT_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-heading font-medium tracking-wide whitespace-nowrap transition-all cursor-pointer flex-shrink-0 snap-start ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#F4D03F] to-[#DAAF37] text-[#0A0A0A] font-semibold shadow-[0_2px_15px_rgba(218,175,55,0.35)]'
                  : 'bg-white/[0.04] border border-white/[0.1] text-white/70 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              {category}
            </button>
          ))}
        </HorizontalCarousel>
      </section>

      {/* 11.2 Explainers Cards Grid */}
      <section className="py-4 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {filteredInsights.length === 0 ? (
          <GlassCard className="p-12 text-center max-w-lg mx-auto">
            <BookOpen className="w-8 h-8 text-white/40 mx-auto mb-3" />
            <h3 className="text-base font-heading font-semibold text-white mb-1">
              No articles in this category yet
            </h3>
            <p className="text-xs text-white/60 font-sans mb-4">
              Articles published here explore how technology, local commerce and industry networks connect.
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setSelectedCategory('All')}
            >
              Reset to All
            </Button>
          </GlassCard>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredInsights.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <GlassCard
                  key={item.id}
                  id={item.id}
                  className={`p-7 sm:p-8 flex flex-col justify-between border-white/[0.12] transition-all duration-300 ${
                    isExpanded ? 'border-[#DAAF37]/50 shadow-[0_8px_32px_rgba(218,175,55,0.15)]' : ''
                  }`}
                >
                  <div>
                    {/* Meta Header */}
                    <div className="flex items-center justify-between gap-3 text-xs mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/35 text-[#F4D03F] font-heading font-medium">
                        {item.category}
                      </span>
                      <span className="text-white/40 font-sans text-xs">
                        {item.date}
                      </span>
                    </div>

                    {/* Title & Excerpt */}
                    <h2 className="text-xl sm:text-2xl font-heading font-semibold text-white tracking-tight mb-3">
                      {item.title}
                    </h2>

                    <p className="text-sm text-white/75 font-sans leading-relaxed mb-4">
                      {item.excerpt}
                    </p>

                    {/* Expanded Drawer / Body */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-white/10 space-y-4 text-sm font-sans text-white/85 leading-relaxed">
                        <p>{item.body}</p>

                        {item.keyPoints && (
                          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2">
                            <span className="text-[10px] font-heading font-semibold uppercase tracking-wider text-[#DAAF37] block">
                              Key Takeaways:
                            </span>
                            <ul className="space-y-1.5 text-xs text-white/80">
                              {item.keyPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37] flex-shrink-0 mt-1.5" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="pt-2 flex items-center justify-between text-xs">
                          <span className="text-white/50">Relevant Platform:</span>
                          <Link
                            to={item.relatedProductLink}
                            className="text-[#DAAF37] hover:underline font-heading font-medium inline-flex items-center gap-1"
                          >
                            <span>{item.relatedProduct}</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Toggle Button */}
                  <div className="pt-4 mt-4 border-t border-white/[0.08]">
                    <button
                      type="button"
                      onClick={() => toggleExpand(item.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#DAAF37] hover:text-[#F4D03F] transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Collapse Insight' : 'Read Full Insight'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        )}
      </section>

      {/* 11.3 Future Articles Notice */}
      <section className="py-10 sm:py-12 max-w-[1000px] mx-auto px-4 text-center">
        <GlassCard className="p-8 border-white/10">
          <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] mx-auto mb-3">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-heading font-semibold text-white mb-2">
            Publishing Cadence
          </h3>
          <p className="text-xs sm:text-sm text-white/60 font-sans max-w-xl mx-auto leading-relaxed">
            Articles published here explore how technology, local commerce and industry networks connect. Ongoing research reports are added as cross-vertical platforms expand.
          </p>
        </GlassCard>
      </section>
    </div>
  );
};
