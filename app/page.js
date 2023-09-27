import About from '@/components/About'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
    <Header />
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
