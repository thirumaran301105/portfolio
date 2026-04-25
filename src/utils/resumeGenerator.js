import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  AlignmentType,
  LevelFormat,
  BorderStyle,
  WidthType,
  ShadingType,
  TabStopType,
} from 'docx'

// ── Colours ─────────────────────────────────────────────────────────────────
const NAVY = "1B2A4A"
const ACCENT = "2E6DA4"
const LIGHT = "EEF3F9"
const GRAY = "5A6472"
const WHITE = "FFFFFF"
const BLACK = "1A1A1A"

// ── Page dimensions (A4) ────────────────────────────────────────────────────
const PAGE_W = 11906   // DXA
const L_MARGIN = 1080
const R_MARGIN = 1080
const CONTENT = PAGE_W - L_MARGIN - R_MARGIN  // 9746 DXA

// ── Helpers ──────────────────────────────────────────────────────────────────
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" }
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder }

function spacer(pts = 4) {
  return new Paragraph({ children: [new TextRun("")], spacing: { before: 0, after: pts * 20 } })
}

function sectionHead(text) {
  return new Paragraph({
    children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 22, color: ACCENT, font: "Calibri" })],
    spacing: { before: 200, after: 60 },
    border: {bottom: { style: BorderStyle.SINGLE, size: 8, color: ACCENT, space: 4 }}
  })
}

function twoColRow(leftRuns, rightText) {
  const TABS = [{ type: TabStopType.RIGHT, position: CONTENT }]
  return new Paragraph({
    tabStops: TABS,
    children: [
      ...leftRuns,
      new TextRun({ text: "\t" }),
      new TextRun({ text: rightText, size: 17, color: GRAY, font: "Calibri" })
    ],
    spacing: { before: 120, after: 30 }
  })
}

function orgLine(text) {
  return new Paragraph({
    children: [new TextRun({ text, italics: true, size: 18, color: GRAY, font: "Calibri" })],
    spacing: { before: 0, after: 30 }
  })
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    children: [new TextRun({ text, size: 19, color: BLACK, font: "Calibri" })],
    spacing: { before: 30, after: 30 }
  })
}

function bodyPara(text) {
  return new Paragraph({
    children: [new TextRun({ text, size: 19, color: BLACK, font: "Calibri" })],
    spacing: { before: 30, after: 40 }
  })
}

function headerTable() {
  return new Table({
    width: { size: CONTENT, type: WidthType.DXA },
    columnWidths: [CONTENT],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: CONTENT, type: WidthType.DXA },
            shading: { fill: NAVY, type: ShadingType.CLEAR },
            margins: { top: 200, bottom: 200, left: 300, right: 300 },
            borders: noBorders,
            children: [
              new Paragraph({
                children: [new TextRun({ text: "THIRUMARAN B", bold: true, size: 52, color: WHITE, font: "Calibri" })],
                spacing: { before: 0, after: 60 }
              }),
              new Paragraph({
                children: [new TextRun({text: "Robotics & Automation Engineer  |  ML Enthusiast  |  Full-Stack Developer", size: 21, color: "BDD5F0", font: "Calibri"})],
                spacing: { before: 0, after: 100 }
              }),
              new Paragraph({
                children: [new TextRun({text: "+91 97910 06424   |   thirumaran301105@gmail.com", size: 18, color: WHITE, font: "Calibri"})],
                spacing: { before: 0, after: 40 }
              }),
              new Paragraph({
                children: [new TextRun({text: "LinkedIn   |   GitHub   |   LeetCode", size: 18, color: "BDD5F0", font: "Calibri"})],
                spacing: { before: 0, after: 0 }
              }),
            ]
          })
        ]
      })
    ]
  })
}

function skillsTable(rows) {
  const col1 = Math.round(CONTENT * 0.32)
  const col2 = CONTENT - col1
  const tRows = rows.map((r, i) =>
    new TableRow({
      children: [
        new TableCell({
          width: { size: col1, type: WidthType.DXA },
          shading: { fill: i % 2 === 0 ? WHITE : LIGHT, type: ShadingType.CLEAR },
          borders: noBorders,
          margins: { top: 60, bottom: 60, left: 80, right: 80 },
          children: [
            new Paragraph({
              children: [new TextRun({ text: r[0], bold: true, size: 18, color: NAVY, font: "Calibri" })],
              spacing: { before: 0, after: 0 }
            })
          ]
        }),
        new TableCell({
          width: { size: col2, type: WidthType.DXA },
          shading: { fill: i % 2 === 0 ? WHITE : LIGHT, type: ShadingType.CLEAR },
          borders: noBorders,
          margins: { top: 60, bottom: 60, left: 80, right: 80 },
          children: [
            new Paragraph({
              children: [new TextRun({ text: r[1], size: 18, color: BLACK, font: "Calibri" })],
              spacing: { before: 0, after: 0 }
            })
          ]
        }),
      ]
    })
  )

  return new Table({ width: { size: CONTENT, type: WidthType.DXA }, columnWidths: [col1, col2], rows: tRows })
}

