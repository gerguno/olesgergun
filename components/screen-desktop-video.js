export function ScreenDesktopVideo({src, ext, color}) {
    let isColor = color.indexOf('#') > -1
    return (
        <>
            {!isColor &&
            <div className="post-fullsize">
                <div className="screen-desktop">
                    <video src={src} type={`video/${ext}`} loop autoPlay/>
                </div>
            </div>}

            {isColor &&
            <div className="post-fullsize" style={{backgroundColor:color}}>
                <div className="screen-desktop">
                    <video src={src} type={`video/${ext}`} loop autoPlay/>
                </div>
            </div>}
        </>



    )
}
