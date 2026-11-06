import Reveal from './Reveal.jsx'

const MOTIVATIONS = [
  {
    title: 'Le sur-mesure comme éthique',
    text: 'Le blended, le contexte, la haute couture pédagogique : ce que je pratique au Conservatoire est exactement ce que Very Up vend — des parcours pensés pour de vraies personnes, dans un vrai contexte.',
  },
  {
    title: 'L’IA dans l’équipe, pas à la place',
    text: 'J’ai appris à répartir les missions entre humains et IA pour maximiser l’impact. Rejoindre un acteur qui place l’entraînement IA au cœur de la performance, c’est rejoindre ma pratique quotidienne.',
  },
  {
    title: 'Mesurer, toujours',
    text: 'De 1 à 12 cours, un carnet de commandes plein : je crois aux résultats démontrés. Very Up mesure systématiquement l’impact de ses parcours — c’est la rigueur que je veux porter.',
  },
]

export default function Motivations() {
  return (
    <>
      <section className="motivations">
        <Reveal>
          <span className="kicker">Pour conclure</span>
        </Reveal>
        <Reveal delay={150}>
          <h2>
            Mes motivations pour devenir <span style={{ color: 'var(--sanjuan)' }}>VeryUpper</span>
          </h2>
        </Reveal>
        <div className="motiv-list">
          {MOTIVATIONS.map((m, i) => (
            <Reveal key={i} delay={i * 140} className="motiv-item">
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <footer className="footer">
        <strong>Pourquoi Very Up ?</strong> — parce que le contexte l’exige, et que le contexte,
        je le comprends. | Candidature VeryUpper · Scrollytelling conçu avec Claude Code
      </footer>
    </>
  )
}
