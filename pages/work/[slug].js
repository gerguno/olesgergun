import {MainLayout} from "../../components/MainLayout"
import Post from "../../components/Post";
import {request} from "../../lib/api";

export default function Slug({ post }) {
	return (
		<>
			<MainLayout title={post.title}>
				<Post src={post}/>
			</MainLayout>
		</>
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
