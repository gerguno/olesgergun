import Head from "next/head";

export function PostLayout({children, title='Oleś Gergun'}) {
    return (
        <>
            <Head>
                <title>{title} @ Oleś Gergun</title>
                <meta name="description" content='oles, gergun, ui, design, type, typography, code'/>
                <meta charSet="utf-8"/>
            </Head>
            <div>
                {children}
            </div>
        </>
    )
}