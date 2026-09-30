'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Clock } from 'lucide-react';

export default function CommercialBidForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    sector: 'Corporate Headquarters / Campus',
    sqft: '25,000 – 50,000 sq ft',
    details: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.company.trim()) errs.company = 'Company / Architecture Firm is required';
    if (!formData.email.trim()) {
      errs.email = 'Professional Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid corporate email';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      sector: 'Corporate Headquarters / Campus',
      sqft: '25,000 – 50,000 sq ft',
      details: '',
    });
    setStatus('idle');
    setErrors({});
  };

  if (status === 'success') {
    return (
      <div className="bg-surface-container-low border border-tertiary/40 p-8 sm:p-12 text-center animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-surface-container mx-auto flex items-center justify-center text-tertiary border border-tertiary/30 mb-6">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary block mb-2">
          Division 07 RFP Received
        </span>
        <h3 className="font-headline-md text-2xl text-on-surface mb-3">
          Commercial Specification Dispatched
        </h3>
        <p className="font-body-md text-sm text-on-surface-variant max-w-md mx-auto mb-6 font-light leading-relaxed">
          Thank you. Your commercial RFP inquiry for <strong className="text-on-surface">{formData.company}</strong>{' '}
          has been routed directly to our Chief Commercial Estimator. We will follow up within 24–48 business hours with preliminary engineering review.
        </p>

        <button
          type="button"
          onClick={handleReset}
          className="px-6 py-2.5 bg-surface-container hover:bg-surface-bright text-on-surface font-label-caps text-xs uppercase tracking-wider transition-colors"
        >
          Submit Another RFP
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-low p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl">
      <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Marcus Vance"
              className={`w-full bg-surface-container text-on-surface text-sm px-4 py-3 border focus:outline-none transition-colors ${
                errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-tertiary'
              }`}
            />
            {errors.fullName && (
              <span className="text-red-400 text-xs mt-1 block">{errors.fullName}</span>
            )}
          </div>

          <div>
            <label className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1.5">
              Company / Firm *
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Vance Architecture Group"
              className={`w-full bg-surface-container text-on-surface text-sm px-4 py-3 border focus:outline-none transition-colors ${
                errors.company ? 'border-red-500' : 'border-white/10 focus:border-tertiary'
              }`}
            />
            {errors.company && (
              <span className="text-red-400 text-xs mt-1 block">{errors.company}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1.5">
              Professional Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="m.vance@firm.com"
              className={`w-full bg-surface-container text-on-surface text-sm px-4 py-3 border focus:outline-none transition-colors ${
                errors.email ? 'border-red-500' : 'border-white/10 focus:border-tertiary'
              }`}
            />
            {errors.email && (
              <span className="text-red-400 text-xs mt-1 block">{errors.email}</span>
            )}
          </div>

          <div>
            <label className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(555) 000-0000"
              className={`w-full bg-surface-container text-on-surface text-sm px-4 py-3 border focus:outline-none transition-colors ${
                errors.phone ? 'border-red-500' : 'border-white/10 focus:border-tertiary'
              }`}
            />
            {errors.phone && (
              <span className="text-red-400 text-xs mt-1 block">{errors.phone}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1.5">
              Project Sector
            </label>
            <select
              value={formData.sector}
              onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
              className="w-full bg-surface-container text-on-surface text-sm px-4 py-3 border border-white/10 focus:border-tertiary focus:outline-none transition-colors cursor-pointer"
            >
              <option>Corporate Headquarters / Campus</option>
              <option>Luxury Hospitality / Resort</option>
              <option>High-End Retail / Mixed-Use</option>
              <option>Multi-Family Residential</option>
              <option>Cultural / Museum Facility</option>
              <option>Healthcare / Educational</option>
            </select>
          </div>

          <div>
            <label className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1.5">
              Estimated Roof Area (Sq Ft)
            </label>
            <select
              value={formData.sqft}
              onChange={(e) => setFormData({ ...formData, sqft: e.target.value })}
              className="w-full bg-surface-container text-on-surface text-sm px-4 py-3 border border-white/10 focus:border-tertiary focus:outline-none transition-colors cursor-pointer"
            >
              <option>10,000 – 25,000 sq ft</option>
              <option>25,000 – 50,000 sq ft</option>
              <option>50,000 – 100,000 sq ft</option>
              <option>100,000+ sq ft</option>
            </select>
          </div>
        </div>

        <div>
          <label className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1.5">
            Project Scope &amp; Timeline
          </label>
          <textarea
            rows={3}
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            placeholder="Specify location, target mobilization date, required materials (Zinc, Copper, Galvalume), or link to shared architectural files..."
            className="w-full bg-surface-container text-on-surface text-sm p-4 border border-white/10 focus:border-tertiary focus:outline-none transition-colors resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-4 bg-tertiary hover:bg-on-surface text-on-tertiary hover:text-surface-container-lowest font-label-caps text-xs uppercase tracking-widest transition-colors duration-300 shadow-md font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <span>Routing to Commercial Estimating...</span>
          ) : (
            <>
              <span>Submit Commercial Specification Request</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="font-body-sm text-[11px] text-outline text-center">
          All plans and engineering submittals are handled in accordance with corporate NDA protocols.
        </p>
      </form>
    </div>
  );
}
