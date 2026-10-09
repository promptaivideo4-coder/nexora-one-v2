import React from 'react';
import { useLightbox } from './LightboxProvider';
import { Maximize2 } from 'lucide-react';

interface InteractiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  galleryGroup?: { src: string; alt: string }[];
}

export const InteractiveImage: React.FC<InteractiveImageProps> = ({
  src,
  alt,
  className = '',
  galleryGroup,
  onError,
  ...props
}) => {
  const { openLightbox } = useLightbox();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (src) {
      if (galleryGroup && galleryGroup.length > 0) {
        const idx = galleryGroup.findIndex((img) => img.src === src);
        openLightbox(galleryGroup, idx >= 0 ? idx : 0);
      } else {
        openLightbox([{ src, alt: alt || '' }], 0);
      }
    }
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    const currentSrc = target.getAttribute('src') || '';
    if (currentSrc.startsWith('/src/assets/images/')) {
      const fallback = currentSrc.replace('/src/assets/images/', '/assets/images/');
      if (target.src !== fallback) {
        target.src = fallback;
        return;
      }
    } else if (currentSrc.startsWith('/assets/images/')) {
      const fallback = currentSrc.replace('/assets/images/', '/src/assets/images/');
      if (target.src !== fallback) {
        target.src = fallback;
        return;
      }
    }
    onError?.(e);
  };

  return (
    <div className="relative group cursor-zoom-in inline-block w-full" onClick={handleClick}>
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={handleError}
        {...props}
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-[inherit] pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#DAAF37]/50 text-[#F4D03F] text-[11px] font-heading font-semibold shadow-lg">
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Tap to Enlarge</span>
        </span>
      </div>
    </div>
  );
};
