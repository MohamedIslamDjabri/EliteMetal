import React from 'react';
import type { Metadata } from 'next';
import { Phone, Mail, Clock, MapPin, ShieldCheck, HelpCircle } from 'lucide-react';
import QuoteForm from '@/components/forms/QuoteForm';
import MapSection from '@/components/common/MapSection';
import AiBookingCard from '@/components/ai/AiBookingCard';
import { SITE_CONFIG, FAQS_DATA } from '@/constants/data';

export const metadata: Metadata = {
  title: 'Contact & Quote Request | EliteMetal Roofing',
  description:
    'Schedule a consultation, request an architectural estimate, or connect directly with our engineering department in Austin, TX.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* 1. CONTACT HERO */}
      <section className="relative w-full overflow-hidden bg-primary-container -mt-20 pt-36 pb-16 lg:pt-44 lg:pb-20 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-tertiary"></span>
            <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
              Direct Architectural Access
            </span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="font-headline-hero text-4xl sm:text-5xl lg:text-7xl text-on-surface tracking-tight font-light leading-[1.08]">
              Connect with Our <br />
              <span className="italic font-normal text-tertiary">Architectural Estimators.</span>
            </h1>
            <p className="font-body-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
              Whether you are planning a new luxury build, historic restoration, or corporate
              compound, our structural sheet metal specialists provide turn-key consultation within
              24–48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS + QUOTE FORM SPREAD */}
      <section className="w-full bg-surface-dim py-16 lg:py-24 border-b border-white/5" id="quote">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Information Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary block mb-2">
                  Headquarters &amp; Studios
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-3xl text-on-surface font-normal">
                  Austin Fabrication &amp; Design Studio
                </h2>
                <p className="font-body-md text-sm text-on-surface-variant mt-2 font-light leading-relaxed">
                  Visit our physical architectural metals showroom to review full-scale standing seam
                  mockups, copper conductor boxes, and custom curved fascia panels.
                </p>
              </div>

              {/* AI Real-time Voice & Chat Booking */}
              <AiBookingCard />

              <div className="space-y-4">
                {/* Phone */}
                <div className="bg-surface-container-low p-6 border border-white/10 flex items-start gap-4">
                  <div className="w-10 h-10 bg-surface-container flex items-center justify-center text-tertiary border border-tertiary/30 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-label-caps text-[10px] text-outline uppercase block">
                      Telephone
                    </span>
                    <a
                      href={SITE_CONFIG.phoneRaw}
                      className="font-headline-md text-lg text-on-surface hover:text-tertiary transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                      Direct lines for Residential &amp; Commercial Div.
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-surface-container-low p-6 border border-white/10 flex items-start gap-4">
                  <div className="w-10 h-10 bg-surface-container flex items-center justify-center text-tertiary border border-tertiary/30 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-label-caps text-[10px] text-outline uppercase block">
                      Electronic Mail
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="font-body-md text-on-surface hover:text-tertiary transition-colors text-sm font-medium"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                      Submittals &amp; Plans: {SITE_CONFIG.commercialEmail}
                    </p>
                  </div>
                </div>

                {/* Hours & Address */}
                <div className="bg-surface-container-low p-6 border border-white/10 flex items-start gap-4">
                  <div className="w-10 h-10 bg-surface-container flex items-center justify-center text-tertiary border border-tertiary/30 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-label-caps text-[10px] text-outline uppercase block">
                      Hours of Operation
                    </span>
                    <p className="font-body-md text-sm text-on-surface">{SITE_CONFIG.hours}</p>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                      {SITE_CONFIG.address.street}
                      <br />
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-surface-container-lowest border border-tertiary/30">
                <div className="flex items-center gap-3 text-tertiary mb-1">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-label-caps text-xs uppercase tracking-wider font-semibold">
                    Certified 50-Year Non-Prorated Guarantee
                  </span>
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant font-light leading-relaxed">
                  All contracts include transferable warranty certificates covering substrate
                  integrity, PVDF color retention, and master workmanship.
                </p>
              </div>
            </div>

            {/* Right Quote Request Form */}
            <div className="lg:col-span-7">
              <QuoteForm initialProjectType="Residential" initialSystem="Standing Seam" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. AUSTIN HEADQUARTERS MAP SECTION */}
      <section className="w-full bg-surface-container-lowest py-16 lg:py-20 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-8">
            <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary block mb-1">
              Geographic Location
            </span>
            <h2 className="font-headline-md text-2xl text-on-surface font-normal">
              Austin Studio &amp; Fabrication Depot
            </h2>
          </div>

          <MapSection />
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="w-full bg-surface-container py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-2 mb-2 text-tertiary">
              <HelpCircle className="w-4 h-4" />
              <span className="font-label-caps text-xs uppercase tracking-widest">
                Knowledge &amp; Inquiries
              </span>
            </div>
            <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-light">
              Frequently Asked Questions
            </h2>
            <p className="font-body-md text-on-surface-variant mt-2 font-light leading-relaxed">
              Detailed answers regarding installation acoustics, hail resilience, thermal physics, and
              warranty protections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FAQS_DATA.map((faq, idx) => (
              <div
                key={idx}
                className="bg-surface-container-low border border-white/10 p-8 space-y-3 shadow-sm hover:border-tertiary/40 transition-colors"
              >
                <h3 className="font-headline-md text-lg text-on-surface font-normal">
                  {faq.question}
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
