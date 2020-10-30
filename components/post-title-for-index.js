export function PostTitleForIndex({title, afterTitle}) {
    return (
        <div className="post-title col-12">
            <span>{title} </span>
            <span className="grey">{afterTitle}</span>
            <img src='/arrow-forward.svg'/>
        </div>
    )
}