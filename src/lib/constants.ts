export const site = {
  name: "Alex Dev",
  title: "Creative Developer",
  tagline: "Building interfaces that feel magnetic — precise motion, calm clarity.",
  email: "hello@example.com",
  location: "Remote · Earth",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const socials = [
  { href: "https://github.com", label: "GitHub" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://twitter.com", label: "Twitter" },
] as const;
