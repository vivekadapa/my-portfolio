"use client"
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { useEffect } from "react";


const Providers = ({ children }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <>{}</>
    }

    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default Providers;
