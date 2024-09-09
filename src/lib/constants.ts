import { Project } from './types'
import AWS from '../../public/technologies/aws.svg'
import CSS from '../../public/technologies/css.svg'
import HTML from '../../public/technologies/html.svg'
import JS from '../../public/technologies/javascript.svg'
import JSON from '../../public/technologies/json.svg'
import MongoDB from '../../public/technologies/mongodb.svg'
import Next from '../../public/technologies/nextjs.svg'
import Node from '../../public/technologies/node.svg'
import Python from '../../public/technologies/python.svg'
import React from '../../public/technologies/react.svg'
import SQL from '../../public/technologies/sql.svg'
import Tailwind from '../../public/technologies/tailwind.svg'
import TS from '../../public/technologies/typescript.svg'

export const projects: Project[] = [
    {
        name: 'ShutterStory',
        description:
            "A web application that functions as a personal portfolio for the sites's owner showcasing his work, as well as a platform for selling prints of his images and delivering them to customers.",
        imgs: [
            {
                src: '/images/shutterstory/home-page.png',
                alt: 'Home Page',
            },
            {
                src: '/images/shutterstory/shop.png',
                alt: 'Shop',
            },
            {
                src: '/images/shutterstory/img-details.png',
                alt: 'Image Details',
            },
            {
                src: '/images/shutterstory/category-images.png',
                alt: 'Category Images',
            },
            {
                src: '/images/shutterstory/order-details.png',
                alt: 'Order Details',
            },
        ],
        techStack: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Prisma',
            'MongoDB',
            'NextAuth.js',
            'Uploadthing',
            'Stripe',
            'Shadcn/ui',
        ],
        projectLink: 'https://shutterstory.net/',
    },
    {
        name: 'Basedbin',
        description:
            'An inspiration of hastebin but with a twist, provides a real-time connection with others by sharing the current URL to edit files and preview them together for a better collaboration experience. It also provides a login system to save your files and access them from anywhere.',
        imgs: [
            {
                src: '/images/based-bin/landing-page.png',
                alt: 'Landing Page',
            },
            {
                src: '/images/based-bin/markdown-editor.png',
                alt: 'Editor',
            },
            {
                src: '/images/based-bin/profile.png',
                alt: 'Profile',
            },
            {
                src: '/images/based-bin/access-control.png',
                alt: 'Access control',
            },
        ],
        techStack: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Shadcn/ui',
            'Supabase',
            'Liveblocks',
            'Prisma',
            'Blocknote',
            'Yjs',
        ],
        projectLink: 'https://based-bin.vercel.app/',
    },
    {
        name: 'Learnify.ai',
        description:
            'Learnify.ai is an AI-enhanced Learning Management System (LMS) designed to streamline education and improve communication between students and teachers. It helps identify areas for student improvement more effectively than traditional systems.',
        imgs: [
            {
                src: '/images/learnify-ai/home.png',
                alt: 'Home',
            },
            {
                src: '/images/learnify-ai/register.png',
                alt: 'Register',
            },
            {
                src: '/images/learnify-ai/dashboard.png',
                alt: 'Student Dashboard',
            },
            {
                src: '/images/learnify-ai/course.png',
                alt: 'Course',
            },
            {
                src: '/images/learnify-ai/notes.png',
                alt: 'Notes',
            },
        ],
        techStack: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Prisma',
            'MongoDB',
            'Ably',
            'NextAuth.js',
            'Edgestore',
            'Shadcn/ui',
            'Gemini API',
        ],
        projectLink: 'https://learnify-ai-one.vercel.app/',
    },
    {
        name: 'Gemini Chat',
        description:
            'Gemini Chat is a platform for interacting with different AI language models, including GPT-3.5, GPT-4, and Gemini. It allows users to chat with the models, save the chat history, and subscribe to a plan to get more features.',
        imgs: [
            {
                src: '/images/gemini-chat/landing-page.png',
                alt: 'Landing Page',
            },
            {
                src: '/images/gemini-chat/chat-page.png',
                alt: 'Chat Page',
            },
            {
                src: '/images/gemini-chat/chat-history.png',
                alt: 'Chat History',
            },
            {
                src: '/images/gemini-chat/subscription-plan.png',
                alt: 'Subscription Plan',
            },
        ],
        techStack: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Prisma',
            'MongoDB',
            'Clerk',
            'Stripe',
            'Shadcn/ui',
            'Gemini API',
            'Chat GPT API',
        ],
        projectLink: 'https://gemini-chat-egorvadik.vercel.app/',
    },
    {
        name: 'Latin',
        description:
            'An e-commerce platform for selling beauty products such as lipsticks. It allows users to create an account, add products to their cart, and purchase them.',
        imgs: [
            {
                src: '/images/latin/home.png',
                alt: 'Home',
            },
            {
                src: '/images/latin/login.png',
                alt: 'Login',
            },
            {
                src: '/images/latin/product.png',
                alt: 'Product',
            },
        ],
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
    },
    {
        name: 'DHEBH',
        description:
            'A landing page for a hospital in Saudi Arabia. Provides information about the hospital, its services, and contact information.',
        imgs: [
            {
                src: '/images/dhebh/home.png',
                alt: 'Home',
            },
            {
                src: '/images/dhebh/about.png',
                alt: 'About',
            },
            {
                src: '/images/dhebh/services.png',
                alt: 'Services',
            },
            {
                src: '/images/dhebh/contact.png',
                alt: 'Contact',
            },
        ],
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        projectLink: 'https://dhebh.net/',
    },
]

export const Technologies = [
    {
        alt: 'Next',
        icon: Next,
        url: 'https://nextjs.org/',
    },
    {
        alt: 'React',
        icon: React,
        url: 'https://react.dev/',
    },
    {
        alt: 'Tailwind',
        icon: Tailwind,
        url: 'https://tailwindcss.com/',
    },
    {
        alt: 'TS',
        icon: TS,
        url: 'https://www.typescriptlang.org/',
    },
    {
        alt: 'HTML',
        icon: HTML,
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
        alt: 'CSS',
        icon: CSS,
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
        alt: 'JS',
        icon: JS,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        alt: 'Node',
        icon: Node,
        url: 'https://nodejs.org/',
    },
    {
        alt: 'MongoDB',
        icon: MongoDB,
        url: 'https://www.mongodb.com/',
    },
    {
        alt: 'Python',
        icon: Python,
        url: 'https://www.python.org/',
    },
    {
        alt: 'JSON',
        icon: JSON,
        url: 'https://www.json.org/',
    },
    {
        alt: 'SQL',
        icon: SQL,
        url: 'https://www.w3schools.com/sql/',
    },
    {
        alt: 'AWS',
        icon: AWS,
        url: 'https://aws.amazon.com/',
    },
]
