import { Scene, useSceneProgress, range } from '../scroll.jsx'
import Reveal from './Reveal.jsx'

export function CoutureScene() {
  const [ref, p] = useSceneProgress()
  const seamW = range(p, 0.1, 0.6) * 100
  const seamH = range(p, 0.3, 0.85) * 100
  return (
    <Scene height={300}>
      <div ref={ref} className="scene-sticky">
        <div className="scene-split">
          <div className="scene-copy">
            <span className="kicker">La raison — des cours « haute couture »</span>
            <h2>1,5 ETP en ingénierie pédagogique, 1 illustratrice, une équipe audiovisuelle… et Claude Code</h2>
            <p>
              Et pourtant, nous resterons à 3 ou 4 cours par an. Pourquoi&nbsp;? Parce que la
              direction a admis que la qualité pédagogique et les besoins exceptionnels de nos
              expert·es nécessitaient un temps exceptionnel de concertation — pour créer des cours
              « haute couture », à la mesure de la qualité des cours authentiques.
            </p>
            <p style={{ marginTop: '1.2rem' }}>
              Claude Code nous a permis de rééquilibrer notre temps&nbsp;: moins de conception de
              contenu, plus d'analyse et de dialogue avec les expert·es — pour comprendre leurs
              gestes, leurs intentions, et mieux exprimer leurs besoins digitaux.
            </p>
          </div>
          <div className="scene-visual">
            <div className="couture-page">
              <div className="seam" style={{ opacity: range(p, 0, 0.3) }} />
              <div className="seam-v l" style={{ height: `${seamH}%`, top: `${(100 - seamH) / 2}%` }} />
              <div className="seam-v r" style={{ height: `${seamH}%`, top: `${(100 - seamH) / 2}%` }} />
              <div className="seam-h t" style={{ width: `${seamW}%`, left: `${(100 - seamW) / 2}%` }} />
              <div className="seam-h b" style={{ width: `${seamW}%`, left: `${(100 - seamW) / 2}%` }} />
              <h3>
                <strong>Tempo — l'interprétation au Conservatoire de Paris.</strong> Chapitre 1&nbsp;:
                transmettre l'ininterprétable. Ce que les masters ne disent pas, et que la salle de
                classe murmure&nbsp;: la justesse d'un geste, le poids d'un silence, l'autorité
                douce d'une tradition vivante…
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Scene>
  )
}

export function DelegateStatements() {
  return (
    <>
      <section className="statement">
        <Reveal>
          <span className="kicker accent">Le principe</span>
        </Reveal>
        <Reveal delay={150}>
          <h2>
            Déléguer à l'<span className="hl">IA</span> ce qui prend du temps
          </h2>
        </Reveal>
        <Reveal delay={300}>
          <p>
            Pour garder le temps humain là où il est irremplaçable&nbsp;: la concertation, la
            compréhension des gestes, la co-construction.
          </p>
        </Reveal>
      </section>
      <section className="statement on-dark">
        <Reveal>
          <span className="kicker">La conviction</span>
        </Reveal>
        <Reveal delay={150}>
          <h2>
            L'IA fait partie de <span className="hl">l'équipe</span>
          </h2>
        </Reveal>
        <Reveal delay={300}>
          <p>
            Ni menace, ni baguette magique&nbsp;: un·e collègue à qui l'on confie les tâches
            longues, et qui rend possible l'exigence — la haute couture pédagogique.
          </p>
        </Reveal>
      </section>
    </>
  )
}
