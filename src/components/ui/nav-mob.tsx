'use client'

import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ThemeSwitcher } from '../theme-switcher'
import { useEventListener } from '@mantine/hooks'

let anim: gsap.core.Timeline | undefined

export const NavMob = () => {
    const [open, setOpen] = useState(false)
    const ref = useEventListener('click', () => setOpen(false))

    useGSAP(() => {
        const navMob = document.getElementById('nav-mob')
        const navMobOverlay = document.getElementById('nav-mob-overlay')

        anim = gsap
            .timeline({
                defaults: {
                    duration: 0.5,
                    ease: 'power4.inOut',
                },
                paused: true,
            })
            .from(
                navMob,
                {
                    scale: 0,
                    opacity: 0,
                    transformOrigin: 'top right',
                    ease: 'power4.inOut',
                },
                0,
            )
            .from(
                navMobOverlay,
                {
                    opacity: 0,
                    yPercent: -100,
                },
                0,
            )
    }, [])

    useEffect(() => {
        if (open) {
            anim?.play()
        } else {
            anim?.reverse()
        }
    }, [open])

    return (
        <header className='sticky top-0 z-40 flex items-end justify-end pr-4 pt-4 sm:hidden'>
            <div
                id='nav-mob-overlay'
                ref={ref}
                className='fixed inset-0 z-20 bg-secondary-foreground/70 backdrop-blur-lg dark:bg-secondary/70'
            />
            <button
                className='relative z-40 flex size-12 items-center justify-center rounded-full border bg-background/70 shadow-md shadow-secondary backdrop-blur-md'
                onClick={() => setOpen(!open)}
            >
                <div
                    className={cn(
                        'flex flex-col items-center justify-center gap-1 duration-300',
                        open && '-translate-y-1',
                    )}
                >
                    <span
                        className={cn(
                            'block h-[3px] w-7 rounded-full bg-secondary-foreground duration-300',
                            open && 'translate-y-2.5 rotate-45 transform',
                        )}
                    />
                    <span
                        className={cn(
                            'block h-[3px] w-7 rounded-full bg-secondary-foreground duration-300',
                            open && 'opacity-0',
                        )}
                    />
                    <span
                        className={cn(
                            'block h-[3px] w-7 rounded-full bg-secondary-foreground duration-300',
                            open && '-translate-y-1 -rotate-45 transform',
                        )}
                    />
                </div>
            </button>

            <nav>
                <ul
                    id='nav-mob'
                    className='fixed left-0 right-0 top-0 z-30 grid h-[40vh] place-content-center gap-4 rounded-bl-[100%] bg-background text-lg font-semibold *:translate-x-10'
                >
                    <li className='group relative'>
                        <Link href='/#about-me' onClick={() => setOpen(false)}>
                            About
                        </Link>
                        <span className='absolute bottom-0 right-0 h-px w-0 bg-primary duration-300 group-hover:left-0 group-hover:w-full' />
                    </li>
                    <li className='group relative'>
                        <Link
                            href='/#projects-section'
                            onClick={() => setOpen(false)}
                        >
                            Projects
                        </Link>
                        <span className='absolute bottom-0 right-0 h-px w-0 bg-primary duration-300 group-hover:left-0 group-hover:w-full' />
                    </li>
                    <li className='group relative'>
                        <Link href='#footer' onClick={() => setOpen(false)}>
                            Contact
                        </Link>
                        <span className='absolute bottom-0 right-0 h-px w-0 bg-primary duration-300 group-hover:left-0 group-hover:w-full' />
                    </li>
                    <li className='flex items-center gap-2'>
                        <ThemeSwitcher />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
