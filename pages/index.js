import Link from 'next/link'
import {request} from '../lib/api'
import {MainLayout} from "../components/MainLayout"
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
		!!router.query.slug ? main.style.position = 'fixed' : main.style.position = ''
	}, [router])

	return (
		<MainLayout title={'Workbench'}>
			<div className="home-intro">
				<div className="home-intro-logo">
					<img src="/oi.png"/>
				</div>
				<div className="home-intro-text">
					Design and development with an analytical approach. Creating user experiences, developing web user interfaces and drawing typefaces
				</div>
			</div>
			<div className="home-projects">
				{posts.map(post => (
					<Link href={`/?slug=${post.slug}`} as={`/work/${post.slug}`}>
						<a>
							<h1><img src="/bullet.svg"/> {post.title} <span className="grey">{post.afterTitle}</span></h1>
						</a>
					</Link>
				))}
			</div>
			<Footer/>

			<Modal
				isOpen={!!router.query.slug}
				onRequestClose={() => router.push("/")}
				className="Modal"
				overlayClassName="Overlay"
			>

				<Post src={selectedPost()}/>
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


