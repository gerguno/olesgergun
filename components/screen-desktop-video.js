export function ScreenDesktopVideo({src, ext, color}) {
    let isColor = color.indexOf('#') > -1
    return (
        <>
            <div className="post-fullsize" style={isColor ? {backgroundColor:color} : {}}>
                <div className="screen-desktop">
                    <video src={src} type={`video/${ext}`} loop autoPlay/>
                </div>
            </div>
        </>



    )
}
