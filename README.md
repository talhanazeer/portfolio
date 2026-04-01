# Portfolio — Next.js on Vercel

A production-oriented portfolio with **magnetic hover interactions** (Framer Motion), **buttery scroll** ([Lenis](https://github.com/darkroomengineering/lenis)), **scroll-scrubbed motion** ([GSAP](https://greensock.com/gsap/) + ScrollTrigger), and a **custom cursor** on desktop — with `prefers-reduced-motion` respected throughout.

## Pages (routes)

| Route | Description |
|-------|--------------|
| `/` | Home — hero, gradient orbs, magnetic CTAs |
| `/about` | Bio and positioning |
| `/work` | Project cards with magnetic framing |
| `/experience` | Timeline |
| `/skills` | Stack grid + GSAP marquee section |
| `/insights` | Article index |
| `/insights/[slug]` | Three sample articles (static params) |
| `/contact` | Contact layout + client form (wire your backend) |

## Tech stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **framer-motion** — springs, layout nav pill, reveals, magnetic wrappers
- **lenis** — smooth scroll (`SmoothScroll` provider)
- **gsap** + **ScrollTrigger** — horizontal scrub row on `/skills`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve production build locally
npm run lint    # ESLint
```

## Environment variables (Vercel)

1. Copy `.env.example` to `.env.local` for local dev.
2. Set **`NEXT_PUBLIC_SITE_URL`** to your **canonical URL** (no trailing slash):

   - Preview deployments: you can use the auto Vercel URL, e.g. `https://project-git-branch-user.vercel.app`.
   - Production: use your production domain, e.g. `https://portfolio.example.com`.

This value feeds `metadataBase` in `src/app/layout.tsx` so **Open Graph** and **Twitter** metadata resolve absolute URLs correctly.

**Vercel UI:** Project → **Settings** → **Environment Variables** → add `NEXT_PUBLIC_SITE_URL` for **Production** (and optionally **Preview** / **Development**).

Never commit secrets. Client-visible env vars must be prefixed with `NEXT_PUBLIC_`.

## Deploying to Vercel

### First deploy (Git integration)

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. In [Vercel](https://vercel.com), **Add New Project** → import the repo.
3. **Framework Preset:** Next.js (auto-detected).
4. **Build Command:** `npm run build` (default).
5. **Output:** Next.js default (no static export required).
6. Add **`NEXT_PUBLIC_SITE_URL`** as above.
7. Deploy.

### Monorepo or custom root

If the app lives in a subfolder, set **Root Directory** in Vercel to that folder.

### After deploy

- Visit the Vercel URL and confirm all routes under **Route (app)** from `next build` load.
- Update **`site`**, **`nav`**, and **`socials`** in `src/lib/constants.ts` with your real name, links, and email.

## Custom domain

Vercel → Project → **Settings** → **Domains** → add your domain and follow DNS instructions. Then set **`NEXT_PUBLIC_SITE_URL`** to the same canonical HTTPS URL.

## Contact form (production)

The contact page is a **client form** with `preventDefault` only. To go live:

- Add a **Route Handler** (`src/app/api/contact/route.ts`) or a **Server Action** that calls [Resend](https://resend.com), [React Email](https://react.email), or another provider; **store API keys** in Vercel **Environment Variables** (no `NEXT_PUBLIC_` for secrets).

## Animation notes

- **Magnetic elements:** `src/components/magnetic/Magnetic.tsx` — tweak `strength` and spring props.
- **Smooth scroll:** disabled when `prefers-reduced-motion: reduce` (`SmoothScroll.tsx`).
- **Custom cursor:** hidden on small screens and when reduced motion is on (`MagneticCursor.tsx`).
- **GSAP:** only instantiated in client components; `SkillsGsapRow` uses `useLayoutEffect` and `gsap.context` for safe cleanup on navigation.

## Project structure (high level)

```
src/
  app/           # App Router pages + layouts
  components/
    animations/  # Reveal, etc.
    magnetic/    # Magnetic wrapper
    providers/   # Lenis + cursor
    layout/      # Header, Footer
    home/        # Hero visuals
    skills/      # GSAP section
  hooks/
  lib/           # constants (site copy, nav)
```

## License

Private / your choice — update this section when you publish.
