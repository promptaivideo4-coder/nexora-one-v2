import React from 'react';

export type StatusType = 'Core' | 'Demo' | 'Planned' | 'Illustrative';

export interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const styles = {
    Core: 'bg-[#DAAF37] text-[#0A0A0A] font-semibold border border-[#F4D03F]',
    Demo: 'bg-transparent text-[#F4D03F] border border-[#DAAF37]',
    Planned: 'bg-transparent text-white/60 border border-white/20',
    Illustrative: 'bg-transparent text-white/50 border border-dashed border-white/30',
  }[status];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-heading font-medium tracking-wide uppercase ${styles} ${className}`}
    >
      {status}
    </span>
  );
};
