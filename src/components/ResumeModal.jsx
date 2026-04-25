import { useState } from 'react'
import { getResumeContent } from '../utils/resumeGenerator'

export default function ResumeModal({ isOpen, onClose, onDownload }) {
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const resumeContent = getResumeContent()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-night border border-white/10 rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl glass">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent">
          <h2 className="text-2xl font-display grad-cyan">Professional Resume</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-2xl transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900/30 to-transparent p-6 rounded-lg border border-blue-500/20">
            <h1 className="text-4xl font-bold text-white mb-2">THIRUMARAN B</h1>
            <p className="text-blue-300 text-lg mb-3">Robotics & Automation Engineer | ML Enthusiast | Full-Stack Developer</p>
            <p className="text-slate-400 text-sm">
              📱 +91 97910 06424 | 📧 thirumaran301105@gmail.com
            </p>
            <p className="text-slate-400 text-sm">💼 LinkedIn | GitHub | LeetCode</p>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xl font-bold text-cyan mb-3 border-b border-cyan/30 pb-2">Professional Summary</h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              Motivated Robotics & Automation Engineering student (B.E., graduating 2027) with hands-on experience in computer vision, machine learning, full-stack web development, and embedded systems. Proven ability to lead cross-functional prototype builds, participate in national-level competitions, and deliver end-to-end solutions. Filed a patent in UAV payload delivery using computer vision. Seeking opportunities to apply technical expertise to impactful, real-world engineering challenges.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-bold text-cyan mb-3 border-b border-cyan/30 pb-2">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {resumeContent.skills.map((skill, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="font-semibold text-blue-400 min-w-fit">{skill.category}:</span>
                  <span className="text-slate-300">{skill.items}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-xl font-bold text-cyan mb-3 border-b border-cyan/30 pb-2">Work Experience</h3>
            <div className="space-y-4">
              {resumeContent.experience.map((job, idx) => (
                <div key={idx} className="border-l-2 border-purple-500/50 pl-4">
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <h4 className="font-semibold text-white">{job.title}</h4>
                    <span className="text-slate-500 text-sm whitespace-nowrap">{job.period}</span>
                  </div>
                  <p className="text-purple-300 text-sm italic mb-2">{job.company}</p>
                  <ul className="space-y-1">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="text-slate-400 text-sm flex gap-2">
                        <span className="text-cyan">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-bold text-cyan mb-3 border-b border-cyan/30 pb-2">Education</h3>
            <div className="space-y-3">
              {resumeContent.education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start gap-2">
                  <div>
                    <h4 className="font-semibold text-white">{edu.degree}</h4>
                    <p className="text-slate-400 text-sm">{edu.institution}</p>
                  </div>
                  <div className="text-right text-sm text-slate-500">
                    <p>{edu.period}</p>
                    <p>{edu.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xl font-bold text-cyan mb-3 border-b border-cyan/30 pb-2">Key Projects</h3>
            <div className="space-y-3">
              {resumeContent.projects.map((project, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-emerald-300">{project.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Patent */}
          <div>
            <h3 className="text-xl font-bold text-cyan mb-3 border-b border-cyan/30 pb-2">Patent</h3>
            <h4 className="font-semibold text-white mb-1">Secure Payload Delivery Mechanism for UAV using Computer Vision System</h4>
            <p className="text-slate-400 text-sm">Application No: 202541062643 | Publication Date: 21 November 2025</p>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-bold text-cyan mb-3 border-b border-cyan/30 pb-2">Achievements & Leadership</h3>
            <ul className="space-y-2">
              {resumeContent.achievements.map((achievement, idx) => (
                <li key={idx} className="text-slate-400 text-sm flex gap-2">
                  <span className="text-cyan">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold text-cyan mb-3 border-b border-cyan/30 pb-2">Certifications</h3>
            <div className="space-y-2">
              {resumeContent.certifications.map((cert, idx) => (
                <div key={idx} className="flex justify-between items-start gap-2 text-sm">
                  <span className="text-slate-300">{cert.name}</span>
                  <span className="text-slate-500 whitespace-nowrap">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 p-6 flex gap-4 justify-end bg-night">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg border border-slate-500 text-slate-300 hover:bg-slate-500/10 transition-colors"
          >
            Close
          </button>
          <button
            onClick={onDownload}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan/50 transition-all"
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  )
}
