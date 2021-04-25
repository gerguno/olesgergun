import '../styles/main.scss'
import ProgressBar from "../components/loader/ProgressBar";

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <ProgressBar/>
            <Component {...pageProps} />
        </>
    )
}