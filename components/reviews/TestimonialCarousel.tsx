'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/constants/data';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prevIdx) =>
      prevIdx === 0 ? TESTIMONIALS_DATA.length - 1 : prevIdx - 1
    );
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prevIdx) =>
      prevIdx === TESTIMONIALS_DATA.length - 1 ? 0 : prevIdx + 1
    );
  };

  const item = TESTIMONIALS_DATA[currentIndex];

  return (
    <div className="w-full bg-surface-container-low border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-8 pb-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex text-tertiary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-tertiary" />
            ))}
          </div>
          <span className="font-label-caps text-xs uppercase tracking-wider text-on-surface">
            5.0 Verified Architectural Commission
          </span>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-3">
          <span className="font-body-sm text-xs text-outline mr-2 font-mono">
            0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
          </span>
          <motion.button
            whileTap={{ scale: 0.92 }}
            type="button"
            onClick={prev}
            className="w-10 h-10 bg-surface-container border border-white/10 hover:border-tertiary text-on-surface hover:text-tertiary flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tertiary"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.92 }}
            type="button"
            onClick={next}
            className="w-10 h-10 bg-surface-container border border-white/10 hover:border-tertiary text-on-surface hover:text-tertiary flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tertiary"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      <div className="relative min-h-[180px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={item.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <p className="font-body-xl text-lg sm:text-xl lg:text-2xl text-on-surface-variant font-light leading-relaxed italic">
              &ldquo;{item.quote}&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/5">
              <div>
                <h4 className="font-headline-md text-xl text-white font-normal">{item.clientName}</h4>
                <p className="font-label-caps text-xs text-tertiary uppercase tracking-wider mt-1">
                  {item.role} • {item.location}
                </p>
              </div>

              <div className="px-4 py-2 bg-surface-container border border-white/5 font-label-caps text-[11px] uppercase text-outline">
                <span>Project: {item.project}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
