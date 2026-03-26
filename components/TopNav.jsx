import React from 'react'
import ThemeSwitcher from '@/app/ThemeSwitcher'
import Link from 'next/link'

const TopNav = () => {
    return (
        <nav className="top-nav min-w-[320px] max-w-4xl w-full mx-auto px-4 py-4 md:py-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md flex items-center justify-between sticky z-50 top-0 border-b border-zinc-200/50 dark:border-zinc-800/50">
            <ThemeSwitcher />
            <ul className="px-6 max-[520px]:hidden font-medium flex gap-6 py-2 rounded-full items-center border border-zinc-300 dark:border-zinc-600 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
                <li><Link href="/#home" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">Home</Link></li>
                <li><Link href="/#experience" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">Experience</Link></li>
                <li><Link href="/#projects" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">Projects</Link></li>
                <li><Link href="/#skills" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">Skills</Link></li>
                <li><Link href="/#contact" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">Contact</Link></li>
            </ul>
            <Link href="/#home" className="px-4 max-[520px]:block font-medium hidden hover:opacity-80">Home</Link>
        </nav>
    )
}

export default TopNav