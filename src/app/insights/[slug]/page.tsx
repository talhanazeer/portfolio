import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/animations/Reveal";

const articles: Record<
  string,
  { title: string; date: string; body: string[] }
> = {
  "magnetic-ux-without-the-gimmick": {
    title: "Magnetic UX without the gimmick",
    date: "Mar 2026",
    body: [
      "Magnetic hover effects pull the eye toward actionable elements. The trick is tuning strength so the motion feels supportive, not seasick.",
      "Pair a medium stiffness spring with modest displacement (under half a button width) and keep animations off for users who prefer reduced motion.",
      "This site uses Framer Motion springs on wrappers — the cursor adds a second layer of depth on desktop only.",
    ],
  },
  "vercel-deploy-checklist-for-next-apps": {
    title: "Vercel deploy checklist for Next.js apps",
    date: "Feb 2026",
    body: [
      "Set NEXT_PUBLIC_SITE_URL in Production and Preview to your canonical URL so metadataBase and Open Graph resolve correctly.",
      "Run npm run build locally before pushing; Vercel uses the same command. Fix TypeScript and ESLint in CI to avoid surprise failures.",
      "Optional: add vercel.json only when you need redirects, headers, or cron — the default Next.js preset is enough for many portfolios.",
    ],
  },
  "lenis-plus-gsap-in-the-app-router": {
    title: "Lenis + GSAP in the App Router",
    date: "Jan 2026",
    body: [
      "Lenis belongs in a client provider mounted once in the root layout. Request animation frames manually unless you enable autoRaf.",
      "GSAP timelines should be created in useLayoutEffect and reverted on cleanup so route changes do not leak ScrollTriggers.",
      "Keep heavy animation imports client-only; never instantiate Lenis or GSAP in server components.",
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = articles[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.body[0],
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = articles[slug];
  if (!post) notFound();

  return (
    <article className="relative mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <Link
          href="/insights"
          className="text-sm font-medium text-cyan-300/90 hover:text-cyan-200"
        >
          ← All insights
        </Link>
      </Reveal>
      <Reveal delay={0.06} className="mt-8">
        <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
          {post.date}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {post.title}
        </h1>
      </Reveal>
      <div className="mt-10 space-y-6">
        {post.body.map((p, i) => (
          <Reveal key={i} delay={0.04 * i} y={12}>
            <p className="text-lg leading-relaxed text-zinc-400">{p}</p>
          </Reveal>
        ))}
      </div>
    </article>
  );
}
