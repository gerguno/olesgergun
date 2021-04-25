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
            <main>
                {children}
            </main>
        </>
    )
}