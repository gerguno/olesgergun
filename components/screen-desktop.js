import {ScreenDesktopImage} from "./screen-desktop-image"
import {ScreenDesktopVideo} from "./screen-desktop-video"
import {SlideShow} from "./slideshow"

export function ScreenDesktop({src, color}) {
    let extension = src[0].url.split('.').pop()
    let isColor = color.indexOf('#') > -1

    if (src.length > 1) {
        return (
            <>
                <div className="post-fullsize" style={isColor ? {backgroundColor:color} : {}}>
                    <SlideShow device="desktop" src={src}/>
                </div>
            </>
        )
    } else {
        return (
            <>
                {(extension=="png" || extension=="jpg") &&
                <ScreenDesktopImage src={src[0].url} color={color}/>}

                {(extension=="mp4" || extension=="mov") &&
                <ScreenDesktopVideo src={src[0].url} ext={extension} color={color}/>}
            </>
        )
    }
}