# Portfolio — Divh

Portfolio personnel développé avec Vue.js 3 + Vite.

**DA inspirée de [iisu.network](https://iisu.network/)** — dark mode, gradients colorés, typo bold, animations fluides.

**GitHub :** [@bleathingman](https://github.com/bleathingman)

## Stack

- **Framework** : Vue.js 3 (Options API)
- **Bundler** : Vite 5
- **Fonts** : Syne (display) + DM Sans (body)
- **Styles** : CSS pur, organisé en fichiers séparés

## Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.js
    ├── App.vue
    ├── assets/styles/
    │   ├── variables.css   ← design tokens
    │   ├── base.css        ← reset + utilitaires
    │   └── animations.css  ← keyframes + .reveal
    ├── components/
    │   ├── NavBar.vue
    │   ├── HeroSection.vue
    │   ├── AboutSection.vue
    │   ├── SkillsSection.vue
    │   ├── ProjectsSection.vue
    │   ├── ContactSection.vue
    │   ├── FooterSection.vue
    │   └── icons/
    └── data/
        └── portfolio.js    ← ⭐ tout le contenu ici
```

## Démarrer

```bash
npm install
npm run dev
```

## Personnaliser

Tout est dans `src/data/portfolio.js` — change ton email, tes liens, tes projets.

## Déployer

```bash
npm run build
# → dossier dist/ prêt pour Vercel / Netlify / GitHub Pages
```

## Init GitHub

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git remote add origin https://github.com/bleathingman/portfolio.git
git push -u origin main
```

## License

MIT
