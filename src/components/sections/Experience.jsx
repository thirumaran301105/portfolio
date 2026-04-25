import { useRevealOnScroll } from '../../hooks/useAnimations'

export default function Experience() {
  useRevealOnScroll()

  const experiences = [
    {
      title: 'MACHINE LEARNING INTERN',
      company: 'READ AUTOMATION',
      period: 'Dec 2025 – Present',
      color: '#00f5ff',
      borderColor: 'rgba(0,245,255,0.3)',
      textColor: 'rgba(0,245,255,0.8)',
      points: [
        'Actively building YOLO & OpenCV–based real-time object detection pipelines in Python',
        'Live video analysis systems for industrial monitoring and automation',
      ],
    },
    {
      title: 'DESIGN INTERN',
      company: 'NUTECH CNC PVT LTD, CHENNAI',
      period: 'May – Jun 2025',
      color: '#a855f7',
      borderColor: 'rgba(168,85,247,0.3)',
      textColor: 'rgba(168,85,247,0.9)',
      points: [
        'Designed Battery Heat Sink & Oreo-shaped pill box using SolidWorks',
        'Assisted in developing an Industrial Monitoring Dashboard',
      ],
    },
    {
      title: 'WEB DEVELOPMENT INTERN',
      company: 'NOVITECH R&D PVT LTD',
      period: 'Jan – Feb 2025',
      color: '#f0abfc',
      borderColor: 'rgba(240,171,252,0.3)',
      textColor: 'rgba(240,171,252,0.9)',
      points: [
        'Learned and built MERN stack projects (MongoDB, Express.js, React, Node.js)',
        'Developed React.js websites for live client deployments',
      ],
    },
  ]

  return (
    <section id="experience" className="relative z-10 py-28 max-w-6xl mx-auto px-6">
      <p className="font-mono text-xs text-cyan tracking-widest uppercase mb-3 reveal">Work Experience</p>
      <h2 className="font-display text-6xl md:text-7xl text-white tracking-wide mb-16 reveal reveal-delay-1">
        WHERE I'VE<br />
        <span className="grad-fire">WORKED</span>
      </h2>

      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet via-cyan to-transparent hidden md:block"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className={`reveal reveal-delay-${index + 1} flex gap-8 md:gap-12 items-start`}>
              <div className="hidden md:flex flex-col items-center flex-shrink-0">
                <div className="timeline-dot w-4 h-4 rounded-full z-10 flex-shrink-0" style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}` }}></div>
              </div>
              <div className="glass rounded-2xl p-6 flex-1 border-animated glass-hover relative overflow-hidden group">
                <div className="proj-accent" style={{ background: `radial-gradient(ellipse at top right, ${exp.color}05 25%, transparent 60%)` }}></div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display text-2xl text-white tracking-wide">{exp.title}</h3>
                    <p className="font-semibold text-sm mt-0.5" style={{ color: exp.color }}>
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-flex px-3 py-1 rounded-full font-mono text-xs border flex-shrink-0" style={{ borderColor: exp.borderColor, color: exp.color, background: `${exp.color}15` }}>
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2 text-slate-400 text-sm">
                      <span style={{ color: exp.color }} className="mt-1">
                        ▸
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
