'use client'

import Name from "@/app/components/Name";
import HomeLink from "@/app/components/HomeLink";
export default function Home() {
    let name = "kevin brun"

  return (

    <div className="grid lg:grid-cols-3 lg:grid-rows-3 place-items-center relative min-h-dvh lg:h-screen overflow-hidden">
        <Name name={name} />
        <HomeLink
            name="Technos"
            classes=" lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3 border-progress-bottom-right"
            target="/techs"
        />

        <HomeLink
            target="/projects"
            name="Projects"
            classes="lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4 border-progress-bottom-left"
        />

        <HomeLink
            target="/contact"
            name="Contact"
            classes="lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2 border-progress-top-right"
        />

        <HomeLink
            target="/about"
            name="À Propos"
            classes="lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3 border-progress-top-left"
        />

    </div>

  );
}
