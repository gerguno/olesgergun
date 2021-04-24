import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function PostMenu({ title, afterTitle }) {
    const nav = useRef(null)

    const [scrollDir, setScrollDir] = useState()

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
            if (scrollY < 50) {
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
        <nav ref={nav}>
            <div className="nav-left">
                <div className="nav-title">
                    <Link href={'/'}>
                        <a>
                            <img src="/back.svg"/>
                        </a>
                    </Link>
                    {title}
                    <span className="grey"> {afterTitle}</span>
                </div>
            </div>
            <div className="nav-right">
                <img src="/oi-small.png"/>
            </div>
        </nav>
    )
}