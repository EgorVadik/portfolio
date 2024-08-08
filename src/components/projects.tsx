'use client'

import { projects } from '@/lib/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import SplitType from 'split-type'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card'
import Link from 'next/link'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { HoverWrapper } from './hover-wrapper'

export const Projects = () => {
    useGSAP(() => {
        const elements = gsap.utils.toArray(
            '#projects-section>div',
        ) as HTMLElement[]

        elements.forEach((element, index) => {
            const tl = gsap.timeline({
                defaults: {
                    opacity: 0,
                    duration: 1.5,
                    ease: 'power4.inOut',
                },
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%',
                    end: 'bottom 80%',
                    toggleActions: 'play none none none',
                },
            })

            gsap.from(element, {
                scale: 0.6,
                rotationX: '45deg',
                clearProps: 'all',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 70%',
                    scrub: 1,
                },
            })

            tl.from(
                element.querySelector('img'),
                {
                    x: index % 2 === 0 ? 100 : -100,
                },
                0,
            )

            const split = new SplitType(element.querySelector('h2')!, {
                types: 'chars',
            })
            const chars = split.chars
            tl.from(
                chars,
                {
                    stagger: 0.1,
                    y: 10,
                },
                0,
            )
            tl.from(
                element.querySelectorAll('.tech-stack>span'),
                {
                    stagger: 0.1,
                    y: 10,
                },
                0,
            )

            const splitLinks = new SplitType(element.querySelectorAll('a')!, {
                types: 'chars',
            })
            const linkChars = splitLinks.chars
            tl.from(
                linkChars,
                {
                    stagger: 0.1,
                    y: 10,
                },
                0,
            )
        })
    }, [])

    return (
        <section id='projects-section' className='container'>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className='flex flex-col items-center justify-between border-b lg:flex-row lg:gap-20 lg:even:flex-row-reverse'
                >
                    <div>
                        <h2 className='whitespace-nowrap text-2xl font-bold sm:text-4xl'>
                            {project.name}
                        </h2>
                        <div className='tech-stack flex flex-wrap gap-2 pt-5'>
                            {project.techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className='rounded-md bg-secondary-foreground px-2 py-1 text-sm font-semibold text-secondary sm:text-base'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a
                            href={project.projectLink}
                            target='_blank'
                            rel='noreferrer'
                            className='group relative block w-fit pt-4 text-lg *:duration-300 hover:*:scale-105 sm:text-2xl'
                        >
                            <span>Check it out!</span>
                            <span className='absolute bottom-0 right-0 h-px w-0 bg-primary duration-300 group-hover:left-0 group-hover:w-full' />
                        </a>
                        <HoverCard openDelay={200}>
                            <HoverCardTrigger asChild>
                                <Link
                                    href={`/project/${project.name.replace(/ /g, '-')}`}
                                    className='group relative block w-fit text-lg *:duration-300 hover:*:scale-105 sm:text-2xl'
                                >
                                    <span>More Info</span>
                                    <span className='absolute bottom-0 right-0 h-px w-0 bg-primary duration-300 group-hover:left-0 group-hover:w-full' />
                                </Link>
                            </HoverCardTrigger>
                            <HoverCardContent
                                side='bottom'
                                align='start'
                                className='border-0 p-0 ring-4 ring-primary'
                            >
                                <HoverWrapper text='sm'>
                                    <Carousel
                                        plugins={[
                                            Autoplay({
                                                delay: 2000,
                                            }),
                                        ]}
                                        opts={{
                                            loop: true,
                                        }}
                                    >
                                        <CarouselContent>
                                            {project.imgs.map((img, index) => (
                                                <CarouselItem key={index}>
                                                    <Image
                                                        src={img.src}
                                                        alt={img.alt}
                                                        width={1080 / 4}
                                                        height={800 / 4}
                                                        className='rounded-lg'
                                                    />
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>
                                </HoverWrapper>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                    <Image
                        src={project.imgs[0].src}
                        alt={project.name}
                        className='my-5 h-full w-full'
                        width={1080}
                        height={800}
                        loading='eager'
                    />
                </div>
            ))}
        </section>
    )
}
