import { Scene, useSceneProgress, range } from '../scroll.jsx'

function drawStyle(p, start, end) {
  return { strokeDasharray: 1, strokeDashoffset: 1 - range(p, start, end) }
}

export function ConservatoireScene() {
  const [ref, p] = useSceneProgress()
  return (
    <Scene height={280} className="">
      <div ref={ref} className="scene-sticky">
        <div className="scene-split">
          <div className="scene-copy">
            <span className="kicker">2022 — Le point de départ</span>
            <h2>Le Conservatoire de Paris crée une filiale&nbsp;: le Conservatoire Augmenté</h2>
            <p>
              Objectif&nbsp;: bâtir une plateforme de ressources pour les professionnel·les de la
              musique et de la danse. Une plateforme, mais surtout une ambition&nbsp;: ouvrir les
              savoirs d'une institution centenaire.
            </p>
          </div>
          <div className="scene-visual">
            <svg className="svg-draw" viewBox="0 0 400 300" aria-label="Façade du Conservatoire de Paris">
              <rect x="40" y="120" width="320" height="150" pathLength="1" style={drawStyle(p, 0.05, 0.45)} />
              <path d="M20 120 L200 40 L380 120" pathLength="1" style={drawStyle(p, 0.15, 0.5)} />
              <line x1="80" y1="120" x2="80" y2="270" pathLength="1" style={drawStyle(p, 0.35, 0.6)} />
              <line x1="133" y1="120" x2="133" y2="270" pathLength="1" style={drawStyle(p, 0.4, 0.65)} />
              <line x1="187" y1="120" x2="187" y2="270" pathLength="1" style={drawStyle(p, 0.45, 0.7)} />
              <line x1="240" y1="120" x2="240" y2="270" pathLength="1" style={drawStyle(p, 0.5, 0.75)} />
              <line x1="293" y1="120" x2="293" y2="270" pathLength="1" style={drawStyle(p, 0.55, 0.8)} />
              <line x1="40" y1="270" x2="360" y2="270" pathLength="1" style={drawStyle(p, 0.6, 0.85)} />
              <line x1="20" y1="285" x2="380" y2="285" pathLength="1" style={drawStyle(p, 0.7, 0.95)} />
              <circle cx="200" cy="90" r="14" pathLength="1" style={drawStyle(p, 0.75, 0.95)} />
              <circle cx="200" cy="90" r="5" className="fill-sun" style={{ opacity: range(p, 0.85, 1) }} />
            </svg>
          </div>
        </div>
      </div>
    </Scene>
  )
}

export function PlatformScene() {
  const [ref, p] = useSceneProgress()
  const scale = 0.8 + 0.2 * range(p, 0, 0.4)
  const opacity = range(p, 0, 0.35)
  return (
    <Scene height={220}>
      <div ref={ref} className="scene-sticky">
        <div className="scene-split">
          <div className="scene-copy">
            <span className="kicker">Mai 2025 — J'entre en scène</span>
            <h2>Je rejoins le Conservatoire pour développer la création de cours en ligne</h2>
            <p>
              Avec ses enseignant·es, nous faisons naître les premières formations de la plateforme&nbsp;:
              l'aventure pédagogique du Conservatoire Augmenté commence concrètement.
            </p>
          </div>
          <div className="scene-visual">
            <div className="mockup" style={{ transform: `scale(${scale})`, opacity }}>
              <div className="mockup-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="mockup-body">
                <div className="mockup-row">
                  <div className="mockup-card accented"><i className="w66" /><i className="w40" /></div>
                  <div className="mockup-card"><i className="w66" /><i className="w40" /></div>
                  <div className="mockup-card"><i className="w66" /><i className="w40" /></div>
                </div>
                <div className="mockup-row">
                  <div className="mockup-card"><i className="w66" /><i className="w40" /></div>
                  <div className="mockup-card accented"><i className="w66" /><i className="w40" /></div>
                  <div className="mockup-card"><i className="w66" /><i className="w40" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scene>
  )
}

export function PortalScene() {
  const [ref, p] = useSceneProgress()
  const close = range(p, 0.25, 0.75)
  const phrase = range(p, 0.8, 1)
  return (
    <Scene height={300} className="on-dark">
      <div ref={ref} className="scene-sticky">
        <div className="scene-split">
          <div className="scene-copy">
            <span className="kicker">Le contexte — une pédagogie de la transmission</span>
            <h2>Un établissement façonné par la formation initiale et la discrétion des salles de classe</h2>
            <p>
              Là où la transmission de maître à élève perdure, ouvrir les cours à l'extérieur — qui
              plus est en digital — n'est pas sans soulever des questions…
            </p>
            <p
              className="lead"
              style={{
                marginTop: '1.6rem',
                fontWeight: 700,
                color: 'var(--sun)',
                opacity: phrase,
                transform: `translateY(${(1 - phrase) * 20}px)`,
              }}
            >
              Pour mener à bien ma mission, je dois comprendre le contexte&nbsp;: identifier précisément
              les freins, et déceler les besoins éventuels. Le digital a des faiblesses, mais certains
              atouts également.
            </p>
          </div>
          <div className="scene-visual">
            <div className="portal-wrap">
              <svg className="portal-arch" viewBox="0 0 300 400" aria-label="Portail">
                <path
                  d="M10 400 L10 150 A140 140 0 0 1 290 150 L290 400"
                  fill="none"
                  stroke="var(--sun)"
                  strokeWidth="6"
                />
              </svg>
              <div className="portal-inside">
                <span className="portal-key" style={{ opacity: 1 - close }}>🎼</span>
              </div>
              <div
                className="portal-gate left"
                style={{ transform: `translateX(${close * 100}%)`, left: 0 }}
              />
              <div
                className="portal-gate right"
                style={{ transform: `translateX(${-close * 100}%)`, right: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </Scene>
  )
}
