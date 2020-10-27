import {Story} from "./story";
import {ScreenDesktopImage} from "./screen-desktop-image";

export function ScreenDesktopImageFull({src, cut, color}) {
    let isColor = color.indexOf('#') > -1
    return (
        <>
            {!isColor &&
                <div className="post-fullsize-full">
                    {cut &&
                    <div className="screen-desktop-full cut"> <img src={src}/> </div>}

                    {!cut &&
                    <div className="screen-desktop-full more-padding"> <img src={src}/> </div>}
                </div>
            }

            {isColor &&
                <div className="post-fullsize-full" style={{backgroundColor:color}}>
                    {cut &&
                    <div className="screen-desktop-full cut"> <img src={src}/> </div>}

                    {!cut &&
                    <div className="screen-desktop-full more-padding"> <img src={src}/> </div>}
                </div>
            }
        </>
    )
}