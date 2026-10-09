import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Building2,
  ShieldCheck,
  Compass,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Mail,
  Handshake,
  CheckCircle2,
  Send,
  MessageSquare,
  User,
  Clock,
  Users,
  Store,
  Briefcase,
  Boxes,
  Search,
  Calendar,
  Layout,
  UserPlus,
  ShoppingCart,
  LineChart,
  MapPin,
  Globe,
  RefreshCw,
  Network,
  Award,
  Megaphone,
  BarChart3,
  IndianRupee,
  Phone,
  ExternalLink,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { SectionDivider } from '../components/common/SectionDivider';
import { FadeIn } from '../components/common/MotionWrapper';
import { InteractiveImage } from '../components/common/InteractiveImage';

import aboutHeroImg from '../assets/images/nexora_one_about_hero_v3_premium_1791367032204.jpg';
import ecosystemConnectionImg from '../assets/images/nexora_one_ecosystem_connection_v1_1791367398264.jpg';
import founderVijayImg from '../assets/images/founder_vijay_final_v1_1791369165812.jpg';
import leadershipPlaceholderImg from '../assets/images/nexora_leadership_portrait_placeholder_1791368807342.jpg';
import indiaExpansionMapImg from '../assets/images/nexora_india_expansion_map_v2_1791370129527.jpg';
import expansionTarget10kImg from '../assets/images/nexora_expansion_target_10k_salon_1791370716129.jpg';
import brandingVisionImg from '../assets/images/nexora_one_branding_vision_cinematic_1791371326735.jpg';
import growthTargetsImg from '../assets/images/nexora_growth_targets_cinematic_v1_1791372110815.jpg';
import futureExpansionImg from '../assets/images/nexora_future_expansion_vision_v1_1791372367344.jpg';
import finalClosingImg from '../assets/images/nexora_final_network_closing_v1_1791372401819.jpg';

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Partnership Discussion',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Partnership Discussion', message: '' });
    }, 800);
  };

  const principles = [
    {
      title: t('about.principles.title1'),
      desc: t('about.principles.desc1'),
    },
    {
      title: t('about.principles.title2'),
      desc: t('about.principles.desc2'),
    },
    {
      title: t('about.principles.title3'),
      desc: t('about.principles.desc3'),
    },
    {
      title: t('about.principles.title4'),
      desc: t('about.principles.desc4'),
    },
  ];

  return (
    <div className="w-full">
      {/* SECTION 1 — COMPANY OVERVIEW / HERO */}
      <section className="relative pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-16 overflow-hidden bg-[#0A0A0A]">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DAAF37]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#DAAF37]/8 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT COLUMN: HERO CONTENT */}
            <FadeIn className="lg:col-span-5 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/40 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] animate-pulse" />
                Company Overview
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-3">
                NEXORA ONE
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-heading font-semibold text-[#DAAF37] mb-4">
                India&apos;s Beauty Industry Growth Ecosystem
              </h2>

              <p className="text-sm sm:text-base text-white/75 font-sans leading-relaxed mb-6 max-w-xl">
                Nexora One is building a connected digital ecosystem for customers, beauty businesses, professionals, Growth Partners, brands and suppliers.
              </p>

              {/* 4 COMPACT FACTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 w-full">
                {[
                  { label: 'STARTED FROM', value: 'Jaipur, Rajasthan', icon: <Compass className="w-4 h-4" /> },
                  { label: 'CORE INDUSTRY', value: 'Beauty & Wellness', icon: <Sparkles className="w-4 h-4" /> },
                  { label: 'WHAT WE BUILD', value: 'Digital Platform + Network', icon: <Cpu className="w-4 h-4" /> },
                  { label: 'GROWTH DIRECTION', value: 'Jaipur → India → Beyond', icon: <TrendingUp className="w-4 h-4" /> },
                ].map((fact, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] flex-shrink-0">
                      {fact.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-0.5">
                        {fact.label}
                      </span>
                      <span className="text-xs sm:text-sm text-white/90 font-sans font-medium">
                        {fact.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <Button to="/ecosystem" variant="primary" size="lg" className="shadow-[0_4px_25px_rgba(218,175,55,0.4)]">
                  EXPLORE NEXORA
                </Button>
                <Button to="/verticals" variant="secondary" size="lg">
                  VIEW OUR ECOSYSTEM
                </Button>
              </div>
            </FadeIn>

            {/* RIGHT COLUMN: PRIMARY HERO VISUAL */}
            <div className="lg:col-span-7 relative group">
              <FadeIn direction="left" distance={40} delay={0.2}>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/30 shadow-[0_20px_60px_rgba(0,0,0,0.85)] bg-black/40">
                  <InteractiveImage
                    src={aboutHeroImg}
                    alt="NEXORA ONE Beauty Industry Growth Ecosystem - Branded Salon and Digital Infrastructure"
                    className="w-full h-auto object-cover select-none transition-transform duration-1000 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  {/* Subtle Gradient Overlays for Readability/Atmosphere */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent pointer-events-none" />
                </div>

                {/* Floating Branding Badge on Image */}
                <div className="absolute -bottom-3 -right-3 sm:bottom-5 sm:right-5 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl bg-black/80 backdrop-blur-xl border border-[#DAAF37]/40 shadow-2xl z-20">
                  <span className="text-[10px] sm:text-xs font-heading font-black text-white uppercase tracking-[0.3em]">
                    JAIPUR <span className="text-[#DAAF37]">●</span> RAJASTHAN
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* BOTTOM HERO STATEMENT */}
        <div className="mt-8 sm:mt-12 border-t border-white/10 pt-6 text-center max-w-[1440px] mx-auto px-4">
          <span className="text-xs sm:text-sm font-heading font-bold text-[#DAAF37]/60 uppercase tracking-[0.4em]">
            BUILDING THE DIGITAL GROWTH NETWORK FOR INDIA&apos;S BEAUTY INDUSTRY.
          </span>
        </div>
      </section>

      {/* SECTION 2 — WHAT NEXORA ONE IS BUILDING */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-white/10">
        <FadeIn>
          {/* HEADER */}
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/40 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" />
              WHAT NEXORA ONE IS BUILDING
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              ONE BEAUTY ECOSYSTEM.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                MANY CONNECTIONS.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/75 font-sans leading-relaxed max-w-2xl mx-auto">
              Nexora One connects customers, businesses, professionals, Growth Partners, brands and suppliers in one digital network.
            </p>
          </div>

          {/* MAIN CINEMATIC ECOSYSTEM IMAGE */}
          <div className="relative mb-10 group">
            <div className="relative rounded-2xl sm:rounded-[40px] overflow-hidden border border-[#DAAF37]/30 shadow-[0_30px_80px_rgba(0,0,0,0.9)] bg-black/40">
              <InteractiveImage
                src={ecosystemConnectionImg}
                alt="NEXORA ONE Beauty Ecosystem - Connecting Customers, Businesses, Professionals and Partners"
                className="w-full h-auto object-cover select-none transition-transform duration-1000 group-hover:scale-[1.01]"
              />
              {/* Subtle Connection Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
            </div>

            {/* Floating Status Badge */}
            <div className="absolute -top-4 -right-4 sm:top-8 sm:right-8 px-5 py-2.5 rounded-2xl bg-black/80 backdrop-blur-xl border border-[#DAAF37]/40 shadow-2xl z-20 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#DAAF37] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-heading font-bold text-white uppercase tracking-widest">
                INTEGRATED SYSTEM
              </span>
            </div>
          </div>

          {/* 5 PARTICIPANT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-10 sm:mb-12">
            {[
              { title: 'CUSTOMERS', icon: <Users className="w-5 h-5" />, desc: 'Discover • Book • Rewards' },
              { title: 'BUSINESSES', icon: <Store className="w-5 h-5" />, desc: 'Digital Presence • Growth' },
              { title: 'PROFESSIONALS', icon: <Briefcase className="w-5 h-5" />, desc: 'Jobs • Opportunities' },
              { title: 'GROWTH PARTNERS', icon: <TrendingUp className="w-5 h-5" />, desc: 'Onboarding • Network' },
              { title: 'BRANDS & SUPPLIERS', icon: <Boxes className="w-5 h-5" />, desc: 'B2B • Products' },
            ].map((card, i) => (
              <GlassCard key={i} className="p-4 sm:p-5 flex flex-col items-center text-center border-white/10 hover:border-[#DAAF37]/40 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/20 flex items-center justify-center text-[#F4D03F] mb-3 group-hover:bg-[#DAAF37]/20 transition-colors shadow-[0_0_20px_rgba(218,175,55,0.1)]">
                  {card.icon}
                </div>
                <h3 className="text-xs font-heading font-bold text-white mb-1.5 tracking-wide uppercase">
                  {card.title}
                </h3>
                <p className="text-[11px] text-white/50 font-sans leading-relaxed">
                  {card.desc}
                </p>
              </GlassCard>
            ))}
          </div>

          {/* CORE FLOW VISUAL JOURNEY */}
          <div className="pt-8 sm:pt-10 border-t border-white/10">
            <span className="text-xs uppercase font-heading font-semibold tracking-[0.3em] text-[#DAAF37] block text-center mb-6">
              CORE OPERATIONAL FLOW
            </span>
            <div className="flex flex-wrap items-center justify-center gap-y-6 sm:gap-x-2 md:gap-x-4 lg:gap-x-6">
              {[
                { label: 'DISCOVER', icon: <Search className="w-4 h-4" /> },
                { label: 'BOOK', icon: <Calendar className="w-4 h-4" /> },
                { label: 'BUILD', icon: <Layout className="w-4 h-4" /> },
                { label: 'HIRE', icon: <UserPlus className="w-4 h-4" /> },
                { label: 'SELL', icon: <ShoppingCart className="w-4 h-4" /> },
                { label: 'GROW', icon: <LineChart className="w-4 h-4" /> },
              ].map((step, i, arr) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05] min-w-[100px] group hover:bg-white/[0.05] transition-all">
                    <div className="w-10 h-10 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/20 flex items-center justify-center text-[#DAAF37] group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <span className="text-[10px] font-heading font-black text-white tracking-[0.2em]">{step.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden lg:block text-[#DAAF37]/30 font-bold text-xl">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* Corporate Principles */}
      <section className="py-8 sm:py-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="हमारे काम करने का तरीका"
          title="Nexora के 4"
          titleAccent="आसान नियम"
          subtitle="हमारा मकसद simple है — beauty business से जुड़े लोगों को एक-दूसरे से जोड़ना और उन्हें आसान digital tools देना।"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {principles.map((pr, i) => (
            <GlassCard key={i} className="p-5">
              <div className="w-7 h-7 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] mb-3">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm font-heading font-semibold text-white mb-1.5">
                {pr.title}
              </h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                {pr.desc}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* SECTION 3 — THE PEOPLE BEHIND NEXORA ONE */}
      <section id="leadership" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-white/10">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/40 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-4">
              <Users className="w-3.5 h-3.5" />
              OUR LEADERSHIP
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              THE PEOPLE BEHIND<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                NEXORA ONE
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/75 font-sans leading-relaxed max-w-2xl mx-auto">
              A team of visionaries, industry veterans, and technology experts building India&apos;s most connected beauty ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-10 sm:mb-12">
            {/* FOUNDER CARD */}
            <div className="lg:col-span-5">
              <GlassCard className="p-0 border-[#DAAF37]/40 overflow-hidden group h-full" glow="gold">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <InteractiveImage
                    src={founderVijayImg}
                    alt="Vijay K. Tiwari - Founder of NEXORA ONE"
                    className="w-full h-full object-cover select-none transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-xs font-heading font-black text-[#DAAF37] uppercase tracking-[0.3em] mb-2 block">
                      FOUNDER & VISIONARY
                    </span>
                    <h3 className="text-3xl font-serif font-bold text-white mb-2">
                      Vijay K. Tiwari
                    </h3>
                    <p className="text-sm text-white/70 font-sans italic leading-relaxed">
                      &quot;Nexora is more than technology; it is a movement to connect and empower every individual in India&apos;s beauty industry through a single, shared digital architecture.&quot;
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* LEADERSHIP ROLES GRID */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { role: 'CHIEF EXECUTIVE OFFICER', focus: 'Global Strategy & Vision', title: 'Leadership Placeholder' },
                { role: 'CO-FOUNDER', focus: 'Ecosystem Growth & Operations', title: 'Leadership Placeholder' },
                { role: 'MANAGING DIRECTOR', focus: 'Corporate Governance', title: 'Leadership Placeholder' },
                { role: 'CHIEF TECHNOLOGY OFFICER', focus: 'Platform Architecture & AI', title: 'Leadership Placeholder' },
                { role: 'CHIEF OPERATING OFFICER', focus: 'Execution Excellence', title: 'Leadership Placeholder' },
                { role: 'CHIEF STRATEGY OFFICER', focus: 'Expansion Dynamics', title: 'Leadership Placeholder' },
              ].map((member, i) => (
                <GlassCard key={i} className="p-0 border-white/10 overflow-hidden group flex flex-col" glow="subtle">
                  <div className="relative aspect-[3/4] overflow-hidden opacity-60 grayscale hover:grayscale-0 hover:opacity-90 transition-all duration-700">
                    <InteractiveImage
                      src={leadershipPlaceholderImg}
                      alt={member.role}
                      className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-4 sm:p-5 mt-auto bg-black/20 backdrop-blur-sm border-t border-white/5">
                    <span className="text-[9px] font-heading font-black text-[#DAAF37] uppercase tracking-[0.2em] block mb-1">
                      {member.role}
                    </span>
                    <h4 className="text-base font-serif font-bold text-white mb-1 leading-tight">
                      {member.title}
                    </h4>
                    <p className="text-[10px] text-white/40 font-sans leading-relaxed line-clamp-1">
                      {member.focus}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 5 — JAIPUR → RAJASTHAN → INDIA */}
      <section id="expansion" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-white/10 overflow-hidden">
        <FadeIn>
          {/* HEADER */}
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/40 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-4">
              <Globe className="w-3.5 h-3.5" />
              OUR EXPANSION
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              START LOCAL.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                GROW ACROSS INDIA.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/75 font-sans leading-relaxed max-w-2xl mx-auto">
              Nexora One will begin from Jaipur, expand across Rajasthan, and then move into selected major and Tier 2 / Tier 3 cities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-12">
            {/* MAIN VISUAL (60%) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl sm:rounded-[40px] overflow-hidden border border-[#DAAF37]/30 shadow-[0_30px_80px_rgba(0,0,0,0.9)] bg-black/40 group">
                <InteractiveImage
                  src={indiaExpansionMapImg}
                  alt="NEXORA ONE India Expansion Plan - From Jaipur to Rajasthan, Mumbai, Delhi, Bengaluru and Kolkata"
                  className="w-full h-auto object-cover select-none transition-transform duration-1000 group-hover:scale-[1.02]"
                />
                {/* Subtle Glow Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Starting Hub Badge */}
                <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-xl border border-[#DAAF37]/40 shadow-2xl z-20 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#DAAF37] animate-pulse" />
                  <span className="text-[10px] font-heading font-bold text-white uppercase tracking-widest">
                    JAIPUR: STARTING HUB
                  </span>
                </div>
              </div>
            </div>

            {/* EXPANSION STAGES CARDS (40%) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {[
                { 
                  id: '01', 
                  title: 'JAIPUR', 
                  desc: 'The starting market for Nexora One.', 
                  icon: <MapPin className="w-5 h-5" />
                },
                { 
                  id: '02', 
                  title: 'RAJASTHAN', 
                  desc: 'Expand district by district and build a strong regional network.', 
                  icon: <Globe className="w-5 h-5" />
                },
                { 
                  id: '03', 
                  title: 'MAJOR CITIES', 
                  desc: 'Move into selected major markets including Mumbai, Delhi, Bengaluru and Kolkata.', 
                  icon: <Building2 className="w-5 h-5" />
                },
                { 
                  id: '04', 
                  title: 'TIER 2 & 3', 
                  desc: 'Take the network to more local markets across India.', 
                  icon: <TrendingUp className="w-5 h-5" />
                },
              ].map((stage, i) => (
                <GlassCard key={i} className="p-4 sm:p-5 flex items-center gap-4 sm:gap-5 border-white/10 hover:border-[#DAAF37]/40 transition-all group">
                  <div className="w-11 h-11 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/20 flex items-center justify-center text-[#F4D03F] flex-shrink-0 group-hover:bg-[#DAAF37]/20 transition-colors">
                    {stage.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-heading font-black text-[#DAAF37]/40">STAGE {stage.id}</span>
                      <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wide">
                        {stage.title}
                      </h3>
                    </div>
                    <p className="text-xs text-white/50 font-sans leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* STRATEGY BLOCK */}
          <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
            <GlassCard className="p-6 sm:p-8 border-white/10 text-center relative overflow-hidden" glow="subtle">
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3 leading-tight">
                  BUILD ONE STRONG MARKET. THEN EXPAND.
                </h3>
                <p className="text-xs sm:text-sm text-white/60 font-sans mb-8 max-w-2xl mx-auto leading-relaxed">
                  Start with a strong local network, strengthen the system, learn from the market and then move to the next city.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-y-6 sm:gap-x-4 md:gap-x-8">
                  {[
                    { label: 'BUILD', icon: <Boxes className="w-5 h-5" /> },
                    { label: 'STRENGTHEN', icon: <ShieldCheck className="w-5 h-5" /> },
                    { label: 'EXPAND', icon: <TrendingUp className="w-5 h-5" /> },
                    { label: 'REPEAT', icon: <RefreshCw className="w-5 h-5" /> },
                  ].map((item, i, arr) => (
                    <React.Fragment key={i}>
                      <div className="flex flex-col items-center gap-2.5 group">
                        <div className="w-12 h-12 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/20 flex items-center justify-center text-[#DAAF37] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(218,175,55,0.1)]">
                          {item.icon}
                        </div>
                        <span className="text-[10px] font-heading font-black text-white tracking-[0.2em] uppercase">{item.label}</span>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="hidden sm:block text-[#DAAF37]/30 font-bold text-xl">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              
              {/* Background Accent */}
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#DAAF37]/5 blur-3xl rounded-full pointer-events-none" />
            </GlassCard>
          </div>

          {/* FINAL VISUAL STATEMENT */}
          <div className="text-center pt-8 sm:pt-10 border-t border-white/10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3 leading-tight">
              ONE BRAND. ONE NETWORK.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                MULTIPLE CITIES.
              </span>
            </h3>
            <p className="text-sm sm:text-base text-[#DAAF37]/60 font-heading font-bold uppercase tracking-[0.3em]">
              From a Jaipur beginning to a wider Indian beauty network.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 06 — FRANCHISE EXPANSION VISION */}
      <section id="franchise-expansion" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-white/10 overflow-hidden">
        <FadeIn>
          {/* HEADER */}
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/40 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-4">
              <Store className="w-3.5 h-3.5" />
              FRANCHISE EXPANSION VISION
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              FROM CITY GROWTH TO<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                FRANCHISE GROWTH
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/75 font-sans leading-relaxed max-w-2xl mx-auto">
              When the Nexora One network becomes strong in a market, the next step is expansion into selected districts and Tier 2 / Tier 3 cities through a standardized franchise model.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-12">
            {/* EXPANSION STAGES CARDS (40% - Left) */}
            <div className="lg:col-span-5 order-2 lg:order-1 grid grid-cols-1 gap-4">
              {[
                { 
                  title: 'STRONG LOCAL NETWORK', 
                  desc: 'Build a strong network before expanding.', 
                  icon: <Building2 className="w-5 h-5" />
                },
                { 
                  title: 'CITY EXPANSION', 
                  desc: 'Move into selected districts and Tier 2 / Tier 3 cities.', 
                  icon: <MapPin className="w-5 h-5" />
                },
                { 
                  title: 'FRANCHISE NETWORK', 
                  desc: 'Use a standard NEXORA ONE model to expand into selected markets.', 
                  icon: <Handshake className="w-5 h-5" />
                },
              ].map((card, i) => (
                <GlassCard key={i} className="p-4 sm:p-5 flex items-center gap-4 sm:gap-5 border-white/10 hover:border-[#DAAF37]/40 transition-all group">
                  <div className="w-11 h-11 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/20 flex items-center justify-center text-[#F4D03F] flex-shrink-0 group-hover:bg-[#DAAF37]/20 transition-colors">
                    {card.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wide mb-1">
                      {card.title}
                    </h3>
                    <p className="text-xs text-white/50 font-sans leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* MAIN VISUAL (60% - Right) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative group">
                <div className="relative rounded-2xl sm:rounded-[40px] overflow-hidden border border-[#DAAF37]/30 shadow-[0_30px_80px_rgba(0,0,0,0.9)] bg-black/40">
                  <InteractiveImage
                    src={expansionTarget10kImg}
                    alt="NEXORA ONE Franchise Expansion Vision - 10,000 Salons in 12 Months Target"
                    className="w-full h-auto object-cover select-none transition-transform duration-1000 group-hover:scale-[1.01]"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* MILESTONE FLOW */}
          <div className="max-w-5xl mx-auto mb-10 sm:mb-12 py-8 sm:py-10 border-y border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-y-8 sm:gap-x-4 md:gap-x-8 lg:gap-x-12">
              {[
                { label: '10,000+ SALONS', icon: <Store className="w-5 h-5" /> },
                { label: 'MORE DISTRICTS', icon: <Network className="w-5 h-5" /> },
                { label: 'TIER 2 / TIER 3', icon: <Globe className="w-5 h-5" /> },
                { label: 'FRANCHISE NETWORK', icon: <Handshake className="w-5 h-5" /> },
              ].map((step, i, arr) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center gap-3 group">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DAAF37]/20 to-transparent border border-[#DAAF37]/30 flex items-center justify-center text-[#DAAF37] group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(218,175,55,0.15)]">
                        {step.icon}
                      </div>
                      {/* Number Overlay */}
                      <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#DAAF37] text-[#0A0A0A] text-[9px] font-heading font-black flex items-center justify-center shadow-lg">
                        0{i+1}
                      </div>
                    </div>
                    <span className="text-[10px] font-heading font-black text-white tracking-[0.2em] uppercase text-center max-w-[120px]">
                      {step.label}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden lg:block text-[#DAAF37]/30 font-bold">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* BOTTOM STATEMENT */}
          <div className="text-center">
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-white mb-3 leading-tight">
              BUILD THE NETWORK. THEN EXPAND THE NETWORK.
            </h3>
            <p className="text-sm sm:text-base text-[#DAAF37]/60 font-heading font-bold uppercase tracking-[0.3em]">
              A strong local network can become the foundation for wider city and franchise expansion.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 08 — BUILDING THE NEXORA ONE BRAND */}
      <section id="branding-vision" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-white/10 overflow-hidden">
        <FadeIn>
          {/* HEADER */}
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/40 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              BUILDING THE NEXORA ONE BRAND
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              WE WANT LOCAL SALONS TO<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                LOOK LIKE BRANDS.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/75 font-sans leading-relaxed max-w-3xl mx-auto">
              जो salon Nexora One की तय guidelines और required business milestones को पूरा करेगा, उसे Nexora One की brand-building support के लिए select किया जा सकता है — जैसे NEXORA ONE signage, salon branding, branded visibility, website promotion और other approved promotional support.
            </p>
          </div>

          {/* MAIN VISUAL (60% Rule) */}
          <div className="relative mb-10 group">
            <div className="relative rounded-2xl sm:rounded-[40px] overflow-hidden border border-[#DAAF37]/30 shadow-[0_30px_80px_rgba(0,0,0,0.9)] bg-black/40">
              <InteractiveImage
                src={brandingVisionImg}
                alt="NEXORA ONE Branding Vision - Premium Luxury Salon Environment"
                className="w-full h-auto object-cover select-none transition-transform duration-1000 group-hover:scale-[1.01]"
              />
              {/* Subtle Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Vision Badge */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 px-4 py-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-[#DAAF37]/40 shadow-2xl z-20 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#DAAF37] animate-pulse" />
                <span className="text-[10px] sm:text-xs font-heading font-bold text-white uppercase tracking-widest">
                  BRANDING VISION
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 sm:mb-12">
            {/* BRANDING EXAMPLES (40%) */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-3">
              <span className="text-xs font-heading font-black text-[#DAAF37] uppercase tracking-[0.2em] mb-1">
                VISUAL BRANDING ELEMENTS
              </span>
              {[
                'NEXORA ONE LED / SIGNAGE',
                'NEXORA ONE SALON T-SHIRTS',
                'NEXORA ONE QR CODE',
                'NEXORA ONE SOUND BOX',
                'NEXORA ONE WEBSITE',
                'NEXORA ONE SALON BRANDING',
                'PROMOTIONAL VISIBILITY'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/30 transition-colors group">
                  <div className="w-7 h-7 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/20 flex items-center justify-center text-[#F4D03F] group-hover:bg-[#DAAF37]/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-heading font-bold text-white tracking-wide">{item}</span>
                </div>
              ))}
              <p className="mt-2 text-xs text-white/40 font-sans italic leading-relaxed">
                *Selected business milestones can unlock stronger brand visibility and recognition.
              </p>
            </div>

            {/* HIGH PERFORMING BLOCK (60%) */}
            <div className="lg:col-span-7">
              <GlassCard className="p-6 sm:p-8 border-[#DAAF37]/30 h-full relative overflow-hidden" glow="gold">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-[#DAAF37]" />
                  SELECTED HIGH-PERFORMING SALONS
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                  {[
                    { title: 'CITY-LEVEL RECOGNITION', desc: 'Become a flagship destination in your district.', icon: <MapPin className="w-5 h-5" /> },
                    { title: 'BRANDING SUPPORT', desc: 'Professional signage and physical ecosystem tools.', icon: <ShieldCheck className="w-5 h-5" /> },
                    { title: 'WEBSITE FEATURE', desc: 'Custom high-tier digital presence on Nexora One.', icon: <Layout className="w-5 h-5" /> },
                    { title: 'MAIN WEBSITE PROMOTION', desc: 'Direct marketing visibility to a wider audience.', icon: <Megaphone className="w-5 h-5" /> },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                        {item.icon}
                      </div>
                      <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider">{item.title}</h4>
                      <p className="text-[11px] text-white/50 font-sans leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Decorative Background Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-[#DAAF37]/5 to-transparent blur-3xl pointer-events-none" />
              </GlassCard>
            </div>
          </div>

          {/* FINAL MESSAGE */}
          <div className="text-center pt-8 sm:pt-10 border-t border-white/10">
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-3 leading-tight tracking-tight">
              BUILD A SALON.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                BUILD A BRAND.
              </span>
            </h3>
            <p className="text-sm sm:text-base text-[#DAAF37]/70 font-heading font-bold uppercase tracking-[0.3em] max-w-2xl mx-auto">
              NEXORA ONE aims to help local beauty businesses become stronger, more visible and more professional brands.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 09 — OUR GROWTH TARGETS */}
      <section id="growth-targets" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-white/10 overflow-hidden">
        <FadeIn>
          {/* HEADER */}
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/40 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              OUR GROWTH TARGETS
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              OUR NEXT BIG<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                TARGETS
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-12">
            {/* BIG NUMBERS (40%) */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              {/* Target 1 */}
              <GlassCard className="p-6 sm:p-7 border-[#DAAF37]/40 relative overflow-hidden group" glow="gold">
                <div className="relative z-10">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#DAAF37]">
                      <Store className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-heading font-black text-[#DAAF37] uppercase tracking-[0.2em]">Primary Target</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tighter group-hover:scale-105 transition-transform duration-500 origin-left">
                      10,000
                    </span>
                    <span className="text-xl sm:text-2xl font-serif font-bold text-[#DAAF37] mt-0.5">
                      NEW SALONS
                    </span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-white/50 font-sans font-medium">
                    1-Year Management Target
                  </p>
                </div>
                {/* Background Number Accent */}
                <span className="absolute -bottom-4 -right-4 text-7xl font-black text-white/[0.03] select-none pointer-events-none">01</span>
              </GlassCard>

              {/* Target 2 */}
              <GlassCard className="p-6 sm:p-7 border-white/10 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/60">
                      <IndianRupee className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-heading font-black text-white/40 uppercase tracking-[0.2em]">Management Planning</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tighter group-hover:scale-105 transition-transform duration-500 origin-left">
                      ₹100 CRORE+
                    </span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-white/50 font-sans font-medium">
                    Management / Planning Target
                  </p>
                </div>
                {/* Background Number Accent */}
                <span className="absolute -bottom-4 -right-4 text-7xl font-black text-white/[0.03] select-none pointer-events-none">02</span>
              </GlassCard>
            </div>

            {/* MAIN VISUAL (60%) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl sm:rounded-[40px] overflow-hidden border border-[#DAAF37]/30 shadow-[0_30px_80px_rgba(0,0,0,0.9)] bg-black/40 group">
                <InteractiveImage
                  src={growthTargetsImg}
                  alt="NEXORA ONE Growth Targets - 10,000 Salons Vision"
                  className="w-full h-auto object-cover select-none transition-transform duration-1000 group-hover:scale-[1.02]"
                />
                {/* Subtle Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* MILESTONE PATH VISUAL */}
          <div className="max-w-5xl mx-auto mb-10 sm:mb-12 py-8 sm:py-10 px-5 sm:px-6 rounded-3xl bg-white/[0.02] border border-white/10">
            <span className="text-xs font-heading font-black text-[#DAAF37] uppercase tracking-[0.3em] block text-center mb-8 sm:mb-10">
              GROWTH ROADMAP MILESTONES
            </span>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector Line (Desktop) */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#DAAF37]/20 to-transparent hidden md:block" />
              
              {[
                { count: '1,000', label: 'SHOPS', desc: 'Rajasthan Expansion', icon: <MapPin className="w-5 h-5" /> },
                { count: '5,000', label: 'SHOPS', desc: 'Multi-City Growth', icon: <Globe className="w-5 h-5" /> },
                { count: '10,000', label: 'SHOPS', desc: 'Major Network Milestone', icon: <Award className="w-5 h-5" /> },
              ].map((m, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-2xl bg-black border border-[#DAAF37]/40 flex items-center justify-center text-[#DAAF37] mb-4 group-hover:scale-110 group-hover:border-[#DAAF37] transition-all shadow-[0_0_20px_rgba(218,175,55,0.1)]">
                    {m.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-white">{m.count}</span>
                    <span className="text-[10px] font-heading font-black text-[#DAAF37] tracking-[0.2em] mb-1.5">{m.label}</span>
                    <p className="text-xs text-white/50 font-sans leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FINAL MESSAGE */}
          <div className="text-center">
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-white mb-3 leading-tight tracking-tight">
              10,000 SALONS.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                A STRONGER INDIA-WIDE NETWORK.
              </span>
            </h3>
            <p className="text-sm sm:text-base text-white/60 font-sans max-w-2xl mx-auto mb-6">
              The target is to build a large connected beauty business network step by step.
            </p>
            <p className="text-[10px] text-white/30 font-sans uppercase tracking-widest italic">
              Management / planning targets, not guaranteed outcomes.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 10 — LONG-TERM VISION + CORPORATE PROFILE + CONTACT */}
      <section id="vision-profile-contact" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-white/10 overflow-hidden">
        <FadeIn>
          {/* PART A — LONG-TERM VISION */}
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/40 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5" />
              LONG-TERM VISION
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              START WITH BEAUTY.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                BUILD FOR MORE.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/75 font-sans leading-relaxed max-w-2xl mx-auto">
              Beauty is the starting ecosystem. As Nexora One grows, the company plans to expand into other digital business sectors.
            </p>
          </div>

          {/* MAIN FUTURE EXPANSION IMAGE (60% Rule) */}
          <div className="relative mb-10 sm:mb-12 group">
            <div className="relative rounded-2xl sm:rounded-[40px] overflow-hidden border border-[#DAAF37]/30 shadow-[0_30px_80px_rgba(0,0,0,0.9)] bg-black/40">
              <InteractiveImage
                src={futureExpansionImg}
                alt="NEXORA ONE Future Expansion Vision - Connecting Beauty to Multiple Industries"
                className="w-full h-auto object-cover select-none transition-transform duration-1000 group-hover:scale-[1.01]"
              />
              {/* Subtle Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Future Directions List Overlay (Compact) */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 flex flex-wrap gap-2.5 pointer-events-none">
                {['REAL ESTATE', 'JOBS', 'FOOD', 'COMMERCE', 'ADVERTISING', 'AI & TECHNOLOGY'].map((v, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[9px] sm:text-[10px] font-heading font-black text-white/80 uppercase tracking-widest">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* PART B — CORPORATE PROFILE */}
          <div id="corporate-profile" className="max-w-4xl mx-auto mb-10 sm:mb-12">
            <GlassCard className="p-6 sm:p-8 border-[#DAAF37]/30 relative overflow-hidden" glow="gold">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#DAAF37]/20 to-transparent border border-[#DAAF37]/40 flex items-center justify-center text-[#DAAF37] p-3">
                      <Building2 className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                        NEXORA ONE<br />CORPORATE PROFILE
                      </h3>
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="text-[10px] font-heading font-black text-[#DAAF37] uppercase tracking-[0.3em] block mb-1">Status</span>
                    <span className="px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#DAAF37] text-[10px] font-heading font-bold uppercase tracking-wider">
                      UNDER PROSSEING
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                  <div className="space-y-1">
                    <span className="text-[10px] font-heading font-black text-white/30 uppercase tracking-[0.2em] block">Founder</span>
                    <span className="text-base sm:text-lg font-sans font-bold text-white">VIJAY K. TIWARI</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-heading font-black text-white/30 uppercase tracking-[0.2em] block">Company Name</span>
                    <span className="text-sm font-sans font-medium text-white/90">
                      NEXORA ONE GLOBAL INTERNATINOL<br />
                      <span className="text-xs text-white/50">(PRIVETE LIMITED - UNDER PROSSEING)</span>
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-heading font-black text-white/30 uppercase tracking-[0.2em] block">Registered Details</span>
                    <span className="text-sm font-sans font-medium text-white/90 uppercase">UNDER PROSSEING</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-heading font-black text-white/30 uppercase tracking-[0.2em] block">Corporate Office</span>
                    <span className="text-sm font-sans font-medium text-white/90 uppercase">UNDER PROSSEING — 5 CITIES</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-heading font-black text-white/30 uppercase tracking-[0.2em] block">Contact Number</span>
                    <a href="tel:+919782105055" className="text-base sm:text-lg font-sans font-bold text-[#DAAF37] hover:text-[#F4D03F] transition-colors flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      +91 9782105055
                    </a>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-heading font-black text-white/30 uppercase tracking-[0.2em] block">Official Email</span>
                    <a href="mailto:nexoraallapps@gmail.com" className="text-sm font-sans font-medium text-white hover:text-[#DAAF37] transition-colors flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#DAAF37]" />
                      nexoraallapps@gmail.com
                    </a>
                  </div>
                  <div className="space-y-1 sm:col-span-2">
                    <span className="text-[10px] font-heading font-black text-white/30 uppercase tracking-[0.2em] block">Website</span>
                    <a href="https://nexora-main-website.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-sans font-medium text-[#DAAF37] hover:underline underline-offset-4 flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      https://nexora-main-website.vercel.app/
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#DAAF37]/5 blur-3xl rounded-full pointer-events-none" />
            </GlassCard>
          </div>

          {/* PART C — FINAL CONTACT AREA */}
          <div id="contact" className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-8 sm:mb-10 leading-tight">
              LET&apos;S BUILD THE NETWORK
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { title: 'BUSINESS', desc: 'Explore Nexora for business', route: '/verticals#beauty', icon: <Store className="w-6 h-6" /> },
                { title: 'GROWTH PARTNER', desc: 'Join the Nexora network', route: '/products#growth-partner', icon: <TrendingUp className="w-6 h-6" /> },
                { title: 'INVESTOR / CORPORATE', desc: 'Explore partnership and investment', route: '/investors', icon: <Handshake className="w-6 h-6" /> },
              ].map((card, i) => (
                <Link key={i} to={card.route} className="group">
                  <GlassCard 
                    className="p-6 flex flex-col items-center text-center border-white/10 group-hover:border-[#DAAF37]/40 group-hover:bg-white/[0.04] transition-all h-full"
                  >
                    <div className="w-13 h-13 rounded-2xl bg-[#DAAF37]/10 border border-[#DAAF37]/20 flex items-center justify-center text-[#DAAF37] mb-4 group-hover:scale-110 group-hover:bg-[#DAAF37]/20 transition-all p-3">
                      {card.icon}
                    </div>
                    <h3 className="text-xs font-heading font-black text-white uppercase tracking-widest mb-1.5">{card.title}</h3>
                    <p className="text-xs text-white/50 font-sans leading-relaxed group-hover:text-white/70 transition-colors">{card.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-[#DAAF37] text-[10px] font-heading font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight className="w-3 h-3" />
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>

          {/* FINAL CINEMATIC VISUAL */}
          <div className="relative rounded-3xl overflow-hidden border border-[#DAAF37]/20 shadow-[0_40px_100px_rgba(0,0,0,0.9)] bg-black/40 group">
            <InteractiveImage
              src={finalClosingImg}
              alt="NEXORA ONE - India's Connected Digital Network Vision"
              className="w-full h-auto object-cover select-none transition-transform duration-[2000ms] group-hover:scale-[1.03]"
            />
            {/* Logo and Brand Line Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-[1px]">
              <h3 className="text-3xl sm:text-6xl font-serif font-bold text-white mb-3 text-center tracking-tight">
                START WITH BEAUTY.<br />
                <span className="text-[#DAAF37]">BUILD FOR MORE.</span>
              </h3>
              <div className="h-px w-20 bg-[#DAAF37]/50 mb-6" />
              <div className="flex flex-col items-center gap-2">
                <span className="text-xl sm:text-3xl font-serif font-bold text-white tracking-widest uppercase">NEXORA ONE</span>
                <span className="text-[10px] sm:text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-[0.4em] text-center">
                  India&apos;s Beauty Industry Growth Ecosystem
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};
