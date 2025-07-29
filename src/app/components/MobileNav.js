'use client'

import Link from "next/link";

export default function MobileNav() {

    return (
        <nav className={"grid grid-cols-4 w-full border-y-2 place-items-center fixed text-center bottom-0 text-xl h-28 py-10 lg:hidden bg-white "}>
            <Link href="/projects" className={`border-r-2 w-full h-full border-black`}>Projects</Link>
            <Link href="/techs" className={`border-r-2 w-full h-full border-black`}>Techs</Link>
            <Link href="/about" className={`border-r-2 w-full h-full border-black`}>About</Link>
            <Link href="/contact" className={`w-full h-full border-black`}>Contact</Link>
        </nav>
    )
}