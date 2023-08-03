import { motion } from 'framer-motion'
import useScrollAnimation from '../hooks/useScrollAnimation'

type props = {
    skill: string
    exp?: number
}

export default function SkillsCard({ exp, skill }: props) {
    const { control, ref, variant } = useScrollAnimation(-1)

    return (
        <motion.div
            ref={ref}
            variants={variant}
            initial='hidden'
            animate={control}
        >
            <h1 className='text-4xl text-white font-bold py-2 text-center'>
                {skill}
            </h1>
            {/* <p className='text-sm text-[#b8b8b8] py-2'>{exp} Experience</p> */}
        </motion.div>
    )
}
