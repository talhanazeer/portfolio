import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { Magnetic } from "@/components/magnetic/Magnetic";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Live travel, flight, and pilgrimage sites — Laravel, PHP, and full-stack delivery.",
};

export default function WorkPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/90">
          Selected work
        </p>
      </Reveal>
      <Reveal delay={0.06} className="mt-4">
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Projects that shipped.
        </h1>
      </Reveal>
      <Reveal delay={0.1} className="mt-4 max-w-xl text-lg text-zinc-400">
        Production sites for UK, Canadian, and global travel brands — landing
        pages, booking funnels, and content-heavy portals.
      </Reveal>

      <ul className="mt-16 space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={0.06 * i} y={24}>
            <li>
              <Magnetic strength={0.2} className="block rounded-3xl">
                <article className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_80px_-20px_rgba(34,211,238,0.2)] md:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold text-white">
                        {p.title}
                      </h2>
                      <p className="mt-1 text-sm text-zinc-500">
                        {p.role} · {p.year}
                      </p>
                    </div>
                    <ul className="flex flex-wrap gap-2 md:justify-end">
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-5 max-w-2xl text-zinc-400">{p.desc}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-sm font-medium text-cyan-300/90 transition-colors hover:text-cyan-200"
                  >
                    Visit site →
                  </a>
                </article>
              </Magnetic>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.15} className="mt-16">
        <Magnetic strength={0.4} className="inline-flex">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950"
          >
            Start a project
          </Link>
        </Magnetic>
      </Reveal>
    </div>
  );
}
