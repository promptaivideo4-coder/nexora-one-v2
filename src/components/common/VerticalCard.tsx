import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { StatusBadge, StatusType } from './StatusBadge';

export interface VerticalCardProps {
  id: string;
  name: string;
  subtitle: string;
  status: StatusType;
  imageSrc?: string;
  onClick?: () => void;
  href?: string;
  to?: string;
  className?: string;
}

export const VerticalCard: React.FC<VerticalCardProps> = React.memo(({
  id,
  name,
  subtitle,
  status,
  imageSrc,
  onClick,
  href,
  to,
  className = '',
}) => {
  const content = (
    <div
      id={id}
      className={`group relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#1F1F1F] via-[#141414] to-[#0A0A0A] border border-white/[0.15] shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-[1.04] hover:border-[#DAAF37]/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(218,175,55,0.25)] cursor-pointer flex flex-col justify-between p-5 sm:p-6 ${className}`}
    >
      {/* Background Image or Rich Gradient Fallback */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#121212] to-[#080808]">
          {/* Subtle Golden Radial Glow */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#DAAF37]/10 rounded-full blur-2xl group-hover:bg-[#DAAF37]/20 transition-all" />
          <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
            <Sparkles className="w-24 h-24 text-[#DAAF37]" />
          </div>
        </div>
      )}

      {/* Dark Gradient Overlay From Bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent pointer-events-none" />

      {/* Top Row: Status Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <StatusBadge status={status} />
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 flex items-end justify-between gap-3 pt-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white tracking-tight group-hover:text-[#F4D03F] transition-colors">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-white/70 font-sans mt-1">
            {subtitle}
          </p>
        </div>

        {/* Gold Circular Arrow Button Bottom-Right */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F4D03F] to-[#DAAF37] text-[#0A0A0A] flex items-center justify-center flex-shrink-0 shadow-[0_4px_15px_rgba(218,175,55,0.3)] group-hover:scale-110 group-hover:shadow-[0_6px_20px_rgba(218,175,55,0.5)] transition-all">
          <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
        </div>
      </div>
    </div>
  );

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="block"
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className="block" onClick={onClick}>
        {content}
      </Link>
    );
  }

  return <div onClick={onClick}>{content}</div>;
});

VerticalCard.displayName = 'VerticalCard';
