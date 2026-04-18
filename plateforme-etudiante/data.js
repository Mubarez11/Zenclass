function makeActivities(count) {
  return Array.from({ length: count }, function (_, index) {
    return {
      number: index + 1,
      title: "Activité " + (index + 1),
      duration: "--",
      instruction: "--",
      feedbacks: ["--"]
    };
  });
}

const axe2Objective2Activities = [
  {
    number: 1,
    moduleType: "sort",
    title: "Classer des indices de stress selon leur nature",
    duration: "--",
    instruction:
      "Classez chaque carte dans la bonne catégorie : verbal, non verbal, contextuel ou insuffisant pour conclure. Les 4 blocs de tri sont visibles immédiatement pour faciliter une lecture d’ensemble de l’activité.",
    feedbacks: [
      "Distinguez les paroles de l’élève, les manifestations corporelles et les éléments de contexte.",
      "Évitez d’interpréter trop vite : certains indices isolés restent insuffisants pour conclure.",
      "La validation sert à repérer les confusions entre observable et interprétation."
    ]
  },
  {
    number: 2,
    moduleType: "prep",
    title: "Préparer une situation réelle observée en classe",
    duration: "--",
    instruction:
      "Décrivez une situation vécue en classe dans laquelle vous avez pensé qu’un élève pouvait être en stress. Appuyez-vous sur des faits observables, formulez une hypothèse prudente, puis complétez votre analyse de posture.",
    feedbacks: [
      "Restez sur des faits observables avant de formuler une hypothèse.",
      "Utilisez des indices verbaux, non verbaux ou contextuels précis et non redondants.",
      "Le retour réflexif doit aussi porter sur votre ressenti et votre réaction professionnelle."
    ]
  },
  {
    number: 3,
    moduleType: "verbatim",
    title: "Annoter des verbatims pour distinguer stress et pression",
    duration: "--",
    instruction:
      "Lisez chaque cas, choisissez un mode de surlignage, puis cliquez sur les passages les plus défendables. L’activité distingue les signes de stress probable chez l’élève et les formulations qui augmentent la pression.",
    feedbacks: [
      "Commencez par lire l’ensemble du cas avant de sélectionner des extraits.",
      "Ne retenez que les passages les plus argumentables, pas tout le texte.",
      "Différenciez bien ce qui relève du stress probable et ce qui augmente la pression."
    ]
  },
  {
    number: 4,
    moduleType: "evaluation",
    title: "Évaluation : Analyser une séquence vidéo",
    duration: "--",
    instruction:
      "Visionnez la scène, identifiez un élève en état probable de stress, puis relevez 4 indices observables qui soutiennent votre analyse.",
    feedbacks: [
      "Votre choix doit être justifié par des indices observables, pas par une impression générale.",
      "Mobilisez au moins deux catégories différentes parmi verbal, non verbal et contextuel.",
      "Vérifiez la cohérence entre l’élève ciblé, les indices retenus et votre interprétation."
    ]
  }
];

