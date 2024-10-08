"use client";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Contact from "./Contact";
import Footer from "./Footer";
import Image from "next/image";


const Hero = () => {
    return (
        <div className="flex flex-col mx-auto  max-[800px]:px-4 max-[760px]:px-8 space-y-12 mt-24 max-w-[750px]">
            <div id="home" className="flex max-[760px]:flex-col-reverse max-[760px]:gap-4  w-full  justify-between">
                <div className="flex flex-col space-y-4">
                    <h1 className="font-bold text-4xl">Vivek Chaitanya Adapa</h1>
                    <h3 className="px-4 py-2 rounded-md text-left dark:bg-[#3f3f46] bg-[#f3f4f6] w-fit font-semibold">Full Stack Developer</h3>
                    <p className="dark:text-[#71717a] font-medium">Final Year Computer Science Student at <a href="https://www.iiits.ac.in/" className="underline text-teal-300" target="_blank">IIITS</a>  with experience in building Full Stack Applications.</p>
                    <div
                        className="flex max-[347px]:flex-col max-[347px]:space-y-4 max-[347px]:space-x-0 space-x-4">
                        {/* <a href="mailto:vivekchaitanya1324@gmail.com" className="hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors-transform focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">Send email</a> */}
                        <a href="/resume.pdf" className="hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out text-center px-8 pt-[0.7rem] pb-2 inset-0 bg-gradient-to-r text-gray-200 from-indigo-500 to-purple-500 rounded-lg" target="_blank">View Resume</a>
                    </div>
                </div>
                <Image width={10} height={10} src="/logo.jpg" className="w-24 h-24 rounded-md" alt="logo" unoptimized />
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
            <div id="contact">
                <Contact />
            </div>
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
            <Footer />
        </div>
    );
}

export default Hero