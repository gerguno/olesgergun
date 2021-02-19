import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Menu({ color }) {
    const router = useRouter()

    const nav = useRef(null)
    const workbench = useRef(null)
    const about = useRef(null)
    const contact = useRef(null)

    const [scrollDir, setScrollDir] = useState("scrolling down");

    useEffect(() => {
        (router.pathname === "/" || router.pathname === "/[slug]") ? workbench.current.className = "__active" : workbench.current.className = ""
        router.pathname === "/about" ? about.current.className = "__active" : about.current.className = ""
        router.pathname === "/contact" ? contact.current.className = "__active" : contact.current.className = ""
    }, [router])

    useEffect(() => {
        const threshold = 5;
        let lastScrollY = window.pageYOffset;
        let nowScrollY = window.pageYOffset;
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
            !color ? nav.current.className = '' : ''
        }
        if (scrollDir === "scrolling up") {
            !color ? nav.current.className = '__fixed __white' : nav.current.className = `__fixed __${color}`
        }
        if (scrollDir === "scrolling down") {
            nav.current.className = ''
        }

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    return (
        <nav className={color && `__${color}`} ref={nav}>
            <div ref={workbench}>
                <Link href={'/'}><a>Workbench</a></Link>
            </div>
            <div ref={about}>
                <Link href={'/about'}><a>About</a></Link>
            </div>
            <div ref={contact}>
                <Link href={'/contact'}><a>Contact</a></Link>
            </div>
            <div>
                {color === 'black'
                    ?
                        <><span className="dark-grey">(Info)</span> Oleś Gergun is a digital designer and developer</>
                    :
                        <><span className="grey">(Info)</span> Oleś Gergun is a digital designer and developer</>
                }

            </div>
        </nav>
    )
}