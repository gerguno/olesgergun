import {useState, useEffect} from 'react'
import {MainLayout} from "../components/MainLayout"
import {useRouter} from 'next/router'
import {request} from "../lib/api"

export default function Post({ post }) {
	return (
		<> yo {post.title}</>
	)
	// console.log(post)
	// // No pages like 'sdfsdfds'
	// const router = useRouter()
	// if (!router.isFallback && !post?.slug) {
	// 	console.log('404')
	// }
	//
	// console.log(post)
	// return (
	// 	<MainLayout title={post.title}>
	// 		<p>{post.title} {post.afterTitle}</p>
	// 		<img src={post.coverImage.url}/>
	// 		<h1>{post.description}</h1>
	// 		{post.moduleContent.map((postModule) => (
	// 			<>
	// 				<p> {postModule.storyName}</p>
	// 				<p> {postModule.storyText}</p>
	// 				{postModule.fullsizeImageSpecific && <img src={postModule.fullsizeImageSpecific.url} alt=""/>}
	// 				{postModule.fullsizeVideoSpecific && <video src={postModule.fullsizeVideoSpecific.url} type="video/mp4" loop autoPlay/>}
	//
	// 				{postModule.halfscreenImageSpecific && <img src={postModule.halfscreenImageSpecific.url} alt=""/>}
	// 			</>
	// 		))}
	// 	</MainLayout>
	// )
}

export async function getStaticProps({ params, preview = false }) {
	const data = await getPostAndMorePosts(params.slug, preview)
	console.log(data)
	return {
		props: {
			preview,
			post: {
				...data?.post,
			},
			morePosts: data?.morePosts ?? [],
		},
	}
}

// Works!
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
	console.log(data)
	return {
		paths: data.allPosts?.map((post) => `/${post.slug}`) || [],
		fallback: true,
	}
}

async function fetchAPI(query, { variables, preview } = {}) {
	const res = await fetch(`https://graphql.datocms.com/` + (preview ? '/preview' : ''), {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}

export async function getPostAndMorePosts(slug, preview) {
	const data = await fetchAPI(
		`
			  query PostBySlug($slug: String) {
				  post(filter: {slug: {eq: $slug}}) {
					title
					slug
					description
				  }
			  }`,
		{
			preview,
			variables: {
				slug,
			},
		}
	)
	return data
}
