import { useEffect, useState } from 'react'
import Divider from './divider'
import Navbar from './navbar'

export default function Footer() {
    const email = 'alitamer82.at@gmail.com'
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [nameError, setNameError] = useState(false)
    const [messageError, setMessageError] = useState(false)

    useEffect(() => {
        if (name.trim().length > 0 && name.trim().length < 3) {
            setNameError(true)
        } else {
            setNameError(false)
        }
    }, [name])

    return (
        <footer id='footer' className='bg-[#242424] text-white relative'>
            <img
                src='/rings.svg'
                alt='Rings'
                className='absolute w-2/5 md:-left-48 bottom-64 xl:-left-96'
            />
            <div className='container m-auto py-16 px-5 md:px-0'>
                <div className='grid md:grid-cols-2'>
                    <div className='text-center md:text-left'>
                        <h1 className='text-5xl font-semibold mb-7'>Contact</h1>
                        <p className='text-[#c5c5c5] md:w-2/3 lg:w-1/2 xl:w-1/3'>
                            Please fill in the form, and I'll get back to you as
                            soon as possible
                        </p>
                    </div>
                    <form className='grid'>
                        <input
                            type='text'
                            value={name}
                            className={`bg-transparent border-b-2 ${
                                nameError
                                    ? 'border-[#ef4444]'
                                    : name.trim().length == 0
                                    ? 'border-[#7e7e7e]'
                                    : 'border-[#55f7af]'
                            } font-medium focus:outline-none px-5 py-4`}
                            placeholder='NAME'
                            required
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                        {/* <div className='grid relative'> */}
                        <input
                            type='email'
                            value={email}
                            className={`bg-transparent border-b-2 border-[#7e7e7e] font-medium focus:outline-none px-5 py-4 mt-3 text-[#c5c5c5]`}
                            placeholder='EMAIL'
                            disabled
                        />
                        <textarea
                            className={`bg-transparent border-b-2 ${
                                messageError
                                    ? 'border-[#ef4444]'
                                    : message.trim().length == 0
                                    ? 'border-[#7e7e7e]'
                                    : 'border-[#55f7af]'
                            } font-medium focus:outline-none px-5 py-4 mt-3`}
                            value={message}
                            rows={3}
                            placeholder='MESSAGE'
                            required
                            onChange={(e) => {
                                setMessage(e.target.value)
                                if (messageError) setMessageError(false)
                            }}
                        ></textarea>
                        <button
                            className='border-b-2 border-[#55f7af] py-1 uppercase text-base ml-auto font-semibold tracking-widest mt-7 mb-12 hover:text-[#55f7af] duration-200 transition-colors'
                            onClick={(e) => {
                                e.preventDefault()
                                if (
                                    (name.trim().length >= 0 &&
                                        name.trim().length < 3) ||
                                    message.trim().length === 0
                                ) {
                                    setMessageError(true)
                                    setNameError(true)
                                    return
                                }

                                const emailLink = `mailto:${email}?subject=${name}&body=${message}`
                                window.open(emailLink)
                            }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
                <Divider />
                <Navbar />
            </div>
        </footer>
    )

    function isValidEmail(email: string) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }
}
