import {ScreenDesktopImage} from "./screen-desktop-image"

export function ScreenDesktopMedium({src, color}) {
    let isColor = color.indexOf('#') > -1
    return (
        <>
        {!isColor &&
        <div className="post-fullsize">
            <ScreenDesktopImage src={src}/>
        </div>}

        {isColor &&
        <div className="post-fullsize" style={{backgroundColor:color}}>
            <ScreenDesktopImage src={src}/>
        </div>}
        </>
    )
}