import Footer from './components/footer'
import Intro from './components/intro'
import Navbar from './components/navbar'
import Projects from './components/projects'
import Skills from './components/skills'

function App() {
    return (
        <main className='min-h-screen bg-[#151515] font-roboto relative overflow-hidden'>
            <img
                src='/rings.svg'
                alt='Rings'
                className='absolute w-2/5 -left-32 top-24'
            />
            <section className='container m-auto'>
                <Navbar />
                <Intro />
                <Skills />
                <Projects />
            </section>
            <Footer />
        </main>
    )
}

export default App
