import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HomeCTASection: React.FC = () => {
  return (
    <section className="relative py-6 sm:py-8 overflow-hidden bg-[#0A0A0A] border-t border-white/[0.08]">
      {/* Outer Max-Width Container */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Luxury Glassmorphic 16:9 Banner Card matching original reference */}
        <div className="relative rounded-3xl md:rounded-[36px] overflow-hidden border border-[#DAAF37]/50 bg-gradient-to-r from-[#0C0C0C]/98 via-[#080808]/95 to-[#050505]/90 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(218,175,55,0.18)] min-h-[340px] sm:min-h-[380px] flex items-center">
          
          {/* Original Photorealistic Gold-Lit Planet Earth Globe Asset */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* The Original Global Connections Globe on the Right */}
            <img
              src="/assets/cta-global-network.webp"
              alt="Nexora Global Connections Globe"
              className="absolute right-0 top-0 w-full lg:w-[72%] h-full object-cover object-right opacity-90 lg:opacity-100 select-none"
              loading="lazy"
            />

            {/* Left to Center smooth soft dark mask ensuring 100% typography contrast on left while keeping globe intact on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 sm:via-[#0A0A0A]/75 lg:via-[#0A0A0A]/35 to-transparent" />

            {/* Ambient Warm Golden Rim Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-radial from-[#DAAF37]/15 to-transparent blur-[120px]" />
            <div className="absolute top-1/3 right-[28%] -translate-y-1/2 w-[350px] h-[350px] bg-radial from-[#F4D03F]/20 to-transparent blur-[90px]" />

            {/* Floating subtle gold bokeh particles */}
            <div className="absolute top-[22%] left-[28%] w-2 h-2 rounded-full bg-[#F4D03F]/80 blur-[0.5px] animate-pulse" />
            <div className="absolute top-[48%] left-[42%] w-1.5 h-1.5 rounded-full bg-[#DAAF37]/60 blur-[0.5px]" />
            <div className="absolute bottom-[28%] left-[22%] w-2.5 h-2.5 rounded-full bg-[#DAAF37]/50 blur-[1px]" />
            <div className="absolute top-[32%] right-[32%] w-2.5 h-2.5 rounded-full bg-[#FFF2B2]/90 blur-[0.5px] animate-pulse" />
            <div className="absolute bottom-[22%] right-[18%] w-2 h-2 rounded-full bg-[#DAAF37]/70 blur-[0.5px]" />

            {/* Hairline Glass Reflection Ring */}
            <div className="absolute inset-0 rounded-3xl md:rounded-[36px] ring-1 ring-inset ring-white/10 pointer-events-none" />
          </div>

          {/* Foreground Content Area */}
          <div className="relative z-10 w-full max-w-3xl px-6 sm:px-12 lg:px-16 py-8 sm:py-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              {/* Heading */}
              <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-bold tracking-tight leading-[1.12] mb-3 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
                <span className="text-white block">Be Part of the</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D0] via-[#F4D03F] to-[#DAAF37] block mt-1">
                  Nexora Ecosystem
                </span>
              </h2>

              {/* Subheading */}
              <p className="text-base sm:text-lg lg:text-xl text-white/85 font-sans leading-relaxed max-w-xl mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                For businesses, partners, brands and industry collaborators.
              </p>

              {/* Action Buttons matching original reference styling */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                {/* Primary CTA: Explore the Ecosystem */}
                <Link
                  to="/ecosystem"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F4D03F] via-[#E8BE35] to-[#DAAF37] hover:from-[#FFF2B2] hover:to-[#F4D03F] text-[#0A0A0A] font-heading font-bold text-sm sm:text-base tracking-wide shadow-[0_4px_30px_rgba(218,175,55,0.45)] hover:shadow-[0_4px_40px_rgba(218,175,55,0.7)] hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <span>Explore the Ecosystem</span>
                  <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5]" />
                </Link>

                {/* Secondary CTA: Contact Nexora */}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-black/70 hover:bg-black/90 text-white hover:text-[#F4D03F] font-heading font-semibold text-sm sm:text-base tracking-wide border border-[#DAAF37]/50 hover:border-[#DAAF37] shadow-[0_4px_25px_rgba(0,0,0,0.7)] hover:shadow-[0_0_25px_rgba(218,175,55,0.35)] hover:scale-105 active:scale-95 backdrop-blur-xl transition-all duration-200"
                >
                  <span>Contact Nexora</span>
                  <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
