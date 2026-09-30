import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Shield,
  FileText,
  Phone,
  Mail,
  Download,
  UploadCloud,
  CheckCircle2,
  HardHat,
  Calendar,
  Building2,
  Layers,
} from 'lucide-react';
import {
  SITE_CONFIG,
  COMMERCIAL_SECTORS,
  COMMERCIAL_SPECS_PILLARS,
} from '@/constants/data';
import CommercialBidForm from '@/components/commercial/CommercialBidForm';

export const metadata: Metadata = {
  title: 'Commercial Metal Roofing | Division 07 Architectural Systems',
  description:
    'Engineered standing seam and architectural panel systems for commercial developments, corporate headquarters, luxury hospitality, and high-end retail.',
};

export default function CommercialRoofingPage() {
  const caseStudies = [
    {
      title: 'Monarch Bay Pavilion & Resort',
      location: 'Laguna Beach, CA',
      sector: 'Hospitality',
      scale: '45,000',
      material: '16 oz Copper',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCnKZtWRLikn6NPA3SGD_NhOlgnvLRuMIm39PIJmGzETA-lMz3axxH2_RH2bndnYG6yqjORA6h3_9uNXI54KMSDfcZExjwFqhWQBfxwK2_0avbeHkUZFlx_rIWfJ2-lKzDpEA63-rWlEhZqnewZNKoKzHFxuwFF6ERQGKzhl-AkxMUsaLKJTmG1LUcgNrWkBf92QF2B6B_LCeF_F82ycTwhS9jb41Bdht_-uu2CqKI7_LkpAmmlUVVR',
      description:
        '45,000 sq ft Architectural Standing Seam roof engineered for aggressive coastal salt-fog atmospheric corrosion, utilizing heavy-gauge pre-weathered copper panels.',
    },
    {
      title: 'Vertex Innovation Tech Campus',
      location: 'Austin, TX',
      sector: 'Technology HQ',
      scale: '82,000',
      material: '24-Ga Galvalume',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBnbKjCc8WwXlmilagPihVnZIFJGHO_TBTm-8yeHAeM_p-Dmd0sjYx3VdSE_k8O454zleZlyvz6BsIF8cx6b2TtZG5o5IK75NlHReGeSg8UF6RHb12TOuv0FdIsakGfrehSKiIQj4PaIt35DIyZDkxrdNIh30ZmIjgmbCEik5B8IAwg8e5dDm2msTU1mKsd_U3ozNO73dToa4nj5K6KQnZ9pUSqex-VHMvyi1oAq-xUuEioA-hayO0r',
      description:
        'Custom Charcoal Galvalume with an integrated 420kW solar system secured via zero-penetration S-5! seams, achieving LEED Platinum envelope standards.',
    },
    {
      title: 'The Luminary Mixed-Use',
      location: 'Denver, CO',
      sector: 'Mixed-Use Urban',
      scale: '38,000',
      material: 'Rheinzink Pre-PATINA',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDfbLqaHgR25A6nyg50HhIHtLBVdOe-pCws0ndMrEX88S0u_LZZ3vKdaTfo7QoW_4vZ2hCwRwvkyUZUyxe6ybgMQWHYtuJIdzk3PKJulhXQ_7taaWL97iLRNZGfJtNNWQnOLruPGSGcJVO0VOx-RrJybgKTBwKUIHu05E5cHoqwx7ScwiqSXOOhYdfE0QZcZ2VC-h_xL2Ts6DKq4uVxZmClL6zMp38ZX9y7zHsEieo2lYUlme26HeZi',
      description:
        'Seamless facade-to-roof continuous envelope using titanium zinc cassette panels. Engineered with custom high-altitude snow retention mechanisms.',
    },
  ];

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* 1. COMMERCIAL HERO */}
      <section className="relative w-full -mt-20 overflow-hidden bg-primary-container text-on-surface">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center mix-blend-luminosity opacity-40 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXG8NSXboKz1QRPONb9inrgoaM3Lqsnw1Z5SZ6z5Lwksk2UQ72UrPUrC7VIpdVSsv3LQjj9L6ga4yhpULDIlni4-9_rch3IwhpZ7o3WktHPM6UPpb92bhQo3sCXW3v532YpKjGIqVPgU_rt92U9NW32TnXMzPwDT6v7okOLAww9u46BdFJttviv43ArwuH0NdQbZvrBwCHDUcA9jWaJ3yqFUrbbXM01GmIcPCFqoOOSST8YoQwKh1G')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-surface/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface/60 to-transparent"></div>

        <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-40 pb-20 md:pt-48 md:pb-28 flex flex-col justify-end min-h-[90vh]">
          {/* Datum marker */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-tertiary"></span>
            <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
              Architectural Division • Sector 07 41 13
            </span>
          </div>

          <div className="max-w-4xl space-y-6">
            <h1 className="font-headline-hero text-4xl sm:text-5xl lg:text-7xl text-on-surface tracking-tight leading-[1.08] font-light">
              Performance at a <span className="italic text-tertiary">Larger Scale.</span>
            </h1>
            <p className="font-body-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
              Engineered standing seam and architectural panel systems for commercial developments,
              corporate headquarters, luxury hospitality, and high-end retail.
            </p>
          </div>

          {/* Action Cluster */}
          <div className="mt-10 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <a
              href="#commercial-consultation"
              className="px-8 py-4 bg-tertiary hover:bg-on-surface text-on-tertiary hover:text-surface-container-lowest font-label-caps text-xs uppercase tracking-widest transition-colors duration-300 text-center shadow-lg font-semibold"
            >
              Discuss Your Commercial Project
            </a>
            <a
              href="#architect-portal"
              className="px-8 py-4 bg-surface-container hover:bg-surface-bright text-on-surface font-label-caps text-xs uppercase tracking-widest transition-colors duration-300 text-center flex items-center justify-center gap-2 border border-white/10"
            >
              <FileText className="w-4 h-4 text-tertiary" />
              <span>Download Architectural Spec Sheet</span>
            </a>
          </div>

          {/* Linear Metrics Ribbon */}
          <div className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 bg-surface-container-low/70 backdrop-blur-md p-6 border border-white/5">
            <div className="flex flex-col gap-1">
              <span className="font-headline-md text-xl sm:text-2xl text-on-surface">UL 580</span>
              <span className="w-6 h-[1px] bg-tertiary my-1"></span>
              <span className="font-label-caps text-[10px] uppercase text-on-surface-variant">
                Class 90 Wind Uplift
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-headline-md text-xl sm:text-2xl text-on-surface">120+ Ft</span>
              <span className="w-6 h-[1px] bg-tertiary my-1"></span>
              <span className="font-label-caps text-[10px] uppercase text-on-surface-variant">
                Continuous Panel Run
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-headline-md text-xl sm:text-2xl text-tertiary">0.00%</span>
              <span className="w-6 h-[1px] bg-tertiary my-1"></span>
              <span className="font-label-caps text-[10px] uppercase text-on-surface-variant">
                Penetration Solar Fit
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-headline-md text-xl sm:text-2xl text-on-surface">50-Year</span>
              <span className="w-6 h-[1px] bg-tertiary my-1"></span>
              <span className="font-label-caps text-[10px] uppercase text-on-surface-variant">
                Non-Prorated Warranty
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMMERCIAL SECTORS WE SERVE */}
      <section className="w-full bg-surface-dim py-20 lg:py-28">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary block mb-2">
                Portfolio Breadth
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-on-surface font-light">
                Commercial Sectors We Serve
              </h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md font-light leading-relaxed">
              Every commercial envelope demands bespoke thermodynamic engineering, tailored joinery,
              and meticulous logistical staging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMERCIAL_SECTORS.map((sector) => (
              <div
                key={sector.id}
                className="group relative bg-surface-container flex flex-col justify-between overflow-hidden p-8 hover:bg-surface-container-high transition-colors duration-500 min-h-[380px] border border-white/5"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-40 transition-opacity duration-700"
                  style={{ backgroundImage: `url('${sector.image}')` }}
                ></div>
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-label-caps text-[10px] text-tertiary tracking-widest font-semibold">
                    {sector.code}
                  </span>
                  <Building2 className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="relative z-10 space-y-2 mt-auto">
                  <h3 className="font-headline-md text-xl text-on-surface font-normal">
                    {sector.title}
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMMERCIAL ENGINEERING & STRUCTURAL SPECIFICATIONS */}
      <section className="w-full bg-surface-container-lowest py-20 lg:py-28">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-6 space-y-3">
              <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
                Precision Standards
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-on-surface font-light leading-tight">
                Commercial Engineering &amp; Structural Specifications
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-6">
              <p className="font-body-xl text-on-surface-variant font-light leading-relaxed">
                Unlike light residential assemblies, commercial architectural roofing faces immense
                hydrostatic loads, severe cyclical micro-expansions, and hurricane-velocity wind uplift
                pressures. Our systems are engineered from the purlin upward.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMMERCIAL_SPECS_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-surface-container-low p-8 lg:p-10 relative flex flex-col justify-between border border-white/10"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-[10px] uppercase text-tertiary tracking-widest">
                      {pillar.tag}
                    </span>
                    <span className="px-3 py-1 bg-surface-container-highest text-primary font-label-caps text-[10px] border border-white/10">
                      {pillar.code}
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-xl sm:text-2xl text-on-surface font-normal">
                    {pillar.title}
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 bg-surface-container p-4 flex items-center justify-between">
                  <span className="font-label-caps text-[10px] text-outline uppercase">
                    {pillar.metricLabel}
                  </span>
                  <span className="font-label-caps text-xs text-tertiary font-semibold">
                    {pillar.metricValue}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENTERPRISE GOVERNANCE & PROJECT MANAGEMENT */}
      <section className="w-full bg-surface py-20 lg:py-28">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="bg-surface-container-low p-3 relative border border-white/10">
                <div className="relative w-full h-[460px] sm:h-[520px] bg-surface-container overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw45nt7CMAEPB93-ItEQ7FxpWEOakbSI-SHtR56shBnKPBoxXpqmppdQXcZc4gwy68mibgoX1loyjmXCwqDCsmW8DlZseQF1iQG-Ic3PaYktrkPAOosyr_dUAtGW-zw76OTZPrW4aK_7_PAPv-aWHp3fHWtASr3MLQ1ioADABmWY0J5VPbVnS4D7jScrgdMTDK0vXZAy44PZ-kqxVwuzPjV34zVykCPi7MorFowy-0Teuoo4SA6-8n"
                    alt="Commercial project engineer reviewing architectural blueprints alongside standing seam roof"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-surface-container-highest p-6 hidden sm:block max-w-xs shadow-xl border border-white/10">
                  <span className="font-label-caps text-[10px] uppercase text-tertiary block mb-1">
                    Standard Of Excellence
                  </span>
                  <p className="font-body-sm text-xs text-on-surface font-light">
                    100% OSHA-30 superintendents on site every minute of active commercial framing.
                  </p>
                </div>
              </div>
            </div>

            {/* Text & Pillars Column */}
            <div className="lg:col-span-7 space-y-8 lg:pl-6">
              <div>
                <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary block mb-2">
                  Enterprise Governance
                </span>
                <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-on-surface leading-tight font-light">
                  Predictable Delivery Under Commercial Constraints
                </h2>
                <p className="font-body-lg text-on-surface-variant mt-4 font-light leading-relaxed">
                  High-profile projects run on ironclad critical path schedules. EliteMetal
                  integrates seamlessly with General Contractors, managing submittals, safety logs,
                  crane staging, and active building phases with precision.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-surface-container p-6 space-y-2 border border-white/5">
                  <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-wider block">
                    Dedicated PM
                  </span>
                  <h4 className="font-headline-md text-lg text-on-surface font-normal">
                    Single Point of Contact
                  </h4>
                  <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                    Direct accountability. Your dedicated PM provides weekly progress cadences, drone
                    documentation, and coordinated supplier logistics.
                  </p>
                </div>

                <div className="bg-surface-container p-6 space-y-2 border border-white/5">
                  <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-wider block">
                    Zero Incidents
                  </span>
                  <h4 className="font-headline-md text-lg text-on-surface font-normal">
                    OSHA 30 Certified
                  </h4>
                  <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                    Full tie-off compliance, perimeter safety lines, safety net deployments, and morning
                    JHA (Job Hazard Analysis) walkthroughs.
                  </p>
                </div>

                <div className="bg-surface-container p-6 space-y-2 border border-white/5">
                  <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-wider block">
                    Operational Uptime
                  </span>
                  <h4 className="font-headline-md text-lg text-on-surface font-normal">
                    Phased Installation
                  </h4>
                  <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                    Staged tear-offs and evening panel hoisting ensure zero disruption to ground-floor
                    retail or ongoing commercial tenant leases.
                  </p>
                </div>

                <div className="bg-surface-container p-6 space-y-2 border border-white/5">
                  <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-wider block">
                    BIM / VDC
                  </span>
                  <h4 className="font-headline-md text-lg text-on-surface font-normal">
                    Full Submittal Packs
                  </h4>
                  <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                    Revit BIM families, 3D clash-detection files, engineering seal calculations, and
                    SMACNA detail sets provided within 10 days of award.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMMERCIAL CASE STUDIES */}
      <section className="w-full bg-surface-container-low py-20 lg:py-28">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary block mb-2">
                Proven Execution
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-on-surface font-light">
                Commercial Case Studies
              </h2>
            </div>
            <span className="font-label-caps text-xs uppercase text-on-surface-variant">
              Selected Landmark Installations
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <article
                key={idx}
                className="bg-surface-container border border-white/10 flex flex-col justify-between overflow-hidden shadow-lg group"
              >
                <div className="relative w-full h-72 bg-surface-container-low overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 bg-surface-container-lowest/90 font-label-caps text-[10px] uppercase text-tertiary">
                    {cs.sector}
                  </div>
                </div>

                <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-outline text-xs font-label-caps uppercase">
                      <span>{cs.location}</span>
                      <span className="text-tertiary">{cs.sector}</span>
                    </div>
                    <h3 className="font-headline-md text-xl text-on-surface font-normal">
                      {cs.title}
                    </h3>
                    <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed font-light">
                      {cs.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="font-headline-md text-lg text-on-surface font-medium block">
                        {cs.scale}
                      </span>
                      <span className="block font-label-caps text-[9px] uppercase text-outline">
                        Square Feet
                      </span>
                    </div>
                    <span className="px-3 py-1 bg-surface-container-high text-on-surface font-label-caps text-[10px] uppercase border border-white/10">
                      {cs.material}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ARCHITECT & GC PARTNERSHIP PORTAL */}
      <section className="w-full bg-surface-container py-20 lg:py-28" id="architect-portal">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-primary-container p-8 md:p-14 relative overflow-hidden border border-tertiary/30 shadow-2xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-6">
                <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
                  Architect &amp; GC Portal
                </span>
                <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface leading-tight font-light">
                  BIM, CAD &amp; CSI Division 07 Resources
                </h2>
                <p className="font-body-md text-on-surface-variant leading-relaxed font-light text-sm">
                  We empower design teams with complete specification clarity. Access comprehensive
                  architectural libraries formatted for seamless drop-in placement into your
                  MasterFormat contract documents.
                </p>

                <div className="pt-2 space-y-3 font-body-sm text-xs text-on-surface">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0" />
                    <span>MasterFormat Division 07 41 13 (Metal Roof Panels)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0" />
                    <span>Autodesk Revit .RFA Families &amp; AutoCAD .DWG Sections</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0" />
                    <span>LEED v4.1 Credit Contributions (SS, EA, and MR)</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-surface-container-high p-6 flex flex-col justify-between hover:bg-surface-bright transition-colors border border-white/5">
                    <div className="space-y-1.5">
                      <span className="font-label-caps text-[10px] uppercase text-tertiary">
                        Specification Doc
                      </span>
                      <h4 className="font-headline-md text-lg text-on-surface font-normal">
                        CSI 3-Part Spec
                      </h4>
                      <p className="font-body-sm text-xs text-on-surface-variant font-light">
                        Full Word/PDF editable project manual specification package.
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 font-label-caps text-[11px] uppercase text-tertiary hover:text-white transition-colors"
                    >
                      <span>Download Spec (PDF)</span>
                      <Download className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="bg-surface-container-high p-6 flex flex-col justify-between hover:bg-surface-bright transition-colors border border-white/5">
                    <div className="space-y-1.5">
                      <span className="font-label-caps text-[10px] uppercase text-tertiary">
                        CAD Library
                      </span>
                      <h4 className="font-headline-md text-lg text-on-surface font-normal">
                        CAD Detail Package
                      </h4>
                      <p className="font-body-sm text-xs text-on-surface-variant font-light">
                        Over 60 pre-approved standard edge, valley, ridge, and parapet details.
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 font-label-caps text-[11px] uppercase text-tertiary hover:text-white transition-colors"
                    >
                      <span>Download DWG / RVT</span>
                      <Download className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="bg-surface-container-high p-6 flex flex-col justify-between hover:bg-surface-bright transition-colors border border-white/5">
                    <div className="space-y-1.5">
                      <span className="font-label-caps text-[10px] uppercase text-tertiary">
                        Environmental
                      </span>
                      <h4 className="font-headline-md text-lg text-on-surface font-normal">
                        LEED &amp; EPD Data
                      </h4>
                      <p className="font-body-sm text-xs text-on-surface-variant font-light">
                        EPD third-party declarations, recycled content metrics, and SRI tables.
                      </p>
                    </div>
                    <Link
                      href="/roofing-materials"
                      className="mt-6 inline-flex items-center gap-2 font-label-caps text-[11px] uppercase text-tertiary hover:text-white transition-colors"
                    >
                      <span>View Environmental Data</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="bg-surface-container-high p-6 flex flex-col justify-between hover:bg-surface-bright transition-colors border border-white/5">
                    <div className="space-y-1.5">
                      <span className="font-label-caps text-[10px] uppercase text-tertiary">
                        Custom Review
                      </span>
                      <h4 className="font-headline-md text-lg text-on-surface font-normal">
                        Peer Plan Review
                      </h4>
                      <p className="font-body-sm text-xs text-on-surface-variant font-light">
                        Submit redlines for immediate manufacturer thermal and uplift sign-off.
                      </p>
                    </div>
                    <a
                      href="#commercial-consultation"
                      className="mt-6 inline-flex items-center gap-2 font-label-caps text-[11px] uppercase text-tertiary hover:text-white transition-colors"
                    >
                      <span>Submit Plan Redlines</span>
                      <UploadCloud className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMMERCIAL CONSULTATION & RFP BID FORM */}
      <section
        className="w-full bg-surface-container-lowest py-20 lg:py-28"
        id="commercial-consultation"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Direct Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary block mb-2">
                  Initiate Procurement
                </span>
                <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface leading-tight font-light">
                  Request Commercial Bid &amp; Consultation
                </h2>
                <p className="font-body-lg text-on-surface-variant mt-4 font-light leading-relaxed">
                  Connect directly with our commercial estimating division. We provide initial budget
                  estimates, engineered value options, and critical lead time guidance within 48
                  hours.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="bg-surface-container p-6 flex items-start gap-4 border border-white/5">
                  <Phone className="w-5 h-5 text-tertiary mt-1 shrink-0" />
                  <div>
                    <span className="font-label-caps text-[10px] text-outline uppercase block">
                      Direct Commercial Bid Line
                    </span>
                    <a
                      href={SITE_CONFIG.phoneRaw}
                      className="font-headline-md text-xl text-on-surface hover:text-tertiary transition-colors"
                    >
                      {SITE_CONFIG.phoneDisplayExt}
                    </a>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-1 font-light">
                      Dedicated to Architects, Estimators, and General Contractors
                    </p>
                  </div>
                </div>

                <div className="bg-surface-container p-6 flex items-start gap-4 border border-white/5">
                  <Mail className="w-5 h-5 text-tertiary mt-1 shrink-0" />
                  <div>
                    <span className="font-label-caps text-[10px] text-outline uppercase block">
                      Direct Submittals Email
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.commercialEmail}`}
                      className="font-body-lg text-on-surface hover:text-tertiary transition-colors font-medium text-sm"
                    >
                      {SITE_CONFIG.commercialEmail}
                    </a>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-1 font-light">
                      Send RFP packages, plan links, and specification schedules
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RFP Form */}
            <div className="lg:col-span-7">
              <CommercialBidForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
