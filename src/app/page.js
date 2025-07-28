'use client'

import ArtDecoCorner from "@/app/components/ArtDecoCorner";
import Name from "@/app/components/Name";
import {useState} from "react";
import Link from "next/link";
import HomeLink from "@/app/components/HomeLink";
export default function Home() {
    let name = "kevin brun"
    let job = "web developer"


    let [color, setColor] = useState("")

    function getRandomColor() {
        // Génère un nombre aléatoire entre 0 et 0xFFFFFF (16777215)
        const randomInt = Math.floor(Math.random() * 0xFFFFFF);

        // Convertit ce nombre en hexadécimal et pad à 6 caractères avec des 0 si besoin
        const hexColor = randomInt.toString(16).padStart(6, '0');

        // Retourne la chaîne couleur au format "#RRGGBB"
        setColor(`#${hexColor}`);

        console.log(color)
    }

  return (

    <div className="lg:grid grid-cols-3 grid-rows-3 place-items-center relative min-h-screen hidden">
        <HomeLink
            name="Tech&Tools"
            classes="row-start-1 row-end-2 col-start-2 col-end-3 border-progress-bottom-right"
            target="/techs"
        />

        <HomeLink
            target="/projects"
            name="Projects"
            classes="row-start-2 row-end-3 col-start-3 col-end-4 border-progress-bottom-left"
        />

        <HomeLink
            target="/contact"
            name="Contact"
            classes="row-start-2 row-end-3 col-start-1 col-end-2 border-progress-top-right"
        />

        <HomeLink
            target="/about"
            name="About"
            classes="row-start-3 row-end-4 col-start-2 col-end-3 border-progress-top-left"
        />

        <Name name={name} title={job} />

    </div>

  );
}
