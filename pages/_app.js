import '../styles/main.scss'
import NextNProgress from "nextjs-progressbar";

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <NextNProgress
                color="#FFF"
                startPosition="0"
                stopDelayMs="200"
                height="2"
            />
            <Component {...pageProps} />
        </>
    )
}