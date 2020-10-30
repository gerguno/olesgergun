import {ScreenDesktopImage} from "./screen-desktop-image"
import {ScreenDesktopVideo} from "./screen-desktop-video"
import {SlideShow} from "./slideshow"

export function ScreenDesktopMedium({media, color}) {
    let extension = media[0].url.split('.').pop()
    if (media.length > 1) {
        return (
            <>
                <SlideShow media={media} color={color}/>
            </>
        )
    }
    else {
        return (
            <>
                {(extension=="png" || extension=="jpg") &&
                <ScreenDesktopImage src={media[0].url} color={color}/>}

                {(extension=="mp4" || extension=="mov") &&
                <ScreenDesktopVideo src={media[0].url} ext={extension} color={color}/>}
            </>
        )
    }
}