'use client';

import React, { useState } from 'react';
import { Sparkles, Radio, Check, ArrowRight } from 'lucide-react';

export default function ResidentialSpecStudio() {
  const [substrate, setSubstrate] = useState('24-Gauge Galvalume® Steel');
  const [seamHeight, setSeamHeight] = useState('1.5"');
  const [activeColor, setActiveColor] = useState({
    name: 'Matte Obsidian',
    hex: '#121417',
    desc: 'Architectural charcoal black with non-glare micro-texture',
    sri: 34,
  });

  const colors = [
    { name: 'Matte Obsidian', hex: '#121417', desc: 'Architectural charcoal black with non-glare micro-texture', sri: 34 },
    { name: 'Slate Zinc', hex: '#3d444b', desc: 'Neutral mid-tone zinc with subtle metallic flakes', sri: 38 },
    { name: 'Aged Bronze', hex: '#42372c', desc: 'Deep earth bronze with warm undertones', sri: 33 },
    { name: 'Champagne Metallic', hex: '#8a8377', desc: 'Reflective metallic champagne designed for high solar reflectance', sri: 52 },
    { name: 'Natural Copper', hex: '#a66a38', desc: 'Solid untreated copper ready to naturally age across decades', sri: 44 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="materials-studio">
      {/* Controls Column */}
      <div className="lg:col-span-5 space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-tertiary"></span>
            <span className="font-label-caps text-xs uppercase text-tertiary tracking-widest">
              Architectural Specifier
            </span>
          </div>
          <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-light">
            Material &amp; Finish Studio
          </h2>
          <p className="mt-2 font-body-md text-on-surface-variant font-light text-sm">
            Configure panel heights, structural substrates, and custom PVDF color formulations tailored
            to your regional climate.
          </p>
        </div>

        {/* 1. Substrate Selector */}
        <div className="space-y-3">
          <label className="block font-label-caps text-[11px] uppercase text-on-surface tracking-wider">
            1. Select Metal Substrate
          </label>
          <div className="space-y-2.5">
            {[
              {
                id: '24-Gauge Galvalume® Steel',
                title: '24-Gauge Galvalume® Steel',
                sub: 'Structural high-tensile AZ50 alloy with 70% PVDF Kynar 500',
              },
              {
                id: 'Marine-Grade Aluminum (0.040")',
                title: 'Marine-Grade Aluminum (0.040")',
                sub: 'Impervious to saltwater corrosion, ideal within 3 miles of coastlines',
              },
              {
                id: '16 oz. Architectural Cold-Rolled Copper',
                title: '16 oz. Architectural Cold-Rolled Copper',
                sub: 'Generational living finish that naturally patinas into deep oxide & verdigris',
              },
            ].map((sub) => {
              const active = substrate === sub.id;
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setSubstrate(sub.id)}
                  className={`w-full text-left p-4 transition-all border flex items-center justify-between ${
                    active
                      ? 'bg-surface-container-high border-tertiary shadow-sm'
                      : 'bg-surface-container-low border-white/5 hover:bg-surface-container'
                  }`}
                >
                  <div className="pr-4">
                    <div className="font-label-md text-sm text-on-surface font-medium">{sub.title}</div>
                    <div className="font-body-sm text-xs text-outline mt-0.5">{sub.sub}</div>
                  </div>
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      active ? 'border-tertiary bg-tertiary' : 'border-outline'
                    }`}
                  >
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-surface-dim"></span>}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Seam Height */}
        <div className="space-y-3">
          <label className="block font-label-caps text-[11px] uppercase text-on-surface tracking-wider">
            2. Standing Seam Profile Height
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { height: '1.0"', label: 'Low Profile' },
              { height: '1.5"', label: 'Signature Standard' },
              { height: '2.0"', label: 'High Shadow' },
            ].map((s) => {
              const active = seamHeight === s.height;
              return (
                <button
                  key={s.height}
                  type="button"
                  onClick={() => setSeamHeight(s.height)}
                  className={`p-3.5 text-center transition-all border ${
                    active
                      ? 'bg-surface-container-high border-tertiary shadow-sm'
                      : 'bg-surface-container-low border-white/5 hover:bg-surface-container'
                  }`}
                >
                  <span
                    className={`block font-headline-md text-xl ${
                      active ? 'text-tertiary font-medium' : 'text-on-surface'
                    }`}
                  >
                    {s.height}
                  </span>
                  <span
                    className={`font-label-caps text-[9px] uppercase mt-1 block ${
                      active ? 'text-tertiary' : 'text-outline'
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Colors */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="block font-label-caps text-[11px] uppercase text-on-surface tracking-wider">
              3. PVDF Architectural Finish
            </label>
            <span className="font-label-caps text-xs text-tertiary">{activeColor.name}</span>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {colors.map((c) => {
              const active = activeColor.name === c.name;
              return (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setActiveColor(c)}
                  className={`h-12 w-full transition-all border ${
                    active ? 'border-tertiary scale-105 shadow-md' : 'border-white/10 hover:border-white/30'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                  aria-label={c.name}
                ></button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Material Preview Stage */}
      <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-10 border border-white/10 shadow-2xl flex flex-col justify-between">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-2">
            <div>
              <span className="font-label-caps text-[10px] uppercase text-outline tracking-wider block">
                Live Specimen Render
              </span>
              <h3 className="font-headline-md text-xl sm:text-2xl text-on-surface font-normal">
                {activeColor.name} / {seamHeight} Seam
              </h3>
              <p className="font-body-sm text-xs text-tertiary">{substrate}</p>
            </div>
            <span className="px-3 py-1 bg-surface-container-high text-tertiary font-label-caps text-[10px] uppercase tracking-wider self-start sm:self-auto border border-tertiary/20">
              Architectural Grade
            </span>
          </div>

          {/* SVG Diagram */}
          <div className="relative bg-surface-container-low p-6 sm:p-8 mb-6 flex flex-col items-center justify-center min-h-[260px] border border-white/5">
            <svg
              className="w-full max-w-lg text-outline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 600 160"
            >
              {/* Seam Rib 1 */}
              <path
                d={
                  seamHeight === '1.0"'
                    ? 'M 40 130 L 120 130 L 120 70 L 132 70 L 132 130'
                    : seamHeight === '2.0"'
                    ? 'M 40 130 L 120 130 L 120 15 L 132 15 L 132 130'
                    : 'M 40 130 L 120 130 L 120 40 L 132 40 L 132 130'
                }
                stroke="#f0bd89"
                strokeWidth="4"
              />
              <line x1="132" y1="130" x2="330" y2="130" stroke="#bcc7dd" strokeWidth="4" />
              {/* Seam Rib 2 */}
              <path
                d={
                  seamHeight === '1.0"'
                    ? 'M 330 130 L 330 70 L 342 70 L 342 130'
                    : seamHeight === '2.0"'
                    ? 'M 330 130 L 330 15 L 342 15 L 342 130'
                    : 'M 330 130 L 330 40 L 342 40 L 342 130'
                }
                stroke="#f0bd89"
                strokeWidth="4"
              />
              <line x1="342" y1="130" x2="540" y2="130" stroke="#bcc7dd" strokeWidth="4" />
              <rect x="333" y="90" width="16" height="40" fill="#3c4a60" />

              <line x1="120" y1="20" x2="342" y2="20" stroke="#8f9097" strokeDasharray="4 4" strokeWidth="1" />
              <text x="231" y="14" fill="#8f9097" fontSize="11" textAnchor="middle" fontFamily="sans-serif">
                16&quot; TO 18&quot; PANEL ON CENTER
              </text>
              <line x1="80" y1="40" x2="80" y2="130" stroke="#8f9097" strokeDasharray="4 4" strokeWidth="1" />
              <text x="70" y="88" fill="#f0bd89" fontSize="12" fontWeight="600" textAnchor="end" fontFamily="sans-serif">
                {seamHeight} SEAM
              </text>
            </svg>

            {/* Spec chip overlay */}
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-surface-container-high/90 px-4 py-2.5 w-full justify-between border border-white/5">
              <div className="flex items-center gap-3">
                <div
                  className="w-5 h-5 border border-white/20 shadow-sm shrink-0"
                  style={{ backgroundColor: activeColor.hex }}
                ></div>
                <span className="font-body-sm text-xs text-on-surface">{activeColor.desc}</span>
              </div>
              <span className="font-label-caps text-[10px] text-outline uppercase whitespace-nowrap">
                ASTM E1980 SRI: {activeColor.sri}
              </span>
            </div>
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
            <div>
              <span className="font-label-caps uppercase text-outline block mb-1">Fastener System</span>
              <span className="font-body-sm text-on-surface font-medium block">
                100% Concealed Floating Stainless Cleats
              </span>
            </div>
            <div>
              <span className="font-label-caps uppercase text-outline block mb-1">Coating Warranty</span>
              <span className="font-body-sm text-on-surface font-medium block">
                40-Year Fade / Chalk Resistance
              </span>
            </div>
            <div>
              <span className="font-label-caps uppercase text-outline block mb-1">Subroof Assembly</span>
              <span className="font-body-sm text-tertiary font-medium block">
                High-Temp Breathable Polymer Ice-Shield
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="font-body-sm text-xs text-outline font-light">
            Physical material kit shipped with actual cutaway profile samples.
          </span>
          <a
            href="/roofing-materials#sample-box"
            className="px-6 py-3 bg-primary-container text-tertiary hover:bg-tertiary hover:text-on-tertiary font-label-caps text-xs uppercase tracking-wider transition-colors shrink-0 text-center font-semibold"
          >
            Order Swatches
          </a>
        </div>
      </div>
    </div>
  );
}
