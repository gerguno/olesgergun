import Link from 'next/link'
import {request} from '../lib/api'
import {MainLayout} from "../components/MainLayout"
import {IpadScreen} from "../components/IpadScreen";
import Footer from "../components/Footer";
import MenuForHome from "../components/MenuForHome";

export default function Index({ posts }) {
	const media = [
		{
			url: '/home/ktf_website.png',
			mimeType: 'image/png'
		}
	]
	return (
		<MainLayout title={'Workbench'}>
			<div className="home-medium">
				<IpadScreen src={media}/>
			</div>
			<div className="home-intro">
				<MenuForHome/>
				Litigation and courts search service that helps you to find platform unites a wide audience of researchers by building connection creating the consistancy between design
				& code.
			</div>
			<div className="home-projects">
				{posts.map(post => (
					<div>
						<img src="/bullet.svg"/>
						<h2>
							<Link href={`/[slug]`} as={`/${post.slug}`}>
								<a>
									{post.title} <span className="grey">{post.afterTitle}</span>
								</a>
							</Link>
						</h2>
					</div>
				))}
			</div>
			<div className="home-footer">
				<Footer/>
			</div>
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



