// ============================================
// PORTFOLIO DATA — Customize everything here
// ============================================

export const personal = {
  name: 'Divh',
  role: 'Développeur Full Stack',
  tagline: 'Web, software & game projects.\nLearning, sharing, creating.',
  location: 'Loire-Atlantique, France',
  available: true,
  email: 'matheo@agencetoam.fr', // 🔧 à remplacer par ton vrai email
  github: 'https://github.com/bleathingman',
}

export const about = {
  bio: [
    "Développeur Full Stack diplômé d'un BTS Développeur Web, avec 2 ans d'expérience en alternance. Passionné par la création de solutions web innovantes et l'optimisation de l'expérience utilisateur.",
    "À l'aise aussi bien sur le frontend (Vue.js, HTML, CSS/SASS) que sur le backend (PHP, Drupal 9, Node.js). J'aime construire des projets web, software et game — apprendre en faisant, partager ce que je crée.",
  ],
  stats: [
    { value: '2+', label: "Ans d'expérience" },
    { value: '12+', label: 'Repos GitHub' },
    { value: 'BTS', label: 'Dev Web — CESI' },
  ],
}

export const skills = [
  {
    category: 'Frontend',
    items: ['Vue.js', 'HTML', 'CSS / SASS', 'JavaScript', 'TWIG'],
    gradient: 'linear-gradient(135deg, #00ddff, #2b1fd0)',
  },
  {
    category: 'Backend',
    items: ['PHP', 'Drupal 9', 'Node.js', 'E-commerce', 'Chat Bot'],
    gradient: 'linear-gradient(135deg, #8fffb1, #007c92)',
  },
  {
    category: 'Sys & Outils',
    items: ['Python', 'Git / GitHub', 'Windows Server', 'Réseaux', 'Habilitation BR'],
    gradient: 'linear-gradient(135deg, #ffe57c, #e59e18)',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Twitter-Lite',
    description: "Clone simplifié de Twitter développé en PHP dans le cadre d'un stage. Gestion des utilisateurs, posts, timeline et interactions sociales.",
    tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
    link: 'https://github.com/bleathingman/Twitter-Lite',
    demo: null,
    featured: true,
    year: '2019',
    gradient: 'var(--gradient-primary)',
  },
  {
    id: 2,
    title: 'Wiki-Games',
    description: 'Wiki collaboratif (future) dédié aux jeux vidéo. Fiches de jeux, catégories et système de gestion de contenu développé en PHP.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
    link: 'https://github.com/bleathingman/Wiki-Games',
    demo: null,
    featured: true,
    year: '2023',
    gradient: 'var(--gradient-green)',
  },
  {
    id: 3,
    title: 'wg-monitor',
    description: 'Outil de monitoring système et réseau, conçue pour offrir une visualisation temps réel précise et fluide des ressources d’un serveur ou d’une machine locale.',
    tags: ['Python', 'WireGuard', 'CLI', 'Monitoring'],
    link: 'https://github.com/bleathingman/wg-monitor',
    demo: null,
    featured: true,
    year: '2026',
    gradient: 'var(--gradient-warm)',
  },
  {
    id: 4,
    title: 'iron_system',
    description: "Projet Python de gestion système. Automatisation de tâches d'administration et monitoring de ressources.",
    tags: ['Python', 'Système', 'Automatisation'],
    link: 'https://github.com/bleathingman/iron_system',
    demo: null,
    featured: false,
    year: '2026',
    gradient: 'linear-gradient(135deg, #c8b1ff, #4100d9)',
  },
  {
    id: 5,
    title: 'kleaccess',
    description: "Projet réalisé en stage — application JavaScript pour la gestion des accès et des droits utilisateurs. (Gestionnaire de mot de passe)",
    tags: ['JavaScript', 'Stage', 'Gestion accès'],
    link: 'https://github.com/EtanFaisant/kleaccess',
    demo: null,
    featured: false,
    year: '2020',
    gradient: 'linear-gradient(135deg, #ff9a8b, #ff6a88)',
  },
]

export const experience = [
  {
    company: 'Agence TOAM',
    role: 'Auto Entrepreneur',
    period: 'Fév. 2024 — Présent',
    description: 'Création et gestion de sites sur mesure pour clients pro. Gestion de projet de A à Z : conception, dev, déploiement, maintenance et conseil digital.',
  },
  {
    company: 'Motion4Ever',
    role: 'Développeur Full Stack (Alternance)',
    period: 'Sept. 2021 — Sept. 2023',
    description: "Frontend Vue.js / CSS/SASS, backend PHP, sites Drupal 9, développement d'un ChatBot intégré à une solution e-commerce.",
  },
]
