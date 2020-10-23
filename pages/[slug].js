import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import {MainLayout} from "../components/MainLayout"
import {request} from "../lib/api"
import {PostTitle} from "../components/PostTitle";
import {FullsizeMedia} from "../components/FullsizeMedia";
import {PostDescription} from "../components/PostDescription";
import {PostModuleContent} from "../components/PostModuleContent";

export default function Post({ post }) {
	if (!post?.slug) {
		return <ErrorPage statusCode={404} />
	}
	console.log(post)
	return (
		<MainLayout title={post.title}>
			<PostTitle title={post.title} afterTitle={post.afterTitle}/>
			<FullsizeMedia src={post.coverImageInternal.url}/>
			<PostDescription content={post.description}/>
			<PostModuleContent contentArray={post.moduleContent} />
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
		fallback: true,
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
    coverImage {
      url
    }
    coverImageInternal {
      url
    }
    description
    moduleContent {
      ... on StoryRecord {
        id
        storyName
        storyText
      }
      ... on FullsizeImageRecord {
        id
        fullsizeImageSpecific {
          url
        }
      }
      ... on FullsizeVideoRecord {
        id
        fullsizeVideoSpecific {
          url
        }
      }
      ... on HalfscreenVideoRecord {
        id
        halfscreenVideoSpecific {
          url
        }
      }
      ... on HalfscreenImageBlockRecord {
        id
        halfscreenImages {
          url
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
