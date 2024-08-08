'use client'

import { Technologies } from '@/lib/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React from 'react'

let anim: gsap.core.Tween[] | undefined

export const TechnologiesComponent = () => {
    useGSAP(() => {
        const technologyLinks = document.querySelectorAll('#technologies>a')
        gsap.fromTo(
            technologyLinks,
            {
                opacity: 0,
                y: 100,
            },
            {
                duration: 1,
                stagger: 0.05,
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: '#technologies',
                    start: 'top 80%',
                },
            },
        )

        anim = Array.from(technologyLinks).map((link, i) =>
            gsap.to(link, {
                paused: true,
                rotate: i % 2 === 0 ? 12 : -12,
                duration: 0.2,
                delay: 0,
                scale: 1.2,
                ease: 'power4.inOut',
                filter: 'invert(1)',
            }),
        )
    }, [])

    return (
        <section
            id='technologies'
            className='flex flex-wrap items-center justify-around gap-10 px-8 pb-32'
        >
            {Technologies.map((tech, i) => (
                <a
                    key={tech.alt}
                    href={tech.url}
                    target='_blank'
                    rel='noreferrer'
                    className='shrink-0 cursor-pointer'
                    onMouseEnter={() => anim?.at(i)?.play()}
                    onMouseLeave={() => anim?.at(i)?.reverse()}
                >
                    <Image src={tech.icon} alt={tech.alt} />
                </a>
            ))}
        </section>
    )
}
