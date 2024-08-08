import { ProjectDetails } from '@/components/project-details'
import { projects } from '@/lib/constants'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { z } from 'zod'

const paramSchema = z.object({
    name: z
        .string()
        .trim()
        .transform((val) => val.replaceAll('-', ' ')),
})

export function generateMetadata({
    params: { name },
}: {
    params: { name: string }
}): Metadata {
    const project = projects.find((project) => project.name === name)

    return {
        title: `Project - ${project?.name ?? '404'}`,
        description: project?.description,
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: `https://portfolio-egorvadik.vercel.app/project/${name.replaceAll(' ', '-')}`,
            siteName: 'Ali Tamer - Portfolio',
            title: `Project - ${project?.name ?? '404'}`,
            description: project?.description,
            images: project?.imgs.map((img) => ({
                url: img.src,
                alt: img.alt,
                type: 'image/jpeg',
            })),
        },
        twitter: {
            card: 'summary',
            title: `Project - ${project?.name ?? '404'}`,
            images: project?.imgs.map((img) => ({
                url: img.src,
                alt: img.alt,
            })),
        },
    }
}

export function generateStaticParams() {
    return projects.map((project) => ({
        name: project.name.replaceAll(' ', '-'),
    }))
}

export default function page({ params }: { params: { name: string } }) {
    const parsedParams = paramSchema.safeParse(params)
    if (!parsedParams.success) notFound()
    const { name } = parsedParams.data

    const project = projects.find((project) => project.name === name)
    if (!project) notFound()

    return <ProjectDetails project={project} />
}
