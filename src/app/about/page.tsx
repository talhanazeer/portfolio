import type { Metadata } from "next";
import { Reveal } from "@/components/animations/Reveal";
import { Magnetic } from "@/components/magnetic/Magnetic";
import { site } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${site.name} — background, approach, and what drives the work.`,
};

const bullets = [
  "10+ years shaping web products across startups and agencies.",
  "Believe the best UI feels inevitable: clear hierarchy, honest motion, no gimmicks.",
  "Currently focused on React ecosystems, design tokens, and edge-deployed apps.",
];

export default function AboutPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300/90">
          About
        </p>
      </Reveal>
      <Reveal delay={0.06} className="mt-4">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Calm craft, intentional motion.
        </h1>
      </Reveal>
      <Reveal delay={0.1} className="mt-8 max-w-2xl space-y-5">
        {bullets.map((t) => (
          <p key={t} className="text-lg leading-relaxed text-zinc-400">
            {t}
          </p>
        ))}
      </Reveal>
      <Reveal delay={0.16} className="mt-12">
        <Magnetic strength={0.4} className="inline-flex">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-cyan-400/40"
          >
            {site.email}
          </a>
        </Magnetic>
      </Reveal>
    </div>
  );
}
