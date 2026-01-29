// src/data/projects.js

const projects = [
  {
    id: 1,
    title: "Riding Cities",
    slug: "riding-cities",
    date: "2025-05-12",
    description: {
      short:
        "Intégration HTML d’une nouvelle section et mise à jour de contenus existants à partir d’une maquette Figma.",
      long: [
        "Projet d’intégration front-end portant sur la mise à jour de la page web de l’association Riding Cities à partir d’une maquette Figma.",
        "Création d’une nouvelle section « Les membres fondateurs » avec contenus textuels et visuels, ainsi que la modification d’une section existante pour ajouter un titre et deux boutons de téléchargement de plannings de cours.",
        "Le travail portait exclusivement sur le HTML, avec réutilisation de classes CSS existantes sans modification du fichier de styles.",
      ],
    },
    context:
      "Projet réalisé dans le cadre de la formation Intégrateur Web chez OpenClassrooms.",
    stack: ["HTML", "CSS", "Figma"],
    cover: {
      src: "/images/riding-cities/cover.png",
      srcSet:
        "/images/riding-cities/cover.png 320w, /images/riding-cities/cover.png 640w, /images/riding-cities/cover.png 960w",
      sizes: "(min-width: 768px) 33vw, 100vw",
      alt: "Page d'accueil du site Riding Cities",
    },
    gallery: [
      {
        src: "/images/riding-cities/1.png",
        srcSet: "Versions responsives de cette image (320w, 640w, 960w, etc.)",
        alt: "Description de ce que montre l’image (page, fonctionnalité, section)",
      },
      //     {
      //       src: "Chemin vers une autre image secondaire du projet",
      //       srcSet: "Versions responsives de cette image",
      //       alt: "Description de cette seconde vue du projet",
      //     },
    ],
  },

  {
    id: 2,
    title: "Booki",
    slug: "booki",
    date: "2025-05-23",
    description: {
      short:
        "Intégration responsive de la landing page de l’agence Booki en HTML et CSS, en suivant les maquettes Figma pour tous les appareils.",
      long: [
        "L'objectif était de créer la page d'accueil d'une agence de voyage avec HTML et CSS, en respectant scrupuleusement les maquettes fournies pour mobile, tablette et desktop.",
        "J'ai été amené à créer des composants d'interface personnalisés et à travailler sur le design responsive pour que la page fonctionne parfaitement sur toutes les tailles d'écran. Ce projet m'a permis de comprendre en profondeur la structuration et le stylisme du code pour répondre aux exigences de design.",
        "En plus de l'intégration HTML et CSS, j'ai appliqué les bonnes pratiques pour les media queries, la mise en page avec Flexbox, et la gestion des images et cartes pour un rendu cohérent et esthétique sur tous les formats.",
      ],
    },
    context:
      "Projet réalisé dans le cadre de ma formation intégrateur web chez OpenClassrooms.",
    stack: ["HTML", "CSS", "Figma", "VSCode"],
    cover: {
      src: "/images/booki/cover.png",
      srcSet:
        "/images/booki/cover.png 320w, /images/booki/cover.png 640w, /images/booki/cover.png 960w",
      sizes: "(min-width: 768px) 33vw, 100vw",
      alt: "Page d'accueil du site Booki",
    },
    gallery: [
      {
        src: "/images/booki/1.png",
        srcSet: "Versions responsives de cette image (320w, 640w, 960w, etc.)",
        alt: "Description de ce que montre l’image (page, fonctionnalité, section)",
      },
      {
        src: "/images/booki/2.png",
        srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
    ],
  },

  {
    id: 3,
    title: "Ohmyfood",
    slug: "ohmyfood",
    date: "2025-06-13",
    description: {
      short:
        "Intégration mobile-first du site OhMyFood avec animations CSS, en utilisant Sass et Git pour le versioning.",
      long: [
        "Le projet consistait à développer l’interface d’une startup de restauration, en intégrant la page d’accueil et les pages des restaurants, selon les maquettes mobiles et desktop fournies.",
        "J'ai mis en place des animations CSS pour enrichir l’expérience utilisateur et assurer un rendu fluide et interactif sur tous les appareils.",
        "L’utilisation de Sass m’a permis de structurer et maintenir le code CSS de manière optimale, et Git/GitHub a été utilisé pour le versioning et la gestion du projet.",
        "Ce projet m’a permis de renforcer mes compétences en intégration responsive, en animations CSS, et en organisation front-end sur un site complet multi-pages.",
      ],
    },
    context:
      "Projet réalisé dans le cadre de ma formation intégrateur web chez OpenClassrooms.",
    stack: ["HTML", "CSS", "Sass", "Git", "GitHub"],
    cover: {
      src: "/images/ohmyfood/cover.png",
      srcSet:
        "/images/ohmyfood/cover.png 320w, /images/ohmyfood/cover.png 640w, /images/ohmyfood/cover.png 960w",
      sizes: "(min-width: 768px) 33vw, 100vw",
      alt: "Page d'accueil du site Ohmyfood",
    },
    gallery: [
      {
        src: "/images/ohmyfood/1.png",
        // srcSet: "Versions responsives de cette image (320w, 640w, 960w, etc.)",
        alt: "Description de ce que montre l’image (page, fonctionnalité, section)",
      },
      {
        src: "/images/ohmyfood/2.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
    ],
    liveLink: "https://jonathan-huber.github.io/oh-my-food/",
    repoLink: "https://github.com/Jonathan-Huber/oh-my-food",
  },

  {
    id: 4,
    title: "Sophie Bluel",
    slug: "sophie-bluel",
    date: "2025-08-01",
    description: {
      short:
        "Développement d’un site portfolio dynamique pour une architecte d’intérieur en JavaScript, avec gestion complète des données via une API et interface d’administration.",
      long: [
        "J’ai développé la partie front-end du site portfolio d’une architecte d’intérieur à partir d’un HTML fourni, en rendant l’ensemble de la page dynamique grâce à JavaScript et à la manipulation du DOM.",
        "Le projet repose sur la communication avec une API : récupération des travaux, affichage dynamique de la galerie, mise en place de filtres par catégories et mise à jour de l’interface sans rechargement de page.",
        "J’ai également conçu une interface d’administration complète comprenant une page de connexion, la gestion de l’authentification par token, ainsi qu’une fenêtre modale permettant l’ajout et la suppression de projets avec prévisualisation d’images.",
        "Ce projet m’a permis de consolider mes compétences en JavaScript, en gestion des événements, en appels API (fetch), et en mise à jour dynamique du DOM dans un contexte applicatif réaliste.",
      ],
    },
    context:
      "Projet réalisé dans le cadre de ma formation intégrateur web chez OpenClassrooms.",
    stack: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "API REST",
      "Git",
      "GitHub",
      "Figma",
    ],
    cover: {
      src: "/images/sophie-bluel/cover.png",
      // srcSet:
      //   "/images/sophie-bluel_3-2.png 320w, /images/sophie-bluel_3-2.png 640w, /images/sophie-bluel_3-2.png 960w",
      sizes: "(min-width: 768px) 33vw, 100vw",
      alt: "Page d'accueil du portfolio de Sophie Bluel",
    },
    gallery: [
      {
        src: "/images/sophie-bluel/1.png",
        // srcSet: "Versions responsives de cette image (320w, 640w, 960w, etc.)",
        alt: "Description de ce que montre l’image (page, fonctionnalité, section)",
      },
      {
        src: "/images/sophie-bluel/2.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
      {
        src: "/images/sophie-bluel/3.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
      {
        src: "/images/sophie-bluel/4.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
      {
        src: "/images/sophie-bluel/5.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
      {
        src: "/images/sophie-bluel/6.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
      {
        src: "/images/sophie-bluel/7.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
    ],
    repoLink:
      "https://github.com/Jonathan-Huber/portfolio-architecte-sophie-bluel",
  },

  {
    id: 5,
    title: "Kasa",
    slug: "kasa",
    date: "2025-09-01",
    description: {
      short:
        "Développement front-end d’une application de location immobilière Kasa en React, avec navigation via React Router et intégration de composants interactifs.",
      long: [
        "L’objectif était de créer une application web moderne et responsive pour Kasa, en utilisant React et React Router afin de gérer la navigation entre les différentes pages de l’application.",
        "J’ai développé les composants principaux, notamment les cards des logements, le carrousel d’images pour chaque propriété, les Collapses pour les informations détaillées, ainsi que les pages d’erreur pour gérer les routes invalides.",
        "Le projet a été construit avec une approche mobile-first et responsive, en appliquant SASS pour structurer le CSS et en ajoutant des animations CSS pour améliorer l’expérience utilisateur. Les données ont été simulées à partir d’un fichier JSON pour reproduire le comportement réel de l’application.",
        "Cette expérience m’a permis de maîtriser la gestion de l’état dans React, la création de composants réutilisables, et l’implémentation d’un routage dynamique et sécurisé avec React Router, tout en respectant scrupuleusement les maquettes Figma fournies.",
      ],
    },
    context:
      "Projet réalisé dans le cadre de ma formation intégrateur web chez OpenClassrooms.",
    stack: ["React", "React Router", "SASS", "Vite", "JavaScript"],
    cover: {
      src: "/images/kasa/cover.png",
      // srcSet:
      //   // "/images/kasa_3-2.png 320w, /images/kasa_3-2.png 640w, /images/kasa_3-2.png 960w",
      sizes: "(min-width: 768px) 33vw, 100vw",
      alt: "Page d'accueil du site Kasa",
    },
    gallery: [
      {
        src: "/images/kasa/1.png",
        // srcSet: "Versions responsives de cette image (320w, 640w, 960w, etc.)",
        alt: "Description de ce que montre l’image (page, fonctionnalité, section)",
      },
      {
        src: "/images/kasa/2.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
      {
        src: "/images/kasa/3.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
    ],
    repoLink: "https://github.com/Jonathan-Huber/Kasa",
  },

  {
    id: 6,
    title: "Nina Carducci",
    slug: "nina-carducci",
    date: "2025-09-29",
    description: {
      short:
        "Optimisation complète du référencement et des performances d’un site de photographe pour améliorer visibilité et accessibilité.",
      long: [
        "Dans ce projet, j’ai travaillé en tant que développeur freelance pour analyser et optimiser le site web d’une photographe, en me concentrant sur le SEO, les performances et l’accessibilité.",
        "J’ai identifié les problèmes de chargement et de structure du code, puis appliqué des améliorations concrètes pour réduire les temps de chargement et rendre le site plus lisible pour les moteurs de recherche.",
        "L’optimisation a inclus la mise en place de balises meta pour les réseaux sociaux, le référencement local via Schema.org, ainsi que des ajustements pour l’accessibilité, testés avec Lighthouse et Wave.",
        "Enfin, j’ai produit un rapport détaillant toutes les modifications et leur impact sur les performances et le SEO, offrant une vision claire des améliorations réalisées.",
      ],
    },
    context:
      "Projet réalisé dans le cadre de ma formation intégrateur web chez OpenClassrooms.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Lighthouse",
      "Wave",
      "Schema.org",
      "SEO",
      "Accessibilité",
    ],
    cover: {
      src: "/images/nina-carducci/cover.png",
      // srcSet:
      //   "/images/nina-carducci_3-2.png 320w, /images/nina-carducci_3-2.png 640w, /images/nina-carducci_3-2.png 960w",
      sizes: "(min-width: 768px) 33vw, 100vw",
      alt: "Page d'accueil du portfolio de Nina Carducci",
    },
    gallery: [
      {
        src: "/images/nina-carducci/1.png",
        // srcSet: "Versions responsives de cette image (320w, 640w, 960w, etc.)",
        alt: "Description de ce que montre l’image (page, fonctionnalité, section)",
      },
      {
        src: "/images/nina-carducci/2.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
      {
        src: "/images/nina-carducci/3.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
      {
        src: "/images/nina-carducci/4.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
      {
        src: "/images/nina-carducci/5.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
    ],
    liveLink: "https://jonathan-huber.github.io/Nina-Carducci/",
    repoLink: "https://github.com/Jonathan-Huber/Nina-Carducci",
  },

  {
    id: 7,
    title: "724events",
    slug: "724events",
    date: "2025-10-16",
    description: {
      short:
        "Débogage et finalisation d’un site one-page pour une agence événementielle, avec tests et cahier de recette.",
      long: [
        "En tant que développeur front-end freelance, j’ai été chargé de finaliser le développement d’un site one-page existant pour l’agence 724events. Mon rôle principal était d’identifier et résoudre les bugs persistants afin d’assurer une expérience utilisateur fluide et conforme aux attentes du client.",
        "Pour ce projet, j’ai utilisé React et JavaScript pour analyser et corriger le code, avec l’aide de React Developer Tools et Chrome DevTools pour tracer les problèmes. Les tests unitaires et d’intégration étant déjà présents, je les ai utilisés pour vérifier que chaque correction n’introduisait pas de régression.",
        "J’ai complété le cahier de recette existant, en documentant chaque bug corrigé et chaque test effectué. Cette démarche m’a permis de garantir la qualité et la fiabilité du site, tout en préparant un support de présentation pour la soutenance du projet.",
        "Enfin, j’ai géré le projet avec Yarn et Git, ce qui m’a permis de versionner le code et de maintenir un workflow propre et organisé tout au long du développement.",
      ],
    },
    context:
      "Projet réalisé dans le cadre de ma formation intégrateur web chez OpenClassrooms.",
    stack: ["React", "JavaScript", "Node.js", "Yarn", "Git"],
    cover: {
      src: "/images/724events/cover.png",
      // srcSet:
      //   "/images/724events_3-2.png 320w, /images/724events_3-2.png 640w, /images/724events_3-2.png 960w",
      sizes: "(min-width: 768px) 33vw, 100vw",
      alt: "Page d'accueil du site 724events",
    },
    gallery: [
      {
        src: "/images/724events/1.png",
        // srcSet: "Versions responsives de cette image (320w, 640w, 960w, etc.)",
        alt: "Description de ce que montre l’image (page, fonctionnalité, section)",
      },
      {
        src: "/images/724events/2.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
      {
        src: "/images/724events/3.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
    ],
    repoLink: "https://github.com/Jonathan-Huber/724-Events",
  },
  {
    id: 8,
    title: "Argent Bank",
    slug: "argent-bank",
    date: "2025-11-10",
    description: {
      short:
        "Création du front-end bancaire avec React/Redux, intégration API et spécification des transactions dans Swagger.",
      long: [
        "Pour ce projet, j’ai développé l’interface utilisateur d’une application bancaire complète avec React, en suivant les maquettes fournies. L’application est responsive et sécurisée, et permet la gestion des comptes et transactions des utilisateurs.",
        "J’ai utilisé Redux pour gérer l’état global de l’application, garantissant la cohérence des données à travers les différents composants. React Router a été employé pour la navigation entre les pages et la gestion de l’authentification utilisateur.",
        "J’ai conçu et documenté dans Swagger les endpoints relatifs aux transactions, définissant leur structure et préparant leur intégration future côté back-end.",
        "Enfin, j’ai veillé à optimiser les composants pour leur réutilisation et la performance de l’application, en suivant les bonnes pratiques du Green Code et en assurant la qualité du code et de l’expérience utilisateur.",
      ],
    },
    context:
      "Projet réalisé dans le cadre de ma formation intégrateur web chez OpenClassrooms.",
    stack: ["React", "Redux", "React Router", "JavaScript", "Swagger"],
    cover: {
      src: "/images/argent-bank/cover.png",
      // srcSet:
      //   "/images/argent-bank/cover.png 320w, /images/argent-bank/cover.png 640w, /images/argent-bank/cover.png 960w",
      sizes: "(min-width: 768px) 33vw, 100vw",
      alt: "Page d'accueil du site Argent Bank",
    },
    gallery: [
      {
        src: "/images/argent-bank/1.png",
        // srcSet: "Versions responsives de cette image (320w, 640w, 960w, etc.)",
        alt: "Description de ce que montre l’image (page, fonctionnalité, section)",
      },
      {
        src: "/images/argent-bank/2.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
      {
        src: "/images/argent-bank/3.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
      {
        src: "/images/argent-bank/4.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
      {
        src: "/images/argent-bank/5.png",
        // srcSet: "Versions responsives de cette image (320w, 640w, 960w, etc.)",
        alt: "Description de ce que montre l’image (page, fonctionnalité, section)",
      },
      {
        src: "/images/argent-bank/6.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
      {
        src: "/images/argent-bank/7.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
      {
        src: "/images/argent-bank/8.png",
        // srcSet: "Versions responsives de cette image",
        alt: "Description de cette seconde vue du projet",
      },
    ],
    repoLink: "https://github.com/Jonathan-Huber/ArgentBank-Frontend",
  },
];

export default projects;

// {
//   id: "Identifiant unique du projet (nombre 01,02,03 doit être unique)",
//   title: "Nom du projet affiché sur la card et la page détail",
//   slug: "Identifiant unique utilisé dans l’URL de la page projet (exemple-slug)",
//   date: "Date de démarrage du projet (YYYY-MM-DD),
//   description: {
//     short: "Description courte du projet (Affichée sur la card d’accueil)",
//     long: [
//       "Description longue du projet affichée dans la modale ou la page détail.",
//       "Peut inclure : objectif, ce qui a été réalisé, contraintes techniques, etc.",
//       "Plusieur paragraphe",
//     ],
//   },
//   context: "Context du projet",
//   stack: [
//     "Technologie principale utilisée (ex: HTML, CSS, JavaScript)",
//     "Autre technologie ou outil (ex: Figma, React, API, etc.)",
//   ],
//   cover: {
//     src: "Chemin vers l’image principale du projet (utilisée sur la card)",
//     srcSet:
//       "Chemins vers les différentes tailles de l’image pour le responsive (320w, 640w, 960w, etc.)",
//     sizes:
//       "Règles d’affichage des tailles d’image selon la largeur de l’écran",
//     alt: "Description textuelle de l’image principale",
//   },
//   gallery: [
//     {
//       src: "Chemin vers une image secondaire du projet (vue détail)",
//       srcSet: "Versions responsives de cette image (320w, 640w, 960w, etc.)",
//       alt: "Description de ce que montre l’image (page, fonctionnalité, section)",
//     },
//     {
//       src: "Chemin vers une autre image secondaire du projet",
//       srcSet: "Versions responsives de cette image",
//       alt: "Description de cette seconde vue du projet",
//     },
//   ],
//   liveLink: "Lien vers le site (optionnel)",
//   repoLink: "Lien vers le reposite GitHub (optionnel)",
// },
