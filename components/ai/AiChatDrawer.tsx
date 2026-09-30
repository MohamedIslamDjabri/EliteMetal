'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  X,
  Send,
  PhoneCall,
  Volume2,
  VolumeX,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Mic,
  MicOff,
  Copy,
  Check,
} from 'lucide-react';
import { useAiAssistant } from './AiAssistantContext';
import { SITE_CONFIG } from '@/constants/data';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  booking?: {
    confirmationId: string;
    fullName: string;
    phone: string;
    propertyAddress: string;
    projectType: string;
    roofingSystem: string;
    preferredDate: string;
    preferredTime: string;
    notes?: string;
  };
}

interface IWindowSpeechRecognition {
  SpeechRecognition?: { new (): ISpeechRecognition };
  webkitSpeechRecognition?: { new (): ISpeechRecognition };
}

interface ISpeechRecognition {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: ISpeechRecognitionEvent) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

interface ISpeechRecognitionEvent {
  results: {
    0: {
      0: {
        transcript: string;
      };
    };
  };
}

export default function AiChatDrawer() {
  const { mode, closeAi, openVoiceCall, initialPrompt, setLatestBooking } = useAiAssistant();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Greetings. I am the EliteMetal Architectural Concierge. I can assist you with structural standing seam engineering, metallurgy comparisons, or schedule a certified on-site property evaluation.',
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const recognitionRef = useRef<ISpeechRecognition | null>(null);
  const handledPromptRef = useRef<string | null>(null);

  const sendMessage = useCallback(
    async (textToSend?: string) => {
      const text = (textToSend || inputValue).trim();
      if (!text || isTyping) return;

      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        role: 'user',
        content: text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputValue('');
      setIsTyping(true);

      try {
        const history = [...messages, userMessage].map((m) => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          content: m.content,
        }));

        const res = await fetch('/api/ai/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: history, isVoice: false }),
        });

        const data = await res.json();
        const assistantMessage: ChatMessage = {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: data.text || 'I am ready to assist with your architectural project.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          booking: data.booking || undefined,
        };

        if (data.booking) {
          setLatestBooking(data.booking);
        }

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (err) {
        console.error('Chat error:', err);
        setMessages((prev) => [
          ...prev,
          {
            id: `error-${Date.now()}`,
            role: 'assistant',
            content:
              'Our senior estimating department can also be reached directly at (555) 462-METAL or commercial@elitemetalroofing.com for immediate consultation.',
            timestamp: 'Now',
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    },
    [inputValue, isTyping, messages, setLatestBooking]
  );

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Handle initial prompt if opened with one
  useEffect(() => {
    if (initialPrompt && mode === 'chat' && handledPromptRef.current !== initialPrompt) {
      handledPromptRef.current = initialPrompt;
      const timer = setTimeout(() => {
        sendMessage(initialPrompt);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [initialPrompt, mode, sendMessage]);

  // Setup Web Speech Recognition if available
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const speechWindow = window as unknown as IWindowSpeechRecognition;
      const SpeechRecognition =
        speechWindow.SpeechRecognition || speechWindow.webkitSpeechRecognition;

      if (SpeechRecognition) {
        try {
          const rec = new SpeechRecognition();
          rec.continuous = false;
          rec.interimResults = false;
          rec.lang = 'en-US';

          rec.onresult = (event: ISpeechRecognitionEvent) => {
            const transcript = event.results[0][0].transcript;
            if (transcript) {
              setInputValue((prev) => (prev ? `${prev} ${transcript}` : transcript));
            }
            setIsListening(false);
          };

          rec.onerror = () => {
            setIsListening(false);
          };

          rec.onend = () => {
            setIsListening(false);
          };

          recognitionRef.current = rec;
        } catch (e) {
          console.warn('Speech recognition not available:', e);
        }
      }
    }
  }, []);

  const toggleMic = () => {
    if (!recognitionRef.current) {
      alert('Speech-to-text is not supported on this browser. Please type your message.');
      return;
    }
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const handlePlayVoice = async (msgId: string, text: string) => {
    if (playingAudioId === msgId) {
      if (audioRef.current) {
        audioRef.current.pause();
        setPlayingAudioId(null);
      }
      return;
    }

    try {
      setPlayingAudioId(msgId);
      const res = await fetch('/api/ai/voice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, voice: 'Kore' }),
      });
      const data = await res.json();

      if (data.audioBase64) {
        const audio = new Audio(`data:audio/wav;base64,${data.audioBase64}`);
        audioRef.current = audio;
        audio.onended = () => setPlayingAudioId(null);
        audio.onerror = () => {
          fallbackSpeech(text);
        };
        await audio.play();
      } else {
        fallbackSpeech(text);
      }
    } catch {
      fallbackSpeech(text);
    }
  };

  const fallbackSpeech = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.onend = () => setPlayingAudioId(null);
      utterance.onerror = () => setPlayingAudioId(null);
      window.speechSynthesis.speak(utterance);
    } else {
      setPlayingAudioId(null);
    }
  };

  const copyConfirmation = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (mode !== 'chat') return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg h-full bg-surface-container-lowest border-l border-tertiary/30 shadow-2xl flex flex-col justify-between">
        {/* Top Header */}
        <div className="h-20 px-6 bg-surface-container-low border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-container border border-tertiary/50 flex items-center justify-center text-tertiary shadow-sm">
              <Sparkles className="w-5 h-5 text-tertiary" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-headline-md text-base text-on-surface font-normal">
                  Architectural Concierge
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <p className="font-label-caps text-[10px] text-tertiary uppercase tracking-wider">
                Engineering &amp; Consultations
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openVoiceCall}
              className="px-3 py-1.5 bg-surface-container hover:bg-tertiary hover:text-on-tertiary text-tertiary border border-tertiary/40 font-label-caps text-[10px] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              title="Switch to Voice Call"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Voice Call</span>
            </button>
            <button
              type="button"
              onClick={closeAi}
              className="p-2 text-on-surface-variant hover:text-white transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Message Stream */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          {/* Quick Starters */}
          {messages.length <= 1 && (
            <div className="space-y-2 pt-2">
              <span className="font-label-caps text-[10px] text-outline uppercase tracking-wider block">
                Suggested Inquiries:
              </span>
              <div className="flex flex-col gap-2">
                {[
                  'Book an on-site property evaluation',
                  'Compare Galvalume vs Marine Aluminum vs Copper',
                  'Wind uplift and hurricane performance ratings',
                  'What is the warranty coverage for standing seam?',
                ].map((promptText, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => sendMessage(promptText)}
                    className="text-left p-2.5 bg-surface-container-low hover:bg-surface-container border border-white/5 hover:border-tertiary/40 font-body-sm text-xs text-on-surface-variant transition-colors"
                  >
                    &ldquo;{promptText}&rdquo;
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[88%] p-4 text-xs sm:text-sm font-light leading-relaxed border ${
                  m.role === 'user'
                    ? 'bg-surface-container border-tertiary/40 text-on-surface'
                    : 'bg-surface-container-low border-white/10 text-on-surface-variant'
                }`}
              >
                <p className="whitespace-pre-line">{m.content}</p>

                {/* If booking card is returned */}
                {m.booking && (
                  <div className="mt-4 p-4 bg-surface-container-lowest border border-tertiary/50 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="flex items-center gap-1.5 text-tertiary">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="font-label-caps text-[10px] uppercase tracking-wider font-semibold">
                          Consultation Reserved
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => copyConfirmation(m.booking!.confirmationId)}
                        className="text-[10px] text-outline hover:text-tertiary flex items-center gap-1"
                        title="Copy confirmation ID"
                      >
                        {copiedId === m.booking.confirmationId ? (
                          <Check className="w-3 h-3 text-tertiary" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        <span>{m.booking.confirmationId}</span>
                      </button>
                    </div>

                    <div className="space-y-1.5 text-[11px] font-body-sm">
                      <div className="flex justify-between">
                        <span className="text-outline">Client:</span>
                        <span className="text-on-surface font-medium">{m.booking.fullName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-outline">Phone:</span>
                        <span className="text-tertiary font-medium">{m.booking.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-outline">Property:</span>
                        <span className="text-on-surface truncate max-w-[180px]">
                          {m.booking.propertyAddress}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-outline">System:</span>
                        <span className="text-on-surface font-medium">{m.booking.roofingSystem}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-outline">Target Date:</span>
                        <span className="text-tertiary font-medium">{m.booking.preferredDate}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] text-outline">Austin Estimating Division</span>
                      <a
                        href={SITE_CONFIG.phoneRaw}
                        className="text-[10px] font-label-caps uppercase text-tertiary hover:underline"
                      >
                        Call to Confirm (555) 462-METAL
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Timestamp & Listen Button for Assistant */}
              <div className="flex items-center gap-2 mt-1 px-1">
                <span className="text-[10px] text-outline font-label-caps">{m.timestamp}</span>
                {m.role === 'assistant' && (
                  <button
                    type="button"
                    onClick={() => handlePlayVoice(m.id, m.content)}
                    className="text-[10px] text-tertiary hover:text-white flex items-center gap-1 transition-colors"
                    title="Listen to this response"
                  >
                    {playingAudioId === m.id ? (
                      <>
                        <VolumeX className="w-3 h-3 text-red-400" />
                        <span className="text-red-400">Stop</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3 h-3" />
                        <span>Listen</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-outline text-xs italic p-2 bg-surface-container-low/60 max-w-[160px] border border-white/5">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              <span>Reviewing specs...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-surface-container-low border-t border-white/10 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex items-center gap-2"
          >
            <button
              type="button"
              onClick={toggleMic}
              className={`p-3 transition-colors border ${
                isListening
                  ? 'bg-red-500/20 text-red-400 border-red-500 animate-pulse'
                  : 'bg-surface-container text-outline hover:text-tertiary border-white/10'
              }`}
              title={isListening ? 'Stop Listening' : 'Speak to input'}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about standing seam, alloys, or book a visit..."
              className="flex-1 bg-surface-container text-on-surface text-xs sm:text-sm px-4 py-3 border border-white/10 focus:border-tertiary focus:outline-none transition-colors"
            />

            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="p-3 bg-tertiary hover:bg-white text-on-tertiary transition-colors disabled:opacity-50 shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-2 flex items-center justify-between text-[10px] text-outline">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-tertiary" />
              <span>Certified Architectural Knowledge Base</span>
            </span>
            <button
              type="button"
              onClick={openVoiceCall}
              className="text-tertiary hover:underline uppercase font-label-caps"
            >
              Start Live Voice Call &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
