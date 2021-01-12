import {Story} from "./story";
import {FullsizeMedium} from "./FullsizeMedium";
import {HalfscreensMedium} from "./HalfscreensMedium";
import {ScreenIphoneX} from "./screen-iphoneX";
import {ScreenDesktop} from "./screen-desktop";
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
                <ScreenDesktop src={content.screenDesktop} color={content.customColor}/>}

                {content.screenDesktopFull &&
                <ScreenDesktopImageFull src={content.screenDesktopFull.url} cut={content.cut} color={content.customColor}/>}

                {content.screenIphonex &&
                <ScreenIphoneX src={content.screenIphonex} color={content.customColor}/>}

                {content.halfscreenMedium &&
                <HalfscreensMedium mediaArray={content.halfscreenMedium}/>}

            </>
        ))
    )
}