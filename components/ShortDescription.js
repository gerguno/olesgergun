import ReactMarkdown from "react-markdown"

export function ShortDescription({ src }) {
    return (
        <>
            <div className="short-description">
                <div>
                    <h1><ReactMarkdown source={src}/></h1>
                </div>
            </div>
        </>

    )
}