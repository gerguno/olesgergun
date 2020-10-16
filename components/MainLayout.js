import Link from 'next/link'
import Head from "next/head";

export function MainLayout({children, title='Oleś Gergun'}) {
    return (
        <>
            <Head>
                <title>{title} @ Oleś Gergun</title>
                <meta name="keywords" content='oles, gergun, ui, design, type, typography, code'/>
                <meta name="description" content='oles, gergun, ui, design, type, typography, code'/>
                <meta charSet="utf-8"/>
            </Head>
            <nav>
                <Link href={'/'}><a>Workbench</a></Link>
                <Link href={'/texts'}><a>Texts</a></Link>
                <Link href={'/about'}><a>About</a></Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}