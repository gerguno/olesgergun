import '../styles/main.scss'
import ProgressBar from "../components/loader/ProgressBar";
import About from "../components/About";

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <ProgressBar/>
            <Component {...pageProps} />
            <About/>
        </>
    )
}