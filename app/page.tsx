"use client"
import dynamic from 'next/dynamic'
import Swiper from './swiper';

const SwiperCSRComponent = dynamic(() => import('./swiper'), {ssr: false})

export default function Home() {
    return <Swiper />
    // return <SwiperCSRComponent/>
}

