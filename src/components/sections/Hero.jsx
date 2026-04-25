import { useState, useEffect } from 'react'
import { useRevealOnScroll, useCounterAnimation } from '../../hooks/useAnimations'
import { generateAndDownloadResume } from '../../utils/resumeGenerator'
import ResumeModal from '../ResumeModal'
import blazerImage from '../assests/Blazer new.jpeg'

export default function Hero() {
  const [typedRole, setTypedRole] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [resumeLoading, setResumeLoading] = useState(false)
  const [showResumeModal, setShowResumeModal] = useState(false)

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

  const handleDownloadResume = async () => {
    setResumeLoading(true)
    try {
      await generateAndDownloadResume()
    } catch (error) {
      console.error('Error downloading resume:', error)
      alert('Failed to generate resume: ' + error.message)
    } finally {
      setResumeLoading(false)
    }
  }

  const handleViewResume = () => {
    setShowResumeModal(true)
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Decorative Orbits */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
        <div className="relative w-64 h-64">
          <div className="orbit-ring absolute" style={{ inset: '0', borderColor: 'rgba(139,92,246,0.15)' }}></div>
          <div className="orbit-ring absolute" style={{ inset: '20px', borderColor: 'rgba(0,245,255,0.1)' }}></div>
          <div className="orbit-ring absolute" style={{ inset: '40px', borderColor: 'rgba(240,171,252,0.08)' }}></div>

          {/* center */}
          <div className="relative inset-0 flex items-center justify-center w-[100px] pt-10 mt-[320px] ">
            <div className="w-20 h-20 rounded-full glass flex items-center justify-center glow-box-v animate-float bg-gradient-to-r from-cyan/70 via-violet/50 to-magenta/20">
              <span className="font-display text-3xl grad-full">TB</span>
            </div>
          </div>

          {/* orbit dots */}
          <div className="absolute inset-0 animate-orbit" style={{ transformOrigin: 'center' }}>
            <div className="w-3 h-3 rounded-full bg-cyan glow-box-cyan absolute -top-1.5 left-1/2 -translate-x-1/2"></div>
          </div>
          <div className="absolute inset-0 animate-orbit-rev" style={{ transformOrigin: 'center', animationDelay: '-4s' }}>
            <div className="w-2.5 h-2.5 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2" style={{ background: '#a78bfa' }}></div>
          </div>
          <div className="absolute" style={{ inset: '20px', animation: 'orbit 12s linear infinite', transformOrigin: 'center' }}>
            <div className="w-2 h-2 rounded-full absolute -top-1 left-1/2 -translate-x-1/2" style={{ background: '#f0abfc' }}></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(300px, 1fr)', gap: '3rem', alignItems: 'center' }}>
        {/* Left Content */}
        <div>

        {/* Name */}
        <h1 className="font-display text-[clamp(4rem,14vw,10rem)] leading-none tracking-widest mb-4 reveal reveal-delay-1">
          <span className="text-white block">THIRUMARAN<span className="grad-full block">B</span></span>
        </h1>

        {/* Role Typewriter */}
        <div className="flex items-center gap-3 mb-6 reveal reveal-delay-2">
          <div className="h-px w-10 bg-gradient-to-r from-cyan to-violet"></div>
          <p className="font-mono text-sm md:text-base text-slate-400">
            <span className="text-cyan font-medium">{typedRole}</span>
            <span className="text-cyan animate-blink">|</span>
          </p>
        </div>

        {/* Bio */}
        <p className="max-w-xl text-slate-400 leading-relaxed text-sm md:text-base mb-10 reveal reveal-delay-3">
          Pursuing B.E in Robotics & Automation at Easwari Engineering College (Exp. 2027). Building real-world systems at the intersection of{' '}
          <span className="text-violet-bright font-medium">AI</span>, <span className="text-cyan font-medium">computer vision</span>, and{' '}
          <span style={{ color: '#f0abfc' }} className="font-medium">
            autonomous robotics
          </span>
          .
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-16 reveal reveal-delay-4">
          <button onClick={() => scrollTo('projects')} className="btn-primary">
            <span>Explore Projects</span>
          </button>
          <button 
            onClick={handleViewResume}
            className="btn-primary"
            title="View your professional resume"
          >
            <span>View Resume</span>
          </button>
          <button onClick={() => scrollTo('contact')} className="btn-outline">
            Get In Touch →
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal reveal-delay-5">
          <div className="glass rounded-2xl p-5 border-animated glass-hover text-center">
            <div className="font-display text-5xl grad-cyan counter" data-target="8.7" data-decimal="1">
              0
            </div>
            <div className="text-xs font-semibold text-slate-400 mt-1 tracking-wider uppercase">CGPA</div>
            <div className="text-xs text-slate-600 mt-0.5">Till 5th Sem</div>
          </div>
          <div className="glass rounded-2xl p-5 border-animated glass-hover text-center">
            <div className="font-display text-5xl grad-violet counter" data-target="6" data-suffix="+">
              0
            </div>
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

        {/* Right Content - Image */}
        <div className="items-center justify-center relative w-[950px] pt-10 mt-[-450px] " style={{ display: 'flex' }}>
          <div className="relative w-[400px] max-w-sm aspect-square flex items-center justify-center mx-auto reveal reveal-delay-3 ">
            {/* Glow effect background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan/40 via-violet/20 to-magenta/40 rounded-3xl blur-3xl"></div>
            
            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl shadow-2xl reveal reveal-delay-2 w-[300px] h-full flex items-center justify-center">
              <img 
                src={blazerImage} 
                alt="Thirumaran" 
                className="w-full h-full object-contain object-center transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-float">
        <div className="font-mono text-xs text-slate-500 tracking-widest">SCROLL</div>
        <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={showResumeModal} onClose={() => setShowResumeModal(false)} onDownload={handleDownloadResume} />
    </section>
  )
}
