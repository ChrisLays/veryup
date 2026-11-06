import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'

const COURSES = [
  { title: 'Créer un contrat éthique pour la recherche en Art' },
  { title: 'Comprendre les institutions culturelles musicales pour agir' },
  { title: 'Analyse critique de l’image sonore' },
  { title: 'Acoustique des salles' },
  { title: 'Audio over IP pour les ingénieur·es du son' },
  { title: 'Notation Bennesh : écrire le mouvement', tag: 'Cours certifiant RS' },
  { title: 'Méthodologie de la prise de son pour les non-expert·es' },
  { title: 'Écriture de la conduite des voix à l’ère baroque' },
  { title: '« Tempo » — l’interprétation au Conservatoire de Paris', tag: 'Cours international' },
  { title: 'Danser une œuvre de Bach : la 3e partita' },
  { title: 'Comprendre et améliorer la fluidité du mouvement en musique et en danse' },
  { title: 'Méthodologie du montage audiovisuel' },
  { title: 'Méthodologie du mixage pour les non-expert·es' },
]

export default function Catalog() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(new Set())
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = Array.from(el.querySelectorAll('.catalog-card'))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.idx)
            setVisible((prev) => new Set(prev).add(idx))
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )
    items.forEach((item) => io.observe(item))
    return () => io.disconnect()
  }, [])
  return (
    <section className="statement" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
      <Reveal>
        <span className="kicker accent">Le catalogue — 12 cours en production</span>
      </Reveal>
      <Reveal delay={150}>
        <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}>
          Ce que nous avons mis au <span className="hl">catalogue</span>
        </h2>
      </Reveal>
      <div className="catalog-grid" ref={ref} style={{ width: '100%' }}>
        {COURSES.map((course, i) => (
          <div
            key={i}
            data-idx={i}
            className={`catalog-card ${visible.has(i) ? 'visible' : ''}`}
            style={{ transitionDelay: `${(i % 3) * 90}ms` }}
          >
            <span className="n">{i + 1}</span>
            <div>
              <span>{course.title}</span>
              {course.tag && <span className="tag">{course.tag}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
