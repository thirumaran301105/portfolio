import { useRevealOnScroll } from '../../hooks/useAnimations'

export default function Achievements() {
  useRevealOnScroll()

  const achievements = [
    {
      emoji: '🏆',
      title: 'SAEINDIA ADDC 2024 & 2025',
      year: '2024–25',
      description: '12th place nationally with Team HAWKi — built a vision-based autonomous drone for QR detection and payload delivery.',
      accentBg: 'rgba(139,92,246,0.1)',
      accentBorder: 'rgba(139,92,246,0.2)',
    },
    {
      emoji: '💡',
      title: 'ADOBE INDIA HACKATHON',
      year: '2025',
      description: 'Round 1 participant with Team Ctrl+Alt+Del, representing Easwari Engineering College in a national coding challenge.',
      accentBg: 'rgba(0,245,255,0.1)',
      accentBorder: 'rgba(0,245,255,0.2)',
    },
    {
      emoji: '🎓',
      title: 'CISCO NETWORKING ACADEMY',
      year: '2025',
      description: 'Completed all courses — Networking, Cybersecurity, Python, IoT, and Emerging Technologies.',
      accentBg: 'rgba(240,171,252,0.1)',
      accentBorder: 'rgba(240,171,252,0.2)',
    },
    {
      emoji: '📜',
      title: 'MERN STACK CERTIFICATION',
      year: '2025',
      description: 'Full Stack Development certified by Novitech R&D Pvt Ltd after internship completion.',
      accentBg: 'rgba(139,92,246,0.1)',
      accentBorder: 'rgba(139,92,246,0.2)',
    },
  ]

  const education = [
    {
      degree: 'B.E – Robotics & Automation Engineering (Hons.)',
      institution: 'Easwari Engineering College',
      score: '8.7 / 10',
      scoreColor: '#00f5ff',
      period: '2023 – 2027',
    },
    {
      degree: 'HSLC – 12th Standard (CBSE)',
      institution: 'G R Thanghamaligaii Mahalakshmi Vivekananda Vidyalaya',
      score: '82.8%',
      scoreColor: '#a855f7',
      period: '2022 – 2023',
    },
    {
      degree: 'SSLC – 10th Standard (CBSE)',
      institution: 'G R Thanghamaligaii Mahalakshmi Vivekananda Vidyalaya',
      score: '83.8%',
      scoreColor: '#f0abfc',
      period: '2020 – 2021',
    },
  ]

  return (
    <section id="achievements" className="relative z-10 py-28 max-w-6xl mx-auto px-6">
      <p className="font-mono text-xs tracking-widest uppercase mb-3 reveal" style={{ color: '#f0abfc' }}>
        // Recognition
      </p>
      <h2 className="font-display text-6xl md:text-7xl text-white tracking-wide mb-16 reveal reveal-delay-1">
        ACHIEVEMENTS<br />
        <span className="grad-fire">&amp; CERTS</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-5 mb-16">
        {achievements.map((achievement, index) => (
          <div key={index} className={`glass rounded-2xl p-6 border-animated glass-hover flex gap-4 items-start reveal reveal-delay-${index + 1}`}>
            <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl glow-box-v" style={{ background: achievement.accentBg, border: `1px solid ${achievement.accentBorder}` }}>
              {achievement.emoji}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display text-lg text-white tracking-wide">{achievement.title}</h3>
                <span className="font-mono text-xs ml-auto" style={{ color: achievement.emoji === '🏆' ? '#a855f7' : achievement.emoji === '💡' ? '#00f5ff' : achievement.emoji === '🎓' ? '#f0abfc' : '#a855f7' }}>
                  {achievement.year}
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <h3 className="font-display text-4xl text-white tracking-wide mb-8 reveal">EDUCATION</h3>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className={`glass rounded-2xl p-5 border-animated glass-hover flex flex-col md:flex-row md:items-center md:justify-between gap-4 reveal reveal-delay-${index + 1}`}>
            <div>
              <p className="font-semibold text-slate-100">{edu.degree}</p>
              <p className="text-slate-500 text-sm mt-1">{edu.institution}</p>
            </div>
            <div className="flex gap-4 items-center flex-shrink-0">
              <span className="font-bold font-mono" style={{ color: edu.scoreColor }}>
                {edu.score}
              </span>
              <span className="px-3 py-1 rounded-full font-mono text-xs glass border border-white/10 text-slate-400">{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
