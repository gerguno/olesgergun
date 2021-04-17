import FadeCarousel from "./FadeCarousel"

export function IpadScreen({ src }) {
    if (src.length > 1) {
        return (
            <>
                <div className="ipad-screen">
                    <div className="__device">
                        <img src='/ipad.png' alt=""/>
                    </div>
                    <FadeCarousel media={src}/>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="ipad-screen">
                    <div className="__device">
                        <img src='/ipad.png' alt=""/>
                    </div>

                    {(src[0].mimeType === "image/png" || src[0].mimeType === "image/jpeg") &&
                    <div className="__media">
                        <img src={src[0].url} alt=""/>
                    </div>
                    }

                    {(src[0].mimeType === "video/quicktime" || src[0].mimeType === "video/mp4") &&
                    <div className="__media">
                        <video src={src[0].url} type={src[0].mimeType} loop autoPlay muted playsinline/>
                    </div>
                    }

                </div>
            </>
        )
    }
}