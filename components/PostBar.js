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
                            Social: <a href="https://www.instagram.com/olesgergun">Instagram</a>, <a href="https://www.facebook.com/olesgergun">Facebook</a>, <a href="https://github.com/gerguno">GitHub</a>, <br/>
                            <a href="https://www.instagram.com/kyiv_type_digest">Kyiv Type Digest</a>, <a href="https://www.instagram.com/kyiv_type_foundry">Kyiv Type Foundry</a> <br/>
                            © 2021 All rights reserved
                        </>
                        :
                        <>
                            Email: <a href="mailto:hello@olesgergun.com">hello@olesgergun.com</a> <br/>
                            Social: <a href="https://www.instagram.com/olesgergun">Instagram</a>, <a href="https://www.facebook.com/olesgergun">Facebook</a>, <br/>
                            <a href="https://www.instagram.com/kyiv_type_foundry">Kyiv Type Foundry</a>, <a href="https://github.com/gerguno">GitHub</a> <br/>
                            © 2021 All rights reserved
                        </>
                    }
                </div>
            </div>
            <div className="right">
                <img src="/oi.png"/>
            </div>
        </div>
    )
}