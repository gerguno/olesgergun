import {FullsizeImage} from "./FullsizeImage";
import {FullsizeVideo} from "./FullsizeVideo";

export function FullsizeMedium({src}) {
    let extension = src.split('.').pop() //get extension
    return (
        <>
            {(extension=="png" || extension=="jpg") &&
            <FullsizeImage src={src}/>}

            {(extension=="mp4" || extension=="mov") &&
            <FullsizeVideo src={src} ext={extension}/>}
        </>
    )
}



