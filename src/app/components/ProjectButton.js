
export default function ProjectButton({name, classes, onClick}) {
    return (
        <button onClick={onClick} className={`${classes} border-r-2 border-b-2 border-black  w-4/5 text-xl px-4 py-5 cursor-pointer transition-all hover:border-b-4 hover:border-r-4 hover:shadow-inner`}>
            {name}
        </button>
    )
}