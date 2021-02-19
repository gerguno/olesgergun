import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NextPost({ arr, color }) {
    const router = useRouter()
    const { asPath } = useRouter()
    const [link, setLink] = useState()

    useEffect(() => {
        const index = arr.findIndex(a => a.slug === asPath.substring(1))
        index < arr.length-1
            ?
                setLink(
                    <h2>
                        <Link href={`/[slug]`} as={`/${arr[index + 1].slug}`}>
                            <a>Next Project <span className="dark-grey">({arr[index + 1].title})</span></a>
                        </Link>
                    </h2>
                )
            :
                setLink(
                    <h2>
                        <Link href={`/[slug]`} as={`/${arr[0].slug}`}>
                            <a>Next Project <span className="dark-grey">({arr[0].title})</span></a>
                        </Link>
                    </h2>
                )
    }, [router])

    return (
        <div className={`next-post${color==='black' ? ` __next-post-white` : ''}`}>
                <img src="/bullet.svg"/>
                {link}
        </div>
    )
}