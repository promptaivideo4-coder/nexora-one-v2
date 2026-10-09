import React from 'react';
import { GlassCard } from './GlassCard';
import { Button } from './Button';

export interface StakeholderCardProps {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  icon: React.ReactNode;
  benefits?: string[];
  ctaText: string;
  ctaTarget: string;
  className?: string;
}

export const StakeholderCard: React.FC<StakeholderCardProps> = ({
  id,
  name,
  tagline,
  problem,
  solution,
  icon,
  benefits,
  ctaText,
  ctaTarget,
  className = '',
}) => {
  const isExternal = ctaTarget.startsWith('http') || ctaTarget.startsWith('mailto:');

  return (
    <GlassCard id={id} className={`p-8 flex flex-col justify-between ${className}`}>
      <div>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DAAF37]/20 to-[#DAAF37]/5 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] shadow-[0_0_20px_rgba(218,175,55,0.25)] flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white tracking-tight">
              {name}
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#DAAF37] font-medium mt-0.5">
              {tagline}
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm font-sans text-white/75 leading-relaxed mb-6">
          <div>
            <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/40 block mb-1">
              Challenge
            </span>
            <p>{problem}</p>
          </div>
          <div>
            <span className="text-xs uppercase font-heading font-semibold tracking-wider text-[#DAAF37] block mb-1">
              Nexora Solution
            </span>
            <p className="text-white/85">{solution}</p>
          </div>
        </div>

        {benefits && benefits.length > 0 && (
          <div className="mb-6 pt-4 border-t border-white/[0.08]">
            <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/40 block mb-2">
              Key Capabilities
            </span>
            <ul className="space-y-1.5 text-xs text-white/70 font-sans">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#DAAF37]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="pt-2">
        {isExternal ? (
          <Button href={ctaTarget} variant="secondary" size="md" className="w-full">
            {ctaText}
          </Button>
        ) : (
          <Button to={ctaTarget} variant="secondary" size="md" className="w-full">
            {ctaText}
          </Button>
        )}
      </div>
    </GlassCard>
  );
};