export async function generateAndDownloadResume() {
  try {
    const children = []

    // Header
    children.push(headerTable())
    children.push(spacer(6))

    // Professional Summary
    children.push(sectionHead("Professional Summary"))
    children.push(bodyPara("Motivated Robotics & Automation Engineering student (B.E., graduating 2027) with hands-on experience in " +
      "computer vision, machine learning, full-stack web development, and embedded systems. Proven ability to lead " +
      "cross-functional prototype builds, participate in national-level competitions, and deliver end-to-end solutions. " +
      "Filed a patent in UAV payload delivery using computer vision. Seeking opportunities to apply technical expertise " +
      "to impactful, real-world engineering challenges."))

    // Technical Skills
    children.push(sectionHead("Technical Skills"))
    children.push(skillsTable([
      ["Programming Languages", "Python, Java, JavaScript, HTML / CSS"],
      ["Web Development", "React.js, Node.js, Express.js, MongoDB (MERN), Flask, Vercel"],
      ["AI / ML / CV", "Machine Learning, YOLO, OpenCV, PyTorch, Computer Vision"],
      ["Embedded & IoT", "Arduino, Raspberry Pi, Embedded Systems Design, IoT & Home Automation"],
      ["CAD / Design", "SolidWorks, CAD, Figma, Adobe Photoshop, Graphic Design"],
      ["Databases", "SQL, NoSQL"],
      ["DevOps & Tools", "Git, System Design"],
      ["Soft Skills", "Problem Solving, Team Leadership, Photography"],
    ]))

    // Work Experience
    children.push(sectionHead("Work Experience"))

    children.push(twoColRow([new TextRun({ text: "Machine Learning Intern", bold: true, size: 20, color: NAVY, font: "Calibri" })], "Dec 2025 – Present"))
    children.push(orgLine("READ AUTOMATION"))
    children.push(bullet("Developing real-time object detection pipelines using YOLO and OpenCV in Python."))
    children.push(bullet("Working on live video analysis for automated inspection and monitoring systems."))
    children.push(spacer(3))

    children.push(twoColRow([new TextRun({ text: "Design Intern", bold: true, size: 20, color: NAVY, font: "Calibri" })], "May 2025 – Jun 2025"))
    children.push(orgLine("Nutech CNC Pvt Ltd, Chennai"))
    children.push(bullet("Designed a battery heat sink and Oreo-shaped pill box enclosure using SolidWorks."))
    children.push(bullet("Assisted in developing an Industrial Monitoring Dashboard for shop-floor operations."))
    children.push(spacer(3))

    children.push(twoColRow([new TextRun({ text: "Web Development Intern", bold: true, size: 20, color: NAVY, font: "Calibri" })], "Jan 2025 – Feb 2025"))
    children.push(orgLine("Novitech R&D Pvt Ltd"))
    children.push(bullet("Gained proficiency in the MERN stack (MongoDB, Express.js, React, Node.js)."))
    children.push(bullet("Developed responsive React.js web applications for client-facing projects."))

    // Education
    children.push(sectionHead("Education"))

    const eduData = [
      ["B.E. – Robotics and Automation Engineering (Hons.)", "Easwari Engineering College", "2023 – 2027", "CGPA: 8.7 / 10 (till 5th sem)"],
      ["HSLC (12th Grade) – CBSE", "G R Thanghamaligaii Mahalakshmi Vivekananda Vidyalaya", "2022 – 2023", "82.8%"],
      ["SSLC (10th Grade) – CBSE", "G R Thanghamaligaii Mahalakshmi Vivekananda Vidyalaya", "2020 – 2021", "83.8%"],
    ]

    eduData.forEach(([deg, inst, yr, grade]) => {
      children.push(twoColRow([new TextRun({ text: deg, bold: true, size: 20, color: NAVY, font: "Calibri" })], yr))
      children.push(orgLine(`${inst}   |   ${grade}`))
      children.push(spacer(2))
    })

    // Projects
    children.push(sectionHead("Key Projects"))

    const projects = [
      ["Autonomous Drone – SAEINDIA ADDC (Team HAWKi)", "Built a vision-based autonomous drone with Raspberry Pi and Pixhawk for QR detection and precision payload delivery. Secured 12th place nationally (2024)."],
      ["Jarvis AI Virtual Assistant", "Developed an AI-powered voice assistant in Python with voice command recognition, task automation, app launching, web search, and text-to-speech output."],
      ["Self-Balancing Robot with PID Control", "Designed a two-wheeled Arduino robot stabilised using an MPU6050 IMU and a tuned PID controller."],
      ["Tic-Tac-Toe AI using Machine Learning", "Built a Tic-Tac-Toe AI in Python/PyTorch combining Minimax and Deep Q-Network (DQN) strategies via Q-learning."],
      ["Smart Trolley with Vision-Based Product Recognition", "ML-powered smart shopping trolley that identifies products in real-time through a camera system, enabling automatic cart updates without RFID."],
      ["YOLO & OpenCV Object Detection System", "Real-time object detection pipeline using YOLOv8 and OpenCV for live-camera detection with bounding boxes and class labels."],
    ]

    projects.forEach(([title, desc]) => {
      children.push(new Paragraph({
        children: [new TextRun({ text: title, bold: true, size: 19, color: ACCENT, font: "Calibri" })],
        spacing: { before: 80, after: 20 }
      }))
      children.push(bodyPara(desc))
    })

    // Patent
    children.push(sectionHead("Patent"))
    children.push(new Paragraph({
      children: [new TextRun({ text: "Secure Payload Delivery Mechanism for UAV using Computer Vision System", bold: true, size: 19, color: BLACK, font: "Calibri" })],
      spacing: { before: 60, after: 30 }
    }))
    children.push(orgLine("Application No: 202541062643   |   Publication Date: 21 November 2025"))

    // Achievements
    children.push(sectionHead("Achievements & Leadership"))
    children.push(bullet("Secured 12th place nationally in SAEINDIA ADDC 2024 with Team HAWKi — vision-based autonomous drone for QR detection and payload delivery."))
    children.push(bullet("Participated in Adobe India Hackathon (Round 1) with Team Ctrl+Alt+Del, representing Easwari Engineering College in a national-level coding challenge."))
    children.push(bullet("Led multiple IoT and robotics prototype builds as team project lead, coordinating hardware-software integration."))
    children.push(bullet("Contributed to drone design and computer vision modules during the SAEINDIA ADDC competition."))
    children.push(bullet("Managed website deployment and Git-based version control for development projects."))

    // Certifications
    children.push(sectionHead("Certifications"))

    const certs = [
      ["SAEINDIA ADDC – Autonomous Drone Development Competition (2024, 2025, 2026)", "Jun 2024 / Jun 2025 / Jun 2026"],
      ["Cisco Networking Academy – Networking, Cybersecurity, Python, IoT & Emerging Technologies", "Jun 2025 – Dec 2025"],
      ["Full Stack Development (MERN Stack) – Novitech R&D Pvt Ltd", "February 2025"],
    ]

    certs.forEach(([name, date]) => {
      children.push(twoColRow([new TextRun({ text: name, size: 19, color: BLACK, font: "Calibri" })], date))
    })

    // Build document
    const doc = new Document({
      numbering: {
        config: [
          {
            reference: "bullets",
            levels: [
              {
                level: 0,
                format: LevelFormat.BULLET,
                text: "\u2022",
                alignment: AlignmentType.LEFT,
                style: {
                  paragraph: { indent: { left: 500, hanging: 260 } },
                  run: { font: "Calibri", size: 19, color: BLACK }
                }
              }
            ]
          }
        ]
      },
      styles: {
        default: {
          document: { run: { font: "Calibri", size: 19, color: BLACK } }
        }
      },
      sections: [
        {
          properties: {
            page: {
              size: { width: 11906, height: 16838 },
              margin: { top: 720, bottom: 720, left: L_MARGIN, right: R_MARGIN }
            }
          },
          children
        }
      ]
    })

    // Generate and download
    const blob = await Packer.toBlob(doc)
    
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Thirumaran_Professional_Resume.docx'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Error generating resume:', error)
    alert('Failed to generate resume. Please try again.')
  }
}

