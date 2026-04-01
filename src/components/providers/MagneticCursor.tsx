"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const ringSpring = { stiffness: 120, damping: 20, mass: 0.6 };
const dotSpring = { stiffness: 500, damping: 35, mass: 0.2 };

export function MagneticCursor() {
  const reduced = usePrefersReducedMotion();
  const [onPage, setOnPage] = useState(true);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, ringSpring);
  const ringY = useSpring(mouseY, ringSpring);
  const dotX = useSpring(mouseX, dotSpring);
  const dotY = useSpring(mouseY, dotSpring);

  useEffect(() => {
    if (reduced) return;
    const root = document.documentElement;
    root.classList.add("magnetic-cursor-active");
    return () => root.classList.remove("magnetic-cursor-active");
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;

    const onMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onDown = () => document.body.classList.add("cursor-pressed");
    const onUp = () => document.body.classList.remove("cursor-pressed");

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, [mouseX, mouseY, reduced]);

  useEffect(() => {
    if (reduced) return;
    const hide = () => setOnPage(false);
    const show = () => setOnPage(true);
    document.documentElement.addEventListener("mouseleave", hide);
    document.documentElement.addEventListener("mouseenter", show);
    return () => {
      document.documentElement.removeEventListener("mouseleave", hide);
      document.documentElement.removeEventListener("mouseenter", show);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] hidden mix-blend-difference transition-opacity duration-300 md:block"
      style={{ opacity: onPage ? 1 : 0 }}
    >
      <motion.div
        className="pointer-events-none absolute size-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80"
        style={{ left: ringX, top: ringY }}
      />
      <motion.div
        className="pointer-events-none absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        style={{ left: dotX, top: dotY }}
      />
    </div>
  );
}
