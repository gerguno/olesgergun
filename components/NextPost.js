import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useWindowDimensions from "./useWindowDimensions";

export default function NextPost({ arr, color }) {
    const { height, width } = useWindowDimensions()

    const router = useRouter()
    const { asPath } = useRouter()
    const [link, setLink] = useState()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        const index = arr.findIndex(a => a.slug === asPath.substring(1).split('/')[1])

        index < arr.length-1
            ?
                setLink(
                    <Link href={`/work/[slug]`} as={`/work/${arr[index + 1].slug}`}>
                        <a>
                            <img src="/bullet.svg"/>
                            Next Project
                            {'\xa0'}
                            <span className="dark-grey">({arr[index + 1].title})</span>
                        </a>
                    </Link>
                )
            :
                setLink(
                    <Link href={`/work/[slug]`} as={`/work/${arr[0].slug}`}>
                        <a>
                            <img src="/bullet.svg"/>
                            Next Project
                            {'\xa0'}
                            <span className="dark-grey">({arr[0].title})</span>
                        </a>
                    </Link>
                )
    }, [router])

    return (
        <>
            <div className="next-post">
                {link}
            </div>
            <div className="go-top" style={{backgroundColor: color}}>
                <a onClick={scrollToTop}>
                    <img src="/top.svg"/>
                    Go to top
                </a>
            </div>
        </>
    )
}