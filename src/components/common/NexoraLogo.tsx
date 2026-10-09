import React from 'react';
import { Link } from 'react-router-dom';

export interface NexoraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  showText?: boolean;
  linkToHome?: boolean;
}

export const NexoraLogo: React.FC<NexoraLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
  showText = true,
  linkToHome = true,
}) => {
  const iconSize = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-14 h-14 text-xl',
  }[size];

  const textSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  }[size];

  const content = (
    <div className={`logo-container inline-flex items-center gap-2.5 sm:gap-3 flex-shrink-0 select-none whitespace-nowrap ${className}`} title="Nexora One">
      {/* Sculpted 3D Gold 'N' Emblem (Only Letter N) */}
      <div className={`relative ${iconSize} flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1C1A14] via-[#0E0E0C] to-[#040404] border border-[#DAAF37]/50 shadow-[0_0_20px_rgba(218,175,55,0.35)] flex-shrink-0 overflow-hidden group transition-transform duration-300 group-hover:scale-105`} aria-label="Logo N">
        {/* Ambient Ring / Warm Halo Glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#DAAF37]/25 via-transparent to-[#F4D03F]/30 opacity-80 group-hover:opacity-100 transition-opacity" />
        <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#DAAF37]/20 blur-md pointer-events-none rounded-full" />
        
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[84%] h-[84%] relative z-10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
          aria-hidden="true"
        >
          <defs>
            {/* Multi-stop Brushed Gold Primary Gradient */}
            <linearGradient id="goldNPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFBE6" />
              <stop offset="25%" stopColor="#F9D753" />
              <stop offset="55%" stopColor="#DFB135" />
              <stop offset="85%" stopColor="#B3861B" />
              <stop offset="100%" stopColor="#7A560B" />
            </linearGradient>

            {/* Specular Diagonal Highlight */}
            <linearGradient id="goldNDiag" x1="20%" y1="20%" x2="80%" y2="80%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#FEE685" />
              <stop offset="70%" stopColor="#DCA828" />
              <stop offset="100%" stopColor="#966D12" />
            </linearGradient>

            {/* Circular Orbiting Ring Gradient */}
            <linearGradient id="goldRing" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8A6710" />
              <stop offset="45%" stopColor="#DAAF37" />
              <stop offset="80%" stopColor="#FFF5C2" />
              <stop offset="100%" stopColor="#F4D03F" />
            </linearGradient>

            {/* 3D Bevel Shadow Gradient */}
            <linearGradient id="goldBevelDark" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4A3405" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D4A017" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Orbiting Halo Ring Arc (Behind N) */}
          <circle
            cx="50"
            cy="50"
            r="43"
            stroke="url(#goldRing)"
            strokeWidth="3.2"
            opacity="0.85"
            strokeDasharray="200 40"
            className="origin-center"
          />

          {/* Top-Right Ring Specular Flare */}
          <circle cx="82" cy="24" r="2.5" fill="#FFFFFF" opacity="0.9" filter="drop-shadow(0 0 3px #FFF)" />

          {/* 3D Bevel Base Shadow */}
          <path
            d="M23 82V18L56 61V18H77V82L44 39V82H23Z"
            fill="url(#goldBevelDark)"
            opacity="0.5"
          />

          {/* Sculpted 3D Letter N Body */}
          <path
            d="M24 81V19L55 60V19H76V81L45 40V81H24Z"
            fill="url(#goldNPrimary)"
            stroke="url(#goldNDiag)"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* Metallic Inner Edge Ribbons for 3D Chiseled Look */}
          <path
            d="M24 19L45 40V81L24 81V19Z"
            fill="url(#goldNDiag)"
            opacity="0.25"
          />
          <path
            d="M55 19L76 19V81L55 60V19Z"
            fill="url(#goldNDiag)"
            opacity="0.35"
          />
        </svg>
      </div>

      {/* Brand Name: Exclusively "NEXORA ONE" */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div className={`font-serif font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37] ${textSizes} whitespace-nowrap`}>
            <span>NEXORA </span>
            <span className="text-[#F4D03F]">ONE</span>
          </div>
          {showSubtitle && (
            <div className="text-[9px] sm:text-[10px] tracking-[0.2em] font-heading font-medium text-[#DAAF37]/90 uppercase mt-0.5">
              Connected Digital Ecosystem
            </div>
          )}
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link to="/" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DAAF37] rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
};
