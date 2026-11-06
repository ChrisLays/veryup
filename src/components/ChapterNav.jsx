import { useEffect, useState } from 'react'

const CHAPTERS = [
  { id: 'chap-intro', label: 'Pourquoi Very Up ?' },
  { id: 'chap-2022', label: '2022 — Le Conservatoire Augmenté' },
  { id: 'chap-2025', label: '2025 — Les premiers cours' },
  { id: 'chap-contexte', label: 'Le contexte' },
  { id: 'chap-diagnostic', label: 'Le diagnostic' },
  { id: 'chap-cooperation', label: 'La coopération' },
  { id: 'chap-couture', label: 'Haute couture' },
  { id: 'chap-catalogue', label: 'Le catalogue' },
  { id: 'chap-outils', label: 'Les outils' },
  { id: 'chap-bilan', label: '18 mois plus tard' },
  { id: 'chap-philosophie', label: 'Ma philosophie' },
  { id: 'chap-motivations', label: 'Mes motivations' },
]

export default function ChapterNav() {
  const [active, setActive] = useState(CHAPTERS[0].id)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const total = doc.scrollHeight - window.innerHeight
      setProgress(total > 0 ? window.scrollY / total : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = CHAPTERS.map((c) => document.getElementById(c.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className="progress-bar" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
      <nav className="chapter-nav" aria-label="Chapitres">
        {CHAPTERS.map((c) => (
          <a key={c.id} href={`#${c.id}`} className={active === c.id ? 'active' : ''}>
            <span className="dot" />
            <span className="label">{c.label}</span>
          </a>
        ))}
      </nav>
    </>
  )
}
