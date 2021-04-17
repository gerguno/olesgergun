import '../styles/main.scss'
import ProgressBar from "../components/loader/ProgressBar";
import About from "../components/About";
import {request} from "../lib/api";

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <ProgressBar/>
            <Component {...pageProps} />
            {/*<About/>*/}
        </>
    )
}