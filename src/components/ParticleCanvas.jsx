import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight

    let particles = []
    let mouseX = W / 2
    let mouseY = H / 2

    // Detect mobile for performance
    const isMobile = window.innerWidth < 768

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.r = Math.random() * 1.8 + 0.5

        // Slightly faster movement
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5

        this.alpha = Math.random() * 0.6 + 0.2

        const colors = [
          'rgba(0,245,255,',   // cyan
          'rgba(139,92,246,',  // purple
          'rgba(240,171,252,'  // pink
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]

        this.life = Math.random() * 300 + 100
        this.age = 0
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.age++

        if (
          this.x < 0 ||
          this.x > W ||
          this.y < 0 ||
          this.y > H ||
          this.age > this.life
        ) {
          this.reset()
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = this.color + this.alpha + ')'
        ctx.fill()
      }
    }

    function initParticles() {
      particles = []

      // Adaptive particle count
      const count = isMobile
        ? 120
        : Math.min(350, Math.floor((W * H) / 7000))

      for (let i = 0; i < count; i++) {
        particles.push(new Particle())
      }
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          // Increased connection distance
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)

            ctx.strokeStyle = `rgba(139,92,246,${0.12 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        // Mouse interaction
        const dx = particles[i].x - mouseX
        const dy = particles[i].y - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 200) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(mouseX, mouseY)

          ctx.strokeStyle = `rgba(0,245,255,${0.2 * (1 - dist / 200)})`
          ctx.lineWidth = 0.7
          ctx.stroke()
        }
      }
    }

    function animCanvas() {
      // Slight trail effect (instead of full clear)
      ctx.fillStyle = 'rgba(0,0,0,0.3)'
      ctx.fillRect(0, 0, W, H)

      particles.forEach((p) => {
        p.update()
        p.draw()
      })

      connectParticles()
      requestAnimationFrame(animCanvas)
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
      initParticles()
    }

    // INIT
    initParticles()
    animCanvas()

    document.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    ></canvas>
  )
}