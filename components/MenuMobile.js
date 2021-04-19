import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "./useWindowDimensions";

export default function MenuMobile() {
    const { height, width } = useWindowDimensions()

    const router = useRouter()

    const nav = useRef(null)
    const workbench = useRef(null)
    const about = useRef(null)
    const contact = useRef(null)
    const logo = useRef(null)

    const [open, setOpen] = useState(false)
    const [scrollDir, setScrollDir] = useState()

    const toggleMenu = () => {
        setOpen(!open)
    }

    useEffect(() => {
        workbench.current && (
            (router.pathname === "/" || router.pathname === "/[slug]") ? workbench.current.className = "__active" : workbench.current.className = "",
                router.pathname === "/about" ? about.current.className = "__active" : about.current.className = "",
                router.pathname === "/contact" ? contact.current.className = "__active" : contact.current.className = ""
        )
    }, [router, open])

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
            nav.current.className = "__fixed"
        }

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    return (
        <>
            <nav ref={nav} style={open ? { height: '254px', boxShadow: 'rgb(0 0 0 / 50%) 0px 4px 4px' } : { height: '60px' }}>
                <div className='menu-group'>
                    <button id="open" onClick={toggleMenu}>
                        {!open ? <img src="/open.svg"/> : <img src="/close.svg"/>}
                    </button>
                    <div className="logo" ref={logo}>
                        Oleś Gergun
                    </div>
                </div>

                <div className='menu-pop-opts'>
                    <div ref={workbench}>
                        <Link href={'/'}>
                            <a><h2><span>Workbench</span></h2></a>
                        </Link>
                    </div>
                    <div ref={about}>
                        <Link href={'/about'}>
                            <a><h2><span>About</span></h2></a>
                        </Link>
                    </div>
                    <div ref={contact}>
                        <Link href={'/contact'}>
                            <a><h2><span>Contact</span></h2></a>
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="logo-separate-group">
                <img src="/oi.png"/>
                <div className="logo-text">
                    Architecting
                    {width < 380 ? <br/> : ' '}
                    the digital:
                    {width < 380 ? <br/>: ' '}
                    user experience design, front-end development and more
                </div>
            </div>
        </>
    )
}