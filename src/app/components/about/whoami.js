
const whoami = () => {
    return (
        <main >
            <h2 className=" text-4xl text-center my-5">Qui suis je ?</h2>
            <div className={"grid place-items-center w-10/12 lg:w-full mx-auto"}>
                <div className={"w-full h-full lg:w-3/4 lg:pt-20"}>
                    <img src="/images/photo.jpg" alt="photo de moi" className={" w-40 lg:w-60 float-left mr-2"} loading={"lazy"}/>
                    <p>Je m’appelle Kevin, je vis en région parisienne et je suis développeur web. Rigoureux, curieux et autonome, j’aborde chaque projet avec le souci du détail et une réelle envie d’apprendre et d’innover. J’accorde une grande importance à l’écoute active et à la compréhension des besoins de mes clients et partenaires. Travailler dans un climat constructif, avec méthode et ouverture d’esprit, fait partie de ce qui me motive au quotidien. </p>
                </div>
            </div>
        </main>
    )
}


export default whoami