import Link from 'next/link'
import Head from "next/head";
import { useRef, useState, useEffect } from "react";

export function MainLayout({children, title='Oleś Gergun'}) {
    const [clicked, setClicked] = useState(false)
    const [pushed, setPushed] = useState(false)
    const [aboutBlack, setAboutBlack] = useState(false)

    const push = () => {
        !clicked && setClicked(true)
        setPushed(true)
    }

    const unpush = () => {
        setPushed(false)
        let black = document.querySelector('about').lastChild
        if (aboutBlack) {
            black.className = "black fadeOut"
            setAboutBlack(false)
        }
    }

    const toggleAboutBackground = () => {
        setAboutBlack(!aboutBlack)
    }

    useEffect(() => {
        let black = document.querySelector('about').lastChild
        if (clicked) {
            aboutBlack ? black.className = "black fadeIn" : black.className = "black fadeOut"
        }
    }, [aboutBlack])

    return (
        <>
            <Head>
                <title>{title} @ Oleś Gergun</title>
                <meta name="keywords" content='oles, gergun, ui, design, type, typography, code'/>
                <meta name="description" content='oles, gergun, ui, design, type, typography, code'/>
                <meta charSet="utf-8"/>
            </Head>
            <main className={pushed ? '__pushed': ''}>
                {children}
            </main>

            <a className={`open-about __white-button ${clicked ? pushed ? `fadeOut` : `fadeIn` : ''}`} onClick={push}>
                <img src="/more.svg"/>
            </a>
            <a className={`back ${aboutBlack ? `__black-button` : `__white-button`} ${clicked ? pushed ? `fadeIn` : `fadeOut` : ''}`} onClick={unpush}>
                <img src="/back.svg"/><span>Back</span>
            </a>
            <a className={`paint ${aboutBlack ? `__black-button` : `__white-button`} ${clicked ? pushed ? `fadeIn` : `fadeOut` : ''}`} onClick={toggleAboutBackground}>
                {aboutBlack ? <img src="/p_fill.svg"/> : <img src="/p_bw.svg"/>}
            </a>
        </>
    )
}