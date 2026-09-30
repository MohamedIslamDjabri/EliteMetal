'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/data';

export default function MobileStickyCta() {
  const pathname = usePathname();

  // If already on contact/quote page, hide sticky bar
  if (pathname === '/contact') return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-lg border-t border-white/10 px-4 py-3 shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-3 max-w-lg mx-auto">
        <a
          href={SITE_CONFIG.phoneRaw}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-surface-container border border-white/15 text-on-surface hover:text-tertiary font-label-caps text-xs uppercase transition-colors shrink-0"
          aria-label={`Call ${SITE_CONFIG.phone}`}
        >
          <Phone className="w-4 h-4 text-tertiary" />
          <span className="hidden xs:inline">Call</span>
        </a>

        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-tertiary text-on-tertiary font-label-caps text-xs uppercase tracking-wider font-semibold shadow-md active:opacity-90 transition-opacity"
        >
          <span>{SITE_CONFIG.primaryCta}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
