const INK = '#16242d'
const SUN = '#FFD737'
const SAN = '#2D5264'
const PAPER = '#FAF7F0'

function Frame({ children, label }) {
  return (
    <svg viewBox="0 0 520 340" className="tool-illustration" aria-label={label} role="img">
      <defs>
        <filter id="tool-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor={INK} floodOpacity="0.18" />
        </filter>
      </defs>
      <g filter="url(#tool-shadow)">
        <rect x="14" y="14" width="492" height="312" rx="22" fill={PAPER} stroke={INK} strokeWidth="3.5" />
        <path d="M14 62 H506" stroke={INK} strokeWidth="3.5" />
        <circle cx="42" cy="38" r="7" fill={SUN} stroke={INK} strokeWidth="2.5" />
        <circle cx="66" cy="38" r="7" fill="none" stroke={INK} strokeWidth="2.5" />
        <circle cx="90" cy="38" r="7" fill="none" stroke={INK} strokeWidth="2.5" />
      </g>
      {children}
    </svg>
  )
}

const Sparkle = ({ x, y, r = 9, fill = SUN }) => (
  <path
    d={`M${x} ${y - r} Q${x + r * 0.2} ${y - r * 0.2} ${x + r} ${y} Q${x + r * 0.2} ${y + r * 0.2} ${x} ${y + r} Q${x - r * 0.2} ${y + r * 0.2} ${x - r} ${y} Q${x - r * 0.2} ${y - r * 0.2} ${x} ${y - r} Z`}
    fill={fill}
    stroke={INK}
    strokeWidth="2"
  />
)

const Note = ({ x, y, s = 1, fill = SAN }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M0 26 V4 L26 -2 V20" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <ellipse cx="-3" cy="27" rx="7" ry="5.5" fill={fill} stroke={INK} strokeWidth="2.5" />
    <ellipse cx="23" cy="21" rx="7" ry="5.5" fill={fill} stroke={INK} strokeWidth="2.5" />
  </g>
)

export function LearningLabIllustration() {
  const col = (x, title, cards) => (
    <g key={x}>
      <rect x={x} y={92} width="132" height="212" rx="12" fill="#ffffff" stroke={INK} strokeWidth="2.5" />
      <rect x={x + 12} y={104} width="76" height="18" rx="9" fill={SUN} stroke={INK} strokeWidth="2.5" />
      {cards.map((c, i) => (
        <g key={i} transform={`translate(${x + 12} ${136 + i * 54})`}>
          <rect width="108" height="42" rx="8" fill={c.fill} stroke={INK} strokeWidth="2.5" />
          <rect x="10" y="12" width={c.w} height="7" rx="3.5" fill={INK} opacity="0.75" />
          <rect x="10" y="25" width={c.w * 0.6} height="7" rx="3.5" fill={INK} opacity="0.35" />
        </g>
      ))}
    </g>
  )
  return (
    <Frame label="Illustration du Learning Lab">
      {col(40, 'En cours', [
        { w: 70, fill: '#ffffff' },
        { w: 84, fill: '#ffffff' },
        { w: 56, fill: '#ffffff' },
      ])}
      {col(194, 'Relecture', [
        { w: 84, fill: SUN },
        { w: 60, fill: '#ffffff' },
      ])}
      {col(348, 'Publié', [
        { w: 66, fill: '#ffffff' },
        { w: 78, fill: '#ffffff' },
      ])}
      <Note x={464} y={96} s={0.9} fill={SUN} />
      <Sparkle x={486} y={254} />
      <path d="M470 292 q6 -14 12 0" fill="none" stroke={SAN} strokeWidth="3" strokeLinecap="round" />
    </Frame>
  )
}

