import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Footer({ color }) {

    return (
        <div className={`footer${color==='black' ? ` __${color}` : ''}`}>
            <div>
                © 2021 Kyiv, Ukraine
            </div>
            <div>
                <Link href={`https://www.instagram.com/olesgergun/`}>
                    <a target="_blank">
                        Instagram
                    </a>
                </Link>
                <Link href={`https://www.facebook.com/oles.gergun/`}>
                    <a target="_blank">
                        Facebook
                    </a>
                </Link>
                <Link href={`https://github.com/gerguno`}>
                    <a target="_blank">
                        GitHub
                    </a>
                </Link>
            </div>
        </div>
    )
}