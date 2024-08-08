'use client'

import { useHeadroom } from '@mantine/hooks'
import Link from 'next/link'
import React from 'react'
import { ThemeSwitcher } from './theme-switcher'

export const NavBar = () => {
    const pinned = useHeadroom({ fixedAt: 0 })

    return (
        <header
            className='sticky top-4 z-40 mx-auto mt-4 hidden rounded-full border bg-background/70 shadow-md shadow-secondary backdrop-blur-md transition-transform duration-300 ease-in-out sm:block sm:w-[30rem]'
            style={{
                transform: `translate3d(0, ${pinned ? 0 : '-200%'}, 0)`,
            }}
        >
            <nav>
                <ul className='flex items-center justify-center gap-8 py-5 text-lg font-semibold'>
                    <li className='group relative'>
                        <Link href='/#about-me'>About</Link>
                        <span className='absolute bottom-0 right-0 h-px w-0 bg-primary duration-300 group-hover:left-0 group-hover:w-full' />
                    </li>
                    <li className='group relative'>
                        <Link href='/#projects-section'>Projects</Link>
                        <span className='absolute bottom-0 right-0 h-px w-0 bg-primary duration-300 group-hover:left-0 group-hover:w-full' />
                    </li>
                    <li className='group relative'>
                        <Link href='#footer'>Contact</Link>
                        <span className='absolute bottom-0 right-0 h-px w-0 bg-primary duration-300 group-hover:left-0 group-hover:w-full' />
                    </li>
                    <li className='flex items-center justify-center gap-2'>
                        <ThemeSwitcher />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
