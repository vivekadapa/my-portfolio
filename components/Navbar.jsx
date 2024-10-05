"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export default function FloatingDockDemo() {
    const links = [
        {
            title: "About",
            icon: (
                <Image src={"/logo.jpg"} className="rounded-full" width={60} height={60} />
            ),
            href: "#"
        },
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Projects",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Components",
            icon: (
                <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        // {
        //     title: "Aceternity UI",
        //     icon: (
        //         <Image
        //             src="https://assets.aceternity.com/logo-dark.png"
        //             width={20}
        //             height={20}
        //             alt="Aceternity Logo" />
        //     ),
        //     href: "#",
        // },
        // {
        //     title: "Changelog",
        //     icon: (
        //         <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        //     ),
        //     href: "#",
        // },
        {
            title: "Linkedin",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/vivek-chaitanya-622049247/"
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/vivekadapa",
        },
    ];
    return (
        <div className="fixed z-50 bottom-10 left-10 sm:inset-x-0">
            <FloatingDock
                // only for demo, remove for production
                // className="-translate-y-0.5"
                desktopClassName={"hidden sm:flex"}
                mobileClassName="block sm:hidden"
                items={links} />
        </div>


    );
}


