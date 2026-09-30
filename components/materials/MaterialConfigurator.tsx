'use client';

import React, { useState } from 'react';
import { Sliders, ShieldCheck, Check, Sparkles, ArrowRight } from 'lucide-react';
import { COLOR_FINISHES } from '@/constants/data';

interface ConfigState {
  profile: string;
  metal: string;
  finish: string;
  colorHex: string;
  sri: number;
  sr: number;
  fastener: string;
  warranty: string;
}

export default function MaterialConfigurator() {
  const [config, setConfig] = useState<ConfigState>({
    profile: '1.5" Snap-Lock',
    metal: 'Galvalume Steel',
    finish: 'Charcoal Matte',
    colorHex: '#2b2e34',
    sri: 31,
    sr: 0.28,
    fastener: 'Concealed Floating Expansion Cleat',
    warranty: '50-Year Non-Prorated',
  });

  const [addedToKit, setAddedToKit] = useState(false);

  const handleProfileChange = (profile: string) => {
    let fastener = 'Concealed Floating Expansion Cleat';
    if (profile.includes('Mechanical')) {
      fastener = 'Heavy Continuous Mechanical Rib Cleat';
    } else if (profile.includes('Flush')) {
      fastener = 'Interlocking Recessed Flange';
    }

    setConfig((prev) => ({
      ...prev,
      profile,
      fastener,
    }));
  };

  const handleMetalChange = (metal: string) => {
    let warranty = '50-Year Non-Prorated';
    if (metal === 'Copper') {
      warranty = '100+ Year Generational Life';
    } else if (metal === 'Zinc') {
      warranty = '80+ Year Self-Healing Life';
    }

    setConfig((prev) => ({
      ...prev,
      metal,
      warranty,
    }));
  };

  const handleColorChange = (finishName: string, hex: string, sri: number, sr: number) => {
    setConfig((prev) => ({
      ...prev,
      finish: finishName,
      colorHex: hex,
      sri,
      sr,
    }));
  };

  const handleAddToKit = () => {
    setAddedToKit(true);
    setTimeout(() => setAddedToKit(false), 3000);
    // Smooth scroll to sample kit form
    const el = document.getElementById('sample-box');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-surface-container-lowest border-y border-white/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-tertiary font-label-caps text-xs uppercase tracking-widest mb-3">
            <Sliders className="w-4 h-4" />
            <span>Interactive Visualizer & Lab Spec</span>
          </div>
          <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight font-light">
            Architectural Configurator
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mt-3 font-light leading-relaxed">
            Select seam profile geometries, substrate metals, and architectural pigments to
            evaluate thermal indices and engineered performance values in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls & Selections (7 Columns) */}
          <div className="lg:col-span-7 space-y-8 bg-surface-container-low p-6 sm:p-8 border border-white/10 shadow-lg">
            {/* Control 1: Seam Profile */}
            <div>
              <label className="font-label-caps text-xs uppercase tracking-wider text-outline block mb-3">
                1. Select Standing Seam Profile
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: '1.5" Snap-Lock', title: '1.5" Snap-Lock', sub: 'Residential Standard' },
                  { id: '2.0" Mechanical Seam', title: '2.0" Mechanical', sub: 'Low Slope & Commercial' },
                  { id: 'Flush Reveal Tile', title: 'Flush Reveal Tile', sub: 'Contemporary Facets' },
                ].map((item) => {
                  const active = config.profile === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleProfileChange(item.id)}
                      className={`px-4 py-3.5 text-left transition-all border ${
                        active
                          ? 'bg-surface-container text-tertiary border-tertiary shadow-sm'
                          : 'bg-surface-container-high text-on-surface border-transparent hover:bg-surface-bright'
                      }`}
                    >
                      <span className="font-label-md text-sm block font-medium">{item.title}</span>
                      <span className="font-body-sm text-xs text-outline block mt-0.5">{item.sub}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 2: Substrate Metal */}
            <div>
              <label className="font-label-caps text-xs uppercase tracking-wider text-outline block mb-3">
                2. Base Metal Substrate
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'Galvalume Steel', tag: 'Steel', spec: '24ga Galvalume' },
                  { id: 'Marine Aluminum', tag: 'Alloy', spec: '.040" Aluminum' },
                  { id: 'Copper', tag: 'Noble', spec: '16 oz Copper' },
                  { id: 'Zinc', tag: 'European', spec: 'Rheinzink 0.8mm' },
                ].map((item) => {
                  const active = config.metal === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleMetalChange(item.id)}
                      className={`p-3 text-center transition-all border ${
                        active
                          ? 'bg-surface-container border-tertiary shadow-sm'
                          : 'bg-surface-container-high border-transparent hover:bg-surface-bright'
                      }`}
                    >
                      <span
                        className={`font-label-caps text-[10px] uppercase block ${
                          active ? 'text-tertiary font-semibold' : 'text-outline'
                        }`}
                      >
                        {item.tag}
                      </span>
                      <span className="font-body-sm text-xs font-semibold text-on-surface mt-1 block">
                        {item.spec}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 3: Finish Palette */}
            <div>
              <label className="font-label-caps text-xs uppercase tracking-wider text-outline block mb-3">
                3. Pigment & Surface Patina
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {COLOR_FINISHES.slice(0, 5).map((color) => {
                  const active = config.finish === color.name;
                  return (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => handleColorChange(color.name, color.hex, color.sri, color.sr)}
                      className={`p-3 flex flex-col items-center gap-2.5 transition-all border text-center ${
                        active
                          ? 'bg-surface-container text-tertiary border-tertiary shadow-sm'
                          : 'bg-surface-container-high text-on-surface border-transparent hover:bg-surface-bright'
                      }`}
                    >
                      <span
                        className="w-8 h-8 shadow-inner border border-white/20 shrink-0"
                        style={{ backgroundColor: color.hex }}
                      ></span>
                      <span className="font-label-caps text-[10px] leading-tight line-clamp-1">
                        {color.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-Time Spec Readout Panel (5 Columns) */}
          <div className="lg:col-span-5 bg-surface-container p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
                  Real-Time Specification Sheet
                </span>
                <span className="px-2 py-0.5 text-[10px] font-label-caps uppercase bg-primary-container text-primary border border-primary/20">
                  Live Spec
                </span>
              </div>

              {/* Dynamic Selected Summary Header */}
              <div className="p-5 bg-surface-container-lowest border border-white/5 mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 shadow-lg border border-white/20 flex items-center justify-center shrink-0 transition-colors duration-300"
                    style={{ backgroundColor: config.colorHex }}
                  >
                    <Sparkles className="w-4 h-4 text-white/60" />
                  </div>
                  <div>
                    <p className="font-headline-md text-xl text-on-surface font-normal">
                      {config.finish}
                    </p>
                    <p className="font-body-sm text-xs text-outline mt-0.5">
                      {config.metal} • {config.profile}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dynamic Metric Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-surface-container-low border border-white/5">
                  <span className="font-label-caps text-[10px] uppercase tracking-wider text-outline block mb-1">
                    Solar Reflectance (SRI)
                  </span>
                  <span className="font-headline-lg text-2xl lg:text-3xl text-tertiary font-normal">
                    {config.sri}
                  </span>
                  <span className="font-body-sm text-[11px] text-outline block mt-1">
                    LEED Certified Base
                  </span>
                </div>
                <div className="p-4 bg-surface-container-low border border-white/5">
                  <span className="font-label-caps text-[10px] uppercase tracking-wider text-outline block mb-1">
                    Solar Reflectivity
                  </span>
                  <span className="font-headline-lg text-2xl lg:text-3xl text-on-surface font-normal">
                    {config.sr}
                  </span>
                  <span className="font-body-sm text-[11px] text-outline block mt-1">
                    Cool Roof Rated (CRRC)
                  </span>
                </div>
              </div>

              {/* Engineering Checklist */}
              <div className="space-y-3 bg-surface-container-low/70 p-4 border border-white/5 text-on-surface-variant font-body-sm text-xs">
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span>Fastener Mechanism:</span>
                  <span className="font-medium text-on-surface text-right">{config.fastener}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span>Thermal Movement:</span>
                  <span className="font-medium text-on-surface text-right">
                    Continuous Sliding Track
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span>Warranty Coverage:</span>
                  <span className="font-medium text-tertiary text-right">{config.warranty}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span>Fire Rating Class:</span>
                  <span className="font-medium text-on-surface text-right">Class A Non-Combustible</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={handleAddToKit}
                className="w-full py-4 bg-tertiary hover:bg-on-surface text-on-tertiary hover:text-surface-container-lowest font-label-caps text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 font-semibold"
              >
                {addedToKit ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Configuration Added to Sample Kit</span>
                  </>
                ) : (
                  <>
                    <span>Add This Configuration to Sample Kit</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
