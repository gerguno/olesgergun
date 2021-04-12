import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Menu() {
    const router = useRouter()

    const nav = useRef(null)
    const workbench = useRef(null)
    const texts = useRef(null)
    const contact = useRef(null)

    useEffect(() => {
        (router.pathname === "/" || router.pathname === "/work/[slug]") ? workbench.current.className = "__active" : workbench.current.className = ""
        router.pathname === "/texts" ? texts.current.className = "__active" : texts.current.className = ""
        router.pathname === "/contact" ? contact.current.className = "__active" : contact.current.className = ""
    }, [router])

    return (
        <nav ref={nav}>
            <div className="menu-group">
                <div className="menu">
                    <div ref={workbench}>
                        <Link href={'/'}><a>Workbench</a></Link>
                    </div>
                    <div ref={texts}>
                        <Link href={'/texts'}><a>Texts</a></Link>
                    </div>
                    <div ref={contact}>
                        <Link href={'/contact'}><a>Contact</a></Link>
                    </div>
                </div>
                <div className="logo">
                    Oleś Gergun
                </div>
            </div>
        </nav>
    )
}