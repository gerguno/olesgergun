import {MainLayout} from "../components/MainLayout";
import Menu from "../components/Menu";
import useWindowDimensions from "../components/useWindowDimensions";
import MenuMobile from "../components/MenuMobile";

export default function About() {
    const { height, width } = useWindowDimensions()
    return (
        <>
            {width > 768 ? <Menu/> : <MenuMobile/>}
            <MainLayout title={'About'}>
                <h1>About page</h1>
            </MainLayout>
        </>
    )
}
