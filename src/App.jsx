import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import ParticleCanvas from './components/ParticleCanvas'
import CursorTracker from './components/CursorTracker'
import FloatingOrbs from './components/FloatingOrbs'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-night min-h-screen">
      <ParticleCanvas />
      <CursorTracker />
      <FloatingOrbs />
      <Navbar scrolled={scrolled} />
      
      <main className="relative z-10">
        <Hero />
        <div className="marquee-divider border-y border-white/5 py-4">
          <div className="marquee-wrapper">
            <div className="marquee-inner" style={{ animationDuration: '25s' }}>
              
              {/* 🔁 CONTENT (SET 1) */}
              <span className="font-display text-4xl grad-cyan opacity-30 px-8">ROBOTICS</span>
              <span className="text-white/10 text-2xl">✦</span>
              <span className="font-display text-4xl text-slate-600 px-8">MACHINE LEARNING</span>
              <span className="text-white/10 text-2xl">✦</span>
              <span className="font-display text-4xl grad-violet opacity-30 px-8">COMPUTER VISION</span>
              <span className="text-white/10 text-2xl">✦</span>
              <span className="font-display text-4xl text-slate-600 px-8">FULL STACK</span>
              <span className="text-white/10 text-2xl">✦</span>

              {/* 🔁 CONTENT (SET 2 - DUPLICATE FOR LOOP) */}
              <span className="font-display text-4xl grad-cyan opacity-30 px-8">ROBOTICS</span>
              <span className="text-white/10 text-2xl">✦</span>
              <span className="font-display text-4xl text-slate-600 px-8">MACHINE LEARNING</span>
              <span className="text-white/10 text-2xl">✦</span>
              <span className="font-display text-4xl grad-violet opacity-30 px-8">COMPUTER VISION</span>
              <span className="text-white/10 text-2xl">✦</span>
              <span className="font-display text-4xl text-slate-600 px-8">FULL STACK</span>
              <span className="text-white/10 text-2xl">✦</span>

            </div>
          </div>
        </div>
        
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
