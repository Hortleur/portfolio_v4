import Link from "next/link";

export default function HomeLink({name, classes, target}) {
    return (
        <Link data-testid="home-link" href={target} className={`${classes} titles hidden uppercase lg:grid place-items-center text-6xl hover:underline w-full h-full border-black lg:hover:text-7xl xl:hover:text-8xl transition-all duration-300`}>
            {name}
        </Link>
    )
}