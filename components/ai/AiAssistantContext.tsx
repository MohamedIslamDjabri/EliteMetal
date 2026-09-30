'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type AiMode = 'chat' | 'voice' | null;

interface BookingConfirmation {
  confirmationId: string;
  fullName: string;
  phone: string;
  email: string;
  propertyAddress: string;
  projectType: string;
  roofingSystem: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  bookedAt: string;
}

interface AiAssistantContextType {
  mode: AiMode;
  openChat: (initialPrompt?: string) => void;
  openVoiceCall: () => void;
  closeAi: () => void;
  initialPrompt: string;
  latestBooking: BookingConfirmation | null;
  setLatestBooking: (booking: BookingConfirmation | null) => void;
}

const AiAssistantContext = createContext<AiAssistantContextType | undefined>(undefined);

export function AiAssistantProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<AiMode>(null);
  const [initialPrompt, setInitialPrompt] = useState<string>('');
  const [latestBooking, setLatestBooking] = useState<BookingConfirmation | null>(null);

  const openChat = (prompt?: string) => {
    setInitialPrompt(prompt || '');
    setMode('chat');
  };

  const openVoiceCall = () => {
    setMode('voice');
  };

  const closeAi = () => {
    setMode(null);
  };

  return (
    <AiAssistantContext.Provider
      value={{
        mode,
        openChat,
        openVoiceCall,
        closeAi,
        initialPrompt,
        latestBooking,
        setLatestBooking,
      }}
    >
      {children}
    </AiAssistantContext.Provider>
  );
}

export function useAiAssistant() {
  const context = useContext(AiAssistantContext);
  if (!context) {
    throw new Error('useAiAssistant must be used within an AiAssistantProvider');
  }
  return context;
}
