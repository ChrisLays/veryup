import { Scene, useSceneProgress, range } from '../scroll.jsx'
import Reveal from './Reveal.jsx'

const FREINS = [
  'La défiance, voire le rejet du projet',
  "L'inconnu : une méconnaissance parfaite du projet",
  'La pérennité de certains cours',
  'Une structuration nécessaire de la production',
]

export function StrikeScene() {
  const [ref, p] = useSceneProgress()
  return (
    <Scene height={250}>
      <div ref={ref} className="scene-sticky">
        <span className="kicker accent">18 mois plus tard</span>
        <h2 className="big" style={{ margin: '1rem 0 4vh' }}>
          Les freins et les besoins, barrés un à un
        </h2>
        <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: 900 }}>
          {FREINS.map((f, i) => (
            <div key={i} className={`strike-card ${p > 0.2 + i * 0.15 ? 'struck' : ''}`}>
              {f}
              <span className="ok">✓</span>
            </div>
          ))}
        </div>
        <p
          className="lead"
          style={{ marginTop: '4vh', opacity: range(p, 0.75, 1), fontWeight: 700 }}
        >
          Le projet a réussi son pari&nbsp;: les freins sont devenus des preuves.
        </p>
      </div>
    </Scene>
  )
}

const STEPS = [
  { title: 'Analyser le contexte', text: "Comprendre l'institution, ses acteurs, ses cultures — avant tout outil." },
  { title: 'Définir des objectifs', text: 'Traduire des ambitions pédagogiques en cap clair et mesurable.' },
  { title: 'Co-construire des procédures', text: 'En équipe, avec les expert·es : les méthodes appartiennent à celles et ceux qui les vivent.' },
  { title: 'Répartir les missions', text: "Au sein de l'équipe — l'IA comprise, à sa juste place." },
]

export function Conception() {
  return (
    <section className="statement on-dark" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
      <Reveal>
        <span className="kicker">Ma philosophie</span>
      </Reveal>
      <Reveal delay={150}>
        <h2 style={{ fontSize: 'clamp(2rem, 4.8vw, 4.2rem)' }}>
          Ma conception de la <span className="hl">conception</span> de contenus pédagogiques
        </h2>
      </Reveal>
      <div className="steps" style={{ width: '100%' }}>
        {STEPS.map((s, i) => (
          <Reveal key={i} delay={i * 120} className="step">
            <span className="n">0{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
