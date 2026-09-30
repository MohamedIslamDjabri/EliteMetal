'use client';

import React, { useState } from 'react';
import { COLOR_FINISHES } from '@/constants/data';

export default function FinishSelector() {
  const [activeFinish, setActiveFinish] = useState(COLOR_FINISHES[0]);

  return (
    <div className="bg-surface-container-low p-6 lg:p-10 border border-white/10 shadow-lg" id="swatch-viewer">
      {/* Live Selected Finish Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 pb-8 border-b border-white/5">
        <div className="lg:col-span-5 flex items-center gap-6">
          <div
            className="w-20 h-20 sm:w-24 sm:h-24 shadow-2xl transition-all duration-300 border border-white/20 shrink-0"
            style={{ backgroundColor: activeFinish.hex }}
          ></div>
          <div>
            <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-wider block">
              {activeFinish.code}
            </span>
            <h4 className="font-headline-md text-xl sm:text-2xl text-on-surface font-normal">
              {activeFinish.name}
            </h4>
            <span className="font-body-sm text-xs text-outline block mt-0.5">
              SRI: {activeFinish.sri} • Solar Reflectance: {activeFinish.sr}
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-surface-container p-4 border border-white/5">
          <div className="space-y-0.5">
            <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest block">
              Formulation & Luster
            </span>
            <p className="font-body-sm text-xs text-on-surface">
              {activeFinish.type} • Ultra-Low Gloss (10-15 sheen units to eliminate oil-canning glare)
            </p>
          </div>
          <a
            href="#quote-consultation"
            className="px-4 py-2 bg-tertiary/10 hover:bg-tertiary text-tertiary hover:text-on-tertiary transition-colors font-label-caps text-[10px] uppercase tracking-wider whitespace-nowrap text-center"
          >
            Order Finish Chip
          </a>
        </div>
      </div>

      {/* The 8 Swatches Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
        {COLOR_FINISHES.map((color) => {
          const isSelected = activeFinish.name === color.name;
          return (
            <button
              key={color.name}
              type="button"
              onClick={() => setActiveFinish(color)}
              className={`text-left p-3 transition-all border ${
                isSelected
                  ? 'bg-surface-container border-tertiary shadow-sm'
                  : 'bg-surface-container-high border-transparent hover:bg-surface-bright'
              }`}
            >
              <div
                className="w-full h-14 sm:h-16 mb-2.5 shadow-inner border border-white/10"
                style={{ backgroundColor: color.hex }}
              ></div>
              <span className="block font-label-md text-xs text-on-surface truncate">
                {color.name}
              </span>
              <span className="block font-body-sm text-[10px] text-outline truncate mt-0.5">
                {color.type.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
