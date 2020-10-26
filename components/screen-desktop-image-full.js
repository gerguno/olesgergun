import {Story} from "./story";

export function ScreenDesktopImageFull({src, cut}) {
    return (
        <div className="post-fullsize-full">

            {cut &&
            <div className="screen-desktop-full cut"> <img src={src}/> </div>}

            {!cut &&
            <div className="screen-desktop-full more-padding"> <img src={src}/> </div>}

        </div>
    )
}