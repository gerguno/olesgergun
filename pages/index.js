import {MainLayout} from "../components/MainLayout";
import Link from 'next/link'

export default function Index({posts}) {
	return (
		<MainLayout title={'Workbench'}>
			{posts.map(post => (
				<li key={post.id}>
					<Link href={`/[id]`} as={`/${post.id}`}>
						<a>{post.title} {post.aftertitle}</a>
					</Link>
				</li>
			))}
		</MainLayout>
	)
}

Index.getInitialProps = async () => {
	const response = await fetch('http://localhost:4200/posts')
	const posts = await response.json();
	return {
		posts
	}
}

