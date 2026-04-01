"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type AmbientBackdropProps = {
  /** work = stronger grid + orbs; soft = lighter wash for inner pages */
  variant?: "work" | "soft";
  className?: string;
};

export function AmbientBackdrop({
  variant = "soft",
  className = "",
}: AmbientBackdropProps) {
  const reduced = usePrefersReducedMotion();
  const dense = variant === "work";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {dense ? (
        <div
          className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black,transparent)]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />
      ) : null}

      <motion.div
        className="absolute -left-[20%] top-[10%] size-[min(520px,70vw)] rounded-full bg-cyan-500/15 blur-[100px]"
        animate={
          reduced
            ? undefined
            : {
                x: [0, 24, 0],
                y: [0, 18, 0],
                scale: [1, 1.06, 1],
              }
        }
        transition={{
          duration: dense ? 14 : 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -right-[15%] top-[25%] size-[min(480px,65vw)] rounded-full bg-violet-600/18 blur-[100px]"
        animate={
          reduced
            ? undefined
            : {
                x: [0, -20, 0],
                y: [0, 28, 0],
                scale: [1, 1.05, 1],
              }
        }
        transition={{
          duration: dense ? 16 : 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
      />
      <motion.div
        className="absolute left-[30%] bottom-[-10%] size-[min(400px,55vw)] rounded-full bg-fuchsia-500/12 blur-[90px]"
        animate={
          reduced
            ? undefined
            : {
                opacity: [0.35, 0.55, 0.35],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: dense ? 12 : 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      />

      {dense ? (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060607]/40 to-[#060607]" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-[#060607]/20 via-transparent to-[#060607]/80" />
      )}
    </div>
  );
}
