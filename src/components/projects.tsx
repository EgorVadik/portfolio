import { motion } from 'framer-motion'
import ProjectCard from './projectCard'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function Projects() {
    const { control, ref, variant } = useScrollAnimation(-1)

    const projects = [
        {
            name: 'Basedbin',
            imgSrc: '/assets/images/Basedbin.png',
            techStack: [
                'Next.js',
                'Nodejs',
                'TypeScript',
                'Tailwind CSS',
                'Firebase',
            ],
            projectLink: 'https://based-bin.vercel.app/',
            githubLink: 'https://github.com/EgorVadik/basedbin2.0',
        },
        {
            name: 'Fylo Landing Page',
            imgSrc: '/assets/images/Fylo-landing-page.png',
            techStack: ['HTML', 'Tailwind CSS'],
            projectLink: 'https://egorvadik.github.io/fylo-landing-page/',
            githubLink: 'https://github.com/EgorVadik/fylo-landing-page',
        },
        {
            name: 'Trending Movies and TV Shows',
            imgSrc: '/assets/images/Trending-Movies_Tv-Series.png',
            techStack: [
                'Next.js',
                'TypeScript',
                'Tailwind CSS',
                'Prisma',
                'Mongo DB',
                'TMDb API',
            ],
            projectLink: 'https://entertainment-app-egorvadik.vercel.app/',
            githubLink: 'https://github.com/EgorVadik/entertainment-app',
        },
        {
            name: 'Easybank Landing Page',
            imgSrc: '/assets/images/Easybank-landing-page.png',
            techStack: ['HTML', 'Tailwind CSS', 'JavaScript'],
            projectLink:
                'https://egorvadik.github.io/easybanking-landing-page/',
            githubLink: 'https://github.com/EgorVadik/easybanking-landing-page',
        },
        {
            name: 'Google Search Clone',
            imgSrc: '/assets/images/Google-Search-Clone.png',
            techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Google API'],
            projectLink: 'https://google-search-clone-egorvadik.vercel.app/',
            githubLink: 'https://github.com/EgorVadik/google-search-clone',
        },
        {
            name: 'Bookmark Landing Page',
            imgSrc: '/assets/images/Bookmark-page.png',
            techStack: ['HTML', 'Tailwind CSS', 'JavaScript'],
            projectLink: 'https://egorvadik.github.io/bookmark-landing-page/',
            githubLink: 'https://github.com/EgorVadik/bookmark-landing-page',
        },
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
                    <ProjectCard
                        key={index}
                        imgSrc={project.imgSrc}
                        name={project.name}
                        techStack={project.techStack}
                        githubLink={project.githubLink}
                        projectLink={project.projectLink}
                    />
                ))}
            </div>
        </div>
    )
}
