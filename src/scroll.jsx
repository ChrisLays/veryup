import { useEffect, useRef, useState } from 'react'

export function useSceneProgress() {
  const ref = useRef(null)
  const [p, setP] = useState(0)
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const total = rect.height - window.innerHeight
        const passed = Math.min(Math.max(-rect.top, 0), total)
        setP(total > 0 ? passed / total : 0)
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])
  return [ref, p]
}

export function Scene({ height = 250, className = '', children }) {
  return (
    <section className={`scene ${className}`} style={{ height: `${height}vh` }}>
      <div className="scene-sticky">{children}</div>
    </section>
  )
}

export const clamp = (v, min = 0, max = 1) => Math.min(Math.max(v, min), max)

export const range = (p, start, end) => clamp((p - start) / (end - start))
