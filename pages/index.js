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
			<div>
				{width > 768 ? <MenuForHome/> : <MenuForHomeMobile/>}
				<div style={{ display: 'flex'}}>
					<div className="home-intro">
						<div className="home-intro-text">
							<h1>
								Oleś Gergun is a digital designer and developer removing the gap between design and code, transmitting graphic design values to digital services design. Selected projects:
							</h1>
						</div>
					</div>
					<div className="home-projects">
						{posts.map(post => (
							<Link href={`/[slug]`} as={`/${post.slug}`}>
								<a>
									<h1><img src="/bullet.svg"/> {post.title} <span className="grey">{post.afterTitle}</span></h1>
									{/*<img className='arrow' src="/arrow-forward.svg"/>*/}
								</a>
							</Link>
						))}
					</div>
				</div>
			</div>
			{/*<div className="home-footer">*/}
				<Footer/>
			{/*</div>*/}
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



