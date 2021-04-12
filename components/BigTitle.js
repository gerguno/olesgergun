import ReactMarkdown from "react-markdown"

export function BigTitle({ title, afterTitle, description }) {
    return (
        <>
            {/*<div className="title">*/}
            {/*    <img src="/bullet.svg"/>*/}
            {/*    <h2>*/}
            {/*        {title} <span className="grey">{afterTitle}</span>*/}
            {/*    </h2>*/}
            {/*</div>*/}
            <div className="description">
                <h1><ReactMarkdown source={description}/></h1>
            </div>
        </>

    )
}