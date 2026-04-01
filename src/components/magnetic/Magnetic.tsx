"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from "framer-motion";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const defaultSpring: SpringOptions = {
  stiffness: 280,
  damping: 22,
  mass: 0.4,
};

type MagneticProps = {
  children: React.ReactNode;
  className?: string;
  /** Multiplier for pull distance; higher = stronger magnet */
  strength?: number;
  spring?: SpringOptions;
  asChild?: boolean;
};

export function Magnetic({
  children,
  className,
  strength = 0.42,
  spring = defaultSpring,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sX = useSpring(x, spring);
  const sY = useSpring(y, spring);
  const pull = reduced ? 0 : strength;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const cx = left + width / 2;
    const cy = top + height / 2;
    x.set((e.clientX - cx) * pull);
    y.set((e.clientY - cy) * pull);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: sX, y: sY }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={className}
    >
      {children}
    </motion.div>
  );
}
