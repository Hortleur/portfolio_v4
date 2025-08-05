
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function MobileNav() {

    const pathName = usePathname()

    return (
        <nav className={"grid grid-cols-4 w-full border-y-2 place-items-center fixed text-center bottom-0 text-xl h-28 py-10 lg:hidden bg-white "}>
            <Link href="/projects" className={`border-r-2 w-full border-black titles ${ pathName === "/projects" ? "bg-black text-white" : "" }`}>Projets</Link>
            <Link href="/techs" className={`border-r-2 w-full h-full border-black titles ${ pathName === "/techs" ? "bg-black text-white" : "" }`}>Technos</Link>
            <Link href="/about" className={`border-r-2 w-full h-full border-black titles ${ pathName === "/about" ? "bg-black text-white" : "" }`}>À propos</Link>
            <Link href="/contact" className={`w-full h-full border-black titles ${ pathName === "/contact" ? "bg-black text-white" : "" }`}>Contact</Link>
        </nav>
    )
}