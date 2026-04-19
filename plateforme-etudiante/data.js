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
          type: "multi-select",
          level: "Niveau 1",
          title: "Cadrer son regard avant d'analyser",
          description: "Sélectionnez les trois repères qui cadrent correctement cette activité de sensibilisation.",
          cue: "Avant de réécrire, on observe ce qui ajoute de la pression au message.",
          prompt: "Cochez uniquement les trois affirmations justes pour lancer le parcours.",
          options: [
            {
              id: "observe",
              label: "J'observe d'abord l'effet émotionnel produit par la consigne."
            },
            {
              id: "keep",
              label: "Je garde en tête l'information utile que l'élève doit recevoir."
            },
            {
              id: "rewrite-now",
              label: "Je réécris immédiatement chaque phrase avant de l'analyser."
            },
            {
              id: "pressure",
              label: "Je cherche les mots qui ajoutent une menace, une urgence ou un jugement."
            },
            {
              id: "blame",
              label: "Je juge d'abord la personnalité de l'enseignant qui parle."
            }
          ],
          correctIds: ["observe", "keep", "pressure"],
          successMessage: "Le cadre d'observation est posé : vous pouvez maintenant repérer la pression dans des consignes concrètes.",
          retryMessage: "Revenez au but de l'activité : observer, conserver l'information utile et repérer la pression ajoutée."
        },
        {
          id: "obj3-a1-t2",
          type: "multi-select",
          level: "Niveau 1",
          title: "Repérer les annonces qui ajoutent de la pression",
          description: "Lisez huit consignes de classe et cochez uniquement celles qui ajoutent une menace, une injonction ou un jugement évitable.",
          cue: "Toutes les phrases parlent d'école, mais seules certaines ajoutent une pression inutile.",
          prompt: "Sélectionnez les quatre formulations qui risquent d'augmenter la tension chez un élève anxieux.",
          options: [
            {
              id: "n1",
              label: "Cette activité est notée et comptera pour votre bulletin."
            },
            {
              id: "n2",
              label: "Vous aurez un contrôle vendredi sur le chapitre 3."
            },
            {
              id: "n3",
              label: "Il vous reste 5 minutes pour terminer l'essentiel de l'exercice."
            },
            {
              id: "n4",
              label: "Je vous rends les copies et nous regarderons les points à renforcer."
            },
            {
              id: "r1",
              label: "Attention, c'est noté et ça compte pour votre bulletin."
            },
            {
              id: "r2",
              label: "Ceux qui n'ont pas travaillé vont le sentir."
            },
            {
              id: "r3",
              label: "Dépêchez-vous, après je ramasse tout."
            },
            {
              id: "r4",
              label: "Certains d'entre vous ont beaucoup à améliorer, c'est décevant."
            }
          ],
          correctIds: ["r1", "r2", "r3", "r4"],
          successMessage: "Vous avez isolé les formulations qui ajoutent une pression évitable.",
          retryMessage: "Revoyez les phrases : certaines informent seulement, tandis que d'autres ajoutent une alerte, une menace ou un jugement."
        },
        {
          id: "obj3-a1-t3",
          type: "segment-select",
          level: "Niveau 2",
          title: "Surligner les mots de pression",
          description: "Dans chaque phrase, cliquez uniquement sur les segments qui ajoutent de la pression au-delà de l'information utile.",
          cue: "Ne cliquez pas sur ce qui informe simplement l'élève ; ciblez ce qui menace, presse ou juge.",
          prompt: "Sélectionnez uniquement les segments qui augmentent la pression émotionnelle.",
          cases: [
            {
              id: "case1",
              label: "Phrase 1",
              description: "Annonce d'une activité notée",
              segments: [
                { id: "c1s1", text: "Attention," },
                { id: "c1s2", text: "c'est noté" },
                { id: "c1s3", text: "et cela comptera pour votre bulletin." },
                { id: "c1s4", text: "Ne faites pas d'erreurs." }
              ],
              correctIds: ["c1s1", "c1s4"]
            },
            {
              id: "case2",
              label: "Phrase 2",
              description: "Annonce d'un contrôle",
              segments: [
                { id: "c2s1", text: "Vous aurez un contrôle vendredi." },
                { id: "c2s2", text: "Ceux qui n'ont pas travaillé" },
                { id: "c2s3", text: "vont le sentir." }
              ],
              correctIds: ["c2s2", "c2s3"]
            }
          ],
          successMessage: "Vous distinguez mieux ce qui informe de ce qui met sous pression.",
          retryMessage: "Ciblez seulement les segments qui ajoutent une alerte, un jugement ou une menace ; laissez l'information utile intacte."
        },
        {
          id: "obj3-a1-t4",
          type: "categorize",
          level: "Niveau 2",
          title: "Classer les stresseurs par famille",
          description: "Associez chaque formulation stressante à sa famille dominante pour comprendre le mécanisme en jeu.",
          cue: "Cherchez la source principale de pression : note, temps, menace implicite ou comparaison sociale.",
          prompt: "Attribuez à chaque formulation la bonne famille de stresseur.",
          categories: [
            { id: "evaluation", label: "Pression évaluative" },
            { id: "temps", label: "Urgence temporelle" },
            { id: "menace", label: "Menace implicite" },
            { id: "comparaison", label: "Comparaison sociale" }
          ],
          items: [
            {
              id: "cat1",
              label: "Ça comptera pour votre bulletin.",
              correctCategory: "evaluation"
            },
            {
              id: "cat2",
              label: "Dépêchez-vous.",
              correctCategory: "temps"
            },
            {
              id: "cat3",
              label: "Ceux qui n'ont pas travaillé vont le sentir.",
              correctCategory: "menace"
            },
            {
              id: "cat4",
              label: "Les autres ont déjà presque fini.",
              correctCategory: "comparaison"
            },
            {
              id: "cat5",
              label: "C'est noté.",
              correctCategory: "evaluation"
            },
            {
              id: "cat6",
              label: "Tout le monde vous regarde déjà.",
              correctCategory: "comparaison"
            }
          ],
          successMessage: "Les grandes familles de stresseurs sont maintenant repérées.",
          retryMessage: "Reprenez la logique dominante de chaque phrase : évaluer, presser, menacer ou comparer."
        },
        {
          id: "obj3-a1-t5",
          type: "bucket-sort",
          level: "Niveau 3",
          title: "Isoler le noyau pédagogique utile",
          description: "Répartissez chaque fragment dans la bonne colonne : information utile à conserver ou pression ajoutée à alléger.",
          cue: "Gardez seulement ce dont l'élève a objectivement besoin pour agir dans la tâche.",
          prompt: "Classez chaque fragment dans la bonne colonne.",
          buckets: [
            { id: "utile", label: "Information utile" },
            { id: "pression", label: "Pression ajoutée" }
          ],
          items: [
            {
              id: "bucket1",
              label: "contrôle vendredi",
              correctBucket: "utile"
            },
            {
              id: "bucket2",
              label: "activité notée",
              correctBucket: "utile"
            },
            {
              id: "bucket3",
              label: "5 minutes restantes",
              correctBucket: "utile"
            },
            {
              id: "bucket4",
              label: "je ramasse ensuite les feuilles",
              correctBucket: "utile"
            },
            {
              id: "bucket5",
              label: "attention",
              correctBucket: "pression"
            },
            {
              id: "bucket6",
              label: "ne faites pas d'erreurs",
              correctBucket: "pression"
            },
            {
              id: "bucket7",
              label: "vont le sentir",
              correctBucket: "pression"
            },
            {
              id: "bucket8",
              label: "c'est décevant",
              correctBucket: "pression"
            }
          ],
          successMessage: "Vous savez maintenant séparer le cadre utile du surplus anxiogène.",
          retryMessage: "Revenez à la question centrale : qu'est-ce que l'élève doit vraiment savoir pour agir ?"
        },
        {
          id: "obj3-a1-t6",
          type: "short-write",
          level: "Niveau 3",
          title: "Justifier un diagnostic de stress",
          description: "Expliquez pourquoi une tournure précise peut augmenter la tension émotionnelle chez certains élèves.",
          cue: "Appuyez-vous sur l'idée de menace, de jugement ou de sanction implicite.",
          prompt: "Expliquez en quelques phrases pourquoi la formulation « Ceux qui n'ont pas travaillé vont le sentir » peut augmenter la tension émotionnelle.",
          placeholder: "Décrivez ce que cette phrase laisse entendre pour l'élève et pourquoi cela peut être vécu comme une menace.",
          minLength: 55,
          requiredGroups: [["menace", "pression", "sanction", "peur", "stress"]],
          successMessage: "Votre justification rend explicite le mécanisme de pression émotionnelle.",
          retryMessage: "Votre réponse doit montrer en quoi cette formulation peut être vécue comme une menace ou une pression."
        },
        {
          id: "obj3-a1-t7",
          type: "compare",
          level: "Niveau 4",
          title: "Comparer deux versions d'une même annonce",
          description: "Choisissez, pour chaque situation, la version la plus neutre puis expliquez ce qui change dans le ressenti possible.",
          cue: "La meilleure version informe clairement sans menace, sans urgence brutale et sans jugement.",
          cases: [
            {
              id: "cmp1",
              prompt: "Quelle version annonce un contrôle sans ajouter de pression inutile ?",
              options: [
                {
                  id: "a",
                  label: "Vendredi, vous avez un contrôle. Ceux qui n'ont pas travaillé vont le sentir."
                },
                {
                  id: "b",
                  label: "Vendredi, vous aurez un contrôle. Vous pouvez revoir les points essentiels avant la séance."
                }
              ],
              correctId: "b",
              noteLabel: "Expliquez ce qui rend cette version plus contenante.",
              notePlaceholder: "Ex. elle informe l'élève sans menace ni projection négative."
            },
            {
              id: "cmp2",
              prompt: "Quelle version annonce le temps restant de manière plus sécurisante ?",
              options: [
                {
                  id: "a",
                  label: "Dépêchez-vous, vous avez 5 minutes pour finir."
                },
                {
                  id: "b",
                  label: "Il vous reste 5 minutes pour terminer l'essentiel de votre travail."
                }
              ],
              correctId: "b",
              noteLabel: "Expliquez ce qui change pour l'élève dans cette formulation.",
              notePlaceholder: "Ex. le cadre temporel reste clair, mais sans injonction brutale."
            }
          ],
          minNoteLength: 28,
          successMessage: "Vous distinguez maintenant plus finement une formulation informative d'une formulation stressante.",
          retryMessage: "Choisissez la version la plus neutre et justifiez ce choix en montrant ce qui apaise la consigne."
        },
        {
          id: "obj3-a1-t8",
          type: "triple-note",
          level: "Niveau 4",
          title: "Formaliser trois repères de vigilance",
          description: "Complétez trois repères concrets que vous pourrez réutiliser immédiatement dans les activités suivantes.",
          cue: "Cette liste doit devenir votre filtre rapide avant une note, un contrôle ou une reprise de copies.",
          fields: [
            {
              id: "mot",
              label: "1. Un mot à surveiller",
              placeholder: "Ex. attention, dépêchez-vous..."
            },
            {
              id: "tournure",
              label: "2. Une tournure à reformuler",
              placeholder: "Ex. ne faites pas d'erreurs, vont le sentir..."
            },
            {
              id: "reflexe",
              label: "3. Un réflexe professionnel à adopter",
              placeholder: "Ex. annoncer d'abord l'information utile, puis proposer une marche à suivre."
            }
          ],
          minLength: 8,
          successMessage: "Vos trois repères de vigilance sont prêts pour la suite du parcours.",
          retryMessage: "Complétez les trois champs avec des repères concrets et directement réutilisables en classe."
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
        },
        {
          label: "Repère de validation",
          text: "La plateforme vérifie que vous conservez le cadre utile (date, contrôle, note, temps) tout en retirant les formulations stressantes."
        }
      ],
      reflectionLabel: "Déclic de l'atelier",
      reflectionPrompt: "Quelle transformation vous a le plus aidé à garder le sens sans maintenir la pression ?",
      reflectionPlaceholder: "Ex. remplacer l'injonction de performance par une information claire sur l'attendu...",
      completionMessage: "La mécanique de transformation est en place. Vous pouvez maintenant observer vos propres automatismes de langage.",
      tasks: [
        {
          id: "obj3-a2-t1",
          type: "bucket-sort",
          level: "Niveau 1",
          title: "Repérer l'information non négociable",
          description: "Classez chaque fragment dans la bonne colonne : à conserver tel quel ou à alléger / reformuler.",
          cue: "L'objectif est de garder le cadre pédagogique, pas la pression qui l'enveloppe.",
          prompt: "Triez les fragments pour isoler le noyau non négociable de la consigne.",
          buckets: [
            { id: "keep", label: "À conserver" },
            { id: "rework", label: "À alléger ou reformuler" }
          ],
          items: [
            {
              id: "keep1",
              label: "activité notée",
              correctBucket: "keep"
            },
            {
              id: "keep2",
              label: "contrôle vendredi",
              correctBucket: "keep"
            },
            {
              id: "keep3",
              label: "5 minutes pour terminer",
              correctBucket: "keep"
            },
            {
              id: "keep4",
              label: "je ramasserai les feuilles ensuite",
              correctBucket: "keep"
            },
            {
              id: "keep5",
              label: "points à renforcer",
              correctBucket: "keep"
            },
            {
              id: "rew1",
              label: "attention",
              correctBucket: "rework"
            },
            {
              id: "rew2",
              label: "ne faites pas d'erreurs",
              correctBucket: "rework"
            },
            {
              id: "rew3",
              label: "vont le sentir",
              correctBucket: "rework"
            },
            {
              id: "rew4",
              label: "dépêchez-vous",
              correctBucket: "rework"
            },
            {
              id: "rew5",
              label: "c'est décevant",
              correctBucket: "rework"
            }
          ],
          successMessage: "Vous isolez correctement ce qu'il faut conserver dans la consigne.",
          retryMessage: "Revenez à l'objectif : garder le cadre utile, puis reformuler ce qui ajoute une pression évitable."
        },
        {
          id: "obj3-a2-t2",
          type: "mapping",
          level: "Niveau 2",
          title: "Associer une tournure stressante à une reformulation de départ",
          description: "Pour chaque formulation à risque, choisissez la reformulation de départ la plus utile pour baisser la pression.",
          cue: "Cherchez la version qui garde une information ou une action possible, sans menace ni injonction brutale.",
          prompt: "Associez chaque tournure stressante à la reformulation la plus soutenante.",
          options: [
            {
              id: "m1",
              label: "Prenez le temps de relire avant de rendre votre travail."
            },
            {
              id: "m2",
              label: "Il vous reste 5 minutes pour terminer l'essentiel."
            },
            {
              id: "m3",
              label: "Vous aurez un contrôle vendredi ; vous pouvez revoir les points importants avant la séance."
            },
            {
              id: "m4",
              label: "Nous regarderons ensemble les points à renforcer pour la suite."
            }
          ],
          items: [
            {
              id: "map1",
              label: "Ne faites pas d'erreurs.",
              correctOption: "m1"
            },
            {
              id: "map2",
              label: "Dépêchez-vous.",
              correctOption: "m2"
            },
            {
              id: "map3",
              label: "Ceux qui n'ont pas travaillé vont le sentir.",
              correctOption: "m3"
            },
            {
              id: "map4",
              label: "C'est décevant.",
              correctOption: "m4"
            }
          ],
          successMessage: "Vous commencez à remplacer une pression brute par une information ou une aide concrète.",
          retryMessage: "Pour chaque phrase, choisissez la reformulation qui donne un appui à l'élève au lieu de l'intimider."
        },
        {
          id: "obj3-a2-t3",
          type: "rewrite",
          level: "Niveau 2",
          title: "Assouplir l'injonction de performance",
          description: "Réécrivez une consigne courte pour retirer l'injonction de performance tout en gardant l'information sur la notation.",
          cue: "Remplacez l'ordre centré sur l'erreur par une indication de démarche plus contenante.",
          prompt: "Réécrivez cette consigne avec un ton neutre et informatif.",
          original: "Cette activité est notée. Ne faites pas d'erreurs.",
          placeholder: "Réécrivez ici la consigne de manière plus contenante.",
          minLength: 18,
          requiredGroups: [["noté", "notée", "évalué", "évaluée", "évaluation"]],
          blockedPhrases: ["ne faites pas d'erreurs", "pas d'erreurs"],
          neutralExample: "Cette activité est notée. Prenez le temps de relire avant de rendre votre travail.",
          successMessage: "La consigne garde l'information de notation sans injonction de performance.",
          retryMessage: "Conservez l'idée d'activité notée, mais retirez toute formulation centrée sur la faute parfaite."
        },
        {
          id: "obj3-a2-t4",
          type: "rewrite",
          level: "Niveau 3",
          title: "Calmer la pression temporelle",
          description: "Transformez une annonce pressante du temps en rappel clair, prévisible et moins brutal.",
          cue: "Le cadre temporel doit rester présent, mais sans injonction abrupte.",
          prompt: "Réécrivez cette consigne de temps avec un ton plus sécurisant.",
          original: "Dépêchez-vous, vous avez 5 minutes pour finir.",
          placeholder: "Formulez une annonce du temps restant sans brusquer l'élève.",
          minLength: 18,
          requiredGroups: [["5 minutes", "cinq minutes", "5 min"]],
          blockedPhrases: ["dépêchez-vous", "depechez-vous", "dépêchez vous", "depechez vous"],
          neutralExample: "Il vous reste 5 minutes pour terminer l'essentiel de votre travail.",
          successMessage: "Le temps restant est annoncé clairement, sans injonction brutale.",
          retryMessage: "Gardez le repère temporel, mais retirez la formule qui met immédiatement les élèves sous pression."
        },
        {
          id: "obj3-a2-t5",
          type: "rewrite",
          level: "Niveau 3",
          title: "Réécrire une annonce de contrôle",
          description: "Reformulez une annonce d'évaluation en gardant la date et le contrôle, sans menace adressée aux élèves.",
          cue: "Cherchez un ton factuel, stable et prévisible.",
          prompt: "Réécrivez cette annonce de contrôle.",
          original: "Vous avez un contrôle vendredi. Ceux qui n'ont pas travaillé vont le sentir.",
          placeholder: "Conservez la date et le contrôle, puis reformulez la seconde partie.",
          minLength: 20,
          requiredGroups: [["contrôle", "controle", "évaluation", "épreuve"], ["vendredi"]],
          blockedPhrases: ["vont le sentir", "ceux qui n'ont pas travaillé", "ceux qui n ont pas travaillé"],
          neutralExample: "Vous aurez un contrôle vendredi. Vous pouvez revoir les points essentiels avant la séance.",
          successMessage: "L'annonce du contrôle reste claire, mais sans menace implicite.",
          retryMessage: "Gardez la date et le contrôle, puis remplacez la projection menaçante par une indication utile."
        },
        {
          id: "obj3-a2-t6",
          type: "rewrite",
          level: "Niveau 4",
          title: "Réécrire un retour sur copies",
          description: "Travaillez une formulation sensible au moment de rendre des copies, en retirant les jugements dévalorisants.",
          cue: "Parlez du travail et des pistes de suite, pas de la valeur des élèves.",
          prompt: "Réécrivez ce retour sur copies.",
          original: "Je rends les copies. Certains d'entre vous ont beaucoup à améliorer, c'est décevant.",
          placeholder: "Transformez cette annonce en retour clair et soutenant.",
          minLength: 22,
          requiredGroups: [["copies", "copie", "travaux"], ["améliorer", "ameliorer", "renforcer", "progression", "progresser"]],
          blockedPhrases: ["décevant", "decevant", "c'est décevant", "c est décevant"],
          neutralExample: "Je vous rends les copies. Nous regarderons ensemble les points à renforcer pour la suite.",
          successMessage: "Le retour parle du travail à poursuivre plutôt que de juger les élèves.",
          retryMessage: "Conservez l'idée de restitution des copies, mais retirez le jugement global et dévalorisant."
        },
        {
          id: "obj3-a2-t7",
          type: "rewrite",
          level: "Niveau 5",
          title: "Boucler une consigne hybride en autonomie",
          description: "Terminez par une consigne qui mélange note, délai et pression sociale : à vous de tout rééquilibrer dans une seule reformulation.",
          cue: "C'est votre répétition générale avant le studio final.",
          prompt: "Réécrivez cette consigne hybride avec un ton neutre et complet.",
          original: "Vendredi, le contrôle est noté. Les autres sont déjà prêts, alors ne vous laissez pas déborder au dernier moment.",
          placeholder: "Conservez la date et le fait que le contrôle est noté, sans comparaison ni pression sociale.",
          minLength: 24,
          requiredGroups: [["vendredi"], ["contrôle", "controle", "évaluation"], ["noté", "notée", "évalué", "évaluée"]],
          blockedPhrases: ["les autres sont déjà prêts", "les autres sont deja prets", "ne vous laissez pas déborder", "ne vous laissez pas deborder"],
          neutralExample: "Vendredi, vous aurez un contrôle noté. Vous pouvez vous appuyer sur les points travaillés en classe pour vous préparer sereinement.",
          successMessage: "Vous tenez maintenant une reformulation complète et transférable à la tâche finale.",
          retryMessage: "Gardez la date et le cadre évaluatif, puis retirez la comparaison et la pression sociale."
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
