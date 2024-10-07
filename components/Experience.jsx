import React from 'react'
import Link from 'next/link'
import { MoveUpRight } from 'lucide-react'

const Experience = () => {
    return (
        <div className="my-10 rounded-lg shadow-md">
            <div className="p-4 w-full flex justify-between">
                <p className="dark:text-zinc-400 text-normal font-semibold">March 2024 - July 2024</p>
                <div className="w-[70%] flex flex-col items-start gap-4">
                    <h1 className=" font-semibold"><a className="hover:underline" target="_blank" href="https://dhanaay.com/">Full Stack Developer Intern - Dhanaay </a></h1>
                    <p className=" word-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veritatis voluptates velit maxime vero? Quaerat cum facilis obcaecati facere dicta similique sed rem, a doloribus accusamus ipsa praesentium ex quae?</p>
                    {/* <p className="dark:text-zinc-300 font-semibold">Next • Node • AWS • Material UI</p> */}
                    <div className="flex gap-4 dark:text-[#d1d5db] text-gray-700 italic">
                        <span className="dark:border-[1px] bg-gray-50 dark:bg-transparent rounded-md px-1 dark:border-zinc-700">Nextjs</span>
                        <span className="dark:border-[1px] bg-gray-50 dark:bg-transparent rounded-md px-1 dark:border-zinc-700">Nodejs</span>
                        <span className="dark:border-[1px] bg-gray-50 dark:bg-transparent rounded-md px-1 dark:border-zinc-700">AWS</span>
                        <span className="dark:border-[1px] bg-gray-50 dark:bg-transparent rounded-md px-1 dark:border-zinc-700">Material UI</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experience