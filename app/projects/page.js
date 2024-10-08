import React from 'react'
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';


const projects = [
    {
        title: "Medicare",
        description: "Streamlining healthcare with smart data management and seamless patient-doctor interactions.",
        techStack: ["Full-stack", "React", "Tailwind", "Material UI", "Nodejs", "MongoDB", "Redis", "Docker"],
        liveLink: "https://medicare-project-seven.vercel.app/",
        codeLink: "https://github.com/vivekadapa/mEDICARE-v2",
        logo: "/medicare-logo.svg",
    },
    {
        title: "Easetasks",
        description: "A full-stack Kanban app for effortless task management and team collaboration, designed to keep productivity flowing.",
        techStack: ["Full-stack", "React", "Typescript", "Shadcn", "Prisma", "MongoDB", "Nodejs"],
        liveLink: "https://easetasks.vercel.app/",
        codeLink: "https://github.com/vivekadapa/easetasks",
        logo: "/easetasks.svg",
    },
    {
        title: "Talkies",
        description: "A dynamic movie exploration platform that brings film discovery and reviews to life with an intuitive, engaging experience.",
        techStack: ["Full-stack", "React", "Tailwind", "Nodejs", "MongoDB", "Redis"],
        liveLink: "https://talkies-frontend.onrender.com/",
        codeLink: "https://github.com/vivekadapa/talkies",
        logo: "/talkies-logo.svg",
    },
    {
        title: "Electricity Billing System",
        description: "Java-powered terminal based application that simplifies electricity billing, providing efficient and accurate bill generation for users.",
        techStack: ["Java", "JDBC", "MySQL"],
        liveLink: "",
        codeLink: "https://github.com/vivekadapa/ElectricityBillingSystem",
        logo: ""
    },
    {
        title: "Product Peek",
        description: "A decentralized product rating system that ensures transparency and security using Solidity smart contracts and IPFS for distributed review storage.",
        techStack: ["React", "Solidity", "Hardhat", "IPFS"],
        liveLink: "https://productpeek.vercel.app/",
        codeLink: "https://github.com/vivekadapa/Product-Peek",
        logo: "/product-peek.svg"
    }
];

const certifications = [
    {
        title: "Responsive Web Design",
        description: "These challenges are part of FreeCodeCamp's Responsive design Certification . I received this certificate on July 18, 2023 with approximately 300 hrs of course work",
        techStack: ["HTML", "CSS"],
        liveLink: "https://www.freecodecamp.org/certification/VivekChaitanya/responsive-web-design",
        codeLink: "https://github.com/vivekadapa/fcc-responsive-designCertif",
        logo: "./freecodecamp.svg"
    }
]




const page = () => {
    return (
        <div className="mx-auto max-[800px]:px-4 max-[760px]:px-8 space-y-12 max-w-[750px]">
            <div>
                <h1 className="text-4xl font-bold">Projects</h1>
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
            </div>
            <div>
                <h1 className="text-4xl font-bold">Certifications</h1>
                <div className="my-10 grid sm:grid-cols-2 gap-4 grid-cols-1">
                    {certifications.map((project, index) => (
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
            </div>
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
            <Footer />
        </div>
    )
}

export default page