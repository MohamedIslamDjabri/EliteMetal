'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ArrowRight, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';
import { SITE_CONFIG, NAV_ITEMS } from '@/constants/data';
import { useAiAssistant } from '@/components/ai/AiAssistantContext';
import BrandLogo from '@/components/common/BrandLogo';

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-white/10 transition-colors w-full">
        <div className="h-20 w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 max-w-[1440px] mx-auto flex items-center justify-between gap-3 lg:gap-4 xl:gap-6">
          {/* Logo & Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tertiary"
          >
            <div className="relative h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center shrink-0">
              <BrandLogo className="h-8 w-auto object-contain" size={32} />
            </div>
            <span className="font-headline-md text-xl sm:text-2xl tracking-tight text-on-surface font-normal whitespace-nowrap">
              {SITE_CONFIG.brandName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-3.5 2xl:gap-5" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-1.5 whitespace-nowrap font-label-caps text-[10.5px] 2xl:text-[11.5px] uppercase tracking-[0.08em] 2xl:tracking-[0.14em] transition-colors duration-200 ${
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
          <div className="flex items-center gap-2.5 sm:gap-3 lg:gap-4 shrink-0">
            {/* Phone: Full text on wide 2xl screens, sleek icon button on md-xl */}
            <a
              href={SITE_CONFIG.phoneRaw}
              className="hidden 2xl:flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-colors shrink-0 whitespace-nowrap"
              aria-label={`Call ${SITE_CONFIG.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-tertiary" />
              <span className="font-label-md text-xs tracking-wider font-medium">
                {SITE_CONFIG.phone}
              </span>
            </a>

            <a
              href={SITE_CONFIG.phoneRaw}
              className="hidden md:flex 2xl:hidden items-center justify-center p-2 rounded-none border border-white/10 hover:border-tertiary/60 bg-surface-container/60 hover:bg-surface-bright text-on-surface-variant hover:text-tertiary transition-colors shrink-0"
              title={`Call ${SITE_CONFIG.phone}`}
              aria-label={`Call ${SITE_CONFIG.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-tertiary" />
            </a>

            {/* AI Assistant Quick Trigger */}
            <button
              type="button"
              onClick={() => openChat()}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 bg-surface-container hover:bg-surface-bright text-tertiary border border-tertiary/40 font-label-caps text-[10px] sm:text-[10.5px] uppercase tracking-wider transition-colors shrink-0 whitespace-nowrap"
              title="Chat with AI Architectural Specialist"
            >
              <Sparkles className="w-3.5 h-3.5 text-tertiary" />
              <span className="hidden 2xl:inline">AI Concierge</span>
              <span className="2xl:hidden">AI Concierge</span>
            </button>

            {/* Primary CTA */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2.5 bg-primary-container border border-tertiary/60 hover:border-tertiary text-tertiary hover:bg-tertiary hover:text-on-tertiary font-label-caps text-[11px] uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(240,189,137,0.06)] shrink-0 whitespace-nowrap"
            >
              {SITE_CONFIG.primaryCta}
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-on-surface hover:text-tertiary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tertiary shrink-0"
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
