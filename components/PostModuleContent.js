import {PostStory} from "./PostStory";
import {FullsizeMedium} from "./FullsizeMedium";
import {HalfscreensMedium} from "./HalfscreensMedium";

export function PostModuleContent({contentArray}) {
    return (
        contentArray.map((postModule) => (
            <>
                {postModule.storyName &&
                <PostStory name={postModule.storyName} text={postModule.storyText} />}

                {postModule.fullsizeMedium &&
                <FullsizeMedium src={postModule.fullsizeMedium.url}/>}

                {postModule.halfscreenMedium &&
                <HalfscreensMedium mediaArray={postModule.halfscreenMedium}/>}

            </>
        ))
    )
}