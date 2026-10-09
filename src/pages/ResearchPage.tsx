import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Clock,
  Layers,
  ShieldCheck,
  Search,
  Scale,
  ExternalLink,
  Calendar,
  Building2,
  CreditCard,
  Star,
  Megaphone,
  Store,
  Users,
  Home as HomeIcon,
  Globe,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Zap,
  Check,
  Activity,
  Award,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { SectionDivider } from '../components/common/SectionDivider';
import { FadeIn } from '../components/common/MotionWrapper';
import { InteractiveImage } from '../components/common/InteractiveImage';
import {
  RESEARCH_OBJECTIVE,
  KNOWN_FINDING,
  METHODOLOGY_POINTS,
  FEATURE_MATRIX,
  ARCHITECTURE_MATRIX,
  COMPETITORS,
  SOLVED_CATEGORIES,
  NEXORA_LAYERS,
  DIFFERENTIATOR_CHAIN,
  WORDING_GUIDELINES,
  RESEARCH_SNAPSHOT_DATE,
  CORPORATE_ENTITY_NAME,
  CellStatus,
} from '../data/research';

export const ResearchPage: React.FC = () => {
  const renderCellStatus = (status: CellStatus) => {
    switch (status) {
      case 'Observed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-heading font-medium bg-[#DAAF37]/20 border border-[#DAAF37]/50 text-[#F4D03F]">
            <CheckCircle2 className="w-3 h-3" />
            <span>Observed</span>
          </span>
        );
      case 'Not observed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-heading font-medium bg-white/[0.04] border border-white/20 text-white/50">
            <XCircle className="w-3 h-3 text-white/40" />
            <span>Not observed</span>
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-heading font-medium bg-white/[0.05] border border-dashed border-white/30 text-white/60">
            <Clock className="w-3 h-3 text-white/40" />
            <span>Pending</span>
          </span>
        );
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-4 h-4 text-[#F4D03F]" />;
      case 'Calendar': return <Calendar className="w-4 h-4 text-[#F4D03F]" />;
      case 'Building2': return <Building2 className="w-4 h-4 text-[#F4D03F]" />;
      case 'CreditCard': return <CreditCard className="w-4 h-4 text-[#F4D03F]" />;
      case 'Star': return <Star className="w-4 h-4 text-[#F4D03F]" />;
      case 'Megaphone': return <Megaphone className="w-4 h-4 text-[#F4D03F]" />;
      case 'Store': return <Store className="w-4 h-4 text-[#F4D03F]" />;
      case 'Users': return <Users className="w-4 h-4 text-[#F4D03F]" />;
      case 'Home': return <HomeIcon className="w-4 h-4 text-[#F4D03F]" />;
      case 'Globe': return <Globe className="w-4 h-4 text-[#F4D03F]" />;
      default: return <Sparkles className="w-4 h-4 text-[#F4D03F]" />;
    }
  };

  return (
    <div className="w-full bg-[#0A0A0A] text-white">
      {/* 1. Hero Section */}
      <section className="pt-10 pb-8 sm:pt-14 sm:pb-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold tracking-wide uppercase mb-4 backdrop-blur-sm shadow-[0_0_20px_rgba(218,175,55,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] animate-pulse" />
              EVIDENCE & MARKET INTELLIGENCE
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F5F5F5] tracking-tight mx-auto leading-[1.15] mb-4">
              Market Research &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                Differentiation
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/80 font-sans leading-relaxed max-w-3xl mx-auto mb-3">
              Understanding the existing landscape before defining the Nexora architecture.
            </p>

            <div className="text-xs font-heading text-white/50 tracking-wider uppercase">
              Corporate Entity: <span className="text-[#DAAF37] font-semibold">{CORPORATE_ENTITY_NAME}</span>
            </div>
          </div>

          {/* Hero Visual Banner */}
          <div className="w-full max-w-[1440px] mx-auto overflow-hidden rounded-xl sm:rounded-2xl border border-[#DAAF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] mb-8">
            <InteractiveImage
              src="/assets/market-research-hero.webp"
              alt="NEXORA ONE Market Research and Differentiation Intelligence Dashboard"
              width={1920}
              height={850}
              className="w-full h-auto object-cover select-none block"
              loading="eager"
            />
          </div>
        </FadeIn>
      </section>

      {/* 2. Research Objective & Known Findings Cards */}
      <section className="pb-10 sm:pb-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Objective */}
          <GlassCard className="p-6 sm:p-8 border-[#DAAF37]/30" glow="subtle">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F]">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-wider block">
                  Foundational Study
                </span>
                <h2 className="text-2xl font-heading font-semibold text-white">
                  Research Objective
                </h2>
              </div>
            </div>
            <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
              {RESEARCH_OBJECTIVE}
            </p>
          </GlassCard>

          {/* Known Finding */}
          <GlassCard className="p-6 sm:p-8 border-[#DAAF37]/30" glow="subtle">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F]">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-wider block">
                  Governance Reference
                </span>
                <h2 className="text-2xl font-heading font-semibold text-white">
                  Known Finding
                </h2>
              </div>
            </div>
            <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
              {KNOWN_FINDING}
            </p>
          </GlassCard>
        </div>

        {/* Methodology Card */}
        <GlassCard className="p-6 sm:p-8 border-white/15 mb-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
              <FileText className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-white">
              Research Methodology & Snapshot Audit
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            {METHODOLOGY_POINTS.map((point, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-white/80 font-sans flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37] flex-shrink-0 mt-2" />
                <span className="leading-relaxed">{point}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#DAAF37]/5 border border-[#DAAF37]/30 flex items-center gap-3 text-xs text-[#F4D03F] font-sans">
            <AlertCircle className="w-4 h-4 text-[#DAAF37] flex-shrink-0" />
            <span>
              Research Snapshot Date: <strong>{RESEARCH_SNAPSHOT_DATE}</strong>. Comparative data reflects publicly available materials on that date.
            </span>
          </div>
        </GlassCard>
      </section>

      <SectionDivider />

      {/* 3. COMPETITOR LANDSCAPE SECTION */}
      <section className="py-10 sm:py-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-4">
            <Activity className="w-3.5 h-3.5 text-[#F4D03F]" />
            Research Snapshot: {RESEARCH_SNAPSHOT_DATE}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5">
            Beauty Booking & Salon Technology{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              Landscape
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/80 font-sans max-w-3xl mx-auto leading-relaxed">
            India already has multiple platforms serving parts of the beauty discovery, booking, salon-management, wellness, barber and customer-engagement market. The purpose of this research is to understand the existing landscape before defining Nexora One&apos;s differentiation.
          </p>
        </div>

        {/* Competitor Table Container */}
        <GlassCard className="p-4 sm:p-8 overflow-hidden border-[#DAAF37]/30 shadow-[0_16px_48px_rgba(0,0,0,0.8)] mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-sans border-collapse">
              <thead>
                <tr className="border-b border-[#DAAF37]/30 text-white uppercase font-heading text-[11px] tracking-wider bg-[#DAAF37]/10">
                  <th className="py-4 px-3 sm:px-4 text-[#F4D03F] font-bold text-center w-12">#</th>
                  <th className="py-4 px-4 sm:px-6 font-bold text-white">Platform</th>
                  <th className="py-4 px-4 sm:px-6 font-bold text-white">Primary Focus</th>
                  <th className="py-4 px-4 sm:px-6 font-bold text-white">Key Features</th>
                  <th className="py-4 px-3 sm:px-4 font-bold text-white">Platform Type</th>
                  <th className="py-4 px-4 sm:px-6 font-bold text-[#F4D03F] text-right">Website / App</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {COMPETITORS.map((c) => (
                  <tr key={c.id} className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-4 px-3 sm:px-4 text-center font-mono text-xs font-bold text-[#F4D03F]">
                      {c.id < 10 ? `0${c.id}` : c.id}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-heading font-bold text-white text-base">
                      <div className="flex items-center gap-2">
                        <span>{c.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-xs text-white/85 font-sans leading-relaxed max-w-xs">
                      {c.focus}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-xs text-white/75 font-sans leading-relaxed">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {c.focusTags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-[#DAAF37]/15 border border-[#DAAF37]/30 text-[10px] font-heading font-semibold text-[#F4D03F]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="text-[#E0E0E0]">
                        {c.features.join(' • ')}
                      </div>
                    </td>
                    <td className="py-4 px-3 sm:px-4 text-xs text-white/70 font-mono">
                      {c.platformType}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right">
                      <a
                        href={`https://${c.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/15 text-xs text-[#F4D03F] hover:bg-[#DAAF37]/20 hover:border-[#DAAF37]/50 transition-all font-mono"
                      >
                        <span>{c.website}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </section>

      {/* 4. WHAT THE EXISTING MARKET ALREADY SOLVES */}
      <section className="py-10 sm:py-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Market Capability Assessment"
          title="What The Existing Market"
          titleAccent="Already Solves"
          subtitle="The beauty tech landscape features robust, highly specialized point solutions across distinct operational & discovery categories."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {SOLVED_CATEGORIES.map((cat, idx) => (
            <GlassCard key={idx} className="p-5 border-white/15 flex flex-col justify-between hover:border-[#DAAF37]/40 transition-all">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center mb-3">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <h3 className="text-base font-heading font-semibold text-white mb-1.5">
                  {cat.title}
                </h3>
                <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                  {cat.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] uppercase font-heading font-semibold text-[#DAAF37] block mb-1">
                  Observed Examples
                </span>
                <div className="flex flex-wrap gap-1">
                  {cat.examples.map((ex, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-[10px] text-white/80 font-sans"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* 5. WHERE NEXORA IS DIFFERENT */}
      <section className="py-10 sm:py-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-[#F4D03F]" />
            CONNECTED ARCHITECTURE
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5">
            Where Nexora Is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              Different
            </span>
          </h2>

          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#DAAF37]/15 via-black to-black border border-[#DAAF37]/40 text-center max-w-4xl mx-auto shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
            <p className="text-lg sm:text-2xl text-white font-heading font-bold leading-relaxed italic">
              “हम feature invent करने का दावा नहीं कर रहे। हम beauty industry के अलग-अलग participant layers को एक connected architecture और local growth network में जोड़ने की कोशिश कर रहे हैं — और अब हम उस claim को product proof, adoption data और ongoing market evidence से validate करेंगे.”
            </p>
          </div>
        </div>

        {/* Nexora 9 Connected Layers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mb-8 sm:mb-10">
          {NEXORA_LAYERS.map((layer, idx) => (
            <GlassCard key={idx} className="p-6 border-[#DAAF37]/25 hover:border-[#DAAF37]/60 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#DAAF37]">
                    0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#F4D03F] shadow-[0_0_8px_#F4D03F]" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  {layer.name}
                </h3>
                <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                  {layer.role}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 6. NEXORA ECOSYSTEM COMBINATION & NETWORK EFFECT */}
      <section className="py-10 sm:py-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Architectural Synergy"
          title="Nexora Ecosystem"
          titleAccent="Combination"
          subtitle="Connecting previously isolated participant nodes into one self-reinforcing network."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {/* Existing Market Pattern */}
          <GlassCard className="p-6 sm:p-8 border-red-500/25 bg-gradient-to-b from-red-950/10 to-black">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-sm">
                ✕
              </div>
              <div>
                <span className="text-[11px] font-heading font-bold text-red-400 uppercase tracking-widest block">
                  Conventional Point-Solution Model
                </span>
                <h3 className="text-xl font-heading font-bold text-white">
                  Existing Market Landscape
                </h3>
              </div>
            </div>

            <p className="text-sm text-white/80 font-sans leading-relaxed mb-5">
              Different isolated platforms solving separate parts of the beauty journey in silos—requiring merchants and customers to juggle fragmented applications, tools, and databases.
            </p>

            <div className="grid grid-cols-2 gap-2.5 text-xs text-white/60 font-sans">
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10">Isolated Booking App</div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10">Isolated Salon POS</div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10">Isolated Job Board</div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10">Offline Wholesale Purchasing</div>
            </div>
          </GlassCard>

          {/* Nexora Connected Approach */}
          <GlassCard className="p-6 sm:p-8 border-[#DAAF37]/40 bg-gradient-to-b from-[#DAAF37]/10 to-black" glow="gold">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/20 border border-[#DAAF37]/50 flex items-center justify-center text-[#F4D03F] font-bold text-sm">
                ✓
              </div>
              <div>
                <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                  Unified Network Layer
                </span>
                <h3 className="text-xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF2B2] to-[#DAAF37]">
                  Nexora Connected Approach
                </h3>
              </div>
            </div>

            <p className="text-sm text-white/90 font-sans leading-relaxed mb-5">
              One connected architecture linking all beauty industry stakeholders directly:
            </p>

            {/* Stakeholder Chain */}
            <div className="flex flex-wrap items-center justify-center gap-2 p-3.5 sm:p-4 rounded-xl bg-black/60 border border-[#DAAF37]/35 text-xs sm:text-sm font-heading font-semibold text-[#F4D03F]">
              <span>Customer</span>
              <span className="text-[#DAAF37]/60">↔</span>
              <span>Business</span>
              <span className="text-[#DAAF37]/60">↔</span>
              <span>Professional</span>
              <span className="text-[#DAAF37]/60">↔</span>
              <span>Growth Partner</span>
              <span className="text-[#DAAF37]/60">↔</span>
              <span>Supplier / Brand</span>
              <span className="text-[#DAAF37]/60">↔</span>
              <span>Enterprise</span>
            </div>
          </GlassCard>
        </div>

        {/* Strong Differentiator Chain Banner & Flow */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/35 shadow-[0_20px_60px_rgba(0,0,0,0.9)] mb-8 sm:mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/40 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F4D03F]" />
            Core Brand Differentiator
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
            Free Beauty Website + 30+ Templates + Growth Partner-Assisted Onboarding + Connected Beauty Ecosystem
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 text-left">
            {DIFFERENTIATOR_CHAIN.map((step, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-[#DAAF37]/20 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#DAAF37] block mb-1">
                    0{idx + 1}
                  </span>
                  <div className="text-xs font-heading font-bold text-white mb-1">
                    {step.step}
                  </div>
                </div>
                <div className="text-[10px] text-white/60 font-sans leading-tight">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURE MATRIX TABLE */}
      <section className="py-10 sm:py-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Empirical Feature Analysis"
          title="Industry Feature"
          titleAccent="Comparison Matrix"
          subtitle="Assessing public availability across conventional point software versus the Nexora connected architecture."
        />

        {/* Feature Table Container */}
        <GlassCard className="p-2 sm:p-6 overflow-hidden border-white/15 mb-8 sm:mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-sans border-collapse">
              <thead>
                <tr className="border-b border-white/15 text-white uppercase font-heading text-[11px] tracking-wider bg-white/[0.04]">
                  <th className="py-4 px-4 sm:px-6">Feature / Capability</th>
                  <th className="py-4 px-3 sm:px-4">Domain</th>
                  <th className="py-4 px-3 sm:px-4">Conventional Software</th>
                  <th className="py-4 px-3 sm:px-4">Nexora One Architecture</th>
                  <th className="py-4 px-4 sm:px-6">Observation Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08]">
                {FEATURE_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-heading font-medium text-white">
                      {row.featureName}
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-white/60 font-mono text-xs">
                      {row.category}
                    </td>
                    <td className="py-3.5 px-3 sm:px-4">
                      {renderCellStatus(row.industryStandard)}
                    </td>
                    <td className="py-3.5 px-3 sm:px-4">
                      {renderCellStatus(row.nexoraArchitecture)}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-xs text-white/65 font-sans leading-relaxed">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </section>

      {/* 8. ARCHITECTURAL COMPARISON MATRIX */}
      <section className="py-10 sm:py-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Structural Differentiation"
          title="Architectural"
          titleAccent="Comparison"
          subtitle="Nexora's differentiation is founded upon the combination of layers and system-level connectivity rather than an isolated feature."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 sm:mb-10">
          {ARCHITECTURE_MATRIX.map((dim, idx) => (
            <GlassCard key={idx} className="p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider mb-2">
                  Dimension 0{idx + 1}
                </div>
                <h3 className="text-lg font-heading font-semibold text-white mb-4">
                  {dim.dimension}
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm font-sans">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <span className="text-[10px] uppercase font-heading font-semibold text-white/40 block mb-1">
                      Conventional Pattern
                    </span>
                    <p className="text-white/70 leading-relaxed">
                      {dim.conventionalApproach}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30">
                    <span className="text-[10px] uppercase font-heading font-semibold text-[#DAAF37] block mb-1">
                      Nexora One Pattern
                    </span>
                    <p className="text-white/90 font-medium leading-relaxed">
                      {dim.nexoraApproach}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 9. CLAIM CONTROL & GOVERNANCE POLICY */}
      <section className="py-10 sm:py-12 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-xs uppercase font-heading font-semibold tracking-wider text-[#DAAF37] block mb-1">
            Governance & Compliance Policy
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white">
            Objective Claim Control Guidelines
          </h3>
          <p className="text-xs sm:text-sm text-white/60 font-sans mt-1">
            Nexora One strictly forbids unproven claims, vanity figures, and subjective superlative statements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 sm:mb-10">
          {/* Allowed */}
          <GlassCard className="p-6 border-emerald-500/30">
            <div className="flex items-center gap-2 mb-4 text-emerald-400 font-heading font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>Allowed Qualified Statements</span>
            </div>
            <ul className="space-y-3 font-sans text-xs sm:text-sm">
              {WORDING_GUIDELINES.filter((w) => w.status === 'Allowed').map((item, i) => (
                <li key={i} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <div className="font-heading font-medium text-white mb-0.5">
                    &ldquo;{item.text}&rdquo;
                  </div>
                  <div className="text-white/50 text-xs">{item.rationale}</div>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Disallowed */}
          <GlassCard className="p-6 border-red-500/30">
            <div className="flex items-center gap-2 mb-4 text-red-400 font-heading font-semibold text-sm">
              <XCircle className="w-4 h-4" />
              <span>Disallowed Absolute Claims</span>
            </div>
            <ul className="space-y-3 font-sans text-xs sm:text-sm">
              {WORDING_GUIDELINES.filter((w) => w.status === 'Disallowed').map((item, i) => (
                <li key={i} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <div className="font-heading font-medium text-white/70 line-through mb-0.5">
                    &ldquo;{item.text}&rdquo;
                  </div>
                  <div className="text-red-400/80 text-xs">{item.rationale}</div>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        {/* Brand Positioning Statement Card */}
        <GlassCard className="p-8 sm:p-12 border-[#DAAF37]/50 text-center" glow="gold">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/40 text-[#F4D03F] text-xs font-heading font-medium tracking-wide uppercase mb-6">
            Brand Positioning Statement
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            NEXORA ONE
          </h2>

          <p className="text-lg sm:text-2xl font-heading font-semibold text-[#F4D03F] mb-6">
            The Global Beauty Growth Network
          </p>

          <p className="text-base sm:text-lg text-white/85 font-sans leading-relaxed max-w-xl mx-auto mb-8 italic">
            &ldquo;Beauty Meets Growth. Everything Connects.&rdquo;
          </p>

          <div className="pt-6 border-t border-white/10 text-xs text-white/50 font-mono">
            Official Corporate Registration: <span className="text-white font-semibold">{CORPORATE_ENTITY_NAME}</span>
          </div>
        </GlassCard>
      </section>
    </div>
  );
};
