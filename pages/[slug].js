import {MainLayout} from "../components/MainLayout"
import {request} from "../lib/api"
import SuperMedium from "../components/SuperMedium";
import {Fullpage} from "../components/Fullpage";
import {Description} from "../components/description";
import {Story} from "../components/story";
import Highlight from "../components/Highlight";
import Menu from "../components/Menu";

export default function Post({ post }) {
	console.log(post)
	return (
		<>
			<Menu color={post.menu}/>
			<MainLayout title={post.title}>
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
							/>}

							{c.fullpage &&
							<Fullpage src={c.fullpage.url} cut={c.cut} color={c.customColor && c.customColor.hex}/>}

							{c.description &&
							<Description content={c.description}/>}

							{c.storyName &&
							<Story name={c.storyName} text={c.storyText} />}

							{c.highlight &&
							<Highlight src={c.highlight}/>}
						</>
					)
				})}
			</MainLayout>
		</>
	)
}

export async function getStaticProps({ params }) {
	const data = await getPost(params.slug)
	return {
		props: {
			post: {...data?.post} //return cut object (post = data.post)
		}
	}
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
		paths: data.allPosts?.map((post) => `/${post.slug}`) || [],
		fallback: false,
	}
}

export async function getPost(slug) {
	const data = await request({
		query: `
query PostBySlug($slug: String) {
  post(filter: {slug: {eq: $slug}}) {
  	menu
    title
    afterTitle
    slug
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
      }
      ... on HighlightRecord {
        highlight
      }
    }
  }
}
		`,
		variables:  { slug }
	})
	return data
}
