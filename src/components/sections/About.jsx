import { useRevealOnScroll } from '../../hooks/useAnimations'

export default function About() {
  useRevealOnScroll()

  return (
    <section id="about" className="relative z-10 py-28 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-mono text-xs text-cyan tracking-widest uppercase mb-3 reveal">// About Me</p>
          <h2 className="font-display text-6xl md:text-7xl text-white tracking-wide mb-6 reveal reveal-delay-1">
            WHO AM<br />
            <span className="grad-violet">I?</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-4 reveal reveal-delay-2">
            A highly motivated <span className="text-white font-semibold">Robotics & Automation Engineering</span> student with a passion for building intelligent
            systems that solve real-world problems. Currently maintaining a <span className="text-cyan font-semibold">CGPA of 8.7/10</span>.
          </p>
          <p className="text-slate-400 leading-relaxed mb-8 reveal reveal-delay-3">
            I thrive at the crossroads of hardware and software — from flying <span className="text-violet-bright font-semibold">autonomous drones</span> to building{' '}
            <span style={{ color: '#f0abfc' }} className="font-semibold">
              ML-powered vision systems
            </span>{' '}
            and deploying full-stack web apps.
          </p>
          <div className="flex gap-4 reveal reveal-delay-4">
            <a href="mailto:thirumaran301105@gmail.com" className="btn-outline text-sm">
              ✉ Email Me
            </a>
            <a href="tel:+919791006424" className="font-mono text-xs text-slate-500 self-center">
              +91 97910 06424
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-2">
          {/* Animated info card */}
          <div className="glass rounded-3xl p-8 border-animated relative overflow-hidden">
            <div className="scan-line"></div>
            <div className="space-y-5">
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Degree</span>
                <span className="text-sm text-slate-200 font-medium">B.E Robotics & Automation</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">College</span>
                <span className="text-sm text-slate-200 font-medium text-right">Easwari Engineering College</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">CGPA</span>
                <span className="text-sm font-bold text-cyan">8.7 / 10</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Batch</span>
                <span className="text-sm text-slate-200 font-medium">2023 – 2027</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Location</span>
                <span className="text-sm text-slate-200 font-medium">Chennai, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
