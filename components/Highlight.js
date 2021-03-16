import ReactMarkdown from "react-markdown"

export default function Highlight({ src }) {
    return (
        <div className="highlight">
            <h1><ReactMarkdown source={src}/></h1>
        </div>
    )
}
