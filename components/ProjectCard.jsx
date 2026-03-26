import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Tech from "./Tech";

const ProjectCard = ({ title, description, techStack, liveLink, codeLink, logo }) => {
  return (
    <article className="flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 p-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
      <div className="flex items-start gap-3 mb-3">
        {logo ? (
          <Image src={logo} width={40} height={40} className="w-10 h-10 shrink-0 object-contain" alt="" />
        ) : (
          <div className="w-10 h-10 rounded-lg bg-zinc-200 dark:bg-zinc-700 shrink-0" />
        )}
        <h3 className="text-lg font-semibold pt-1">{title}</h3>
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-4">{description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {techStack.map((tech, index) => (
          <Tech key={index} title={tech} />
        ))}
      </div>
      <div className="mt-auto flex gap-2">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <ExternalLink className="w-4 h-4" /> Live
          </a>
        )}
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          <Github className="w-4 h-4" /> Code
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
