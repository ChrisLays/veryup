import ChapterNav from './components/ChapterNav.jsx'
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
      <ChapterNav />
      <div id="chap-intro"><Hero /></div>
      <div id="chap-2022"><ConservatoireScene /></div>
      <div id="chap-2025"><PlatformScene /></div>
      <div id="chap-contexte"><PortalScene /></div>
      <div id="chap-diagnostic"><CardsScene /></div>
      <div id="chap-cooperation"><CircleScene /></div>
      <div id="chap-couture"><CoutureScene /></div>
      <DelegateStatements />
      <div id="chap-catalogue"><Catalog /></div>
      <div id="chap-outils"><ToolsScene /></div>
      <div id="chap-bilan"><StrikeScene /></div>
      <div id="chap-philosophie"><Conception /></div>
      <div id="chap-motivations"><Motivations /></div>
    </main>
  )
}
