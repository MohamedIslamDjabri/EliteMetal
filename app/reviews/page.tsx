import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Star, ShieldCheck, Quote, ArrowRight } from 'lucide-react';
import TestimonialCarousel from '@/components/reviews/TestimonialCarousel';
import { TESTIMONIALS_DATA, SITE_CONFIG } from '@/constants/data';

export const metadata: Metadata = {
  title: 'Client Reviews & Endorsements | EliteMetal Roofing',
  description:
    'Verified testimonials from luxury estate owners, AIA architects, and commercial developers who trust EliteMetal Roofing.',
};

export default function ReviewsPage() {
  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* 1. REVIEWS HERO */}
      <section className="relative w-full overflow-hidden bg-primary-container -mt-20 pt-36 pb-20 lg:pt-44 lg:pb-24 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-tertiary"></span>
            <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
              Verified Client Endorsements
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <h1 className="font-headline-hero text-4xl sm:text-5xl lg:text-7xl text-on-surface tracking-tight font-light leading-[1.08]">
                Trusted by Those Who <br />
                <span className="italic font-normal text-tertiary">Demand Perfection.</span>
              </h1>
              <p className="font-body-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
                Our reputation is measured in decades, not seasons. Read unedited reviews from luxury
                homeowners, design principals, and general contractors.
              </p>
            </div>

            {/* Rating summary */}
            <div className="p-6 bg-surface-container-low border border-tertiary/40 shadow-xl space-y-2">
              <div className="flex items-center gap-1 text-tertiary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-tertiary" />
                ))}
              </div>
              <p className="font-headline-md text-2xl text-on-surface font-normal">
                4.97 out of 5.0
              </p>
              <p className="font-label-caps text-[10px] text-outline uppercase tracking-wider">
                Across 350+ Documented Commissions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE FEATURED CAROUSEL */}
      <section className="w-full bg-surface-dim py-16 lg:py-24 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-8 flex items-center justify-between">
            <span className="font-label-caps text-xs uppercase text-tertiary tracking-widest">
              Featured Testimonial Spotlight
            </span>
            <span className="font-body-sm text-xs text-outline">Interactive Carousel</span>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* 3. REVIEWS GRID */}
      <section className="w-full bg-surface-container-lowest py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-16">
            <span className="font-label-caps text-xs uppercase text-tertiary tracking-widest block mb-2">
              All Testimonials
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-light">
              Client &amp; Architect Endorsements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="bg-surface-container-low border border-white/10 p-8 flex flex-col justify-between hover:border-tertiary/60 transition-colors shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-tertiary">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-tertiary" />
                      ))}
                    </div>
                    <span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">
                      Verified Client
                    </span>
                  </div>

                  <p className="font-body-md text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 space-y-1">
                  <h4 className="font-headline-md text-base text-white font-normal">{t.clientName}</h4>
                  <p className="font-label-caps text-[10px] text-tertiary uppercase tracking-wider">
                    {t.role} • {t.location}
                  </p>
                  <p className="font-body-sm text-[11px] text-outline pt-1">
                    Project: {t.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRE-FOOTER CTA */}
      <section className="w-full bg-surface-container py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-6">
          <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-light max-w-2xl mx-auto">
            Ready to Begin Your Roofing Commission?
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto font-light leading-relaxed">
            Our architectural sheet metal estimators will review your property drawings and provide a
            detailed, non-obligatory proposal.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-tertiary hover:bg-white text-on-tertiary font-label-caps text-xs uppercase tracking-widest transition-colors font-semibold shadow-lg"
            >
              {SITE_CONFIG.primaryCta}
            </Link>
            <a
              href={SITE_CONFIG.phoneRaw}
              className="px-8 py-4 bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-caps text-xs uppercase tracking-widest transition-colors border border-white/10"
            >
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
