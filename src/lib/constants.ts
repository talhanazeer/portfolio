export const site = {
  name: "Talha Nazeer",
  title: "Full Stack Developer",
  tagline:
    "Experienced web developer passionate about crafting exceptional digital experiences — robust, secure, and high-performance apps across frontend and backend.",
  email: "talhanazeer91m@gmail.com",
  phone: "+923068004554",
  location: "Lahore, Pakistan",
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
  {
    href: "mailto:talhanazeer91m@gmail.com",
    label: "Email",
  },
] as const;
