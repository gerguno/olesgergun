import Link from 'next/link'
import {request} from '../lib/api'
import {MainLayout} from "../components/MainLayout"
import {FullsizeMedium} from "../components/FullsizeMedium";
import {PostTitle} from "../components/PostTitle";

export default function Index({ posts }) {
	return (
		<MainLayout title={'Workbench'}>
			{posts.map(post => (
					<Link href={`/[slug]`} as={`/${post.slug}`}>
						<a>
							<PostTitle title={post.title} afterTitle={post.afterTitle}/>
							<FullsizeMedium src={post.coverMedium.url}/>
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
			 coverMedium {
			  url
			}
		  }
		}`
	})
	return {
		props: {
			posts: [...data?.allPosts] //return cut array (posts = data.allPosts)
		}
	}
}



