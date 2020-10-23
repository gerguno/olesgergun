export function PostTitle({title, afterTitle}) {
    return (
        <div className="post-title col-12">
            <span>{title} </span>
            <span className="grey">{afterTitle}</span>
        </div>
    )
}