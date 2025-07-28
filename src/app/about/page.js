
export default function AboutPage() {
    return (
        <main className={ "h-screen w-screen overflow-hidden"}>
            <div className="border-b-4 border-black">
                <h1 className="text-center text-8xl">About</h1>
            </div>
            <div className="grid grid-cols-2 h-screen">
                <aside className="w-1/4 border-r-2 border-black flex flex-col items-center justify-around gap-6 ">
                    <button className="border-r-2 border-b-2 px-4 py-5 w-2/3 cursor-pointer hover:scale-125 transition-all hover:border-2 hover:shadow-inner">Who am I</button>
                    <button className="border-r-2 border-b-2 px-4 py-5 w-2/3 cursor-pointer hover:scale-125 transition-all hover:border-2 hover:shadow-inner">Interest</button>
                    <button className="border-r-2 border-b-2 px-4 py-5 w-2/3 cursor-pointer hover:scale-125 transition-all hover:border-2 hover:shadow-inner">Parcours</button>
                </aside>
                <div className="w-3/4">pouet</div>
            </div>
        </main>
    )
}