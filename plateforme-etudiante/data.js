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

const axe2Objective3Activities = [
  {
    number: 1,
    moduleType: "pathway",
    title: "Repérer les formulations qui mettent la pression",
    duration: "20 min",
    difficulty: "Fondations",
    taskCount: 8,
    instruction:
      "Commencez par détecter, sans encore réécrire, les mots et tournures qui transforment une consigne informative en consigne stressante.",
    feedbacks: [
      "Observez d'abord l'effet émotionnel produit, avant de chercher une meilleure formulation.",
      "Distinguez ce qui informe l'élève de ce qui ajoute une menace, une urgence ou un jugement.",
      "Gardez une trace des signaux linguistiques que vous retrouvez souvent dans votre propre pratique."
    ],
    learningPath: {
      subtitle: "Activité de sensibilisation",
      outcome: "Être capable d'isoler les déclencheurs linguistiques les plus fréquents avant toute reformulation.",
      focusTags: ["notation", "urgence", "menace implicite", "comparaison sociale"],
      progressLabel: "Parcours 8 tâches",
      supportCards: [
        {
          label: "Point d'attention",
          text: "Ne corrigez rien au départ : regardez seulement ce qui augmente la tension chez l'élève."
        },
        {
          label: "Ce qu'on conserve",
          text: "L'information pédagogique utile : date, consigne, évaluation, temps disponible."
        },
        {
          label: "Ce qu'on surveille",
          text: "Les mots qui rappellent brutalement l'erreur, la sanction, la comparaison ou le manque de temps."
        }
      ],
      reflectionLabel: "Trace de sortie",
      reflectionPrompt: "Quels trois signaux linguistiques voulez-vous désormais surveiller avant une annonce évaluative ?",
      reflectionPlaceholder: "Ex. menace implicite, injonction de performance, comparaison avec les autres...",
      completionMessage: "Le repérage est posé. Vous êtes prêt à passer à une transformation plus guidée.",
      tasks: [
        {
          id: "obj3-a1-t1",
          level: "Niveau 1",
          title: "Se mettre en posture d'observation",
          description: "Relisez l'objectif de l'atelier et adoptez une posture de repérage : on n'améliore pas encore, on observe l'effet produit.",
          cue: "Question-guide : qu'est-ce qui serre le climat émotionnel avant même que l'élève commence ?"
        },
        {
          id: "obj3-a1-t2",
          level: "Niveau 1",
          title: "Lire 8 consignes de classe brutes",
          description: "Parcourez un lot de formulations typiques liées aux notes, aux contrôles, aux copies et au temps restant.",
          cue: "Repérez les formulations qui vous semblent les plus dures à entendre pour un élève anxieux."
        },
        {
          id: "obj3-a1-t3",
          level: "Niveau 2",
          title: "Surligner les mots de pression",
          description: "Isolez les mots ou segments qui évoquent la faute, l'urgence, la déception ou la sanction.",
          cue: "Ex. attention, ne faites pas d'erreurs, dépêchez-vous, vont le sentir."
        },
        {
          id: "obj3-a1-t4",
          level: "Niveau 2",
          title: "Classer les stresseurs par famille",
          description: "Rangez les formulations relevées dans quatre familles : note, temps, menace implicite, comparaison sociale.",
          cue: "L'idée n'est pas de juger la personne, mais de comprendre le mécanisme linguistique."
        },
        {
          id: "obj3-a1-t5",
          level: "Niveau 3",
          title: "Isoler le noyau pédagogique utile",
          description: "Dans deux consignes repérées, séparez l'information utile à conserver du surplus anxiogène.",
          cue: "Gardez seulement ce que l'élève a objectivement besoin de savoir pour agir."
        },
        {
          id: "obj3-a1-t6",
          level: "Niveau 3",
          title: "Justifier un diagnostic de stress",
          description: "Formulez en une phrase pourquoi une tournure peut augmenter la tension émotionnelle chez certains élèves.",
          cue: "Appuyez-vous sur le ton, la syntaxe ou le type de rappel effectué."
        },
        {
          id: "obj3-a1-t7",
          level: "Niveau 4",
          title: "Comparer deux versions d'une même annonce",
          description: "Choisissez la version la plus neutre entre deux propositions et explicitez ce qui change dans le ressenti possible.",
          cue: "Cherchez la version qui informe sans ajouter de pression de performance."
        },
        {
          id: "obj3-a1-t8",
          level: "Niveau 4",
          title: "Formaliser trois repères de vigilance",
          description: "Synthétisez trois marqueurs linguistiques à surveiller avant une note, un contrôle ou une reprise de copies.",
          cue: "Cette liste vous servira de filtre rapide dans les activités suivantes."
        }
      ]
    }
  },
  {
    number: 2,
    moduleType: "pathway",
    title: "Décomposer puis transformer une consigne à risque",
    duration: "25 min",
    difficulty: "Guidé",
    taskCount: 7,
    instruction:
      "Passez du repérage à la transformation guidée : gardez l'intention pédagogique, retirez la pression implicite et stabilisez un ton neutre.",
    feedbacks: [
      "Une bonne reformulation ne gomme pas l'information importante : elle la rend plus respirable.",
      "Travaillez phrase par phrase : ce qui déclenche la pression n'est pas toujours là où on le croit.",
      "Cherchez un ton sobre, clair et sécurisant, sans basculer dans un message flou."
    ],
    learningPath: {
      subtitle: "Atelier de transformation guidée",
      outcome: "Apprendre à reconstruire une consigne en conservant le sens tout en réduisant la charge émotionnelle.",
      focusTags: ["intention pédagogique", "ton neutre", "clarté", "message contenant"],
      progressLabel: "Parcours 7 tâches",
      supportCards: [
        {
          label: "Cible",
          text: "Conserver l'objectif pédagogique, pas la pression émotionnelle qui l'accompagnait."
        },
        {
          label: "Réflexe utile",
          text: "Demandez-vous à chaque étape : cette phrase informe-t-elle ou menace-t-elle ?"
        },
        {
          label: "Critère clé",
          text: "Une reformulation réussie reste précise, courte et exploitable immédiatement par l'élève."
        }
      ],
      reflectionLabel: "Déclic de l'atelier",
      reflectionPrompt: "Quelle transformation vous a le plus aidé à garder le sens sans maintenir la pression ?",
      reflectionPlaceholder: "Ex. remplacer l'injonction de performance par une information claire sur l'attendu...",
      completionMessage: "La mécanique de transformation est en place. Vous pouvez maintenant observer vos propres automatismes de langage.",
      tasks: [
        {
          id: "obj3-a2-t1",
          level: "Niveau 1",
          title: "Repérer l'information non négociable",
          description: "Dans chaque consigne, relevez ce qui doit absolument rester : date, type d'épreuve, rendu, temps disponible.",
          cue: "Tout le reste peut potentiellement être déplacé, allégé ou reformulé."
        },
        {
          id: "obj3-a2-t2",
          level: "Niveau 2",
          title: "Retirer la menace explicite",
          description: "Supprimez les segments qui annoncent une sanction, une déception ou une conséquence brutale.",
          cue: "L'élève a besoin d'une information d'action, pas d'une projection menaçante."
        },
        {
          id: "obj3-a2-t3",
          level: "Niveau 2",
          title: "Assouplir l'injonction de performance",
          description: "Remplacez les ordres liés à l'erreur ou à la réussite parfaite par des formulations plus contenantes.",
          cue: "Ex. 'Prenez le temps de relire' vaut mieux que 'Ne faites pas d'erreurs'."
        },
        {
          id: "obj3-a2-t4",
          level: "Niveau 3",
          title: "Calmer la pression temporelle",
          description: "Transformez une annonce pressante du temps en rappel clair, prévisible et moins brutal.",
          cue: "Conservez le cadre temporel, mais retirez le sentiment de menace immédiate."
        },
        {
          id: "obj3-a2-t5",
          level: "Niveau 3",
          title: "Réécrire une annonce de contrôle",
          description: "Reformulez une consigne qui annonce une évaluation en gardant la date et l'enjeu, sans comparaison ni avertissement inutile.",
          cue: "Cherchez un ton factuel, stable et prévisible."
        },
        {
          id: "obj3-a2-t6",
          level: "Niveau 4",
          title: "Réécrire un retour sur copies",
          description: "Travaillez une formulation sensible au moment de rendre des copies, en retirant les jugements dévalorisants.",
          cue: "Parlez du travail et des pistes de suite, pas de la valeur des élèves."
        },
        {
          id: "obj3-a2-t7",
          level: "Niveau 5",
          title: "Boucler une consigne hybride en autonomie",
          description: "Terminez en réécrivant une consigne qui mélange note, délai et pression sociale, avec un ton neutre et complet.",
          cue: "C'est votre répétition générale avant le studio final."
        }
      ]
    }
  },
  {
    number: 3,
    moduleType: "reflect",
    title: "Prendre du recul sur ses automatismes langagiers",
    duration: "15 min",
    difficulty: "Réflexif",
    taskCount: 7,
    instruction:
      "Avant la tâche finale, prenez un temps de recul pour repérer vos habitudes de langage, les situations les plus sensibles et l'intention pédagogique que vous souhaitez préserver.",
    feedbacks: [
      "Nommez des situations réelles : l'activité devient plus utile quand elle s'ancre dans votre pratique.",
      "Cherchez à comprendre ce que votre formulation voulait protéger ou obtenir, pas seulement ce qu'elle provoque.",
      "Votre synthèse doit préparer concrètement la reformulation finale."
    ],
    reflectionTask: {
      objective: "Identifier les moments où votre langage augmente la pression sans le vouloir et préparer une ligne directrice plus soutenante.",
      timerMinutes: 15,
      timerLabel: "Pause de recul",
      timerDescription: "Un quart d'heure pour faire émerger vos automatismes, puis préparer votre passage au studio final.",
      quickSituations: [
        "Annonce d'une note",
        "Date de contrôle",
        "Distribution des copies",
        "Rappel du temps restant",
        "Travail à terminer",
        "Correction collective"
      ],
      roadmap: [
        "Nommer une formulation délicate",
        "Dire ce qui crée la tension",
        "Repérer les contextes récurrents",
        "Identifier les élèves les plus exposés",
        "Conserver l'intention pédagogique utile",
        "Choisir un langage à faire évoluer",
        "Préparer une phrase d'appui"
      ],
      prompts: [
        {
          id: "hardestInstruction",
          label: "1. Quelle formulation vous paraît la plus délicate à reformuler ?",
          placeholder: "Ex. annoncer qu'une activité comptera pour le bulletin ou rappeler brutalement le temps restant..."
        },
        {
          id: "hardestReason",
          label: "2. Qu'est-ce qui, dans cette formulation, fait monter la pression ?",
          placeholder: "Repérez un mot, un ton, une syntaxe ou un sous-entendu."
        },
        {
          id: "realSituations",
          label: "3. Dans quelles situations de votre pratique cela apparaît-il le plus souvent ?",
          placeholder: "Décrivez les moments de classe où cette formulation revient."
        },
        {
          id: "studentProfile",
          label: "4. Quels profils d'élèves risquent d'être particulièrement déstabilisés ?",
          placeholder: "Ex. élèves anxieux, perfectionnistes, lents à démarrer, déjà fragilisés..."
        },
        {
          id: "keepIntent",
          label: "5. Quelle information pédagogique faut-il absolument conserver ?",
          placeholder: "Ex. la date, le fait que c'est évalué, l'objectif attendu, la durée restante..."
        },
        {
          id: "changeLanguage",
          label: "6. Quel type de langage souhaitez-vous faire évoluer en priorité ?",
          placeholder: "Ex. éviter la menace implicite, réduire l'urgence, sortir de la comparaison sociale..."
        },
        {
          id: "supportivePhrase",
          label: "7. Quelle phrase d'appui pourriez-vous tester à la place ?",
          placeholder: "Écrivez une formulation courte, claire et contenante que vous aimeriez adopter."
        }
      ],
      summaryFields: [
        { id: "hardestInstruction", label: "Formulation la plus sensible" },
        { id: "hardestReason", label: "Ce qui crée la tension" },
        { id: "realSituations", label: "Situations où cela revient" },
        { id: "studentProfile", label: "Élèves particulièrement exposés" },
        { id: "keepIntent", label: "Intention pédagogique à conserver" },
        { id: "changeLanguage", label: "Langage à faire évoluer" },
        { id: "supportivePhrase", label: "Phrase d'appui à tester" }
      ]
    }
  },
  {
    number: 4,
    moduleType: "rephrase",
    title: "Studio final : reformuler des consignes stressantes",
    duration: "30 min",
    difficulty: "Performance",
    taskCount: 8,
    instruction:
      "Réécrivez quatre consignes à risque utilisées en classe en conservant l'objectif pédagogique et en supprimant les formulations susceptibles de créer du stress.",
    feedbacks: [
      "Conservez l'information utile : note, date, temps ou rendu si elle est nécessaire à l'action.",
      "Retirez les menaces implicites, les injonctions de performance et les comparaisons qui ajoutent de la pression.",
      "Validez au moins 3 reformulations sur 4 pour atteindre le seuil attendu."
    ],
    performanceTask: {
      axis: "Axe 2 - Détecter pour prévenir",
      audience: "Enseignants 7e-8e",
      objective: "Dans une situation de classe où il doit annoncer une note ou une date d'examen, l'enseignant reformule des consignes à risque émotionnel en consignes neutres, en conservant le même objectif pédagogique et en supprimant les formulations susceptibles de déclencher une réaction de stress chez les élèves.",
      pedagogicalReference: "Objectif 3 : Reformuler les consignes stressantes en consignes neutres.",
      passThreshold: 3,
      minLength: 18,
      successCriteria: [
        "La consigne reformulée conserve le même sens pédagogique que l'originale.",
        "Le ton reste neutre : pas de menace implicite, pas d'injonction de performance, pas de jugement dévalorisant.",
        "Au moins 3 reformulations sur 4 répondent aux critères de base."
      ],
      theory: [
        "Prokofieva et al. (2017) montrent que la pression évaluative constitue un stresseur scolaire majeur.",
        "Les formulations annonçant une notation ou une conséquence forte peuvent déclencher des réponses émotionnelles et physiologiques mesurables.",
        "Travailler le langage des consignes permet donc d'agir directement sur un stresseur contextuel évitable."
      ],
      roadmap: [
        "Lire la consigne et repérer la pression dominante",
        "Conserver l'information pédagogique non négociable",
        "Retirer la menace implicite ou le jugement",
        "Réécrire la consigne 1",
        "Réécrire la consigne 2",
        "Réécrire la consigne 3",
        "Réécrire la consigne 4",
        "Relire puis viser 3 validations sur 4"
      ]
    },
    stressSignals: [
      "injonction de performance",
      "menace implicite",
      "comparaison sociale",
      "urgence temporelle",
      "jugement dévalorisant"
    ],
    sessionFlow: [
      {
        id: "launch",
        label: "Lancement",
        minutes: 5,
        description: "Repérez l'information utile à conserver et la pression dominante à retirer."
      },
      {
        id: "studio",
        label: "Studio",
        minutes: 20,
        description: "Réécrivez les quatre consignes avec un ton neutre, clair et contenant."
      },
      {
        id: "review",
        label: "Relecture",
        minutes: 5,
        description: "Relisez, comparez avec les critères et validez votre meilleure version."
      }
    ],
    learningActivities: [
      {
        title: "1. Sensibilisation rapide",
        duration: "5 min",
        points: [
          "Lire une consigne à risque à voix haute et repérer immédiatement ce qui serre le climat émotionnel.",
          "Faire le lien avec les stresseurs évaluatifs décrits par Prokofieva et al. (2017)."
        ]
      },
      {
        title: "2. Réécriture guidée",
        duration: "20 min",
        points: [
          "Réécrire quatre consignes à risque en gardant l'information nécessaire à l'élève.",
          "Faire valider chaque proposition à partir des critères : sens conservé, ton neutre, absence de menace implicite."
        ]
      },
      {
        title: "3. Retour réflexif",
        duration: "5 min",
        points: [
          "Identifier la consigne la plus difficile à reformuler et dire pourquoi.",
          "Repérer une situation réelle de classe où une formulation voisine peut apparaître."
        ]
      }
    ],
    prompts: [
      {
        id: "bulletin",
        label: "Consigne 1",
        original: "Attention, c'est noté et ça compte pour votre bulletin. Ne faites pas d'erreurs.",
        hint: "Gardez l'information sur la note et le bulletin, mais retirez l'alerte et l'injonction de performance.",
        neutralExample: "Cette activité est notée et comptera pour votre bulletin. Prenez le temps de lire les consignes et de faire au mieux.",
        requiredGroups: [
          ["noté", "notée", "évalué", "évaluée", "évaluation"],
          ["bulletin"]
        ],
        blockedPhrases: ["attention", "ne faites pas d'erreurs", "pas d'erreurs"]
      },
      {
        id: "controle",
        label: "Consigne 2",
        original: "Vous avez un contrôle vendredi. Ceux qui n'ont pas travaillé vont le sentir.",
        hint: "Conservez la date du contrôle, mais retirez la menace adressée aux élèves.",
        neutralExample: "Vous aurez un contrôle vendredi. Pensez à vous y préparer et à revoir les points travaillés ensemble.",
        requiredGroups: [
          ["contrôle", "controle", "évaluation", "épreuve"],
          ["vendredi"]
        ],
        blockedPhrases: ["vont le sentir", "ceux qui n'ont pas travaillé", "ceux qui n ont pas travaillé"]
      },
      {
        id: "copies",
        label: "Consigne 3",
        original: "Je rends les copies. Certains d'entre vous ont beaucoup à améliorer, c'est décevant.",
        hint: "Gardez l'annonce de restitution des copies, mais retirez le jugement global et dévalorisant.",
        neutralExample: "Je vous rends les copies. Nous regarderons ensemble les points à renforcer pour poursuivre la progression.",
        requiredGroups: [
          ["copies", "copie", "travaux", "évaluation"],
          ["améliorer", "ameliorer", "renforcer", "progresser", "progression"]
        ],
        blockedPhrases: ["décevant", "decevant", "beaucoup à améliorer", "beaucoup a améliorer", "c'est décevant", "c est décevant"]
      },
      {
        id: "temps",
        label: "Consigne 4",
        original: "Dépêchez-vous, vous avez 5 minutes pour finir, après je ramasse tout.",
        hint: "Conservez l'information sur le temps restant et le ramassage, mais retirez l'urgence brutale.",
        neutralExample: "Il vous reste 5 minutes pour terminer. Je ramasserai ensuite les feuilles, pensez à finaliser l'essentiel.",
        requiredGroups: [
          ["5 minutes", "cinq minutes", "5 min"],
          ["ramasse", "ramasserai", "recueillerai", "récupérerai", "récupere", "feuilles"]
        ],
        blockedPhrases: ["dépêchez-vous", "depechez-vous", "dépêchez vous", "depechez vous"]
      }
    ],
    facilitatorGuide: {
      launch: [
        "Lisez une consigne à risque à voix haute et demandez ce qu'elle fait ressentir avant même de parler de correction.",
        "Rappelez que l'objectif est de développer une compétence de formulation, pas de culpabiliser les formulations d'origine."
      ],
      vigilance: [
        "Certains apprenants enlèvent toute l'information utile : date, note ou temps. Rappelez que le sens pédagogique doit être conservé.",
        "D'autres remplacent la pression par un message trop flou : la consigne doit rester exploitable par l'élève."
      ],
      helps: [
        "Que gardez-vous de la consigne originale ? Qu'est-ce qui peut être retiré ou déplacé ?",
        "Votre formulation donne-t-elle une information claire sans ajouter de menace implicite ?"
      ],
      regulation: [
        "Si le groupe avance vite, proposez une cinquième consigne plus délicate mêlant mauvaise note et comparaison sociale.",
        "Si le groupe bloque, analysez collectivement la consigne 1 avant de relancer le travail individuel."
      ],
      closureSignals: [
        "Faites émerger trois signaux linguistiques à surveiller : injonction de performance, formulation menaçante, comparaison sociale.",
        "Invitez chacun à choisir une phrase d'appui qu'il veut réellement tester en classe."
      ]
    },
    resources: [
      {
        label: "Fiche des 4 consignes à risque",
        usage: "Support central de réécriture, utilisable sur la plateforme ou en version papier."
      },
      {
        label: "Article scientifique",
        usage: "Prokofieva et al. (2017), en lecture d'appui pour comprendre le stress de l'évaluation."
      },
      {
        label: "Grille de correction formateur",
        usage: "Trois critères : sens conservé, ton neutre, absence de menace implicite."
      },
      {
        label: "Plateforme de soumission",
        usage: "Recueillir les reformulations et faciliter un retour individualisé."
      }
    ],
    reflectionQuestions: [
      "Quelle consigne vous a été la plus difficile à reformuler, et pourquoi ?",
      "Dans quelle situation réelle de votre pratique utilisez-vous encore des formulations voisines ?"
    ],
    reference: {
      href: "https://doi.org/10.4000/rechercheseducations.4657",
      label: "Prokofieva et al. (2017) - Stress de l'évaluation scolaire"
    }
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
          duration: "1 h 30",
          activities: axe2Objective3Activities
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
  theoryResourceTypes: ["Vidéo", "Article", "Article PDF", "Article scientifique", "Site web", "Podcast"],
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
        type: "Article scientifique",
        title: "Stress de l'évaluation scolaire : un nouveau regard sur un problème ancien",
        description: "Référence centrale pour comprendre pourquoi certaines annonces évaluatives agissent comme des stresseurs contextuels prévisibles.",
        meta: "Prokofieva, Brandt-Pomares, Velay, Hérold et Kostromina (2017).",
        href: "https://doi.org/10.4000/rechercheseducations.4657",
        actionLabel: "Consulter la référence"
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
