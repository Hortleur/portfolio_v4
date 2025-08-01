
const BackgroundDetails = ({classes, title, text}) => {
    return (
        <details className={`${classes} my-5 w-10/12 p-4`}>
            <summary className="text-xl marker:hidden titles">{title} </summary>
            <p>{text}</p>
        </details>
    )
}

export default BackgroundDetails