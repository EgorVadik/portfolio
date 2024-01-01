import { motion } from 'framer-motion'
import ProjectBtns from './projectBtns'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { Project } from './projects'

export default function ProjectCard({
    imgSrc,
    name,
    techStack,
    githubLink,
    projectLink,
    isPrivate,
}: Project) {
    const { control, ref, variant } = useScrollAnimation(1)

    return (
        <motion.div
            ref={ref}
            variants={variant}
            initial='hidden'
            animate={control}
            className='flex flex-col justify-between'
        >
            <div>
                <div className='group relative'>
                    <img src={imgSrc} alt={name} />
                    <div className='absolute top-0 left-0 h-full w-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 md:group-hover:w-full md:group-hover:opacity-100 duration-500 pointer-events-none select-none md:group-hover:pointer-events-auto'>
                        <div className='text-xl text-white grid gap-y-7'>
                            <ProjectBtns
                                githubLink={githubLink}
                                projectLink={projectLink}
                                isPrivate={isPrivate}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-white font-bold uppercase mt-2 mb-1'>
                        {name}
                    </p>
                    <p className='uppercase text-[#858585] font-semibold'>
                        {techStack.join(' -- ')}
                    </p>
                </div>
            </div>
            <div className='flex text-xl gap-x-7 text-white mt-5 lg:hidden'>
                <ProjectBtns
                    githubLink={githubLink}
                    projectLink={projectLink}
                    isPrivate={isPrivate}
                />
            </div>
        </motion.div>
    )
}
