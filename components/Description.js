import ReactMarkdown from "react-markdown"

export function Description({ src }) {
    return (
        <>
            <div className="description">
                <h1><ReactMarkdown source={src}/></h1>
            </div>
        </>

    )
}