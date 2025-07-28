import Link from "next/link";

export default function BackButton() {
    return (
        <Link href="/" className="absolute top-5 left-5 border-b-2 border-r-2 px-4 py-5 z-20">Back</Link>
    )
}