'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  PhoneOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Send,
  Check,
  Copy,
} from 'lucide-react';
import { useAiAssistant } from './AiAssistantContext';

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
  resultIndex: number;
  results: {
    length: number;
    [index: number]: {
      isFinal: boolean;
      0: {
        transcript: string;
      };
    };
  };
}

export default function AiVoiceCallModal() {
  const { mode, closeAi, openChat, setLatestBooking } = useAiAssistant();

  const [callStatus, setCallStatus] = useState<'connecting' | 'listening' | 'thinking' | 'speaking'>(
    'connecting'
  );
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [speakerEnabled, setSpeakerEnabled] = useState(true);
  const [currentSubtitle, setCurrentSubtitle] = useState<string>(
    'Connecting to EliteMetal Architectural Concierge...'
  );
  const [bookingPass, setBookingPass] = useState<Record<string, unknown> | null>(null);
  const [showTextFallback, setShowTextFallback] = useState(false);
  const [fallbackInput, setFallbackInput] = useState('');
  const [copiedId, setCopiedId] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const recognitionRef = useRef<ISpeechRecognition | null>(null);
  const isListeningRef = useRef(false);

  const stopListening = useCallback(() => {
    if (recognitionRef.current && isListeningRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // Ignored
      }
      isListeningRef.current = false;
    }
  }, []);

  const startListening = useCallback(() => {
    if (isMuted || !recognitionRef.current) return;
    try {
      if (!isListeningRef.current) {
        recognitionRef.current.start();
        isListeningRef.current = true;
      }
    } catch {
      // Already running
    }
    setCallStatus('listening');
  }, [isMuted]);

  const fallbackSpeech = useCallback(
    (text: string) => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.0;
        utterance.onend = () => {
          setCallStatus('listening');
          startListening();
        };
        utterance.onerror = () => {
          setCallStatus('listening');
          startListening();
        };
        window.speechSynthesis.speak(utterance);
      } else {
        setCallStatus('listening');
        startListening();
      }
    },
    [startListening]
  );

  const speakResponse = useCallback(
    async (text: string) => {
      stopListening();
      setCurrentSubtitle(text);
      setCallStatus('speaking');

      if (!speakerEnabled) {
        setTimeout(() => {
          startListening();
        }, 2000);
        return;
      }

      try {
        const res = await fetch('/api/ai/voice', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, voice: 'Kore' }),
        });
        const data = await res.json();

        if (data.audioBase64) {
          const audio = new Audio(`data:audio/wav;base64,${data.audioBase64}`);
          audioRef.current = audio;
          audio.onended = () => {
            setCallStatus('listening');
            startListening();
          };
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
    },
    [fallbackSpeech, speakerEnabled, startListening, stopListening]
  );

  const handleUserSpeechInput = useCallback(
    async (spokenText: string) => {
      if (!spokenText.trim()) return;
      stopListening();
      setCallStatus('thinking');
      setCurrentSubtitle(`You said: "${spokenText}"`);

      try {
        const res = await fetch('/api/ai/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: [{ role: 'user', content: spokenText }],
            isVoice: true,
          }),
        });

        const data = await res.json();
        if (data.booking) {
          setBookingPass(data.booking);
          setLatestBooking(data.booking);
        }

        await speakResponse(
          data.text ||
            'Thank you. We have received your project details and our estimating team will follow up.'
        );
      } catch (err) {
        console.error('Call query error:', err);
        await speakResponse(
          'Our estimating team can be reached directly at (555) 462-METAL for immediate consultation.'
        );
      }
    },
    [setLatestBooking, speakResponse, stopListening]
  );

  // Call duration counter
  useEffect(() => {
    if (mode !== 'voice') return;
    const interval = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [mode]);

  // Initial greeting when call opens
  useEffect(() => {
    if (mode === 'voice') {
      const greetingTimer = setTimeout(() => {
        speakResponse(
          'Hello. This is the EliteMetal Architectural Concierge. How may I assist you with your roofing project or consultation today?'
        );
      }, 700);

      return () => clearTimeout(greetingTimer);
    }
  }, [mode, speakResponse]);

  // Setup Web Speech Recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && mode === 'voice') {
      const speechWindow = window as unknown as IWindowSpeechRecognition;
      const SpeechRecognition =
        speechWindow.SpeechRecognition || speechWindow.webkitSpeechRecognition;

      if (SpeechRecognition) {
        try {
          const rec = new SpeechRecognition();
          rec.continuous = true;
          rec.interimResults = true;
          rec.lang = 'en-US';

          rec.onresult = (event: ISpeechRecognitionEvent) => {
            let finalSpeech = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
              if (event.results[i].isFinal) {
                finalSpeech += event.results[i][0].transcript;
              }
            }

            if (finalSpeech.trim()) {
              handleUserSpeechInput(finalSpeech.trim());
            }
          };

          rec.onerror = () => {
            // Error handling
          };

          recognitionRef.current = rec;
        } catch (e) {
          console.warn('Speech recognition setup failed:', e);
        }
      }
    }
  }, [mode, handleUserSpeechInput]);

  const handleManualSend = () => {
    if (!fallbackInput.trim()) return;
    const text = fallbackInput;
    setFallbackInput('');
    setShowTextFallback(false);
    handleUserSpeechInput(text);
  };

  const toggleMute = () => {
    setIsMuted((prev) => {
      const nextVal = !prev;
      if (nextVal) {
        stopListening();
      } else {
        startListening();
      }
      return nextVal;
    });
  };

  const toggleSpeaker = () => {
    setSpeakerEnabled((prev) => !prev);
    if (audioRef.current) {
      audioRef.current.muted = speakerEnabled;
    }
  };

  const endCall = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    stopListening();
    closeAi();
  };

  const copyConfirmation = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (mode !== 'voice') return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-xl bg-surface-container-lowest border border-tertiary/40 shadow-2xl p-6 sm:p-10 flex flex-col justify-between min-h-[580px] overflow-hidden">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Top Bar: Caller identity & status */}
        <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-container border border-tertiary flex items-center justify-center text-tertiary shadow-md">
              <Sparkles className="w-5 h-5 text-tertiary" />
            </div>
            <div>
              <h3 className="font-headline-md text-lg text-white font-normal">
                EliteMetal Architectural Voice
              </h3>
              <p className="font-label-caps text-[10px] text-tertiary uppercase tracking-wider">
                Direct Engineering &amp; Booking Line
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-body-sm text-xs font-mono text-tertiary px-2.5 py-1 bg-surface-container border border-white/10">
              {formatTimer(callDuration)}
            </span>
          </div>
        </div>

        {/* Center: Audio Visualizer & Call State */}
        <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center text-center space-y-6">
          {/* Pulsing Visualizer Rings */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            {callStatus === 'speaking' && (
              <>
                <div className="absolute inset-0 rounded-full border border-tertiary/30 animate-ping"></div>
                <div className="absolute -inset-4 rounded-full border border-tertiary/20 animate-pulse"></div>
              </>
            )}
            {callStatus === 'listening' && (
              <div className="absolute inset-0 rounded-full border border-emerald-400/30 animate-pulse"></div>
            )}
            {callStatus === 'thinking' && (
              <div className="absolute inset-0 rounded-full border border-primary/40 animate-spin"></div>
            )}

            <div className="w-24 h-24 bg-surface-container-high border-2 border-tertiary flex items-center justify-center text-tertiary shadow-2xl">
              <span className="font-headline-md text-2xl font-light tracking-widest">EM</span>
            </div>
          </div>

          {/* Status Label */}
          <div>
            <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary block mb-1">
              {callStatus === 'speaking' && 'Speaking (Architectural Specialist)...'}
              {callStatus === 'listening' && 'Listening (Speak freely)...'}
              {callStatus === 'thinking' && 'Consulting Engineering Database...'}
              {callStatus === 'connecting' && 'Connecting Encrypted Voice Line...'}
            </span>
            <p className="font-headline-md text-base sm:text-lg text-white max-w-md mx-auto font-light leading-relaxed">
              &ldquo;{currentSubtitle}&rdquo;
            </p>
          </div>

          {/* Live Booking Pass on Screen if booked during the call */}
          {bookingPass && (
            <div className="w-full bg-surface-container-low border border-tertiary/60 p-4 text-left shadow-2xl animate-in slide-in-from-bottom duration-300">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2 text-tertiary">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-label-caps text-[10px] uppercase font-semibold">
                    Consultation Booked
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyConfirmation(String(bookingPass.confirmationId))}
                  className="text-[10px] text-outline hover:text-tertiary flex items-center gap-1 font-mono"
                >
                  {copiedId ? <Check className="w-3 h-3 text-tertiary" /> : <Copy className="w-3 h-3" />}
                  <span>{String(bookingPass.confirmationId)}</span>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 text-on-surface-variant font-light">
                <div>
                  <span className="text-outline block">Representative:</span>
                  <span className="text-white font-medium">{String(bookingPass.fullName)}</span>
                </div>
                <div>
                  <span className="text-outline block">System:</span>
                  <span className="text-white font-medium">{String(bookingPass.roofingSystem)}</span>
                </div>
                <div>
                  <span className="text-outline block">Target Window:</span>
                  <span className="text-tertiary font-medium">{String(bookingPass.preferredDate)}</span>
                </div>
                <div>
                  <span className="text-outline block">Location:</span>
                  <span className="text-white font-medium truncate block">
                    {String(bookingPass.propertyAddress)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Text input fallback mode */}
          {showTextFallback && (
            <div className="w-full flex items-center gap-2 pt-2 animate-in fade-in duration-200">
              <input
                type="text"
                value={fallbackInput}
                onChange={(e) => setFallbackInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleManualSend()}
                placeholder="Type your question or booking details..."
                className="flex-1 bg-surface-container text-white text-xs px-4 py-2.5 border border-white/15 focus:border-tertiary focus:outline-none"
              />
              <button
                type="button"
                onClick={handleManualSend}
                className="px-4 py-2.5 bg-tertiary text-on-tertiary font-label-caps text-xs uppercase"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Bottom Control Actions */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Mute button */}
            <button
              type="button"
              onClick={toggleMute}
              className={`p-3.5 transition-colors border ${
                isMuted
                  ? 'bg-red-500/20 text-red-400 border-red-500'
                  : 'bg-surface-container text-on-surface hover:text-tertiary border-white/10'
              }`}
              title={isMuted ? 'Unmute microphone' : 'Mute microphone'}
            >
              {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>

            {/* Speaker toggle */}
            <button
              type="button"
              onClick={toggleSpeaker}
              className={`p-3.5 transition-colors border ${
                !speakerEnabled
                  ? 'bg-surface-container text-outline border-white/10'
                  : 'bg-surface-container text-on-surface hover:text-tertiary border-white/10'
              }`}
              title={speakerEnabled ? 'Mute audio output' : 'Enable audio output'}
            >
              {speakerEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>

            {/* Text prompt fallback toggle */}
            <button
              type="button"
              onClick={() => setShowTextFallback(!showTextFallback)}
              className="p-3.5 bg-surface-container text-on-surface hover:text-tertiary border border-white/10 transition-colors"
              title="Type input instead of speaking"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                endCall();
                openChat();
              }}
              className="px-4 py-3 bg-surface-container text-tertiary hover:bg-surface-bright border border-tertiary/40 font-label-caps text-xs uppercase tracking-wider transition-colors"
            >
              Switch to Chat
            </button>

            {/* End Call Button */}
            <button
              type="button"
              onClick={endCall}
              className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-label-caps text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-colors font-semibold"
            >
              <PhoneOff className="w-4 h-4" />
              <span>End Call</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
