import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface HorizontalCarouselProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  scrollStep?: number;
  showIndicators?: boolean;
  alignArrows?: 'top-right' | 'sides';
  containerClassName?: string;
}

export const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({
  children,
  title,
  subtitle,
  className = '',
  scrollStep = 340,
  showIndicators = false,
  alignArrows = 'top-right',
  containerClassName = '',
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScrollability();
    const handleScroll = () => {
      checkScrollability();
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkScrollability);

    // Initial check after paint
    const timer = setTimeout(checkScrollability, 150);

    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScrollability);
      clearTimeout(timer);
    };
  }, [checkScrollability, children]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;

    // Use card width or specified step, fallback to 80% viewport
    const step = scrollStep || Math.min(el.clientWidth * 0.8, 360);
    const delta = direction === 'left' ? -step : step;

    el.scrollBy({
      left: delta,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`relative w-full ${containerClassName}`}>
      {/* Top Header Row with Title + Luxury Gold Navigation Buttons */}
      {(title || subtitle || alignArrows === 'top-right') && (
        <div className="flex items-center justify-between gap-4 mb-3 sm:mb-4">
          <div className="min-w-0 flex-1">
            {typeof title === 'string' ? (
              <h3 className="text-sm sm:text-base font-heading font-bold text-white tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#DAAF37]" />
                {title}
              </h3>
            ) : (
              title
            )}
            {subtitle && (
              <p className="text-xs text-white/60 font-sans mt-0.5">{subtitle}</p>
            )}
          </div>

          {/* Luxury Gold Navigation Controls (Top-Right) */}
          {alignArrows === 'top-right' && (
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  canScrollLeft
                    ? 'bg-[#181818] border border-[#DAAF37]/60 text-[#F4D03F] hover:bg-[#DAAF37] hover:text-[#0A0A0A] hover:scale-105 shadow-[0_2px_12px_rgba(218,175,55,0.25)]'
                    : 'bg-white/[0.04] border border-white/10 text-white/30 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              <button
                type="button"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  canScrollRight
                    ? 'bg-[#181818] border border-[#DAAF37]/60 text-[#F4D03F] hover:bg-[#DAAF37] hover:text-[#0A0A0A] hover:scale-105 shadow-[0_2px_12px_rgba(218,175,55,0.25)]'
                    : 'bg-white/[0.04] border border-white/10 text-white/30 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Main Track Container with touch support and smooth snapping */}
      <div className="relative group/carousel w-full">
        {/* Side Floating Left Arrow when alignArrows === 'sides' */}
        {alignArrows === 'sides' && (
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-md cursor-pointer ${
              canScrollLeft
                ? 'bg-black/80 border border-[#DAAF37]/70 text-[#F4D03F] hover:bg-[#DAAF37] hover:text-[#0A0A0A] hover:scale-110 shadow-[0_4px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(218,175,55,0.4)]'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Side Floating Right Arrow when alignArrows === 'sides' */}
        {alignArrows === 'sides' && (
          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-md cursor-pointer ${
              canScrollRight
                ? 'bg-black/80 border border-[#DAAF37]/70 text-[#F4D03F] hover:bg-[#DAAF37] hover:text-[#0A0A0A] hover:scale-110 shadow-[0_4px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(218,175,55,0.4)]'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Scroll Track */}
        <div
          ref={scrollRef}
          style={{
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x',
          }}
          className={`flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-2 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-auto -mx-4 px-4 sm:w-full sm:mx-0 sm:px-0 sm:gap-4 ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCarousel;
