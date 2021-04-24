import Link from 'next/link'
import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import useWindowDimensions from "./useWindowDimensions";
import { useRouter } from 'next/router'

export function MainLayout({children, title='Oleś Gergun'}) {
    return (
        <>
            <Head>
                <title>{title} @ Oleś Gergun</title>
                <meta name="keywords" content='oles, gergun, ui, design, type, typography, code'/>
                <meta name="description" content='oles, gergun, ui, design, type, typography, code'/>
                <meta charSet="utf-8"/>
            </Head>
            <Menu/>
            <main>
                {children}
            </main>
        </>
    )
}