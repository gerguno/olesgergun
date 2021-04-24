export default function PostHeader({ title, afterTitle, shortDescription, tags}) {
    return (
        <div className="post-header">
            <div className="post-title">
                {title} <span className="dark-grey">{afterTitle}</span>
            </div>
            <div className="short-description">
                <h2>{shortDescription}</h2>
            </div>
            <div className="tags">
                {tags.split(',').map(t => {
                    return (
                        <div className="tag">
                            {t}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}