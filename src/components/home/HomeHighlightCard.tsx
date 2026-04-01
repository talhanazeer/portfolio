"use client";

import { motion, useReducedMotion } from "framer-motion";

type HomeHighlightCardProps = {
  title: string;
  body: string;
  delay?: number;
};

export function HomeHighlightCard({
  title,
  body,
  delay = 0,
}: HomeHighlightCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 26 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: reduced ? 0 : 0.65,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reduced
          ? undefined
          : {
              y: -6,
              transition: { type: "spring", stiffness: 420, damping: 22 },
            }
      }
      className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-none transition-shadow duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_60px_-18px_rgba(34,211,238,0.25)] md:p-7"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-16 size-40 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-600/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-[width] duration-500 ease-out group-hover:w-14"
      />
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-zinc-500">{body}</p>
    </motion.article>
  );
}
