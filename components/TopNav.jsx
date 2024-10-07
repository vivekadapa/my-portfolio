import React from 'react'
import ThemeSwitcher from '@/app/ThemeSwitcher'

const TopNav = () => {
    return (
        <nav className="h-20 dark:bg-[#18181b] bg-[#ffffff] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 flex items-center justify-between fixed z-50 top-0 py-16 px-4 max-[900px]:w-[800px] max-[750px]:w-[700px] w-[900px]">
            <ThemeSwitcher />
            <ul className="px-8 font-semibold flex space-x-8 py-2 border-[0.5px] rounded-full items-center justify-center border-gray-700 ">
                <li><a href="#home">Home</a></li>
                {/* <li>Experience</li> */}
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default TopNav