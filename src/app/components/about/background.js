
import BackgroundDetails from "@/app/components/about/BackgroundDetails";
import {useState} from "react";
import BackgroundButton from "@/app/components/about/BackgroundButton";




const background = () => {
    const [item, setItem] = useState(0)

    let items = [
        {
            title: "Animation",
            text: "L’animation a marqué le début de mon parcours professionnel. Dès l’âge de 17 ans, j’ai accompagné pendant cinq ans des jeunes de 6 à 14 ans en centre de loisirs. Cette expérience m’a permis de me responsabiliser très tôt et de développer de solides compétences en communication avec des publics variés. J’ai appris à concevoir et mettre en place des projets d’animation, tout en gérant le matériel et les budgets alloués. Ce rôle m’a apporté le goût du travail d’équipe, de la créativité, ainsi qu’une grande adaptabilité, des atouts précieux que j’ai continué à développer par la suite.",
            classes: "border-l-2 border-t-2 border-black"
        },
        {
            title: "Restauration",
            text: "Après l’animation, la restauration a été pour moi un nouveau terrain d’apprentissage, notamment dans la gestion de la relation client. J’y ai découvert l’importance de la communication directe : apprendre à prendre une commande, à répondre aux attentes de la clientèle et à connaître parfaitement mes produits. J’ai exercé dans des contextes variés: brasserie, bar dansant, boîte de nuit et coffee shop, ce qui m’a permis de développer une grande capacité d’adaptation et de gérer efficacement le stress, même dans les périodes de forte affluence. Au quotidien, mes priorités étaient le service client et le respect rigoureux des normes d’hygiène, des qualités essentielles que je continue de valoriser dans mon parcours professionnel.",
            classes: "border-l-2 border-r-2 border-black"
        },
        {
            title: "Hôpital",
            text: "J’ai ensuite exercé pendant trois ans en tant que brancardier en neuro-radiologie. Ces années en hôpital m’ont permis de placer l’hygiène et le bien-être des patients au cœur de mes priorités. Cette mission, parfois au sein du bloc opératoire ou lors d’examens en imagerie médicale, m’a amené à développer une gestion du stress accrue et une vraie qualité d’écoute humaine. J’ai eu la chance d’apprendre énormément au contact des manipulateurs radio et des radiologues, découvrant la richesse du travail d’équipe dans un environnement exigeant. Cette expérience a profondément renforcé mon sens de l’empathie et mon attention aux autres, des valeurs qui me guident toujours aujourd’hui.",
            classes: "border-l-2 border-r-2 border-black"
        },
        {
            title: "Développement Web",
            text: "Ma reconversion vers le développement web s’est amorcée pendant la période du Covid. Depuis longtemps passionné par l’informatique, j’avais toujours pensé que cette voie m’était inaccessible, faute de longues études. Mais le contexte particulier de la pandémie m’a poussé à me remettre en question: j’ai saisi l’occasion pour explorer l’univers du code en autodidacte. J’y ai trouvé une stimulation intellectuelle, une liberté de création et la possibilité d’apprendre continuellement, des aspects qui m’ont rapidement convaincu de poursuivre dans cette direction. J’ai alors choisi de me former de façon structurée avec OpenClassrooms. Aujourd’hui, je suis développeur web, prêt à écrire la suite de mon histoire professionnelle dans ce domaine qui me passionne.",
            classes: "border-r-2 border-b-2 border-black"
        },
    ]

    const [text, setText] = useState(items[0].text)

    const defineItem = (item) => {
        setItem(item)
        const chosenItem = items[item]
        setText(chosenItem.text)
    }


    return (
        <main className="h-full w-full overflow-y-scroll pb-28 lg:pb-0">
            <h2 className="text-4xl text-center my-5">Parcours</h2>
            <div className="h-full w-full lg:hidden flex flex-col items-center justify-around">
                { items.map((item, index) => (
                    <BackgroundDetails  key={index} text={item.text} classes={item.classes} title={item.title} />
                ))
                }
            </div>
            <div className="hidden lg:block">
                <div className={`flex flex-row flex-nowrap justify-between border-b-2 py-5`}>
                    <BackgroundButton name="Animation" classes="" itemId={0} define={() => defineItem(0)} definedItemId={item} />
                    <BackgroundButton name="Restauration" classes="border-x-2" itemId={1} define={() => defineItem(1)} definedItemId={item}/>
                    <BackgroundButton name="Hôpital" classes="border-r-2" itemId={2} define={() => defineItem(2)} definedItemId={item}/>
                    <BackgroundButton name="Développement web" classes="" itemId={3} define={() => defineItem(3)} definedItemId={item}/>
                </div>
                <p className={"text-center my-20 w-10/12 mx-auto"}>{text}</p>
            </div>
        </main>
    )
}

export default background