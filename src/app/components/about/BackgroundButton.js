
const BackgroundButton = ({name, classes, itemId, define, definedItemId}) => {
    return (
        <button onClick={define} className={`border-black text-xl w-full h-full cursor-pointer titles ${classes} ${itemId === definedItemId ? "bg-black text-white" : ""}`}>{name}</button>
    )
}

export default BackgroundButton