'use client';

import React, { useState } from 'react';
import { Package, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SampleKitForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    finishes: ['24ga Galvalume Charcoal', '.040" Marine Aluminum'],
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const availableFinishes = [
    '24ga Galvalume Charcoal',
    '.040" Marine Aluminum',
    '16 oz Architectural Copper',
    'Rheinzink Pre-weathered',
    'Matte Obsidian Slate',
    'Architectural Bronze',
  ];

  const handleToggleFinish = (item: string) => {
    setFormData((prev) => {
      const exists = prev.finishes.includes(item);
      if (exists) {
        return { ...prev, finishes: prev.finishes.filter((f) => f !== item) };
      }
      if (prev.finishes.length >= 4) {
        return prev; // limit to 4
      }
      return { ...prev, finishes: [...prev.finishes, item] };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  return (
    <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-background relative overflow-hidden" id="sample-box">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="bg-surface-container-low border border-white/10 p-8 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary/20 text-tertiary font-label-caps text-xs uppercase tracking-wider">
                <Package className="w-3.5 h-3.5" />
                <span>Architectural Design Kit</span>
              </div>

              <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface tracking-tight font-light leading-tight">
                Order a Complimentary Architectural Sample Kit
              </h2>

              <p className="font-body-lg text-on-surface-variant font-light leading-relaxed">
                Experience the weight, tactile finish, and light reflection firsthand. We curate four
                bespoke 6&quot;x6&quot; metallic swatches, full seam profile cuts, and an engineering binder
                shipped directly to your residence or design studio.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  '4 Custom Metal Swatches',
                  'Seam Profile Cutaways',
                  'Kynar Color Swatch Fan',
                  'Complimentary FedEx 2-Day',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary shrink-0"></span>
                    <span className="font-body-sm text-xs text-on-surface">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-surface-container-lowest border border-white/5 flex items-center gap-4">
                <ShieldCheck className="w-6 h-6 text-tertiary shrink-0" />
                <div>
                  <p className="font-label-md text-xs text-on-surface font-medium">
                    Complimentary for Property Owners & Architects
                  </p>
                  <p className="font-body-sm text-[11px] text-outline">
                    No obligation. Includes prepaid return envelope for effortless recycling.
                  </p>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-6 bg-surface-container p-6 sm:p-8 border border-white/10 shadow-xl">
              <h3 className="font-headline-md text-xl text-on-surface mb-1 font-normal">
                Configure Your Kit
              </h3>
              <p className="font-body-sm text-xs text-outline mb-6">
                Select up to 4 swatches to include in your presentation box.
              </p>

              {status === 'success' ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 bg-surface-container-high mx-auto flex items-center justify-center text-tertiary border border-tertiary/40">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-headline-md text-xl text-on-surface">Sample Kit Confirmed</h4>
                  <p className="font-body-sm text-xs text-on-surface-variant max-w-sm mx-auto leading-relaxed">
                    Thank you. Your bespoke swatch kit has been queued for immediate priority courier
                    dispatch to <strong className="text-on-surface">{formData.address}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 bg-surface-container-high text-xs font-label-caps uppercase hover:bg-surface-bright text-tertiary transition-colors"
                  >
                    Request Another Swatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-label-caps text-[10px] text-outline uppercase tracking-wider block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Julian Vance"
                        className="w-full bg-surface-container-lowest px-4 py-3 text-sm text-on-surface border border-white/10 focus:border-tertiary focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="font-label-caps text-[10px] text-outline uppercase tracking-wider block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="julian@vancearch.com"
                        className="w-full bg-surface-container-lowest px-4 py-3 text-sm text-on-surface border border-white/10 focus:border-tertiary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-label-caps text-[10px] text-outline uppercase tracking-wider block mb-1">
                      Delivery Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Street address, Suite, City, State, ZIP"
                      className="w-full bg-surface-container-lowest px-4 py-3 text-sm text-on-surface border border-white/10 focus:border-tertiary focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="font-label-caps text-[10px] text-outline uppercase tracking-wider">
                        Preferred Finishes (Max 4 selected)
                      </label>
                      <span className="font-label-caps text-[10px] text-tertiary">
                        {formData.finishes.length}/4 Selected
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {availableFinishes.map((finish) => {
                        const checked = formData.finishes.includes(finish);
                        return (
                          <label
                            key={finish}
                            className={`flex items-center gap-2.5 p-2.5 bg-surface-container-lowest border cursor-pointer transition-colors ${
                              checked
                                ? 'border-tertiary text-on-surface font-medium'
                                : 'border-white/5 text-on-surface-variant hover:border-white/20'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => handleToggleFinish(finish)}
                              className="accent-tertiary"
                            />
                            <span className="truncate">{finish}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 bg-tertiary hover:bg-on-surface text-on-tertiary hover:text-surface-container-lowest font-label-caps text-xs uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center justify-center gap-2 font-semibold disabled:opacity-70"
                    >
                      {status === 'submitting' ? (
                        <span>Queuing FedEx Delivery...</span>
                      ) : (
                        <>
                          <span>Ship My Architectural Kit (Complimentary)</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
