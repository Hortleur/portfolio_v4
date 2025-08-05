
const BackgroundDetails = ({classes, title, text}) => {
    return (
        <details className={`${classes} my-5 w-10/12 p-4`}>
            <summary className="text-xl md:text-2xl titles">{title} </summary>
            <p className="md:text-xl">{text}</p>
        </details>
    )
}

export default BackgroundDetails