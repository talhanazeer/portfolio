/**
 * Development-focused capabilities in a logical flow:
 * foundations → UI frameworks → design handoff → backend → data → quality → ship → motion → collaboration.
 * (Omits non-dev profile noise: jewelry appraisal, CAD drawing, etc.)
 */
export type SkillCategoryVariant =
  | "cyan"
  | "violet"
  | "emerald"
  | "amber"
  | "rose"
  | "sky";

export type SkillCategory = {
  title: string;
  blurb: string;
  variant: SkillCategoryVariant;
  items: readonly string[];
};

export const skillCategories: readonly SkillCategory[] = [
  {
    title: "Languages & web core",
    blurb: "Markup, styling, and scripting you ship to browsers every day.",
    variant: "cyan",
    items: [
      "HTML5",
      "HTML",
      "CSS",
      "Cascading Style Sheets (CSS)",
      "JavaScript",
      "PHP",
      "SQL",
      "JSON",
      "AJAX",
      "C (programming language)",
    ],
  },
  {
    title: "Frameworks & UI kits",
    blurb: "Product-grade stacks and component ecosystems.",
    variant: "violet",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Laravel",
      "WordPress",
      "jQuery",
      "jQuery UI",
      "Bootstrap 4",
      "Bootstrap 5",
      "HTML scripting",
    ],
  },
  {
    title: "Frontend craft",
    blurb: "Layout systems, responsiveness, and polished interfaces.",
    variant: "sky",
    items: [
      "Front-end development",
      "Frontend engineering",
      "Responsive web design",
      "CSS Grid Layout",
      "CSS Flexbox",
      "Cross-browser compatibility",
      "W3C standards",
      "W3C validation",
      "Validation",
      "UIX",
    ],
  },
  {
    title: "Design → code",
    blurb: "From Figma, XD, and PSDs to production HTML.",
    variant: "rose",
    items: [
      "Figma to HTML",
      "PSD to HTML",
      "Adobe XD",
      "Adobe Photoshop",
      "PSD workflows",
      "Mockups",
      "Creative design",
      "Design",
      "Design review",
      "User experience (UX)",
    ],
  },
  {
    title: "Backend & architecture",
    blurb: "Server logic, patterns, and full-stack ownership.",
    variant: "emerald",
    items: [
      "Full-stack development",
      "Back-end web development",
      "Server-side",
      "Server-side programming",
      "Model-View-Controller (MVC)",
      "Software design",
      "CMS",
      "Content management systems",
      "Webflow",
      "Custom web development",
      "Custom software development",
    ],
  },
  {
    title: "Data & databases",
    blurb: "Modeling, tuning, and day-to-day database care.",
    variant: "cyan",
    items: [
      "Relational databases",
      "Databases",
      "Database administration",
      "MySQL",
      "Query writing",
      "Query tuning",
      "PhpMyAdmin",
    ],
  },
  {
    title: "Performance & SEO",
    blurb: "Speed, standards, and discoverability.",
    variant: "amber",
    items: [
      "Optimization",
      "Optimization techniques",
      "System performance",
      "Search engine optimization (SEO)",
    ],
  },
  {
    title: "Quality, testing & reliability",
    blurb: "Catch issues early and keep releases trustworthy.",
    variant: "violet",
    items: [
      "Debugging",
      "Quality assurance",
      "User acceptance testing",
      "Test automation",
      "Root cause analysis",
      "Attention to detail",
      "Auditing",
      "Routine maintenance",
    ],
  },
  {
    title: "DevOps & delivery",
    blurb: "Automate, deploy, and document.",
    variant: "sky",
    items: [
      "Continuous integration (CI)",
      "Application deployment",
      "Software deployment",
      "DevOps",
      "npm",
      "Development tools",
      "Infrastructure",
      "Technical documentation",
      "WAMP",
      "CKFinder integration",
    ],
  },
  {
    title: "Animation & motion",
    blurb: "Motion that supports clarity — not distraction.",
    variant: "rose",
    items: [
      "CSS animations & transitions",
      "Micro-interactions",
      "GSAP & scroll-driven UI",
      "Framer Motion",
      "Interactive UI polish",
    ],
  },
  {
    title: "Product & engineering",
    blurb: "How work gets scoped, built, and improved.",
    variant: "emerald",
    items: [
      "Software development",
      "Web development",
      "Web projects",
      "Technical requirements",
      "Project planning",
      "Product vision",
      "Programming",
      "Functional programming",
      "Problem solving",
      "Creative problem solving",
      "Distributed systems",
      "Functionality",
      "Technical services",
    ],
  },
  {
    title: "Collaboration & leadership",
    blurb: "Teams, stakeholders, and clear communication.",
    variant: "amber",
    items: [
      "Communication",
      "Communication & collaboration",
      "Team management",
      "Constructive feedback",
      "Professional responsibility",
      "Computing",
      "Computer science",
      "English",
      "Strategy",
      "Digital marketing",
      "Growth strategies",
    ],
  },
] as const;

/** Top strip — strongest signal for recruiters and clients */
export const primaryStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Laravel",
  "PHP",
  "JavaScript",
  "MySQL",
  "WordPress",
  "HTML / CSS",
] as const;

/** Marquee — unique, ordered for visual rhythm (deduped from categories + stack) */
export const marqueeSkills: readonly string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Laravel",
  "PHP",
  "JavaScript",
  "HTML5",
  "CSS",
  "MySQL",
  "WordPress",
  "Bootstrap",
  "jQuery",
  "REST APIs",
  "JSON",
  "AJAX",
  "SQL",
  "MVC",
  "SEO",
  "CI/CD",
  "DevOps",
  "Test automation",
  "GSAP",
  "Framer Motion",
  "Responsive UI",
  "Figma → HTML",
  "PSD → HTML",
  "W3C",
  "Query tuning",
  "Full-stack",
  "CMS",
  "Webflow",
  "npm",
  "Debugging",
  "UX",
  "Performance",
  "Custom apps",
  "WAMP",
  "CKFinder",
];
