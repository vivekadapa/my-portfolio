import { Github, Eye } from 'lucide-react'
import { SquareTerminal } from 'lucide-react';
import Tech from './Tech';

const ProjectCard = ({ title, description, techStack, liveLink, codeLink, logo }) => {
    return (
        <div className="shadow-md relative h-[20rem] group overflow-hidden p-4 dark:border-[1px] border-slate-700 rounded-xl cursor-pointer">
            <div className="absolute inset-x-4 flex flex-col space-y-4 transition-transform duration-300 ease-in-out">
                {
                    logo === "" ? (
                        <SquareTerminal className="w-10 h-10" />
                    ) : (
                        <img src={logo} className={`${title === "Medicare" ? "w-20" : "w-10"}`} alt={`${title} logo`} />
                    )
                }
                <h1 className="text-2xl font-bold">{title}</h1>
                <p>{description}</p>
                <div className="flex gap-2 flex-wrap dark:text-[#d1d5db] text-gray-700 italic">
                    {techStack.map((tech, index) => (
                        // <span key={index} className="dark:border-[1px] bg-gray-50 dark:bg-transparent rounded-md px-1 dark:border-zinc-700">
                        //     {tech}
                        // </span>
                        <Tech title={tech} />
                    ))}
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center space-x-4 transition-all dark:text-[#d1d5db] text-gray-700 duration-200 ease-in bg-[#ffffff] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 top-[120%] group-hover:top-0">
                <a href={liveLink} target="_blank" className={`p-2 ${liveLink === "" ? "hidden" : "block"} rounded-lg flex space-x-4 gap-2 dark:border-[1px] border-zinc-400 bg-zinc-50 dark:bg-transparent`}>
                    <Eye /> Live Link
                </a>
                <a href={codeLink} target="_blank" className="p-2 rounded-lg flex space-x-4 gap-2 dark:border-[1px] border-zinc-400 bg-zinc-50 dark:bg-transparent">
                    <Github /> Code
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
