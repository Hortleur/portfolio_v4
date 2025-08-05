import Link from "next/link";

export default function BackButton() {
    return (
        <Link href="/" className="absolute hidden lg:block lg:top-8 lg:left-5 border-b-2 border-r-2 px-4 py-5 z-20">Retour</Link>
    )
}