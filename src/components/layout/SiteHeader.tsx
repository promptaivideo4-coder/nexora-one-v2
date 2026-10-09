import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NAV_ITEMS, HEADER_CTA } from '../../data/navigation';
import { NexoraLogo } from '../common/NexoraLogo';
import { Button } from '../common/Button';
import { LanguageSelector } from './LanguageSelector';

const PRIMARY_NAV_ITEMS = NAV_ITEMS.slice(0, 6); // Home, Ecosystem, Products, Beauty, Benefits, Verticals
const MORE_NAV_ITEMS = NAV_ITEMS.slice(6); // Vision, Investors, Research, Investor Guide, About

export const SiteHeader: React.FC = React.memo(() => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const isMoreActive = MORE_NAV_ITEMS.some((item) => location.pathname === item.route);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll Progress Tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer and dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Thin, Elegant Gold Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#DAAF37] via-[#F4D03F] to-[#FFF5D0] shadow-[0_0_10px_rgba(244,208,63,0.8),0_0_20px_rgba(218,175,55,0.4)] z-[100] origin-left pointer-events-none"
        aria-hidden="true"
      />

      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#DAAF37] focus:text-[#0A0A0A] focus:font-heading focus:font-bold focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <motion.header
        initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
        className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/[0.12] shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-2.5'
          : 'bg-[#0A0A0A]/75 backdrop-blur-md border-b border-white/[0.08] py-3.5'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 xl:gap-4">
        {/* Left: Brand Logo & Wordmark (never wraps or clips) */}
        <div className="logo-container flex-shrink-0">
          <NexoraLogo size="md" showSubtitle={false} />
        </div>

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2 flex-nowrap"
          aria-label="Main Navigation"
        >
          {PRIMARY_NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              to={item.route}
              className={({ isActive }) =>
                `relative px-2 xl:px-2.5 py-1.5 text-[12px] xl:text-[13px] font-heading font-medium tracking-wide rounded-md transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-[#F4D03F]'
                    : 'text-white/70 hover:text-white hover:bg-white/[0.05]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{t(item.shortLabel)}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#F4D03F] to-[#DAAF37] shadow-[0_0_8px_rgba(244,208,63,0.8)] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* Secondary items consolidated into a clean "More ▾" dropdown to prevent overflow on zoom or widescreen */}
          <div
            ref={moreRef}
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              type="button"
              onClick={() => setMoreOpen((prev) => !prev)}
              className={`relative flex items-center gap-1 px-2 xl:px-2.5 py-1.5 text-[12px] xl:text-[13px] font-heading font-medium tracking-wide rounded-md transition-colors whitespace-nowrap ${
                isMoreActive || moreOpen
                  ? 'text-[#F4D03F]'
                  : 'text-white/70 hover:text-white hover:bg-white/[0.05]'
              }`}
              aria-expanded={moreOpen}
              aria-haspopup="true"
            >
              <span>{t('nav.more', 'More')}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  moreOpen ? 'rotate-180 text-[#F4D03F]' : 'text-white/50'
                }`}
              />
              {isMoreActive && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#F4D03F] to-[#DAAF37] shadow-[0_0_8px_rgba(244,208,63,0.8)] rounded-full" />
              )}
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.96 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute top-full right-0 mt-1.5 w-56 p-1.5 rounded-xl bg-[#0F0F0F]/95 backdrop-blur-2xl border border-[#DAAF37]/30 shadow-[0_15px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(218,175,55,0.15)] z-[110]"
                >
                  <div className="flex flex-col gap-0.5">
                    {MORE_NAV_ITEMS.map((item) => {
                      const isActive = location.pathname === item.route;
                      return (
                        <NavLink
                          key={item.id}
                          to={item.route}
                          onClick={() => setMoreOpen(false)}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-heading font-medium transition-all ${
                            isActive
                              ? 'bg-[#DAAF37]/15 text-[#F4D03F] border border-[#DAAF37]/40 font-bold'
                              : 'text-white/80 hover:text-white hover:bg-white/[0.06]'
                          }`}
                        >
                          <span>{t(item.fullLabel)}</span>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] shadow-[0_0_6px_rgba(244,208,63,0.8)]" />
                          )}
                        </NavLink>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right: Language Selector & Primary Header CTA */}
        <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 flex-shrink-0">
          <LanguageSelector />
          <Button
            to={HEADER_CTA.target}
            variant="primary"
            size="sm"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
            className="whitespace-nowrap shadow-[0_2px_15px_rgba(218,175,55,0.3)] text-xs xl:text-sm px-3 xl:px-4 py-1.5"
          >
            {t(HEADER_CTA.label)}
          </Button>
        </div>

        {/* Mobile Menu Trigger (< 1024px) */}
        <div className="flex lg:hidden items-center gap-2">
          <Button
            to={HEADER_CTA.target}
            variant="primary"
            size="sm"
            className="text-[10px] sm:text-xs px-2.5 py-1 sm:px-3 sm:py-1.5 whitespace-nowrap"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t(HEADER_CTA.label)}
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/[0.08] border border-white/[0.15] text-[#F5F5F5] hover:text-[#F4D03F] hover:border-[#DAAF37]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DAAF37] transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-full bottom-0 z-[100] h-[calc(100dvh-100%)] max-h-[calc(100dvh-60px)] bg-[#0A0A0A]/98 backdrop-blur-2xl border-t border-white/[0.15] lg:hidden flex flex-col justify-between p-4 sm:p-6 pb-20 overflow-y-auto overscroll-contain shadow-[0_20px_50px_rgba(0,0,0,0.95)]">
          <div className="flex flex-col gap-2 flex-shrink-0">
            <div className="text-xs uppercase font-heading font-semibold tracking-wider text-[#DAAF37] mb-2 px-3">
              Navigation
            </div>
            {NAV_ITEMS.map((item, idx) => (
              <NavLink
                key={item.id}
                to={item.route}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-heading font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#DAAF37]/20 to-transparent border-[#DAAF37]/50 text-[#F4D03F]'
                      : 'bg-white/[0.03] border-white/[0.08] text-white/80 hover:bg-white/[0.08] hover:text-white'
                  }`
                }
              >
                <span>{t(item.fullLabel)}</span>
                <span className="text-xs font-sans text-white/40">{String(idx + 1).padStart(2, '0')}</span>
              </NavLink>
            ))}
          </div>

          <div className="pt-6 border-t border-white/[0.1] mt-6 flex flex-col gap-3 flex-shrink-0 pb-8">
            <Button
              to={HEADER_CTA.target}
              variant="primary"
              size="lg"
              className="w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t(HEADER_CTA.label)}
            </Button>
            <p className="text-center text-xs text-white/40 font-sans tracking-wide">
              NEXORA ONE
            </p>
          </div>
        </div>
      )}
    </motion.header>
    </>
  );
});

SiteHeader.displayName = 'SiteHeader';
