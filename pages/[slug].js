import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import {MainLayout} from "../components/MainLayout"
import {request} from "../lib/api"
import {PostTitle} from "../components/PostTitle";
import {FullsizeMedium} from "../components/FullsizeMedium";
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
			<FullsizeMedium src={post.coverMediumInternal.url}/>
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
    coverMedium {
      url
    }
    coverMediumInternal {
      url
    }
    description
    moduleContent {
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
    }
  }
}
		`,
		variables:  { slug }
	})
	return data
}
