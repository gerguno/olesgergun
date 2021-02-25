import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function MenuMobile({ color }) {
    const router = useRouter()

    const nav = useRef()
    const workbench = useRef()
    const about = useRef()
    const contact = useRef()

    const [open, setOpen] = useState(false)

    const [scrollDir, setScrollDir] = useState("scrolling down");

    const toggleMenu = () => {
        setOpen(!open)
    }

    useEffect(() => {
        workbench.current && (
            (router.pathname === "/" || router.pathname === "/[slug]") ? workbench.current.className = "__active" : workbench.current.className = "",
                router.pathname === "/about" ? about.current.className = "__active" : about.current.className = "",
                router.pathname === "/contact" ? contact.current.className = "__active" : contact.current.className = ""
        )
        open ? document.body.style = "overflow: hidden;" : document.body.style = ""
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
            !color ? nav.current.className = '' : nav.current.className = `__${color}`
        }
        if (scrollDir === "scrolling up") {
            !color ? nav.current.className = '__fixed __white' : nav.current.className = `__fixed __${color}`
        }
        if (scrollDir === "scrolling down") {
            !color ? nav.current.className = '' : nav.current.className = `__${color}`
        }

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    return (
        <>
            <nav className={color && `__${color}`} ref={nav}>
                <button id="open" onClick={toggleMenu}>
                    <img src="/open.svg"/>
                </button>
                <div className='menu-info'>
                    {color === 'black'
                        ?
                        <><span className="dark-grey">(Info)</span> Oleś Gergun is a digital designer and developer</>
                        :
                        <><span className="grey">(Info)</span> Oleś Gergun is a digital designer and developer</>
                    }
                </div>
            </nav>

            <div className={`menu-pop ${color ? `__${color}` : `__white`} ${open ? `__menu-opened` : `__menu-closed`} `}>
                <div className="menu-pop-top">
                    <button id="close" onClick={toggleMenu}>
                        <img src="/close.svg"/>
                    </button>
                    <div className='menu-info'>
                        {color === 'black'
                            ?
                            <><span className="dark-grey">(Info)</span> Oleś Gergun is a digital designer and developer</>
                            :
                            <><span className="grey">(Info)</span> Oleś Gergun is a digital designer and developer</>
                        }
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
                    <div ref={about}>
                        <Link href={'/about'}>
                            <a>
                                <h2>
                                    <span>About</span>
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