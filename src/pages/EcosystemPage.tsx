import React, { useState } from 'react';
import {
  ArrowRight,
  Layers,
  Sparkles,
  CheckCircle2,
  Share2,
  Users,
  Store,
  TrendingUp,
  Briefcase,
  HelpCircle,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { SectionDivider } from '../components/common/SectionDivider';
import { FadeIn } from '../components/common/MotionWrapper';
import { InteractiveImage } from '../components/common/InteractiveImage';
import { ECOSYSTEM_NODES, ECOSYSTEM_LAYERS } from '../data/ecosystem';

export const EcosystemPage: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('customer');

  const activeNode =
    ECOSYSTEM_NODES.find((n) => n.id === activeNodeId) || ECOSYSTEM_NODES[0];

  const ring1Participants = ECOSYSTEM_NODES.filter((n) => n.ring === 1);
  const ring2Capabilities = ECOSYSTEM_NODES.filter((n) => n.ring === 2);
  const ring3Verticals = ECOSYSTEM_NODES.filter((n) => n.ring === 3);

  const outcomes = [
    'Customers find and return to businesses they trust.',
    'Businesses reach and keep more customers.',
    'Professionals find structured opportunities.',
    'Growth Partners help the network expand.',
    'Brands and distributors reach beauty businesses directly.',
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-10 pb-4 sm:pt-16 sm:pb-6 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-medium tracking-wide uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] animate-pulse" />
            How it connects
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F5F5F5] tracking-tight max-w-4xl mx-auto leading-[1.15] mb-4">
            One ecosystem.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
              Every participant connected.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/75 font-sans leading-relaxed max-w-3xl mx-auto">
            Nexora is built in layers. Each group of participants has a layer, and the layers work together rather than as isolated apps.
          </p>
        </FadeIn>
      </section>

      {/* Cinematic Nexora One Ecosystem Network Visual Display */}
      <section className="pt-2 pb-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl bg-transparent">
            <InteractiveImage
              src="/assets/nexora-ecosystem-network.webp"
              alt="Nexora One Connected Digital Ecosystem Network Architecture"
              className="w-full h-auto object-contain select-none"
              loading="eager"
            />
          </div>
        </FadeIn>
      </section>

      {/* Interactive Ring Structure / Map */}
      <section className="py-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="p-6 sm:p-10 lg:p-12 border-[#DAAF37]/30" glow="gold">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-10 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Share2 className="w-4 h-4 text-[#DAAF37]" />
                <span className="text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-wider">
                  Interactive Ecosystem Map
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white">
                Multi-Ring Ecosystem Architecture
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-sans mt-1">
                Select or hover any node below to inspect connected participants, capabilities, and verticals.
              </p>
            </div>

            {/* Active Node Detail Card */}
            <div className="w-full lg:w-96 p-4 rounded-xl bg-white/[0.04] border border-[#DAAF37]/40 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-heading font-bold text-[#F4D03F] uppercase tracking-wide">
                  Active Node
                </span>
                <span className="text-[10px] text-white/40 uppercase font-sans">
                  Ring {activeNode.ring} • {activeNode.category}
                </span>
              </div>
              <div className="text-lg font-heading font-semibold text-white mb-1">
                {activeNode.label}
              </div>
              <p className="text-xs text-white/75 font-sans mb-3">
                {activeNode.description}
              </p>
              <div className="pt-2 border-t border-white/10">
                <span className="text-[10px] uppercase font-heading text-[#DAAF37] block mb-1">
                  Connected To:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeNode.connectedTo.map((id) => (
                    <span
                      key={id}
                      className="px-2 py-0.5 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/30 text-[10px] text-white/90 capitalize"
                    >
                      {id.replace('vert-', '').replace('-', ' ')}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Three-Ring Layout Visual */}
          <div className="space-y-8">
            {/* Ring 1: Participants */}
            <div>
              <div className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#DAAF37]" />
                Ring 1 — Primary Participants
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {ring1Participants.map((node) => {
                  const isSelected = activeNodeId === node.id;
                  const isConnected = activeNode.connectedTo.includes(node.id);
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveNodeId(node.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#DAAF37]/20 border-[#DAAF37] shadow-[0_0_15px_rgba(218,175,55,0.4)] text-white'
                          : isConnected
                          ? 'bg-white/[0.08] border-[#DAAF37]/50 text-white'
                          : 'bg-white/[0.03] border-white/10 text-white/70 hover:bg-white/[0.06] hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-heading font-semibold">
                        {node.label}
                      </div>
                      <div className="text-[10px] text-white/50 mt-1 truncate">
                        {node.description}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Ring 2: Capabilities */}
            <div>
              <div className="text-xs font-heading font-bold text-white/60 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/40" />
                Ring 2 — Platform Capabilities
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
                {ring2Capabilities.map((node) => {
                  const isSelected = activeNodeId === node.id;
                  const isConnected = activeNode.connectedTo.includes(node.id);
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveNodeId(node.id)}
                      className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#DAAF37]/20 border-[#DAAF37] shadow-[0_0_12px_rgba(218,175,55,0.3)] text-white'
                          : isConnected
                          ? 'bg-white/[0.08] border-[#DAAF37]/50 text-white'
                          : 'bg-white/[0.02] border-white/10 text-white/60 hover:bg-white/[0.05] hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-heading font-medium whitespace-nowrap">
                        {node.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Ring 3: Verticals */}
            <div>
              <div className="text-xs font-heading font-bold text-white/60 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/40" />
                Ring 3 — Industry Verticals
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {ring3Verticals.map((node) => {
                  const isSelected = activeNodeId === node.id;
                  const isConnected = activeNode.connectedTo.includes(node.id);
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveNodeId(node.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#DAAF37]/20 border-[#DAAF37] shadow-[0_0_12px_rgba(218,175,55,0.3)] text-white'
                          : isConnected
                          ? 'bg-white/[0.08] border-[#DAAF37]/50 text-white'
                          : 'bg-white/[0.02] border-white/10 text-white/60 hover:bg-white/[0.05] hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-heading font-semibold">
                        {node.label}
                      </div>
                      <div className="text-[10px] text-white/50 mt-0.5 truncate">
                        {node.description}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* 5.2 Layer Descriptions */}
      <section className="py-10 sm:py-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Architectural Layers"
          title="Six Interconnected"
          titleAccent="System Layers"
          subtitle="How data, workflows, and commercial opportunities flow seamlessly through the Nexora One architecture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 sm:mb-8">
          {ECOSYSTEM_LAYERS.map((layer, idx) => (
            <GlassCard key={layer.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-heading font-bold text-[#DAAF37]">
                  Layer 0{idx + 1}
                </span>
                <Layers className="w-4 h-4 text-white/40" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-white mb-2">
                {layer.title}
              </h3>
              <p className="text-sm text-white/70 font-sans leading-relaxed">
                {layer.desc}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 5.3 Core vs Expansion */}
      <section className="py-10 sm:py-12 border-t border-white/[0.08] bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Maturity Horizon"
            title="Core Ecosystem vs."
            titleAccent="Expansion Verticals"
            subtitle="Nexora maintains transparent separation between demonstrably active platforms and strategic expansion verticals."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Core */}
            <GlassCard className="p-6 sm:p-8 border-[#DAAF37]/50" glow="subtle">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#DAAF37] text-[#0A0A0A] font-heading font-bold text-xs uppercase">
                  Core Ecosystem
                </span>
                <Sparkles className="w-5 h-5 text-[#DAAF37]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white mb-3">
                Beauty Industry
              </h3>
              <p className="text-sm sm:text-base text-white/75 font-sans leading-relaxed mb-6">
                The original and deepest Nexora ecosystem. Connects customers, salon owners, beauty professionals, Growth Partners, brands, and distributors with demonstrable applications and active platform architecture.
              </p>
              <Button to="/beauty-ecosystem" variant="primary" size="sm">
                Explore the Beauty Ecosystem
              </Button>
            </GlassCard>

            {/* Expansion */}
            <GlassCard className="p-6 sm:p-8 border-white/20">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 font-heading font-medium text-xs uppercase border border-white/20">
                  Expansion Verticals
                </span>
                <Layers className="w-5 h-5 text-white/40" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white mb-3">
                Planned Industry Expansion
              </h3>
              <p className="text-sm sm:text-base text-white/75 font-sans leading-relaxed mb-6">
                Real Estate, Food Delivery, Jobs, Commerce, Advertising, and AI & Technology. These are separate verticals that will expand upon the core connected technology without being merged under Beauty.
              </p>
              <Button to="/verticals" variant="secondary" size="sm">
                View All Verticals
              </Button>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 5.4 Ecosystem Outcomes */}
      <section className="py-10 sm:py-12 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="p-6 sm:p-10 text-center" glow="gold">
          <div className="text-xs uppercase font-heading font-semibold tracking-widest text-[#DAAF37] mb-2">
            Expected Outcomes
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6">
            How Every Participant Benefits
          </h2>

          <div className="space-y-3.5 max-w-xl mx-auto text-left mb-6 sm:mb-8">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#DAAF37] flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-white/85 font-sans">{outcome}</span>
              </div>
            ))}
          </div>

          <Button to="/beauty-ecosystem" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Explore the Beauty Ecosystem
          </Button>
        </GlassCard>
      </section>
    </div>
  );
};
