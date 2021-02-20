import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function MenuForHome() {
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
        const homeMediumHeight = document.querySelector(".home-medium").offsetHeight;
        let lastScrollY = window.pageYOffset;
        let nowScrollY = window.pageYOffset;
        let ticking = false;

        console.log(homeMediumHeight)

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
        console.log(scrollDir);

        if (scrollDir === "scrolling up") {
            nav.current.className = 'home-menu __fixed'
        }
        if (scrollDir === "scrolling down") {
            nav.current.className = 'home-menu'
        }

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    return (
        <nav className='home-menu' ref={nav}>
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
                <span className="grey">(Info)</span> Oleś Gergun is a digital designer and developer
            </div>
        </nav>
    )
}