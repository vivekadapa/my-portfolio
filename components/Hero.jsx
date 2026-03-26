"use client";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="flex flex-col mx-auto max-[800px]:px-4 max-[760px]:px-8 space-y-16 mt-20 max-w-[720px]">
            <section id="home" className="flex max-[760px]:flex-col-reverse max-[760px]:gap-6 gap-4 w-full justify-between items-start">
                <div className="flex flex-col space-y-4">
                    <h1 className="font-bold text-3xl sm:text-4xl tracking-tight">Vivek Adapa</h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium">
                        Full-Stack Engineer at{" "}
                        <a href="https://www.freshprints.com/" className="underline underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-100" target="_blank" rel="noopener noreferrer">Fresh Prints</a>.
                        B.Tech in Computer Science from{" "}
                        <a href="https://www.iiits.ac.in/" className="underline underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-100" target="_blank" rel="noopener noreferrer">IIIT Sri City</a> (2025).
                    </p>
                    <p className="text-zinc-500 dark:text-zinc-500 text-sm">Warangal, Telangana · vivekchaitanya1324@gmail.com · +91 7680808622</p>
                    <div className="flex flex-wrap gap-3 pt-1">
                        <a href="/resume.pdf" className="inline-flex items-center rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity" target="_blank" rel="noopener noreferrer">Resume</a>
                        <a href="mailto:vivekchaitanya1324@gmail.com" className="inline-flex items-center rounded-lg border border-zinc-300 dark:border-zinc-600 px-5 py-2.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">Email</a>
                    </div>
                </div>
                <Image width={96} height={96} src="/logo.jpg" className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shrink-0" alt="Vivek Adapa" unoptimized />
            </section>
            <section id="experience" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-6">Experience</h2>
                <Experience />
            </section>
            <section id="projects" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-6">Projects</h2>
                <Projects />
            </section>
            <section id="skills" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-6">Skills</h2>
                <Skills />
            </section>
            <section id="contact" className="scroll-mt-24">
                <Contact />
            </section>
            <hr className="w-full border-zinc-200 dark:border-zinc-800 my-8" />
            <Footer />
        </div>
    );
}

export default Hero
