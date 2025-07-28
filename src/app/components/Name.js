
export default function Name({name, title}) {
    return (
        <div data-testid="name-comp" className="grid place-items-center row-start-2 row-end-3 col-start-2  col-end-3 w-full h-full">
            <div className="text-center">
                <h1 className="text-8xl uppercase" >{name}</h1>
                <h2 className="text-4xl uppercase">{title}</h2>
            </div>
        </div>
    )
}