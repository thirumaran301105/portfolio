import { useRevealOnScroll } from '../../hooks/useAnimations'

export default function Contact() {
  useRevealOnScroll()

  const contactLinks = [
    {
      emoji: '✉',
      label: 'Email',
      value: 'thirumaran301105@gmail.com',
      href: 'mailto:thirumaran301105@gmail.com',
      hoverColor: 'group-hover:border-cyan/40',
      textColor: 'group-hover:text-cyan',
    },
    {
      emoji: '☎',
      label: 'Phone',
      value: '+91 97910 06424',
      href: 'tel:+919791006424',
      hoverColor: 'group-hover:border-violet/40',
      textColor: 'group-hover:text-violet-bright',
    },
    {
      emoji: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/thirumaran',
      href: 'https://www.linkedin.com/in/thirumaran-b-a587532b9/',
      hoverColor: 'group-hover:border-cyan/40',
      textColor: 'group-hover:text-cyan',
    },
    {
      emoji: '🐙',
      label: 'GitHub',
      value: 'github.com/thirumaran',
      href: 'https://github.com/thirumaran301105/',
      hoverColor: 'group-hover:border-violet/40',
      textColor: 'group-hover:text-violet-bright',
    },
    {
      emoji: '⚡',
      label: 'LeetCode',
      value: 'leetcode.com/thirumaran',
      href: 'https://leetcode.com/u/thirumaran301105/',
      hoverColor: 'group-hover:border-cyan/40',
      textColor: 'group-hover:text-cyan',
    },
  ]

  return (
    <section id="contact" className="relative z-10 py-28 max-w-3xl mx-auto px-6 text-center">
      <p className="font-mono text-xs text-cyan tracking-widest uppercase mb-4 reveal">// Let's Connect</p>
      <h2 className="font-display text-[clamp(3rem,10vw,7rem)] text-white tracking-wide mb-6 reveal reveal-delay-1 leading-none">
        LET'S<br />
        <span className="grad-fire">WORK</span>
        <br />
        <span className="grad-violet">TOGETHER</span>
      </h2>
      <p className="text-slate-400 leading-relaxed mb-12 max-w-lg mx-auto reveal reveal-delay-2">
        Open to internships, research roles, and exciting projects in robotics, ML, and full-stack development. Let's build something unforgettable.
      </p>

      <div className="glass rounded-3xl p-8 border-animated mb-8 reveal reveal-delay-3">
        <div className="space-y-1">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-4 rounded-xl transition-all hover:bg-white/5 group"
            >
              <div className={`w-10 h-10 rounded-xl glass flex items-center justify-center text-lg border border-white/10 ${link.hoverColor} transition-colors`}>{link.emoji}</div>
              <div className="text-left">
                <div className="font-mono text-xs text-slate-500 uppercase tracking-wider">{link.label}</div>
                <div className="text-slate-300 text-sm">{link.value}</div>
              </div>
              <div className={`ml-auto text-slate-600 ${link.textColor} transition-colors`}>→</div>
            </a>
          ))}
        </div>
      </div>

      <button
        onClick={() => window.location.href = 'mailto:thirumaran301105@gmail.com'}
        className="btn-primary w-full reveal reveal-delay-4"
      >
        <span className="flex items-center justify-center gap-2">Send Me a Message ✦</span>
      </button>
    </section>
  )
}
