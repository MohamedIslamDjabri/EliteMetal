'use client';

import React from 'react';
import { Sparkles, MessageSquare, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAiAssistant } from './AiAssistantContext';

export default function AiBookingCard({ compact = false }: { compact?: boolean }) {
  const { openChat, openVoiceCall } = useAiAssistant();

  return (
    <div className="bg-surface-container-low border border-tertiary/40 p-6 sm:p-8 shadow-xl relative overflow-hidden">
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-tertiary">
            <Sparkles className="w-4 h-4 text-tertiary animate-pulse" />
            <span className="font-label-caps text-xs uppercase tracking-widest font-semibold">
              Live AI Concierge &amp; Voice Booking
            </span>
          </div>
          <span className="px-2 py-0.5 text-[9px] font-label-caps uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            Available 24/7
          </span>
        </div>

        <div>
          <h3 className="font-headline-md text-xl text-on-surface font-normal">
            Instant Architectural Voice &amp; Chat Booking
          </h3>
          <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant font-light mt-1 leading-relaxed">
            Skip the waiting period. Speak directly with our AI sheet metal concierge to explore
            alloys, get instant structural answers, or reserve your on-site estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            type="button"
            onClick={() => openVoiceCall()}
            className="py-3.5 px-4 bg-tertiary hover:bg-white text-on-tertiary font-label-caps text-xs uppercase tracking-wider flex items-center justify-center gap-2 font-semibold transition-all shadow-md group"
          >
            <PhoneCall className="w-4 h-4 text-on-tertiary group-hover:scale-110 transition-transform" />
            <span>AI Voice Call Booking</span>
          </button>

          <button
            type="button"
            onClick={() => openChat('I would like to book a roofing consultation.')}
            className="py-3.5 px-4 bg-surface-container hover:bg-surface-bright text-tertiary hover:text-white border border-tertiary/40 font-label-caps text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-tertiary" />
            <span>Start AI Consultation Chat</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-outline pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-tertiary shrink-0" />
          <span>Syncs directly with EliteMetal estimating calendar</span>
        </div>
      </div>
    </div>
  );
}
