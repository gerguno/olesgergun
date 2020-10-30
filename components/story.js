export function Story({name, text}) {
    return (
        <>
            <div className="story">
                <div className="story-name">
                    <h3>{name}</h3>
                </div>
                <div className="story-text">
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}