import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function MenuMobile() {
    const router = useRouter()

    const nav = useRef(null)
    const workbench = useRef(null)
    const texts = useRef(null)
    const contact = useRef(null)
    const logo = useRef(null)

    const [open, setOpen] = useState(false)

    const [scrollDir, setScrollDir] = useState("scrolling down");

    const toggleMenu = () => {
        setOpen(!open)
    }

    useEffect(() => {
        workbench.current && (
            (router.pathname === "/" || router.pathname === "/[slug]") ? workbench.current.className = "__active" : workbench.current.className = "",
                router.pathname === "/texts" ? texts.current.className = "__active" : texts.current.className = "",
                router.pathname === "/contact" ? contact.current.className = "__active" : contact.current.className = ""
        )
    }, [router, open])

    useEffect(() => {
        setScrollDir("on top")
    }, [])

    useEffect(() => {
        const threshold = 1;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            if (scrollY < 10) {
                setScrollDir("on top")
            } else {
                scrollY > lastScrollY ? setScrollDir("scrolling down") : setScrollDir("scrolling up")
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        console.log(scrollDir)
        if (scrollDir === "on top") {
            logo.current.className = 'logo __margined'
            nav.current.className === '__fixed __pushed' ? nav.current.className = "__pushed" : nav.current.className = ''
        }
        if (scrollDir === "scrolling up") {
            nav.current.className === "__pushed" ? nav.current.className = '__fixed __pushed' : nav.current.className = '__fixed'
            logo.current.className = 'logo'
        }
        if (scrollDir === "scrolling down") {
            nav.current.className === "__pushed" ? nav.current.className = "__pushed" : nav.current.className = ''
            logo.current.className = 'logo'
        }

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    return (
        <>
            <nav ref={nav}>
                <button id="open" onClick={toggleMenu}>
                    <img src="/open.svg"/>
                </button>
                <div className="logo __margined" ref={logo}>
                    Oleś Gergun
                </div>
            </nav>

            <div className={`menu-pop ${open ? `__menu-opened` : `__menu-closed`} `}>
                <div className="menu-pop-top">
                    <button id="close" onClick={toggleMenu}>
                        <img src="/close.svg"/>
                    </button>
                    <div className='menu-info'>
                    </div>
                </div>
                <div className='menu-pop-opts'>
                    <div ref={workbench}>
                        <Link href={'/'}>
                            <a>
                                <h2>
                                    <span>Workbench</span>
                                </h2>
                            </a>
                        </Link>
                    </div>
                    <div ref={texts}>
                        <Link href={'/texts'}>
                            <a>
                                <h2>
                                    <span>Texts</span>
                                </h2>
                            </a>
                        </Link>
                    </div>
                    <div ref={contact}>
                        <Link href={'/contact'}>
                            <a>
                                <h2>
                                    <span>Contact</span>
                                </h2>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}