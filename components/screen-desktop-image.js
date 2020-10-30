export function ScreenDesktopImage({src, color}) {
    let isColor = color.indexOf('#') > -1
    return (
        <>
            <div className="post-fullsize" style={isColor ? {backgroundColor:color} : {}}>
                <div className="screen-desktop">
                    <img src={src}/>
                </div>
            </div>
        </>
    )
}


