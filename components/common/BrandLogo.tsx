import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export default function BrandLogo({ className = 'h-8 w-auto', size = 32 }: BrandLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      width={size}
      height={size}
      className={className}
      aria-label="EliteMetal Roofing Brand Logo"
    >
      {/* Architectural Standing Seam Metal Crest */}
      <path d="M6 46L32 10L58 46H46L32 26L18 46H6Z" fill="#bcc7dd" />
      <path d="M32 10L46 46H36L32 26V10Z" fill="#f0bd89" />
      <path d="M32 10L18 46H28L32 26V10Z" fill="#8f9097" opacity="0.8" />
      {/* Center Vertical Raised Standing Seam */}
      <line x1="32" y1="8" x2="32" y2="52" stroke="#f0bd89" strokeWidth="2.5" strokeLinecap="square" />
      {/* Base Grounding Hairline */}
      <line x1="10" y1="52" x2="54" y2="52" stroke="#f0bd89" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}
