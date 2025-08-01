'use client'

import Link from "next/link";

export default function MobileNav() {

    return (
        <nav className={"grid grid-cols-4 w-full border-y-2 place-items-center fixed text-center bottom-0 text-xl h-28 py-10 lg:hidden bg-white "}>
            <Link href="/projects" className={`border-r-2 w-full h-full border-black titles`}>Projets</Link>
            <Link href="/techs" className={`border-r-2 w-full h-full border-black titles`}>Technos</Link>
            <Link href="/about" className={`border-r-2 w-full h-full border-black titles`}>À propos</Link>
            <Link href="/contact" className={`w-full h-full border-black titles`}>Contact</Link>
        </nav>
    )
}