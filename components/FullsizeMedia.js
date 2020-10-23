import {FullsizeImage} from "./FullsizeImage";
import {FullsizeVideo} from "./FullsizeVideo";

export function FullsizeMedia({src}) {
    const extension = src.split('.').pop()
    return (
        <>
            {(extension=="png" || extension=="jpg") &&
            <FullsizeImage src={src}/>}

            {(extension=="mp4" || extension=="mov") &&
            <FullsizeVideo src={src} ext={extension}/>}
        </>
    )
}



