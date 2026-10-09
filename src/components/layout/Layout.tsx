import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { MobileAppDock } from './MobileAppDock';
import { SEO_METADATA } from '../../data/seo';
import { useLanguage } from '../../contexts/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { language } = useLanguage();

  // Update lang attribute on language change
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Scroll to anchor or top on route change
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }

    // Sync document title and meta description dynamically
    const currentMeta = SEO_METADATA[location.pathname] || SEO_METADATA['/'];
    if (currentMeta) {
      document.title = currentMeta.title;

      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', currentMeta.description);
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', currentMeta.title);
      }
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', currentMeta.description);
      }
      const canonicalTag = document.querySelector('link[rel="canonical"]');
      if (canonicalTag) {
        const canonicalUrl = `https://nexora.one${location.pathname === '/' ? '' : location.pathname}`;
        canonicalTag.setAttribute('href', canonicalUrl);
      }
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#F5F5F5] relative overflow-x-hidden selection:bg-[#DAAF37]/30 selection:text-[#F4D03F]">
      {/* Cinematic Ambient Background Gold Glows */}
      <div
        className="fixed top-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#DAAF37]/15 via-[#DAAF37]/5 to-transparent blur-[140px] pointer-events-none z-0"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-gradient-to-t from-[#DAAF37]/8 via-transparent to-transparent blur-[120px] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Global Header */}
      <SiteHeader />

      {/* Main Content Area */}
      <main className="flex-grow relative z-10 w-full focus:outline-none pb-20 md:pb-0" id="main-content">
        {children}
      </main>

      {/* Global Footer (Hidden on mobile per PWA specifications) */}
      <div className="hidden md:block">
        <SiteFooter />
      </div>

      {/* Mobile Bottom App Dock */}
      <MobileAppDock />
    </div>
  );
};
