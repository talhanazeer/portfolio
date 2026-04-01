import type { Metadata } from "next";
import { Reveal } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Experience",
  description: "Roles, impact, and how teams collaborated over time.",
};

const timeline = [
  {
    period: "2023 — Present",
    title: "Principal frontend engineer",
    org: "Northwind Labs",
    points: [
      "Own design system + Next.js app shell used by 8 product squads.",
      "Cut p95 LCP by 38% via streaming, image pipeline, and font strategy.",
    ],
  },
  {
    period: "2019 — 2023",
    title: "Senior UI engineer",
    org: "Compound Studio",
    points: [
      "Partnered with brand and PM to launch 20+ marketing and product surfaces.",
      "Introduced Framer Motion + GSAP motion guidelines for the team.",
    ],
  },
  {
    period: "2015 — 2019",
    title: "Frontend developer · Design hybrid",
    org: "Various / Freelance",
    points: [
      "Shipped interactive campaigns and SPAs for fintech and culture clients.",
      "Established component libraries ahead of mainstream Storybook adoption.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300/90">
          Journey
        </p>
      </Reveal>
      <Reveal delay={0.06} className="mt-4">
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Experience
        </h1>
      </Reveal>
      <Reveal delay={0.1} className="mt-4 max-w-xl text-lg text-zinc-400">
        A concise timeline — each chapter narrowed the gap between design intent
        and shipped pixels.
      </Reveal>

      <ol className="relative mt-20 space-y-0 border-l border-white/10 pl-8 md:pl-12">
        {timeline.map((item, i) => (
          <Reveal key={item.org + item.period} delay={0.07 * i} y={20}>
            <li className="relative pb-16 last:pb-0">
              <span className="absolute -left-[41px] top-1.5 flex size-5 items-center justify-center rounded-full border border-cyan-400/50 bg-[#060607] md:-left-[53px] md:size-6">
                <span className="size-2 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500" />
              </span>
              <p className="text-xs font-mono uppercase tracking-wider text-cyan-300/80">
                {item.period}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white md:text-2xl">
                {item.title}
              </h2>
              <p className="text-sm text-zinc-500">{item.org}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-400 marker:text-violet-400/80">
                {item.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
