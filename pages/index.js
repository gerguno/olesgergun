import Link from 'next/link'
import Head from 'next/head'

export default function Index() {
	return (
		<>
			<Head>
				<title>Oleś Gergun</title>
				<meta name="keywords" content='oles, gergun, ui, design, type, typography, code'/>
				<meta name="description" content='oles, gergun, ui, design, type, typography, code'/>
				<meta charSet="utf-8"/>
			</Head>

			<h1>Index page</h1>
			<p>Lorem ipsum</p>

			<p><Link href={'/about'}><a>About</a></Link></p>
			<p><Link href={'/texts'}><a>Texts</a></Link></p>
		</>
	)
}
