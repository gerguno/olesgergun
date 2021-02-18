import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Menu({ color }) {

    const router = useRouter()

    const nav = useRef(null)
    const workbench = useRef(null)
    const about = useRef(null)
    const contact = useRef(null)

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        (router.pathname === "/" || router.pathname === "/[slug]") ? workbench.current.className = "__active" : workbench.current.className = ""
        router.pathname === "/about" ? about.current.className = "__active" : about.current.className = ""
        router.pathname === "/contact" ? contact.current.className = "__active" : contact.current.className = ""
    }, [router])

    if (!color) {
        useEffect(() => {
            window.onscroll = () => {
                window.pageYOffset > 5 ? setScrolled(true) : setScrolled(false)
            }
            return () => {
                window.onscroll = null
            }
        }, [])

        useEffect(() => {
            scrolled ? nav.current.className = '__black' : nav.current.className = ''
        }, [scrolled])
    }

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