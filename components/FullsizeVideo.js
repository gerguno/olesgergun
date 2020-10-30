export function FullsizeVideo({src, ext}) {
    return (
        <div className="fullsize">
            <video src={src} type={`video/${ext}`} loop autoPlay/>
        </div>
    )
}