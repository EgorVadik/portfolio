'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const Overlay = () => {
    useGSAP(() => {
        gsap.to('#stripes-container>*', {
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            yPercent: 'random(-100,100)',
            ease: 'power4.inOut',
            onComplete: () => {
                document.getElementById('overlay')?.remove()
            },
        })
    }, [])

    return (
        <div
            id='overlay'
            className='fixed inset-0 z-50 flex h-full w-full items-center justify-center'
        >
            <div id='stripes-container' className='relative flex h-full w-full'>
                {Array.from({ length: 25 }).map((_, index) => (
                    <div key={index} className='h-full grow bg-secondary' />
                ))}
                <h1 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-3xl md:text-5xl lg:text-9xl'>
                    Loading...
                </h1>
            </div>
        </div>
    )
}
