'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Phone, Mail, Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/data';

interface QuoteFormProps {
  initialProjectType?: string;
  initialSystem?: string;
  compact?: boolean;
}

export default function QuoteForm({
  initialProjectType = 'Residential',
  initialSystem = 'Standing Seam',
  compact = false,
}: QuoteFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    projectType: initialProjectType,
    roofingSystem: initialSystem,
    scope: '3,000 – 6,000 sq ft',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s()+-]{7,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.address.trim()) newErrors.address = 'Property address or city/state is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real preparation for endpoint/CRM integration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      address: '',
      projectType: initialProjectType,
      roofingSystem: initialSystem,
      scope: '3,000 – 6,000 sq ft',
      message: '',
    });
    setIsSubmitted(false);
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="bg-surface-container-low p-8 lg:p-12 border border-tertiary/40 shadow-2xl text-center animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-surface-container mx-auto flex items-center justify-center text-tertiary mb-6 border border-tertiary/30">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary block mb-2">
          Consultation Request Confirmed
        </span>
        <h3 className="font-headline-md text-2xl lg:text-3xl text-on-surface mb-4">
          Thank you, {formData.fullName}.
        </h3>
        <p className="font-body-md text-on-surface-variant max-w-md mx-auto mb-8 font-light leading-relaxed">
          Your project parameters have been routed to our senior architectural estimating group. A
          specialist will review your structural requirements and reach out within 24 business hours.
        </p>

        <div className="p-4 bg-surface-container mb-8 max-w-sm mx-auto text-left space-y-1.5 font-body-sm text-xs text-on-surface-variant">
          <div className="flex justify-between">
            <span className="text-outline">Project Type:</span>
            <span className="text-on-surface font-medium">{formData.projectType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-outline">Roofing System:</span>
            <span className="text-on-surface font-medium">{formData.roofingSystem}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-outline">Direct Contact:</span>
            <span className="text-tertiary font-medium">{formData.phone}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="px-8 py-3 bg-surface-container hover:bg-surface-bright text-on-surface font-label-caps text-xs uppercase tracking-wider transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-low p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5">
        <div>
          <span className="font-label-caps text-[10px] uppercase text-tertiary tracking-widest block mb-1">
            Turnkey Proposal
          </span>
          <h3 className="font-headline-md text-xl sm:text-2xl text-on-surface font-normal">
            Request an Architectural Quote
          </h3>
        </div>
        <span className="hidden sm:inline-block px-3 py-1 bg-surface-container text-tertiary font-label-caps text-[10px] uppercase">
          Complimentary
        </span>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="quote-fullName" className="block font-label-caps text-[11px] text-outline uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <input
              id="quote-fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Julian Vance"
              className={`w-full bg-surface-container text-on-surface text-sm px-4 py-3 border focus:outline-none transition-colors ${
                errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-tertiary'
              }`}
            />
            {errors.fullName && (
              <span className="text-red-400 text-xs mt-1 block">{errors.fullName}</span>
            )}
          </div>

          <div>
            <label htmlFor="quote-phone" className="block font-label-caps text-[11px] text-outline uppercase tracking-wider mb-1.5">
              Phone Number *
            </label>
            <input
              id="quote-phone"
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

        {/* Email & Property Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="quote-email" className="block font-label-caps text-[11px] text-outline uppercase tracking-wider mb-1.5">
              Email Address *
            </label>
            <input
              id="quote-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="julian@vancearch.com"
              className={`w-full bg-surface-container text-on-surface text-sm px-4 py-3 border focus:outline-none transition-colors ${
                errors.email ? 'border-red-500' : 'border-white/10 focus:border-tertiary'
              }`}
            />
            {errors.email && (
              <span className="text-red-400 text-xs mt-1 block">{errors.email}</span>
            )}
          </div>

          <div>
            <label htmlFor="quote-address" className="block font-label-caps text-[11px] text-outline uppercase tracking-wider mb-1.5">
              Property Address / City *
            </label>
            <input
              id="quote-address"
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="Street, City, State or ZIP"
              className={`w-full bg-surface-container text-on-surface text-sm px-4 py-3 border focus:outline-none transition-colors ${
                errors.address ? 'border-red-500' : 'border-white/10 focus:border-tertiary'
              }`}
            />
            {errors.address && (
              <span className="text-red-400 text-xs mt-1 block">{errors.address}</span>
            )}
          </div>
        </div>

        {/* Project Type & Roofing System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="quote-projectType" className="block font-label-caps text-[11px] text-outline uppercase tracking-wider mb-1.5">
              Project Type
            </label>
            <select
              id="quote-projectType"
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full bg-surface-container text-on-surface text-sm px-4 py-3 border border-white/10 focus:border-tertiary focus:outline-none transition-colors cursor-pointer"
            >
              <option value="Residential">Residential Estate / Home</option>
              <option value="Commercial">Commercial / Mixed-Use</option>
              <option value="Architectural Enclosure">Architectural Cladding / Soffit</option>
              <option value="Historic Restoration">Historic Preservation</option>
            </select>
          </div>

          <div>
            <label htmlFor="quote-roofingSystem" className="block font-label-caps text-[11px] text-outline uppercase tracking-wider mb-1.5">
              Roofing System
            </label>
            <select
              id="quote-roofingSystem"
              value={formData.roofingSystem}
              onChange={(e) => setFormData({ ...formData, roofingSystem: e.target.value })}
              className="w-full bg-surface-container text-on-surface text-sm px-4 py-3 border border-white/10 focus:border-tertiary focus:outline-none transition-colors cursor-pointer"
            >
              <option value="Metal Roofing">Metal Roofing (General)</option>
              <option value="Standing Seam">Standing Seam (Concealed Clip)</option>
              <option value="Architectural Panels">Architectural Panels & Tiles</option>
              <option value="Copper Roofing">Natural Copper Roofing</option>
              <option value="Zinc Roofing">Architectural Titanium Zinc</option>
              <option value="Not Sure">Not Sure (Need Specialist Guidance)</option>
            </select>
          </div>
        </div>

        {/* Scope Selector */}
        <div>
          <label htmlFor="quote-scope" className="block font-label-caps text-[11px] text-outline uppercase tracking-wider mb-1.5">
            Approximate Project Scope
          </label>
          <select
            id="quote-scope"
            value={formData.scope}
            onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
            className="w-full bg-surface-container text-on-surface text-sm px-4 py-3 border border-white/10 focus:border-tertiary focus:outline-none transition-colors cursor-pointer"
          >
            <option value="Under 3,000 sq ft">Under 3,000 sq ft</option>
            <option value="3,000 – 6,000 sq ft">3,000 – 6,000 sq ft (Custom Residence)</option>
            <option value="6,000 – 10,000 sq ft">6,000 – 10,000 sq ft (Large Estate)</option>
            <option value="10,000 – 25,000 sq ft">10,000 – 25,000 sq ft (Commercial / Compound)</option>
            <option value="25,000+ sq ft">25,000+ sq ft (Major Development / Campus)</option>
          </select>
        </div>

        {/* Message / Scope */}
        <div>
          <label htmlFor="quote-message" className="block font-label-caps text-[11px] text-outline uppercase tracking-wider mb-1.5">
            Project Notes / Architect Blueprint Link
          </label>
          <textarea
            id="quote-message"
            rows={compact ? 2 : 3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Share roof pitch, timeline, preferred alloy (Galvalume, Zinc, Copper), or plan links..."
            className="w-full bg-surface-container text-on-surface text-sm px-4 py-3 border border-white/10 focus:border-tertiary focus:outline-none transition-colors resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-tertiary hover:bg-on-surface text-on-tertiary hover:text-surface-container-lowest font-label-caps text-xs uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center justify-center gap-2 font-semibold disabled:opacity-70"
          >
            {isSubmitting ? (
              <span>Routing to Chief Estimator...</span>
            ) : (
              <>
                <span>Submit Specification Request</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-outline text-[11px] pt-1 gap-2">
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-tertiary" />
            <span>Strict Client Non-Disclosure Protocol</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-tertiary" />
            <span>Response within 24–48 Hours</span>
          </span>
        </div>
      </form>
    </div>
  );
}
