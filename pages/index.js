import Link from 'next/link'
import {request} from '../lib/api'
import {MainLayout} from "../components/MainLayout"
import {FullsizeMedia} from "../components/FullsizeMedia";
import {PostTitle} from "../components/PostTitle";

export default function Index({ posts }) {
	return (
		<MainLayout title={'Workbench'}>
			{posts.map(post => (
					<Link href={`/[slug]`} as={`/${post.slug}`}>
						<a>
							<PostTitle title={post.title} afterTitle={post.afterTitle}/>
							<FullsizeMedia src={post.coverImage.url}/>
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
			 coverImage {
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



