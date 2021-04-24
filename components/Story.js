import ReactMarkdown from "react-markdown"

export function Story({name, text}) {
    return (
        <>
            <div className="story">
                <div className="story-name">
                    <img src="/bullet.svg"/>{name}
                </div>
                <div className="story-text">
                    <ReactMarkdown source={text}/>
                </div>
            </div>
        </>
    )
}