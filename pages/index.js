import Link from 'next/link'
import {request} from '../lib/api'
import {MainLayout} from "../components/MainLayout"
import {PostLayout} from "../components/PostLayout"
import Footer from "../components/Footer";
import useWindowDimensions from "../components/useWindowDimensions";
import { useRouter } from 'next/router'
import { useEffect } from "react";

export default function Index({ posts }) {
	const router = useRouter()
	const { height, width } = useWindowDimensions()

	useEffect(() => {
		let main = document.querySelector('main')
		!!router.query.slug ? main.className = 'hide-scrollbar' : main.className = ''
	}, [router])

	return (
		<MainLayout title={'Workbench'}>
			<div className="home-projects">
				{posts.map(post => (
					<Link href={`/work/[slug]`} as={`/work/${post.slug}`}>
						<a>
							<div className="home-project">
								<div className="home-project-title">
									<div className="home-title">
										<img src="/bullet.svg"/>
										{post.title}
										<span className="grey">
										{width < 576 ? <br/> : <>&nbsp;</>}
											{post.afterTitle}
										</span>
									</div>
									{width > 1366 &&
										<div className="tags">
											{post.tags.split(',').map(t => {
												return (
													<div className="tag">
														{t}
													</div>
												)
											})}
										</div>
									}
								</div>
								<div className="home-project-description">
									<h1>{post.shortDescription}</h1>
								</div>
								{width < 1366 &&
								<div className="tags">
									{post.tags.split(',').map(t => {
										return (
											<div className="tag">
												{t}
											</div>
										)
									})}
								</div>
								}
							</div>
						</a>
					</Link>
				))}
			</div>
			<Footer/>
			<div className="rainbow"></div>
		</MainLayout>
	)
}


export async function getStaticProps() {
	const data = await request({
		query: `
		{
		  allPosts {
			menu
            title
            afterTitle
            tags
            slug
            shortDescription
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


