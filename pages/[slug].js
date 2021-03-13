import {MainLayout} from "../components/MainLayout"
import {request} from "../lib/api"
import SuperMedium from "../components/SuperMedium";
import {Fullpage} from "../components/Fullpage";
import {BigTitle} from "../components/BigTitle";
import {Story} from "../components/Story";
import Highlight from "../components/Highlight";
import Code from "../components/Code";
import Footer from "../components/Footer";
import NextPost from "../components/NextPost"
import useWindowDimensions from "../components/useWindowDimensions";
import Menu from "../components/Menu";
import MenuMobile from "../components/MenuMobile";

export default function Post({ post, allPosts }) {
	const { height, width } = useWindowDimensions()
	return (
		<>
			{width > 768 ? <Menu color={post.menu}/> : <MenuMobile color={post.menu}/>}
			<MainLayout title={post.title}>
				{post.postContent.map(c => {
					return (
						<>
							{c.title === "supermedium" &&
							<SuperMedium
								full={c.full}
								deviceType={c.deviceType}
								deviceMedia={c.deviceMedia}
								backgroundColor={c.backgroundColor}
								backgroundMedium={c.backgroundMedium}
								backgroundMediumMobile={c.backgroundMediumMobile}
							/>}

							{c.fullpage &&
							<Fullpage src={c.fullpage.url} cut={c.cut} color={c.customColor && c.customColor.hex}/>}

							{c.description &&
							<BigTitle title={post.title} afterTitle={post.afterTitle} description={c.description}/>}

							{c.storyName &&
							<Story name={c.storyName} text={c.storyText} />}

							{c.highlight &&
							<Highlight src={c.highlight}/>}

							{c.codeLine1 &&
							<Code src={[c.codeLine1, c.codeLine2, c.codeLine3, c.codeLine4, c.codeLine5]}/>}
						</>
					)
				})}
				<NextPost arr={allPosts} color={post.menu}/>
				<Footer color={post.menu}/>
			</MainLayout>
		</>
	)
}

export async function getStaticProps({ params }) {
	const data = await getPost(params.slug)
	return {
		props: {
			post: data.post,
			allPosts: data.allPosts,
		}
	}
}

export async function getStaticPaths() {
	const data = await request({
		query: `
			{
			  allPosts {
				slug
			  }
			}		
		`,
	})
	return {
		paths: data.allPosts?.map((post) => `/${post.slug}`) || [],
		fallback: false,
	}
}

export async function getPost(slug) {
	const data = await request({
		query: `
query PostBySlug($slug: String) {
  post(filter: {slug: {eq: $slug}}) {
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
      }
    }
  }
  allPosts(orderBy: date_DESC) {
    title
    slug
  }
}

		`,
		variables:  { slug }
	})
	return data
}
