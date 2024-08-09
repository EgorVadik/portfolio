import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Overlay } from '@/components/overlay'
import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { NavMob } from '@/components/ui/nav-mob'
import { Analytics } from '@vercel/analytics/react'

import { GeistMono } from 'geist/font/mono'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
    title: 'Ali Tamer - Portfolio',
    description:
        'I graduated from the Arab Academy for Science, Technology and Maritime Transport (AAST) with a degree in Computer Science. My focus is on back-end development, and I also have experience in front-end technologies. I am highly motivated to learn new technologies and adapt quickly. Native language Arabic, second language English.',
    abstract: 'My personal portfolio website',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://alitamer.com',
        siteName: 'Ali Tamer - Portfolio',
        title: 'Ali Tamer - Portfolio',
        description:
            'I graduated from the Arab Academy for Science, Technology and Maritime Transport (AAST) with a degree in Computer Science. My focus is on back-end development, and I also have experience in front-end technologies. I am highly motivated to learn new technologies and adapt quickly. Native language Arabic, second language English.',
        images: [
            {
                url: '/images/me/ali-tamer-2.jpg',
                alt: 'Ali Tamer',
                type: 'image/jpeg',
            },
        ],
        emails: ['alitamer82.at@gmail.com'],
        phoneNumbers: ['+201010648908'],
    },
    twitter: {
        card: 'summary',
        title: 'Ali Tamer - Portfolio',
        images: [
            {
                url: '/images/me/ali-tamer-2.jpg',
                alt: 'Ali Tamer',
            },
        ],
    },
    keywords: [
        'Ali Tamer',
        'Portfolio',
        'Software Engineer',
        'Web Developer',
        'Back-end Developer',
        'Front-end Developer',
        'Computer Science',
        'Arabic',
        'English',
    ],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={GeistMono.className}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className='pointer-events-none fixed inset-0 flex items-center justify-center bg-grid-gray-600/[0.3] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
                    <Overlay />
                    <NavBar />
                    <NavMob />
                    {children}
                    <Footer />
                    <Toaster />
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    )
}
