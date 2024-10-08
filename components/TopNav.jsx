import React from 'react'
import ThemeSwitcher from '@/app/ThemeSwitcher'
import Link from 'next/link'

const TopNav = () => {
    return (
        <nav className="top-nav min-w-[350px] h-20 max-w-4xl w-full p-8 mt-0 mb-0 md:mt-4 md:mb-10 mx-auto  bg-white dark:bg-zinc-900 bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-xl flex items-center justify-between sticky z-50 top-0 py-16 px-4">
            <ThemeSwitcher />
            <ul className="px-8 max-[486px]:hidden font-semibold flex space-x-8 py-2 border-[0.5px] rounded-full items-center justify-center border-gray-700 ">
                <li><Link href="/#home">Home</Link></li>
                {/* <li>Experience</li> */}
                <li><Link href="/#skills">Skills</Link></li>
                <li><Link href="/#projects">Projects</Link></li>
                <li><Link href="/#contact">Contact</Link></li>
            </ul>
            <Link href="/#home" className="px-4 max-[486px]:block font-semibold hidden">Home</Link>
        </nav>
    )
}

export default TopNav