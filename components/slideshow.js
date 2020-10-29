import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SlideShow({media, color}){
    let isColor = color.indexOf('#') > -1
    const settings = {
        autoplay: true,
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        focusOnSelect: false,
        speed: 1000,
        slidesToShow: 1,
        swipe: false,
        touchMove: false
    }
    return (
        <>
            <div className="slideshow" style={isColor ? {backgroundColor:color} : {}}>
                <div className="screen-desktop">
                    <Slider {...settings}>
                        {media.map((medium) => (
                            <div>
                                <img src={medium.url}/>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}