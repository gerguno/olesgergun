import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Footer() {

    return (
        <div className="footer">
            <div>
                Email: {' '}
                <Link href={`mailto:hello@olesgergun.com`}>
                    <a target="_blank">
                        hello@olesgergun.com
                    </a>
                </Link>
                <br/>
                Social: {' '}
                <Link href={`https://www.instagram.com/olesgergun/`}>
                    <a target="_blank">
                        Instagram
                    </a>
                </Link>, {' '}
                <Link href={`https://www.facebook.com/oles.gergun/`}>
                    <a target="_blank">
                        Facebook
                    </a>
                </Link>, {' '}
                <Link href={`https://github.com/gerguno`}>
                    <a target="_blank">
                        GitHub
                    </a>
                </Link>, {' '}
                <Link href={`/`}>
                    <a target="_blank">
                        Kyiv Type Foundry
                    </a>
                </Link>, {' '}
                <Link href={`/`}>
                    <a target="_blank">
                        Kyiv Type Digest
                    </a>
                </Link>
                <br/>
                © 2021 All rights reserved.
            </div>
        </div>
    )
}