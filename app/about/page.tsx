import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, ShieldCheck, Award, CheckCircle2, Users, Compass, Hammer } from 'lucide-react';
import { SITE_CONFIG, KEY_METRICS } from '@/constants/data';

export const metadata: Metadata = {
  title: 'About EliteMetal Roofing | Architectural Sheet Metal Guild',
  description:
    'Dedicated to the preservation of European-trained architectural sheet metalcraft and modern structural roofing physics. 25+ years of master craftsmanship.',
};

export default function AboutPage() {
  const leadership = [
    {
      name: 'Gabriel Vance',
      role: 'Founder & Master Metallurgist',
      bio: 'Trained under European tinsmith guilds with over 30 years specializing in zinc, natural copper folding, and double mechanical standing seams.',
    },
    {
      name: 'Elena Rostova, PE',
      role: 'Director of Structural Engineering',
      bio: 'Licensed structural engineer specializing in dynamic wind uplift dynamics (UL 580 Class 90) and high-altitude thermal expansion envelopes.',
    },
    {
      name: 'Julian Hayes',
      role: 'Head of Architectural Estimating',
      bio: 'Coordinates directly with AIA member firms and General Contractors on CSI Division 07 submittals, Revit BIM models, and value-engineering.',
    },
  ];

  const standards = [
    {
      title: 'In-House Guild Artisans',
      description:
        'We never subcontract roofing labor. Every roll-former, seamer, and tinsmith is a full-time, factory-certified employee trained to sub-millimeter tolerances.',
      icon: Hammer,
    },
    {
      title: 'Continuous Cold Roll-Forming',
      description:
        'Our mobile factory units travel directly to the jobsite, fabricating seamless panels up to 120 feet in continuous unbroken runs from ridge to eave.',
      icon: Compass,
    },
    {
      title: 'Hydrostatic Expansion Physics',
      description:
        'We design floating clip assemblies that give roofs the room to expand and contract smoothly in extreme heat and cold, preventing oil-canning forever.',
      icon: ShieldCheck,
    },
    {
      title: 'Cradle-to-Cradle Stewardship',
      description:
        'Our metals are 100% recyclable, containing up to 95% recycled content. Zero asphalt waste sent to landfills.',
      icon: Award,
    },
  ];

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* 1. ABOUT HERO */}
      <section className="relative w-full overflow-hidden bg-primary-container -mt-20 pt-36 pb-20 lg:pt-44 lg:pb-28 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-tertiary"></span>
            <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
              Company Story &amp; Heritage
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="font-headline-hero text-4xl sm:text-5xl lg:text-7xl text-on-surface tracking-tight font-light leading-[1.08]">
                Craftsmanship as an <br />
                <span className="italic font-normal text-tertiary">Unbroken Commitment.</span>
              </h1>
              <p className="font-body-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
                EliteMetal was founded on a singular conviction: that a roof should never be a disposable
                building material, but rather a permanent sculptural masterpiece engineered to protect
                for generations.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 bg-surface-container-low border-l-2 border-tertiary shadow-xl">
              <p className="font-headline-md text-lg text-white font-normal italic">
                &ldquo;{SITE_CONFIG.motto}&rdquo;
              </p>
              <p className="font-label-caps text-[10px] text-tertiary uppercase tracking-wider mt-2">
                Guiding Principle Since 1999
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STORY SPREAD */}
      <section className="w-full bg-surface-dim py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
                Our Genesis
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-light leading-tight">
                Rejecting the 15-Year Disposable Cycle.
              </h2>
              <div className="space-y-4 text-on-surface-variant font-body-md font-light leading-relaxed">
                <p>
                  In the late 1990s, the American roofing industry became dominated by disposable
                  petroleum asphalt shingles engineered to fail within a decade and a half. Master
                  architects were creating generational residences, yet topping them with temporary
                  coverings prone to algae, curling, and wind failure.
                </p>
                <p>
                  EliteMetal was established in Austin, Texas to bring European architectural tinsmithing
                  disciplines to contemporary American architecture. We invested in German-engineered
                  continuous roll-forming equipment, specialized standing seam tools, and established an
                  in-house apprentice guild where artisans train for years before leading a field crew.
                </p>
                <p>
                  Today, our assemblies protect over 1,500 prestigious private residences, corporate
                  campuses, and luxury resorts across Texas, Colorado, California, and the East Coast.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs font-label-caps uppercase text-outline">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-tertiary" />
                  <span>Licensed &amp; Bonded</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-tertiary" />
                  <span>OSHA 30 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-tertiary" />
                  <span>ASTM E1592 Compliant</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] bg-surface-container overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw45nt7CMAEPB93-ItEQ7FxpWEOakbSI-SHtR56shBnKPBoxXpqmppdQXcZc4gwy68mibgoX1loyjmXCwqDCsmW8DlZseQF1iQG-Ic3PaYktrkPAOosyr_dUAtGW-zw76OTZPrW4aK_7_PAPv-aWHp3fHWtASr3MLQ1ioADABmWY0J5VPbVnS4D7jScrgdMTDK0vXZAy44PZ-kqxVwuzPjV34zVykCPi7MorFowy-0Teuoo4SA6-8n"
                  alt="EliteMetal master tinsmith reviewing architectural drawings on site"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 bg-surface-container-lowest border border-white/10 shadow-xl hidden sm:block max-w-xs">
                <span className="font-headline-md text-2xl text-tertiary font-normal">25+</span>
                <p className="font-label-caps text-[10px] text-outline uppercase mt-0.5">
                  Years of Uncompromising Sheet Metal Mastery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE STANDARDS */}
      <section className="w-full bg-surface-container-lowest py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
              Operational Standards
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-light">
              The Four Tenets of Elite Craftsmanship
            </h2>
            <p className="font-body-md text-on-surface-variant font-light leading-relaxed">
              Every detail of an EliteMetal commission is governed by strict protocols that safeguard
              structural integrity and architectural fidelity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map((std, idx) => {
              const Icon = std.icon;
              return (
                <div
                  key={idx}
                  className="bg-surface-container-low border border-white/10 p-8 space-y-4 hover:border-tertiary transition-colors"
                >
                  <div className="w-12 h-12 bg-surface-container border border-tertiary/30 flex items-center justify-center text-tertiary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline-md text-xl text-on-surface font-normal">
                    {std.title}
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                    {std.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP TEAM */}
      <section className="w-full bg-surface-container py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary block mb-2">
                Guild Directors
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-light">
                Leadership in Architectural Metallurgy
              </h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md font-light leading-relaxed">
              Direct accountability from master tradespeople and licensed professional engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, idx) => (
              <div
                key={idx}
                className="bg-surface-container-low border border-white/10 p-8 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary-container border border-tertiary/40 flex items-center justify-center text-tertiary font-headline-md text-lg">
                    {leader.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <h3 className="font-headline-md text-xl text-on-surface font-normal">
                      {leader.name}
                    </h3>
                    <p className="font-label-caps text-xs text-tertiary uppercase tracking-wider mt-1">
                      {leader.role}
                    </p>
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 font-label-caps text-[10px] uppercase text-outline">
                  Certified Master Tradesperson
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRE-FOOTER CTA */}
      <section className="w-full bg-primary-container py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-6">
          <h2 className="font-headline-xl text-3xl sm:text-4xl text-white font-light max-w-2xl mx-auto">
            Experience the EliteMetal Difference.
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto font-light leading-relaxed">
            Schedule an architectural blueprint review or visit our Austin sheet metal fabrication
            facility.
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
              className="px-8 py-4 bg-transparent border border-white/20 hover:border-tertiary text-white hover:text-tertiary font-label-caps text-xs uppercase tracking-widest transition-colors"
            >
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
