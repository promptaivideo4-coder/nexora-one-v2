import React from 'react';
import {
  ExternalLink,
  Sparkles,
  Globe,
  Layers,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { StatusBadge } from '../components/common/StatusBadge';
import { FadeIn } from '../components/common/MotionWrapper';
import { InteractiveImage } from '../components/common/InteractiveImage';
import { HorizontalCarousel } from '../components/common/HorizontalCarousel';
import { PRODUCTS_DATA, ProductItem } from '../data/products';
import productsHeroBg from '../assets/images/products_hero_luxury_bg_1791374661835.jpg';
import productsEcosystemVisual from '../assets/images/products_ecosystem_hero_reference_1791375256897.jpg';

const HorizontalProductRow: React.FC<{ categoryTitle: string; items: ProductItem[] }> = ({ categoryTitle, items }) => {
  return (
    <div className="mb-8 sm:mb-10">
      <HorizontalCarousel
        title={categoryTitle}
        scrollStep={340}
        alignArrows="top-right"
      >
        {items.map((product) => {
          const isSalonOS = product.id === 'salonos';
          return (
            <div
              key={product.id}
              className="w-[calc(100vw-32px)] min-w-[calc(100vw-32px)] sm:w-auto sm:min-w-[340px] max-w-[380px] flex-shrink-0 snap-start flex px-0.5"
            >
              <GlassCard
                className={`p-4 sm:p-5 flex flex-col justify-between w-full rounded-2xl ${
                  isSalonOS
                    ? 'border-[#DAAF37]/60 bg-gradient-to-b from-white/[0.08] via-black/90 to-black shadow-[0_6px_25px_rgba(218,175,55,0.2)]'
                    : 'border-white/10 bg-black/60'
                }`}
                glow={isSalonOS ? 'gold' : 'subtle'}
              >
                <div>
                  {isSalonOS && (
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#DAAF37]/20 border border-[#DAAF37]/40 text-[#F4D03F] text-[10px] font-heading font-semibold uppercase tracking-wider mb-2.5">
                      <Sparkles className="w-3 h-3" />
                      Flagship
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-sm sm:text-base font-heading font-bold text-white leading-snug line-clamp-1">
                      {product.name}
                    </h3>
                    <StatusBadge status={product.status} />
                  </div>

                  <p className="text-xs text-white/75 font-sans leading-relaxed mb-3 line-clamp-2">
                    {product.oneLiner}
                  </p>

                  <div className="text-[11px] text-white/50 font-sans mb-3.5 truncate">
                    <span className="text-[#DAAF37]/80 font-medium">Audience:</span> {product.audience}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  {product.demoUrl ? (
                    <a
                      href={product.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#F4D03F] to-[#DAAF37] text-[#0A0A0A] font-heading font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-sm hover:brightness-110 transition-all"
                    >
                      <span>Launch Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href={`/verticals#${product.id}`}
                      className="w-full py-2 px-3 rounded-xl bg-white/[0.06] border border-white/15 text-white hover:text-[#F4D03F] hover:border-[#DAAF37]/50 font-heading font-semibold text-xs text-center flex items-center justify-center transition-all"
                    >
                      View Vertical
                    </a>
                  )}
                </div>
              </GlassCard>
            </div>
          );
        })}
      </HorizontalCarousel>
    </div>
  );
};

export const ProductsPage: React.FC = () => {
  // Deduplicate and categorize products
  const coreOperations = PRODUCTS_DATA.filter((p) =>
    ['customer-app', 'salonos', 'white-label', 'ai-tools'].includes(p.id)
  );
  const professionalNetworks = PRODUCTS_DATA.filter((p) =>
    ['growth-partner', 'salon-jobs', 'beauty-b2b'].includes(p.id)
  );
  const expansionVerticals = PRODUCTS_DATA.filter((p) =>
    ['real-estate-platform', 'food-platform', 'advertising-platform'].includes(p.id)
  );

  return (
    <div className="w-full pb-12">
      {/* Products Hero Header with Cinematic Luxury Background */}
      <section className="relative overflow-hidden w-full border-b border-white/[0.08] bg-[#0A0A0A] pt-10 sm:pt-14 pb-10 sm:pb-14">
        {/* Cinematic Background Image & Atmospheric Layers */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <img
            src={productsHeroBg}
            alt="Nexora Products Ecosystem Background"
            className="w-full h-full object-cover object-center opacity-40 scale-105"
            loading="eager"
          />
          {/* Gradients to blend seamlessly into dark background and ensure high contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/85 via-[#0A0A0A]/60 to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.65)_70%,#0A0A0A_100%)]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[250px] bg-[#DAAF37]/15 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-medium tracking-wide uppercase mb-4 backdrop-blur-md shadow-[0_0_20px_rgba(218,175,55,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] animate-pulse" />
              NEXORA ONE PLATFORM ECOSYSTEM
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F5F5F5] tracking-tight max-w-4xl mx-auto leading-[1.15] mb-4">
              PRODUCTS &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF6D6] via-[#F4D03F] to-[#DAAF37]">
                SERVICES
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-white/80 font-sans leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8">
              <strong className="text-white font-semibold">The Nexora Product Family.</strong>{' '}
              Explore our unified connected ecosystem across core operations, professional networks, and local commerce expansion.
            </p>

            {/* Distinct Portal Section */}
            <div className="max-w-2xl mx-auto mb-8 sm:mb-10 text-left">
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white/[0.05] via-[#DAAF37]/10 to-white/[0.02] border border-[#DAAF37]/35 shadow-[0_12px_36px_rgba(0,0,0,0.65)] backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F] flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-heading font-semibold text-[#DAAF37] tracking-wider">
                      Portal
                    </div>
                    <h3 className="text-base sm:text-lg font-heading font-bold text-white flex items-center gap-2">
                      Nexora Platform Portal
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#DAAF37]/20 text-[#F4D03F] border border-[#DAAF37]/30 font-sans font-normal">
                        Live Central Hub
                      </span>
                    </h3>
                  </div>
                </div>

                <a
                  href="https://fanal-templetes-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F4D03F] to-[#DAAF37] text-[#0A0A0A] font-heading font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(218,175,55,0.3)] hover:brightness-110 transition-all flex-shrink-0"
                >
                  <span>Launch Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Centerpiece Cinematic Visual per Reference Image */}
            <div className="max-w-[1360px] mx-auto text-left">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(218,175,55,0.12)] group bg-[#0A0A0A]">
                <InteractiveImage
                  src={productsEcosystemVisual}
                  alt="Nexora One Connected Beauty Ecosystem - Salon Business System, Customer App, Growth Partner, Website Templates, Jobs & Professional Network, Beauty B2B Marketplace, Local Commerce Expansion"
                  className="w-full h-auto object-cover select-none group-hover:scale-[1.01] transition-transform duration-700 block"
                  loading="eager"
                />
              </div>

              {/* Connected Ecosystem Nodes Indicator Ribbon */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mt-4">
                {[
                  { name: 'Salon Business System', desc: 'SalonOS Operations' },
                  { name: 'Customer App', desc: 'Discovery & Bookings' },
                  { name: 'Growth Partner', desc: 'Expansion Dashboard' },
                  { name: 'Website Templates', desc: '30+ Branded Websites' },
                  { name: 'Jobs & Network', desc: 'Professional Hiring' },
                  { name: 'Beauty B2B', desc: 'Wholesale Marketplace' },
                  { name: 'Local Commerce', desc: 'Connected Storefronts' },
                ].map((node, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/40 transition-colors text-center"
                  >
                    <div className="text-[11px] font-heading font-bold text-[#F4D03F] truncate">
                      {node.name}
                    </div>
                    <div className="text-[9px] text-white/50 font-sans truncate">
                      {node.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Products Horizontal Rows Section */}
      <section className="py-6 sm:py-8 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <HorizontalProductRow
          categoryTitle="Core Operations & Customer Platforms"
          items={coreOperations}
        />

        <HorizontalProductRow
          categoryTitle="Ecosystem & Professional Networks"
          items={professionalNetworks}
        />

        <HorizontalProductRow
          categoryTitle="Multi-Vertical Local Commerce & Expansion"
          items={expansionVerticals}
        />
      </section>

      {/* Compact White-Label Architecture Preview */}
      <section className="py-6 sm:py-8 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="p-5 sm:p-8 border-[#DAAF37]/35 overflow-hidden" glow="gold">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase font-heading font-semibold tracking-widest text-[#DAAF37] block mb-1">
                White-Label Architecture
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                Your Brand. Your Digital Presence.
              </h2>
              <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed mb-4">
                Launch branded websites and apps connected directly to SalonOS operations without building software from scratch.
              </p>
              <Button
                href="https://fanal-templetes-app.vercel.app/templates"
                variant="primary"
                size="sm"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
              >
                Explore Templates
              </Button>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-b from-white/[0.04] to-black border border-white/10 text-center flex-shrink-0">
              <Globe className="w-8 h-8 text-[#DAAF37] mx-auto mb-2" />
              <div className="text-xs font-heading font-bold text-white mb-1">Central Engine</div>
              <div className="text-[10px] text-white/50">Unified CMS & SalonOS Sync</div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Footer Note */}
      <section className="pb-8 max-w-[800px] mx-auto px-4 text-center">
        <p className="text-[11px] text-white/40 font-sans">
          Status labels reflect current product states. Demo links open external applications.
        </p>
      </section>
    </div>
  );
};
