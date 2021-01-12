import FadeCarousel from './FadeCarousel'

export function SlideShow({device, src}){
    return (
        <>
            <div className={`screen-${device}`}>
                <FadeCarousel device={device} media={src}/>
            </div>
        </>
    )
}