export async function generateResumeBlob() {
  try {
    const children = []

    // Header
    children.push(headerTable())
    children.push(spacer(6))

    // Professional Summary
    children.push(sectionHead("Professional Summary"))
    children.push(bodyPara("Motivated Robotics & Automation Engineering student (B.E., graduating 2027) with hands-on experience in " +
      "computer vision, machine learning, full-stack web development, and embedded systems. Proven ability to lead " +
      "cross-functional prototype builds, participate in national-level competitions, and deliver end-to-end solutions. " +
      "Filed a patent in UAV payload delivery using computer vision. Seeking opportunities to apply technical expertise " +
      "to impactful, real-world engineering challenges."))

    // Technical Skills
    children.push(sectionHead("Technical Skills"))
    children.push(skillsTable([
      ["Programming Languages", "Python, Java, JavaScript, HTML / CSS"],
      ["Web Development", "React.js, Node.js, Express.js, MongoDB (MERN), Flask, Vercel"],
      ["AI / ML / CV", "Machine Learning, YOLO, OpenCV, PyTorch, Computer Vision"],
      ["Embedded & IoT", "Arduino, Raspberry Pi, Embedded Systems Design, IoT & Home Automation"],
      ["CAD / Design", "SolidWorks, CAD, Figma, Adobe Photoshop, Graphic Design"],
      ["Databases", "SQL, NoSQL"],
      ["DevOps & Tools", "Git, System Design"],
      ["Soft Skills", "Problem Solving, Team Leadership, Photography"],
    ]))

    // Work Experience
    children.push(sectionHead("Work Experience"))

    children.push(twoColRow([new TextRun({ text: "Machine Learning Intern", bold: true, size: 20, color: NAVY, font: "Calibri" })], "Dec 2025 – Present"))
    children.push(orgLine("READ AUTOMATION"))
    children.push(bullet("Developing real-time object detection pipelines using YOLO and OpenCV in Python."))
    children.push(bullet("Working on live video analysis for automated inspection and monitoring systems."))
    children.push(spacer(3))

    children.push(twoColRow([new TextRun({ text: "Design Intern", bold: true, size: 20, color: NAVY, font: "Calibri" })], "May 2025 – Jun 2025"))
    children.push(orgLine("Nutech CNC Pvt Ltd, Chennai"))
    children.push(bullet("Designed a battery heat sink and Oreo-shaped pill box enclosure using SolidWorks."))
    children.push(bullet("Assisted in developing an Industrial Monitoring Dashboard for shop-floor operations."))
    children.push(spacer(3))

    children.push(twoColRow([new TextRun({ text: "Web Development Intern", bold: true, size: 20, color: NAVY, font: "Calibri" })], "Jan 2025 – Feb 2025"))
    children.push(orgLine("Novitech R&D Pvt Ltd"))
    children.push(bullet("Gained proficiency in the MERN stack (MongoDB, Express.js, React, Node.js)."))
    children.push(bullet("Developed responsive React.js web applications for client-facing projects."))

    // Education
    children.push(sectionHead("Education"))

    const eduData = [
      ["B.E. – Robotics and Automation Engineering (Hons.)", "Easwari Engineering College", "2023 – 2027", "CGPA: 8.7 / 10 (till 5th sem)"],
      ["HSLC (12th Grade) – CBSE", "G R Thanghamaligaii Mahalakshmi Vivekananda Vidyalaya", "2022 – 2023", "82.8%"],
      ["SSLC (10th Grade) – CBSE", "G R Thanghamaligaii Mahalakshmi Vivekananda Vidyalaya", "2020 – 2021", "83.8%"],
    ]

    eduData.forEach(([deg, inst, yr, grade]) => {
      children.push(twoColRow([new TextRun({ text: deg, bold: true, size: 20, color: NAVY, font: "Calibri" })], yr))
      children.push(orgLine(`${inst}   |   ${grade}`))
      children.push(spacer(2))
    })

    // Projects
    children.push(sectionHead("Key Projects"))

    const projects = [
      ["Autonomous Drone – SAEINDIA ADDC (Team HAWKi)", "Built a vision-based autonomous drone with Raspberry Pi and Pixhawk for QR detection and precision payload delivery. Secured 12th place nationally (2024)."],
      ["Jarvis AI Virtual Assistant", "Developed an AI-powered voice assistant in Python with voice command recognition, task automation, app launching, web search, and text-to-speech output."],
      ["Self-Balancing Robot with PID Control", "Designed a two-wheeled Arduino robot stabilised using an MPU6050 IMU and a tuned PID controller."],
      ["Tic-Tac-Toe AI using Machine Learning", "Built a Tic-Tac-Toe AI in Python/PyTorch combining Minimax and Deep Q-Network (DQN) strategies via Q-learning."],
      ["Smart Trolley with Vision-Based Product Recognition", "ML-powered smart shopping trolley that identifies products in real-time through a camera system, enabling automatic cart updates without RFID."],
      ["YOLO & OpenCV Object Detection System", "Real-time object detection pipeline using YOLOv8 and OpenCV for live-camera detection with bounding boxes and class labels."],
    ]

    projects.forEach(([title, desc]) => {
      children.push(new Paragraph({
        children: [new TextRun({ text: title, bold: true, size: 19, color: ACCENT, font: "Calibri" })],
        spacing: { before: 80, after: 20 }
      }))
      children.push(bodyPara(desc))
    })

    // Patent
    children.push(sectionHead("Patent"))
    children.push(new Paragraph({
      children: [new TextRun({ text: "Secure Payload Delivery Mechanism for UAV using Computer Vision System", bold: true, size: 19, color: BLACK, font: "Calibri" })],
      spacing: { before: 60, after: 30 }
    }))
    children.push(orgLine("Application No: 202541062643   |   Publication Date: 21 November 2025"))

    // Achievements
    children.push(sectionHead("Achievements & Leadership"))
    children.push(bullet("Secured 12th place nationally in SAEINDIA ADDC 2024 with Team HAWKi — vision-based autonomous drone for QR detection and payload delivery."))
    children.push(bullet("Participated in Adobe India Hackathon (Round 1) with Team Ctrl+Alt+Del, representing Easwari Engineering College in a national-level coding challenge."))
    children.push(bullet("Led multiple IoT and robotics prototype builds as team project lead, coordinating hardware-software integration."))
    children.push(bullet("Contributed to drone design and computer vision modules during the SAEINDIA ADDC competition."))
    children.push(bullet("Managed website deployment and Git-based version control for development projects."))

    // Certifications
    children.push(sectionHead("Certifications"))

    const certs = [
      ["SAEINDIA ADDC – Autonomous Drone Development Competition (2024, 2025, 2026)", "Jun 2024 / Jun 2025 / Jun 2026"],
      ["Cisco Networking Academy – Networking, Cybersecurity, Python, IoT & Emerging Technologies", "Jun 2025 – Dec 2025"],
      ["Full Stack Development (MERN Stack) – Novitech R&D Pvt Ltd", "February 2025"],
    ]

    certs.forEach(([name, date]) => {
      children.push(twoColRow([new TextRun({ text: name, size: 19, color: BLACK, font: "Calibri" })], date))
    })

    // Build document
    const doc = new Document({
      numbering: {
        config: [
          {
            reference: "bullets",
            levels: [
              {
                level: 0,
                format: LevelFormat.BULLET,
                text: "\u2022",
                alignment: AlignmentType.LEFT,
                style: {
                  paragraph: { indent: { left: 500, hanging: 260 } },
                  run: { font: "Calibri", size: 19, color: BLACK }
                }
              }
            ]
          }
        ]
      },
      styles: {
        default: {
          document: { run: { font: "Calibri", size: 19, color: BLACK } }
        }
      },
      sections: [
        {
          properties: {
            page: {
              size: { width: 11906, height: 16838 },
              margin: { top: 720, bottom: 720, left: L_MARGIN, right: R_MARGIN }
            }
          },
          children
        }
      ]
    })

    return await Packer.toBuffer(doc)
  } catch (error) {
    console.error('Error generating resume:', error)
    throw error
  }
}

