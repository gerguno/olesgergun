import {HalfscreenImage} from "./HalfscreenImage";
import {HalfscreenVideo} from "./HalfscreenVideo";

export function HalfscreensMedium(mediaArray) {
    console.log(mediaArray)
    mediaArray = [...mediaArray?.mediaArray] //cut array
    let extension = []

    return (
        <div className="halfscreens-medium">
            {mediaArray.map((media) => (
                <>
                    <div className='hidden'>{extension = media.url.split('.').pop()}</div>

                    {(extension=="png" || extension=="jpg") &&
                    <HalfscreenImage src={media.url}/>}

                    {(extension=="mp4" || extension=="mov") &&
                    <HalfscreenVideo src={media.url} ext={extension}/>}
                </>

            ))}
        </div>
    )
}