'use client';

import { useEffect, useRef, useState } from 'react';
import BackButton from '@/app/components/BackButton';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function ProjectsPage() {
    const [data, setData] = useState(null);
    const [project, setProject] = useState(null);
    const [loadingProjects, setLoadingProjects] = useState(true);
    const [loadingProject, setLoadingProject] = useState(false);
    const [error, setError] = useState(null);
    const [count , setCount] = useState(0);
    const dialogRef = useRef(null);

    const minioBaseUrl = 'https://minio-api.server.kevinb.run/portfolio-projects/';
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    const getProjects = () => {
        setLoadingProjects(true);
        fetch(`${baseUrl}projects`)
            .then(res => {
                if (!res.ok) throw new Error(`Erreur réseau : ${res.status}`);
                return res.json();
            })
            .then(json => {
                setData(json);
            })
            .catch((err) =>
            {
                if (count < 3) {
                    setCount(count + 1);
                    getProjects()
                } else {
                    setError(err);
                }
            })
            .finally(() => setLoadingProjects(false));
    };

    const openProjectModal = (id) => {
        setLoadingProject(true);
        fetch(`${baseUrl}projects/${id}`)
            .then(res => {
                if (!res.ok) throw new Error(`Erreur réseau : ${res.status}`);
                return res.json();
            })
            .then(json => {
                setProject(json);
                if (dialogRef.current && typeof dialogRef.current.showModal === 'function') {
                    dialogRef.current.showModal();
                }
            })
            .catch(err => setError(err))
            .finally(() => setLoadingProject(false));
    };

    const closeModal = () => {
        if (dialogRef.current && typeof dialogRef.current.close === 'function') {
            dialogRef.current.close();
        }
        setProject(null);
    };

    useEffect(() => {
        getProjects();
    }, []);

    if (loadingProjects)
        return (
            <main className="h-screen w-screen grid place-items-center">
                <p>Loading...</p>
            </main>
        );
    if (error) return <p>Erreur : {error.message}</p>;

    const isModalOpen = project !== null || loadingProject;

    return (
        <main className="min-h-screen w-screen relative ">
            <BackButton />
            <h1 className="text-8xl text-center border-b-4 border-black py-4">Projects</h1>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center h-full overflow-y-scroll py-10 gap-6 pb-32 lg:pb-0">
                {data?.projects?.map(proj => (
                    <div
                        key={proj.id}
                        className="w-10/12 md:w-2/3 lg:w-11/12 flex flex-col gap-5 border-b-2 border-r-2 py-4 px-6 border-black"
                    >
                        <img src={minioBaseUrl + proj.image.url} alt={proj.name} className="w-2/3 mx-auto" />
                        <h2 className="text-center text-4xl">{proj.name}</h2>
                        <button
                            onClick={() => openProjectModal(proj.id)}
                            className="border-b-2 border-r-2 border-black mx-auto w-1/2 block text-center cursor-pointer"
                        >
                            Voir plus ...
                        </button>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <dialog
                    ref={dialogRef}
                    className="p-6 flex flex-col flex-nowrap gap-5 border border-black w-11/12 md:w-8/12  mx-auto border-b-2 border-r-2"
                >
                    {loadingProject && <p> <Icon icon={"streamline-ultimate:loading"} /> loading...</p>}

                    {!loadingProject && project && (
                        <>
                            <h3 className="text-3xl mb-4 text-center">{project.project.name}</h3>

                            {project.image && project.image.length > 0 && (
                                <img
                                    src={minioBaseUrl + project.image[0].url}
                                    alt={project.project.name}
                                    loading="lazy"
                                    className="mx-auto mb-4 max-h-96 object-contain"
                                />
                            )}

                            {project.project.description && (
                                <p className="mb-4">{project.project.description}</p>
                            )}

                            {project.galleries && project.galleries.length > 0 && (
                                <div className="grid grid-cols-1 place-items-center gap-6">
                                    {project.galleries.map((gallery, index) => (
                                        <img
                                            key={index}
                                            src={minioBaseUrl + gallery.url}
                                            alt={gallery.name}
                                            loading="lazy"
                                            className="w-10/12"
                                        />
                                    ))}
                                </div>
                            )}

                            {project.technos && (
                                <div className="grid grid-cols-3 gap-6 md:gap-8 mx-auto">
                                    {project.technos.map((tech, index) => (
                                        <Icon key={index} icon={tech.icon} width="40" />
                                    ))}
                                </div>
                            )}

                            { project.project.link.length > 0 && (
                                <Link
                                    href={project.project.link}
                                    target="_blank"
                                    className="w-10/12 mx-auto border-t-2 border-l-2 border-black px-4 py-2 flex flex-row flex-nowrap items-center justify-between"
                                >
                                    Website <Icon icon="nrk:link" />
                                </Link>
                            )}

                            <button
                                onClick={() => closeModal()}
                                className="block w-10/12 mx-auto border-b-2 border-r-2 border-black px-4 py-2 cursor-pointer"
                            >
                                Fermer
                            </button>
                        </>
                    )}
                </dialog>
            )}
        </main>
    );
}
