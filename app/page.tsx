import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, Phone, Shield, ArrowUpRight, Star, CheckCircle2, Award } from 'lucide-react';
import AiBookingCard from '@/components/ai/AiBookingCard';
import { SITE_CONFIG, KEY_METRICS } from '@/constants/data';

export const metadata: Metadata = {
  title: 'EliteMetal Roofing | Premium Architectural Metal Roofing',
  description:
    'Roofing designed to last. Crafted to be seen. Engineered standing seam, architectural zinc, copper, and commercial metal roofing systems.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-primary-container -mt-20 pt-20">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-40 scale-105 transition-transform duration-1000 ease-out"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHK0k1v68xzVTKChKb6PXaJr2PkQOsd41dA6lZ7kGGuu-h-GvDFshp3Z3YrF2uJH0zfo7sEz4LNQPj-RwrdcN3XF1Av53aGGjoqaVJPvdS2GFlg3xGqXpMPKaxL6Jp23o237T9omJsZp3b1c5d5lrRCGWTC4JH2v5ikoZ_uddFL9NYGHYaxIC6Je5r_PHeSoTxnSKa-YMJxvYWky5hG-LodIDO8rGozDRH5nvCVs5UG8In0nQLQQeN')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-primary-container/80 to-surface-container-lowest/60"></div>
          <div className="absolute inset-y-0 left-12 w-px bg-gradient-to-b from-transparent via-tertiary/20 to-transparent hidden xl:block"></div>
          <div className="absolute inset-y-0 right-12 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden xl:block"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 min-h-[calc(100vh-5rem)] flex flex-col justify-end pb-16 lg:pb-24 pt-16">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-surface-container-lowest/80 backdrop-blur-md border border-tertiary/40">
              <span className="w-1.5 h-1.5 bg-tertiary"></span>
              <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
                Premium Architectural Metal Roofing
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-headline-hero text-white tracking-tight">
                Metal Roofing, <br className="hidden sm:inline" />
                <span className="italic font-light text-tertiary-fixed-dim">Elevated.</span>
              </h1>
              <p className="font-body-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
                Engineered systems uniting structural permanence, reflective thermal dynamics, and
                sculptural architectural integrity.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="w-8 h-px bg-tertiary"></div>
              <span className="font-label-caps text-secondary text-xs uppercase tracking-widest">
                Residential • Commercial • Architectural Envelopes
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-9 py-4 bg-tertiary hover:bg-white text-on-tertiary font-label-caps text-xs uppercase tracking-widest transition-colors duration-300 shadow-xl font-semibold"
              >
                {SITE_CONFIG.primaryCta}
              </Link>
              <Link
                href="#systems"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 hover:border-tertiary text-white hover:text-tertiary font-label-caps text-xs uppercase tracking-widest transition-colors duration-300 backdrop-blur-sm"
              >
                Explore Systems
              </Link>
            </div>
          </div>

          {/* Architectural Datum Strip */}
          <div className="mt-16 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-on-surface-variant">
            <div className="flex items-center gap-6 sm:gap-8 text-xs font-label-caps tracking-wider uppercase">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary"></span>
                <span>Seam Geometry: 1.5&quot; &amp; 2.0&quot; Mechanical</span>
              </span>
              <span className="hidden md:flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary"></span>
                <span>Class 4 Impact Resistant</span>
              </span>
              <span className="hidden lg:flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary"></span>
                <span>100% Concealed Fasteners</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-label-caps text-outline uppercase tracking-widest">
              <span>Austin, TX</span>
              <span>•</span>
              <span>Aspen, CO</span>
              <span>•</span>
              <span>Greenwich, CT</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / METRICS BENCHMARK */}
      <section className="w-full bg-surface-container-low border-b border-white/5 py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {KEY_METRICS.map((metric, idx) => (
              <div
                key={idx}
                className="relative pl-6 border-l border-white/10 group hover:border-tertiary transition-colors duration-300"
              >
                <div className="w-5 h-0.5 bg-tertiary mb-3"></div>
                <p className="font-headline-xl text-3xl sm:text-4xl text-white tracking-tight">
                  {metric.value}
                </p>
                <p className="font-label-caps text-xs uppercase text-tertiary tracking-widest mt-1">
                  {metric.label}
                </p>
                <p className="font-body-sm text-xs text-on-surface-variant mt-2 font-light">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL BRAND STORY */}
      <section className="w-full bg-surface-dim py-20 lg:py-28 border-b border-white/5 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-8 pr-0 lg:pr-8">
              <div className="flex items-center gap-3">
                <span className="w-10 h-px bg-tertiary"></span>
                <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
                  The EliteMetal Philosophy
                </span>
              </div>
              <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-normal">
                A Roof Should Do More Than Protect.{' '}
                <span className="italic text-secondary">It Should Complete the Architecture.</span>
              </h2>
              <div className="space-y-5 text-on-surface-variant font-body-lg font-light leading-relaxed">
                <p>
                  Standard roofing is disposable; architectural metal is an enduring statement of
                  structural authority. At EliteMetal, we design and form building envelopes that
                  transcend conventional lifespan limits while magnifying the lines conceived by
                  master architects.
                </p>
                <p>
                  By leveraging heavy-gauge cold-rolled Galvalume, untreated architectural copper,
                  and European-sourced zinc with proprietary floating clip attachments, our
                  assemblies expand and contract fluidly with thermal cycles—guaranteeing zero
                  oil-canning and total watertight isolation.
                </p>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="border-l-2 border-tertiary pl-4">
                  <p className="font-body-md text-sm text-white font-medium italic">
                    &ldquo;{SITE_CONFIG.motto}&rdquo;
                  </p>
                  <p className="font-label-caps text-[10px] text-outline uppercase tracking-wider mt-1">
                    Bespoke Fabrication Principle
                  </p>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-label-caps text-xs uppercase text-tertiary hover:text-white transition-colors duration-300 group"
                >
                  <span>Discover EliteMetal Craft</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 mt-8 lg:mt-0">
              <div className="relative p-2 bg-surface-container-high border border-white/10 shadow-2xl">
                <div className="relative aspect-[4/3] bg-surface-container overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTKnlNZaPIR14N7SWYw-q_fLt9RDdexoeVhFapIbGWIAAPVKBjz9yxaHr2xHRLR1M2EgdKqqa6f4nTpWmjq2B56cl0ZhLk6e1k4WPWCXrBrEhoNRoqJhICePuSYnb6rWofJQlKaDccAjs8_dh5ZBuvp3wf91cZkVeLLw_YmaaC2EAitqabKoGRrjJZbOYVN1GZkgu6CL-JWNgbqQnjAmcUjUStHC7uhB_SH3nqDr5JaHlTWAI3VQ9U"
                    alt="Extreme macro architectural detail of crisp dark graphite standing seam metal roof ridges"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-surface-container-lowest/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="font-label-caps text-[10px] text-tertiary uppercase tracking-wider">
                        Precision Fabrication
                      </p>
                      <p className="font-body-sm text-xs text-white">
                        Continuous roll-formed 24-gauge standing seam lock
                      </p>
                    </div>
                    <Award className="w-5 h-5 text-tertiary shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. METAL ROOFING SYSTEMS SHOWCASE */}
      <section className="w-full bg-surface-container-lowest py-20 lg:py-28 border-b border-white/5" id="systems">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="w-6 h-px bg-tertiary"></span>
                <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
                  Engineered Assemblies
                </span>
              </div>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-white font-normal">
                Designed for Performance.{' '}
                <span className="italic text-secondary">Finished for Perfection.</span>
              </h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md font-light leading-relaxed">
              Explore our master-spec material assemblies tailored for contemporary residential
              estates, architectural envelopes, and landmark commercial developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* System 1 */}
            <div className="bg-surface-container-low border border-white/10 p-6 flex flex-col justify-between group hover:border-tertiary transition-colors duration-300">
              <div className="space-y-4">
                <div className="h-52 w-full overflow-hidden bg-surface-container relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKTj0O-UWOeCC7fWgQVkGzUMzA06Ht8TYKe97sdaxlMlnNSlsfy2vUdbcJZqJSOeR5sAJvqjD_tG8XViOrZ-5fcMdOUhRUAhBDKiuRlb53jr5li0Q_QRFjIkmIz-LcrPtKkP6gd_KNikfIgZSBQEf0nsi4CtIK9LKZp2XwUN18x2AUE6Xj_huOHX5zdZXuo-_Jr5n4OIAAD__w483uUNbfiF9o0o2ccIJI_KeTSpCiK50bpVV29EZc"
                    alt="Mechanical lock standing seam roof panels on a minimalist contemporary home"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-surface-container-lowest/90 font-label-caps text-[10px] uppercase text-tertiary border border-tertiary/30">
                    Flagship Spec
                  </span>
                </div>
                <div>
                  <p className="font-label-caps text-[10px] text-outline uppercase tracking-wider">
                    Concealed Fastener
                  </p>
                  <h3 className="font-headline-md text-xl text-white mt-1">
                    Mechanical Standing Seam
                  </h3>
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                  Continuous interlocked seams with zero exposed screws. Ideal for extreme climates,
                  low roof pitches, and wind corridors exceeding 140 MPH.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 space-y-2 text-xs font-label-caps uppercase tracking-wider">
                <div className="flex justify-between">
                  <span className="text-outline">Gauge Thickness:</span>
                  <span className="text-white">24 Ga • 22 Ga Galvalume</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">Seam Heights:</span>
                  <span className="text-white">1.0&quot;, 1.5&quot;, 2.0&quot; Profiles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">Warranty:</span>
                  <span className="text-tertiary font-semibold">50-Year Non-Prorated</span>
                </div>
              </div>
            </div>

            {/* System 2 */}
            <div className="bg-surface-container-low border border-white/10 p-6 flex flex-col justify-between group hover:border-tertiary transition-colors duration-300">
              <div className="space-y-4">
                <div className="h-52 w-full overflow-hidden bg-surface-container relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiPGAea1YvT1mS7oJYJZvkiBZP7FAVxPxgxqxWsKJqzdG3tHES1Bc3yKkx6nhSeHA86BMXh-Xc5Hy5IDjj7eHd77XK60KV9YGHwoIiVw09Hsg8fU6A8rOFJ4OztxhM8CMU0AUaGxYcIMir7gCils493t9M_m9CT1ve9Xo5y7FjS_mrlX2LHxYan24t50vw3RPH-PIUawP-xMXBp4DHQi5s6UA5ZqU_Rpd_hbMrF1OZZDaCecLXnaW3"
                    alt="Titanium zinc metal roof panels on a coastal modern villa"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-surface-container-lowest/90 font-label-caps text-[10px] uppercase text-secondary border border-secondary/30">
                    Self-Healing
                  </span>
                </div>
                <div>
                  <p className="font-label-caps text-[10px] text-outline uppercase tracking-wider">
                    Natural Metallurgy
                  </p>
                  <h3 className="font-headline-md text-xl text-white mt-1">
                    Architectural Zinc &amp; Titanium
                  </h3>
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                  Living, self-healing natural surfaces that develop an elegant protective
                  hydroxyl-carbonate patina over decades without coating breakdowns.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 space-y-2 text-xs font-label-caps uppercase tracking-wider">
                <div className="flex justify-between">
                  <span className="text-outline">Purity Standard:</span>
                  <span className="text-white">99.995% Pure Electrolytic</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">Patina Cycle:</span>
                  <span className="text-white">Pre-Weathered Quartz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">Longevity:</span>
                  <span className="text-tertiary font-semibold">80 - 100+ Years</span>
                </div>
              </div>
            </div>

            {/* System 3 */}
            <div className="bg-surface-container-low border border-white/10 p-6 flex flex-col justify-between group hover:border-tertiary transition-colors duration-300">
              <div className="space-y-4">
                <div className="h-52 w-full overflow-hidden bg-surface-container relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDseY3j1rnkLg-mI5-tiAOnObtraiTUqhtJOwmXdIWGsEzhBm6f5HOgHZBbN-aO-oTdTfRyuyEA_UkUZdOk70xxO9gWdys82h2WyooC95zbgyj16oXHXsovEq7Hnl4t4DpXA1sEo_lf2RxLGt_FtoeCVn1Fuhiw4Si-WrFe9L4xtTcQUP3Shd_4HrFHemZdn9m5dn49aPj6qUNG2yDJrHLE8KpjyLWkMctnSLibvO3-EqTO6XP8gBMW"
                    alt="Warm luminous copper roof detail on a high-end mountain estate"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-surface-container-lowest/90 font-label-caps text-[10px] uppercase text-tertiary border border-tertiary/30">
                    Heritage Legacy
                  </span>
                </div>
                <div>
                  <p className="font-label-caps text-[10px] text-outline uppercase tracking-wider">
                    Authentic Hand-Crafted
                  </p>
                  <h3 className="font-headline-md text-xl text-white mt-1">
                    Natural Architectural Copper
                  </h3>
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                  Milled from heavyweight cold-rolled copper sheets. Hand-soldered valleys, custom
                  conductor heads, and transitions engineered for century-long estates.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 space-y-2 text-xs font-label-caps uppercase tracking-wider">
                <div className="flex justify-between">
                  <span className="text-outline">Specification:</span>
                  <span className="text-white">16 oz • 20 oz Cold Rolled</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">Soldering:</span>
                  <span className="text-white">50/50 Hand-Seamed Flashing</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">Corrosion:</span>
                  <span className="text-tertiary font-semibold">Complete Immunity</span>
                </div>
              </div>
            </div>

            {/* System 4 */}
            <div className="bg-surface-container-low border border-white/10 p-6 flex flex-col justify-between group hover:border-tertiary transition-colors duration-300">
              <div className="space-y-4">
                <div className="h-52 w-full overflow-hidden bg-surface-container relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyJeDHjk35JGXa9a5_pfFCBWMFxLSo2oXVzV95f4KuGPAU7uRrqdHFqh_CvXEOIUnhj6vAMj4gT5U5f3ybXkge5OwD740_cQV5RlRV8GVshwiBdSxfPaiMLz8HOATjyBisPPA2AwJK6E5FOXHxjtciWVBnokmoQ-O26VrkD6f8bcnXHE-4_cld-GBa11fW_uruJOnT5CT15sYiy6cF9oC1avhm-7XvsFurJwSQn08brAO_N_DPWV0f"
                    alt="Dark matte slate gray Kynar 500 coated architectural metal roofing panels"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-surface-container-lowest/90 font-label-caps text-[10px] uppercase text-secondary border border-secondary/30">
                    Ultra-Cool Tech
                  </span>
                </div>
                <div>
                  <p className="font-label-caps text-[10px] text-outline uppercase tracking-wider">
                    Polyvinylidene Fluoride
                  </p>
                  <h3 className="font-headline-md text-xl text-white mt-1">
                    Matte Kynar 500® Finishes
                  </h3>
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                  70% resin-based fluoropolymer formulas designed to resist chalking, fading, and
                  intense UV degradation while reflecting solar infrared heat.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 space-y-2 text-xs font-label-caps uppercase tracking-wider">
                <div className="flex justify-between">
                  <span className="text-outline">Solar Reflectance:</span>
                  <span className="text-white">SRI &gt; 29 to 68 Certified</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">Color Integrity:</span>
                  <span className="text-white">Delta E &lt; 5 over 30 Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">Finish Type:</span>
                  <span className="text-tertiary font-semibold">Zero-Glare Ultra Matte</span>
                </div>
              </div>
            </div>

            {/* System 5 */}
            <div className="bg-surface-container-low border border-white/10 p-6 flex flex-col justify-between group hover:border-tertiary transition-colors duration-300 md:col-span-2 lg:col-span-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div className="h-64 lg:h-full w-full overflow-hidden bg-surface-container relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmjoUoQeqk8HsCqJhPW3MpGrNqFwXXbEOL73d9EDcVebY9xPzl1EsyDVScKjpu0wB77iD6GPKdjskHOceDPiXGs0oXhQq9x76aPGzCyM_tb0Rt6p0rfjYFmzT3JwCrrzwWePd3fgOVrvCPebE-m7WUd87PSP8Glx6e9SoD6ce6ibGNpr3nX7GM4qTbs2Rp0tyqXeSNQpiBZPi4AGYP_jv9SnSKbWXhYA-ieTs70FrpCQXMibteyYEg"
                    alt="Luxury interlocking geometric metal shingle tiles in a dark graphite finish"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-surface-container-lowest/90 font-label-caps text-[10px] uppercase text-tertiary border border-tertiary/30">
                    Sculptural Slate Alternative
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-label-caps text-[10px] text-outline uppercase tracking-wider">
                      Dimensional Aesthetics
                    </p>
                    <h3 className="font-headline-md text-2xl text-white mt-1">
                      Interlocking Architectural Tiles
                    </h3>
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                    The visual weight of hand-split slate or cedar shakes combined with the
                    engineered light weight and total storm invulnerability of marine-grade stamped
                    metal alloys.
                  </p>
                  <div className="pt-4 border-t border-white/5 space-y-2 text-xs font-label-caps uppercase tracking-wider">
                    <div className="flex justify-between">
                      <span className="text-outline">Weight Advantage:</span>
                      <span className="text-white">1/7th Weight of Natural Slate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-outline">Interlock Seal:</span>
                      <span className="text-white">4-Way Mechanical Interlock</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-outline">Fire Rating:</span>
                      <span className="text-tertiary font-semibold">Class A Non-Combustible</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED CASE STUDY: THE LAKEVIEW RESIDENCE */}
      <section className="w-full bg-surface-dim py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-tertiary"></span>
              <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
                Featured Estate Case Study
              </span>
            </div>
            <span className="font-label-caps text-xs uppercase text-outline">
              Project Ref: 2024-ATX-08
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Visual */}
            <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-[540px] bg-surface-container overflow-hidden border border-white/10 group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHTQq7FCDYD9uQ3AkipCTWpbqKHDl7PPJWlHjo3vki7BuYXGZQGJuTyRxvkq-ni2z7r1UWO9ZstqyKZCkQlTiPdx58xvCr0bzU-VyQD3hpzGrDIJljYVToG9ERLNqATA0FjSdfM3QwTooTzJG1BLG-X6DHXdNrMHx-tUHiFSodddpQL6U_bfpznJ94bSINcNjXREHfj5-8JX540fQbEq2FKp8R7KKeQ_pYDPqpiY2m_ZVSjmh3_PgC"
                alt="Lakeview Residence in Austin Texas with standing seam matte charcoal metal roof"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="font-label-caps text-[10px] text-tertiary uppercase tracking-wider">
                    Lake Austin, Texas
                  </p>
                  <h3 className="font-headline-lg text-2xl sm:text-3xl text-white font-normal mt-1">
                    The Lakeview Residence
                  </h3>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 bg-surface-container-low/80 backdrop-blur-md border border-white/10 text-xs font-label-caps text-secondary uppercase">
                  Architectural Excellence Award
                </span>
              </div>
            </div>

            {/* Specifications Brief */}
            <div className="lg:col-span-5 bg-surface-container-low border border-white/10 p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <p className="font-label-caps text-xs text-outline uppercase tracking-wider">
                    Architectural Envelope Brief
                  </p>
                  <h4 className="font-headline-md text-xl text-white mt-1 font-normal">
                    Sculpted to Confront the Texas Elements
                  </h4>
                </div>
                <p className="font-body-md text-sm text-on-surface-variant font-light leading-relaxed">
                  Designed in collaboration with Alterstudio Architects, this 9,400 sq. ft. compound
                  required roof planes capable of handling intense 105°F heat waves, sudden
                  torrential flash downpours, and severe hail without visual degradation.
                </p>
                <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="font-label-caps text-outline uppercase">Roof Profile</span>
                    <span className="font-body-sm text-white font-medium">
                      1.5&quot; Mechanical Lock Standing Seam
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="font-label-caps text-outline uppercase">Core Alloy</span>
                    <span className="font-body-sm text-white font-medium">
                      24-Gauge Galvalume Steel
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="font-label-caps text-outline uppercase">Surface Finish</span>
                    <span className="font-body-sm text-white font-medium">
                      Matte Charcoal Kynar 500 (Cool Pigment)
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="font-label-caps text-outline uppercase">Wind Resistance</span>
                    <span className="font-body-sm text-tertiary font-medium">
                      UL 580 Class 90 (150 MPH Tested)
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="font-label-caps text-outline uppercase">Roof Pitch</span>
                    <span className="font-body-sm text-white font-medium">
                      Variable 2:12 to 5:12 Contours
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6">
                <Link
                  href="/projects"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-surface-container border border-tertiary/40 hover:border-tertiary text-tertiary hover:bg-tertiary hover:text-on-tertiary font-label-caps text-xs uppercase tracking-wider transition-all duration-300"
                >
                  <span>View Complete Portfolio Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WARRANTY & ENGINEERING INTEGRITY */}
      <section className="w-full bg-surface-container-lowest py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-px bg-tertiary"></span>
              <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
                Institutional Durability
              </span>
              <span className="w-8 h-px bg-tertiary"></span>
            </div>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-white font-normal">
              Built for the Long Term.{' '}
              <span className="italic text-tertiary-fixed-dim">Backed by Absolute Confidence.</span>
            </h2>
            <p className="font-body-lg text-on-surface-variant font-light leading-relaxed">
              We dismiss standard pro-rated builder warranties in favor of true lifetime
              craftsmanship commitments and certified material metallurgy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low border border-white/10 p-8 space-y-5 hover:border-tertiary transition-colors duration-300">
              <div className="w-12 h-12 bg-primary-container border border-tertiary/30 flex items-center justify-center text-tertiary">
                <Shield className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-headline-md text-xl text-white font-normal">
                  Certified Master Craftsmanship
                </h3>
                <p className="font-label-caps text-xs text-outline uppercase tracking-wider">
                  Lifetime Workmanship
                </p>
              </div>
              <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                Every EliteMetal installation is executed by in-house factory-certified metal
                artisans—never subcontracted out. Each standing seam joint, ridge cap, and box
                gutter is hand-verified to ensure perpetual leak resistance.
              </p>
              <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-label-caps text-secondary uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-tertiary" />
                <span>Zero Flashing Penetrations</span>
              </div>
            </div>

            <div className="bg-surface-container-low border border-white/10 p-8 space-y-5 hover:border-tertiary transition-colors duration-300">
              <div className="w-12 h-12 bg-primary-container border border-tertiary/30 flex items-center justify-center text-tertiary">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-headline-md text-xl text-white font-normal">
                  Class 4 Impact &amp; Fire Integrity
                </h3>
                <p className="font-label-caps text-xs text-outline uppercase tracking-wider">
                  50-Year Non-Prorated
                </p>
              </div>
              <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                Engineered to endure 2-inch hail stones without seam rupture, Class A external fire
                exposure, and category-5 hurricane uplift forces. Up to 35% reduction in annual
                estate hazard insurance premiums.
              </p>
              <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-label-caps text-secondary uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-tertiary" />
                <span>ASTM E1592 &amp; UL 2218 Certified</span>
              </div>
            </div>

            <div className="bg-surface-container-low border border-white/10 p-8 space-y-5 hover:border-tertiary transition-colors duration-300">
              <div className="w-12 h-12 bg-primary-container border border-tertiary/30 flex items-center justify-center text-tertiary">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-headline-md text-xl text-white font-normal">
                  Cool-Roof Solar Reflectivity
                </h3>
                <p className="font-label-caps text-xs text-outline uppercase tracking-wider">
                  Up to 25% HVAC Reduction
                </p>
              </div>
              <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                Advanced infrared-reflective pigment coatings divert solar radiation away from
                attic voids and unconditioned structural cavities, reducing internal cooling thermal
                transfer throughout peak summer heat.
              </p>
              <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-label-caps text-secondary uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-tertiary" />
                <span>Energy Star &amp; LEED Contributor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REVIEWS & TESTIMONIALS */}
      <section className="w-full bg-surface-dim py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-tertiary"></span>
                <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
                  Client &amp; Architect Endorsements
                </span>
              </div>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-white font-normal">
                Trusted by Homeowners Who Expect More.
              </h2>
            </div>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-surface-container-low border border-tertiary/30">
              <div className="flex text-tertiary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-tertiary" />
                ))}
              </div>
              <span className="font-label-caps text-xs uppercase text-white tracking-wider">
                4.9 / 5.0 Rating • 350+ Verified Estates
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low border border-white/10 p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="font-headline-xl text-4xl text-tertiary/30 leading-none select-none block">
                  &ldquo;
                </span>
                <p className="font-body-md text-sm text-on-surface-variant font-light leading-relaxed italic">
                  When designing contemporary residences with aggressive roof overhangs and minimal
                  fascia reveals, standard roofers ruin the lines. EliteMetal fabricated custom
                  standing seam pans on-site with microscopic tolerance. The result is pure sculpture.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5">
                <p className="font-headline-md text-base text-white font-normal">
                  Marcus Vance, AIA
                </p>
                <p className="font-label-caps text-[10px] text-tertiary uppercase tracking-wider mt-0.5">
                  Principal, Vance Architectural Studio • Aspen, CO
                </p>
                <p className="text-[11px] font-label-caps text-outline uppercase mt-1">
                  Project: Zinc Mechanical Lock Chalet
                </p>
              </div>
            </div>

            <div className="bg-surface-container-low border border-white/10 p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="font-headline-xl text-4xl text-tertiary/30 leading-none select-none block">
                  &ldquo;
                </span>
                <p className="font-body-md text-sm text-on-surface-variant font-light leading-relaxed italic">
                  We replaced our aging cedar shake roof with EliteMetal&apos;s matte black standing seam
                  Galvalume. Our summer air conditioning bill dropped by nearly 22%, and during last
                  spring&apos;s record hailstorm, we didn&apos;t experience a single speck of damage.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5">
                <p className="font-headline-md text-base text-white font-normal">
                  Eleanor &amp; David Sterling
                </p>
                <p className="font-label-caps text-[10px] text-tertiary uppercase tracking-wider mt-0.5">
                  Estate Owners • Greenwich, CT
                </p>
                <p className="text-[11px] font-label-caps text-outline uppercase mt-1">
                  Project: 11,200 sq.ft Colonial Modernization
                </p>
              </div>
            </div>

            <div className="bg-surface-container-low border border-white/10 p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="font-headline-xl text-4xl text-tertiary/30 leading-none select-none block">
                  &ldquo;
                </span>
                <p className="font-body-md text-sm text-on-surface-variant font-light leading-relaxed italic">
                  The precision of their copper work is unmatched in the Southwest. The hand-soldered
                  flashings around our stone chimneys and the hidden water diversion channels are
                  works of engineering art. Worth every dollar for peace of mind.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5">
                <p className="font-headline-md text-base text-white font-normal">
                  Julian C. Thorne
                </p>
                <p className="font-label-caps text-[10px] text-tertiary uppercase tracking-wider mt-0.5">
                  Managing Director, Thorne Holdings • Austin, TX
                </p>
                <p className="text-[11px] font-label-caps text-outline uppercase mt-1">
                  Project: Lakefront Custom Copper &amp; Zinc Estate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7.5 AI CONCIERGE & INSTANT VOICE BOOKING */}
      <section className="w-full bg-surface-container-lowest py-16 lg:py-20 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <AiBookingCard />
          </div>
        </div>
      </section>

      {/* 8. ARCHITECTURAL CONSULTATION BANNER / PRE-FOOTER */}
      <section className="w-full bg-primary-container py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-primary-container to-surface-container-low opacity-80"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tertiary/40 to-transparent"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="border border-white/10 bg-surface-container-lowest/80 backdrop-blur-xl p-8 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2">
                  <span className="w-6 h-px bg-tertiary"></span>
                  <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
                    Direct Architectural Consultation
                  </span>
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-white leading-tight font-normal">
                  Ready to elevate your property&apos;s architectural envelope?
                </h2>
                <p className="font-body-lg text-on-surface-variant font-light max-w-2xl">
                  Schedule a comprehensive on-site engineering assessment or blueprint review with
                  our senior architectural sheet metal estimators.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-tertiary hover:bg-white text-on-tertiary font-label-caps text-xs uppercase tracking-wider transition-colors duration-300 text-center font-semibold"
                >
                  {SITE_CONFIG.primaryCta}
                </Link>
                <a
                  href={SITE_CONFIG.phoneRaw}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-white/20 hover:border-tertiary text-white hover:text-tertiary font-label-caps text-xs uppercase tracking-wider transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 text-tertiary" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
                <p className="text-center font-label-caps text-[10px] uppercase tracking-widest text-outline">
                  Strict Non-Disclosure • Architect Plans Accepted
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
