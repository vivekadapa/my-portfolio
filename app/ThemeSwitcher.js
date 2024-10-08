"use client"
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
const ThemeSwitcher = () => {

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null;
    }

    const handleTheme = () => {
        console.log(theme)
        if (theme === "dark") {
            setTheme('light')
        }
        else {
            setTheme("dark")
        }
    }



    return (
        <div className="" onClick={handleTheme}>
            <button className={`bg-transparent transition px-3 py-1 border-[1px] rounded-full`}>
                {
                    theme === "light" ? (
                        <Image width={10} height={10} src='/dark-icon.svg' alt="dark-icon" className="w-6 h-6" />
                    ) : (
                        <Image width={10} height={10} src='/light-icon.svg' alt="light-icon" className="w-6 h-6 " />
                    )
                }
            </button>
        </div>
    )
}

export default ThemeSwitcher