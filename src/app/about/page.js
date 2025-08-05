
import {useState} from "react";
import BackButton from "@/app/components/BackButton";
import Whoami from "@/app/components/about/whoami";
import Interest from "@/app/components/about/interest";
import Background from "@/app/components/about/background";

export default function AboutPage() {


    let [activeSection, setActiveSection] = useState("who")


    const setSection = (section) => {
        setActiveSection(section)
    }

    return (
        <main className={ "w-screen lg:h-dvh overflow-hidden relative"}>
            <BackButton />
            <div className="border-b-4 border-black">
                <h1 className="text-center text-8xl">À propos</h1>
            </div>
            <div className="lg:hidden ">
                <div className="flex flex-row flex-nowrap">
                    <button className={`border-r-2 border-b-2 px-4 py-5 w-2/3 titles ${
                        activeSection === "who" ? "bg-black text-white transition-all" : ""
                    }`} onClick={() => setSection("who")}>Qui suis je ?</button>
                    <button className={`border-r-2 border-b-2 px-4 py-5 w-2/3 titles cursor-pointer hover:scale-125 transition-all hover:border-2 hover:shadow-inner ${
                        activeSection === "background" ? "bg-black text-white transition-all" : ""
                    }`} onClick={() => setSection("background")}>Parcours</button>
                    <button className={`border-r-2 border-b-2 px-4 py-5 w-2/3 titles cursor-pointer hover:scale-125 transition-all hover:border-2 hover:shadow-inner ${
                        activeSection === "interest" ? "bg-black text-white" : ""
                    }`} onClick={() => setSection("interest")}>Intérêts</button>
                </div>
                {activeSection === "who" && <Whoami />}
                {activeSection === "background" && <Background />}
                {activeSection === "interest" && <Interest />}
            </div>

            <div className="hidden lg:grid grid-cols-4 min-h-full">
                <aside className=" border-r-2 col-span-1 border-black flex flex-col items-center justify-center gap-20 ">
                    <button className={`border-r-2 border-b-2 px-4 py-5 w-2/3 cursor-pointer hover:scale-125 transition-all hover:border-2 hover:shadow-inner ${
                        activeSection === "who" ? "bg-black text-white" : ""
                    }`} onClick={() => setSection("who")}>Qui suis je ?</button>
                    <button className={`border-r-2 border-b-2 px-4 py-5 w-2/3 cursor-pointer hover:scale-125 transition-all hover:border-2 hover:shadow-inner ${
                        activeSection === "interest" ? "bg-black text-white" : ""
                    }`} onClick={() => setSection("interest")}>Intérêts</button>
                    <button className={`border-r-2 border-b-2 px-4 py-5 w-2/3 cursor-pointer hover:scale-125 transition-all hover:border-2 hover:shadow-inner ${
                        activeSection === "background" ? "bg-black text-white " : ""
                    }`} onClick={() => setSection("background")}>Parcours</button>
                </aside>
                <div className="col-span-3">
                    {activeSection === "who" && <Whoami />}
                    {activeSection === "background" && <Background />}
                    {activeSection === "interest" && <Interest />}
                </div>
            </div>
        </main>
    )
}