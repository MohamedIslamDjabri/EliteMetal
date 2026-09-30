'use client';

import React, { useState } from 'react';
import { Shield, CheckCircle2, Download } from 'lucide-react';
import { MATERIAL_SPECS } from '@/constants/data';

export default function MaterialComparisonTable() {
  const [selectedSubstrate, setSelectedSubstrate] = useState<string | null>(null);

  return (
    <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-background" id="comparison-matrix">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary block mb-2">
              Engineering Matrix
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight font-light">
              Material Comparison Table
            </h2>
            <p className="font-body-md text-on-surface-variant mt-3 font-light leading-relaxed">
              A neutral technical evaluation comparing physical mass, structural limits, coastal
              longevity, and long-term capital investment.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSelectedSubstrate(null)}
              className={`px-3 py-1.5 font-label-caps text-[10px] uppercase border transition-colors ${
                selectedSubstrate === null
                  ? 'bg-tertiary text-on-tertiary border-tertiary font-semibold'
                  : 'bg-surface-container text-outline border-white/10 hover:text-on-surface'
              }`}
            >
              All Alloys
            </button>
            <button
              type="button"
              onClick={() => setSelectedSubstrate('galvalume')}
              className={`px-3 py-1.5 font-label-caps text-[10px] uppercase border transition-colors ${
                selectedSubstrate === 'galvalume'
                  ? 'bg-tertiary text-on-tertiary border-tertiary font-semibold'
                  : 'bg-surface-container text-outline border-white/10 hover:text-on-surface'
              }`}
            >
              Steel
            </button>
            <button
              type="button"
              onClick={() => setSelectedSubstrate('aluminum')}
              className={`px-3 py-1.5 font-label-caps text-[10px] uppercase border transition-colors ${
                selectedSubstrate === 'aluminum'
                  ? 'bg-tertiary text-on-tertiary border-tertiary font-semibold'
                  : 'bg-surface-container text-outline border-white/10 hover:text-on-surface'
              }`}
            >
              Aluminum
            </button>
            <button
              type="button"
              onClick={() => setSelectedSubstrate('copper')}
              className={`px-3 py-1.5 font-label-caps text-[10px] uppercase border transition-colors ${
                selectedSubstrate === 'copper'
                  ? 'bg-tertiary text-on-tertiary border-tertiary font-semibold'
                  : 'bg-surface-container text-outline border-white/10 hover:text-on-surface'
              }`}
            >
              Copper
            </button>
          </div>
        </div>

        {/* Architectural Table Container */}
        <div className="w-full overflow-x-auto border border-white/10 bg-surface-container-low shadow-xl">
          <table className="w-full text-left border-collapse min-w-[960px]">
            <thead>
              <tr className="bg-surface-container-high border-b border-white/10 text-on-surface">
                <th className="p-5 font-label-caps text-[11px] uppercase tracking-wider text-outline">
                  Material Substrate
                </th>
                <th className="p-5 font-label-caps text-[11px] uppercase tracking-wider text-outline">
                  Durability / Impact
                </th>
                <th className="p-5 font-label-caps text-[11px] uppercase tracking-wider text-outline">
                  Maintenance
                </th>
                <th className="p-5 font-label-caps text-[11px] uppercase tracking-wider text-outline">
                  Weight / Sq. Ft.
                </th>
                <th className="p-5 font-label-caps text-[11px] uppercase tracking-wider text-outline">
                  Coastal Zone
                </th>
                <th className="p-5 font-label-caps text-[11px] uppercase tracking-wider text-outline">
                  Longevity
                </th>
                <th className="p-5 font-label-caps text-[11px] uppercase tracking-wider text-outline">
                  Investment
                </th>
              </tr>
            </thead>
            <tbody className="font-body-md text-sm text-on-surface-variant divide-y divide-white/5">
              {MATERIAL_SPECS.filter(
                (m) => !selectedSubstrate || m.id === selectedSubstrate
              ).map((spec, idx) => (
                <tr
                  key={spec.id}
                  className={`hover:bg-surface-container/70 transition-colors ${
                    idx % 2 === 1 ? 'bg-surface-container-lowest/40' : ''
                  }`}
                >
                  <td className="p-5">
                    <span className="font-semibold text-on-surface block">{spec.name}</span>
                    <span className="font-body-sm text-xs text-outline">{spec.gauge}</span>
                  </td>
                  <td className="p-5">
                    <span className="inline-flex items-center gap-1.5 text-on-surface font-medium text-xs">
                      <Shield className="w-3.5 h-3.5 text-tertiary" />
                      Class 4 Impact
                    </span>
                  </td>
                  <td className="p-5 text-on-surface text-xs">{spec.maintenance}</td>
                  <td className="p-5 text-xs">{spec.weight}</td>
                  <td className="p-5 text-xs">
                    {spec.coastalZone.includes('Oceanfront') ||
                    spec.coastalZone.includes('Unlimited') ? (
                      <span className="text-tertiary font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {spec.coastalZone}
                      </span>
                    ) : (
                      <span>{spec.coastalZone}</span>
                    )}
                  </td>
                  <td className="p-5 text-xs">
                    <span
                      className={
                        spec.expectedLife.includes('100')
                          ? 'font-semibold text-tertiary'
                          : 'font-medium text-on-surface'
                      }
                    >
                      {spec.expectedLife}
                    </span>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-1 text-tertiary text-xs font-label-caps">
                      <span>{spec.investmentTier}</span>
                      <span className="text-outline text-[10px]">(••••)</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-outline font-body-sm text-xs gap-3">
          <p>
            * Investment tiers reflect raw material fabrication and specialized artisan seaming labor
            relative to square footage.
          </p>
          <a
            href="/contact"
            className="text-tertiary hover:underline font-label-caps uppercase text-[11px] inline-flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Full Structural Engineering Specs (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
