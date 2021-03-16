import ReactMarkdown from "react-markdown"

export function Story({name, text}) {
    return (
        <>
            <div className="story">
                <div className="story-name">
                    <h3>{name}</h3>
                </div>
                <div className="story-text">
                    <ReactMarkdown source={text}/>
                </div>
            </div>
        </>
    )
}