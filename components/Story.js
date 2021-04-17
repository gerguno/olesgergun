import ReactMarkdown from "react-markdown"

export function Story({name, text}) {
    return (
        <>
            <div className="story">
                <div className="story-name">
                    {name}
                </div>
                <div className="story-text">
                    <h1>
                        <ReactMarkdown source={text}/>
                    </h1>
                </div>
            </div>
        </>
    )
}