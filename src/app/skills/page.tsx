import type { Metadata } from "next";
import { Reveal } from "@/components/animations/Reveal";
import { SkillsGsapRow } from "@/components/skills/SkillsGsapRow";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Frontend, backend, and integration — HTML, CSS, JavaScript, PHP, Laravel, MySQL, and more.",
};

const groups = [
  {
    title: "Frontend",
    items: [
      "Frontend development",
      "Responsive web design",
      "Bootstrap (latest)",
      "Cross-browser compatibility",
      "HTML, CSS, JavaScript",
    ],
  },
  {
    title: "Backend & data",
    items: [
      "Backend development",
      "Core PHP",
      "Laravel",
      "MySQL database management",
      "Integration of frontend and backend systems",
    ],
  },
  {
    title: "Stack & tooling",
    items: ["WAMP", "CKFinder integration"],
  },
  {
    title: "Quality",
    items: ["Optimization techniques", "Performance-focused delivery", "Secure data handling"],
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
        Core stack for client sites and internal apps — from responsive UI to
        Laravel-backed APIs and MySQL.
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
