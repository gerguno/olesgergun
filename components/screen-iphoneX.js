import {ScreenIphoneXImage} from "./screen-iphoneX-image"
import {ScreenIphoneXVideo} from "./screen-iphoneX-video"
import {SlideShow} from "./slideshow"

export function ScreenIphoneX({src, color}) {
    let extension = src[0].url.split('.').pop()
    let isColor = color.indexOf('#') > -1

    if (src.length > 1) {
        return (
            <>
                <div className="post-halfscreens">
                    <div className="post-halfscreen" style={isColor ? {backgroundColor:color} : {}}>
                        <SlideShow device="iphoneX" src={src}/>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <div className="post-halfscreens">
                {(extension == "png" || extension == "jpg") &&
                <ScreenIphoneXImage src={src[0].url}/>}

                {(extension == "mp4" || extension == "mov") &&
                <ScreenIphoneXVideo src={src[0].url} ext={extension}/>}
            </div>
        )
    }
}