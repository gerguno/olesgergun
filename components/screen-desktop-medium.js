import {ScreenDesktopImage} from "./screen-desktop-image"
import {ScreenDesktopVideo} from "./screen-desktop-video"

export function ScreenDesktopMedium({src, color}) {
    let extension = src.split('.').pop()
    return (
        <>
            {(extension=="png" || extension=="jpg") &&
            <ScreenDesktopImage src={src} color={color}/>}

            {(extension=="mp4" || extension=="mov") &&
            <ScreenDesktopVideo src={src} ext={extension} color={color}/>}
        </>
    )
}