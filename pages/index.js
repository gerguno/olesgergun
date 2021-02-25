import Link from 'next/link'
import {request} from '../lib/api'
import {MainLayout} from "../components/MainLayout"
import {IpadScreen} from "../components/IpadScreen";
import Footer from "../components/Footer";
import MenuForHome from "../components/MenuForHome";
import MenuForHomeMobile from "../components/MenuForHomeMobile";
import useWindowDimensions from "../components/useWindowDimensions";
import {IphoneXScreen} from "../components/IphoneXScreen";


export default function Index({ posts }) {
	const { height, width } = useWindowDimensions()

	const media = [
		{
			url: '/home/ktf_website.mp4',
			mimeType: 'video/mp4'
		}
	]

	const mediaMob = [
		{
			url: '/home/ktf_website_mob.mp4',
			mimeType: 'video/mp4'
		}
	]
	return (
		<MainLayout title={'Workbench'}>
			<div className="home-medium">
				{width > 768 ? <IpadScreen src={media}/> : <IphoneXScreen src={mediaMob}/>}
			</div>
			<div className="home-intro">
				{width > 768 ? <MenuForHome/> : <MenuForHomeMobile/>}
				<div className="home-intro-text">
					Litigation and courts search service that helps you to find platform unites a wide audience of researchers by building connection creating the consistancy between design
					& code.
				</div>
			</div>
			<div className="home-projects">
				{posts.map(post => (
							<Link href={`/[slug]`} as={`/${post.slug}`}>
								<a>
									<img src="/bullet.svg"/>
									<h2>{post.title} <span className="grey">{post.afterTitle}</span></h2>
								</a>
							</Link>
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



