import React from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link';


const projects = [
    {
        title: "Medicare",
        description: "Streamlining healthcare with smart data management and seamless patient-doctor interactions.",
        techStack: ["Full-stack", "React", "Tailwind", "Material UI", "Nodejs", "MongoDB", "Redis", "Docker"],
        liveLink: "https://medicare-project-seven.vercel.app/",
        codeLink: "https://github.com/vivekadapa/mEDICARE-v2",
        logo: "./medicare-logo.png",
    },
    {
        title: "Easetasks",
        description: "A full-stack Kanban app for effortless task management and team collaboration, designed to keep productivity flowing.",
        techStack: ["Full-stack", "React", "Typescript", "Shadcn", "Prisma", "MongoDB", "Nodejs"],
        liveLink: "https://easetasks.vercel.app/",
        codeLink: "https://github.com/vivekadapa/easetasks",
        logo: "./easetasks.svg",
    },
    {
        title: "Talkies",
        description: "A dynamic movie exploration platform that brings film discovery and reviews to life with an intuitive, engaging experience.",
        techStack: ["Full-stack", "React", "Tailwind", "Nodejs", "MongoDB", "Redis"],
        liveLink: "https://talkies-frontend.onrender.com/",
        codeLink: "https://github.com/vivekadapa/talkies",
        logo: "./talkies-logo.svg",
    },
    {
        title: "Electricity Billing System",
        description: "Java-powered terminal based application that simplifies electricity billing, providing efficient and accurate bill generation for users.",
        techStack: ["Java", "JDBC", "MySQL"],
        liveLink: "",
        codeLink: "https://github.com/vivekadapa/ElectricityBillingSystem",
        logo:""
    }
];


const Projects = () => {
    return (
        <div className="my-10 grid sm:grid-cols-2 gap-4 grid-cols-1">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    liveLink={project.liveLink}
                    codeLink={project.codeLink}
                    logo={project.logo}
                />
            ))}
        </div>
    )
}

export default Projects