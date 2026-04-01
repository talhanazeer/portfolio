import type { SkillCategory } from "@/lib/skills-data";

const topBar: Record<SkillCategory["variant"], string> = {
  cyan:
    "bg-gradient-to-r from-cyan-400/90 via-teal-300/70 to-transparent",
  violet:
    "bg-gradient-to-r from-violet-400/90 via-fuchsia-400/60 to-transparent",
  emerald:
    "bg-gradient-to-r from-emerald-400/90 via-cyan-400/50 to-transparent",
  amber:
    "bg-gradient-to-r from-amber-400/90 via-orange-400/60 to-transparent",
  rose:
    "bg-gradient-to-r from-rose-400/90 via-pink-400/50 to-transparent",
  sky:
    "bg-gradient-to-r from-sky-400/90 via-blue-400/60 to-transparent",
};

const glow: Record<SkillCategory["variant"], string> = {
  cyan: "group-hover:shadow-[0_0_64px_-24px_rgba(34,211,238,0.22)]",
  violet: "group-hover:shadow-[0_0_64px_-24px_rgba(167,139,250,0.22)]",
  emerald: "group-hover:shadow-[0_0_64px_-24px_rgba(52,211,153,0.2)]",
  amber: "group-hover:shadow-[0_0_64px_-24px_rgba(251,191,36,0.18)]",
  rose: "group-hover:shadow-[0_0_64px_-24px_rgba(251,113,133,0.2)]",
  sky: "group-hover:shadow-[0_0_64px_-24px_rgba(56,189,248,0.2)]",
};

export function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#08080c]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.14] md:p-7 ${glow[category.variant]}`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-[3px] rounded-t-2xl ${topBar[category.variant]}`}
        aria-hidden
      />
      <div className="pt-1">
        <h2 className="text-base font-semibold tracking-tight text-white md:text-lg">
          {category.title}
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-zinc-500 md:text-[13px]">
          {category.blurb}
        </p>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Skills: ${category.title}`}>
        {category.items.map((skill) => (
          <li key={skill}>
            <span className="inline-flex cursor-default items-center rounded-xl border border-white/[0.1] bg-white/[0.03] px-3 py-2 text-left text-[11px] font-medium leading-snug text-zinc-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/35 hover:bg-white/[0.06] hover:text-white md:px-3.5 md:py-2 md:text-xs">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
