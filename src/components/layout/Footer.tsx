"use client";

import Link from "next/link";
import { Magnetic } from "@/components/magnetic/Magnetic";
import { nav, site, socials } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/[0.06] bg-[#050506]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="text-lg font-semibold text-white">{site.name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-500">
            {site.tagline}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Magnetic strength={0.25} className="inline-flex">
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </Magnetic>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Social
          </p>
          <ul className="mt-4 space-y-2">
            {socials.map((s) => (
              <li key={s.href}>
                <Magnetic strength={0.25} className="inline-flex">
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {s.label}
                  </a>
                </Magnetic>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.04] py-6">
        <p className="text-center text-xs text-zinc-600">
          © {year} {site.name}. Crafted with Next.js — deployable on Vercel.
        </p>
      </div>
    </footer>
  );
}
