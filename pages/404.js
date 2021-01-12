import Link from 'next/link'
import {MainLayout} from "../components/MainLayout"
import classes from '../styles/error.module.scss'

export default function ErrorPage() {
    return (
        <MainLayout>
            <h1>Error 404</h1>
            <p>Such page doesn't exist. <Link href={'/'}><a>Please go back</a></Link></p>
        </MainLayout>
    )
}