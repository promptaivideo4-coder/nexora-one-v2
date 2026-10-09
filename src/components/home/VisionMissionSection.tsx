import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { NexoraLogo } from '../common/NexoraLogo';

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="relative py-6 sm:py-8 max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Outer Rounded Container with Thin Gold Borders and Ambient Gold Dust */}
      <div className="relative rounded-3xl md:rounded-[36px] overflow-hidden border border-[#DAAF37]/30 bg-[#0A0A0A] p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
        {/* Background Ambient Glow & Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[350px] h-[350px] bg-radial from-[#DAAF37]/12 to-transparent blur-[110px]" />
          <div className="absolute -bottom-10 right-20 w-[450px] h-[350px] bg-radial from-[#F4D03F]/15 to-transparent blur-[120px]" />
          
          {/* Subtle gold dust particles */}
          <div className="absolute top-[25%] left-[8%] w-1.5 h-1.5 rounded-full bg-[#F4D03F]/60 blur-[0.5px] animate-pulse" />
          <div className="absolute bottom-[20%] left-[16%] w-2 h-2 rounded-full bg-[#DAAF37]/50 blur-[1px]" />
          <div className="absolute top-[75%] right-[25%] w-1.5 h-1.5 rounded-full bg-[#F4D03F]/70 blur-[0.5px]" />
        </div>

        {/* Compact Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          {/* Left Vertical Number Block & Title */}
          <div className="lg:col-span-3 flex flex-col justify-center text-left">
            {/* Left Vertical Number Block: 02 */}
            <div className="text-6xl sm:text-7xl lg:text-[76px] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D0] via-[#F4D03F] to-[#DAAF37] leading-none mb-3 drop-shadow-[0_2px_12px_rgba(218,175,55,0.3)]">
              02
            </div>

            {/* Horizontal Gold Line with Glow Point */}
            <div className="w-24 h-[1.5px] bg-gradient-to-r from-[#DAAF37] to-transparent mb-5 relative">
              <div className="absolute -top-[2px] left-0 w-2 h-2 rounded-full bg-[#F4D03F] shadow-[0_0_8px_#F4D03F]" />
            </div>

            {/* Left Title: Vision & Mission */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-bold tracking-tight leading-[1.12]">
              <span className="text-white block">Vision &</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37] block mt-0.5">
                Mission
              </span>
            </h2>
          </div>

          {/* Right-Side Cinematic Preview Card */}
          <div className="lg:col-span-9">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#DAAF37]/80 bg-gradient-to-r from-[#121212]/98 via-[#0A0A0A]/95 to-[#060606]/95 shadow-[0_0_35px_rgba(218,175,55,0.22),0_15px_45px_rgba(0,0,0,0.9)] p-5 sm:p-7 lg:p-8">
              {/* Right Background Glowing Planet Earth Globe with Network Connections */}
              <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] h-full pointer-events-none overflow-hidden select-none z-0">
                <img
                  src="/assets/cta-global-network.webp"
                  alt="Connected Future Planet Network"
                  className="w-full h-full object-cover object-right opacity-90 lg:opacity-100"
                  loading="lazy"
                />
                {/* Soft smooth dark gradient from left to center for typography clarity */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 sm:via-[#0A0A0A]/75 lg:via-[#0A0A0A]/30 to-transparent" />
                
                {/* Ambient Golden Halo on Globe */}
                <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[300px] h-[300px] bg-radial from-[#F4D03F]/25 to-transparent blur-[80px]" />
              </div>

              {/* Top Mini Header Navigation Mockup */}
              <div className="relative z-10 flex items-center justify-between gap-4 pb-4 mb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <NexoraLogo size="sm" showSubtitle={false} />
                </div>

                <div className="hidden md:flex items-center gap-4 lg:gap-5 text-xs text-white/70 font-heading font-medium">
                  <span className="text-[#F4D03F]">Home</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Ecosystem</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Solutions</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Partners</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Pricing</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Resources</span>
                  <span className="hover:text-white transition-colors cursor-pointer">About</span>
                </div>

                <Link
                  to="/vision-mission"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#F4D03F] via-[#E8BE35] to-[#DAAF37] hover:from-[#FFF2B2] hover:to-[#F4D03F] text-[#0A0A0A] font-heading font-bold text-xs tracking-wide shadow-[0_2px_12px_rgba(218,175,55,0.4)] hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                </Link>
              </div>

              {/* Card Body Content */}
              <div className="relative z-10 max-w-xl pr-2">
                {/* Vision Section */}
                <div className="text-[11px] font-heading font-bold uppercase tracking-[0.2em] text-[#DAAF37] mb-1">
                  OUR VISION
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-heading font-bold text-white tracking-tight mb-2 leading-tight">
                  A Connected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D0] via-[#F4D03F] to-[#DAAF37]">Beauty Future</span>
                </h3>
                <p className="text-xs sm:text-[13px] text-white/75 font-sans leading-relaxed mb-4 max-w-lg">
                  To digitize, empower and unify the global beauty industry through technology, collaboration and opportunity.
                </p>

                {/* Mission Section */}
                <div className="text-[11px] font-heading font-bold uppercase tracking-[0.2em] text-[#DAAF37] mb-1">
                  OUR MISSION
                </div>
                <p className="text-xs sm:text-[13px] text-white/75 font-sans leading-relaxed mb-5 max-w-lg">
                  To create a seamless ecosystem that connects customers, businesses, professionals, partners and brands with innovative digital solutions and sustainable growth.
                </p>

                {/* Explore Our Vision CTA Button */}
                <div>
                  <Link
                    to="/vision-mission"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F4D03F] via-[#E8BE35] to-[#DAAF37] hover:from-[#FFF2B2] hover:to-[#F4D03F] text-[#0A0A0A] font-heading font-bold text-xs sm:text-sm tracking-wide shadow-[0_4px_20px_rgba(218,175,55,0.4)] hover:shadow-[0_4px_30px_rgba(218,175,55,0.65)] hover:scale-105 active:scale-95 transition-all"
                  >
                    <span>Explore Our Vision</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
