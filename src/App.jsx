import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

import useScrollReveal from './hooks/useScrollReveal'
import NightSky from './components/NightSky'

function App() {
  useScrollReveal()

  return (
    <>
    <NightSky />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App