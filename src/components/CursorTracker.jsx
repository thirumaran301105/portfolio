import { useEffect, useState } from 'react'

export default function CursorTracker() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0

    const handleMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
      setMousePos({ x: mx, y: my })
    }

    const animateRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      setRingPos({ x: rx, y: ry })
      requestAnimationFrame(animateRing)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animateRing()

    // Add hover listeners
    const hoverElements = document.querySelectorAll('button, a, .glass-hover, .tilt-card, .skill-pill')
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', () => setIsHovering(true))
      el.addEventListener('mouseleave', () => setIsHovering(false))
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', () => setIsHovering(true))
        el.removeEventListener('mouseleave', () => setIsHovering(false))
      })
    }
  }, [])

  return (
    <>
      <div
        id="cursor-dot"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      ></div>
      <div
        id="cursor-ring"
        className={isHovering ? 'cursor-hover' : ''}
        style={{
          left: `${ringPos.x}px`,
          top: `${ringPos.y}px`,
        }}
      ></div>
    </>
  )
}
