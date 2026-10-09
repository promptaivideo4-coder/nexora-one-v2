import React from 'react';
import {
  Compass,
  Target,
  Sparkles,
  ArrowRight,
  SplitSquareVertical,
  Network,
  Boxes,
  Users,
  Briefcase,
  Layers,
  Bot,
  RefreshCw,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { SectionDivider } from '../components/common/SectionDivider';
import { FadeIn } from '../components/common/MotionWrapper';
import { InteractiveImage } from '../components/common/InteractiveImage';
import {
  VISION_STATEMENT,
  MISSION_STATEMENT,
  LONG_TERM_DIRECTION,
  MISSION_PILLARS,
  FRAGMENTATION_PROBLEM,
  NEXORA_APPROACH,
} from '../data/vision';

// Explicit asset imports for Vite/Vercel production bundling
import visionOneNetworkHeroImg from '../assets/images/vision_one_network_hero_1791360543616.jpg';
import missionDigitalTransformationImg from '../assets/images/mission_digital_transformation_1791360574113.jpg';
import problemVsNexoraWayImg from '../assets/images/problem_vs_nexora_way_1791360595868.jpg';
import missionPillarsConnectedEcosystemImg from '../assets/images/mission_pillars_connected_ecosystem_1791360618228.jpg';
import longTermExpansionVerticalsImg from '../assets/images/long_term_expansion_verticals_1791360639214.jpg';
import finalInvestorStatementBgImg from '../assets/images/final_investor_statement_bg_1791360659331.jpg';

export const VisionPage: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Boxes':
        return <Boxes className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Target':
        return <Target className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'Network':
        return <Network className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Bot':
        return <Bot className="w-5 h-5" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full bg-[#0A0A0A] text-white overflow-hidden">
      {/* SECTION 1 — OUR VISION */}
      <section className="relative py-10 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <FadeIn>
          {/* IMAGE FIRST */}
          <div className="mb-6 rounded-3xl overflow-hidden border border-[#DAAF37]/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            <InteractiveImage
              src={visionOneNetworkHeroImg}
              alt="ONE CONNECTED BEAUTY NETWORK - Nexora Vision Hero"
              className="w-full h-auto object-cover select-none"
              loading="eager"
            />
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/40 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5" />
              OUR VISION
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4 leading-tight">
              ONE CONNECTED{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                BEAUTY NETWORK
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 font-sans leading-relaxed">
              Nexora aims to bring customers, salons, professionals, Growth Partners, brands and suppliers into one connected digital network.
            </p>
          </div>
        </FadeIn>
      </section>

      <SectionDivider className="my-6 sm:my-8" />

      {/* SECTION 2 — OUR MISSION */}
      <section className="relative py-10 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <FadeIn>
          {/* IMAGE FIRST */}
          <div className="mb-6 rounded-3xl overflow-hidden border border-[#DAAF37]/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            <InteractiveImage
              src={missionDigitalTransformationImg}
              alt="Digital Growth Transformation - Nexora Mission"
              className="w-full h-auto object-cover select-none"
            />
          </div>

          <div className="max-w-4xl ml-auto text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/40 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-4">
              <Target className="w-3.5 h-3.5" />
              OUR MISSION
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4 leading-tight">
              MAKE DIGITAL GROWTH SIMPLE FOR{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                LOCAL BUSINESSES
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-white/80 font-sans leading-relaxed ml-auto max-w-2xl">
              Give local businesses digital presence, useful tools and growth opportunities — while connecting the people around them.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 3 — THE PROBLEM → THE NEXORA WAY */}
      <section className="relative py-10 sm:py-12 bg-white/[0.02] border-y border-white/[0.08]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-6">
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
                TODAY, EVERYTHING IS SEPARATE.<br />
                <span className="text-[#DAAF37]">NEXORA CONNECTS IT.</span>
              </h2>
            </div>

            <div className="mb-6 rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              <InteractiveImage
                src={problemVsNexoraWayImg}
                alt="Fragmented vs Connected Business Ecosystem"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <GlassCard className="p-6 border-white/10">
                <h3 className="text-xl font-heading font-bold text-white mb-3 uppercase tracking-wider">Today</h3>
                <p className="text-base text-white/70 font-sans leading-relaxed">
                  Businesses often use different tools for different needs — one for booking, one for marketing, one for staff. This keeps them disconnected.
                </p>
              </GlassCard>
              <GlassCard className="p-6 border-[#DAAF37]/30" glow="gold">
                <h3 className="text-xl font-heading font-bold text-[#F4D03F] mb-3 uppercase tracking-wider">Nexora</h3>
                <p className="text-base text-white/80 font-sans leading-relaxed">
                  Connect those needs through one ecosystem, bringing customers, businesses, and suppliers together in a single architecture.
                </p>
              </GlassCard>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4 — MISSION PILLARS */}
      <section className="relative py-10 sm:py-12 overflow-hidden">
        {/* Background Support Visual */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <InteractiveImage
            src={missionPillarsConnectedEcosystemImg}
            alt="Mission Pillars Backdrop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-3">
              WHAT NEXORA IS BUILDING
            </h2>
            <p className="text-white/60 font-sans uppercase tracking-[0.2em] text-xs sm:text-sm">
              Eight Pillars of One Integrated System
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {MISSION_PILLARS.map((pillar) => (
              <GlassCard key={pillar.id} className="p-5 sm:p-6 flex flex-col justify-between border-white/10 hover:border-[#DAAF37]/40 transition-all group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] group-hover:bg-[#DAAF37]/20 transition-colors">
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <span className="text-xs font-heading font-black text-[#DAAF37]/40 group-hover:text-[#DAAF37] transition-colors">
                      0{pillar.id}
                    </span>
                  </div>
                  <h3 className="text-sm font-heading font-bold text-white mb-2 uppercase tracking-wide group-hover:text-[#F4D03F] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed">
                    {pillar.copy}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — LONG-TERM DIRECTION */}
      <section className="relative py-10 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <FadeIn>
          {/* IMAGE FIRST */}
          <div className="mb-6 rounded-3xl overflow-hidden border border-[#DAAF37]/30 shadow-[0_30px_70px_rgba(0,0,0,0.85)]">
            <InteractiveImage
              src={longTermExpansionVerticalsImg}
              alt="Long-term Growth and Expansion Verticals"
              className="w-full h-auto object-cover select-none"
            />
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              START WITH BEAUTY.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
                BUILD FOR MORE.
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 font-sans leading-relaxed max-w-3xl mx-auto">
              Beauty is the starting point. The same technology foundation can expand into other industries like Real Estate, Jobs, Food and Commerce as Nexora grows.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 6 — FINAL INVESTOR MESSAGE */}
      <section className="relative py-12 sm:py-16 px-4 overflow-hidden">
        {/* Full Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <InteractiveImage
            src={finalInvestorStatementBgImg}
            alt="Nexora Final Global Vision Backdrop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/20 border border-[#DAAF37]/50 text-[#F4D03F] text-xs font-heading font-bold uppercase tracking-[0.3em] mb-6 shadow-[0_0_30px_rgba(218,175,55,0.3)]">
              THE BIGGER PICTURE
            </div>
            <h2 className="text-3xl sm:text-6xl font-serif font-bold text-white mb-4 leading-[1.1]">
              ONE IDEA. ONE NETWORK.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF2B2] to-[#DAAF37]">
                MANY OPPORTUNITIES.
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 font-sans leading-relaxed max-w-3xl mx-auto mb-6">
              Nexora starts with beauty, connects the people and businesses around it, and is designed to grow into a wider digital ecosystem.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button to="/ecosystem" variant="primary" size="lg" className="px-8 h-12 text-sm shadow-[0_10px_40px_rgba(218,175,55,0.4)]">
                Explore Ecosystem Map
              </Button>
              <Button to="/verticals" variant="secondary" size="lg" className="px-8 h-12 text-sm">
                View All Verticals
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
