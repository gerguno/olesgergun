import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import {MainLayout} from "../components/MainLayout"
import {request} from "../lib/api"
import {PostTitle} from "../components/PostTitle";
import {PostContent} from "../components/PostContent";

export default function Post({ post }) {
	console.log(post)
	return (
		<MainLayout title={post.title}>
			<PostTitle title={post.title} afterTitle={post.afterTitle}/>
			<PostContent contentArray={post.postContent} />
		</MainLayout>
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
    title
    afterTitle
    slug
    postContent {
      ... on StoryRecord {
        id
        storyName
        storyText
      }
      ... on FullsizeMediumRecord {
        id
        fullsizeMedium {
          url
        }
      }
      ... on HalfscreensMediumRecord {
        id
        halfscreenMedium {
          url
        }
      }
      ... on ScreenDesktopRecord {
        id
        customColor
        screenDesktop {
          url
        }
      }
      ... on ScreenDesktopFullRecord {
        id
        screenDesktopFull {
          url
        }
        cut
        customColor
      }
      ... on DescriptionRecord {
        id
        description
      }
      ... on ScreenIphonexRecord {
        id
        customColor
        screenIphonex {
          url
        }
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
    }
  }
}
		`,
		variables:  { slug }
	})
	return data
}
