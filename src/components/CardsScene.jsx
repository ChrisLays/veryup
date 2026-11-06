import { Scene, useSceneProgress, range } from '../scroll.jsx'

const CARDS = [
  {
    front: { title: 'La défiance', text: 'Voire le rejet pur et simple du projet.' },
    back: {
      title: 'Un exemple vaut mieux que de longs discours',
      text: 'Je crée un premier cours avec un·e expert·e enthousiaste.',
    },
  },
  {
    front: { title: "L'inconnu", text: 'Une méconnaissance parfaite du projet.' },
    back: {
      title: 'Nous présentons son cours… partout',
      text: 'En conseils pédagogiques, administratifs, et même à la cafétéria.',
    },
  },
  {
    front: { title: 'Un besoin redondant', text: 'La pérennité de certains cours, quand les expert·es partent à la retraite…' },
    back: {
      title: 'Le digital, trop fort pour pérenniser',
      text: 'Je crée un outil d’écriture de cours en Markdown&nbsp;: un format libre, ouvert et agnostique.',
    },
  },
  {
    front: { title: 'Une structuration nécessaire', text: 'Dans la production des cours.' },
    back: {
      title: 'Claude Code Max entre dans l’équipe',
      text: 'Début 2026, nous créons ensemble un outil auteur pour accompagner la structuration de la production des cours au Conservatoire.',
    },
  },
]

export default function CardsScene() {
  const [ref, p] = useSceneProgress()
  const caption = range(p, 0.1, 0.3)
  return (
    <Scene height={420}>
      <div ref={ref} className="scene-sticky">
        <span className="kicker" style={{ color: 'var(--kumera)' }}>Le diagnostic — ce que je constate</span>
        <h2 className="big" style={{ marginTop: '1rem' }}>Quatre constats sur la table</h2>
        <p
          style={{
            marginTop: '1.2rem',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
            opacity: caption,
          }}
        >
          Ces constats (et bien d'autres) sont posés. On passe à l'action — les cartes se retournent
          une à une.
        </p>
        <div className="cards-grid">
          {CARDS.map((card, i) => {
            const flipped = p > 0.3 + i * 0.16
            return (
              <div key={i} className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-face flip-front">
                  <span className="num">0{i + 1}</span>
                  <div>
                    <h3>{card.front.title}</h3>
                    <p>{card.front.text}</p>
                  </div>
                </div>
                <div className="flip-face flip-back">
                  <h3>{card.back.title}</h3>
                  <p>{card.back.text}</p>
                </div>
              </div>
            )
          })}
        </div>
        <p className="cards-caption" style={{ opacity: range(p, 0.85, 1) }}>
          Le diagnostic n'a pas eu besoin de l'IA — elle est incapable de comprendre un contexte
          qu'on ne lui explique pas. Mais la restructuration et la conception des outils n'auraient
          pas pu se faire sans Claude&nbsp;: je sais organiser un projet, pas coder.
        </p>
      </div>
    </Scene>
  )
}
