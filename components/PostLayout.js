import Head from "next/head";

export function PostLayout({children, title='Oleś Gergun', description='Oleś Gergun is a digital designer and developer based in Kyiv'}) {
    return (
        <>
            <Head>
                <title>{title} @ Oleś Gergun</title>
                <meta name="description" content={description}/>
                <meta charSet="utf-8"/>
            </Head>
            <div>
                {children}
            </div>
        </>
    )
}