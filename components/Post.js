import {request} from "../lib/api"
import SuperMedium from "../components/SuperMedium";
import {Fullpage} from "../components/Fullpage";
import {Description} from "./Description";
import {Story} from "../components/Story";
import Highlight from "../components/Highlight";
import Code from "../components/Code";
import Footer from "../components/Footer";
import NextPost from "../components/NextPost"
import useWindowDimensions from "../components/useWindowDimensions";
import PostBar from "./PostBar";

export default function Post({ src }) {
    return (
        <div className='post'>
            <PostBar title={src.title} afterTitle={src.afterTitle}/>
            {src.postContent.map(c => {
                return (
                    <>
                        {c.title === "supermedium" &&
                        <SuperMedium
                            full={c.full}
                            deviceType={c.deviceType}
                            deviceMedia={c.deviceMedia}
                            backgroundColor={c.backgroundColor}
                            backgroundMedium={c.backgroundMedium}
                            backgroundMediumMobile={c.backgroundMediumMobile}
                        />}

                        {c.fullpage &&
                        <Fullpage src={c.fullpage.url} cut={c.cut} color={c.customColor && c.customColor.hex}/>}

                        {c.description &&
                        <Description title={src.title} afterTitle={src.afterTitle} description={c.description}/>}

                        {c.storyName &&
                        <Story name={c.storyName} text={c.storyText} />}

                        {c.highlight &&
                        <Highlight src={c.highlight}/>}

                        {c.codeLine1 &&
                        <Code src={[c.codeLine1, c.codeLine2, c.codeLine3, c.codeLine4, c.codeLine5]} link={c.githublink}/>}
                    </>
                )
            })}
            {/*<NextPost arr={allPosts} color={post.menu}/>*/}
            <Footer color={src.menu}/>
        </div>
    )
}