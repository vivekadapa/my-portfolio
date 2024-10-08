import { Github, Eye } from 'lucide-react'
import { SquareTerminal } from 'lucide-react';
import Tech from './Tech';
import Image from 'next/image';

const ProjectCard = ({ title, description, techStack, liveLink, codeLink, logo }) => {
    return (
        <div className="shadow-md flex flex-col gap-6 relative min-h-[20rem] max-[347px]:min-h-[22rem] group overflow-hidden p-4 dark:border-[1px] border-slate-700 rounded-xl cursor-pointer">
            <div className="absolute inset-x-4 flex flex-col space-y-4 transition-transform duration-300 ease-in-out">
                {
                    logo === "" ? (
                        <SquareTerminal className="w-10 h-10" />
                    ) : (
                        <Image src={logo} width={20} height={20} className={`${title === "Medicare" ? "w-20" : title === "Responsive Web Design" ? "w-1/2 mt-4 p-2 bg-black dark:bg-transparent" : "w-10"}`} alt={`${title} logo`} />
                    )
                }
                <h1 className="text-2xl font-bold">{title}</h1>
                <p>{description}</p>
                <div className="flex gap-2 flex-wrap dark:text-[#d1d5db] text-gray-700 italic">
                    {techStack.map((tech, index) => (
                        <Tech key={index} title={tech} />
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
