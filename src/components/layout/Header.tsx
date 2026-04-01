"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Magnetic } from "@/components/magnetic/Magnetic";
import { nav, site } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#060607]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Magnetic strength={0.28} className="inline-flex">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-white md:text-base"
          >
            <span className="bg-gradient-to-r from-cyan-200 to-violet-300 bg-clip-text text-transparent">
              {site.name}
            </span>
            <span className="text-white/40"> ·</span> Portfolio
          </Link>
        </Magnetic>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.slice(1).map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Magnetic key={item.href} strength={0.35} className="inline-flex">
                <Link
                  href={item.href}
                  className={`relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors ${
                    active
                      ? "text-white"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.08] ring-1 ring-white/[0.12]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  {item.label}
                </Link>
              </Magnetic>
            );
          })}
        </nav>

        <Magnetic className="lg:hidden" strength={0.4}>
          <button
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <motion.span
                animate={{
                  rotate: open ? 45 : 0,
                  y: open ? 6 : 0,
                  width: open ? 20 : 18,
                }}
                className="block h-0.5 rounded-full bg-white"
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1, x: open ? 10 : 0 }}
                className="block h-0.5 w-[18px] rounded-full bg-white"
              />
              <motion.span
                animate={{
                  rotate: open ? -45 : 0,
                  y: open ? -6 : 0,
                  width: open ? 20 : 14,
                }}
                className="block h-0.5 rounded-full bg-white"
              />
            </span>
          </button>
        </Magnetic>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/[0.06] bg-[#060607]/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex max-h-[70vh] flex-col gap-1 overflow-auto px-5 py-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-lg font-medium ${
                    pathname === item.href
                      ? "bg-white/10 text-white"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
