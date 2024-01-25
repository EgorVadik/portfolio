import { motion } from 'framer-motion'
import ProjectCard from './projectCard'
import useScrollAnimation from '../hooks/useScrollAnimation'

export type Project = {
    name: string
    imgSrc: string
    techStack: string[]
    projectLink: string
    githubLink?: string
    isPrivate: boolean
}

export default function Projects() {
    const { control, ref, variant } = useScrollAnimation(-1)

    const projects: Project[] = [
        {
            name: 'ShutterStory',
            imgSrc: '/images/ShutterStory.png',
            techStack: [
                'Next.js',
                'TypeScript',
                'Tailwind CSS',
                'Prisma',
                'MongoDB',
                'NextAuth.js',
                'Uploadthing',
            ],
            projectLink: 'https://shutterstory.net/',
            githubLink: '',
            isPrivate: true,
        },
        {
            name: 'Basedbin',
            imgSrc: '/images/Basedbin.png',
            techStack: [
                'Next.js',
                'Nodejs',
                'TypeScript',
                'Tailwind CSS',
                'MongoDB',
                'NextAuth.js',
                'Prisma',
                'Yjs',
            ],
            projectLink: 'https://based-bin.vercel.app/',
            githubLink: 'https://github.com/EgorVadik/basedbin2.0',
            isPrivate: false,
        },
        {
            name: 'Latin',
            imgSrc: '/images/Latin.png',
            techStack: [
                'Next.js',
                'TypeScript',
                'Tailwind CSS',
                'Prisma',
                'MongoDB',
                'NextAuth.js',
                'Uploadthing',
            ],
            projectLink: 'https://latin-ten.vercel.app/',
            githubLink: '',
            isPrivate: true,
        },
        {
            name: 'Google Search Clone',
            imgSrc: '/images/Google-Search-Clone.png',
            techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Google API'],
            projectLink: 'https://google-search-clone-egorvadik.vercel.app/',
            githubLink: 'https://github.com/EgorVadik/google-search-clone',
            isPrivate: false,
        },
        {
            name: 'Shopping List',
            imgSrc: '/images/shopping-list.png',
            techStack: ['Vite', 'React', 'TypeScript', 'Tailwind CSS'],
            projectLink: 'https://shopping-list-egorvadik.vercel.app/',
            githubLink: 'https://github.com/EgorVadik/shopping-list',
            isPrivate: false,
        },
        {
            name: 'Trending Movies and TV Shows',
            imgSrc: '/images/Trending-Movies_Tv-Series.png',
            techStack: [
                'Next.js',
                'TypeScript',
                'Tailwind CSS',
                'Prisma',
                'MongoDB',
                'TMDb API',
            ],
            projectLink: 'https://entertainment-app-egorvadik.vercel.app/',
            githubLink: 'https://github.com/EgorVadik/entertainment-app',
            isPrivate: false,
        },
        // {
        //     name: 'Fylo Landing Page',
        //     imgSrc: '/images/Fylo-landing-page.png',
        //     techStack: ['HTML', 'Tailwind CSS'],
        //     projectLink: 'https://egorvadik.github.io/fylo-landing-page/',
        //     githubLink: 'https://github.com/EgorVadik/fylo-landing-page',
        //     isPrivate: false,
        // },
        // {
        //     name: 'Easybank Landing Page',
        //     imgSrc: '/images/Easybank-landing-page.png',
        //     techStack: ['HTML', 'Tailwind CSS', 'JavaScript'],
        //     projectLink:
        //         'https://egorvadik.github.io/easybanking-landing-page/',
        //     githubLink: 'https://github.com/EgorVadik/easybanking-landing-page',
        // },
        // {
        //     name: 'Bookmark Landing Page',
        //     imgSrc: '/images/Bookmark-page.png',
        //     techStack: ['HTML', 'Tailwind CSS', 'JavaScript'],
        //     projectLink: 'https://egorvadik.github.io/bookmark-landing-page/',
        //     githubLink: 'https://github.com/EgorVadik/bookmark-landing-page',
        // },
    ]

    return (
        <div className='mx-5 md:mx-0'>
            <motion.div
                className='flex items-center text-white mt-20 mb-10'
                ref={ref}
                variants={variant}
                initial='hidden'
                animate={control}
            >
                <h1 className='text-5xl font-bold'>Projects</h1>
                <a
                    href='#footer'
                    className='border-b-2 border-[#55f7af] py-1 uppercase font-medium text-xl tracking-wider md:text-base ml-auto hover:text-[#55f7af] duration-200 transition-colors'
                >
                    Contact Me
                </a>
            </motion.div>
            <div className='grid md:grid-cols-2 gap-6 mb-20'>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    )
}
