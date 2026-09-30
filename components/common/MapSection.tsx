import React from 'react';
import { MapPin, Navigation, ExternalLink, Compass } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/data';

export default function MapSection() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    SITE_CONFIG.address.full
  )}`;

  return (
    <div className="relative w-full h-[380px] lg:h-[460px] bg-surface-container-lowest border border-white/10 overflow-hidden group">
      {/* Blueprint Grid & Vector Map Styling */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full text-tertiary" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative Architectural Contours */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <svg
          viewBox="0 0 800 500"
          className="w-full h-full max-w-4xl text-primary"
          fill="none"
          stroke="currentColor"
        >
          {/* Stylized river & avenue vectors */}
          <path
            d="M 50 250 Q 200 200 400 280 T 750 210"
            strokeWidth="2"
            strokeDasharray="6 4"
            className="text-tertiary"
          />
          <path d="M 120 40 L 120 460" strokeWidth="1" />
          <path d="M 280 40 L 280 460" strokeWidth="1" />
          <path d="M 400 40 L 400 460" strokeWidth="1.5" className="text-white/40" />
          <path d="M 560 40 L 560 460" strokeWidth="1" />
          <path d="M 700 40 L 700 460" strokeWidth="1" />
          <circle cx="400" cy="250" r="16" fill="rgba(240, 189, 137, 0.15)" stroke="#f0bd89" />
          <circle cx="400" cy="250" r="4" fill="#f0bd89" />
        </svg>
      </div>

      {/* Center Radar Marker */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-tertiary/20 flex items-center justify-center animate-ping absolute"></div>
          <div className="relative z-10 w-10 h-10 bg-primary-container border border-tertiary flex items-center justify-center text-tertiary shadow-xl">
            <MapPin className="w-5 h-5 text-tertiary" />
          </div>
          <div className="mt-3 px-3 py-1.5 bg-surface-container-lowest/95 backdrop-blur-md border border-tertiary/40 shadow-xl text-center">
            <p className="font-headline-md text-xs text-white">EliteMetal Headquarters</p>
            <p className="font-body-sm text-[10px] text-tertiary">30°16&apos;02.8&quot;N 97°44&apos;35.1&quot;W</p>
          </div>
        </div>
      </div>

      {/* Inset Information Badge */}
      <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md p-5 bg-surface-container-lowest/90 backdrop-blur-md border border-white/10 shadow-2xl">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-tertiary" />
            <span className="font-label-caps text-[10px] uppercase text-tertiary tracking-wider">
              Architectural Design Studio
            </span>
          </div>
          <span className="font-body-sm text-[10px] text-outline">Austin, TX</span>
        </div>

        <p className="font-body-sm text-xs text-on-surface-variant font-light mb-3">
          {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}{' '}
          {SITE_CONFIG.address.zip}
        </p>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-label-caps text-[11px] uppercase text-tertiary hover:text-white transition-colors"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Get Driving Directions</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
