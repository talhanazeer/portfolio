"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { WorkProjectCard } from "@/components/work/WorkProjectCard";

type WorkProjectListProps = {
  projects: readonly Project[];
};

export function WorkProjectList({ projects }: WorkProjectListProps) {
  const reduced = useReducedMotion();

  return (
    <motion.ul
      className="mt-14 space-y-10 md:space-y-14 lg:space-y-16"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduced ? 0 : 0.09,
            delayChildren: reduced ? 0 : 0.06,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-4% 0px" }}
    >
      {projects.map((p, i) => (
        <motion.li
          key={p.title}
          variants={{
            hidden: { opacity: 0, y: reduced ? 12 : 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: reduced ? 0.25 : 0.72,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          <WorkProjectCard project={p} index={i} total={projects.length} />
        </motion.li>
      ))}
    </motion.ul>
  );
}
