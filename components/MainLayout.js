import Head from "next/head";

export function MainLayout({children, title='Oleś Gergun'}) {
    return (
        <>
            <Head>
                <title>{title} @ Oleś Gergun</title>
                <meta name="description" content='Oleś Gergun is a digital designer and developer based in Kyiv'/>
                <meta property="og:image" content="/thumbnail.jpg" />
                <meta charSet="utf-8"/>
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}