import { useRevealOnScroll, useSkillBarAnimation } from '../../hooks/useAnimations'

export default function Skills() {
  useRevealOnScroll()
  useSkillBarAnimation()

  const skillCategories = [
    {
      title: 'AI & Computer Vision',
      color: 'text-cyan',
      gradientStart: '#00f5ff',
      gradientEnd: '#8b5cf6',
      skills: [
        { name: 'YOLO / OpenCV', percentage: 92 },
        { name: 'Python / ML', percentage: 88 },
        { name: 'PyTorch / Deep Learning', percentage: 78 },
        { name: 'Computer Vision Systems', percentage: 85 },
      ],
    },
    {
      title: 'Hardware & Embedded',
      color: 'text-violet-bright',
      gradientStart: '#8b5cf6',
      gradientEnd: '#f0abfc',
      skills: [
        { name: 'Arduino / Raspberry Pi', percentage: 90 },
        { name: 'SolidWorks / CAD', percentage: 80 },
        { name: 'IoT / Drone Systems', percentage: 82 },
        { name: 'Embedded Systems Design', percentage: 75 },
      ],
    },
    {
      title: 'Web Development',
      color: 'text-magenta-bright',
      gradientStart: '#f0abfc',
      gradientEnd: '#00f5ff',
      skills: [
        { name: 'React.js / JavaScript', percentage: 83 },
        { name: 'Node.js / Express', percentage: 78 },
        { name: 'MongoDB / SQL', percentage: 80 },
        { name: 'Flask / Python APIs', percentage: 77 },
      ],
    },
    {
      title: 'Tools & Design',
      tools: ['Git / GitHub', 'Figma', 'Vercel', 'Photoshop', 'System Design', 'Graphic Design', 'Photography', 'Java', 'HTML/CSS', 'Tailwind CSS', 'Linux', 'Problem Solving'],
    },
  ]

  return (
    <section id="skills" className="relative z-10 py-28 max-w-6xl mx-auto px-6">
      <p className="font-mono text-xs text-cyan tracking-widest uppercase mb-3 reveal">// Technical Arsenal</p>
      <h2 className="font-display text-6xl md:text-7xl text-white tracking-wide mb-16 reveal reveal-delay-1">
        MY<br />
        <span className="grad-violet">SKILLS</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className={`reveal reveal-delay-${index + 1}`}>
            <h3 className="font-mono text-xs text-violet-bright uppercase tracking-widest mb-6">{category.title}</h3>

            {category.tools ? (
              // Tools & Design section
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, idx) => (
                  <span key={idx} className="skill-pill">
                    {tool}
                  </span>
                ))}
              </div>
            ) : (
              // Skills with bars
              <div className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-300">{skill.name}</span>
                      <span className="font-mono text-xs" style={{ color: category.gradientStart }}>
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{
                          background: `linear-gradient(90deg, ${category.gradientStart}, ${category.gradientEnd})`,
                          width: '0%',
                        }}
                        data-width={skill.percentage}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
