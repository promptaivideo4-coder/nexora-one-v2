import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';

export const FooterCtaStrip: React.FC = () => {
  return (
    <aside
      aria-label="Ecosystem Execution Plan Call to Action"
      className="relative w-full border-t border-[#DAAF37]/25 bg-gradient-to-r from-[#121212] via-[#1A1813] to-[#121212] overflow-hidden"
    >
      {/* Ambient Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[160px] bg-gradient-to-r from-transparent via-[#DAAF37]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Subtle Golden Hairline Top Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#DAAF37]/60 to-transparent shadow-[0_0_12px_rgba(218,175,55,0.35)]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] flex-shrink-0 shadow-[0_0_15px_rgba(218,175,55,0.2)]">
              <Sparkles className="w-5 h-5" />
            </div>

            <div>
              <h3 className="text-base sm:text-lg lg:text-xl font-serif font-bold text-white tracking-tight leading-snug">
                Explore the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
                  ₹45 Lakh Nexora One Web Ecosystem Plan.
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans mt-0.5">
                9 connected digital verticals. One scalable platform. 9-month execution roadmap.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <Button
              to="/investor-guide#execution-plan"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto whitespace-nowrap shadow-[0_4px_20px_rgba(218,175,55,0.4)] hover:shadow-[0_6px_28px_rgba(218,175,55,0.6)]"
            >
              View Investor Guide →
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};
