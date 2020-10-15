import Link from 'next/link'

export default function About() {
	return (
		<>
			<h1>About page</h1>

			<p><Link href={'/'}><a>Home</a></Link></p>
		</>
	)
}
