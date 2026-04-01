"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export type RevealVariant = "fadeUp" | "scale" | "blur";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Richer entrance presets; omit for classic fade-up using `y`. */
  variant?: RevealVariant;
};

const variantStates: Record<
  RevealVariant,
  { hidden: Record<string, number | string>; visible: Record<string, number | string> }
> = {
  fadeUp: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, y: 22, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, y: 18, filter: "blur(12px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  variant,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const reduced = usePrefersReducedMotion();

  if (variant) {
    const states = variantStates[variant];
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={{
          hidden: states.hidden,
          visible: states.visible,
        }}
        initial={reduced ? "visible" : "hidden"}
        animate={reduced || inView ? "visible" : "hidden"}
        transition={{
          duration: reduced ? 0 : 0.72,
          delay: reduced ? 0 : delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: reduced ? 0 : 0.65,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
