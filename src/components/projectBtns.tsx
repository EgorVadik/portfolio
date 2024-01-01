type Props = {
    projectLink: string
    githubLink?: string
    isPrivate: boolean
}

export default function ProjectBtns({
    projectLink,
    githubLink,
    isPrivate,
}: Props) {
    return (
        <>
            <a
                className={`uppercase border-b-2 border-[#55f7af] py-1 font-medium hover:text-[#55f7af] duration-200 transition-colors whitespace-nowrap w-fit ${
                    isPrivate && 'justify-self-center'
                }`}
                href={projectLink}
                target='_blank'
            >
                View Project
            </a>
            {!isPrivate && githubLink ? (
                <div>
                    <a
                        className='uppercase border-b-2 border-[#55f7af] py-1 font-medium hover:text-[#55f7af] whitespace-nowrap duration-200 transition-colors w-fit'
                        href={githubLink}
                        target='_blank'
                    >
                        View Code
                    </a>
                </div>
            ) : (
                <span className='w-2/3 text-balance text-center justify-self-center'>
                    This project is private due to client request
                </span>
            )}
        </>
    )
}
