import Link from 'next/link'
import {request} from '../lib/api'
import {MainLayout} from "../components/MainLayout"

export default function Index({ posts }) {
	return (
		<MainLayout title={'Workbench'}>
			{posts.map(post => (
					<Link href={`/[slug]`} as={`/${post.slug}`}>
						<a>
							<PostTitleForIndex title={post.title} afterTitle={post.afterTitle}/>
						</a>
					</Link>
			))}
		</MainLayout>
	)
}

export async function getStaticProps() {
	const data = await request({
		query: `
		{
		  allPosts {
			slug
			title
			afterTitle
		  }
		}
		`
	})
	return {
		props: {
			posts: data.allPosts
		}
	}
}



