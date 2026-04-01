"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/lib/projects";

const spring = { stiffness: 320, damping: 28, mass: 0.35 };

type WorkProjectCardProps = {
  project: Project;
  index: number;
  total: number;
};

export function WorkProjectCard({
  project: p,
  index,
  total,
}: WorkProjectCardProps) {
  const reduced = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(my, [-1, 1], [9, -9]),
    spring,
  );
  const rotateY = useSpring(
    useTransform(mx, [-1, 1], [-11, 11]),
    spring,
  );

  const glareX = useSpring(
    useTransform(mx, [-1, 1], [20, 80]),
    { stiffness: 180, damping: 22 },
  );
  const glareY = useSpring(
    useTransform(my, [-1, 1], [20, 80]),
    { stiffness: 180, damping: 22 },
  );

  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(34,211,238,0.28), transparent 42%)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    mx.set(Math.max(-1, Math.min(1, x)));
    my.set(Math.max(-1, Math.min(1, y)));
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const num = String(index + 1).padStart(2, "0");
  const zigzag =
    index % 2 === 0
      ? "md:translate-x-0 lg:translate-x-0"
      : "md:translate-x-4 lg:translate-x-8";

  return (
    <div className={`${zigzag} transition-transform duration-700`}>
      <div
        ref={wrapRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ perspective: reduced ? undefined : 1400 }}
      >
        <motion.div
          style={{
            rotateX: reduced ? 0 : rotateX,
            rotateY: reduced ? 0 : rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative"
        >
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/card relative block overflow-hidden rounded-[1.35rem] outline-none ring-offset-2 ring-offset-[#060607] transition-shadow duration-500 focus-visible:ring-2 focus-visible:ring-cyan-400/70"
          >
            {/* Animated rim */}
            <span
              aria-hidden
              className="absolute inset-0 rounded-[1.35rem] bg-gradient-to-br from-cyan-400/55 via-violet-500/45 to-fuchsia-500/50 opacity-60 blur-[1px] transition-opacity duration-500 group-hover/card:opacity-100 group-focus-visible/card:opacity-100"
            />
            <span
              aria-hidden
              className="absolute inset-[1px] rounded-[1.3rem] bg-[#070708]/95 backdrop-blur-sm"
            />

            {/* Moving glare */}
            {!reduced ? (
              <motion.span
                aria-hidden
                className="pointer-events-none absolute -inset-[40%] opacity-0 mix-blend-screen transition-opacity duration-500 group-hover/card:opacity-100"
                style={{ background: glareBg }}
              />
            ) : null}

            {/* Shine sweep */}
            <span
              aria-hidden
              className="pointer-events-none absolute -left-full top-0 z-[1] h-full w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent opacity-0 transition-all duration-700 group-hover/card:left-full group-hover/card:opacity-100"
            />

            <div
              className="relative z-[2] p-6 md:p-8"
              style={{ transform: reduced ? undefined : "translateZ(28px)" }}
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="relative min-w-0 flex-1">
                  <span className="font-mono text-[clamp(3.5rem,10vw,5.5rem)] font-bold leading-none text-white/[0.04]">
                    {num}
                  </span>
                  <div className="-mt-10 md:-mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-sm text-zinc-500">
                      {p.role} · {p.year}
                    </p>
                  </div>
                </div>
                <ul className="flex flex-shrink-0 flex-wrap gap-2 md:justify-end">
                  {p.tags.map((t) => (
                    <li key={t}>
                      <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] px-3 py-1 text-xs font-medium text-cyan-100/90">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="relative z-[2] mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
                {p.desc}
              </p>

              <div className="relative z-[2] mt-6 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
                    Visit live site
                  </span>
                  <motion.span
                    aria-hidden
                    className="inline-block text-cyan-300"
                    initial={false}
                    animate={
                      reduced ? { x: 0 } : { x: [0, 5, 0] }
                    }
                    transition={{
                      duration: 1.5,
                      repeat: reduced ? 0 : Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-600">
                  {index + 1} / {total}
                </span>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
