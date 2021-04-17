import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NextPost({ arr, color }) {
    const router = useRouter()
    const { asPath } = useRouter()
    const [link, setLink] = useState()

    useEffect(() => {
        const index = arr.findIndex(a => a.slug === asPath.substring(1).split('/')[1])

        index < arr.length-1
            ?
                setLink(
                    <Link href={`/work/[slug]`} as={`/work/${arr[index + 1].slug}`}>
                        <a>
                            <img src="/bullet.svg"/>
                            <h2>
                                Next Project <span className="grey">({arr[index + 1].title})</span>
                            </h2>
                            <img src="/forward.svg"/>
                        </a>
                    </Link>
                )
            :
                setLink(
                    <Link href={`/work/[slug]`} as={`/work/${arr[0].slug}`}>
                        <a>
                            <img src="/bullet.svg"/>
                            <h2>
                                Next Project <span className="grey">({arr[0].title})</span>
                            </h2>
                            <img src="/forward.svg"/>
                        </a>
                    </Link>
                )
    }, [router])

    return (
        <div className="next-post">
            {link}
        </div>
    )
}