window.platformData = {
  axes: [
    {
      id: "axe-1",
      shortLabel: "Axe 1",
      title: "Comprendre le lien émotions / bien-être / apprentissages",
      duration: "--",
      objectives: [
        {
          id: "obj-1",
          label: "Objectif 1",
          title: "Indiquer les postures qui ont un impact sur l'émergence du stress.",
          duration: "--",
          activities: makeActivities(3)
        },
        {
          id: "obj-2",
          label: "Objectif 2",
          title: "Expliquer le rôle des émotions dans les apprentissages et le bien-être des élèves.",
          duration: "--",
          activities: makeActivities(4)
        },
        {
          id: "obj-3",
          label: "Objectif 3",
          title: "Reconnaître en soi et chez les autres les signaux verbaux et non verbaux précurseurs de stress.",
          duration: "--",
          activities: makeActivities(3)
        }
      ]
    },
    {
      id: "axe-2",
      shortLabel: "Axe 2",
      title: "Détecter pour prévenir",
      duration: "--",
      objectives: [
        {
          id: "obj-1",
          label: "Objectif 1",
          title: "Reconnaître chez les autres les signaux verbaux et non verbaux précurseurs de stress.",
          duration: "--",
          activities: makeActivities(3)
        },
        {
          id: "obj-2",
          label: "Objectif 2",
          title: "Repérer les signes de stress chez un élève.",
          duration: "--",
          activities: axe2Objective2Activities
        },
        {
          id: "obj-3",
          label: "Objectif 3",
          title: "Reformuler les consignes stressantes en consignes neutres.",
          duration: "--",
          activities: makeActivities(4)
        }
      ]
    },
    {
      id: "axe-3",
      shortLabel: "Axe 3",
      title: "Communiquer de manière émotionnellement soutenante",
      duration: "--",
      objectives: [
        {
          id: "obj-1",
          label: "Objectif 1",
          title: "Moduler sa voix pour apaiser un échange.",
          duration: "--",
          activities: makeActivities(3)
        },
        {
          id: "obj-2",
          label: "Objectif 2",
          title: "Intervenir rapidement et de manière adaptée lorsque le contexte de classe le demande afin d'apaiser les élèves.",
          duration: "--",
          activities: makeActivities(4)
        },
        {
          id: "obj-3",
          label: "Objectif 3",
          title: "Adopter une posture d'écoute active lors d'un échange avec un élève.",
          duration: "--",
          activities: makeActivities(3)
        }
      ]
    },
    {
      id: "axe-4",
      shortLabel: "Axe 4",
      title: "Agir sur le climat et le bien-être global",
      duration: "--",
      objectives: [
        {
          id: "obj-1",
          label: "Objectif 1",
          title: "Détecter les comportements des élèves qui risquent de stresser ses camarades.",
          duration: "--",
          activities: makeActivities(3)
        },
        {
          id: "obj-2",
          label: "Objectif 2",
          title: "Encourager les élèves à agir entre eux de manière plus soutenante.",
          duration: "--",
          activities: makeActivities(3)
        },
        {
          id: "obj-3",
          label: "Objectif 3",
          title: "Organiser une entrée matinale, les moments autour des pauses et des récréations, ainsi que la fin de journée pour instaurer une ambiance sécurisante.",
          duration: "--",
          activities: makeActivities(3)
        }
      ]
    }
  ],
  theoryResourceTypes: ["Vidéo", "Article", "Podcast"],
  classDocuments: [
    {
      featured: true,
      iconClass: "fa-book-open",
      title: "Dossier Complet",
      description: "Le guide pédagogique intégral pour apprendre à gérer le stress en milieu scolaire.",
      actions: [
        {
          href: "../zenclass-modele/zenclass-dossier.pdf",
          label: "PDF",
          iconClass: "fa-file-pdf"
        },
        {
          href: "../zenclass-modele/zenclass-dossier.docx",
          label: "Word",
          kind: "word",
          iconClass: "fa-file-word"
        }
      ]
    },
    {
      iconClass: "fa-play-circle",
      title: "Vidéo pédagogique",
      description: "La vidéo principale ZenClass pour introduire la gestion du stress et présenter les activités de la séquence.",
      embed: "https://www.youtube.com/embed/G03KPCttNC0",
      actions: [
        {
          href: "https://www.youtube.com/watch?v=G03KPCttNC0",
          label: "Voir sur YouTube",
          iconClass: "fa-up-right-from-square"
        }
      ]
    },
    {
      iconClass: "fa-microscope",
      iconVariant: "justif",
      title: "Justifications Pédagogiques",
      description: "Les fondements théoriques et scientifiques de notre approche.",
      actions: [
        {
          href: "../zenclass-modele/Justification.pdf",
          label: "Consulter",
          iconClass: "fa-file-pdf"
        }
      ]
    }
  ],
  classActivities: [
    {
      number: "01",
      iconClass: "fa-layer-group",
      title: "Classification",
      preview: "../zenclass-modele/img1.png",
      download: "../zenclass-modele/act1.pdf",
      blocks: [
        {
          label: "Objectif",
          iconClass: "fa-bullseye",
          text: "Reconnaître et évaluer les situations qui peuvent générer du stress."
        },
        {
          label: "Critère de réussite",
          iconClass: "fa-check-double",
          text: "L'élève parvient à repérer, classer et ordonner les situations stressantes de son quotidien."
        },
        {
          label: "Institutionnalisation",
          iconClass: "fa-lightbulb",
          text: "Identifier les signes de stress et trouver des méthodes pour les apaiser."
        }
      ]
    },
    {
      number: "02",
      iconClass: "fa-theater-masks",
      title: "Jeux de rôles",
      preview: "../zenclass-modele/img2.png",
      download: "../zenclass-modele/act2.pdf",
      blocks: [
        {
          label: "Objectifs",
          iconClass: "fa-bullseye",
          text: "Réussir à se mettre à la place de l'autre. Développer l'empathie. S'approprier des conseils."
        },
        {
          label: "Critère de réussite",
          iconClass: "fa-check-double",
          text: "L'élève parvient à conseiller un camarade et à reconnaître les comportements déclenchés par le stress."
        },
        {
          label: "Matériel",
          iconClass: "fa-users",
          text: "9 cartes « élève stressé » et 9 cartes « coach » pour des activités en binôme."
        }
      ]
    },
    {
      number: "03",
      iconClass: "fa-box-open",
      title: "Boîte anti-stress",
      preview: "../zenclass-modele/img3.png",
      download: "../zenclass-modele/act3.pdf",
      blocks: [
        {
          label: "Concept",
          iconClass: "fa-bullseye",
          text: "Un patron à imprimer et des cartes modèles à construire avec les élèves."
        },
        {
          label: "Personnalisation",
          iconClass: "fa-palette",
          text: "Couleurs personnalisables selon les besoins : vert (apaisement), bleu (colère), rose (conflits)."
        },
        {
          label: "Utilisation",
          iconClass: "fa-toolbox",
          text: "Devient la boîte à outils personnelle de l'élève pour gérer ses émotions."
        }
      ]
    },
    {
      number: "04",
      iconClass: "fa-clipboard-list",
      title: "Auto-évaluation",
      preview: "../zenclass-modele/img4.png",
      download: "../zenclass-modele/act4.pdf",
      blocks: [
        {
          label: "Objectif",
          iconClass: "fa-bullseye",
          text: "Mesurer la progression et la prise de conscience des élèves."
        },
        {
          label: "Timing",
          iconClass: "fa-clock",
          text: "À distribuer au début ET à la fin de la séquence pour mesurer l'évolution."
        },
        {
          label: "Évaluation",
          iconClass: "fa-chart-line",
          text: "Permet une réflexion métacognitive sur la gestion du stress."
        }
      ]
    }
  ],
  teamMembers: [
    {
      name: "Mohammad",
      href: "https://tecfaetu.unige.ch/etu-maltt/freya/mohamsa1/"
    },
    {
      name: "Julien",
      href: "https://tecfaetu.unige.ch/perso/maltt/kouchek1/index.html"
    },
    {
      name: "Karim",
      href: "https://tecfaetu.unige.ch/etu-maltt/freya/dzajic9/"
    },
    {
      name: "Audrey",
      href: "https://tecfaetu.unige.ch/perso/maltt/avogadr5/index.html"
    }
  ],
  theoryResourcesByAxis: {
    "axe-2": [
      {
        type: "Article PDF",
        title: "Le stress à l'école",
        description: "Document à mobiliser pour approfondir le stress scolaire et ses manifestations chez les élèves.",
        meta: "Rédactrices invitées : Michelle Dumont, Danielle Leclerc, Line Massé.",
        href: "../les-stress-a-l-ecole.pdf",
        actionLabel: "Ouvrir le PDF"
      },
      {
        type: "Article PDF",
        title: "Investigation of Stress Symptoms among Primary School Children",
        description: "Article de référence complémentaire sur les symptômes de stress observables chez les enfants à l'école primaire.",
        meta: "Auteurs : Leila Valizadeh, Aliraza Farnam, Mahni Rahkar Farshi.",
        href: "../investigation-stress-symptoms-primary-school-children.pdf",
        actionLabel: "Ouvrir le PDF"
      },
      {
        type: "Site web",
        title: "UNICEF",
        description: "Ressource institutionnelle pour reconnaître les signes de stress chez les enfants et compléter les objectifs 5 et 6.",
        href: "https://www.unicef.org/parenting/fr/soins-attentifs/reconnaitre-les-signes-de-stress-chez-les-enfants",
        actionLabel: "Consulter le site"
      },
      {
        type: "Vidéo",
        title: "Ressource YouTube 1",
        description: "Capsule vidéo complémentaire à utiliser pour illustrer le repérage du stress et enrichir la réflexion en axe 2.",
        href: "https://www.youtube.com/watch?v=N6bZuDNOgbc",
        embed: "https://www.youtube.com/embed/N6bZuDNOgbc",
        actionLabel: "Ouvrir sur YouTube"
      },
      {
        type: "Vidéo",
        title: "Ressource YouTube 2",
        description: "Deuxième capsule vidéo à mobiliser pour varier les supports d'approfondissement autour du stress et des consignes.",
        href: "https://www.youtube.com/watch?v=GkVZhFl6Wtk",
        embed: "https://www.youtube.com/embed/GkVZhFl6Wtk",
        actionLabel: "Ouvrir sur YouTube"
      }
    ]
  }
};
