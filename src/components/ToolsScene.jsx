import { Scene, useSceneProgress } from '../scroll.jsx'
import {
  LearningLabIllustration,
  MarkdownIllustration,
  NotionLikeIllustration,
} from './ToolIllustrations.jsx'

const TOOLS = [
  {
    Illustration: LearningLabIllustration,
    name: 'Learning Lab',
    caption:
      'Le cockpit du projet : suivi de production des cours, étapes, relectures et validations, pour chaque expert·e et chaque module.',
  },
  {
    Illustration: MarkdownIllustration,
    name: 'Écriture Markdown',
    caption:
      "Un format libre, ouvert et agnostique : l'expert·e écrit, l'outil structure, la plateforme publie.",
  },
  {
    Illustration: NotionLikeIllustration,
    name: 'Notion-like pédagogique',
    caption:
      'Objectifs, activités, évaluations : la structure du cours se co-construit, bloc par bloc, avec l\u2019expert·e.',
  },
]

export default function ToolsScene() {
  const [ref, p] = useSceneProgress()
  const shift = p * 130
  return (
    <Scene height={320} className="on-dark">
      <div ref={ref} className="scene-sticky">
        <span className="kicker">Les outils</span>
        <h2 className="big" style={{ margin: '1rem 0 4vh' }}>
          Et les outils développés avec Claude ressemblent à quoi&nbsp;?
        </h2>
        <div className="tools-track" style={{ transform: `translateX(${-shift}vw)` }}>
          {TOOLS.map(({ Illustration, name, caption }) => (
            <figure key={name} className="tool-slide">
              <Illustration />
              <figcaption className="tool-slide-caption">
                <h3>{name}</h3>
                <p>{caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Scene>
  )
}
