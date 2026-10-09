import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface GlobeBackgroundProps {
  className?: string;
  size?: number;
  glow?: boolean;
  speed?: number; // Duration in seconds for full 360deg rotation
  paused?: boolean;
}

export const GlobeBackground: React.FC<GlobeBackgroundProps> = React.memo(({
  className = '',
  size = 520,
  glow = true,
  speed = 60,
  paused = false,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isAnimated = !shouldReduceMotion && !paused;

  return (
    <div
      className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Ambient Gold Atmospheric Glow with Gentle Breathing Pulse */}
      {glow && (
        <motion.div
          animate={
            isAnimated
              ? {
                  scale: [1, 1.08, 1],
                  opacity: [0.75, 1, 0.75],
                }
              : false
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-radial from-[#DAAF37]/30 via-[#DAAF37]/10 to-transparent blur-[90px] rounded-full"
        />
      )}

      {/* SVG Globe with Luxury Tech Rotating Vectors */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-full drop-shadow-[0_0_45px_rgba(218,175,55,0.4)]"
      >
        <defs>
          <clipPath id="globeSphereClip">
            <circle cx="250" cy="250" r="200" />
          </clipPath>

          <linearGradient id="globeAtmosphereGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#F4D03F" stopOpacity="0.5" />
            <stop offset="85%" stopColor="#DAAF37" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#997517" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="orbitRingGradA" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F4D03F" stopOpacity="0" />
            <stop offset="25%" stopColor="#DAAF37" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#FFF2B2" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#997517" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="orbitRingGradB" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#DAAF37" stopOpacity="0" />
            <stop offset="35%" stopColor="#F4D03F" stopOpacity="0.75" />
            <stop offset="75%" stopColor="#FFF2B2" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#DAAF37" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="sphereCoreGlow" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#2A2412" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#141108" stopOpacity="0.98" />
            <stop offset="85%" stopColor="#080704" stopOpacity="1" />
            <stop offset="100%" stopColor="#040402" stopOpacity="1" />
          </radialGradient>

          <filter id="svgGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Stable Spherical Base */}
        <circle
          cx="250"
          cy="250"
          r="200"
          fill="url(#sphereCoreGlow)"
          stroke="#DAAF37"
          strokeWidth="2"
          strokeOpacity="0.65"
        />

        {/* Clipped Internal Rotating Globe Geometry */}
        <g clipPath="url(#globeSphereClip)">
          {/* Subtle Internal Latitude Grid Arcs */}
          <ellipse cx="250" cy="250" rx="200" ry="55" stroke="url(#globeAtmosphereGrad)" strokeWidth="1.4" opacity="0.8" />
          <ellipse cx="250" cy="180" rx="185" ry="42" stroke="url(#globeAtmosphereGrad)" strokeWidth="1" strokeDasharray="5 4" opacity="0.6" />
          <ellipse cx="250" cy="320" rx="185" ry="42" stroke="url(#globeAtmosphereGrad)" strokeWidth="1" strokeDasharray="5 4" opacity="0.6" />
          <ellipse cx="250" cy="120" rx="145" ry="28" stroke="url(#globeAtmosphereGrad)" strokeWidth="0.8" opacity="0.45" />
          <ellipse cx="250" cy="380" rx="145" ry="28" stroke="url(#globeAtmosphereGrad)" strokeWidth="0.8" opacity="0.45" />

          {/* Continuously Rotating Primary Planetary Mesh */}
          <motion.g
            style={{ transformOrigin: '250px 250px' }}
            animate={isAnimated ? { rotate: 360 } : { rotate: 0 }}
            transition={{
              duration: speed,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Longitude Elliptical Ribs */}
            <ellipse cx="250" cy="250" rx="175" ry="200" stroke="url(#globeAtmosphereGrad)" strokeWidth="1.2" opacity="0.75" />
            <ellipse cx="250" cy="250" rx="120" ry="200" stroke="url(#globeAtmosphereGrad)" strokeWidth="1.3" opacity="0.8" />
            <ellipse cx="250" cy="250" rx="60" ry="200" stroke="url(#globeAtmosphereGrad)" strokeWidth="1.1" opacity="0.7" />
            <line x1="250" y1="50" x2="250" y2="450" stroke="#F4D03F" strokeWidth="1.8" opacity="0.85" />

            {/* Constellation Network Nodes */}
            {[
              { cx: 180, cy: 190, r: 3.5 },
              { cx: 310, cy: 220, r: 4 },
              { cx: 250, cy: 250, r: 5 },
              { cx: 160, cy: 290, r: 3 },
              { cx: 340, cy: 300, r: 3.5 },
              { cx: 220, cy: 145, r: 3 },
              { cx: 290, cy: 360, r: 3 },
              { cx: 135, cy: 235, r: 2.5 },
              { cx: 365, cy: 245, r: 2.5 },
              { cx: 380, cy: 170, r: 3.5 },
              { cx: 200, cy: 335, r: 3 },
            ].map((node, i) => (
              <g key={i}>
                <circle cx={node.cx} cy={node.cy} r={node.r * 2.5} fill="#DAAF37" opacity="0.3" filter="url(#svgGoldGlow)" />
                <circle cx={node.cx} cy={node.cy} r={node.r} fill="#FFF2B2" />
              </g>
            ))}

            {/* Inter-Node Golden Arc Lines */}
            <path d="M180 190 L250 250 L310 220 L340 300" stroke="#F4D03F" strokeWidth="1.3" strokeOpacity="0.8" />
            <path d="M160 290 L250 250 L220 145" stroke="#F4D03F" strokeWidth="1.1" strokeOpacity="0.7" />
            <path d="M135 235 L180 190" stroke="#DAAF37" strokeWidth="0.9" strokeOpacity="0.55" strokeDasharray="3 3" />
            <path d="M310 220 L365 245" stroke="#DAAF37" strokeWidth="0.9" strokeOpacity="0.55" strokeDasharray="3 3" />
            <path d="M220 145 L380 170 L365 245" stroke="#FFF2B2" strokeWidth="1.2" strokeOpacity="0.85" />
          </motion.g>

          {/* Internal Atmospheric Rim Shimmer */}
          <circle
            cx="250"
            cy="250"
            r="198"
            stroke="url(#globeAtmosphereGrad)"
            strokeWidth="3.5"
            opacity="0.5"
            fill="none"
          />
        </g>

        {/* Glowing Horizon Sun Flare Sconce */}
        <circle cx="380" cy="150" r="16" fill="#FFF2B2" filter="url(#svgGoldGlow)" opacity="0.85" />
        <circle cx="380" cy="150" r="40" fill="#DAAF37" opacity="0.25" />

        {/* Counter-Rotating Orbital Ring 1 (Tilted -22deg) */}
        <motion.g
          style={{ transformOrigin: '250px 250px' }}
          animate={isAnimated ? { rotate: -360 } : { rotate: 0 }}
          transition={{
            duration: speed * 1.35,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <ellipse
            cx="250"
            cy="250"
            rx="230"
            ry="85"
            stroke="url(#orbitRingGradA)"
            strokeWidth="1.4"
            strokeDasharray="14 8 4 8"
            opacity="0.85"
            transform="rotate(-22 250 250)"
          />
          {/* Orbital Satellite Node A */}
          <circle cx="480" cy="250" r="3.5" fill="#FFF2B2" opacity="0.95" transform="rotate(-22 250 250)" filter="url(#svgGoldGlow)" />
          <circle cx="480" cy="250" r="8" fill="#DAAF37" opacity="0.4" transform="rotate(-22 250 250)" />
        </motion.g>

        {/* Slow Secondary Orbital Ring 2 (Tilted +35deg) */}
        <motion.g
          style={{ transformOrigin: '250px 250px' }}
          animate={isAnimated ? { rotate: 360 } : { rotate: 0 }}
          transition={{
            duration: speed * 1.8,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <ellipse
            cx="250"
            cy="250"
            rx="245"
            ry="95"
            stroke="url(#orbitRingGradB)"
            strokeWidth="1.1"
            strokeDasharray="8 6"
            opacity="0.5"
            transform="rotate(35 250 250)"
          />
          {/* Orbital Satellite Node B */}
          <circle cx="250" cy="155" r="2.5" fill="#F4D03F" opacity="0.85" transform="rotate(35 250 250)" filter="url(#svgGoldGlow)" />
        </motion.g>
      </svg>
    </div>
  );
});

GlobeBackground.displayName = 'GlobeBackground';
