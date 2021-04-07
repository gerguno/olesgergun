import { DesktopScreen } from "./DesktopScreen";
import { IpadScreen } from "./IpadScreen";
import { IphoneXScreen } from "./IphoneXScreen";
import { Iphone6Screen } from "./Iphone6Screen";
import { NoMediaH } from "./NoMediaH";
import { NoMediaW } from "./NoMediaW";
import useWindowDimensions from "./useWindowDimensions";


export default function SuperMedium({ full, deviceType, deviceMedia, backgroundColor, backgroundMedium, backgroundMediumMobile }) {
    const { height, width } = useWindowDimensions()

    return (
        <>
            {(backgroundMedium && (backgroundMedium.mimeType === "video/quicktime" || backgroundMedium.mimeType === "video/mp4"))
                ?
                    <div className={`supermedium ${full ? `__full` : `__half`}`}>
                        <video src={backgroundMedium.url} type={backgroundMedium.mimeType} loop autoPlay muted/>
                    </div>
                :
                    width > 768
                        ?
                            <div
                                className={`supermedium ${full ? `__full` : `__half`}`}
                                style={{ background: backgroundColor && backgroundColor.hex || backgroundMedium && `url('${backgroundMedium.url}') center center / cover no-repeat` }}
                            >
                                {deviceType==='desktop' && <DesktopScreen src={deviceMedia}/>}
                                {deviceType==='ipad' && <IpadScreen src={deviceMedia}/>}
                                {deviceType==='iphonex' && <IphoneXScreen src={deviceMedia}/>}
                                {deviceType==='iphone6' && <Iphone6Screen src={deviceMedia}/>}
                                {deviceType==='nomediaH' && <NoMediaH src={deviceMedia}/>}
                                {deviceType==='nomediaW' && <NoMediaW src={deviceMedia}/>}
                            </div>
                        :
                            <div
                                className={`supermedium ${full ? `__full` : `__half`}`}
                                style={{ background: backgroundColor && backgroundColor.hex || backgroundMediumMobile[0] && `url('${backgroundMediumMobile[0].url}') center center / cover no-repeat` || backgroundMedium && `url('${backgroundMedium.url}') center center / cover no-repeat` }}
                            >
                                {deviceType==='desktop' && <DesktopScreen src={deviceMedia}/>}
                                {deviceType==='ipad' && <IpadScreen src={deviceMedia}/>}
                                {deviceType==='iphonex' && <IphoneXScreen src={deviceMedia}/>}
                                {deviceType==='iphone6' && <Iphone6Screen src={deviceMedia}/>}
                                {deviceType==='nomediaH' && <NoMediaH src={deviceMedia}/>}
                                {deviceType==='nomediaW' && <NoMediaW src={deviceMedia}/>}
                            </div>

            }
        </>
    )
}
