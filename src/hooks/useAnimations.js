import { useEffect, useRef } from 'react'

export function useRevealOnScroll() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-scale')
    
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            revealObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    revealEls.forEach((el) => revealObs.observe(el))

    return () => revealEls.forEach((el) => revealObs.unobserve(el))
  }, [])
}

export function useCounterAnimation() {
  useEffect(() => {
    function animCounter(el, target, decimal, suffix) {
      let start = 0
      const dec = decimal || 0
      const suf = suffix || ''
      const dur = 1800
      const step = 16
      const inc = target / (dur / step)
      const t = setInterval(() => {
        start = Math.min(start + inc, target)
        el.textContent = start.toFixed(dec) + suf
        if (start >= target) clearInterval(t)
      }, step)
    }

    const counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const t = parseFloat(e.target.dataset.target)
            const d = parseInt(e.target.dataset.decimal || 0)
            const s = e.target.dataset.suffix || ''
            animCounter(e.target, t, d, s)
            counterObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    const counters = document.querySelectorAll('.counter')
    counters.forEach((el) => counterObs.observe(el))

    return () => counters.forEach((el) => counterObs.unobserve(el))
  }, [])
}

export function useSkillBarAnimation() {
  useEffect(() => {
    const barEls = document.querySelectorAll('.skill-fill')

    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.width = e.target.dataset.width + '%'
            barObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    barEls.forEach((el) => barObs.observe(el))

    return () => barEls.forEach((el) => barObs.unobserve(el))
  }, [])
}

export function useTiltCard() {
  useEffect(() => {
    document.querySelectorAll('.tilt-card').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect()
        const x = e.clientX - r.left
        const y = e.clientY - r.top
        const xPercent = x / r.width - 0.5
        const yPercent = y / r.height - 0.5
        card.style.transform = `perspective(800px) rotateY(${
          xPercent * 10
        }deg) rotateX(${-yPercent * 10}deg) scale3d(1.02,1.02,1.02)`
      })

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale3d(1,1,1)'
      })
    })
  }, [])
}
