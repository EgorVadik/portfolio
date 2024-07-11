import useScrollAnimation from '../hooks/useScrollAnimation'
import { motion } from 'framer-motion'
import useStaggerAnimation from '../hooks/useStaggerAnimation'
import TypeWriter from 'typewriter-effect'

export default function Intro() {
    const name = 'Ali Tamer' as const

    const { control: controlLeft, ref: refLeft } = useScrollAnimation(-1)

    const {
        control: controlRight,
        ref: refRight,
        variant: variantRight,
    } = useScrollAnimation(1)
    const { childVariant, variant } = useStaggerAnimation(-1)

    return (
        <div className='md:text-6xl text-5xl font-bold text-white md:h-[500px] grid items-center md:grid-cols-3 relative px-5 md:px-0 overflow-hidden'>
            <motion.div
                className='relative z-10 col-span-2 mb-20 text-center md:text-left md:mb-0'
                ref={refLeft}
                variants={variant}
                initial='hidden'
                animate={controlLeft}
            >
                <motion.div variants={childVariant}>
                    <h1>Nice to meet you!</h1>
                    <h1>
                        I'm{' '}
                        <span className='underline decoration-[#55f7af]'>
                            {name.split('').map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.2,
                                        delay: index * 0.15,
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </span>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.2,
                                delay: name.length * 0.15,
                            }}
                        >
                            .
                        </motion.span>
                    </h1>
                </motion.div>
                <motion.div variants={childVariant}>
                    <div className='text-sm font-medium md:w-3/4 text-[#b8b8b8] pb-5 pt-7'>
                        I graduated from the Arab Academy for Science,
                        Technology and Maritime Transport (AAST) with a degree
                        in Computer Science. My focus is on back-end
                        development, and I also have experience in front-end
                        technologies. I am highly motivated to learn new
                        technologies and adapt quickly. Native language Arabic,
                        second language English.
                        <span className='inline-flex items-center gap-1 ml-1 md:ml-0 md:flex'>
                            Mainly work using
                            <TypeWriter
                                options={{
                                    strings: [
                                        'Next.js',
                                        'Node.js',
                                        'Tailwind CSS',
                                        'TypeScript',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                    deleteSpeed: 100,
                                }}
                            />
                        </span>
                    </div>
                </motion.div>
                <motion.div variants={childVariant}>
                    <a
                        href='#footer'
                        className='border-b-2 border-[#55f7af] py-1 uppercase font-medium text-xl tracking-wider md:text-base hover:text-[#55f7af] duration-200 transition-colors'
                    >
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>
            <div className='col-span-2 row-start-1 m-auto md:row-start-auto'>
                <motion.div
                    className='mb-10 md:absolute md:-top-20 md:right-0'
                    ref={refRight}
                    variants={variantRight}
                    initial='hidden'
                    animate={controlRight}
                >
                    <div className='relative'>
                        <img
                            src='/images/ali-tamer.jpg'
                            alt='Ali Tamer'
                            className='md:w-[330px] w-[250px] h-[420px] md:h-[550px] object-cover'
                        />
                        <img
                            src='/circle.svg'
                            alt='Circle'
                            className='absolute bottom-16 md:-left-10 md:w-20 md:right-auto -right-40'
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
