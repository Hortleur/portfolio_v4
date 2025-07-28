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
        {/*<ArtDecoCorner  classes="top-0 left-0 absolute rotate-180" width="240" height="240"/>
        <ArtDecoCorner  classes="top-0 right-0 absolute rotate-270" width="240" height="240"/>
        <ArtDecoCorner  classes="bottom-0 left-0 absolute rotate-90" width="240" height="240"/>
        <ArtDecoCorner  classes="bottom-0 right-0 absolute" width="240" height="240"/>
        <div className={`w-full h-full hover:bg-[url('/images/clouds.svg')] bg-cover row-start-1 row-end-2 col-start-1 col-end-2`}></div>
        <div className="w-full h-full hover:bg-[url('/images/clouds.svg')] bg-cover row-start-1 row-end-2 col-start-3 col-end-4"></div>
        <div className="w-full h-full hover:bg-[url('/images/clouds.svg')] bg-cover row-start-3 row-end-4 col-start-1 col-end-2"></div>
        <div className="w-full h-full hover:bg-[url('/images/clouds.svg')] bg-cover row-start-3 row-end-4 col-start-3 col-end-4"></div>*/}

        <HomeLink name="Tech&Tools" classes="row-start-1 row-end-2 col-start-2 col-end-3 hover:border-r-2 hover:border-b-2" target="/techs" />
        <HomeLink target="/projects" name="Projects" classes="row-start-2 row-end-3 col-start-3 col-end-4 hover:border-l-2 hover:border-b-2"/>
        <HomeLink target="/contact" name="Contact" classes="row-start-2 row-end-3 col-start-1 col-end-2 hover:border-r-2 hover:border-t-2"/>
        <HomeLink target="/about" name="About" classes=" row-start-3 row-end-4 col-start-2 col-end-3   hover:border-l-2 hover:border-t-2 "/>

        <Name name={name} title={job} />

    </div>

  );
}
