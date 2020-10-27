import {Story} from "./story";
import {FullsizeMedium} from "./FullsizeMedium";
import {HalfscreensMedium} from "./HalfscreensMedium";
import {ScreensIphoneXMedium} from "./screens-iphoneX-medium";
import {ScreenDesktopMedium} from "./screen-desktop-medium";
import {ScreenDesktopImageFull} from "./screen-desktop-image-full";
import {Description} from "./description";

export function PostContent({contentArray}) {
    return (
        contentArray.map((content) => (
            <>
                {content.fullsizeMedium &&
                <FullsizeMedium src={content.fullsizeMedium.url}/>}

                {content.description &&
                <Description content={content.description}/>}

                {content.storyName &&
                <Story name={content.storyName} text={content.storyText} />}

                {content.screenDesktop &&
                <ScreenDesktopMedium src={content.screenDesktop.url} color={content.customColor}/>}

                {content.screenDesktopFull &&
                <ScreenDesktopImageFull src={content.screenDesktopFull.url} cut={content.cut} color={content.customColor}/>}

                {content.screenIphonex &&
                <ScreensIphoneXMedium src={content.screenIphonex}/>}


                {content.halfscreenMedium &&
                <HalfscreensMedium mediaArray={content.halfscreenMedium}/>}

            </>
        ))
    )
}