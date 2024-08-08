import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <section className='flex min-h-screen items-center justify-center'>
            <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
                <div className='mx-auto max-w-screen-sm text-center'>
                    <h1 className='text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl'>
                        404
                    </h1>
                    <p className='mb-4 text-3xl font-bold tracking-tight md:text-4xl'>{`Something's missing.`}</p>
                    <p className='mb-4 text-balance text-lg font-light text-muted-foreground'>
                        {`Sorry, It seems like the page you're looking for doesn't exist.`}
                    </p>
                    <Link
                        href='/'
                        className={buttonVariants({
                            size: 'lg',
                        })}
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    )
}
