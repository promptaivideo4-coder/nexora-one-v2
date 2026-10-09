import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Layers,
  Building2,
  UtensilsCrossed,
  Briefcase,
  ShoppingBag,
  Megaphone,
  Cpu,
  CheckCircle2,
  User,
  Store,
  Globe,
  TrendingUp,
  Scissors,
  Boxes,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { SectionDivider } from '../components/common/SectionDivider';
import { StatusBadge } from '../components/common/StatusBadge';
import { FadeIn } from '../components/common/MotionWrapper';
import { InteractiveImage } from '../components/common/InteractiveImage';
import { HorizontalCarousel } from '../components/common/HorizontalCarousel';
import { VERTICALS_DATA } from '../data/verticals';

import beautyEcosystemFinalImg from '../assets/images/nexora_one_beauty_ecosystem_final_v1_1791358242292.jpg';
import beautyEcosystemSummaryImg from '../assets/images/nexora_beauty_ecosystem_summary_v1_1791358560263.jpg';

export const VerticalsPage: React.FC = () => {
  const beautyVertical = VERTICALS_DATA.find((v) => v.id === 'beauty')!;
  const expansionVerticals = VERTICALS_DATA.filter((v) => v.id !== 'beauty');

  const getVerticalIcon = (id: string) => {
    switch (id) {
      case 'beauty':
        return <Sparkles className="w-6 h-6 text-[#F4D03F]" />;
      case 'real-estate':
        return <Building2 className="w-6 h-6 text-[#DAAF37]" />;
      case 'food':
        return <UtensilsCrossed className="w-6 h-6 text-[#DAAF37]" />;
      case 'jobs':
        return <Briefcase className="w-6 h-6 text-[#DAAF37]" />;
      case 'commerce':
        return <ShoppingBag className="w-6 h-6 text-[#DAAF37]" />;
      case 'advertising':
        return <Megaphone className="w-6 h-6 text-[#DAAF37]" />;
      case 'ai':
        return <Cpu className="w-6 h-6 text-[#DAAF37]" />;
      default:
        return <Layers className="w-6 h-6 text-[#DAAF37]" />;
    }
  };

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="pt-12 pb-12 sm:pt-20 sm:pb-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Header Text Area */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-medium tracking-wide uppercase mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] animate-pulse" />
              Beyond Beauty
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F5F5F5] tracking-tight mx-auto leading-[1.15] mb-6">
              Beauty First.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                Now We Can Grow Into More Industries.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/75 font-sans leading-relaxed max-w-3xl mx-auto">
              Nexora started with beauty. The same technology and business setup can be used for other industries like real estate, jobs, food, commerce and more.
            </p>
          </div>

          {/* Standalone Large Multi-Industry Ecosystem Visual (Directly Below Description, No Outline/Border/Card/Frame) */}
          <div className="w-full max-w-[1440px] mx-auto overflow-hidden rounded-xl sm:rounded-2xl">
            <InteractiveImage
              src="/assets/verticals-ecosystem-hero.webp"
              alt="NEXORA ONE Connected Multi-Industry Ecosystem Dais and Holographic Network"
              width={1920}
              height={850}
              className="w-full h-auto object-cover select-none"
              loading="eager"
            />
          </div>
        </FadeIn>
      </section>

      {/* Featured Core Ecosystem Spotlight Card: BEAUTY */}
      <section className="pb-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <GlassCard
            id="beauty"
            className="p-6 sm:p-8 lg:p-10 border-2 border-[#DAAF37]/60 relative overflow-hidden"
            glow="gold"
          >
            {/* Ambient Gold Radial Beam */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#DAAF37]/15 via-[#F4D03F]/5 to-transparent blur-3xl pointer-events-none" />

            {/* Header Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F4D03F]/30 to-[#DAAF37]/10 border border-[#DAAF37] flex items-center justify-center shadow-[0_0_25px_rgba(218,175,55,0.35)] flex-shrink-0">
                  <Sparkles className="w-7 h-7 text-[#F4D03F]" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-0.5 rounded-full bg-[#DAAF37] text-[#0A0A0A] font-heading font-bold text-xs uppercase tracking-wider">
                      Core Ecosystem
                    </span>
                    <span className="text-xs text-[#DAAF37] font-sans font-medium">
                      Live & Scaling
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                    Beauty — Nexora&apos;s Core Ecosystem
                  </h2>
                  <p className="text-sm font-sans text-[#DAAF37] font-medium mt-0.5">
                    Beauty is where Nexora starts — and where all major ecosystem layers connect.
                  </p>
                </div>
              </div>

              <Button
                to="/beauty-ecosystem"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                className="whitespace-nowrap shadow-[0_4px_25px_rgba(218,175,55,0.4)]"
              >
                Explore the Beauty Ecosystem
              </Button>
            </div>

            {/* Main Visual Storytelling */}
            <div className="relative z-10 mb-8">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-3xl font-heading font-bold text-white mb-2">
                  ONE BEAUTY BUSINESS. MANY CONNECTIONS.
                </h3>
                <p className="text-sm sm:text-base text-white/70 font-sans max-w-3xl mx-auto">
                  Nexora connects customers, businesses, professionals, Growth Partners and B2B into one connected beauty ecosystem.
                </p>
              </div>

              {/* PRIMARY CINEMATIC IMAGE */}
              <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/30 shadow-[0_20px_60px_rgba(0,0,0,0.7)] group mb-8">
                <InteractiveImage
                  src={beautyEcosystemFinalImg}
                  alt="NEXORA ONE BEAUTY ECOSYSTEM - Connected Digital Network"
                  className="w-full h-auto object-cover select-none group-hover:scale-[1.01] transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* 6 CORE ECOSYSTEM CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                {[
                  { icon: <User className="w-6 h-6" />, title: 'CUSTOMER APP', desc: 'Customers discover, compare and connect.' },
                  { icon: <Store className="w-6 h-6" />, title: 'SALONOS', desc: 'Businesses manage digital operations and growth.' },
                  { icon: <Globe className="w-6 h-6" />, title: 'WEBSITES & APPS', desc: 'Every business gets a professional digital presence.' },
                  { icon: <TrendingUp className="w-6 h-6" />, title: 'GROWTH PARTNER', desc: 'Local businesses get onboarding and ecosystem support.' },
                  { icon: <Scissors className="w-6 h-6" />, title: 'SALON JOBS', desc: 'Professionals and businesses connect for opportunities.' },
                  { icon: <Boxes className="w-6 h-6" />, title: 'BEAUTY B2B', desc: 'Brands, suppliers and businesses connect for products and trade.' },
                ].map((card, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#DAAF37]/40 transition-all group">
                    <div className="w-11 h-11 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/20 flex items-center justify-center text-[#F4D03F] mb-3 group-hover:bg-[#DAAF37]/20 transition-colors">
                      {card.icon}
                    </div>
                    <h4 className="text-sm font-heading font-bold text-white mb-1.5 uppercase tracking-wide">
                      {card.title}
                    </h4>
                    <p className="text-xs text-white/60 font-sans leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* OPERATIONAL FLOW */}
              <div className="pt-8 border-t border-white/10 mb-8">
                <span className="text-xs uppercase font-heading font-semibold tracking-wider text-[#DAAF37] block text-center mb-6">
                  Operational Flow
                </span>
                <div className="flex flex-wrap items-center justify-center gap-y-6 sm:gap-x-4">
                  {[
                    { icon: <CheckCircle2 className="w-5 h-5" />, label: 'DISCOVER' },
                    { icon: <CheckCircle2 className="w-5 h-5" />, label: 'BOOK' },
                    { icon: <CheckCircle2 className="w-5 h-5" />, label: 'BUILD' },
                    { icon: <CheckCircle2 className="w-5 h-5" />, label: 'HIRE' },
                    { icon: <CheckCircle2 className="w-5 h-5" />, label: 'SELL' },
                    { icon: <CheckCircle2 className="w-5 h-5" />, label: 'GROW' },
                  ].map((step, i, arr) => (
                    <React.Fragment key={i}>
                      <div className="flex flex-col items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] min-w-[100px]">
                        <div className="w-9 h-9 rounded-full bg-[#DAAF37]/15 flex items-center justify-center text-[#DAAF37]">
                          {step.icon}
                        </div>
                        <span className="text-[10px] font-heading font-bold text-white tracking-widest">{step.label}</span>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="hidden sm:block text-[#DAAF37]/40 font-bold text-xl px-2">→</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* ECOSYSTEM CONNECTION SUMMARY VISUAL */}
              <div className="rounded-3xl overflow-hidden border border-[#DAAF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
                <InteractiveImage
                  src={beautyEcosystemSummaryImg}
                  alt="ONE BEAUTY ECOSYSTEM - Final Connection Summary Visual"
                  className="w-full h-auto object-cover select-none group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* Section Divider */}
      <SectionDivider className="my-6 sm:my-8" />

      {/* Expansion Verticals Grid */}
      <section className="py-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Planned Multi-Vertical Layers"
          title="One Platform."
          titleAccent="Many Business Opportunities."
          subtitle="As Nexora grows, new industries can be added without building everything again from zero."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {expansionVerticals.map((vert) => (
            <GlassCard
              key={vert.id}
              id={vert.id}
              className="p-6 sm:p-7 flex flex-col justify-between border-white/[0.12] scroll-mt-28"
            >
              <div>
                {/* Header & Status */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center flex-shrink-0">
                      {getVerticalIcon(vert.id)}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-white tracking-tight leading-snug">
                        {vert.name}
                      </h3>
                      <p className="text-xs text-[#DAAF37] font-medium font-sans">
                        {vert.oneLiner}
                      </p>
                    </div>
                  </div>
                  <StatusBadge status={vert.status} />
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed mb-4">
                  {vert.description}
                </p>

                {/* Core Opportunity Box */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-4 text-xs font-sans text-white/80 leading-relaxed">
                  <span className="text-white/40 block mb-1 uppercase font-heading font-medium text-[10px]">
                    Core Opportunity:
                  </span>
                  {vert.coreOpportunity}
                </div>

                {/* Audience & Products */}
                <div className="space-y-1.5 text-xs text-white/50 font-sans mb-6">
                  <div>
                    <span className="text-white/70">Audience:</span> {vert.audience}
                  </div>
                  <div>
                    <span className="text-white/70">Related Products:</span>{' '}
                    <span className="text-white/90">{vert.relatedProducts.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-white/[0.08]">
                {vert.ctaTarget.startsWith('http') ? (
                  <Button
                    href={vert.ctaTarget}
                    variant="primary"
                    size="sm"
                    className="w-full text-xs"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    {vert.ctaText}
                  </Button>
                ) : vert.ctaTarget.startsWith('/') ? (
                  <Button
                    to={vert.ctaTarget}
                    variant="secondary"
                    size="sm"
                    className="w-full text-xs"
                  >
                    {vert.ctaText}
                  </Button>
                ) : (
                  <div className="p-2 text-center rounded-lg bg-white/[0.02] border border-white/[0.05] text-xs text-white/50 font-sans">
                    Status: {vert.statusText}
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Multi-Vertical Repeatable Architecture Pattern (Architecture §15) */}
      <section className="py-10 sm:py-12 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
        <GlassCard className="p-6 sm:p-8 text-center" glow="subtle">
          <span className="text-xs uppercase font-heading font-semibold tracking-wider text-[#DAAF37] block mb-2">
            Growth Plan
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
            Build Once. Use Again.
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-sans max-w-2xl mx-auto mb-6 leading-relaxed">
            The same core technology can support different industries. Only the industry-specific features need to change.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-heading font-medium">
            <span className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-white">
              Nexora One Core
            </span>
            <span className="text-[#DAAF37]">→</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-white">
              Target Vertical
            </span>
            <span className="text-[#DAAF37]">→</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-white">
              Stakeholder Mapping
            </span>
            <span className="text-[#DAAF37]">→</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-white">
              Platform Tools
            </span>
            <span className="text-[#DAAF37]">→</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-[#DAAF37]/20 border border-[#DAAF37]/40 text-[#F4D03F]">
              Ecosystem Connectivity
            </span>
          </div>

          <div className="mt-8">
            <Button to="/ecosystem" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Explore Full Ecosystem Map
            </Button>
          </div>
        </GlassCard>
      </section>
    </div>
  );
};
