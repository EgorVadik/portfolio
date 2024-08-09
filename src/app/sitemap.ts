import { projects } from '@/lib/constants'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const url = 'https://alitamer.com'

    return [
        {
            url: `${url}/`,
            lastModified: new Date(),
            priority: 1,
        },
        ...projects.map((project) => ({
            url: `${url}/project/${project.name}`,
            lastModified: new Date(),
            priority: 0.9,
        })),
    ]
}
