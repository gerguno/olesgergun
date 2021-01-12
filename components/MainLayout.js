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
                <div>
                    <Link href={'/'}><a>Workbench</a></Link>
                </div>
                <div>
                    <Link href={'/texts'}><a>Texts</a></Link>
                </div>
                <div>
                    <Link href={'/about'}><a>About</a></Link>
                </div>
                <div>
                    <Link href={'/contact'}><a>Contact</a></Link>
                </div>
                <div>
                    <span className="dark-grey">(Info)</span> Oleś Gergun is a designer & developer with cultural studies background. Strategic user experiences, type and code.
                </div>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}