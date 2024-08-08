'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import SplitType from 'split-type'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { Contact, contactSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from './ui/textarea'
import { RenderModel } from './render-model'
import { ArrowRight, Loader2 } from 'lucide-react'
import { sendMail } from '@/actions'
import { toast } from 'sonner'

export const Footer = () => {
    const form = useForm<Contact>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            email: '',
            message: '',
            name: '',
        },
    })

    useGSAP(() => {
        const footerHeading = document.getElementById('footer-heading')
        const footerSubHeading = document.getElementById('footer-subheading')
        const footerForm = document.getElementById('contact-form')
        const socialLinks = document.getElementById('social-links')
        const earthModel = document.getElementById('earth-model')

        const splitHeading = new SplitType(footerHeading!, {
            types: 'chars',
        }).chars

        const splitSubHeading = new SplitType(footerSubHeading!, {
            types: 'chars',
        }).chars

        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: 'power4.inOut',
                stagger: 0.03,
                delay: 0.1,
            },
            scrollTrigger: {
                trigger: 'footer',
                start: 'top 90%',
                end: 'bottom 80%',
                toggleActions: 'play none none none',
            },
        })

        tl.from(
            splitHeading,
            {
                opacity: 0,
                y: 20,
            },
            0,
        )

        tl.from(
            splitSubHeading,
            {
                opacity: 0,
                y: 20,
            },
            0,
        )

        tl.from(
            footerForm?.querySelectorAll('*') ?? null,
            {
                opacity: 0,
                y: 40,
                clearProps: 'all',
            },
            1,
        )

        tl.from(
            socialLinks?.querySelectorAll('*') ?? null,
            {
                opacity: 0,
                x: 50,
                clearProps: 'all',
            },
            1,
        )

        tl.from(
            earthModel,
            {
                opacity: 0,
                x: 100,
                clearProps: 'all',
            },
            1,
        )
    }, [])

    const onSubmit = async (data: Contact) => {
        const sleep = (ms: number) =>
            new Promise((resolve) => setTimeout(resolve, ms))

        await sleep(3000)

        return toast.error('Message not sent')

        const res = await sendMail(data)
        if (!res.success && res.error) {
            return toast.error(res.error)
        }

        form.reset()
        toast.success('Message sent successfully')
    }

    return (
        <footer id='footer' className='overflow-x-hidden pb-20'>
            <div className='container'>
                <div className='flex flex-col pb-10'>
                    <span
                        id='footer-heading'
                        className='text-2xl font-bold sm:text-3xl'
                    >
                        Want to work together?
                    </span>
                    <span
                        id='footer-subheading'
                        className='text-xl font-semibold sm:text-2xl'
                    >
                        Contact me
                    </span>
                </div>

                <div className='grid gap-4 lg:grid-cols-2'>
                    <Form {...form}>
                        <form
                            id='contact-form'
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='w-full space-y-4'
                        >
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='John Doe'
                                                className='bg-secondary'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='subject'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Subject</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='Web Development Project'
                                                className='bg-secondary'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='email'
                                                placeholder='example@mail.com'
                                                className='bg-secondary'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='message'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder='Your message here'
                                                className='bg-secondary'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type='submit'
                                className='group relative w-full overflow-hidden font-bold'
                                variant={'outline'}
                                disabled={form.formState.isSubmitting}
                            >
                                {form.formState.isSubmitting ? (
                                    <Loader2 className='mr-2 animate-spin' />
                                ) : (
                                    <>
                                        <span className='absolute -left-full duration-300 group-hover:left-1/2 group-hover:-translate-x-1/2'>
                                            <ArrowRight />
                                        </span>
                                        <span className='absolute left-1/2 -translate-x-1/2 duration-300 group-hover:left-[150%]'>
                                            Submit
                                        </span>
                                    </>
                                )}
                            </Button>
                        </form>
                    </Form>

                    <div
                        id='earth-model'
                        className='mx-auto min-h-96 w-full max-w-xs md:max-w-screen-sm'
                    >
                        <RenderModel />
                    </div>
                </div>
                <div
                    id='social-links'
                    className='flex items-center justify-center overflow-x-hidden pt-10'
                >
                    <a
                        href='https://github.com/EgorVadik'
                        className='group relative text-base font-semibold sm:text-xl'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        Github
                        <span className='absolute bottom-0 right-0 h-px w-0 bg-primary duration-300 group-hover:left-0 group-hover:w-full' />
                    </a>
                    <span className='mx-1 sm:mx-4'>•</span>
                    <a
                        href='https://www.linkedin.com/in/ali-alagamawy/'
                        className='group relative text-base font-semibold sm:text-xl'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        LinkedIn
                        <span className='absolute bottom-0 right-0 h-px w-0 bg-primary duration-300 group-hover:left-0 group-hover:w-full' />
                    </a>
                    <span className='mx-1 sm:mx-4'>•</span>
                    <a
                        href='mailto:alitamer82.at@gmail.com'
                        className='group relative text-base font-semibold sm:text-xl'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Gmail
                        <span className='absolute bottom-0 right-0 h-px w-0 bg-primary duration-300 group-hover:left-0 group-hover:w-full' />
                    </a>
                    <span className='mx-1 sm:mx-4'>•</span>
                    <a
                        href='https://wa.me/201010648908'
                        className='group relative text-base font-semibold sm:text-xl'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        WhatsApp
                        <span className='absolute bottom-0 right-0 h-px w-0 bg-primary duration-300 group-hover:left-0 group-hover:w-full' />
                    </a>
                </div>
            </div>
        </footer>
    )
}
