export default function Hero() {
  return (
    <header className="hero">
      <div
        className="hero-blob"
        style={{ width: '44vw', height: '44vw', right: '-12vw', top: '-14vw', background: 'rgba(255, 215, 55, 0.12)' }}
      />
      <div
        className="hero-blob"
        style={{ width: '26vw', height: '26vw', left: '-8vw', bottom: '-6vw', background: 'rgba(255, 215, 55, 0.08)' }}
      />
      <span className="kicker">Candidature — VeryUpper</span>
      <h1>
        Pourquoi <em>Very&nbsp;Up</em>&nbsp;?
      </h1>
      <p className="lead">
        Dans le cadre de ma mission au Conservatoire de Paris, j'ai intégré des outils d'IA pour
        accélérer la production de contenus. Leur utilisation a été déterminante… et pourtant, nous
        n'avons pas choisi d'augmenter notre rythme de production. <strong>Pourquoi&nbsp;?</strong>{' '}
        L'explication est, comme souvent, liée au contexte — et à sa compréhension.
      </p>
      <div className="scroll-hint">Scroll</div>
    </header>
  )
}
