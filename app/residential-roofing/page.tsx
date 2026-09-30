import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, ShieldCheck, Thermometer, TrendingUp, Home, Award } from 'lucide-react';
import ResidentialSpecStudio from '@/components/residential/ResidentialSpecStudio';
import QuoteForm from '@/components/forms/QuoteForm';
import { SITE_CONFIG } from '@/constants/data';

export const metadata: Metadata = {
  title: 'Residential Metal Roofing | Luxury Architectural Roofing Systems',
  description:
    'Custom residential metal roofing tailored to luxury modern residences, contemporary estates, and generational architectural masterworks.',
};

export default function ResidentialRoofingPage() {
  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-primary-container -mt-20">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB30_C53p6EksDPFZwO-bEll9sICodgorCje_Km1EJfkwhsbv_lRsrmrepYFIYY3VGJ2o9054P7sI_SnAzBpCF4OciGs1ZzWpibUY04pdb_OO-nC8ciR0V9MeOlZ3kIiPfYG01HON0Wdgv2ii7Pv4bxuGqDbEF0WLUdCayTlxKuiPvYsGRFhbeiW59qOiLcqMGstaY_9FdDsoBU58E6peTaxL9bMLsNnh-SNXaEFiM-irJxVQcdI4-F')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/70 to-surface-dim/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-transparent to-primary-container/40"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-40 pb-24 flex flex-col justify-end min-h-[92vh]">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-tertiary"></span>
            <span className="font-label-caps text-xs uppercase text-tertiary tracking-[0.25em]">
              Residential Architectural Division
            </span>
            <span className="text-outline text-xs">/</span>
            <span className="font-label-caps text-xs uppercase text-outline tracking-widest">
              Bespoke Residential Systems
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-headline-hero text-4xl sm:text-5xl lg:text-7xl text-on-surface tracking-tight max-w-4xl font-light leading-[1.08]">
                A Roofing System <br />
                <span className="italic font-normal text-tertiary">Worth Building Around.</span>
              </h1>
              <p className="mt-6 font-body-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
                Custom residential metal roofing tailored to luxury modern residences, contemporary
                estates, and generational architectural masterworks.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href="#materials-studio"
                className="inline-flex items-center justify-between px-8 py-4 bg-tertiary hover:bg-on-background text-on-tertiary hover:text-surface-dim font-label-caps text-xs uppercase tracking-widest shadow-xl transition-all duration-300 group font-semibold"
              >
                <span>Design Your Roof</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center justify-between px-8 py-4 bg-surface-container-low/80 hover:bg-surface-container-high text-on-surface font-label-caps text-xs uppercase tracking-widest shadow-md transition-all duration-300 group backdrop-blur-md border border-white/10"
              >
                <span>View Residential Gallery</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-tertiary" />
              </Link>
            </div>
          </div>

          {/* Quick architectural specs telemetry */}
          <div className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 bg-surface-container-low/70 backdrop-blur-md px-6 sm:px-8 py-6 border border-white/5">
            <div>
              <span className="font-label-caps text-[10px] uppercase text-outline tracking-wider block mb-1">
                Standard Hail Rating
              </span>
              <span className="font-headline-md text-xl sm:text-2xl text-on-surface">
                UL 2218 Class 4
              </span>
            </div>
            <div>
              <span className="font-label-caps text-[10px] uppercase text-outline tracking-wider block mb-1">
                Wind Uplift Capacity
              </span>
              <span className="font-headline-md text-xl sm:text-2xl text-on-surface">
                160+ MPH Verified
              </span>
            </div>
            <div>
              <span className="font-label-caps text-[10px] uppercase text-outline tracking-wider block mb-1">
                Thermal Emissivity
              </span>
              <span className="font-headline-md text-xl sm:text-2xl text-tertiary">
                0.86 Cool Roof
              </span>
            </div>
            <div>
              <span className="font-label-caps text-[10px] uppercase text-outline tracking-wider block mb-1">
                Structural Warranty
              </span>
              <span className="font-headline-md text-xl sm:text-2xl text-on-surface">
                50-Year Non-Prorated
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL INTEGRATION SPREAD */}
      <section className="w-full bg-surface-container-lowest py-20 lg:py-28 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-4 h-[1px] bg-tertiary"></span>
                <span className="font-label-caps text-xs uppercase text-tertiary tracking-widest">
                  Materiality &amp; Context
                </span>
              </div>
              <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-on-surface max-w-2xl font-light">
                Where Structural Engineering Meets Architectural Intent.
              </h2>
            </div>
            <p className="font-body-lg text-on-surface-variant max-w-md font-light leading-relaxed">
              A truly bespoke metal roof is not an afterthought cladding. It is a unifying
              architectural datum that complements cedar, raw concrete, Indiana limestone, and
              expansive glazing.
            </p>
          </div>

          {/* Bento-style materiality showcase */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Big Feature (Glass & Cedar Alignment) */}
            <div className="md:col-span-8 bg-surface-container-low border border-white/10 overflow-hidden group shadow-md flex flex-col justify-between">
              <div className="relative h-[320px] sm:h-[380px] overflow-hidden bg-surface-container">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEcmGxap-QP4er_H7W4HegS1lg6uF47RHYeJUAzJg94P-ge6HfROLfhdfFC5cz6yeMkJqoZj0jdRhD-XK0N3ShIocE-POOdBjuGmv1txjJqmAI5Xk2yhzJNNXN-_iyxUPNMIujvtzyQEgVVbZxmPFUFNJgZ1NN3yzs8GPdiIqYj_UchGFt11yD3-pJQfybE78WxPW8APyivDPuFvbG-c06zZ5PO8FTfgj0XM6B1OPviJlOjt6DZh1E"
                  alt="Close-up architectural detail of standing seam metal roof meeting western red cedar soffits"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 px-3 py-1 bg-surface-container-lowest/90 backdrop-blur-md border border-white/10">
                  <span className="font-label-caps text-[10px] uppercase text-tertiary">
                    Detail #A-102
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-headline-md text-xl sm:text-2xl text-on-surface font-normal">
                    Western Red Cedar &amp; Flush Fascia
                  </h3>
                  <span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">
                    Thermal Break Engineered
                  </span>
                </div>
                <p className="font-body-md text-sm text-on-surface-variant max-w-2xl font-light leading-relaxed">
                  Precision concealed clips accommodate continuous natural expansion while keeping
                  crisp shadow lines perfectly parallel with hand-selected horizontal
                  tongue-and-groove cedar soffits.
                </p>
              </div>
            </div>

            {/* Concrete */}
            <div className="md:col-span-4 bg-surface-container-low border border-white/10 overflow-hidden group shadow-md flex flex-col justify-between">
              <div className="relative h-[220px] overflow-hidden bg-surface-container">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFl_3KyPCnGkz7oBvnjdErcLV-3IQdqRD5fqYiI41YOoH2Tg6xvOkNA6As8JvbQcgdhzU2OhhtkmiVTAjEJOg_JRw4SBMEm4cwmvPbAmWVjhlL59Z1FPBbbVWDAy1HbS1evoJGYeXQGI-ghWfgVgU1Y2jAQj8KQ9KdNgeC15DCE97KcRSfYfJ4jWTmaVm_HcPIshAkHw1ccq_Pj_uFq4YzpoLEuvgDgMwV5zRISo81Zbz10EPhtTzF"
                  alt="Dark zinc standing seam roof copings abutting a board-formed architectural concrete retaining wall"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 px-3 py-1 bg-surface-container-lowest/90 backdrop-blur-md border border-white/10">
                  <span className="font-label-caps text-[10px] uppercase text-tertiary">
                    Detail #B-204
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-headline-md text-xl text-on-surface mb-2 font-normal">
                  Monolithic Board-Formed Concrete
                </h3>
                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                  Custom-brake perimeter gravel stops and copings engineered to sit dead-flush against
                  heavy cast concrete parapets, preventing mineral streaking for life.
                </p>
              </div>
            </div>

            {/* Limestone */}
            <div className="md:col-span-5 bg-surface-container-low border border-white/10 overflow-hidden group shadow-md flex flex-col justify-between">
              <div className="p-6 sm:p-8 order-2 md:order-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-label-caps text-[10px] uppercase text-tertiary">
                    Masonry Tie-In
                  </span>
                </div>
                <h3 className="font-headline-md text-xl text-on-surface mb-2 font-normal">
                  Texas Cream Limestone
                </h3>
                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                  Reglet counterflashings embedded directly into stone mortar joints with two-stage
                  butyl seals, honoring traditional stonework with contemporary leak protection.
                </p>
              </div>
              <div className="relative h-[220px] overflow-hidden order-1 md:order-2 bg-surface-container">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoox0yM373lo1_JPq2cfbFbipuqjaN9wsHsUL3CrBoZW6App4XXRZ_bovQlXT0vad-HEmkbN9sDHRwYVyVeo2zvYxQaZvSGy3-U2HORuPRY61OH3wfrKUke9hjUXAuxsAm-YGHRZYyOQO5EtTWhIUg4-nnJiDASuBzfGPEJ0pKrcOEc0QATmSgCeTgmhsRjxmBWkX6KzSZd42f3GDbRRqHAK4BvlZ5WqXvcIydLH_ry7NUnURFNVRV"
                  alt="Cut limestone estate walls meeting an aged bronze standing seam metal roofline"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Overhangs */}
            <div className="md:col-span-7 bg-surface-container-low border border-white/10 overflow-hidden group shadow-md flex flex-col justify-between">
              <div className="relative h-[240px] overflow-hidden bg-surface-container">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsGnw1cxGmdWCVHTyP2xrHQvGozDTVSzrAeG0TguPm3jKDl2EJkx7Hatk7l28EpapS3-AR0kWgszUjqJuM_ENpcCeDILubMZJkMgBiZVM0_SuwfxINY4fursFgsl2EekeOWPW6p0SqTB3zqdZ89ZN2QxuLTGi0TMFEwHKyEHLtIL9hc4b7Ebkw8PFO556opi__3S-Udlz1GPT0d1NxtzPiABOeg-JEZWyNBbFrlGZQhYYybVzYwhAK"
                  alt="Minimalist pavilion residence with ultra-slim floating roof overhang"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-headline-md text-xl sm:text-2xl text-on-surface font-normal">
                    Floor-to-Ceiling Glazing Overhangs
                  </h3>
                  <span className="font-label-caps text-[10px] text-tertiary uppercase">
                    Zero Rake Deflection
                  </span>
                </div>
                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                  Cantilevered eaves projected up to 8 feet beyond glass walls to passively regulate
                  solar gain while maintaining razor-thin 1.25&quot; edge profiles that seem to float in
                  mid-air.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PARADIGMS OF RESIDENTIAL CRAFTSMANSHIP */}
      <section className="w-full bg-surface-container py-20 lg:py-28 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-label-caps text-xs uppercase text-tertiary tracking-[0.2em] block mb-3">
              Architectural Typologies
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-on-surface font-light">
              Three Paradigms of Residential Craftsmanship
            </h2>
            <p className="mt-4 font-body-lg text-on-surface-variant font-light leading-relaxed">
              From crisp minimalist lines to grand historic estates, every system is fabricated
              on-site to the nearest millimeter using custom roll-forming equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Style 1 */}
            <div className="bg-surface-container-lowest p-8 flex flex-col justify-between border border-white/10 group shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div>
                <div className="relative h-64 overflow-hidden mb-6 bg-surface-container">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL8yfNBr5njcK-LgC9FT8QO_w2KDm1ZUJ7JfiIgHXMeKwcnNPiypDf4TQk1t4gxh2e8TtOp2gCkvlOKHbCC38oGZgIImL655kpBim2bohlPctqz__II0sLo2oo0sqrktw07AewT7aEGxs5uhJ-QKfpu1f1GZtS1CdHmqw-g9AR9KQm3c9ET0VO1sOShcViMkPIwN-T-rZFgZvru20s4KnYQaLez1X_bF27hQBeIuL-nm-4FztP2qGV"
                    alt="Ultra modern cubist residence featuring razor-thin standing seam metal roof panels"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 bg-surface-container-lowest/90 px-3 py-1 text-tertiary font-label-caps text-[10px] uppercase border border-tertiary/30">
                    Series 01 / Minimal
                  </div>
                </div>

                <h3 className="font-headline-md text-xl text-on-surface mb-3 font-normal">
                  Modern Minimalist Standing Seam
                </h3>
                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mb-6 font-light leading-relaxed">
                  Engineered for flat or low-pitch roofs where the roofline must disappear or form a
                  pure horizontal datum.
                </p>

                <ul className="space-y-2.5 mb-8 text-xs font-body-sm text-on-surface font-light">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0" />
                    <span>Concealed gutter &amp; drip troughs with zero visible eaves</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0" />
                    <span>Flush-profile field panels with mechanical double-lock</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0" />
                    <span>Sub-millimeter ridge ventilation closures</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs font-label-caps text-outline uppercase">
                <span>Ideal Pitch: 0.5:12 to 4:12</span>
                <ArrowRight className="w-4 h-4 text-tertiary" />
              </div>
            </div>

            {/* Style 2 */}
            <div className="bg-surface-container-lowest p-8 flex flex-col justify-between border border-white/10 group shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div>
                <div className="relative h-64 overflow-hidden mb-6 bg-surface-container">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAopSWZphf6uFfFjoCwFad1TMjud6lB-jVr751bNvFmgGSlbWZqBz14LHTGz7pIv0Ic1m5Uy8Twpgqiex-8tqu5XK9LNalvIoHv7jaN0i1L6pM4ucdftCc2HNEcZBJ1RgJ0WlPqTFR7_5bghvo2m021obkmojjagerNUyNguLNQuNsc7NBmknJ_YsDOOEGgGzwGuVkLc3yrktB-yqL4XOLR6NQOK5y4MYhkONkSe4SUfPyriyHcaRbm"
                    alt="Luxury historic stone country estate with high-pitched standing seam batten metal roof"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 bg-surface-container-lowest/90 px-3 py-1 text-tertiary font-label-caps text-[10px] uppercase border border-tertiary/30">
                    Series 02 / Heritage
                  </div>
                </div>

                <h3 className="font-headline-md text-xl text-on-surface mb-3 font-normal">
                  Heritage &amp; Traditional Estate
                </h3>
                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mb-6 font-light leading-relaxed">
                  Deep, bold profiles tailored to European-inspired manors, traditional farmhouses,
                  and historic renovations requiring heavy shadows.
                </p>

                <ul className="space-y-2.5 mb-8 text-xs font-body-sm text-on-surface font-light">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0" />
                    <span>Architectural batten seam caps with prominent shadow relief</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0" />
                    <span>Hand-formed copper bay windows, eyebrows, and dormers</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0" />
                    <span>Optional hand-textured metal shingles &amp; shakes</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs font-label-caps text-outline uppercase">
                <span>Ideal Pitch: 6:12 to 18:12</span>
                <ArrowRight className="w-4 h-4 text-tertiary" />
              </div>
            </div>

            {/* Style 3 */}
            <div className="bg-surface-container-lowest p-8 flex flex-col justify-between border border-white/10 group shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div>
                <div className="relative h-64 overflow-hidden mb-6 bg-surface-container">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxnzigaB_nGDxqjKzV-XFJgh2fI0cw5XT4iFnQVBpd5DC02YljsbK-0rofh8MxNiWrIkhU3Xqk-ww5dRYCrsdLIx_e1ecqCHFNnmUZsoZyAuVXPSFYhJK3XrVnRyfyRqKd9ADmU5ap6wbTE_3y1A3jIU4-_Y6jGDR9gDrsOPcBP92M07ON2VPm3wpitMOAVh1eTUMADUgSWyIZGCIf0j9n7HTqyPri4jf9hLorCPWK099eZX67ddVN"
                    alt="Scandinavian modern residential barn home with bronze standing seam wrapping from roof down walls"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 bg-surface-container-lowest/90 px-3 py-1 text-tertiary font-label-caps text-[10px] uppercase border border-tertiary/30">
                    Series 03 / Continuous
                  </div>
                </div>

                <h3 className="font-headline-md text-xl text-on-surface mb-3 font-normal">
                  Hybrid Roof &amp; Facade Cladding
                </h3>
                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mb-6 font-light leading-relaxed">
                  A continuous, uninterrupted protective envelope where the standing seam panels
                  cascade unbroken from roof to vertical exterior walls.
                </p>

                <ul className="space-y-2.5 mb-8 text-xs font-body-sm text-on-surface font-light">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0" />
                    <span>Seamless zero-overhang transitions at gutter lines</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0" />
                    <span>Continuous rear-ventilated rainscreen architecture</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0" />
                    <span>Perfect seam line alignment across roof and wall faces</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs font-label-caps text-outline uppercase">
                <span>Continuous Vertical Envelope</span>
                <ArrowRight className="w-4 h-4 text-tertiary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE MATERIAL & FINISH SELECTOR */}
      <section className="w-full bg-surface-dim py-20 lg:py-28 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <ResidentialSpecStudio />
        </div>
      </section>

      {/* HOMEOWNER VALUE & PEACE OF MIND */}
      <section className="w-full bg-surface-container py-20 lg:py-28 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="font-label-caps text-xs uppercase text-tertiary tracking-[0.2em] block mb-3">
                Investment Intelligence
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface max-w-xl font-light">
                The Mathematical Value of an EliteMetal Roof
              </h2>
            </div>
            <p className="font-body-lg text-on-surface-variant max-w-lg font-light leading-relaxed">
              While conventional asphalt shingles demand costly tear-offs and replacements every 12 to
              15 years, architectural standing seam metal functions as permanent capital
              infrastructure for luxury estates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface-container-low p-8 flex flex-col justify-between border border-white/10 shadow-sm">
              <div>
                <div className="w-12 h-12 bg-surface-container-high border border-tertiary/30 flex items-center justify-center text-tertiary mb-6">
                  <Thermometer className="w-6 h-6" />
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-headline-hero text-3xl sm:text-4xl text-on-surface">25%</span>
                  <span className="font-label-caps text-[10px] uppercase text-tertiary font-semibold">
                    Lower Bills
                  </span>
                </div>
                <h3 className="font-headline-md text-lg text-on-surface mb-2 font-normal">
                  Summer Cooling Efficiency
                </h3>
                <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                  Reflective cool-roof pigmentation re-emits up to 70% of infrared solar radiation,
                  drastically diminishing HVAC attic loads during peak summer heat waves.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 font-label-caps text-[10px] text-outline uppercase tracking-wider">
                ENERGY STAR Certified
              </div>
            </div>

            <div className="bg-surface-container-low p-8 flex flex-col justify-between border border-white/10 shadow-sm">
              <div>
                <div className="w-12 h-12 bg-surface-container-high border border-tertiary/30 flex items-center justify-center text-tertiary mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-headline-hero text-3xl sm:text-4xl text-on-surface">30%</span>
                  <span className="font-label-caps text-[10px] uppercase text-tertiary font-semibold">
                    Discount
                  </span>
                </div>
                <h3 className="font-headline-md text-lg text-on-surface mb-2 font-normal">
                  Carrier Insurance Savings
                </h3>
                <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                  UL 2218 Class 4 impact resistance protects against 2-inch hail stones traveling at
                  90mph, qualifying high-value estates for major homeowner hazard discounts.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 font-label-caps text-[10px] text-outline uppercase tracking-wider">
                Class 4 Hail Impact Rated
              </div>
            </div>

            <div className="bg-surface-container-low p-8 flex flex-col justify-between border border-white/10 shadow-sm">
              <div>
                <div className="w-12 h-12 bg-surface-container-high border border-tertiary/30 flex items-center justify-center text-tertiary mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-headline-hero text-3xl sm:text-4xl text-on-surface">95%</span>
                  <span className="font-label-caps text-[10px] uppercase text-tertiary font-semibold">
                    Cost Recouped
                  </span>
                </div>
                <h3 className="font-headline-md text-lg text-on-surface mb-2 font-normal">
                  Resale Asset Valuation
                </h3>
                <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                  Appraisers and luxury buyers prioritize homes with verified transferable 50-year
                  envelopes that eliminate roof replacement contingencies during estate transactions.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 font-label-caps text-[10px] text-outline uppercase tracking-wider">
                Remodeling Cost vs Value
              </div>
            </div>

            <div className="bg-surface-container-low p-8 flex flex-col justify-between border border-white/10 shadow-sm">
              <div>
                <div className="w-12 h-12 bg-surface-container-high border border-tertiary/30 flex items-center justify-center text-tertiary mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-headline-hero text-3xl sm:text-4xl text-tertiary font-normal">
                    0
                  </span>
                  <span className="font-label-caps text-[10px] uppercase text-on-surface font-semibold">
                    Routine Repairs
                  </span>
                </div>
                <h3 className="font-headline-md text-lg text-on-surface mb-2 font-normal">
                  Generational Permanence
                </h3>
                <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                  Non-combustible Class A fire rating, zero shingle curling, zero granule loss, and
                  zero mold degradation throughout half a century of environmental exposure.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 font-label-caps text-[10px] text-outline uppercase tracking-wider">
                Class A Fire Resistance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 50-YEAR COMPREHENSIVE WARRANTY SECTION */}
      <section className="w-full bg-surface-container-lowest py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-surface-container-low border border-white/10 p-8 sm:p-12 lg:p-16 relative shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 text-center lg:text-left">
                <span className="font-label-caps text-xs uppercase text-tertiary tracking-[0.25em] block mb-2">
                  Generational Guarantee
                </span>
                <div className="font-headline-hero text-6xl lg:text-8xl leading-none text-tertiary font-normal mb-2">
                  50
                </div>
                <div className="font-headline-lg text-2xl lg:text-3xl text-on-surface mb-4">
                  Year Non-Prorated Warranty
                </div>
                <p className="font-body-md text-sm text-on-surface-variant font-light">
                  Transferable to future homeowners with zero reduction in coverage over time.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-surface-container-lowest p-6 border border-white/5">
                  <ShieldCheck className="w-8 h-8 text-tertiary mb-3" />
                  <h4 className="font-headline-md text-lg text-on-surface mb-2 font-normal">
                    Substrate Integrity
                  </h4>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                    Guaranteed against rust-through, perforation, cracking, or splitting caused by
                    climate or atmospheric moisture.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-6 border border-white/5">
                  <CheckCircle2 className="w-8 h-8 text-tertiary mb-3" />
                  <h4 className="font-headline-md text-lg text-on-surface mb-2 font-normal">
                    PVDF Finish Retention
                  </h4>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                    Coverage against extreme color chalking, peeling, and color shift exceeding 5
                    Hunter delta-E units for 40 years.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-6 border border-white/5">
                  <Award className="w-8 h-8 text-tertiary mb-3" />
                  <h4 className="font-headline-md text-lg text-on-surface mb-2 font-normal">
                    Elite Master Labor
                  </h4>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                    Full leak-free craftsmanship warranty backed directly by EliteMetal&apos;s internal
                    in-house master metal artisan teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION: CONSULT WITH SPECIALIST */}
      <section className="w-full bg-surface-dim py-20 lg:py-28 relative" id="consultation">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-tertiary"></span>
                <span className="font-label-caps text-xs uppercase text-tertiary tracking-[0.2em]">
                  Design Consultation
                </span>
              </div>
              <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-on-surface leading-tight font-light">
                Consult with an Architectural Roofing Specialist.
              </h2>
              <p className="font-body-lg text-on-surface-variant font-light leading-relaxed">
                Every EliteMetal residential roof begins with an in-depth review of your
                architectural blueprints, structural wind loads, and aesthetic intent. Schedule a
                private consultation or on-site envelope assessment.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <Home className="w-5 h-5 text-tertiary mt-1 shrink-0" />
                  <div>
                    <span className="font-label-md text-sm text-on-surface block font-medium">
                      CAD / Revit &amp; BIM Integration
                    </span>
                    <span className="font-body-sm text-xs text-outline">
                      Our technical team coordinates directly with your project architect.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-5 h-5 text-tertiary mt-1 shrink-0" />
                  <div>
                    <span className="font-label-md text-sm text-on-surface block font-medium">
                      Comprehensive Property Envelope Audit
                    </span>
                    <span className="font-body-sm text-xs text-outline">
                      Laser elevation mapping and structural truss capacity evaluation.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <QuoteForm initialProjectType="Residential" initialSystem="Standing Seam" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
