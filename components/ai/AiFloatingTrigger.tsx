'use client';

import React, { useState } from 'react';
import { Sparkles, MessageSquare, PhoneCall, X } from 'lucide-react';
import { useAiAssistant } from './AiAssistantContext';

export default function AiFloatingTrigger() {
  const { mode, openChat, openVoiceCall } = useAiAssistant();
  const [expanded, setExpanded] = useState(false);

  // If chat or voice is already open, hide floating widget
  if (mode !== null) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Action Flyout */}
      {expanded && (
        <div className="mb-3 bg-surface-container-low border border-tertiary/50 p-4 shadow-2xl space-y-2.5 animate-in fade-in slide-in-from-bottom-2 duration-200 w-64">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="font-label-caps text-[10px] uppercase text-tertiary tracking-widest font-semibold">
              AI Concierge 24/7
            </span>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="text-outline hover:text-white"
              aria-label="Close flyout"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="font-body-sm text-[11px] text-on-surface-variant font-light leading-relaxed">
            Instant architectural consultations, metallurgy comparisons &amp; live estimate booking.
          </p>

          <div className="space-y-1.5 pt-1">
            <button
              type="button"
              onClick={() => {
                setExpanded(false);
                openChat();
              }}
              className="w-full py-2.5 px-3 bg-surface-container hover:bg-surface-bright text-on-surface hover:text-tertiary border border-white/10 flex items-center gap-2.5 text-xs font-label-caps uppercase tracking-wider transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-tertiary" />
              <span>AI Engineering Chat</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setExpanded(false);
                openVoiceCall();
              }}
              className="w-full py-2.5 px-3 bg-tertiary hover:bg-white text-on-tertiary flex items-center gap-2.5 text-xs font-label-caps uppercase tracking-wider font-semibold transition-colors shadow-md"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>AI Voice Booking Call</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="group flex items-center gap-2.5 px-4 py-3 bg-primary-container hover:bg-surface-container-high border border-tertiary/60 hover:border-tertiary text-tertiary hover:text-white shadow-[0_4px_24px_rgba(0,0,0,0.6)] transition-all duration-300 font-label-caps text-xs uppercase tracking-wider"
        aria-label="Open AI Concierge options"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary"></span>
        </span>
        <Sparkles className="w-4 h-4 text-tertiary group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline font-medium">AI Concierge</span>
      </button>
    </div>
  );
}
