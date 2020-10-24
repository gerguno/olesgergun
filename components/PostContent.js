import {Story} from "./story";
import {FullsizeMedium} from "./FullsizeMedium";
import {HalfscreensMedium} from "./HalfscreensMedium";
import {ScreenDesktopImage} from "./screen-desktop-image";

export function PostContent({contentArray}) {
    return (
        contentArray.map((content) => (
            <>
                {content.fullsizeMedium &&
                <FullsizeMedium src={content.fullsizeMedium.url}/>}

                {content.storyName &&
                <Story name={content.storyName} text={content.storyText} />}

                {content.screenDesktop &&
                <ScreenDesktopImage src={content.screenDesktop.url}/>}

                {content.halfscreenMedium &&
                <HalfscreensMedium mediaArray={content.halfscreenMedium}/>}

            </>
        ))
    )
}