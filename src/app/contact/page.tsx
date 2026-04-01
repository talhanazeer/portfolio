"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { Magnetic } from "@/components/magnetic/Magnetic";
import { site } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/90">
          Contact
        </p>
      </Reveal>
      <Reveal delay={0.06} className="mt-4">
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Let&apos;s talk about your next build.
        </h1>
      </Reveal>
      <Reveal delay={0.1} className="mt-4 max-w-xl text-lg text-zinc-400">
        Reach out by email, phone, or the form below. Wire the form to your
        preferred backend when you are ready.
      </Reveal>

      <Reveal delay={0.14} className="mt-14 grid gap-10 lg:grid-cols-5">
        <motion.form
          className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-[0_0_60px_-20px_rgba(99,102,241,0.25)] backdrop-blur-md lg:col-span-3 lg:p-8"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="block text-sm font-medium text-zinc-300">
            Name
            <input
              name="name"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-0 transition-colors focus:border-cyan-500/50"
              placeholder="Ada Lovelace"
            />
          </label>
          <label className="mt-5 block text-sm font-medium text-zinc-300">
            Email
            <input
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-500/50"
              placeholder="you@company.com"
            />
          </label>
          <label className="mt-5 block text-sm font-medium text-zinc-300">
            Message
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-500/50"
              placeholder="Project scope, timeline, links…"
            />
          </label>
          <div className="mt-8">
            <Magnetic strength={0.45} className="inline-flex w-full sm:w-auto">
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-8 py-3.5 text-sm font-semibold text-white sm:w-auto"
              >
                Send message
              </button>
            </Magnetic>
          </div>
        </motion.form>

        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              Direct
            </p>
            <Magnetic strength={0.35} className="mt-3 inline-flex">
              <a
                href={`mailto:${site.email}`}
                className="text-lg font-medium text-white hover:text-cyan-200"
              >
                {site.email}
              </a>
            </Magnetic>
            <Magnetic strength={0.35} className="mt-4 inline-flex">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="text-base font-medium text-white hover:text-cyan-200"
              >
                {site.phone}
              </a>
            </Magnetic>
            <p className="mt-2 text-sm text-zinc-500">{site.location}</p>
          </div>
          <div className="rounded-2xl border border-violet-500/20 bg-violet-950/20 p-6">
            <p className="text-sm font-medium text-violet-200">
              Vercel tip
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Add an API route or Server Action for submissions, store secrets in
              Project Settings → Environment Variables, never commit API keys.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
