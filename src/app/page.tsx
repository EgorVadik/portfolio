import { HorizontalScrollAnimatedText } from '@/components/horizontal-scroll-animated-text'
import { Intro } from '@/components/intro'
import { Projects } from '@/components/projects'
import { TechnologiesComponent } from '@/components/technologies'

export default function Home() {
    return (
        <main className='relative min-h-screen overflow-x-hidden pb-20'>
            <section
                id='about-me'
                className={`grid min-h-screen place-content-center`}
            >
                <Intro />
            </section>
            <section className={`flex w-full items-center justify-between`}>
                <HorizontalScrollAnimatedText />
            </section>

            <TechnologiesComponent />
            <Projects />
        </main>
    )
}
