import React from 'react';
import { GlassCard } from './GlassCard';
import { StatusBadge, StatusType } from './StatusBadge';
import { Button } from './Button';
import { DeviceMockup } from './DeviceMockup';
import { ExternalLink } from 'lucide-react';

export interface ProductCardProps {
  id: string;
  name: string;
  oneLiner: string;
  audience?: string;
  benefits?: string;
  status: StatusType;
  demoUrl?: string | null;
  imageSrc?: string;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  oneLiner,
  audience,
  benefits,
  status,
  demoUrl,
  imageSrc,
  className = '',
}) => {
  return (
    <GlassCard id={id} className={`p-6 flex flex-col justify-between ${className}`}>
      <div>
        {/* Top Header with Status Badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="text-lg sm:text-xl font-heading font-semibold text-white tracking-tight leading-snug">
            {name}
          </h3>
          <StatusBadge status={status} />
        </div>

        {/* Device Preview Mockup Area */}
        <div className="my-4 py-2 flex justify-center">
          <DeviceMockup
            variant="laptop"
            title={name}
            subtitle={oneLiner}
            category={status === 'Demo' ? 'Demonstration' : 'Platform'}
            imageSrc={imageSrc}
          />
        </div>

        {/* Product Tagline & Details */}
        <p className="text-xs sm:text-sm text-[#DAAF37] font-sans font-medium mb-3">
          {oneLiner}
        </p>

        {benefits && (
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-4 text-xs font-sans text-white/70 leading-relaxed">
            <span className="text-white/40 block mb-1">Key Capabilities:</span>
            {benefits}
          </div>
        )}

        {audience && (
          <div className="text-xs text-white/50 font-sans mb-4">
            <span className="text-white/60">Audience:</span> {audience}
          </div>
        )}
      </div>

      {/* Action CTA Button */}
      <div className="pt-2">
        {demoUrl ? (
          <Button
            href={demoUrl}
            variant="primary"
            size="sm"
            className="w-full"
            icon={<ExternalLink className="w-3.5 h-3.5" />}
          >
            Open Demo →
          </Button>
        ) : (
          <Button
            to={`/verticals#${id}`}
            variant="secondary"
            size="sm"
            className="w-full"
          >
            View Vertical
          </Button>
        )}
      </div>
    </GlassCard>
  );
};
