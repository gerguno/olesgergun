import {useState, useEffect} from 'react'
import {MainLayout} from "../components/MainLayout"
import {useRouter} from 'next/router'

export default function Post({ post }) {
	return (
		<MainLayout title={post.title}>
			<p>{post.title} {post.aftertitle}</p>
			{/*<img src={`..public/images/${post.heroImage}`}/>*/}

			{/*<img src={img}/>*/}
			<h1>{post.description}</h1>
		</MainLayout>
	)
}

export async function getServerSideProps({ query, req}) {
	if (!req) {
		return {post:null}
	}
	const response = await fetch(`http://localhost:4200/posts/${query.id}`)
	const post = await response.json();
	return {
		props: {post}
	}
}

// Post.getInitialProps = async ({ query, req }) => {
// 	console.log(query)
// 	if (!req) {
// 		return {post:null}
// 	}
// 	const response = await fetch(`http://localhost:4200/posts/${query.id}`)
// 	const post = await response.json();
// 	return {
// 			post
// 	}
// }