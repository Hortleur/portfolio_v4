'use client'

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import BackButton from "@/app/components/BackButton";

export default function TechsPage() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [border, setBorder] = useState("")
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    const [count, setCount] = useState(0);

    const getTechnos = () => {
        fetch(`${baseUrl}technos`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Erreur réseau : ${res.status}`);
                }
                return res.json();
            })
            .then((json) => {
                setData(json);
            })
            .catch((err) => {
                if (count < 3) {
                    setCount(count + 1)
                    getTechnos()
                } else {
                    setError(err);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        getTechnos()
    }, []);
    if (loading) return <main className={"h-screen w-screen grid place-items-center"}><p>Loading...</p></main> ;
    if (error) return <p>Erreur : {error.message}</p>;


    const defineRandomBorders = () => {
        let borders = ["hover:border-r-2 hover:border-b-2", "hover:border-t-2 hover:border-b-2", "hover:border-l-2 hover:border-b-2", "hover:border-l-2 hover:border-r-2", "hover:border-t-2 hover:border-r-2", "hover:border-t-2 hover:border-l-2"]
        let random = Math.floor(Math.random() * borders.length);
        setBorder(borders[random])
    }

    return (
        <main className=" pb-32 lg:h-screen lg:pb-0  w-screen overflow-x-hidden relative">
            <BackButton />
            <div className="border-b-4 border-black py-4 w-full mb-10">
                <h1 className="text-center text-8xl">Technos</h1>
            </div>
            <div className="grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-flow-row gap-5 lg:mb-10">
                {data && data.technos && data.technos.map((tech, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => defineRandomBorders()}
                        className={`h-full w-full flex flex-col justify-center items-center lg:grayscale hover:grayscale-0 hover:scale-110 transition-all ${border} hover:shadow-inner `}
                    >
                        <Icon icon={tech.icon} className="text-6xl" />
                        <p className="text-2xl">{tech.name}</p>
                    </div>
                ))}
            </div>

        </main>
    );
}
