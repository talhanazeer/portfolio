import type { Metadata } from "next";
import { Reveal } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Full stack and backend roles — Cbrix, Emenac.inc — Laravel, PHP, and scalable web apps.",
};

const timeline = [
  {
    period: "10/2022 — Present",
    title: "Full Stack Developer",
    org: "Cbrix · Lahore",
    points: [
      "Designed and implemented frontend and backend solutions using HTML, CSS, JavaScript, PHP, MySQL, and Laravel.",
      "Focused on performance optimization and scalability in applications.",
    ],
  },
  {
    period: "06/2021 — 10/2022",
    title: "Backend Developer",
    org: "Emenac.inc · Lahore",
    points: [
      "Developed server-side systems ensuring database integrity, performance, and security.",
      "Conducted code reviews and addressed complex technical challenges.",
    ],
  },
  {
    period: "10/2019 — 06/2021",
    title: "Frontend Developer",
    org: "Emenac.inc · Lahore",
    points: [
      "Built responsive and user-friendly interfaces using HTML, CSS, JavaScript, and Bootstrap.",
      "Delivered seamless experiences across diverse devices and platforms.",
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
        From responsive UI at Emenac to full-stack Laravel and PHP delivery at
        Cbrix — always with performance and security in mind.
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
