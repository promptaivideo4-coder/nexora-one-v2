import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export interface VerticalItem {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  to: string;
}

export const multiVerticalsData: VerticalItem[] = [
  {
    id: 'beauty',
    title: 'Beauty',
    subtitle: 'Salons & Wellness',
    imageSrc: '/assets/vert-beauty.webp',
    to: '/verticals#beauty',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    subtitle: 'Buy • Sell • Rent',
    imageSrc: '/assets/vert-realestate.webp',
    to: '/verticals#real-estate',
  },
  {
    id: 'food',
    title: 'Food',
    subtitle: 'Discover & Order',
    imageSrc: '/assets/vert-food.webp',
    to: '/verticals#food',
  },
  {
    id: 'jobs',
    title: 'Jobs',
    subtitle: 'Find & Hire',
    imageSrc: '/assets/vert-jobs.webp',
    to: '/verticals#jobs',
  },
  {
    id: 'commerce',
    title: 'Commerce',
    subtitle: 'Products & Businesses',
    imageSrc: '/assets/vert-commerce.webp',
    to: '/verticals#commerce',
  },
  {
    id: 'advertising',
    title: 'Advertising',
    subtitle: 'Reach • Promote',
    imageSrc: '/assets/vert-advertising.webp',
    to: '/verticals#advertising',
  },
  {
    id: 'ai',
    title: 'AI & Technology',
    subtitle: 'Smarter Business',
    imageSrc: '/assets/vert-ai.webp',
    to: '/verticals#ai',
  },
];

export const MultiVerticalsSection: React.FC = () => {
  return (
    <section className="relative py-6 sm:py-8 max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Outer Luxury Glassmorphic 16:9 Banner Container */}
      <div className="relative rounded-3xl md:rounded-[32px] overflow-hidden border border-[#DAAF37]/35 bg-gradient-to-b from-[#141414]/95 via-[#0C0C0C]/95 to-[#080808]/98 backdrop-blur-2xl p-5 sm:p-7 lg:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
        
        {/* Cinematic Ambient Gold Glow & Floating Particle Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Top Center Golden Spotlight Bloom */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-radial from-[#DAAF37]/25 via-[#DAAF37]/5 to-transparent blur-[120px]" />
          
          {/* Bottom Ambient Glow */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[850px] h-[300px] bg-radial from-[#DAAF37]/15 to-transparent blur-[140px]" />

          {/* Floating Gold Bokeh Dust Particles */}
          <div className="absolute top-[15%] left-[10%] w-1.5 h-1.5 rounded-full bg-[#F4D03F]/50 blur-[0.5px] animate-pulse" />
          <div className="absolute top-[25%] right-[14%] w-2 h-2 rounded-full bg-[#DAAF37]/40 blur-[1px]" />
          <div className="absolute bottom-[20%] left-[22%] w-1.5 h-1.5 rounded-full bg-[#F4D03F]/40 blur-[0.5px]" />
          <div className="absolute bottom-[30%] right-[28%] w-2 h-2 rounded-full bg-[#DAAF37]/50 blur-[1px] animate-pulse" />
          
          {/* Soft Golden Shimmer Border Ring */}
          <div className="absolute inset-0 rounded-3xl md:rounded-[32px] ring-1 ring-inset ring-white/10 pointer-events-none" />
        </div>

        {/* Section Content */}
        <div className="relative z-10">
          {/* Top Center Editorial Heading */}
          <div className="text-center mb-5 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight">
              <span className="text-white">Beyond Beauty.</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
                A Multi-Vertical Ecosystem.
              </span>
            </h2>
          </div>

          {/* Exactly 7 Tall Rounded Glassmorphic Cards in One Horizontal Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-3.5">
            {multiVerticalsData.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  to={card.to}
                  className="group relative flex flex-col justify-end aspect-[3/4.6] sm:aspect-[3/4.4] lg:aspect-[3/4.8] w-full rounded-2xl overflow-hidden border border-[#DAAF37]/30 hover:border-[#DAAF37]/90 bg-[#121212]/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(218,175,55,0.4)] transition-all duration-300 p-4 sm:p-4.5 block select-none"
                >
                  {/* Cinematic Background Image */}
                  <img
                    src={card.imageSrc}
                    alt={`${card.title} - ${card.subtitle}`}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Dark Gradient Fading Toward Bottom for Crystal Clear Typography (Subtle 20% overlay) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent pointer-events-none" />
                  
                  {/* Inner Glass Highlights */}
                  <div className="absolute inset-0 bg-radial from-transparent to-black/20 pointer-events-none" />

                  {/* Card Content & Action Button */}
                  <div className="relative z-10 flex items-end justify-between gap-2 mt-auto pt-8">
                    <div className="flex-1 pr-1">
                      <h3 className="text-base sm:text-lg font-heading font-semibold text-white tracking-tight leading-snug group-hover:text-[#F4D03F] transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        {card.title}
                      </h3>
                      <p className="text-xs text-white/95 font-sans tracking-wide mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.9)]">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Small Circular Gold Arrow Button */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#DAAF37] group-hover:bg-[#F4D03F] text-[#0A0A0A] flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(218,175,55,0.5)] group-hover:scale-115 group-hover:shadow-[0_0_20px_rgba(218,175,55,0.8)] transition-all duration-200">
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
