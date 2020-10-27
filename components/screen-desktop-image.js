export function ScreenDesktopImage({src, color}) {
    let isColor = color.indexOf('#') > -1
    return (
        <>
            {!isColor &&
            <div className="post-fullsize">
                <div className="screen-desktop">
                    <img src={src}/>
                </div>
            </div>}

            {isColor &&
            <div className="post-fullsize" style={{backgroundColor:color}}>
                <div className="screen-desktop">
                    <img src={src}/>
                </div>
            </div>}
        </>
    )
}


