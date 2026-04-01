import type { Metadata } from "next";
import { Reveal } from "@/components/animations/Reveal";
import { SkillCategoryCard } from "@/components/skills/SkillCategoryCard";
import { SkillsGsapRow } from "@/components/skills/SkillsGsapRow";
import { primaryStack, skillCategories } from "@/lib/skills-data";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Full-stack development: React, Next.js, Laravel, PHP, WordPress, databases, DevOps, animation, and product delivery.",
};

const totalSkills = skillCategories.reduce((n, c) => n + c.items.length, 0);

export default function SkillsPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <Reveal variant="blur">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/90">
          Capabilities
        </p>
      </Reveal>
      <Reveal variant="scale" delay={0.06} className="mt-4">
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Skills & stack
        </h1>
      </Reveal>
      <Reveal variant="fadeUp" delay={0.1} className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
        Everything below is grouped in the order work actually flows: core web
        tech, frameworks, polish, backend and data, then how it ships and scales
        with people.{" "}
        <span className="text-zinc-500">
          {totalSkills}+ discrete capabilities — hover chips for subtle depth.
        </span>
      </Reveal>

      {/* Primary stack — high-signal strip */}
      <Reveal delay={0.12} className="mt-12">
        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-cyan-500/[0.07] via-violet-500/[0.05] to-transparent p-6 md:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/80">
            Primary stack
          </p>
          <p className="mt-2 max-w-xl text-sm text-zinc-400">
            The tools clients and teams most often see on recent full-stack and
            product work.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Primary stack">
            {primaryStack.map((label) => (
              <li key={label}>
                <span className="inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-400/[0.08] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_40px_-16px_rgba(34,211,238,0.35)]">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Bento-style category grid */}
      <div className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, i) => {
          const wide = i === 0 || i === 4;
          return (
            <Reveal
              key={category.title}
              delay={0.04 * Math.min(i, 12)}
              y={16}
              className={`h-full ${wide ? "sm:col-span-2" : ""}`}
            >
              <SkillCategoryCard category={category} />
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.08} className="mt-24 rounded-3xl border border-white/[0.08] bg-[#08080c] p-1">
        <div className="rounded-[1.35rem] bg-gradient-to-b from-white/[0.06] to-transparent p-6 md:p-10">
          <SkillsGsapRow />
        </div>
      </Reveal>
    </div>
  );
}
