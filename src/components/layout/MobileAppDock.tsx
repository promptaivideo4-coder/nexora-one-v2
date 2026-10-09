import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Compass, Calendar, TrendingUp, Menu, ArrowUp, X, Sparkles, Shield, BookOpen, Layers, Grid, Award, Building2, FileText, Info } from 'lucide-react';

export const MobileAppDock: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMoreSheet, setShowMoreSheet] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldShow = window.scrollY > 250;
          setShowBackToTop((prev) => (prev !== shouldShow ? shouldShow : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', path: '/', icon: Compass },
    { label: 'Ecosystem', path: '/ecosystem', icon: Layers },
    { label: 'Products', path: '/products', icon: Grid },
    { label: 'Beauty', path: '/beauty-ecosystem', icon: Sparkles },
    { label: 'Benefits', path: '/who-benefits', icon: Award },
    { label: 'Verticals', path: '/verticals', icon: Building2 },
    { label: 'Vision', path: '/vision-mission', icon: Shield },
    { label: 'Investors', path: '/investors', icon: Shield },
    { label: 'Research', path: '/market-research', icon: BookOpen },
    { label: 'Insights', path: '/insights', icon: FileText },
    { label: 'About', path: '/about', icon: Info },
  ];

  return (
    <>
      {/* Floating Back-to-Top Button (Mobile Only, above dock) */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed right-4 bottom-20 z-40 md:hidden w-10 h-10 rounded-full bg-[#1F1F1F] border border-[#DAAF37]/40 text-[#DAAF37] flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:bg-[#DAAF37] hover:text-[#0A0A0A] transition-all"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Mobile Bottom App Dock */}
      <nav aria-label="Mobile Bottom App Navigation" className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-[#DAAF37]/25 px-2 py-2 flex items-center justify-around shadow-[0_-10px_30px_rgba(0,0,0,0.8)] pb-[calc(8px+env(safe-area-inset-bottom))]">
        <button
          onClick={() => navigate('/ecosystem')}
          className={`flex flex-col items-center justify-center w-16 py-1 text-[10px] font-heading font-medium transition-colors ${
            location.pathname === '/ecosystem' || location.pathname === '/' ? 'text-[#F4D03F]' : 'text-white/60 hover:text-white'
          }`}
        >
          <Compass className="w-5 h-5 mb-1" />
          <span>Explore</span>
        </button>

        <button
          onClick={() => navigate('/products')}
          className={`flex flex-col items-center justify-center w-16 py-1 text-[10px] font-heading font-medium transition-colors ${
            location.pathname === '/products' ? 'text-[#F4D03F]' : 'text-white/60 hover:text-white'
          }`}
        >
          <Grid className="w-5 h-5 mb-1" />
          <span>Services</span>
        </button>

        {/* Book Now Primary Center Action */}
        <button
          onClick={() => setShowBookingModal(true)}
          className="relative -top-3 w-12 h-12 rounded-full bg-gradient-to-r from-[#F4D03F] to-[#DAAF37] text-[#0A0A0A] flex items-center justify-center shadow-[0_0_20px_rgba(218,175,55,0.4)] hover:scale-105 transition-transform"
          aria-label="Book Now"
        >
          <Calendar className="w-5 h-5" />
        </button>

        <button
          onClick={() => navigate('/investors')}
          className={`flex flex-col items-center justify-center w-16 py-1 text-[10px] font-heading font-medium transition-colors ${
            location.pathname === '/investors' ? 'text-[#F4D03F]' : 'text-white/60 hover:text-white'
          }`}
        >
          <TrendingUp className="w-5 h-5 mb-1" />
          <span>Investors</span>
        </button>

        <button
          onClick={() => setShowMoreSheet(true)}
          className="flex flex-col items-center justify-center w-16 py-1 text-[10px] font-heading font-medium text-white/60 hover:text-white transition-colors"
        >
          <Menu className="w-5 h-5 mb-1" />
          <span>More</span>
        </button>
      </nav>

      {/* More Bottom Sheet Drawer */}
      {showMoreSheet && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className="absolute inset-0"
            onClick={() => setShowMoreSheet(false)}
          />
          <div className="relative z-10 w-full max-h-[85vh] bg-[#121212] border-t border-[#DAAF37]/30 rounded-t-3xl p-6 overflow-y-auto pb-[calc(70px+env(safe-area-inset-bottom))] shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#DAAF37]" />
                <h3 className="text-base font-heading font-bold text-white">Nexora Ecosystem Menu</h3>
              </div>
              <button
                onClick={() => setShowMoreSheet(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((item) => {
                const IconComp = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      setShowMoreSheet(false);
                    }}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                      isActive
                        ? 'bg-[#DAAF37]/15 border-[#DAAF37]/40 text-[#F4D03F]'
                        : 'bg-white/[0.03] border-white/10 text-white/80 hover:bg-white/[0.06] hover:border-white/20'
                    }`}
                  >
                    <IconComp className="w-4 h-4 text-[#DAAF37] flex-shrink-0" />
                    <span className="text-xs font-heading font-medium truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 text-center">
              <p className="text-[11px] text-white/50 font-sans">
                Nexora One • Connected Digital Ecosystem
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Quick Booking Modal for Mobile App Dock */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 md:hidden flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className="absolute inset-0"
            onClick={() => setShowBookingModal(false)}
          />
          <div className="relative z-10 w-full max-w-[400px] bg-[#121212] border border-[#DAAF37]/40 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
              <h3 className="text-lg font-heading font-bold text-white">Quick Ecosystem Action</h3>
              <button
                onClick={() => setShowBookingModal(false)}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-white/70 font-sans mb-5 leading-relaxed">
              Explore Nexora&apos;s salon booking platform, merchant onboarding, or connect directly with our growth team.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => {
                  navigate('/products');
                  setShowBookingModal(false);
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#F4D03F] to-[#DAAF37] text-[#0A0A0A] font-heading font-bold text-xs uppercase tracking-wider text-center shadow-lg"
              >
                Explore SalonOS & Products
              </button>
              <button
                onClick={() => {
                  navigate('/ecosystem');
                  setShowBookingModal(false);
                }}
                className="w-full py-3 px-4 rounded-xl bg-white/[0.06] border border-white/15 text-white font-heading font-semibold text-xs text-center hover:bg-white/10 transition-colors"
              >
                Explore Ecosystem Architecture
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
