'use client'

import BackButton from "@/app/components/BackButton";
import {useEffect, useState} from "react";
import ProjectButton from "@/app/components/ProjectButton";
import Project from "@/app/components/project";


export default function ProjectsPage() {

    const [data, setData] = useState(null);
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getProjects = () => {
        fetch('http://hortools.server.kevinb.run/api/projects')
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
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const setProjectId = (id) => {
        fetch(`http://hortools.server.kevinb.run/api/projects/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Erreur réseau : ${res.status}`);
                }
                return res.json();
            })
            .then((json) => {
                setProject(json);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }



    useEffect(() => {
        getProjects();

    }, []);

    if (loading) return <main className={"h-screen w-screen grid place-items-center"}><p>Loading...</p></main> ;
    if (error) return <p>Erreur : {error.message}</p>;

    if (!project){
        setProjectId(data.projects[0].id)
    }

    return (
        <main className="min-h-screen w-screen relative">
            <BackButton />
            <div className={"border-b-4 border-black py-4"}>
                <h1 className={"text-8xl text-center"}>Projects</h1>
            </div>
            <div className={"w-full flex flex-row flex-nowrap h-full overflow-y-scroll"}>
                <aside className={"w-1/4 border-r-2 border-black flex flex-col items-center justify-around gap-6"}>
                    {data && data.projects && data.projects.map((project, index) => (
                        <ProjectButton onClick={() => setProjectId(project.id)} key={index} name={project.name} classes={''}/>
                    ))}
                </aside>
                <div className="w-3/4 grid place-items-center">
                    <Project project={project}/>
                </div>
            </div>
        </main>
    )
}