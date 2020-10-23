import {HalfscreenImage} from "./HalfscreenImage";

export function HalfscreenImages(imagesArray) {
    console.log(imagesArray)
    imagesArray = [...imagesArray?.imagesArray] //cut array
    return (
        <div className="halfscreen-images">
            {imagesArray.map((image) => (
                <HalfscreenImage src={image.url}/>
            ))}
        </div>
    )
}
