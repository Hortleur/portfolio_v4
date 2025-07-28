'use client'

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TechsPage() {
    // États pour les données, chargement et erreur
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [border, setBorder] = useState("")

    useEffect(() => {
        // Cette fonction sera appelée UNE SEULE FOIS au montage
        fetch('http://hortools.server.kevinb.run/api/technos')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Erreur réseau : ${res.status}`);
                }
                return res.json();
            })
            .then((json) => {
                setData(json);         // Mise à jour des données → provoque un nouveau rendu
                console.log(json);
            })
            .catch((err) => {
                setError(err);         // Mise à jour de l’erreur si fetch échoue
            })
            .finally(() => {
                setLoading(false);     // On enlève le loading une fois que la requête est terminée
            });
    }, []); // <-- IMPORTANT : tableau de dépendances vide pour exécuter qu’une fois
    // Affichage dans le rendu
    if (loading) return <p>Chargement en cours...</p>;
    if (error) return <p>Erreur : {error.message}</p>;


    const defineRandomBorders = () => {
        let borders = ["hover:border-r-2 hover:border-b-2", "hover:border-t-2 hover:border-b-2", "hover:border-l-2 hover:border-b-2", "hover:border-l-2 hover:border-r-2"]
        let random = Math.floor(Math.random() * borders.length);
        setBorder(borders[random])
    }

    return (
        <main className="h-screen w-screen grid place-items-center grid-cols-5 grid-flow-row">
            <Link href="/" className="absolute top-5 left-5 border-b-2 border-r-2 px-4 py-5 z-20">Back</Link>
            {data && data.technos && data.technos.map((tech, index) => (
                <div
                    key={index}
                    onMouseEnter={() => defineRandomBorders()} // exemple
                    className={`h-full w-full flex flex-col justify-center items-center grayscale hover:grayscale-0 hover:scale-110 transition-all ${border} hover:shadow-inner`}
                >
                    <Icon icon={tech.icon} className="text-6xl" />
                    <p className="text-2xl">{tech.name}</p>
                </div>
            ))}
        </main>
    );
}
