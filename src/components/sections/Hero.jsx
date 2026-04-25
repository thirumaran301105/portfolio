import { useState, useEffect } from 'react'
import { useRevealOnScroll, useCounterAnimation } from '../../hooks/useAnimations'
import blazerImage from "../assests/Blazer new.jpeg";
import ResumeModal from '../ResumeModal'
import { generateAndDownloadResume } from '../../utils/resumeGenerator'

export default function Hero() {
  const [typedRole, setTypedRole] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [resumeOpen, setResumeOpen] = useState(false)

  useRevealOnScroll()
  useCounterAnimation()

  const roles = ['Robotics Engineer', 'ML Enthusiast', 'Computer Vision Dev', 'Full Stack Developer', 'Drone Builder']

  useEffect(() => {
    const currentRole = roles[roleIndex]
    
    if (isTyping) {
      if (charIndex < currentRole.length) {
        const timeout = setTimeout(() => {
          setTypedRole(currentRole.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, 90)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 1800)
        return () => clearTimeout(timeout)
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setTypedRole(currentRole.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(true)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }, 400)
        return () => clearTimeout(timeout)
      }
    }
  }, [charIndex, isTyping, roleIndex])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleDownload = async () => {
    try {
      await generateAndDownloadResume()
    } catch (err) {
      console.error('Download failed:', err)
    }
  }

  return (
    <>
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onDownload={handleDownload}
      />

      <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">

          {/* Main hero: text left, image+sphere right */}
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-10 mb-14">

            {/* Left: Text + Stats */}
            <div className="flex-1 min-w-0">
              <h1 className="font-display text-[clamp(3.5rem,11vw,9rem)] leading-none tracking-widest mb-4 reveal reveal-delay-1">
                <span className="text-white block">THIRUMARAN</span>
                <span className="grad-full block">B</span>
              </h1>

              <div className="flex items-center gap-3 mb-6 reveal reveal-delay-2">
                <div className="h-px w-10 bg-gradient-to-r from-cyan to-violet"></div>
                <p className="font-mono text-sm md:text-base text-slate-400">
                  <span className="text-cyan font-medium">{typedRole}</span>
                  <span className="text-cyan animate-blink">|</span>
                </p>
              </div>

              <p className="max-w-lg text-slate-400 leading-relaxed text-sm md:text-base mb-10 reveal reveal-delay-3">
                Pursuing B.E in Robotics & Automation at Easwari Engineering College (Exp. 2027). Building real-world systems at the intersection of{' '}
                <span className="text-violet-bright font-medium">AI</span>, <span className="text-cyan font-medium">computer vision</span>, and{' '}
                <span style={{ color: '#f0abfc' }} className="font-medium">autonomous robotics</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-14 reveal reveal-delay-4">
                <button onClick={() => scrollTo('projects')} className="btn-primary">
                  <span>Explore Projects</span>
                </button>
                <button
                  onClick={() => setResumeOpen(true)}
                  className="btn-outline flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                  View Resume
                </button>
                <button onClick={() => scrollTo('contact')} className="btn-outline">
                  Get In Touch →
                </button>
              </div>

              {/* Stats — left-aligned under the text */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal reveal-delay-5">
                <div className="glass rounded-2xl p-5 border-animated glass-hover text-center">
                  <div className="font-display text-5xl grad-cyan counter" data-target="8.7" data-decimal="1">0</div>
                  <div className="text-xs font-semibold text-slate-400 mt-1 tracking-wider uppercase">CGPA</div>
                  <div className="text-xs text-slate-600 mt-0.5">Till 5th Sem</div>
                </div>
                <div className="glass rounded-2xl p-5 border-animated glass-hover text-center">
                  <div className="font-display text-5xl grad-violet counter" data-target="6" data-suffix="+">0</div>
                  <div className="text-xs font-semibold text-slate-400 mt-1 tracking-wider uppercase">Projects</div>
                  <div className="text-xs text-slate-600 mt-0.5">Built & Shipped</div>
                </div>
                <div className="glass rounded-2xl p-5 border-animated glass-hover text-center">
                  <div
                    className="font-display text-5xl counter"
                    style={{
                      background: 'linear-gradient(135deg,#f0abfc,#00f5ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                    data-target="3"
                  >
                    0
                  </div>
                  <div className="text-xs font-semibold text-slate-400 mt-1 tracking-wider uppercase">Internships</div>
                  <div className="text-xs text-slate-600 mt-0.5">Completed</div>
                </div>
                <div className="glass rounded-2xl p-5 border-animated glass-hover text-center">
                  <div className="font-display text-5xl grad-full">
                    12<span className="text-3xl">th</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-400 mt-1 tracking-wider uppercase">National</div>
                  <div className="text-xs text-slate-600 mt-0.5">SAEINDIA ADDC</div>
                </div>
              </div>
            </div>

            {/* Right: Photo on top, TB sphere below */}
            <div className="flex-shrink-0 flex flex-col items-center gap-8 lg:pt-2 reveal reveal-delay-3">

              {/* Profile Image */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[400px]">
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan/50 via-violet/20 to-fuchsia-500/40 rounded-3xl blur-2xl"></div>
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={blazerImage}
                    alt="Thirumaran"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/50 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* TB Sphere with orbits — below the photo */}
              <div className="relative w-48 h-48">
                <div className="orbit-ring absolute" style={{ inset: '0', borderColor: 'rgba(139,92,246,0.2)' }}></div>
                <div className="orbit-ring absolute" style={{ inset: '16px', borderColor: 'rgba(0,245,255,0.15)' }}></div>
                <div className="orbit-ring absolute" style={{ inset: '32px', borderColor: 'rgba(240,171,252,0.1)' }}></div>
                {/* centre sphere */}
                <div className="absolute inset-0 flex items-center justify-center mt-[-80px] ">
                  <div className="w-16 h-16 rounded-full glass flex items-center justify-center glow-box-v animate-float">
                    <span className="font-display text-2xl grad-full">TB</span>
                  </div>
                </div>
                {/* orbit dots */}
                <div className="absolute inset-0 animate-orbit" style={{ transformOrigin: 'center' }}>
                  <div className="w-3 h-3 rounded-full bg-cyan glow-box-cyan absolute -top-1.5 left-1/2 -translate-x-1/2"></div>
                </div>
                <div className="absolute inset-0 animate-orbit-rev" style={{ transformOrigin: 'center', animationDelay: '-4s' }}>
                  <div className="w-2.5 h-2.5 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2" style={{ background: '#a78bfa' }}></div>
                </div>
                <div className="absolute" style={{ inset: '16px', animation: 'orbit 12s linear infinite', transformOrigin: 'center' }}>
                  <div className="w-2 h-2 rounded-full absolute -top-1 left-1/2 -translate-x-1/2" style={{ background: '#f0abfc' }}></div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-float">
          <div className="font-mono text-xs text-slate-500 tracking-widest">SCROLL</div>
          <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
        </div>
      </section>
    </>
  )
}