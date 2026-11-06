import { Scene, useSceneProgress, range } from '../scroll.jsx'

export default function ToolsScene() {
  const [ref, p] = useSceneProgress()
  const shift = p * 60
  return (
    <Scene height={300} className="on-dark">
      <div ref={ref} className="scene-sticky">
        <span className="kicker">Les outils</span>
        <h2 className="big" style={{ margin: '1rem 0 4vh' }}>
          Et les outils développés avec Claude ressemblent à quoi&nbsp;?
        </h2>
        <div className="tools-track" style={{ transform: `translateX(${-shift}vw)` }}>
          <div className="tool-caption">
            <h3>Learning Lab</h3>
            <p>
              Le cockpit du projet&nbsp;: suivi de production des cours, étapes, relectures et
              validations, pour chaque expert·e et chaque module.
            </p>
          </div>
          <div className="tool-shot">
            <div className="bar">Learning Lab — tableau de bord</div>
            <div className="body">
              <div className="tool-line md w90" />
              <div className="tool-line w70" />
              <div className="cols">
                <div className="block">
                  <div className="tool-line sun w55" />
                  <div className="tool-line w90" />
                  <div className="tool-line w70" />
                </div>
                <div className="block">
                  <div className="tool-line sun w35" />
                  <div className="tool-line w70" />
                  <div className="tool-line w55" />
                </div>
              </div>
            </div>
          </div>
          <div className="tool-shot">
            <div className="bar">Éditeur Markdown pédagogique</div>
            <div className="body">
              <div className="tool-line md w90" />
              <div className="tool-line md w70" />
              <div className="tool-line md w55" />
              <div className="tool-line sun w35" />
            </div>
          </div>
          <div className="tool-caption">
            <h3>Écriture Markdown</h3>
            <p>
              Un format libre, ouvert et agnostique&nbsp;: l'expert·e écrit, l'outil structure,
              la plateforme publie.
            </p>
          </div>
          <div className="tool-shot">
            <div className="bar">Notion-like pédagogique</div>
            <div className="body">
              <div className="cols">
                <div className="block">
                  <div className="tool-line sun w55" />
                  <div className="tool-line w70" />
                </div>
                <div className="block">
                  <div className="tool-line w90" />
                  <div className="tool-line w35" />
                </div>
              </div>
              <div className="tool-line md w90" />
            </div>
          </div>
          <div className="tool-caption">
            <h3>Notion-like pédagogique</h3>
            <p>
              Objectifs, activités, évaluations&nbsp;: la structure du cours se co-construit,
              bloc par bloc, avec l'expert·e.
            </p>
          </div>
        </div>
      </div>
    </Scene>
  )
}
