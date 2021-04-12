import Link from 'next/link'
import Head from "next/head";
import PostBar from "./PostBar";
import PostBarMobile from "./PostBarMobile";
import useWindowDimensions from "./useWindowDimensions";

export function PostLayout({children, title='Oleś Gergun'}) {
    const { height, width } = useWindowDimensions()
    return (
        <>
            <Head>
                <title>{title} @ Oleś Gergun</title>
                <meta name="keywords" content='oles, gergun, ui, design, type, typography, code'/>
                <meta name="description" content='oles, gergun, ui, design, type, typography, code'/>
                <meta charSet="utf-8"/>
            </Head>
            <div>
                {children}
            </div>
        </>
    )
}