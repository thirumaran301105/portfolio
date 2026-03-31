import { useState } from 'react'

export default function Navbar({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Achievements', id: 'achievements' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-night/90 backdrop-blur-xl shadow-2xl border-b border-white/5' : ''
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 flex-shrink-0">
              <div className="absolute inset-0 rounded-lg animate-spin-slow" style={{ background: 'linear-gradient(135deg,#00f5ff,#8b5cf6,#f0abfc)' }}></div>
              <div className="absolute inset-[1.5px] bg-night rounded-lg flex items-center justify-center">
                <span className="font-display text-sm grad-cyan">TB</span>
              </div>
            </div>
            <span className="font-display text-2xl tracking-widest grad-full">THIRUMARAN</span>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="nav-link"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary"
            >
              <span>Hire Me</span>
            </button>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-50"
          >
            <span className="w-6 h-0.5 bg-slate-300 rounded transition-all duration-300 block"></span>
            <span className="w-4 h-0.5 bg-slate-300 rounded transition-all duration-300 block"></span>
            <span className="w-6 h-0.5 bg-slate-300 rounded transition-all duration-300 block"></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 md:hidden transition-transform duration-400 ${
          mobileMenuOpen ? 'open' : ''
        }`}
        style={{ background: 'rgba(2,2,9,0.97)', backdropFilter: 'blur(30px)' }}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-slate-400 text-2xl"
        >
          ✕
        </button>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="font-display text-5xl tracking-wider hover:opacity-70 transition-opacity"
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo('contact')}
          className="font-display text-5xl grad-cyan tracking-wider hover:opacity-70 transition-opacity"
        >
          CONTACT
        </button>
      </div>
    </>
  )
}
