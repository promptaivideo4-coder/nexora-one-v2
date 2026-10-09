import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  target,
  rel,
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'right',
}) => {
  // Sizing tokens
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }[size];

  // Variant tokens
  const variantClasses = {
    // 1. PRIMARY BUTTON: Gold gradient background, Black text, Rounded pill shape, Soft gold glow/shadow, Premium luxury appearance
    primary:
      'bg-gradient-to-r from-[#F4D03F] via-[#E8BE35] to-[#DAAF37] hover:from-[#FFF2B2] hover:via-[#F4D03F] hover:to-[#DAAF37] text-[#0A0A0A] font-heading font-bold shadow-[0_4px_24px_rgba(218,175,55,0.4)] hover:shadow-[0_6px_32px_rgba(218,175,55,0.65)] border border-[#FFF2B2]/50 tracking-wide',

    // 2. SECONDARY BUTTON: Transparent/near-black background, 1px gold outline, White text, Rounded pill shape, Subtle hover glow
    secondary:
      'bg-[#0A0A0A]/70 hover:bg-black/90 text-white hover:text-[#FFF5D0] border border-[#DAAF37]/60 hover:border-[#DAAF37] font-heading font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_24px_rgba(218,175,55,0.35)] backdrop-blur-md tracking-wide',

    // Ghost variant
    ghost:
      'bg-transparent text-[#F5F5F5] hover:text-[#F4D03F] hover:bg-white/5 border border-transparent font-heading font-medium',
  }[variant];

  const baseClasses = `inline-flex items-center justify-center rounded-full transition-all duration-300 transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DAAF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.04] ${variantClasses} ${sizeClasses} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2 inline-flex items-center">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2 inline-flex items-center">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    const safeRel = isExternal ? rel || 'noopener noreferrer' : rel;
    const safeTarget = isExternal ? target || '_blank' : target;

    return (
      <a href={href} target={safeTarget} rel={safeRel} className={baseClasses} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};
