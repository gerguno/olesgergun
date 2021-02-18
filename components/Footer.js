import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Footer({ color }) {

    const nav = useRef(null)
    const workbench = useRef(null)
    const about = useRef(null)
    const contact = useRef(null)

    return (
        <div className={color && `__${color}`} ref={nav}>
            <div>
                <Link href={'/'}><a>Workbench</a></Link>
            </div>
            <div>
                <Link href={'/about'}><a>About</a></Link>
            </div>
            <div>
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
        </>
    )
}