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

    return (
        <>
            <nav ref={nav} style={open ? { height: '254px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' } : { height: '42px' }}>
                <div className='menu-group'>
                    <button id="open" onClick={toggleMenu}>
                        {!open ? <img src="/open.svg"/> : <img src="/close.svg"/>}
                    </button>
                    <div className="logo __margined" ref={logo}>
                        Oleś Gergun
                    </div>
                </div>

                <div className='menu-pop-opts'>
                    <div ref={workbench}>
                        <Link href={'/'}>
                            <a><h2><span>Workbench</span></h2></a>
                        </Link>
                    </div>
                    <div ref={texts}>
                        <Link href={'/texts'}>
                            <a><h2><span>Texts</span></h2></a>
                        </Link>
                    </div>
                    <div ref={contact}>
                        <Link href={'/contact'}>
                            <a><h2><span>Contact</span></h2></a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}