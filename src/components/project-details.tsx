'use client'

import { useDrag } from '@/hooks/use-drag'
import { Project } from '@/lib/types'
import Image from 'next/image'
import React from 'react'
import { HoverWrapper } from './hover-wrapper'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitType from 'split-type'

type ProjectDetailsProps = {
    project: Project
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
    const { track, handleOnDown, handleOnUp, handleOnMove } = useDrag()

    useGSAP(() => {
        const images = document.querySelectorAll(
            '.image',
        ) as NodeListOf<HTMLImageElement>

        const element = document.getElementById('project-details-container')

        if (!element) return

        gsap.from(images, {
            x: 100,
            clearProps: 'all',
            stagger: 0.1,
            ease: 'power4.inOut',
        })

        const tl = gsap.timeline({
            defaults: {
                opacity: 0,
                duration: 0.7,
                ease: 'power4.inOut',
            },
        })

        const split = new SplitType(element.querySelector('h2')!, {
            types: 'chars',
        })
        const chars = split.chars
        tl.from(chars, {
            stagger: 0.1,
            y: 10,
        })

        const splitDesc = new SplitType(element.querySelector('p')!, {
            types: 'words',
        }).words

        tl.from(
            splitDesc,
            {
                stagger: 0.03,
                y: 10,
            },
            1,
        )

        tl.from(
            element.querySelectorAll('.tech-stack>span'),
            {
                stagger: 0.1,
                y: 10,
            },
            1,
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
            1,
        )
    }, [])

    return (
        <main className='relative flex min-h-screen flex-col items-center overflow-x-hidden py-20 max-lg:gap-8 lg:flex-row'>
            <div
                id='project-details-container'
                className='container max-w-lg shrink-0'
            >
                <h2 className='whitespace-nowrap text-2xl font-bold sm:text-4xl'>
                    {project.name}
                </h2>
                <p className='pt-5'>{project.description}</p>
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
            </div>

            <div
                ref={track}
                className='flex select-none gap-4 max-lg:px-8'
                onMouseDown={handleOnDown}
                onMouseUp={handleOnUp}
                onMouseMove={handleOnMove}
                onTouchStart={(e) => handleOnDown(e.touches[0])}
                onTouchEnd={handleOnUp}
                onTouchMove={(e) => handleOnMove(e.touches[0])}
                data-mouse-down-at='0'
                data-prev-percentage='0'
            >
                {project.imgs.map((img, index) => (
                    <HoverWrapper key={index} text='lg'>
                        <Image
                            key={index}
                            src={img.src}
                            alt={img.alt}
                            width={1080}
                            height={800}
                            className='image max-h-[70vh] rounded-md ring ring-muted'
                            draggable='false'
                        />
                    </HoverWrapper>
                ))}
            </div>
        </main>
    )
}
