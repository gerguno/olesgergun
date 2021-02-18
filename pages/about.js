import {MainLayout} from "../components/MainLayout";
import Menu from "../components/Menu";

export default function About() {
    return (
        <>
            <Menu/>
            <MainLayout title={'About'}>
                <h1>About page</h1>
            </MainLayout>
        </>
    )
}
