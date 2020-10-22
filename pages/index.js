import { MainLayout } from "../components/MainLayout"
import { getAllPostsForHome } from '../lib/api'
import { request } from '../lib/api'
import Link from 'next/link'

export default function Index({ posts }) {
	console.log(posts)
	return (
		<MainLayout title={'Workbench'}>
			{/*<div>{JSON.stringify(posts, null, 2)}</div>*/}

			{posts.map(post => (
				<li key={post.slug}>
					<Link href={`/[slug]`} as={`/${post.slug}`}>
						<a>{post.title} {post.afterTitle}
							<img src={post.coverImage.url}/>
						</a>
					</Link>
				</li>
			))}
		</MainLayout>
	)
}

const HOMEPAGE_QUERY = `{
      allPosts {
        slug
        title
        afterTitle
         coverImage {
		  url
		}
      }
    }`

export async function getStaticProps() {
	const data = await request({
		query: HOMEPAGE_QUERY,
	})
	const posts = data.allPosts;
	return {
		props: { posts }
	}
}

