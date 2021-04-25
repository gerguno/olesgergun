import useWindowDimensions from "./useWindowDimensions";
import Link from "next/link";

export default function PostBar({ color }) {
    const { height, width } = useWindowDimensions()

    return (
        <div className="post-bar" style={{backgroundColor: color}}>
            <div className="left">
                <div className="logo">
                    <Link href={'/'}><a>Oleś Gergun</a></Link>
                </div>
                <div className="contacts">
                    {width > 575
                        ?
                        <>
                            Email: <a href="mailto:hello@olesgergun.com">hello@olesgergun.com</a> <br/>
                            Social: <a href="https://www.instagram.com/olesgergun" target="_blank">Instagram</a>, <a href="https://www.facebook.com/olesgergun" target="_blank">Facebook</a>, <a href="https://github.com/gerguno" target="_blank">GitHub</a>, <br/>
                            <a href="https://www.instagram.com/kyiv_type_digest" target="_blank">Kyiv Type Digest</a>, <a href="https://www.instagram.com/kyiv_type_foundry" target="_blank">Kyiv Type Foundry</a> <br/>
                            © 2021 All rights reserved
                        </>
                        :
                        <>
                            Email: <a href="mailto:hello@olesgergun.com">hello@olesgergun.com</a> <br/>
                            Social: <a href="https://www.instagram.com/olesgergun" target="_blank">Instagram</a>, <a href="https://www.facebook.com/olesgergun" target="_blank">Facebook</a>, <br/>
                            <a href="https://www.instagram.com/kyiv_type_foundry" target="_blank">Kyiv Type Foundry</a>, <a href="https://github.com/gerguno" target="_blank">GitHub</a> <br/>
                            © 2021 All rights reserved
                        </>
                    }
                </div>
            </div>
            <div className="right">
                <Link href={'/'}>
                    <a>
                        <img src="/oi.png"/>
                    </a>
                </Link>
            </div>
        </div>
    )
}