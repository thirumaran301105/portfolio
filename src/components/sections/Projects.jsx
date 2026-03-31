import { useRevealOnScroll, useTiltCard } from '../../hooks/useAnimations'

export default function Projects() {
  useRevealOnScroll()
  useTiltCard()

  const projects = [
    {
      title: 'AUTONOMOUS DRONE',
      subtitle: 'SAEINDIA ADDC — Team HAWKi',
      description:
        'Vision-based drone using Raspberry Pi & Pixhawk for QR detection and payload delivery. Secured 12th place nationally.',
      tags: ['Python', 'OpenCV', 'Pixhawk'],
      accentColor: '#00f5ff',
      category: 'Robotics',
    },
    {
      title: 'JARVIS AI ASSISTANT',
      subtitle: 'Voice-Powered Automation',
      description:
        'AI-powered voice assistant in Python automating laptop tasks, app control, web searches, and text-to-speech responses.',
      tags: ['Python', 'NLP', 'TTS'],
      accentColor: '#a855f7',
      category: 'AI',
    },
    {
      title: 'SELF-BALANCING ROBOT',
      subtitle: 'PID Control System',
      description:
        'Two-wheel robot using Arduino and MPU6050 with real-time PID stabilization algorithm.',
      tags: ['Arduino', 'PID', 'C++'],
      accentColor: '#f0abfc',
      category: 'Robotics',
    },
    {
      title: 'TIC-TAC-TOE AI',
      subtitle: 'Machine Learning Game',
      description:
        'Game AI using PyTorch with both Minimax algorithm and Deep Q-Network (DQN) for intelligent move prediction.',
      tags: ['PyTorch', 'DQN', 'Minimax'],
      accentColor: '#10b981',
      category: 'AI',
    },
    {
      title: 'SMART TROLLEY',
      subtitle: 'Vision-Based Recognition',
      description:
        'ML-powered shopping trolley with product recognition via vision system. Automatic cart updates without RFID.',
      tags: ['ML', 'Python', 'IoT'],
      accentColor: '#f59e0b',
      category: 'AI',
    },
    {
      title: 'YOLO DETECTION',
      subtitle: 'Real-Time Object Detection',
      description:
        'Live object detection using YOLO and OpenCV for camera-feed bounding box labeling with Python.',
      tags: ['YOLO', 'OpenCV', 'Python'],
      accentColor: '#00f5ff',
      category: 'AI',
    },
  ]

  const getColorStyles = (color) => {
    const colorMap = {
      '#00f5ff': { border: 'rgba(0,245,255,0.2)', text: 'rgba(0,245,255,0.8)' },
      '#a855f7': { border: 'rgba(168,85,247,0.2)', text: 'rgba(168,85,247,0.9)' },
      '#f0abfc': { border: 'rgba(240,171,252,0.2)', text: 'rgba(240,171,252,0.9)' },
      '#10b981': { border: 'rgba(16,185,129,0.2)', text: 'rgba(16,185,129,0.9)' },
      '#f59e0b': { border: 'rgba(245,158,11,0.2)', text: 'rgba(245,158,11,0.9)' },
    }
    return colorMap[color] || colorMap['#00f5ff']
  }

  // 🔥 Group by category
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) acc[project.category] = []
    acc[project.category].push(project)
    return acc
  }, {})

  return (
    <section id="projects" className="relative z-10 py-28 max-w-6xl mx-auto px-6">
      <p className="font-mono text-xs text-violet-bright tracking-widest uppercase mb-3 reveal">
        // Featured Work
      </p>

      <h2 className="font-display text-6xl md:text-7xl text-white tracking-wide mb-16 reveal reveal-delay-1">
        WHAT I'VE<br />
        <span className="grad-cyan">BUILT</span>
      </h2>

      {/* 🔥 Categories */}
      {Object.entries(groupedProjects).map(([category, items], catIndex) => (
        <div key={category} className="mb-16">
          
          {/* Category Title */}
          <h3 className="text-2xl font-display text-white mb-6 tracking-wide reveal">
            {category.toUpperCase()}
          </h3>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((project, index) => {
              const styles = getColorStyles(project.accentColor)

              return (
                <div
                  key={index}
                  className="proj-card glass rounded-2xl p-6 border-animated glass-hover relative overflow-hidden tilt-card reveal"
                >
                  {/* 🔥 Ultra Soft Gradient */}
                  <div
                    className="proj-accent absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at top right, ${project.accentColor}03 20%, transparent 85%)`,
                      filter: 'blur(35px)',
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-display text-xl text-white tracking-wide mb-2">
                      {project.title}
                    </h3>

                    <p className="font-mono text-xs mb-3" style={{ color: project.accentColor }}>
                      {project.subtitle}
                    </p>

                    <p className="text-slate-400 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="skill-pill"
                          style={{ borderColor: styles.border, color: styles.text }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ✨ Hover Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${project.accentColor}08 0%, transparent 70%)`,
                    }}
                  ></div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  )
}