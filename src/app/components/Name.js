
export default function Name({name}) {
    return (
        <div data-testid="name-comp" className="grid place-items-center lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3 w-full h-dvh lg:h-full">
            <div className="text-center">
                <img src="./images/LOGO_KB_NEG.png" alt="logo" className="mx-auto size-2/3 lg:size-1/3 "  loading="lazy" />
                <h1 className="text-6xl lg:text-7xl uppercase" >{name}</h1>
            </div>
        </div>
    )
}