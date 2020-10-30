export function ScreenIphoneXVideo({src, ext}) {
    return (

        <div className="post-halfscreen">
            <div className="screen-iphoneX">
                <video src={src} type={`video/${ext}`} loop autoPlay/>
            </div>
        </div>
    )
}