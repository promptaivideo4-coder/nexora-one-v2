import React from 'react';

export interface GlassCardProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  hoverEffect?: boolean;
  glow?: 'none' | 'subtle' | 'gold';
  onClick?: () => void;
  as?: 'div' | 'article' | 'section';
}

export const GlassCard: React.FC<GlassCardProps> = React.memo(({
  children,
  id,
  className = '',
  hoverEffect = true,
  glow = 'subtle',
  onClick,
  as: Component = 'div',
}) => {
  // Atmospheric Gold Glow styles
  const glowStyles = {
    none: '',
    subtle: 'shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_24px_rgba(218,175,55,0.12)]',
    gold: 'shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_36px_rgba(218,175,55,0.25)]',
  }[glow];

  const hoverStyles = hoverEffect
    ? 'hover:scale-[1.04] hover:border-[#DAAF37]/50 hover:shadow-[0_16px_40px_rgba(0,0,0,0.45),0_0_30px_rgba(218,175,55,0.22)] transition-all duration-300 ease-out'
    : 'transition-all duration-300';

  return (
    <Component
      id={id}
      onClick={onClick}
      className={`relative rounded-[16px] bg-white/[0.08] border border-white/[0.15] backdrop-blur-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] ${glowStyles} ${hoverStyles} ${className}`}
    >
      {/* Inner hairline highlight */}
      <div className="absolute inset-0 rounded-[16px] ring-1 ring-inset ring-white/5 pointer-events-none" />
      {children}
    </Component>
  );
});

GlassCard.displayName = 'GlassCard';
