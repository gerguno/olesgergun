import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function MenuMobile() {
    const router = useRouter()

    const nav = useRef(null)
    const workbench = useRef(null)
    const about = useRef(null)
    const contact = useRef(null)

    const [open, setOpen] = useState(false)

    const [scrollDir, setScrollDir] = useState("scrolling down");

    const toggleMenu = () => {
        setOpen(!open)
    }


    useEffect(() => {
        (router.pathname === "/" || router.pathname === "/[slug]") ? workbench.current.className = "__active" : workbench.current.className = ""
        router.pathname === "/about" ? about.current.className = "__active" : about.current.className = ""
        router.pathname === "/contact" ? contact.current.className = "__active" : contact.current.className = ""
    }, [router])

    useEffect(() => {
        open ? document.body.style = "position: fixed; overflow: hidden;" : document.body.style = ""
    }, [open])

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
            if (scrollY < 5) {
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
        // console.log(scrollDir);

        if (scrollDir === "on top") {
            nav.current.className = `home-menu${open ? ' menu-opened' : ''}`
        }
        if (scrollDir === "scrolling up") {
            nav.current.className = `home-menu __fixed __white${open ? ' menu-opened' : ''}`
        }
        if (scrollDir === "scrolling down") {
            nav.current.className = `home-menu${open ? ' menu-opened' : ''}`
        }

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    return (
        <nav className={`home-menu${open ? ' menu-opened __fixed' : ''}`} ref={nav}>
            <div className="home-menu-top">
                <button id="open" onClick={toggleMenu}>
                    {!open
                        ?
                        <img src="/open.svg"/>
                        :
                        <img src="/close.svg"/>
                    }
                </button>
                <div className='home-menu-info'>
                    <span className="grey">(Info)</span> Oleś Gergun is a digital designer and developer
                </div>
            </div>
            <div className='home-menu-opts'>
                <div ref={workbench}>
                    <Link href={'/'}>
                        <a><h2>Workbench</h2></a>
                    </Link>
                </div>
                <div ref={about}>
                    <Link href={'/about'}>
                        <a><h2>About</h2></a>
                    </Link>
                </div>
                <div ref={contact}>
                    <Link href={'/contact'}>
                        <a><h2>Contact</h2></a>
                    </Link>
                </div>
            </div>
            {/*}*/}

        </nav>
    )
}