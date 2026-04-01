import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { Magnetic } from "@/components/magnetic/Magnetic";

export const metadata: Metadata = {
  title: "Insights",
  description: "Notes on motion, performance, and shipping polished interfaces.",
};

const posts = [
  {
    slug: "magnetic-ux-without-the-gimmick",
    title: "Magnetic UX without the gimmick",
    date: "Mar 2026",
    excerpt:
      "When pull-strength, spring config, and hit targets align, interfaces feel alive — not noisy.",
  },
  {
    slug: "vercel-deploy-checklist-for-next-apps",
    title: "Vercel deploy checklist for Next.js apps",
    date: "Feb 2026",
    excerpt:
      "Metadata base URL, output settings, env naming, and preview hygiene you can copy-paste.",
  },
  {
    slug: "lenis-plus-gsap-in-the-app-router",
    title: "Lenis + GSAP in the App Router",
    date: "Jan 2026",
    excerpt:
      "Smooth scroll alongside scrubbed timelines — client boundaries and cleanup that avoids jank.",
  },
];

export default function InsightsPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <Reveal variant="blur">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300/90">
          Writing
        </p>
      </Reveal>
      <Reveal variant="scale" delay={0.06} className="mt-4">
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Insights
        </h1>
      </Reveal>
      <Reveal variant="fadeUp" delay={0.1} className="mt-4 max-w-xl text-lg text-zinc-400">
        Short articles — wire these slugs to a CMS or MDX when you are ready.
      </Reveal>

      <ul className="mt-16 space-y-5">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={0.05 * i} y={16}>
            <li>
              <Magnetic strength={0.18} className="block">
                <article className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:border-violet-500/25 md:p-7">
                  <p className="text-xs font-mono text-zinc-500">{post.date}</p>
                  <h2 className="mt-2 text-xl font-semibold text-white">
                    <Link href={`/insights/${post.slug}`} className="hover:text-cyan-200">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {post.excerpt}
                  </p>
                </article>
              </Magnetic>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
