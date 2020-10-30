import FadeCarousel from './FadeCarousel'


export function SlideShow({media, color}){
    let isColor = color.indexOf('#') > -1
    return (
        <>
            <div className="slideshow" style={isColor ? {backgroundColor:color} : {}}>
                <div className="screen-desktop">
                    <FadeCarousel media={media}/>
                </div>
            </div>
        </>
    )
}