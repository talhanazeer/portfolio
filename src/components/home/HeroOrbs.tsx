"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const orbs = [
  {
    className: "left-[8%] top-[18%] size-[420px] bg-violet-600/25 blur-3xl",
    delay: 0,
    drift: { x: [0, 18, 0], y: [0, -12, 0] },
    duration: 18,
  },
  {
    className: "right-[5%] top-[28%] size-[360px] bg-cyan-500/20 blur-3xl",
    delay: 0.15,
    drift: { x: [0, -22, 0], y: [0, 16, 0] },
    duration: 22,
  },
  {
    className: "left-[35%] bottom-[5%] size-[280px] bg-fuchsia-500/15 blur-3xl",
    delay: 0.3,
    drift: { x: [0, 14, 0], y: [0, 20, 0] },
    duration: 20,
  },
];

export function HeroOrbs() {
  const reduced = usePrefersReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${o.className}`}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: 1,
            scale: 1,
            ...(reduced ? {} : o.drift),
          }}
          transition={{
            opacity: { duration: 1.4, delay: o.delay, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 1.4, delay: o.delay, ease: [0.22, 1, 0.36, 1] },
            ...(reduced
              ? {}
              : {
                  x: {
                    duration: o.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: o.delay + 1.1,
                  },
                  y: {
                    duration: o.duration * 1.08,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: o.delay + 1.1,
                  },
                }),
          }}
        />
      ))}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[min(90vw,720px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.14)_0%,transparent_68%)]"
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
