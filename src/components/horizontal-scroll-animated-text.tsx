'use client'

import { gsap } from 'gsap'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'

export const HorizontalScrollAnimatedText = () => {
    useGSAP(() => {
        const scrollingText = document.getElementById('scrolling-text')

        if (scrollingText) {
            const split = new SplitType(scrollingText, { types: 'chars' })
            const chars = split.chars
            if (!chars) return

            gsap.set(scrollingText, {
                x: 50,
            })

            gsap.to(scrollingText, {
                xPercent: -100,
                ease: 'none',
                invalidateOnRefresh: true,
                scrollTrigger: {
                    trigger: '#scroll-text-container',
                    start: 'top top',
                    end: () =>
                        '+=' + (scrollingText.offsetWidth - window.innerWidth),
                    scrub: 1,
                    invalidateOnRefresh: true,
                    toggleActions: 'play none reverse none',
                    pin: '#scrolling-text',
                    pinSpacing: true,
                    fastScrollEnd: true,
                },
            })

            gsap.from(chars, {
                opacity: 0,
                y: 'random(-200, 200, 50)',
                rotate: 'random(-90, 90)',
                stagger: 0.1,
                duration: 2,
                ease: 'power4.out',
                invalidateOnRefresh: true,
                scrollTrigger: {
                    trigger: chars,
                    start: 'top bottom',
                    // end: 'bottom top',
                    end: () =>
                        '+=' + (scrollingText.offsetWidth - window.innerWidth),
                    scrub: 1,
                    once: true,
                },
            })
        }
    }, [])

    return (
        <div id='scroll-text-container' className='relative py-52'>
            <div
                id='scrolling-text'
                className='whitespace-nowrap text-4xl sm:text-6xl lg:text-8xl'
            >
                {`Need a website? From portfolios to full-stack apps, I've got you covered.`}
                {/* {`In need of a website? Look no further! Whether you need a
                personal portfolio, landing page, or a full-fledged Full-Stack
                Web Application, I've got you covered, Let's build something
                amazing! 🚀`} */}
            </div>
        </div>
    )
}
