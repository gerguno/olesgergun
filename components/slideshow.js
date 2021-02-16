import FadeCarouselOld from './FadeCarouselOld'

export function SlideShow({device, src}){
    return (
        <>
            <div className={`screen-${device}`}>
                <FadeCarouselOld device={device} media={src}/>
            </div>
        </>
    )
}