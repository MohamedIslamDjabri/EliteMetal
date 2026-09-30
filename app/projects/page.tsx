import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MapPin, Award, CheckCircle2 } from 'lucide-react';
import ProjectGallery from '@/components/projects/ProjectGallery';
import { PROJECTS_DATA, SITE_CONFIG } from '@/constants/data';

export const metadata: Metadata = {
  title: 'Architectural Projects Portfolio | EliteMetal Roofing',
  description:
    'A curated monograph of private residential estates, contemporary compounds, and landmark commercial installations across North America.',
};

export default function ProjectsPage() {
  const featured = PROJECTS_DATA[0]; // The Lakeview Residence

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* 1. PROJECTS HERO */}
      <section className="relative w-full overflow-hidden bg-primary-container -mt-20 pt-36 pb-20 lg:pt-44 lg:pb-24 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-tertiary"></span>
            <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
              Monograph &amp; Case Studies
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <h1 className="font-headline-hero text-4xl sm:text-5xl lg:text-7xl text-on-surface tracking-tight font-light leading-[1.08]">
                Architectural <br />
                <span className="italic font-normal text-tertiary">Works &amp; Commissions.</span>
              </h1>
              <p className="font-body-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
                A curated monograph of private residential estates, luxury hospitality pavilions, and
                landmark commercial commissions executed to master metallurgy tolerances.
              </p>
            </div>

            <div className="flex items-center gap-6 font-label-caps text-xs uppercase text-outline">
              <div>
                <span className="font-headline-md text-2xl text-on-surface block font-normal">
                  1,500+
                </span>
                <span>Commissions Built</span>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <div>
                <span className="font-headline-md text-2xl text-tertiary block font-normal">
                  50-Year
                </span>
                <span>Warranty Integrity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED ARCHITECTURAL MONOGRAPH */}
      <section className="w-full bg-surface-dim py-16 lg:py-24 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <span className="font-label-caps text-xs uppercase text-tertiary tracking-widest">
              Selected Landmark Commission
            </span>
            <span className="font-label-caps text-xs uppercase text-outline">
              Award of Excellence
            </span>
          </div>

          <div className="bg-surface-container-low border border-white/10 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Large Image */}
              <div className="lg:col-span-8 relative min-h-[380px] lg:min-h-[540px] bg-surface-container">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent lg:hidden"></div>
                <div className="absolute top-6 left-6 px-3 py-1.5 bg-surface-container-lowest/90 backdrop-blur-md border border-tertiary/30 text-xs font-label-caps text-tertiary uppercase">
                  Featured Case Study
                </div>
              </div>

              {/* Monograph Details */}
              <div className="lg:col-span-4 p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-label-caps text-outline uppercase">
                    <MapPin className="w-3.5 h-3.5 text-tertiary" />
                    <span>{featured.location}</span>
                  </div>

                  <h2 className="font-headline-lg text-2xl sm:text-3xl text-on-surface font-normal">
                    {featured.title}
                  </h2>

                  <p className="font-body-md text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                    {featured.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/10 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-outline">Roofing System:</span>
                      <span className="text-on-surface font-medium">{featured.roofingSystem}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-outline">Substrate Metal:</span>
                      <span className="text-on-surface font-medium">{featured.material}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-outline">Scale:</span>
                      <span className="text-tertiary font-semibold">{featured.squareFeet}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-outline">Architect:</span>
                      <span className="text-on-surface font-medium">{featured.architect}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 bg-tertiary hover:bg-white text-on-tertiary font-label-caps text-xs uppercase tracking-wider transition-colors font-semibold"
                >
                  <span>Inquire About Similar Build</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE PROJECT GALLERY */}
      <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto">
          <ProjectGallery showFilters={true} />
        </div>
      </section>

      {/* 4. PRE-FOOTER CTA */}
      <section className="w-full bg-surface-container py-20 lg:py-24 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-px bg-tertiary"></span>
            <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
              Have an Upcoming Project?
            </span>
            <span className="w-6 h-px bg-tertiary"></span>
          </div>

          <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-light max-w-2xl mx-auto">
            Bring Elite Metallurgy to Your Next Blueprint.
          </h2>

          <p className="font-body-md text-on-surface-variant max-w-xl mx-auto font-light leading-relaxed">
            We partner with architects, estate developers, and homeowners from schematic design
            through completed installation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-tertiary hover:bg-white text-on-tertiary font-label-caps text-xs uppercase tracking-widest transition-colors font-semibold shadow-lg"
            >
              {SITE_CONFIG.primaryCta}
            </Link>
            <Link
              href="/roofing-materials"
              className="px-8 py-4 bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-caps text-xs uppercase tracking-widest transition-colors border border-white/10"
            >
              Explore Materials &amp; Finishes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
