import {FullsizeMedia} from "./FullsizeMedia";
import {PostStory} from "./PostStory";
import {HalfscreenImage} from "./HalfscreenImage";
import {HalfscreenImages} from "./HalfscreenImages";

export function PostModuleContent({contentArray}) {
    return (
        contentArray.map((postModule) => (
            <>
                {postModule.storyName &&
                <PostStory name={postModule.storyName} text={postModule.storyText} />}

                {postModule.fullsizeImageSpecific &&
                <FullsizeMedia src={postModule.fullsizeImageSpecific.url}/>}

                {postModule.halfscreenImages &&
                <HalfscreenImages imagesArray={postModule.halfscreenImages}/>}

            </>
        ))
    )
}