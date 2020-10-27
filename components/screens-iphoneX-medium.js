import {ScreenIphoneXImage} from "./screen-iphoneX-image";
import {ScreenIphoneXVideo} from "./screen-iphoneX-video";

export function ScreensIphoneXMedium(mediaArray) {
    mediaArray = [...mediaArray?.src] //cut array
    let extension = []

    return (
        <div className="post-halfscreens">
            {mediaArray.map((media) => (
                extension = media.url.split('.').pop(),
                <>
                    {(extension=="png" || extension=="jpg") &&
                    <ScreenIphoneXImage src={media.url}/>}

                    {(extension=="mp4" || extension=="mov") &&
                    <ScreenIphoneXVideo src={media.url} ext={extension}/>}
                </>
            ))}
        </div>
    )
}