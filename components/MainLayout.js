import Link from 'next/link'
import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import useWindowDimensions from "./useWindowDimensions";
import { useRouter } from 'next/router'

export function MainLayout({children, title='Oleś Gergun'}) {
    const [clicked, setClicked] = useState(false)
    const [pushed, setPushed] = useState(false)
    const [aboutBlack, setAboutBlack] = useState(false)

    const { height, width } = useWindowDimensions()

    // const push = () => {
    //     !clicked && setClicked(true)
    //     setPushed(true)
    //
    //     let nav = document.querySelector('nav')
    //     nav.className = "__pushed"
    // }
    //
    // const unpush = () => {
    //     setPushed(false)
    //     let nav = document.querySelector('nav')
    //     nav.className = ""
    //
    //     let black = document.querySelector('about').lastChild
    //     if (aboutBlack) {
    //         black.className = "black fadeOut"
    //         setAboutBlack(false)
    //     }
    // }
    //
    // const toggleAboutBackground = () => {
    //     setAboutBlack(!aboutBlack)
    // }
    // useEffect(() => {
    //     let black = document.querySelector('about').lastChild
    //     if (clicked) {
    //         aboutBlack ? black.className = "black fadeIn" : black.className = "black fadeOut"
    //     }
    //
    //     let rightTitles = document.querySelectorAll('.right-title')
    //     Array.from(rightTitles).map(rt => {
    //         if (aboutBlack) {
    //             rt.style.color = '#676767'
    //         } else {
    //             rt.style.color = '#b2b2b2'
    //         }
    //     })
    // }, [aboutBlack])

    return (
        <>
            <Head>
                <title>{title} @ Oleś Gergun</title>
                <meta name="keywords" content='oles, gergun, ui, design, type, typography, code'/>
                <meta name="description" content='oles, gergun, ui, design, type, typography, code'/>
                <meta charSet="utf-8"/>
            </Head>
            {width > 767 ? <Menu/> : <MenuMobile/>}

            <main className={pushed ? '__pushed': ''}>
                {children}
            </main>
        </>
    )
}