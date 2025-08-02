'use client'

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Project({project}) {
    if(!project) return (
        <div>
            <h2>Loading...</h2>
        </div>
    )

    const minioBaseUrl = "https://minio-api.server.kevinb.run/portfolio-projects/"

    return(
        <div className={" w-full h-full grid grid-cols-1 gap-20"}>
            <h2 className={"text-4xl text-center underline"}>{project.project.name}</h2>
            <div className={"grid grid-cols-2 items-center"}>
                {project.project.link ? (
                    <Link href={project.project.link} target={"_blank"} className={"hover:scale-105 transition-all"}>
                        <img src={minioBaseUrl + project.image[0].url} alt={"Logo"} width={250} height={250} className={"mx-auto"} loading={"lazy"}/>
                    </Link>
                ) :     <img src={minioBaseUrl + project.image[0].url} alt={"Logo"} width={250} height={250} className={"mx-auto"} loading={"lazy"}/>
                }


                <p className={"text-center mx-auto"}>{project.project.description}</p>
            </div>
            <div className={"grid grid-flow-col place-items-center-safe "}>
                {project.technos?.map((tech, index) => (
                    <div key={index}>
                        <Icon icon={tech.icon} className={"text-6xl mx-auto"} />
                        <span className={"block text-center"}>{tech.name}</span>
                    </div>
                ))}
            </div>
            <div className={"grid grid-flow-col items-center"}>
                {project.galleries?.map((gallery, index) => (
                    <img key={index} src={minioBaseUrl + gallery.url} alt={gallery.url} className={"mx-auto size-11/12 "} loading={"lazy"} />
                ))}
            </div>
        </div>
    )

}