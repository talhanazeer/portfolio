import type { Metadata } from "next";
import { Reveal } from "@/components/animations/Reveal";
import { Magnetic } from "@/components/magnetic/Magnetic";
import { site } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${site.name} — background, approach, and what drives the work.`,
};

const bullets = [
  "I'm an experienced web developer passionate about crafting exceptional digital experiences.",
  "My expertise spans frontend and backend technologies — robust, secure, and high-performance applications.",
  "I care about responsive UI, solid database design, and shipping maintainable Laravel and PHP systems.",
];

const education = [
  {
    period: "Expected 12/2027",
    title: "Computer Science",
    org: "Virtual University of Pakistan · Lahore",
  },
  {
    period: "12/2024",
    title: "Computer Science (PUCIT)",
    org: "PUCIT · Lahore",
  },
  {
    period: "09/2020",
    title: "F.Sc — Intermediate",
    org: "Daanish Boys School · Rahim Yar Khan",
  },
];

export default function AboutPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <Reveal variant="blur">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300/90">
          About
        </p>
      </Reveal>
      <Reveal variant="scale" delay={0.06} className="mt-4">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Full stack focus, end-to-end delivery.
        </h1>
      </Reveal>
      <Reveal variant="fadeUp" delay={0.1} className="mt-8 max-w-2xl space-y-5">
        {bullets.map((t) => (
          <p key={t} className="text-lg leading-relaxed text-zinc-400">
            {t}
          </p>
        ))}
      </Reveal>
      <Reveal delay={0.14} className="mt-16">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300/90">
          Education
        </p>
        <ul className="mt-6 max-w-2xl space-y-6">
          {education.map((e) => (
            <li
              key={e.title + e.period}
              className="border-b border-white/[0.06] pb-6 last:border-0 last:pb-0"
            >
              <p className="text-xs font-mono uppercase tracking-wider text-cyan-300/80">
                {e.period}
              </p>
              <h2 className="mt-2 text-lg font-semibold text-white">{e.title}</h2>
              <p className="mt-1 text-sm text-zinc-500">{e.org}</p>
            </li>
          ))}
        </ul>
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
