import Link from "next/link";

export default function HomeLink({name, classes, target}) {
    return (
        <Link data-testid="home-link" href={target} className={`${classes} uppercase grid place-items-center text-6xl hover:underline w-full h-full border-black hover:text-8xl transition-all`}>
            {name}
        </Link>
    )
}