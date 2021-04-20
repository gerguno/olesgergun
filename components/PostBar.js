import Link from "next/link";
import useWindowDimensions from "./useWindowDimensions";
import { useRouter } from 'next/router'
import {useEffect, useState, useRef} from "react";

export default function PostBar({ title, afterTitle, tags }) {
    const { height, width } = useWindowDimensions()
    const router = useRouter()

    const postBar = useRef(null)
    const [scrollDir, setScrollDir] = useState()

    const close = () => {
        router.push("/")
    }

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
            postBar.current.className = 'post-bar'
        }
        if (scrollDir === "scrolling down") {
            postBar.current.className = "post-bar __post-bar-fixed"
        }

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    return (
        <div className='post-bar' ref={postBar}>
            <div className="post-bar-left">
                <a onClick={close}>
                    <img src="/oi_small.png"/>
                </a>
                <div className="post-bar-title">
                    {title}
                    <span className="dark-grey">&nbsp;{afterTitle}</span>
                    <div className="tags">
                        {tags.split(',').map(t => {
                            return (
                                <div className="tag">
                                    {t}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="post-bar-right">
                <div className="post-bar-logo">
                    Oleś Gergun
                </div>
            </div>
        </div>
    )
}