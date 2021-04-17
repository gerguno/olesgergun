import ReactMarkdown from "react-markdown"

export default function Highlight({ src }) {
    return (
        <div className="highlight">
            <h2><ReactMarkdown source={src}/></h2>
        </div>
    )
}
