"use client";

const roles = [
  {
    company: "Fresh Prints",
    title: "Full-Stack Engineer",
    period: "Jun 2025 – Present",
    location: "Remote",
    url: "https://www.freshprints.com/",
    highlights: [
      "Engineered job processing framework with TypeScript, BullMQ, and Redis—per-provider queue isolation, exponential backoff, sync/async modes; eliminated API rate limit violations.",
      "Built No Minimum Order (MOQ=1) feature for single-item purchases; CRON-based eligibility engine using real-time distributor inventory; projected $670K+ revenue from 66K+ leads.",
      "Built AI violation detection for licensing bottleneck (73% of orders, 31% meeting 48h SLA); automated trademark checks and CLC/Affinity submissions; 70%+ designs process without manual intervention.",
      "Consolidated 300K+ SKUs from dual systems into a single source of truth with real-time sync; non-technical teams can manage product lifecycle independently.",
    ],
    tags: ["TypeScript", "BullMQ", "Redis", "Node.js", "React", "Angular", "AWS"],
  },
  {
    company: "Fresh Prints",
    title: "Full-Stack Engineer Intern",
    period: "Jan 2025 – Jun 2025",
    location: "Remote",
    url: "https://www.freshprints.com/",
    highlights: [
      "Built How To Merch page with interns to educate users on custom merchandise; improved onboarding and engagement.",
      "Shipped 15+ features in 3-week sprints: dynamic pricing, approval workflows, Quoter and Proof systems.",
      "Integrated Mixpanel and Iterable for behavior tracking and marketing automation.",
      "Improved SEO, LCP/FCP, and accessibility; Lighthouse scores +32% via lazy loading, semantic HTML, optimized rendering.",
    ],
    tags: ["React", "Node.js", "Angular", "MySQL", "Mixpanel/Iterable"],
  },
  {
    company: "Dhanaay",
    title: "Full-Stack Developer Intern",
    period: "Mar 2024 – Jul 2024",
    location: "Remote",
    url: "https://dhanaay.com/",
    highlights: [
      "Designed and developed sales dashboard (Next.js, MUI, FastAPI) for customer portal; improved engagement and data visualization.",
      "Enhanced API performance by ~25% through database query optimization.",
      "Integrated Master GST API (Node.js); file handling with Multer and AWS S3; automated token refresh via cron jobs.",
    ],
    tags: ["Next.js", "MUI", "FastAPI", "Node.js", "AWS", "PostgreSQL"],
  },
];

const Experience = () => {
  return (
    <div className="relative space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
      {roles.map((role, index) => (
        <article
          key={`${role.company}-${role.period}`}
          className="relative ml-[2.25rem] rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/40 backdrop-blur-sm p-5 sm:p-6 shadow-sm"
        >
          <span className="absolute -left-[1.9rem] top-7 h-3 w-3 rounded-full bg-zinc-900 dark:bg-zinc-100 ring-4 ring-white dark:ring-zinc-950" />
          <div className="mb-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2">
              {role.period} · {role.location}
            </p>
            <h3 className="font-semibold text-lg leading-tight">
              <a
                href={role.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-2"
              >
                {role.title}
              </a>
            </h3>
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-1">
              {role.company}
            </p>
          </div>
          <ul className="list-disc list-outside pl-5 space-y-2 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed marker:text-zinc-400 dark:marker:text-zinc-500">
            {role.highlights.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-5">
            {role.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default Experience;
