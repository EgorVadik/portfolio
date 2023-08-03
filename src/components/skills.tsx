import Divider from './divider'
import SkillsCard from './skillsCard'

export default function Skills() {
    return (
        <>
            <Divider />
            <div className='mb-12'></div>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 md:text-left text-center px-5 md:px-0'>
                <SkillsCard skill='NextJS' />
                <SkillsCard skill='React' />
                <SkillsCard skill='TypeScript' />
                <SkillsCard skill='Tailwind CSS' />
                <SkillsCard skill='JavaScript' />
                <SkillsCard skill='NodeJS' />
                <SkillsCard skill='MongoDB' />
                <SkillsCard skill='ExpressJS' />
                <SkillsCard skill='Git' />
                <SkillsCard skill='GitHub' />
                <SkillsCard skill='Figma' />
                <SkillsCard skill='Python' />
            </div>
        </>
    )
}
