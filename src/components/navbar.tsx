import { FaGithub } from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav className='md:flex items-center py-5 relative z-10 px-5 md:px-0 grid place-content-center md:place-content-start'>
            <h1 className='text-3xl text-white font-semibold'>alitamer</h1>
            <a
                href='https://github.com/EgorVadik'
                className={`md:m-0 m-auto md:ml-auto`}
                target='_blank'
            >
                <FaGithub className='bg-black rounded-full text-white text-3xl hover:text-[#55f7af]' />
            </a>
        </nav>
    )
}
