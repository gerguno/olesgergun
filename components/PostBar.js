import Link from "next/link";
import useWindowDimensions from "./useWindowDimensions";
import { useRouter } from 'next/router'
import {useEffect, useState} from "react";

export default function PostBar({ title, afterTitle }) {
    const { height, width } = useWindowDimensions()
    const router = useRouter()

    const close = () => {
        router.push("/")
    }

    return (
        <div className='post-bar'>
            <div className="post-bar-left">
                <a className='post-bar-back __white-button' onClick={close}>
                    <img src="/back.svg"/>
                    <span>Back</span>
                </a>
                <div className="post-bar-title">
                    <img src="/bullet.svg"/> {title}
                    <span className="grey">&nbsp;{afterTitle}</span>
                </div>
            </div>
            <div className="post-bar-right">
                <div className="post-bar-logo">
                    Oleś Gergun
                </div>
            </div>
        </div>
    )
}