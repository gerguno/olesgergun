import Link from 'next/link'
import {request} from '../lib/api'
import {MainLayout} from "../components/MainLayout"
import {PostLayout} from "../components/PostLayout"
import Footer from "../components/Footer";
import useWindowDimensions from "../components/useWindowDimensions";
import { useRouter } from 'next/router'
import { useEffect } from "react";
import Post from "../components/Post";
import Modal from "react-modal";

Modal.setAppElement("#__next");

export default function Index({ posts }) {
	const router = useRouter()
	const { height, width } = useWindowDimensions()

	const selectedPost = () => {
		let k = 0
		posts.map((post, key) => {
			if (post.slug === router.query.slug) {
				k = key
				return
			}
		})
		return posts[k]
	}

	useEffect(() => {
		let main = document.querySelector('main')
		!!router.query.slug ? main.className = 'hide-scrollbar' : main.className = ''
	}, [router])

	return (
		<MainLayout title={'Workbench'}>
			<div className="home-intro">
				<div className="home-intro-logo">
					<img src="/oi.png"/>
				</div>
				<div className="home-intro-text">
					Digital designer and developer with an analytical mindset. Creating user experiences and graphical user interfaces with an eye on type and code
				</div>
			</div>
			<div className="home-projects">
				{posts.map(post => (
					<div className="home-project">
						<div className="home-project-title">
							<Link href={`/?slug=${post.slug}`} as={`/work/${post.slug}`}>
								<a>
									<img src="/bullet.svg"/>
									{post.title}
									<span className="grey">&nbsp;{post.afterTitle.split(',')[0]}</span>
								</a>
							</Link>
						</div>
						<div className="home-project-description">
							<h1>{post.shortDescription}</h1>
						</div>
					</div>
				))}
			</div>
			<Footer/>

			<Modal
				isOpen={!!router.query.slug}
				onRequestClose={() => router.push("/")}
				className="Modal"
				overlayClassName="Overlay"
			>
				<PostLayout title={selectedPost().title}>
					<Post src={selectedPost()}/>
				</PostLayout>
			</Modal>

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
            slug
            shortDescription
            postContent {
              ... on StoryRecord {
                id
                storyName
                storyText
              }
              ... on FullpageRecord {
                fullpage {
                  url
                }
                cut
                customColor {
                  hex
                }
              }
              ... on DescriptionRecord {
                id
                description
              }
              ... on SuperMediumRecord {
                title
                full
                deviceType
                deviceMedia {
                  url
                  mimeType
                }
                backgroundColor {
                  hex
                }
                backgroundMedium {
                  url
                  mimeType
                }
                backgroundMediumMobile {
                  url
                  mimeType
                }
              }
              ... on HighlightRecord {
                highlight
              }
              ... on CodeRecord {
                codeLine1
                codeLine2
                codeLine3
                codeLine4
                codeLine5
                githublink
              }
            }
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


