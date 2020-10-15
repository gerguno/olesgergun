import {useRouter} from 'next/router'
import Head from 'next/head';

export default function Post() {
	const router = useRouter()
	console.log(router)
	return <>
		<Head>
			<title>Oleś Gergun | {router.query.postURL}</title>
		</Head>
		<h1>Post {router.query.postURL}</h1>
	</>
}