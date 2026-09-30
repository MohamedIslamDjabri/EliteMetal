'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Phone, Menu, X, ArrowRight, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';
import { SITE_CONFIG, NAV_ITEMS } from '@/constants/data';
import { useAiAssistant } from '@/components/ai/AiAssistantContext';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const { openChat, openVoiceCall } = useAiAssistant();

  // Close mobile menu when pathname changes
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-white/10 transition-colors">
        <div className="h-20 w-full px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto flex items-center justify-between gap-4 lg:gap-6">
          {/* Logo & Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tertiary"
          >
            <div className="relative h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center">
              <Image
                src={SITE_CONFIG.logoUrl}
                alt={`${SITE_CONFIG.name} Brand Logo`}
                width={36}
                height={36}
                className="h-8 w-auto object-contain"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-headline-md text-xl sm:text-2xl tracking-tight text-on-surface font-normal">
              {SITE_CONFIG.brandName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-6" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-2 font-label-caps text-[11px] uppercase tracking-[0.14em] transition-colors duration-200 ${
                    active
                      ? 'text-tertiary border-b border-tertiary font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-tertiary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            {/* Phone */}
            <a
              href={SITE_CONFIG.phoneRaw}
              className="hidden md:flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-colors"
              aria-label={`Call ${SITE_CONFIG.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-tertiary" />
              <span className="font-label-md text-xs sm:text-[13px] tracking-wider font-medium">
                {SITE_CONFIG.phone}
              </span>
            </a>

            {/* AI Assistant Quick Trigger */}
            <button
              type="button"
              onClick={() => openChat()}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 bg-surface-container hover:bg-surface-bright text-tertiary border border-tertiary/40 font-label-caps text-[10px] uppercase tracking-wider transition-colors"
              title="Chat with AI Architectural Specialist"
            >
              <Sparkles className="w-3.5 h-3.5 text-tertiary" />
              <span>AI Concierge</span>
            </button>

            {/* Primary CTA */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-5 sm:px-6 py-2.5 bg-primary-container border border-tertiary/60 hover:border-tertiary text-tertiary hover:bg-tertiary hover:text-on-tertiary font-label-caps text-[11px] uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(240,189,137,0.06)]"
            >
              {SITE_CONFIG.primaryCta}
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-on-surface hover:text-tertiary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tertiary"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-40 bg-surface-container-lowest/98 backdrop-blur-2xl pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-white/10">
              <span className="w-1.5 h-1.5 bg-tertiary"></span>
              <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
                Architectural Menu
              </span>
            </div>

            <nav className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href, item.exact);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 text-lg font-headline-md border-b border-white/5 flex items-center justify-between transition-colors ${
                      active ? 'text-tertiary font-medium pl-2' : 'text-on-surface hover:text-tertiary'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className={`w-4 h-4 ${active ? 'text-tertiary' : 'text-outline'}`} />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 space-y-3 border-t border-white/10">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openChat();
                }}
                className="py-3 bg-surface-container border border-tertiary/40 text-tertiary font-label-caps text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Chat</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openVoiceCall();
                }}
                className="py-3 bg-surface-container-high border border-tertiary/60 text-white font-label-caps text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5 text-tertiary" />
                <span>AI Call</span>
              </button>
            </div>

            <a
              href={SITE_CONFIG.phoneRaw}
              className="flex items-center justify-center gap-2 w-full py-3 bg-surface-container border border-white/15 text-on-surface font-label-caps text-xs uppercase tracking-wider"
            >
              <Phone className="w-3.5 h-3.5 text-tertiary" />
              <span>Direct: {SITE_CONFIG.phone}</span>
            </a>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-tertiary text-on-tertiary font-label-caps text-xs uppercase tracking-wider font-semibold shadow-lg"
            >
              <span>{SITE_CONFIG.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center justify-center gap-2 text-outline text-xs pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-tertiary" />
              <span>50-Year Non-Prorated Warranty</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
