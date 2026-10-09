import React from 'react';
import { Smartphone, Laptop, Tablet, Sparkles, ShieldCheck } from 'lucide-react';

export interface DeviceMockupProps {
  variant?: 'laptop' | 'phone' | 'tablet' | 'duo' | 'trio';
  title?: string;
  subtitle?: string;
  category?: string;
  imageSrc?: string;
  className?: string;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = React.memo(({
  variant = 'laptop',
  title = 'Nexora Platform',
  subtitle = 'Connected Ecosystem Architecture',
  category = 'Demo Platform',
  imageSrc,
  className = '',
}) => {
  // Photorealistic Laptop Frame
  const LaptopFrame = () => (
    <div className="relative w-full max-w-xl mx-auto flex flex-col items-center select-none group">
      {/* Top Ambient Gold Rim Glow */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-radial from-[#DAAF37]/35 to-transparent blur-xl pointer-events-none" />

      {/* Screen Lid / Bezel with Gold Chamfer */}
      <div className="relative w-full bg-[#161616] rounded-t-2xl p-2.5 sm:p-3 border-t border-x border-[#DAAF37]/50 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(218,175,55,0.22)]">
        {/* Webcam Lens & Ambient Sensor */}
        <div className="flex items-center justify-center gap-1.5 mb-2">
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#111] ring-1 ring-white/30" />
        </div>

        {/* OLED Glass Screen Display */}
        <div className="relative aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-[#121212] via-[#0A0A0A] to-[#050505] border border-white/10 overflow-hidden shadow-inner flex flex-col justify-between p-4 sm:p-5">
          {/* Specular Diagonal Glass Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />

          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover object-top rounded-lg"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <>
              {/* Top Header Bar */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#F4D03F] shadow-[0_0_8px_rgba(244,208,63,0.8)]" />
                  <span className="text-[10px] sm:text-xs font-heading font-semibold tracking-wider text-[#F4D03F] uppercase">
                    {category}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/40 text-[10px]">
                  <span className="hidden sm:inline">NEXORA OS 2.4</span>
                  <Laptop className="w-3.5 h-3.5 text-[#DAAF37]/70" />
                </div>
              </div>

              {/* Central Content Preview Card */}
              <div className="relative z-10 my-auto text-center py-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#DAAF37]/25 to-[#DAAF37]/5 border border-[#DAAF37]/50 flex items-center justify-center text-[#F4D03F] mx-auto mb-2.5 shadow-[0_0_20px_rgba(218,175,55,0.35)]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="font-heading font-bold text-white text-sm sm:text-lg mb-1 tracking-tight">
                  {title}
                </div>
                <div className="text-xs text-white/60 font-sans max-w-xs mx-auto leading-relaxed">
                  {subtitle}
                </div>
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="relative z-10 pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] text-white/50">
                <div className="flex items-center gap-1 text-[#DAAF37]">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Enterprise Secure Node</span>
                </div>
                <span className="text-[#F4D03F]/90 font-mono">24ms · 99.99% Up</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* CNC Milled Lower Chassis & Notch */}
      <div className="w-[106%] h-3 sm:h-4 bg-gradient-to-b from-[#2C281E] via-[#1A1813] to-[#0E0E0E] rounded-b-xl border-b border-x border-[#DAAF37]/50 flex items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.9)] relative">
        <div className="w-20 h-1 bg-[#DAAF37]/40 rounded-full" />
      </div>
    </div>
  );

  // Photorealistic Phone Frame
  const PhoneFrame = () => (
    <div className="relative w-36 sm:w-44 aspect-[9/19] rounded-[28px] bg-[#161616] p-2 border border-[#DAAF37]/55 shadow-[0_16px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(218,175,55,0.25)] flex flex-col justify-between overflow-hidden select-none">
      {/* Dynamic Pill Notch */}
      <div className="w-14 h-3 bg-black rounded-full mx-auto mb-2 flex items-center justify-end px-2">
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
      </div>

      {/* Screen Viewport */}
      <div className="relative flex-1 rounded-[20px] bg-gradient-to-b from-[#141414] via-[#0E0E0E] to-[#060606] border border-white/10 p-3 flex flex-col justify-between overflow-hidden">
        {/* Specular Glare */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />

        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover object-top rounded-md"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <>
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[9px] font-heading font-bold text-[#DAAF37] tracking-wider uppercase">
                {category}
              </span>
              <Smartphone className="w-3 h-3 text-[#F4D03F]/80" />
            </div>

            <div className="relative z-10 my-auto text-center">
              <div className="w-8 h-8 rounded-xl bg-[#DAAF37]/20 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] mx-auto mb-2 shadow-[0_0_12px_rgba(218,175,55,0.3)]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="font-heading font-bold text-white text-xs leading-tight mb-1">
                {title}
              </div>
              <div className="text-[9px] text-white/55 leading-tight">
                {subtitle}
              </div>
            </div>

            {/* Home Indicator */}
            <div className="relative z-10 w-10 h-1 bg-white/40 rounded-full mx-auto mt-2" />
          </>
        )}
      </div>
    </div>
  );

  // Photorealistic Tablet Frame
  const TabletFrame = () => (
    <div className="relative w-52 sm:w-64 aspect-[4/3] rounded-[22px] bg-[#161616] p-2.5 border border-[#DAAF37]/50 shadow-[0_16px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(218,175,55,0.22)] flex flex-col justify-between overflow-hidden select-none">
      <div className="relative flex-1 rounded-[14px] bg-gradient-to-br from-[#141414] via-[#0E0E0E] to-[#060606] border border-white/10 p-3.5 flex flex-col justify-between overflow-hidden">
        {/* Specular Glare */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />

        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover object-top rounded-md"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <>
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[9px] font-heading font-bold text-[#DAAF37] uppercase">
                {category}
              </span>
              <Tablet className="w-3.5 h-3.5 text-[#F4D03F]/80" />
            </div>

            <div className="relative z-10 my-auto text-center">
              <div className="w-8 h-8 rounded-xl bg-[#DAAF37]/20 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] mx-auto mb-2">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="font-heading font-bold text-white text-xs sm:text-sm leading-tight mb-1">
                {title}
              </div>
              <div className="text-[10px] text-white/55 leading-tight max-w-xs mx-auto">
                {subtitle}
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[9px] text-white/40 pt-1.5 border-t border-white/[0.06]">
              <span>Nexora Tablet Node</span>
              <span className="text-[#DAAF37]">Active</span>
            </div>
          </>
        )}
      </div>
    </div>
  );

  if (variant === 'phone') {
    return <div className={className}><PhoneFrame /></div>;
  }

  if (variant === 'tablet') {
    return <div className={className}><TabletFrame /></div>;
  }

  if (variant === 'duo') {
    return (
      <div className={`relative flex items-end justify-center ${className}`}>
        <div className="w-4/5">
          <LaptopFrame />
        </div>
        <div className="absolute -bottom-4 -right-2 sm:-right-6 z-20">
          <PhoneFrame />
        </div>
      </div>
    );
  }

  if (variant === 'trio') {
    return (
      <div className={`relative flex items-end justify-center ${className}`}>
        <div className="w-3/4">
          <LaptopFrame />
        </div>
        <div className="absolute -bottom-3 -left-4 sm:-left-8 z-20">
          <TabletFrame />
        </div>
        <div className="absolute -bottom-5 -right-3 sm:-right-6 z-30">
          <PhoneFrame />
        </div>
      </div>
    );
  }

  return <div className={className}><LaptopFrame /></div>;
});

DeviceMockup.displayName = 'DeviceMockup';
