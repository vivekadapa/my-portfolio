"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Button from "./Button";
import LitUpButton from "./LitUpButton";
import { FlipWords } from "./ui/flip-words";

function TypewriterEffectSmoothDemo() {

    // const words = ["Full Stack Web Developer", "CS Grad"]

    return (
        (<div className="flex text-center flex-col mx-auto space-y-6 items-center justify-center h-[40rem] w-[40rem] ">
            <div className="flex flex-col space-y-2 items-center">
                <p className="text-neutral-600 dark:text-teal-400 font-semibold mx-auto text-xl">
                    Hello, my name is
                </p>
                <h1 className="mt-4 mb-6 mx-auto text-3xl xl:text-5xl font-bold">
                    Vivek Chaitanya Adapa
                </h1>
                <p className="text-neutral-600 dark:text-teal-400 font-semibold mx-auto text-lg">Full Stack Developer</p>
            </div>
            <p className="max-[600px]:px-12 font-medium">Final-year Computer Science student and Full Stack Developer, eager to apply my skills in building dynamic, scalable web applications—open to exciting new opportunities!</p>
            <div
                className="flex max-[600px]:flex-col max-[600px]:space-y-4 flex-row md:space-y-0 space-x-0 sm:mx-auto sm:space-x-4">
                <a href="mailto:vivekchaitanya1324@gmail.com" className="hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors-transform focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">Send email</a>
                <a href="/vivek_resume.pdf" className="hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out text-center px-8 pt-[0.7rem] pb-2 inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" target="_blank">View Resume</a>
            </div>
        </div>)
    );
}


const Hero = () => {
    return (
        <>
            <div className="min-h-screen w-full dark:bg-[#020817] bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex flex-col items-center justify-center">
                <div className="min-h-screen absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <TypewriterEffectSmoothDemo />
            </div>
        </>

    )
}

export default Hero