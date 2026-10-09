import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxContextType {
  openLightbox: (images: LightboxImage[], initialIndex?: number) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  
  const dragStart = useRef({ x: 0, y: 0 });
  const touchStartDist = useRef<number | null>(null);
  const touchStartZoom = useRef<number>(1);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const lastTapTime = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const openLightbox = useCallback((imgs: LightboxImage[], index = 0) => {
    setImages(imgs);
    setCurrentIndex(index);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    document.body.style.overflow = 'auto';
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [images.length]);

  const prevImage = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [images.length]);

  // Keyboard navigation & escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, nextImage, prevImage]);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.5, 4));
  const handleZoomOut = () => setZoom((prev) => {
    const next = Math.max(prev - 0.5, 1);
    if (next === 1) setPan({ x: 0, y: 0 });
    return next;
  });
  
  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Register non-passive wheel event listener on container to prevent main document scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isOpen) return;

    const handleWheelNative = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        setZoom((prev) => Math.min(prev + 0.25, 4));
      } else {
        setZoom((prev) => {
          const next = Math.max(prev - 0.25, 1);
          if (next === 1) setPan({ x: 0, y: 0 });
          return next;
        });
      }
    };

    container.addEventListener('wheel', handleWheelNative, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheelNative);
    };
  }, [isOpen]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      dragStart.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPan({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y,
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    const now = Date.now();
    
    if (e.touches.length === 1) {
      // Double tap detection
      const timeSinceLastTap = now - lastTapTime.current;
      if (timeSinceLastTap < 280 && timeSinceLastTap > 0) {
        if (zoom > 1) {
          handleResetZoom();
        } else {
          setZoom(2.5);
          setPan({ x: 0, y: 0 });
        }
        lastTapTime.current = 0;
        return;
      }
      lastTapTime.current = now;

      // Track drag start
      const touch = e.touches[0];
      touchStartX.current = touch.clientX;
      touchStartY.current = touch.clientY;
      
      if (zoom > 1) {
        setIsDragging(true);
        dragStart.current = {
          x: touch.clientX - pan.x,
          y: touch.clientY - pan.y
        };
      }
    } else if (e.touches.length === 2) {
      // Pinch zoom start
      setIsDragging(false);
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      touchStartDist.current = dist;
      touchStartZoom.current = zoom;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation();
    
    if (e.touches.length === 1) {
      if (zoom > 1 && isDragging) {
        const touch = e.touches[0];
        setPan({
          x: touch.clientX - dragStart.current.x,
          y: touch.clientY - dragStart.current.y,
        });
      }
    } else if (e.touches.length === 2 && touchStartDist.current !== null) {
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      
      const ratio = dist / touchStartDist.current;
      const targetZoom = Math.max(1, Math.min(touchStartZoom.current * ratio, 4));
      setZoom(targetZoom);
      
      if (targetZoom === 1) {
        setPan({ x: 0, y: 0 });
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    setIsDragging(false);
    touchStartDist.current = null;

    if (zoom === 1 && touchStartX.current !== null && e.changedTouches.length > 0) {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      const deltaY = e.changedTouches[0].clientY - (touchStartY.current || 0);

      // Swipe transition
      if (Math.abs(deltaX) > 40 && Math.abs(deltaY) < 80) {
        if (deltaX < 0) {
          nextImage(e);
        } else {
          prevImage(e);
        }
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const currentImage = images[currentIndex];

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}
      {isOpen && currentImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Viewer"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl animate-fadeIn p-4 select-none pointer-events-auto"
          onClick={closeLightbox}
        >
          {/* Top Control Bar */}
          <div 
            className="absolute top-4 left-4 right-4 z-[10000] flex items-center justify-between pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-heading font-medium">
              <span>{currentIndex + 1}</span>
              <span className="text-white/40">/</span>
              <span>{images.length}</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); handleZoomIn(); }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white flex items-center justify-center transition-all cursor-pointer"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleZoomOut(); }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white flex items-center justify-center transition-all cursor-pointer"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleResetZoom(); }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white flex items-center justify-center transition-all cursor-pointer"
                title="Reset Zoom"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                className="w-10 h-10 rounded-full bg-[#DAAF37] hover:bg-[#F4D03F] text-[#0A0A0A] flex items-center justify-center shadow-[0_0_20px_rgba(218,175,55,0.4)] active:scale-95 transition-all cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Chevrons for Multi-image gallery on desktop */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => prevImage(e)}
                className="absolute left-6 z-[10000] w-12 h-12 rounded-full bg-black/60 border border-white/10 hover:bg-[#DAAF37] hover:text-[#0A0A0A] text-white hidden md:flex items-center justify-center transition-all backdrop-blur-md shadow-2xl cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => nextImage(e)}
                className="absolute right-6 z-[10000] w-12 h-12 rounded-full bg-black/60 border border-white/10 hover:bg-[#DAAF37] hover:text-[#0A0A0A] text-white hidden md:flex items-center justify-center transition-all backdrop-blur-md shadow-2xl cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image Container with Zoom, Swipe & Pan */}
          <div
            ref={containerRef}
            className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt || 'Lightbox Preview'}
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              style={{
                transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                transition: isDragging ? 'none' : 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] select-none pointer-events-auto"
            />
          </div>

          {/* Caption / Alt Footer */}
          {currentImage.alt && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-lg px-4 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white/90 text-xs font-sans text-center pointer-events-none shadow-lg z-[10000]">
              {currentImage.alt}
            </div>
          )}
        </div>
      )}
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};
