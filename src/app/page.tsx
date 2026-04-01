import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { HomeHighlightCard } from "@/components/home/HomeHighlightCard";
import { HeroOrbs } from "@/components/home/HeroOrbs";
import { Magnetic } from "@/components/magnetic/Magnetic";
import { site } from "@/lib/constants";

const highlights = [
  {
    title: "Full stack delivery",
    body: "HTML, CSS, JavaScript on the client; PHP, Laravel, and MySQL on the server — integrated end to end.",
  },
  {
    title: "Performance & scale",
    body: "Optimization habits from real traffic: faster pages, sensible queries, and maintainable structure.",
  },
  {
    title: "Travel & landing expertise",
    body: "Dozens of live UK, CA, and global travel, flight, and Umrah sites — see Work for links.",
  },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <HeroOrbs />

      <section className="relative mx-auto max-w-6xl px-5 pb-24 pt-16 md:px-8 md:pb-32 md:pt-20">
        <Reveal variant="blur">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/90">
            Portfolio · {site.location}
          </p>
        </Reveal>
        <Reveal variant="scale" delay={0.06} className="mt-6">
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Web apps that are{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
              fast
            </span>
            , secure, and built to last.
          </h1>
        </Reveal>
        <Reveal variant="fadeUp" delay={0.12} className="mt-8 max-w-2xl">
          <p className="text-lg leading-relaxed text-zinc-400 md:text-xl">
            {site.tagline}
          </p>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.18} className="mt-10 flex flex-wrap gap-4">
          <Magnetic strength={0.5} className="inline-flex">
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(34,211,238,0.55)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_48px_-6px_rgba(167,139,250,0.5)]"
            >
              View work
            </Link>
          </Magnetic>
          <Magnetic strength={0.45} className="inline-flex">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08]"
            >
              Let&apos;s talk
            </Link>
          </Magnetic>
        </Reveal>

        <div className="mt-24 grid gap-6 md:grid-cols-3 md:gap-8">
          {highlights.map((h, i) => (
            <HomeHighlightCard
              key={h.title}
              title={h.title}
              body={h.body}
              delay={0.06 * i}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
