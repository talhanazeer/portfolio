import type { Metadata } from "next";
import Link from "next/link";
import { AmbientBackdrop } from "@/components/ambient/AmbientBackdrop";
import { Reveal } from "@/components/animations/Reveal";
import { Magnetic } from "@/components/magnetic/Magnetic";
import { WorkProjectList } from "@/components/work/WorkProjectList";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Live travel, flight, and pilgrimage sites — Laravel, PHP, and full-stack delivery.",
};

const stats = [
  { label: "Live properties", value: `${projects.length}+`, hint: "Shipped & maintained" },
  { label: "Stack", value: "Laravel · PHP · JS", hint: "Plus React & Next when it fits" },
  { label: "Reach", value: "UK · CA · Global", hint: "Travel & booking vertical" },
] as const;

export default function WorkPage() {
  return (
    <div className="relative isolate min-h-screen">
      <AmbientBackdrop variant="work" className="absolute inset-0 -z-10" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal variant="blur">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-300/90">
            Selected work
          </p>
        </Reveal>
        <Reveal variant="scale" delay={0.06} className="mt-5">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
            Production sites with{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
              depth & motion
            </span>
            .
          </h1>
        </Reveal>
        <Reveal variant="fadeUp" delay={0.12} className="mt-6 max-w-2xl">
          <p className="text-lg leading-relaxed text-zinc-400">
            A scroll through real client launches — travel, flights, Umrah, and
            landing experiences. Hover cards for 3D tilt, glare, and live links.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} variant="scale" delay={0.08 + i * 0.06}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-white/[0.06] to-transparent p-5 transition-all duration-500 hover:border-cyan-500/25 hover:shadow-[0_0_48px_-20px_rgba(34,211,238,0.2)]">
                <span
                  aria-hidden
                  className="absolute -right-6 -top-10 size-28 rounded-full bg-cyan-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                  {s.label}
                </p>
                <p className="mt-2 font-mono text-2xl font-semibold text-white md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-2 text-xs text-zinc-500">{s.hint}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <WorkProjectList projects={projects} />

        <Reveal variant="fadeUp" delay={0.1} className="mt-20">
          <Magnetic strength={0.4} className="inline-flex">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(34,211,238,0.45)] transition-shadow hover:shadow-[0_0_52px_-8px_rgba(167,139,250,0.4)]"
            >
              Start a project
              <span aria-hidden>→</span>
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </div>
  );
}
