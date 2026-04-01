import type { Metadata } from "next";
import { Reveal } from "@/components/animations/Reveal";
import { SkillsGsapRow } from "@/components/skills/SkillsGsapRow";

export const metadata: Metadata = {
  title: "Skills",
  description: "Tools, stack, and craft — including scroll-driven motion demos.",
};

const groups = [
  {
    title: "Frontend",
    items: ["React 19", "Next.js App Router", "TypeScript", "Tailwind v4"],
  },
  {
    title: "Motion",
    items: ["Framer Motion", "GSAP + ScrollTrigger", "Lenis smooth scroll"],
  },
  {
    title: "Backend & data",
    items: ["Node.js", "REST & tRPC", "Postgres", "Edge functions"],
  },
  {
    title: "Delivery",
    items: ["Vercel", "GitHub Actions", "ESLint", "Playwright smoke tests"],
  },
];

export default function SkillsPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/90">
          Capabilities
        </p>
      </Reveal>
      <Reveal delay={0.06} className="mt-4">
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Skills & stack
        </h1>
      </Reveal>
      <Reveal delay={0.1} className="mt-4 max-w-xl text-lg text-zinc-400">
        This page pairs Framer Motion reveals with a GSAP scrubbed marquee tied
        to scroll — two animation systems, one coherent experience.
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={0.06 * i} y={18}>
            <div className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                {g.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="text-sm text-zinc-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12} className="mt-24 rounded-3xl border border-white/[0.08] bg-[#08080c] p-1">
        <div className="rounded-[1.35rem] bg-gradient-to-b from-white/[0.06] to-transparent p-6 md:p-10">
          <SkillsGsapRow />
        </div>
      </Reveal>
    </div>
  );
}
