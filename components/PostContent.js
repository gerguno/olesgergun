import {Story} from "./story";
import {FullsizeMedium} from "./FullsizeMedium";
import {HalfscreensMedium} from "./HalfscreensMedium";
import {ScreenIphoneX} from "./screen-iphoneX";
import {ScreenDesktop} from "./screen-desktop";
import {ScreenDesktopImageFull} from "./screen-desktop-image-full";
import {Description} from "./description";
import SuperMedium from "./SuperMedium";

export function PostContent({contentArray}) {
    return (
        contentArray.map(c => (
            <>
                {c.title === "supermedium" &&
                <SuperMedium
                    full={c.full}
                    deviceType={c.deviceType}
                    deviceMedia={c.deviceMedia}
                    backgroundColor={c.backgroundColor}
                    backgroundMedium={c.backgroundMedium}
                />}

                {c.fullsizeMedium &&
                <FullsizeMedium src={c.fullsizeMedium.url}/>}

                {c.description &&
                <Description content={c.description}/>}

                {c.storyName &&
                <Story name={c.storyName} text={c.storyText} />}

                {c.screenDesktop &&
                <ScreenDesktop src={c.screenDesktop} color={c.customColor}/>}

                {c.screenDesktopFull &&
                <ScreenDesktopImageFull src={c.screenDesktopFull.url} cut={c.cut} color={c.customColor}/>}

                {c.screenIphonex &&
                <ScreenIphoneX src={c.screenIphonex} color={c.customColor}/>}

                {c.halfscreenMedium &&
                <HalfscreensMedium mediaArray={c.halfscreenMedium}/>}

            </>
        ))
    )
}