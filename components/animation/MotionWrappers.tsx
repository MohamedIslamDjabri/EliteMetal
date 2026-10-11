'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, useInView } from 'motion/react';
import { usePathname } from 'next/navigation';

// Smooth luxury easing curve
const luxuryEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Top thin architectural scroll progress indicator
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-20 left-0 right-0 h-[2px] bg-gradient-to-r from-tertiary/40 via-tertiary to-tertiary/70 origin-left z-40 pointer-events-none"
    />
  );
}

/**
 * Page route transition wrapper
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: luxuryEase }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

/**
 * FadeIn on scroll reveal
 */
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  distance?: number;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
  distance = 24,
}: FadeInProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialPosition();

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: luxuryEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger Container & Items for grids, lists, cards
 */
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  delayChildren = 0.05,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  direction = 'up',
  distance = 20,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}) {
  const yOffset = direction === 'up' ? distance : direction === 'down' ? -distance : 0;
  const xOffset = direction === 'left' ? distance : direction === 'right' ? -distance : 0;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: xOffset, y: yOffset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.55, ease: luxuryEase },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Elevated Interactive Card with subtle hover lift and metallic sheen
 */
export function MotionCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Animated Metric Counter with counting effect
 */
export function AnimatedMetricCounter({
  value,
  duration = 1.6,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    // Check if value contains numbers to animate
    const match = value.match(/^([\D]*)(\d+[\d,.]*)([\D]*)$/);
    if (!match) return;

    const [, prefix, numStr, suffix] = match;
    const cleanNum = parseFloat(numStr.replace(/,/g, ''));
    if (isNaN(cleanNum)) return;

    const startTime = performance.now();
    const isInteger = !numStr.includes('.');
    let frameId: number;

    const update = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = cleanNum * eased;

      const formatted = isInteger
        ? Math.round(current).toLocaleString()
        : current.toFixed(1);

      if (ref.current) {
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }

      if (progress < 1) {
        frameId = requestAnimationFrame(update);
      } else if (ref.current) {
        ref.current.textContent = value;
      }
    };

    frameId = requestAnimationFrame(update);
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [isInView, value, duration]);

  return <span ref={ref}>{value}</span>;
}

/**
 * Architectural Hero Entrance (orchestrated timing)
 */
export function HeroEntrance({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
          },
        },
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export function HeroElement({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: luxuryEase },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