export function getResumeContent() {
  return {
    name: 'THIRUMARAN B',
    title: 'Robotics & Automation Engineer | ML Enthusiast | Full-Stack Developer',
    contact: {
      phone: '+91 97910 06424',
      email: 'thirumaran301105@gmail.com',
      linkedin: 'linkedin.com/in/thirumaran-b-a587532b9',
      github: 'github.com/thirumaran301105'
    },
    summary: 'Motivated Robotics & Automation Engineering student (B.E., graduating 2027) with hands-on experience in computer vision, machine learning, full-stack web development, and embedded systems. Proven ability to lead cross-functional prototype builds, participate in national-level competitions, and deliver end-to-end solutions. Filed a patent in UAV payload delivery using computer vision.',
    experience: [
      {
        title: 'Machine Learning Intern',
        company: 'READ AUTOMATION',
        period: 'Dec 2025 – Present',
        responsibilities: [
          'Developing real-time object detection pipelines using YOLO and OpenCV in Python.',
          'Working on live video analysis for automated inspection and monitoring systems.'
        ]
      },
      {
        title: 'Design Intern',
        company: 'Nutech CNC Pvt Ltd, Chennai',
        period: 'May 2025 – Jun 2025',
        responsibilities: [
          'Designed a battery heat sink and Oreo-shaped pill box enclosure using SolidWorks.',
          'Assisted in developing an Industrial Monitoring Dashboard for shop-floor operations.'
        ]
      },
      {
        title: 'Web Development Intern',
        company: 'Novitech R&D Pvt Ltd',
        period: 'Jan 2025 – Feb 2025',
        responsibilities: [
          'Gained proficiency in the MERN stack (MongoDB, Express.js, React, Node.js).',
          'Developed responsive React.js web applications for client-facing projects.'
        ]
      }
    ],
    education: [
      {
        degree: 'B.E. – Robotics and Automation Engineering (Hons.)',
        institution: 'Easwari Engineering College',
        period: '2023 – 2027',
        grade: 'CGPA: 8.7 / 10'
      },
      {
        degree: 'HSLC (12th Grade) – CBSE',
        institution: 'G R Thanghamaligaii Mahalakshmi Vivekananda Vidyalaya',
        period: '2022 – 2023',
        grade: '82.8%'
      }
    ],
    skills: [
      { category: 'Programming Languages', items: 'Python, Java, JavaScript, HTML / CSS' },
      { category: 'Web Development', items: 'React.js, Node.js, Express.js, MongoDB (MERN), Flask, Vercel' },
      { category: 'AI / ML / CV', items: 'Machine Learning, YOLO, OpenCV, PyTorch, Computer Vision' },
      { category: 'Embedded & IoT', items: 'Arduino, Raspberry Pi, Embedded Systems Design, IoT & Home Automation' },
      { category: 'CAD / Design', items: 'SolidWorks, CAD, Figma, Adobe Photoshop, Graphic Design' },
      { category: 'Databases', items: 'SQL, NoSQL' },
      { category: 'DevOps & Tools', items: 'Git, System Design' },
      { category: 'Soft Skills', items: 'Problem Solving, Team Leadership, Photography' }
    ],
    projects: [
      {
        title: 'Autonomous Drone – SAEINDIA ADDC (Team HAWKi)',
        description: 'Built a vision-based autonomous drone with Raspberry Pi and Pixhawk for QR detection and precision payload delivery. Secured 12th place nationally (2024).'
      },
      {
        title: 'Jarvis AI Virtual Assistant',
        description: 'Developed an AI-powered voice assistant in Python with voice command recognition, task automation, app launching, web search, and text-to-speech output.'
      },
      {
        title: 'Self-Balancing Robot with PID Control',
        description: 'Designed a two-wheeled Arduino robot stabilised using an MPU6050 IMU and a tuned PID controller.'
      },
      {
        title: 'Tic-Tac-Toe AI using Machine Learning',
        description: 'Built a Tic-Tac-Toe AI in Python/PyTorch combining Minimax and Deep Q-Network (DQN) strategies via Q-learning.'
      }
    ],
    achievements: [
      'Secured 12th place nationally in SAEINDIA ADDC 2024 with Team HAWKi — vision-based autonomous drone for QR detection and payload delivery.',
      'Participated in Adobe India Hackathon (Round 1) with Team Ctrl+Alt+Del, representing Easwari Engineering College in a national-level coding challenge.',
      'Led multiple IoT and robotics prototype builds as team project lead, coordinating hardware-software integration.',
      'Contributed to drone design and computer vision modules during the SAEINDIA ADDC competition.',
      'Managed website deployment and Git-based version control for development projects.'
    ],
    certifications: [
      {
        name: 'SAEINDIA ADDC – Autonomous Drone Development Competition (2024, 2025, 2026)',
        date: 'Jun 2024 / Jun 2025 / Jun 2026'
      },
      {
        name: 'Cisco Networking Academy – Networking, Cybersecurity, Python, IoT & Emerging Technologies',
        date: 'Jun 2025 – Dec 2025'
      },
      {
        name: 'Full Stack Development (MERN Stack) – Novitech R&D Pvt Ltd',
        date: 'February 2025'
      }
    ]
  }
}
