import Hero from './components/Hero.jsx'
import { ConservatoireScene, PlatformScene, PortalScene } from './components/ContextScenes.jsx'
import CardsScene from './components/CardsScene.jsx'
import CircleScene from './components/CircleScene.jsx'
import { CoutureScene, DelegateStatements } from './components/CoutureScene.jsx'
import Catalog from './components/Catalog.jsx'
import ToolsScene from './components/ToolsScene.jsx'
import { StrikeScene, Conception } from './components/EndScenes.jsx'
import Motivations from './components/Motivations.jsx'

export default function App() {
  return (
    <main>
      <Hero />
      <ConservatoireScene />
      <PlatformScene />
      <PortalScene />
      <CardsScene />
      <CircleScene />
      <CoutureScene />
      <DelegateStatements />
      <Catalog />
      <ToolsScene />
      <StrikeScene />
      <Conception />
      <Motivations />
    </main>
  )
}
