import { Scene, useSceneProgress, range } from '../scroll.jsx'

const STEPS = [
  { n: 1, text: 'Les rencontrer, comprendre leurs gestes métiers et pédagogiques' },
  { n: 2, text: 'Recenser leurs besoins, et trouver ce que le digital peut — ou ne peut pas — faire pour eux' },
  { n: 3, text: 'Prototyper des modules pour leur montrer « en vrai »' },
  { n: 4, text: 'Les accompagner sur la rédaction de leur cours… et le produire !' },
]

export default function CircleScene() {
  const [ref, p] = useSceneProgress()
  const courses = Math.round(1 + 11 * range(p, 0.55, 0.9))
  return (
    <Scene height={340} className="on-dark">
      <div ref={ref} className="scene-sticky">
        <div className="scene-split">
          <div className="scene-copy">
            <span className="kicker">Au-delà de la production — le temps gagné, réinvesti</span>
            <h2>Transformer le temps gagné en temps « humain »</h2>
            <p>
              Avant de vous présenter ces outils (qui ne sont que des outils)&nbsp;: grâce au temps
              gagné sur la conception des modules, nous avons élaboré un processus pour mieux
              coopérer avec nos expert·es volontaires.
            </p>
            <div className="counter-row">
              <span className="counter-num">{courses}</span>
              <span className="counter-label">
                cours au catalogue au début de l'été 2026 — contre 1 en octobre 2025. Et un carnet
                de commandes plein pour les 3 ou 4 prochaines années, dont un cours collectif
                international sur « l'interprétation au Conservatoire de Paris »&nbsp;: un projet
                faramineux, et symbolique d'un espoir de réussite.
              </span>
            </div>
          </div>
          <div className="scene-visual">
            <div className="circle-wrap">
              <div className="circle-ring" />
              <div className="circle-center">La coopération expert·es ↺ équipe pédagogique</div>
              {STEPS.map((s, i) => (
                <div
                  key={s.n}
                  className={`circle-node n${s.n} ${p > 0.08 + i * 0.13 ? 'visible' : ''}`}
                >
                  {s.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Scene>
  )
}
