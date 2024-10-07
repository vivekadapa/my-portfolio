"use client";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

function TypewriterEffectSmoothDemo() {

    return (
        <div className="flex flex-col max-[800px]:px-4 space-y-12 mt-48 max-w-[750px]">
            <div id="home" className="flex w-full  justify-between">
                <div className="flex flex-col space-y-4">
                    <h1 className="font-bold text-4xl">Vivek Chaitanya Adapa</h1>
                    <h3 className="px-4 py-2 rounded-md text-left dark:bg-[#3f3f46] bg-[#f3f4f6] w-fit font-semibold">Full Stack Developer</h3>
                    <p className="dark:text-[#71717a] font-medium">Final Year Computer Science Student at <a href="https://www.iiits.ac.in/" className="underline text-teal-300" target="_blank">IIITS</a>  with experience in building Full Stack Applications.</p>
                    <div
                        className="flex space-x-4">
                        <a href="mailto:vivekchaitanya1324@gmail.com" className="hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors-transform focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">Send email</a>
                        <a href="/resume.pdf" className="hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out text-center px-8 pt-[0.7rem] pb-2 inset-0 bg-gradient-to-r text-gray-200 from-indigo-500 to-purple-500 rounded-lg" target="_blank">View Resume</a>
                    </div>
                </div>
                <img src="./logo.jpg" className="w-24 h-24 rounded-md" alt="" />
            </div>
            <div className="">
                <h1 className="text-4xl font-bold">Internship</h1>
                <Experience />
            </div>
            <div id="projects" className="">
                <h1 className="text-4xl font-bold">Projects</h1>
                <Projects />
                <Link href="/projects" className="mx-auto flex items-center justify-center gap-2 text-center">See More <ChevronDown /></Link>
            </div>
            <div id="skills" className="">
                <h1 className="text-4xl font-bold">Skills</h1>
                <Skills />
            </div>
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
            <div className="pb-12">
                <ul className="flex w-full justify-center gap-8 font-semibold">
                    <li><a href="https://github.com/vivekadapa" className="text-gray-500 hover:text-gray-600 transition" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/vivek-chaitanya-622049247/" className="text-gray-500 hover:text-gray-600 transition" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                    <li><a href="https://leetcode.com/u/Vivek_Chaitanya/" className="text-gray-500 hover:text-gray-600 transition" target="_blank" rel="noopener noreferrer">Leetcode</a></li>
                    <li><a href="https://x.com/viv1chaitanya" className="text-gray-500 hover:text-gray-600 transition" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://www.freecodecamp.org/VivekChaitanya" className="text-gray-500 hover:text-gray-600 transition" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a></li>
                </ul>
            </div>
        </div>
    );
}


const Hero = () => {
    return (
        <>
            <TypewriterEffectSmoothDemo />
        </>

    )
}

export default Hero