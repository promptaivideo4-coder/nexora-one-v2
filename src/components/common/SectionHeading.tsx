import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  align = 'center',
  className = '',
  as: HeadingTag = 'h2',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  const hasCustomMargin = className.includes('mb-') || className.includes('m-');
  const defaultMargin = hasCustomMargin ? '' : 'mb-6';

  return (
    <div className={`flex flex-col max-w-3xl ${defaultMargin} ${alignClasses} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-medium tracking-wide uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] animate-pulse" />
          {eyebrow}
        </div>
      )}

      <HeadingTag className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-[1.15]">
        {title}{' '}
        {titleAccent && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF6D6] via-[#F4D03F] to-[#DAAF37]">
            {titleAccent}
          </span>
        )}
      </HeadingTag>

      {subtitle && (
        <p className="mt-4 sm:mt-5 text-xs sm:text-base lg:text-lg text-white/70 leading-relaxed font-sans max-w-2xl font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};
