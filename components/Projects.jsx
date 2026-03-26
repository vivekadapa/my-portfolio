"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "MEDICARE",
    description:
      "Healthcare platform for seamless communication between users and providers. Responsive React/Redux frontend, Node/Express/MongoDB backend; JWT auth, indexing and caching for fast retrieval. Led backend and collaborated with four developers.",
    techStack: ["React", "Redux", "Node.js", "MongoDB", "Redis", "Tailwind", "Material UI"],
    liveLink: "https://medicare-project-seven.vercel.app/",
    codeLink: "https://github.com/vivekadapa/mEDICARE-v2",
    logo: "/medicare-logo.svg",
  },
  {
    title: "Ease Tasks",
    description:
      "Full-stack Kanban board: create and manage boards, tasks, and subtasks with drag-and-drop. Dynamic UI with Shadcn; secure auth and access control with Passport.js.",
    techStack: ["TypeScript", "React", "Node.js", "MongoDB", "Prisma", "Shadcn"],
    liveLink: "https://easetasks.vercel.app/",
    codeLink: "https://github.com/vivekadapa/easetasks",
    logo: "/easetasks.svg",
  },
  {
    title: "Talkies",
    description:
      "Movie exploration platform with discovery and reviews—responsive frontend and backend with caching.",
    techStack: ["React", "Tailwind", "Node.js", "MongoDB", "Redis"],
    liveLink: "https://talkies-frontend.onrender.com/",
    codeLink: "https://github.com/vivekadapa/talkies",
    logo: "/talkies-logo.svg",
  },
  {
    title: "Electricity Billing System",
    description:
      "Java-powered terminal application for efficient and accurate electricity bill generation.",
    techStack: ["Java", "JDBC", "MySQL"],
    liveLink: "",
    codeLink: "https://github.com/vivekadapa/ElectricityBillingSystem",
    logo: "",
  },
  {
    title: "Product Peek",
    description:
      "Decentralized product rating system using Solidity smart contracts and IPFS for distributed review storage.",
    techStack: ["React", "Solidity", "Hardhat", "IPFS"],
    liveLink: "https://productpeek.vercel.app/",
    codeLink: "https://github.com/vivekadapa/Product-Peek",
    logo: "/product-peek.svg",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 3;
  const visibleProjects = useMemo(
    () => (showAll ? projects : projects.slice(0, initialCount)),
    [showAll]
  );
  const hasMoreProjects = projects.length > initialCount;

  return (
    <div className="space-y-6">
      <motion.div layout className="grid gap-4 sm:grid-cols-2">
        <AnimatePresence initial={false}>
          {visibleProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                liveLink={project.liveLink}
                codeLink={project.codeLink}
                logo={project.logo}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {hasMoreProjects && (
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="inline-flex items-center rounded-lg border border-zinc-300 dark:border-zinc-600 px-4 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          {showAll ? "Show less" : `Show more (${projects.length - initialCount})`}
        </button>
      )}

      <div className="pt-2">
        <h3 className="text-xl font-semibold mb-4">Achievements</h3>
      </div>
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 p-5">
        <h3 className="text-lg font-semibold">Fresh Prints Gen AI Hackathon 2026 - Second Place</h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Won second place by building a Fresh Prints application for the ChatGPT app store.
        </p>
        <a
          href="https://www.linkedin.com/posts/fresh-prints_freshprints-hackathon-bangalore-ugcPost-7429759495095910400-nV4c?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0NdDoB-ziof3MmPV6Jv2YkkZeT_PuQgJw"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900 p-4 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
        >
          <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            LinkedIn • Fresh Prints
          </p>
          <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
            Hackathon Week in Bangalore was peak Fresh Prints energy with teams building practical
            customer-impacting prototypes in four days, followed by live demos and feedback.
          </p>
          <p className="mt-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Open LinkedIn post →
          </p>
        </a>
      </div>
    </div>
  );
};

export default Projects;
