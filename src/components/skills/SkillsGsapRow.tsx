"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Node",
  "PostgreSQL",
  "Figma",
  "Framer Motion",
  "GSAP",
  "Tailwind CSS",
  "WebGL",
  "CI/CD",
  "Vercel",
];

export function SkillsGsapRow() {
  const reduced = usePrefersReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (reduced || !trackRef.current || !wrapRef.current) return;

    const track = trackRef.current;
    const wrap = wrapRef.current;
    const getShift = () => Math.max(0, track.scrollWidth - wrap.offsetWidth);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        track,
        { x: 0 },
        {
          x: () => -getShift(),
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
            invalidateOnRefresh: true,
          },
        },
      );
    }, wrap);

    return () => ctx.revert();
  }, [reduced]);

  const items = [...SKILLS, ...SKILLS];

  return (
    <div
      ref={wrapRef}
      className="relative -mx-5 overflow-hidden py-10 md:-mx-8"
    >
      <p className="mb-6 px-5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 md:px-8">
        Scroll-driven marquee · GSAP ScrollTrigger
      </p>
      <div ref={trackRef} className="flex w-max gap-4 px-5 md:gap-5 md:px-8">
        {items.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-lg font-medium text-white shadow-[0_0_40px_-15px_rgba(6,182,212,0.35)] backdrop-blur-sm md:px-8 md:py-5 md:text-xl"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
