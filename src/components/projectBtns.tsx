type Props = {
    projectLink: string
    githubLink: string
}

export default function ProjectBtns({ projectLink, githubLink }: Props) {
    return (
        <>
            <div>
                <a
                    className='uppercase border-b-2 border-[#55f7af] py-1 font-medium hover:text-[#55f7af] duration-200 transition-colors'
                    href={projectLink}
                    target='_blank'
                >
                    View Project
                </a>
            </div>
            <div>
                <a
                    className='uppercase border-b-2 border-[#55f7af] py-1 font-medium hover:text-[#55f7af] duration-200 transition-colors'
                    href={githubLink}
                    target='_blank'
                >
                    View Code
                </a>
            </div>
        </>
    )
}
