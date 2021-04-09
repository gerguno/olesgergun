import Link from 'next/link'
import {request} from '../lib/api'
import {MainLayout} from "../components/MainLayout"
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import MenuMobile from "../components/MenuMobile";
import useWindowDimensions from "../components/useWindowDimensions";


export default function Index({ posts }) {
    const { height, width } = useWindowDimensions()


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
                    <Link href={`/[slug]`} as={`/${post.slug}`}>
                        <a>
                            <h1><img src="/bullet.svg"/> {post.title} <span className="grey">{post.afterTitle}</span></h1>
                        </a>
                    </Link>
                ))}
            </div>
            <Footer/>
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



