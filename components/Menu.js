import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Menu() {
    const router = useRouter()

    const nav = useRef(null)
    const workbench = useRef(null)
    const texts = useRef(null)
    const contact = useRef(null)

    const [scrollDir, setScrollDir] = useState()

    useEffect(() => {
        (router.pathname === "/" || router.pathname === "/work/[slug]") ? workbench.current.className = "__active" : workbench.current.className = ""
        router.pathname === "/texts" ? texts.current.className = "__active" : texts.current.className = ""
        router.pathname === "/contact" ? contact.current.className = "__active" : contact.current.className = ""
    }, [router])

    useEffect(() => {
        const threshold = 5;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            if (scrollY < 202) {
                setScrollDir("on top")
            } else {
                scrollY > lastScrollY ? setScrollDir("scrolling down") : setScrollDir("scrolling up")
            }
            lastScrollY = scrollY > 5 ? scrollY : 5;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        if (scrollDir === "on top") {
            nav.current.className = ''
        }
        if (scrollDir === "scrolling down") {
            nav.current.className = "__nav-scrolled __fixed"
        }

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    return (
        <nav ref={nav}>
            <div className="nav-left">
                <div className="nav-logo">
                    <img src="/oi.png"/>
                </div>
            </div>
            <div className="nav-right">
                <div className="nav-right-top">
                    <div className="nav-right-menu">
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
                    <div className="nav-right-logo">
                        Oleś Gergun
                    </div>
                </div>
                <div className="nav-right-bottom">
                    Architecting the digital
                </div>
            </div>
        </nav>
    )
}