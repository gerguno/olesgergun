import ReactMarkdown from "react-markdown"

export default function Highlight({ src }) {
    return (
        <div className="highlight">
            <ReactMarkdown source={src}/>
        </div>
    )
}
