import {request} from "../../lib/api";
import {PostLayout} from "../../components/PostLayout";
import PostBar from "../../components/PostBar";
import PostHeader from "../../components/PostHeader";
import SuperMedium from "../../components/SuperMedium";
import {Fullpage} from "../../components/Fullpage";
import {Description} from "../../components/Description";
import {ShortDescription} from "../../components/ShortDescription";
import {Story} from "../../components/Story";
import Highlight from "../../components/Highlight";
import Code from "../../components/Code";
import NextPost from "../../components/NextPost";
import PostMenu from "../../components/PostMenu";

export default function Slug({ post, allPosts }) {
	return (
			<PostLayout title={post.title} description={post.shortDescription}>
				<PostMenu title={post.title} afterTitle={post.afterTitle}/>
				<PostBar color={post.color.hex}/>
				<PostHeader title={post.title} afterTitle={post.afterTitle} shortDescription={post.shortDescription} tags={post.tags}/>
				{post.postContent.map(c => {
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
							<Description src={c.description}/>}

							{c.storyText &&
							<Story name={c.storyName} text={c.storyText} />}

							{c.highlight &&
							<Highlight src={c.highlight}/>}

							{c.codeLine1 &&
							<Code src={[c.codeLine1, c.codeLine2, c.codeLine3, c.codeLine4, c.codeLine5]} link={c.githublink}/>}
						</>
					)
				})}
				<NextPost arr={allPosts} color={post.color.hex}/>
			</PostLayout>
	)
}

export async function getStaticProps({ params }) {
	const data = await getPost(params.slug)
	return {
		props: {
			post: data.post,
			allPosts: data.allPosts,
		}
	}
}

export async function getPost(slug) {
	const data = await request({
		query: `
query PostBySlug($slug: String) {
  post(filter: {slug: {eq: $slug}}) {
     color {
      hex
    }
    title
    afterTitle
    slug
    shortDescription
    tags
    postContent {
      ... on StoryRecord {
        id
        storyName
        storyText
      }
      ... on FullpageRecord {
        fullpage {
          url
        }
        cut
        customColor {
          hex
        }
      }
      ... on DescriptionRecord {
        id
        description
      }
      ... on SuperMediumRecord {
        title
        full
        deviceType
        deviceMedia {
          url
          mimeType
        }
        backgroundColor {
          hex
        }
        backgroundMedium {
          url
          mimeType
        }
        backgroundMediumMobile {
          url
          mimeType
        }
      }
      ... on HighlightRecord {
        highlight
      }
      ... on CodeRecord {
        codeLine1
        codeLine2
        codeLine3
        codeLine4
        codeLine5
        githublink
      }
    }
  }
  allPosts(orderBy: date_DESC) {
    title
    slug
  }
}

		`,
		variables:  { slug }
	})
	return data
}


export async function getStaticPaths() {
	const data = await request({
		query: `
			{
			  allPosts {
				slug
			  }
			}
		`,
	})
	return {
		paths: data.allPosts?.map((post) => `/work/${post.slug}`) || [],
		fallback: false,
	}
}
