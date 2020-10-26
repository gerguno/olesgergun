import {ScreenIphoneXImage} from "./screen-iphoneX-image";

export function ScreensIphoneXMedium(mediaArray) {
    mediaArray = [...mediaArray?.src] //cut array
    // let extension = []

    return (
        <div className="post-halfscreens">
            {mediaArray.map((media) => (
                <>
                    <ScreenIphoneXImage src={media.url}/>

                    {/*<div className='hidden'>{extension = media.url.split('.').pop()}</div>*/}

                    {/*{(extension=="png" || extension=="jpg") &&*/}
                    {/*<HalfscreenImage src={media.url}/>}*/}

                    {/*{(extension=="mp4" || extension=="mov") &&*/}
                    {/*<HalfscreenVideo src={media.url} ext={extension}/>}*/}
                </>

            ))}
        </div>
    )
}