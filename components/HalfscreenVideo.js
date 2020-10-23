export function HalfscreenVideo({src, ext}) {
    return (
        <div className="halfscreen-video">
            <video src={src} type={`video/${ext}`} loop autoPlay/>
        </div>
    )
}