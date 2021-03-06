import Link from 'next/link'
import {request} from '../lib/api'
import {MainLayout} from "../components/MainLayout"
import useWindowDimensions from "../components/useWindowDimensions";
import { useRouter } from 'next/router'
import { useEffect } from "react";
import Menu from "../components/Menu";

export default function Index({ posts }) {
	const router = useRouter()
	const { height, width } = useWindowDimensions()

	useEffect(() => {
		let main = document.querySelector('main')
		!!router.query.slug ? main.className = 'hide-scrollbar' : main.className = ''
	}, [router])

	return (
		<MainLayout title={'Workbench'}>
			<Menu/>
			<div className="rainbow">
				<div className="left">
					<div className="logo">
						<Link href={'/'}><a>Oleś Gergun</a></Link>
					</div>
					<div className="contacts">
						{width > 575
							?
								<>
									Email: <a href="mailto:hello@olesgergun.com">hello@olesgergun.com</a> <br/>
									Social: <a href="https://www.instagram.com/olesgergun">Instagram</a>, <a href="https://www.facebook.com/olesgergun">Facebook</a>, <a href="https://github.com/gerguno">GitHub</a>, <br/>
									<a href="https://www.instagram.com/kyiv_type_digest">Kyiv Type Digest</a>, <a href="https://www.instagram.com/kyiv_type_foundry">Kyiv Type Foundry</a> <br/>
									© 2021 All rights reserved
								</>
							:
								<>
									Email: <a href="mailto:hello@olesgergun.com">hello@olesgergun.com</a> <br/>
									Social: <a href="https://www.instagram.com/olesgergun">Instagram</a>, <a href="https://www.facebook.com/olesgergun">Facebook</a>, <br/>
									<a href="https://www.instagram.com/kyiv_type_foundry">Kyiv Type Foundry</a>, <a href="https://github.com/gerguno">GitHub</a> <br/>
									© 2021 All rights reserved
								</>
						}
					</div>
				</div>
				<div className="right">
					<Link href={'/'}>
						<a>
							<img src="/oi.png"/>
						</a>
					</Link>
				</div>
			</div>
			<section className="container">
				<div className="motto">
					Architecting
					{width < 576 ? <br/> : ' '}
					the digital
				</div>
				{width < 960 &&
				<div className="home-intro">
					<h2>
						Oleś Gergun is a digital designer and developer based in Kyiv. He has expertise in a wide range of practices with horizontal deepening into digital products сreation
					</h2>
					<div className="read-about">
						<Link href={`/about`}>
							<a>
								Read about
							</a>
						</Link>
					</div>
				</div>
				}
				<section className="home">
					<div className="home-projects">
						{posts.map(post => (
							<div className="home-project">
								<Link href={`/work/[slug]`} as={`/work/${post.slug}`}>
									<a className="home-project-title">
										<img src="/bullet.svg"/>
										{post.title}
										<span className="dark-grey">
											{width > 375
												?
													' '
												:
													post.title.length > 7 ? <br/> : ' '
											}
											{post.afterTitle}
									</span>
									</a>
								</Link>
								<div className="home-project-description">
									<h1>{post.shortDescription}</h1>
								</div>
								<div className="tags">
									{post.tags.split(',').map(t => {
										return (
											<div className="tag">
												{t}
											</div>
										)
									})}
								</div>
							</div>
						))}
					</div>
					{width > 959 &&
					<div className="home-intro">
						<h2>
							Oleś Gergun is a digital designer and developer based in Kyiv. He has expertise in a wide range of practices with horizontal deepening into digital products сreation:
							<br/><br/>
							(1) User experience design<br/>
							Designing strategy- and research-oriented user journeys, applying conventional UI patterns, and inventing experimental ones, creating UI design language and tone of voice.
							<br/><br/>
							(2) Web development<br/>
							HTML, CSS (incl. preprocessors Sass, Less), advanced JavaScript (ES5, ES6+), RestAPI, GraphQL, ReactJS (Context API, React hooks), NextJS, Node.js (basics, incl. Express.js)
							<br/><br/>
							(3) Type design<br/>
							Paying attention to type as fundamental to the design. Exploring type forms of the past as well as of today’s street visual culture (predominantly of Eastern Europe origin).
						</h2>
						<div className="read-about">
							<Link href={`/about`}>
								<a>
									Read about
								</a>
							</Link>
						</div>
					</div>
					}
				</section>
			</section>
		</MainLayout>
	)
}


export async function getStaticProps() {
	const data = await request({
		query: `
		{
		  allPosts {
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


