# Pourquoi Very Up ? — Présentation scrollytelling (candidature VeryUpper)

Présentation web de type **scrollytelling** (inspirée des dossiers Maglr), construite en **React + Vite**, reprenant la charte graphique Very Up :

- Jaune `#FFD737` (Bright Sun)
- Bleu pétrole `#2D5264` (San Juan)
- Or foncé `#806B1C` (Kumera)
- Typographies : Archivo (display) & Manrope (texte)

## Démarrage

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production dans dist/
npm run preview  # prévisualisation du build
```

## Déploiement

Le build génère un site statique (`dist/`) : déployable tel quel sur GitHub Pages, Netlify, Vercel…

## Structure

- `src/App.jsx` — ordre des scènes
- `src/scroll.jsx` — hook `useSceneProgress` (progression de scroll 0→1 par scène) + composant `Scene` (section sticky)
- `src/components/` — une section = un composant :
  - `Hero` — intro « Pourquoi Very Up ? »
  - `ContextScenes` — Conservatoire (dessin SVG au scroll), plateforme (2025), portail qui se ferme au scroll
  - `CardsScene` — 4 cartes de constats qui se retournent une à une vers les actions
  - `CircleScene` — processus coopératif en cercle + compteur 1 → 12 cours
  - `CoutureScene` — page de script « haute couture » dont les coutures se dessinent
  - `DelegateStatements` — « Déléguer à l'IA ce qui prend du temps » / « L'IA fait partie de l'équipe »
  - `Catalog` — les cours du catalogue (apparition au scroll)
  - `ToolsScene` — bande défilante des outils (Learning Lab, éditeur Markdown, Notion-like)
  - `EndScenes` — freins barrés un à un + conception de la conception
  - `Motivations` — motivations VeryUpper + footer

## Personnalisation

- Remplacer les maquettes CSS (`.mockup`, `.tool-shot`) par de vraies captures d'écran le cas échéant.
- Tous les textes sont dans les composants correspondants.
