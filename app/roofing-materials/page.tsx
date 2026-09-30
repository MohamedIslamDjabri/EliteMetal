import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Sliders, ShieldCheck, Check, Sparkles, Leaf, Recycle, Award } from 'lucide-react';
import MaterialConfigurator from '@/components/materials/MaterialConfigurator';
import MaterialComparisonTable from '@/components/materials/MaterialComparisonTable';
import SampleKitForm from '@/components/materials/SampleKitForm';
import { MATERIAL_SPECS } from '@/constants/data';

export const metadata: Metadata = {
  title: 'Roofing Materials | Architectural Specifier & Metal Directory',
  description:
    'Explore premium metals, precision alloys, and engineered coatings formulated for architectural distinction and generational endurance.',
};

export default function RoofingMaterialsPage() {
  const galvalume = MATERIAL_SPECS.find((m) => m.id === 'galvalume')!;
  const aluminum = MATERIAL_SPECS.find((m) => m.id === 'aluminum')!;
  const copper = MATERIAL_SPECS.find((m) => m.id === 'copper')!;
  const zinc = MATERIAL_SPECS.find((m) => m.id === 'zinc')!;
  const wallPanels = MATERIAL_SPECS.find((m) => m.id === 'wall-panels')!;

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* SECTION 1: MATERIALS HERO */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest py-20 lg:py-28 px-4 sm:px-6 lg:px-12 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Editorial Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-3 px-3 py-1.5 mb-6 bg-primary-container text-tertiary border border-tertiary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
                  Architectural Material Specifier • 2025 Edition
                </span>
              </div>

              <h1 className="font-headline-hero text-4xl sm:text-5xl lg:text-7xl text-on-surface mb-6 tracking-tight font-light leading-[1.08]">
                Choose the Finish. <br />
                <span className="italic font-normal text-tertiary">Define the Character.</span>
              </h1>

              <p className="font-body-xl text-on-surface-variant max-w-xl mb-10 font-light leading-relaxed">
                Explore premium metals, precision alloys, and engineered coatings formulated for
                architectural distinction and generational endurance.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#sample-box"
                  className="px-8 py-4 bg-tertiary text-on-tertiary font-label-caps text-xs uppercase tracking-wider transition-all duration-300 hover:bg-on-surface hover:text-surface-container-lowest shadow-xl flex items-center gap-3 font-semibold"
                >
                  <span>Request Material Swatches</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#comparison-matrix"
                  className="px-8 py-4 bg-surface-container-high text-on-surface font-label-caps text-xs uppercase tracking-wider transition-colors duration-300 hover:bg-surface-bright flex items-center gap-2 border border-white/10"
                >
                  <Sliders className="w-4 h-4 text-tertiary" />
                  <span>Compare Specifications</span>
                </a>
              </div>

              {/* Editorial Metrology Strip */}
              <div className="mt-12 pt-8 w-full max-w-lg grid grid-cols-3 gap-6 bg-surface-container-low/60 p-5 border border-white/5">
                <div>
                  <p className="font-headline-md text-2xl text-on-surface font-normal">
                    50<span className="text-tertiary text-base font-light ml-0.5">Yr+</span>
                  </p>
                  <p className="font-label-caps text-[9px] text-outline uppercase tracking-wider mt-1">
                    Non-Prorated Base
                  </p>
                </div>
                <div>
                  <p className="font-headline-md text-2xl text-on-surface font-normal">
                    100<span className="text-tertiary text-base font-light ml-0.5">%</span>
                  </p>
                  <p className="font-label-caps text-[9px] text-outline uppercase tracking-wider mt-1">
                    Cradle Recyclable
                  </p>
                </div>
                <div>
                  <p className="font-headline-md text-2xl text-on-surface font-normal">
                    Class <span className="text-tertiary">4</span>
                  </p>
                  <p className="font-label-caps text-[9px] text-outline uppercase tracking-wider mt-1">
                    Impact Rated
                  </p>
                </div>
              </div>
            </div>

            {/* Right Architectural Macro Hero Composition */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative w-full h-[460px] sm:h-[520px] overflow-hidden shadow-2xl bg-surface-container border border-white/10">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChcmPRlKTWCY-PuE8ysYgL1jYM3eSchHZw9jOjMLxu7JZOT64EDs-f5oD6lIRAcSRqEvIX90PINVbhw8Iru13hNaOoa1Tn_r3boLCT1jyfXTzrFAEVJxpmXyc7eRykGmziwAIP8U3ie2OOlIUoeMTPNPlO1Yxfl0lNTpihllbHutJxLljMMBpyjnDV6mlKazW3UhuFL8BsqVl9ezARwJb7BHzcv3tt8WuIctooYr9IOyZXMp523RJd"
                  alt="Macro close-up photograph of architectural dark standing-seam metal roofing panel"
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-black/20 pointer-events-none"></div>

                {/* Inset Spec Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-surface-container-lowest/90 backdrop-blur-md shadow-lg border border-white/10">
                  <div className="flex items-center justify-between text-tertiary font-label-caps text-[10px] uppercase tracking-wider mb-2">
                    <span>Core Spec Focus</span>
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <p className="font-headline-md text-lg text-on-surface mb-1 font-normal">
                    Pre-weathered Quartz-Zinc
                  </p>
                  <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                    Class A Fire Resistance • Self-healing natural carbonate layer • Non-combustible
                    European alloy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPREHENSIVE MATERIAL CATALOG (BENTO MOSAIC) */}
      <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-background border-b border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary block mb-2">
                Material Directory
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-on-surface font-light">
                Engineered Substrates &amp; Finishes
              </h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md font-light leading-relaxed">
              Every alloy is formed to exacting metallurgical standards. Browse our core
              architectural profiles formulated for lifetime residential and landmark estate
              installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* CARD 1: Standing Seam Galvalume Steel (7 cols) */}
            <div className="lg:col-span-7 bg-surface-container-low overflow-hidden shadow-xl flex flex-col justify-between group border border-white/10">
              <div>
                <div className="relative h-80 w-full overflow-hidden bg-surface-container">
                  <Image
                    src={galvalume.image}
                    alt={galvalume.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-surface-container-lowest/80 backdrop-blur rounded-none text-tertiary font-label-caps text-[10px] uppercase tracking-wider border border-tertiary/20">
                    {galvalume.badge}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-headline-lg text-2xl text-on-surface font-normal">
                      {galvalume.name}
                    </h3>
                    <span className="font-label-caps text-[10px] uppercase text-outline">
                      {galvalume.gauge}
                    </span>
                  </div>
                  <p className="text-tertiary font-label-md text-xs mb-4 uppercase tracking-wider">
                    Finish: {galvalume.finish}
                  </p>
                  <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed font-light">
                    {galvalume.description}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8">
                <div className="p-4 bg-surface-container/40 border border-white/5 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span className="font-label-caps text-[9px] text-outline uppercase block">
                      Tensile Yield
                    </span>
                    <span className="font-body-md text-sm text-on-surface font-medium mt-0.5 block">
                      {galvalume.tensileYield}
                    </span>
                  </div>
                  <div>
                    <span className="font-label-caps text-[9px] text-outline uppercase block">
                      Warranty
                    </span>
                    <span className="font-body-md text-sm text-on-surface font-medium mt-0.5 block">
                      {galvalume.warranty}
                    </span>
                  </div>
                  <div>
                    <span className="font-label-caps text-[9px] text-outline uppercase block">
                      Wind Resistance
                    </span>
                    <span className="font-body-md text-sm text-on-surface font-medium mt-0.5 block">
                      {galvalume.windResistance}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: Marine-Grade Aluminum (5 cols) */}
            <div className="lg:col-span-5 bg-surface-container-low overflow-hidden shadow-xl flex flex-col justify-between group border border-white/10">
              <div>
                <div className="relative h-80 w-full overflow-hidden bg-surface-container">
                  <Image
                    src={aluminum.image}
                    alt={aluminum.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-surface-container-lowest/80 backdrop-blur text-tertiary font-label-caps text-[10px] uppercase tracking-wider border border-tertiary/20">
                    {aluminum.badge}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-headline-lg text-2xl text-on-surface font-normal">
                      {aluminum.name}
                    </h3>
                    <span className="font-label-caps text-[10px] uppercase text-outline">
                      {aluminum.gauge}
                    </span>
                  </div>
                  <p className="text-tertiary font-label-md text-xs mb-4 uppercase tracking-wider">
                    Finish: {aluminum.finish}
                  </p>
                  <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed font-light">
                    {aluminum.description}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8">
                <div className="p-4 bg-surface-container/40 border border-white/5 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span className="font-label-caps text-[9px] text-outline uppercase block">
                      Salt Fog Test
                    </span>
                    <span className="font-body-md text-sm text-on-surface font-medium mt-0.5 block">
                      {aluminum.saltFogTest}
                    </span>
                  </div>
                  <div>
                    <span className="font-label-caps text-[9px] text-outline uppercase block">
                      Weight
                    </span>
                    <span className="font-body-md text-sm text-on-surface font-medium mt-0.5 block">
                      {aluminum.weight}
                    </span>
                  </div>
                  <div>
                    <span className="font-label-caps text-[9px] text-outline uppercase block">
                      Rust Resistance
                    </span>
                    <span className="font-body-md text-sm text-on-surface font-medium mt-0.5 block">
                      {aluminum.rustResistance}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: Natural Copper (4 cols) */}
            <div className="lg:col-span-4 bg-surface-container-low overflow-hidden shadow-xl flex flex-col justify-between group border border-white/10">
              <div>
                <div className="relative h-64 w-full overflow-hidden bg-surface-container">
                  <Image
                    src={copper.image}
                    alt={copper.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-surface-container-lowest/80 backdrop-blur text-tertiary font-label-caps text-[10px] uppercase tracking-wider border border-tertiary/20">
                    {copper.badge}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-headline-md text-xl text-on-surface font-normal">
                      {copper.name}
                    </h3>
                    <span className="font-label-caps text-[10px] uppercase text-outline">
                      {copper.gauge}
                    </span>
                  </div>
                  <p className="text-tertiary font-label-md text-xs mb-3 uppercase tracking-wider">
                    Finish: {copper.finish}
                  </p>
                  <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed font-light">
                    {copper.description}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8">
                <div className="p-4 bg-surface-container/40 border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="font-label-caps text-[9px] text-outline uppercase block">
                      Expected Life
                    </span>
                    <span className="font-headline-md text-xl text-tertiary font-normal">
                      {copper.expectedLife}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-label-caps text-[9px] text-outline uppercase block">
                      Maintenance
                    </span>
                    <span className="font-body-md text-xs text-on-surface font-medium">
                      Zero Synthetic
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 4: Architectural Zinc (4 cols) */}
            <div className="lg:col-span-4 bg-surface-container-low overflow-hidden shadow-xl flex flex-col justify-between group border border-white/10">
              <div>
                <div className="relative h-64 w-full overflow-hidden bg-surface-container">
                  <Image
                    src={zinc.image}
                    alt={zinc.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-surface-container-lowest/80 backdrop-blur text-tertiary font-label-caps text-[10px] uppercase tracking-wider border border-tertiary/20">
                    {zinc.badge}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-headline-md text-xl text-on-surface font-normal">
                      {zinc.name}
                    </h3>
                    <span className="font-label-caps text-[10px] uppercase text-outline">
                      {zinc.gauge}
                    </span>
                  </div>
                  <p className="text-tertiary font-label-md text-xs mb-3 uppercase tracking-wider">
                    Finish: {zinc.finish}
                  </p>
                  <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed font-light">
                    {zinc.description}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8">
                <div className="p-4 bg-surface-container/40 border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="font-label-caps text-[9px] text-outline uppercase block">
                      Passivation
                    </span>
                    <span className="font-headline-md text-xl text-on-surface font-normal">
                      Continuous
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-label-caps text-[9px] text-outline uppercase block">
                      Expected Life
                    </span>
                    <span className="font-headline-md text-xl text-tertiary font-normal">
                      {zinc.expectedLife}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 5: Wall & Soffit Panels (4 cols) */}
            <div className="lg:col-span-4 bg-surface-container-low overflow-hidden shadow-xl flex flex-col justify-between group border border-white/10">
              <div>
                <div className="relative h-64 w-full overflow-hidden bg-surface-container">
                  <Image
                    src={wallPanels.image}
                    alt={wallPanels.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-surface-container-lowest/80 backdrop-blur text-tertiary font-label-caps text-[10px] uppercase tracking-wider border border-tertiary/20">
                    {wallPanels.badge}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-headline-md text-xl text-on-surface font-normal">
                      {wallPanels.name}
                    </h3>
                    <span className="font-label-caps text-[10px] uppercase text-outline">
                      {wallPanels.gauge}
                    </span>
                  </div>
                  <p className="text-tertiary font-label-md text-xs mb-3 uppercase tracking-wider">
                    Finish: {wallPanels.finish}
                  </p>
                  <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed font-light">
                    {wallPanels.description}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8">
                <div className="p-4 bg-surface-container/40 border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="font-label-caps text-[9px] text-outline uppercase block">
                      Rainscreen
                    </span>
                    <span className="font-headline-md text-xl text-on-surface font-normal">
                      ASTM E283
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-label-caps text-[9px] text-outline uppercase block">
                      Fastener
                    </span>
                    <span className="font-body-md text-xs text-on-surface font-medium">
                      100% Concealed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE MATERIAL CONFIGURATOR */}
      <MaterialConfigurator />

      {/* SECTION 4: DETAILED COMPARISON TABLE */}
      <MaterialComparisonTable />

      {/* SECTION 5: SUSTAINABLE ARCHITECTURAL STANDARDS */}
      <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-surface-container-lowest border-b border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
                Ecological Stewardship
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight font-light">
                Sustainable Architectural Standards
              </h2>
              <p className="font-body-lg text-on-surface-variant font-light leading-relaxed">
                Metal roofing is inherently circular. Unlike petroleum asphalt shingles that
                contribute 11 million tons of toxic landfill waste annually, our metal assemblies
                offer 100% cradle-to-cradle lifecycle integrity.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 bg-surface-container flex items-start gap-4 border border-white/5">
                  <Leaf className="w-5 h-5 text-tertiary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-headline-md text-lg text-on-surface mb-1 font-normal">
                      Cool Roof System (CRRC Verified)
                    </h4>
                    <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                      Our infrared-reflective coatings lower roof attic surface temperatures by up to
                      50°F, drastically reducing indoor HVAC loads.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-surface-container flex items-start gap-4 border border-white/5">
                  <Recycle className="w-5 h-5 text-tertiary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-headline-md text-lg text-on-surface mb-1 font-normal">
                      Cradle-to-Cradle Recyclability
                    </h4>
                    <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                      Formulated with up to 45% post-consumer recycled aluminum and steel, fully
                      recyclable without downcycling at end of life.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-surface-container flex items-start gap-4 border border-white/5">
                  <Award className="w-5 h-5 text-tertiary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-headline-md text-lg text-on-surface mb-1 font-normal">
                      LEED v4 Building Credits
                    </h4>
                    <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                      Contributes directly to SS Credit (Heat Island Reduction) and MR Credit (Building
                      Product Disclosure &amp; Optimization).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Data Visualization / Heat Deflection Chart */}
            <div className="lg:col-span-7 mt-8 lg:mt-0">
              <div className="p-6 sm:p-8 bg-surface-container-low border border-white/10 shadow-xl">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                  <div>
                    <span className="font-label-caps text-[10px] uppercase tracking-wider text-outline block">
                      Thermal Efficiency Analysis
                    </span>
                    <span className="font-headline-md text-xl text-on-surface font-normal">
                      Cool Roof Surface Heat Deflection
                    </span>
                  </div>
                  <div className="px-3 py-1 bg-tertiary/20 text-tertiary font-label-caps text-[10px] uppercase">
                    ASTM E1980
                  </div>
                </div>

                {/* SVG Metric Visualization */}
                <div className="w-full bg-surface-container-lowest p-6 mb-6 border border-white/5">
                  <svg
                    className="w-full h-auto text-on-surface"
                    viewBox="0 0 600 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="40" y1="40" x2="560" y2="40" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
                    <line x1="40" y1="100" x2="560" y2="100" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
                    <line x1="40" y1="160" x2="560" y2="160" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
                    <line x1="40" y1="210" x2="560" y2="210" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />

                    <text x="30" y="44" fill="currentColor" fillOpacity="0.5" fontSize="10" textAnchor="end">
                      180°F
                    </text>
                    <text x="30" y="104" fill="currentColor" fillOpacity="0.5" fontSize="10" textAnchor="end">
                      140°F
                    </text>
                    <text x="30" y="164" fill="currentColor" fillOpacity="0.5" fontSize="10" textAnchor="end">
                      100°F
                    </text>
                    <text x="30" y="214" fill="currentColor" fillOpacity="0.5" fontSize="10" textAnchor="end">
                      Ambient
                    </text>

                    {/* Bar 1 */}
                    <rect x="80" y="50" width="80" height="160" rx="2" fill="#3c4a60" />
                    <text x="120" y="40" fill="currentColor" fontSize="12" fontWeight="600" textAnchor="middle">
                      175°F
                    </text>
                    <text x="120" y="228" fill="currentColor" fillOpacity="0.7" fontSize="10" textAnchor="middle">
                      Dark Asphalt
                    </text>

                    {/* Bar 2 */}
                    <rect x="220" y="90" width="80" height="120" rx="2" fill="#8f9097" />
                    <text x="260" y="80" fill="currentColor" fontSize="12" fontWeight="600" textAnchor="middle">
                      142°F
                    </text>
                    <text x="260" y="228" fill="currentColor" fillOpacity="0.7" fontSize="10" textAnchor="middle">
                      Uncoated Steel
                    </text>

                    {/* Bar 3 */}
                    <rect x="360" y="145" width="80" height="65" rx="2" fill="#f0bd89" />
                    <text x="400" y="135" fill="#f0bd89" fontSize="12" fontWeight="700" textAnchor="middle">
                      104°F
                    </text>
                    <text x="400" y="228" fill="#f0bd89" fontSize="10" fontWeight="600" textAnchor="middle">
                      Elite Cool Metal
                    </text>

                    <path d="M 120 50 Q 260 90 400 145" stroke="#f0bd89" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-surface-container border border-white/5">
                    <span className="font-headline-md text-2xl text-tertiary block font-normal">
                      40% Less
                    </span>
                    <span className="font-label-caps text-[10px] text-outline block mt-1 uppercase">
                      Peak Attic Heat Gain
                    </span>
                  </div>
                  <div className="p-4 bg-surface-container border border-white/5">
                    <span className="font-headline-md text-2xl text-on-surface block font-normal">
                      Up to 25%
                    </span>
                    <span className="font-label-caps text-[10px] text-outline block mt-1 uppercase">
                      Annual Cooling Savings
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SAMPLE KIT CTA */}
      <SampleKitForm />
    </div>
  );
}
