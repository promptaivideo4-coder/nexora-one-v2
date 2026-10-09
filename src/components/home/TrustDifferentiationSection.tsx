import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';

interface MetricTile {
  id: string;
  metric: string;
  label: string;
  isNumber?: boolean;
  highlight?: boolean;
}

const metrics: MetricTile[] = [
  {
    id: 'verticals',
    metric: '7',
    label: 'Planned verticals',
    isNumber: true,
  },
  {
    id: 'product-groups',
    metric: '10',
    label: 'Product groups',
    isNumber: true,
  },
  {
    id: 'connected',
    metric: 'Connected',
    label: 'ecosystem',
    isNumber: false,
  },
  {
    id: 'ai-assisted',
    metric: 'AI-assisted',
    label: 'tools (planned)',
    isNumber: false,
  },
  {
    id: 'beauty-first',
    metric: 'Beauty-first',
    label: 'multi-vertical',
    isNumber: false,
    highlight: true,
  },
];

export const TrustDifferentiationSection: React.FC = () => {
  const scrollReveal = useFadeInOnScroll<HTMLDivElement>({
    delay: 100,
    direction: 'up',
    distance: 30,
    duration: 750,
  });

  return (
    <section className="relative py-6 sm:py-8 overflow-hidden bg-[#0A0A0A] border-t border-white/[0.08]">
      {/* Background Cinematic Warm Golden Ambient Glows and Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central Ambient Gold Bloom */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-radial from-[#DAAF37]/15 via-[#DAAF37]/5 to-transparent blur-[140px]" />
        {/* Soft Corner Glows */}
        <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-radial from-[#DAAF37]/8 to-transparent blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-radial from-[#DAAF37]/10 to-transparent blur-[120px]" />

        {/* Subtle Floating Gold Particles */}
        <div className="absolute top-[25%] left-[15%] w-1.5 h-1.5 rounded-full bg-[#F4D03F]/40 blur-[0.5px] animate-pulse" />
        <div className="absolute top-[60%] right-[18%] w-2 h-2 rounded-full bg-[#DAAF37]/35 blur-[1px]" />
        <div className="absolute bottom-[25%] left-[28%] w-1.5 h-1.5 rounded-full bg-[#F4D03F]/50 blur-[0.5px]" />
      </div>

      <div
        ref={scrollReveal.ref}
        style={scrollReveal.style}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Luxury Glassmorphism Container with Gold Hairline Border */}
        <div className="relative rounded-3xl md:rounded-[32px] overflow-hidden border border-[#DAAF37]/35 bg-gradient-to-b from-[#151515]/95 via-[#0E0E0E]/95 to-[#080808]/98 backdrop-blur-2xl p-5 sm:p-7 lg:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
          
          {/* Inner Shimmer Border */}
          <div className="absolute inset-0 rounded-3xl md:rounded-[32px] ring-1 ring-inset ring-white/10 pointer-events-none" />

          {/* Section Heading & Subheading */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-medium tracking-wider uppercase mb-2 shadow-[0_0_15px_rgba(218,175,55,0.1)]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DAAF37]" />
              Architectural Integrity
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[#F5F5F5] leading-tight">
              A New Architecture for the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
                Beauty Industry
              </span>
            </h2>

            <p className="mt-2 text-sm sm:text-base lg:text-lg text-white/75 font-sans leading-relaxed max-w-2xl mx-auto">
              Connecting customers, businesses, professionals, partners and brands in one ecosystem.
            </p>

            {/* Subtle Gold Hairline Divider */}
            <div className="mt-4 mx-auto w-20 h-[1px] bg-gradient-to-r from-transparent via-[#DAAF37]/60 to-transparent" />
          </div>

          {/* 5 Premium Glass Tiles in One Balanced Row on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-4.5 mb-6">
            {metrics.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl bg-gradient-to-b from-[#181818]/90 via-[#111111]/95 to-[#0A0A0A]/95 border border-[#DAAF37]/30 hover:border-[#DAAF37]/85 p-6 sm:p-7 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(218,175,55,0.3)] transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[160px] sm:min-h-[175px]"
              >
                {/* Top Subtle Gold Ambient Indicator */}
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-transparent via-[#DAAF37]/40 group-hover:via-[#F4D03F] to-transparent transition-all duration-300 mb-4" />

                {/* Metric / Heading Text */}
                <div className="my-auto flex flex-col items-center justify-center">
                  {item.isNumber ? (
                    <div className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37] drop-shadow-[0_2px_12px_rgba(218,175,55,0.3)]">
                      {item.metric}
                    </div>
                  ) : item.highlight ? (
                    <div className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D0] via-[#F4D03F] to-[#DAAF37]">
                      {item.metric}
                    </div>
                  ) : (
                    <div className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-white group-hover:text-[#F4D03F] transition-colors">
                      {item.metric}
                    </div>
                  )}

                  {/* Subtitle / Label */}
                  <div className="text-xs sm:text-[13px] font-sans font-medium text-white/75 group-hover:text-white/90 tracking-wide mt-2">
                    {item.label}
                  </div>
                </div>

                {/* Bottom Subtle Corner Accent */}
                <div className="w-full flex justify-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37] shadow-[0_0_8px_#DAAF37]" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section Action Button */}
          <div className="flex justify-center">
            <Button
              to="/market-research"
              variant="secondary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View Research
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
