'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import SplitType from 'split-type'

let img1: gsap.core.Tween | undefined
let img2: gsap.core.Tween | undefined
let img3: gsap.core.Tween | undefined

export const Intro = () => {
    useGSAP(() => {
        img1 = gsap.to('#my-images-container>img:nth-child(1)', {
            paused: true,
            xPercent: -75,
            yPercent: 16,
            rotate: '-24deg',
            ease: 'power4.inOut',
            zIndex: 20,
        })

        img2 = gsap.to('#my-images-container>img:nth-child(2)', {
            paused: true,
            xPercent: -15,
            yPercent: 8,
            rotate: '-8deg',
            ease: 'power4.inOut',
            zIndex: 20,
        })

        img3 = gsap.to('#my-images-container>img:nth-child(3)', {
            paused: true,
            xPercent: 45,
            yPercent: 8,
            rotate: '8deg',
            ease: 'power4.inOut',
            zIndex: 20,
        })

        const heading = document.getElementById('heading')
        const subText = document.getElementById('sub-text')
        const images = document.querySelectorAll('#my-images-container>img')

        const tl = gsap.timeline({
            defaults: {
                stagger: 0.5,
            },
        })

        if (heading) {
            const split = new SplitType(heading, { types: 'chars' })
            const chars = split.chars

            tl.fromTo(
                chars,
                {
                    opacity: 0,
                    y: 100,
                },
                {
                    delay: 2,
                    opacity: 1,
                    y: 0,
                    stagger: {
                        amount: 0.2,
                        ease: 'circ.inOut',
                        each: 0.05,
                        from: 'center',
                    },
                    onComplete: () => {
                        ScrollTrigger.create({
                            scrub: true,
                            trigger: heading,
                            start: 'top 10%',
                            end: `+=${heading.offsetHeight * 3}`,
                            animation: gsap.to(chars, {
                                opacity: 0,
                                y: -100,
                                duration: 1,
                                stagger: {
                                    amount: 0.2,
                                    ease: 'circ.inOut',
                                    each: 0.05,
                                    from: 'center',
                                },
                            }),
                        })
                    },
                },
            )
        }

        if (subText) {
            const split = new SplitType(subText, { types: 'words' })
            const words = split.words

            tl.fromTo(
                words,
                {
                    opacity: 0,
                    y: 100,
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.02,
                    ease: 'circ.inOut',
                    onComplete: () => {
                        ScrollTrigger.create({
                            scrub: true,
                            trigger: subText,
                            start: 'top 5%',
                            end: `+=${subText.offsetHeight}`,
                            animation: gsap.to(words, {
                                opacity: 0,
                                y: -100,
                                duration: 1,
                                stagger: 0.02,
                                ease: 'circ.inOut',
                            }),
                        })
                    },
                },
            )
        }

        tl.fromTo(
            images,
            {
                opacity: 0,
                x: 100,
            },
            {
                opacity: 1,
                x: 0,
                stagger: 0.05,
                ease: 'circ.inOut',
            },
        )
    }, [])

    return (
        <div className='container relative grid items-center px-5 text-5xl font-bold md:h-[500px] md:grid-cols-3 md:text-6xl'>
            <div className='relative z-10 col-span-2 text-center md:text-left'>
                <h1 id='heading'>
                    Hi there,
                    <br className='xs:hidden' /> {`I'm`} Ali.
                </h1>
                <div id='sub-text'>
                    <div className='pb-5 pt-7 text-sm font-medium text-muted-foreground md:w-3/4'>
                        I graduated from the Arab Academy for Science,
                        Technology and Maritime Transport (AAST) with a degree
                        in Computer Science. My focus is on back-end
                        development, and I also have experience in front-end
                        technologies. I am highly motivated to learn new
                        technologies and adapt quickly. Native language Arabic,
                        second language English.
                    </div>
                </div>
            </div>
            <div className='col-span-2 row-start-1 m-auto md:row-start-auto'>
                <div className='mb-10 rounded-lg md:absolute md:-top-20 md:right-0'>
                    <div
                        id='my-images-container'
                        className='relative aspect-[5_/_7] h-[480px] w-80 rounded-lg sm:h-[550px] sm:w-96'
                        onMouseEnter={() => {
                            img1?.play()
                            img2?.play()
                            img3?.play()
                        }}
                        onMouseLeave={() => {
                            img1?.reverse()
                            img2?.reverse()
                            img3?.reverse()
                        }}
                    >
                        <Image
                            src='/images/me/ali-tamer-3.jpg'
                            alt='Ali Tamer Third'
                            className='absolute aspect-[5_/_7] h-[480px] w-80 -translate-x-[10%] -rotate-3 rounded-lg bg-white/20 object-cover ease-fast-start sm:h-[550px] sm:w-96'
                            width={960}
                            height={1280}
                            onMouseEnter={() => {
                                img1?.play()
                                img2?.play()
                                img3?.play()
                            }}
                            onMouseLeave={() => {
                                img1?.reverse()
                                img2?.reverse()
                                img3?.reverse()
                            }}
                        />
                        <Image
                            src='/images/me/ali-tamer-2.jpg'
                            alt='Ali Tamer Second'
                            className='absolute aspect-[5_/_7] rotate-2 rounded-md bg-white/20 object-cover ease-fast-start'
                            width={960}
                            height={1280}
                            onMouseEnter={() => {
                                img1?.play()
                                img2?.play()
                                img3?.play()
                            }}
                            onMouseLeave={() => {
                                img1?.reverse()
                                img2?.reverse()
                                img3?.reverse()
                            }}
                        />
                        <Image
                            src='/images/me/ali-tamer.jpg'
                            alt='Ali Tamer'
                            className='absolute aspect-[5_/_7] -translate-x-[6%] rotate-3 rounded-md bg-white/20 object-cover ease-fast-start'
                            width={960}
                            height={1280}
                            onMouseEnter={() => {
                                img1?.play()
                                img2?.play()
                                img3?.play()
                            }}
                            onMouseLeave={() => {
                                img1?.reverse()
                                img2?.reverse()
                                img3?.reverse()
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
