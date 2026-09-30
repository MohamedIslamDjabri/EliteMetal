import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, NAV_ITEMS } from '@/constants/data';

export default function Footer() {
  const servicesList = [
    { label: "Standing Seam Metal", href: "/metal-roofing" },
    { label: "Concealed Fastener Systems", href: "/metal-roofing#profiles-spec" },
    { label: "Copper Roofing", href: "/roofing-materials" },
    { label: "Architectural Metal Panels", href: "/roofing-materials" },
    { label: "Precision Installation", href: "/residential-roofing" },
    { label: "Commercial Envelopes", href: "/commercial-roofing" },
  ];

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-white/10">
      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-4 pr-0 lg:pr-8 flex flex-col justify-between">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative h-8 w-8 flex items-center justify-center">
                  <Image
                    src={SITE_CONFIG.logoUrl}
                    alt={`${SITE_CONFIG.name} Brand Logo`}
                    width={32}
                    height={32}
                    className="h-8 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-headline-md text-xl sm:text-2xl text-on-surface font-normal">
                  {SITE_CONFIG.name}
                </span>
              </Link>
              <p className="font-body-md text-on-surface-variant leading-relaxed max-w-sm font-light">
                {SITE_CONFIG.motto} Premium architectural metal roofing engineered for durability,
                thermal efficiency, and generational permanence.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-tertiary"></span>
              <span className="font-label-caps text-xs uppercase text-tertiary tracking-widest">
                Architectural Division • Austin & Nationwide
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="font-label-caps text-xs uppercase text-tertiary tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 font-body-sm text-on-surface-variant">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-on-surface transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3">
            <h3 className="font-label-caps text-xs uppercase text-tertiary tracking-widest mb-4">
              Services & Systems
            </h3>
            <ul className="space-y-2.5 font-body-sm text-on-surface-variant">
              {servicesList.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="hover:text-on-surface transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <div className="space-y-1.5">
              <h3 className="font-label-caps text-xs uppercase text-tertiary tracking-widest mb-4">
                Contact & Hours
              </h3>
              <p className="font-body-sm text-on-surface">
                <span className="text-on-surface-variant">Phone: </span>
                <a
                  href={SITE_CONFIG.phoneRaw}
                  className="hover:text-tertiary transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </p>
              <p className="font-body-sm text-on-surface">
                <span className="text-on-surface-variant">Email: </span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-tertiary transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p className="font-body-sm text-on-surface">
                <span className="text-on-surface-variant">Hours: </span>
                {SITE_CONFIG.hours}
              </p>
              <p className="font-body-sm text-on-surface-variant pt-2 leading-relaxed">
                {SITE_CONFIG.address.street}
                <br />
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
              </p>
            </div>

            <div className="pt-3 border-t border-white/5">
              <h4 className="font-label-caps text-[10px] uppercase text-on-surface-variant tracking-wider mb-1.5">
                Certifications & Standards
              </h4>
              <p className="font-body-sm text-xs text-outline leading-relaxed">
                {SITE_CONFIG.certifications}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="relative pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="absolute top-0 left-0 w-24 h-[1px] bg-tertiary"></div>
          <p className="font-body-sm text-outline text-center md:text-left">
            Copyright © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 font-body-sm text-outline text-xs">
            <Link href="/contact" className="hover:text-tertiary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/contact" className="hover:text-tertiary transition-colors">
              Terms of Service
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/roofing-materials" className="hover:text-tertiary transition-colors">
              Architectural Specifications
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