export function MarkdownIllustration() {
  return (
    <Frame label="Illustration de l'éditeur Markdown">
      <path d="M266 62 V326" stroke={INK} strokeWidth="2" strokeDasharray="2 8" />
      <g transform="translate(42 86)">
        <rect width="204" height="224" rx="12" fill="#ffffff" stroke={INK} strokeWidth="2.5" />
        <rect x="16" y="18" width="120" height="14" rx="7" fill={SUN} stroke={INK} strokeWidth="2.5" />
        <rect x="16" y="52" width="150" height="8" rx="4" fill={INK} opacity="0.65" />
        <rect x="16" y="70" width="120" height="8" rx="4" fill={INK} opacity="0.4" />
        <rect x="16" y="88" width="140" height="8" rx="4" fill={INK} opacity="0.4" />
        <rect x="16" y="120" width="86" height="8" rx="4" fill={INK} opacity="0.65" />
        <rect x="16" y="138" width="130" height="8" rx="4" fill={INK} opacity="0.4" />
        <rect x="16" y="156" width="104" height="8" rx="4" fill={INK} opacity="0.4" />
        <rect x="16" y="188" width="60" height="24" rx="8" fill={PAPER} stroke={INK} strokeWidth="2" />
        <path d="M28 200 l8 -8 m0 0 l-3 3 m3 -3 l-3 -3" stroke={SAN} strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <rect x="86" y="188" width="60" height="24" rx="8" fill={PAPER} stroke={INK} strokeWidth="2" />
        <circle cx="116" cy="200" r="6" fill="none" stroke={SAN} strokeWidth="2.5" />
        <rect x="16" y="222" width="2" height="14" fill={SAN} />
        <rect x="26" y="222" width="110" height="8" rx="4" fill={INK} opacity="0.3" />
      </g>
      <g transform="translate(278 86)">
        <rect width="204" height="224" rx="12" fill={SAN} stroke={INK} strokeWidth="2.5" />
        <rect x="16" y="18" width="130" height="14" rx="7" fill={SUN} stroke={INK} strokeWidth="2.5" />
        <rect x="16" y="52" width="164" height="8" rx="4" fill={PAPER} opacity="0.85" />
        <rect x="16" y="70" width="132" height="8" rx="4" fill={PAPER} opacity="0.5" />
        <rect x="16" y="88" width="150" height="8" rx="4" fill={PAPER} opacity="0.5" />
        <rect x="16" y="120" width="96" height="8" rx="4" fill={PAPER} opacity="0.85" />
        <rect x="16" y="138" width="144" height="8" rx="4" fill={PAPER} opacity="0.5" />
        <rect x="16" y="156" width="116" height="8" rx="4" fill={PAPER} opacity="0.5" />
        <rect x="16" y="190" width="172" height="18" rx="9" fill="none" stroke={PAPER} strokeWidth="2" opacity="0.6" />
        <path d="M168 199 l6 6 l10 -12" stroke={SUN} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <Note x={448} y={278} s={0.8} fill={SUN} />
      <Sparkle x={40} y={300} r={7} />
    </Frame>
  )
}

export function NotionLikeIllustration() {
  return (
    <Frame label="Illustration du Notion-like pédagogique">
      <rect x="42" y="86" width="436" height="222" rx="12" fill="#ffffff" stroke={INK} strokeWidth="2.5" />
      <rect x="66" y="108" width="180" height="16" rx="8" fill={SUN} stroke={INK} strokeWidth="2.5" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(66 ${146 + i * 46})`}>
          <rect width="14" height="14" rx="4" fill={PAPER} stroke={INK} strokeWidth="2.5" />
          {i === 0 && <path d="M3 7.5 l3 3 l5 -6" stroke={SAN} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
          <rect x="26" y="3" width={150 - i * 24} height="9" rx="4.5" fill={INK} opacity={0.6 - i * 0.15} />
          <path d="M198 4 l8 5 l-8 5" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" opacity="0.5" />
        </g>
      ))}
      <g transform="translate(66 292)">
        <rect width="160" height="0" fill="none" />
      </g>
      <g transform="translate(288 146)">
        <rect width="168" height="100" rx="10" fill={PAPER} stroke={INK} strokeWidth="2.5" />
        <path d="M84 22 V78 M62 56 L84 78 L106 56" stroke={SAN} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="36" y="86" width="96" height="8" rx="4" fill={INK} opacity="0.4" />
      </g>
      <g transform="translate(288 262)">
        <rect width="168" height="26" rx="8" fill={SUN} stroke={INK} strokeWidth="2.5" />
        <rect x="14" y="9" width="110" height="8" rx="4" fill={INK} opacity="0.7" />
        <path d="M142 8 l5 5 l-5 5 M152 8 l-5 5 l5 5" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <Note x={46} y={330} s={0} />
      <Sparkle x={478} y={76} r={7} />
    </Frame>
  )
}
