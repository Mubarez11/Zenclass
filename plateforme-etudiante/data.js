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

const axe1Objective2Activities = [
  {
    number: 1,
    title: "Présentation + prise de notes guidée",
    duration: "20 min",
    instruction:
      "Comprendre les effets du stress sur les émotions, les apprentissages et le bien-être (anxiété, motivation, performance).",
    feedbacks: [
      "Diaporama structuré, lecture scientifique et fiche de prise de notes guidée.",
      "La fiche de prise de notes est proposée comme support facultatif."
    ],
    contentSections: [
      {
        title: "Modalité et but",
        body:
          "<p><strong>Modalité :</strong> Distance</p>" +
          "<p><strong>But :</strong> Comprendre les effets du stress sur les émotions, les apprentissages et le bien-être (anxiété, motivation, performance)</p>"
      },
      {
        title: "Ressources",
        body:
          "<ul class='activity-feedback-list'>" +
            "<li>Diaporama structuré <a href='zenclass_axe1_tache2/materiel_role_des_emotions/presentation_role_emotions.html' target='_blank' rel='noopener noreferrer'>presentation_role_emotions.html</a></li>" +
            "<li>Lecture de <a href='https://link.springer.com/article/10.1186/s40359-025-03041-z' target='_blank' rel='noopener noreferrer'>Benítez-Agudelo et al. (2025)</a></li>" +
            "<li>Fiche de prise de notes guidée <a href='zenclass_axe1_tache2/materiel_role_des_emotions/prisedenote_role_des_emotions_dans_les_apprentissages.md' target='_blank' rel='noopener noreferrer'>prisedenote_role_des_emotions_dans_les_apprentissages.md</a></li>" +
          "</ul>"
      },
      {
        title: "Consignes",
        body:
          "<p>Nous vous proposons cette feuille facultative pour la prise de note. Vous pouvez la télécharger en cliquant sur le lien suivant: <a href='zenclass_axe1_tache2/materiel_role_des_emotions/prisedenote_role_des_emotions_dans_les_apprentissages.md' target='_blank' rel='noopener noreferrer'>[lien]</a>.</p>"
      }
    ]
  },
  {
    number: 2,
    title: "Question ouverte écrite",
    duration: "10 min",
    instruction:
      "Identifier ses représentations du lien entre émotions et apprentissages.",
    feedbacks: [
      "Rédigez deux situations scolaires plausibles.",
      "Longueur attendue : environ 8 à 12 lignes au total."
    ],
    contentSections: [
      {
        title: "Modalité et but",
        body:
          "<p><strong>Modalité :</strong> Distance</p>" +
          "<p><strong>But :</strong> Identifier ses représentations du lien entre émotions et apprentissages</p>"
      },
      {
        title: "Consignes",
        body:
          "<p>Dans ce forum, vous allez réfléchir au rôle des émotions dans la vie scolaire.</p>" +
          "<p>Imaginez deux situations scolaires différentes pouvant susciter une émotion chez un élève. Pour chacune, rédigez un court paragraphe dans lequel vous :</p>" +
          "<ul class='activity-feedback-list'>" +
            "<li>présentez la situation ;</li>" +
            "<li>nommez au moins une émotion possible ;</li>" +
            "<li>décrivez l'effet de cette émotion sur le comportement, le bien-être ou les apprentissages de l'élève.</li>" +
          "</ul>" +
          "<p>Essayez d'être concret. Appuyez-vous sur des situations plausibles de classe.</p>" +
          "<p>Vous pouvez choisir des émotions dites négatives (stress, peur, colère, honte, frustration) ou positives (joie, fierté, soulagement, enthousiasme).</p>" +
          "<p>Longueur attendue : environ 8 à 12 lignes au total.</p>"
      }
    ]
  },
  {
    number: 3,
    title: "Discussion entre pairs",
    duration: "30 min",
    instruction:
      "Construire une compréhension partagée du rôle des émotions dans les apprentissages.",
    feedbacks: [
      "Comparez vos réponses individuelles postée sur le forum.",
      "Discutez des effets possibles de différentes émotions sur les apprentissages et le bien-être des élèves."
    ],
    contentSections: [
      {
        title: "Modalité et but",
        body:
          "<p><strong>Modalité :</strong> Présentiel</p>" +
          "<p><strong>But :</strong> Construire une compréhension partagée du rôle des émotions dans les apprentissages</p>"
      },
      {
        title: "Consigne",
        body:
          "<p>En binômes, échangez à partir de vos réponses individuelles postée sur le forum.</p>" +
          "<p>L'objectif est de comparer vos exemples, d'identifier des points communs et de discuter des effets possibles de différentes émotions sur les apprentissages et le bien-être des élèves.</p>"
      },
      {
        title: "Déroulement",
        body:
          "<p><strong>1. Binômes fixes (5 min)</strong></p>" +
          "<ul class='activity-feedback-list'>" +
            "<li>Lecture mutuelle des productions.</li>" +
            "<li>Repérage des émotions citées.</li>" +
          "</ul>" +
          "<p><strong>2. Discussion structurée (20 min)</strong></p>" +
          "<p><strong>3. Trace collective (5 min)</strong></p>" +
          "<ul class='activity-feedback-list'>" +
            "<li>Premières hypothèses sur leurs effets différenciés</li>" +
          "</ul>"
      },
      {
        title: "Questions déclencheuses possibles",
        body:
          "<ul class='activity-feedback-list'>" +
            "<li>Quelles émotions reviennent le plus souvent dans vos exemples ?</li>" +
            "<li>Dans quelles situations ces émotions semblent-elles soutenir les apprentissages ?</li>" +
            "<li>Dans quelles situations les freinent-elles ?</li>" +
            "<li>Le stress a-t-il toujours un effet négatif ?</li>" +
            "<li>Comment un enseignant peut-il repérer et prendre en compte ces émotions en classe ?</li>" +
          "</ul>"
      }
    ]
  },
  {
    number: 4,
    title: "synthèse et debriefing de l'axe 1",
    duration: "40 min",
    instruction:
      "concevoir une synthèse commune de la séquence.",
    feedbacks: [
      "Recueillez les réponses en grand groupe.",
      "Présentez une synthèse structurée autour de 3 messages clés."
    ],
    contentSections: [
      {
        title: "Modalité et but",
        body:
          "<p><strong>Modalité :</strong> Présentiel</p>" +
          "<p><strong>But :</strong> concevoir une synthèse commune de la séquence.</p>"
      },
      {
        title: "Retour en grand groupe (15 min)",
        body:
          "<p>L'enseignant poses les questions au tableau, une part une, en recueillant les réponses.</p>" +
          "<ul class='activity-feedback-list'>" +
            "<li>Quelles émotions ont été le plus souvent citées dans vos exemples ?</li>" +
            "<li>Dans quels cas les émotions soutiennent-elles les apprentissages ?</li>" +
            "<li>Dans quels cas les freinent-elles ?</li>" +
            "<li>Le stress est-il toujours négatif ? Pourquoi ?</li>" +
            "<li>Qu'est-ce qui, dans ces échanges, vous semble particulièrement important pour le rôle de l'enseignant ?</li>" +
          "</ul>"
      },
      {
        title: "Mise en ordre (10 min)",
        body:
          "<p>L'enseignant reformules, regroupe, et hiérarchises:</p>" +
          "<ul class='activity-feedback-list'>" +
            "<li>émotions → effets sur l'éducation</li>" +
            "<li>émotions → effets sur le bien-être</li>" +
          "</ul>"
      },
      {
        title: "Synthèse institutionnelle (15 min)",
        body:
          "<p>Présentation orale d'une synthèse structurée autour de 3 messages clés :</p>" +
          "<ul class='activity-feedback-list'>" +
            "<li>Le bien-être des élèves n'est pas secondaire à l'apprentissage mais une pertie cruciale de celle-ci.</li>" +
            "<li>Les émotions sont omniprésentes dans les apprentissages.</li>" +
            "<li>Elles ont des effets différenciés selon leur nature, leur intensité et leur durée.</li>" +
          "</ul>"
      }
    ]
  },
  {
    number: 5,
    title: "Retour réflexif",
    duration: "25 min",
    instruction:
      "Faire le lien avec sa pratique professionnelle.",
    feedbacks: [
      "Appuyez-vous sur la présentation, la lecture, les réflexions individuelles du forum et la discussion de groupe.",
      "Longueur attendue: 15 à 20 lignes."
    ],
    contentSections: [
      {
        title: "Modalité et but",
        body:
          "<p><strong>Modalité :</strong> Distance</p>" +
          "<p><strong>But :</strong> Faire le lien avec sa pratique professionnelle</p>"
      },
      {
        title: "Consignes",
        body:
          "<p>Dans ce forum, faite une retour reflexif sur le rôle des émotions en classe en utilisant la présentation, la lecture de Benítez-Agudelo et. al (2025), les réflexions individuelles du forum, ainsi que votre discussion de groupe.</p>" +
          "<p>Rédigez un court retour réflexif dans le forum à partir des points suivants :</p>" +
          "<ul class='activity-feedback-list'>" +
            "<li>ce que j'ai compris du rôle des émotions dans l'éducation ;</li>" +
            "<li>ce que j'ai compris plus précisément du rôle :</li>" +
            "<li>du stress ;</li>" +
            "<li>du soulagement ;</li>" +
            "<li>de la honte ;</li>" +
            "<li>de la fierté ;</li>" +
            "<li>ce que cela confirme dans ma pratique ;</li>" +
            "<li>ce que cela bouscule dans ma pratique ;</li>" +
            "<li>trois situations de classe dans lesquelles ces éléments me semblent particulièrement importants.</li>" +
          "</ul>" +
          "<p>Longueur attendue: 15 à 20 lignes.</p>"
      }
    ]
  }
];

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
    title: "Distinguer information utile et pression ajoutée",
    duration: "20 min",
    difficulty: "Fondations",
    taskCount: 8,
    instruction:
      "Commencez par détecter, sans encore réécrire, ce qui relève d'une information nécessaire et ce qui ajoute une pression évitable au message.",
    feedbacks: [
      "Une note, une date ou une durée peuvent être stressantes, mais ce sont parfois des informations indispensables : le problème pédagogique vient surtout du surplus de menace, de jugement ou d'urgence.",
      "Les ressources de l'axe 2 présentent la pression évaluative comme un stresseur scolaire majeur ; l'objectif est donc d'annoncer l'évaluation clairement sans l'intensifier par le langage.",
      "À chaque correction, vérifiez la même logique : information utile conservée, pression ajoutée repérée, justification explicite."
    ],
    learningPath: {
      subtitle: "Diagnostic guidé",
      outcome: "Être capable d'isoler la pression linguistique évitable sans supprimer l'information pédagogique nécessaire.",
      focusTags: ["information utile", "pression évaluative", "menace implicite", "comparaison sociale", "jugement"],
      progressLabel: "Parcours 8 tâches",
      supportCards: [
        {
          label: "Règle de tri",
          text: "Ne classez pas une phrase comme problématique parce qu'elle parle d'une note ou d'un temps : cherchez le surplus qui menace, juge, compare ou presse brutalement."
        },
        {
          label: "Ce qu'on conserve",
          text: "L'information pédagogique utile : date, consigne, critères, évaluation annoncée, temps disponible et action attendue."
        },
        {
          label: "Ce qu'on allège",
          text: "Les marqueurs qui augmentent l'enjeu perçu : alerte, sanction implicite, injonction de perfection, comparaison sociale ou jugement global."
        }
      ],
      reflectionLabel: "Trace de sortie",
      reflectionPrompt: "Quels trois signaux linguistiques précis voulez-vous surveiller avant une annonce évaluative ?",
      reflectionPlaceholder: "Ex. alerte inutile, menace implicite, comparaison sociale, jugement dévalorisant...",
      completionMessage: "Le diagnostic est posé : vous pouvez maintenant reformuler en conservant l'information utile et en retirant la pression ajoutée.",
      tasks: [
        {
          id: "obj3-a1-t1",
          type: "multi-select",
          level: "Niveau 1",
          title: "Installer la règle de tri",
          description: "Sélectionnez les trois repères qui rendent l'analyse moins subjective et moins ambiguë.",
          cue: "La bonne cible n'est pas la phrase la plus désagréable : c'est le surplus linguistique évitable.",
          prompt: "Cochez uniquement les trois repères qui doivent guider toute l'activité.",
          reviewAllOptions: true,
          source: "Logique scientifique : les ressources de l'axe 2 décrivent la pression évaluative comme un stresseur contextuel ; le travail de formulation consiste à réduire le surplus de menace sans effacer le cadre pédagogique.",
          options: [
            {
              id: "keep-info",
              label: "Je conserve l'information nécessaire : date, note, durée, tâche ou critère.",
              feedback: "Juste : retirer toute information évaluative rendrait la consigne floue. Les ressources insistent sur le fait que le cadre scolaire existe ; c'est la manière de l'annoncer qui peut augmenter ou réduire la pression."
            },
            {
              id: "spot-surplus",
              label: "Je repère les mots qui ajoutent menace, jugement, comparaison ou urgence brutale.",
              feedback: "Juste : ces marqueurs transforment une annonce en signal de danger social ou scolaire, ce qui peut accroître l'activation émotionnelle chez l'élève."
            },
            {
              id: "separate-context",
              label: "Je distingue le stresseur de contexte et la pression ajoutée par la formulation.",
              feedback: "Juste : une évaluation peut déjà être un stresseur, mais une phrase comme « attention » ou « vous allez le sentir » ajoute une menace évitable."
            },
            {
              id: "erase-evaluation",
              label: "Je supprime toute mention de note, de contrôle ou de temps restant.",
              feedback: "Faux : cela diminue peut-être l'impression de pression, mais l'élève perd une information utile pour agir et se préparer. Le bon geste est d'annoncer clairement sans menacer."
            },
            {
              id: "choose-feeling",
              label: "Je choisis surtout les phrases qui me paraissent personnellement les plus stressantes.",
              feedback: "Faux : ce critère est trop subjectif. L'activité demande d'identifier des indices linguistiques observables : menace, comparaison, jugement ou urgence brutale."
            }
          ],
          correctIds: ["keep-info", "spot-surplus", "separate-context"],
          successMessage: "Le cadre d'observation est posé : vous allez chercher le surplus de pression, pas supprimer le cadre scolaire.",
          retryMessage: "Reprenez la règle : conserver l'information utile, repérer les marqueurs de menace ou de jugement, éviter le tri purement subjectif."
        },
        {
          id: "obj3-a1-t2",
          type: "multi-select",
          level: "Niveau 1",
          title: "Repérer le surplus de pression évitable",
          description: "Lisez huit annonces de classe et cochez seulement celles qui ajoutent un marqueur explicite de menace, de jugement, de comparaison ou d'urgence brutale.",
          cue: "Certaines annonces restent potentiellement stressantes parce qu'elles parlent d'évaluation ou de temps, mais elles informent sans ajouter de menace.",
          prompt: "Sélectionnez les quatre formulations qui ajoutent une pression évitable au-delà de l'information utile.",
          reviewAllOptions: true,
          source: "Logique scientifique : Prokofieva et al. (2017) relient le stress scolaire à la pression évaluative ; la correction distingue donc l'annonce nécessaire de l'intensification par alerte, menace, jugement ou comparaison sociale.",
          options: [
            {
              id: "n1",
              label: "Cette activité est notée et comptera pour votre bulletin.",
              feedback: "À écarter : la phrase peut activer un enjeu évaluatif, mais elle donne une information nécessaire sans alerte ni sanction. Elle est à formuler calmement, pas à masquer."
            },
            {
              id: "n2",
              label: "Vous aurez un contrôle vendredi sur le chapitre 3.",
              feedback: "À écarter : l'annonce d'un contrôle peut être un stresseur, mais la formulation reste neutre et prévisible. Elle aide l'élève à anticiper."
            },
            {
              id: "n3",
              label: "Il vous reste 5 minutes pour terminer l'essentiel de l'exercice.",
              feedback: "À écarter : le temps restant est une contrainte réelle. La phrase donne une priorité d'action (« l'essentiel ») sans injonction brutale."
            },
            {
              id: "n4",
              label: "Je vous rends les copies et nous regarderons les points à renforcer.",
              feedback: "À écarter : l'annonce conserve le cadre d'apprentissage et oriente vers la progression, sans jugement global sur les élèves."
            },
            {
              id: "r1",
              label: "Attention, c'est noté, donc ne faites pas d'erreurs.",
              feedback: "À sélectionner : « attention » signale un danger et « ne faites pas d'erreurs » impose une perfection peu réaliste. La pression évaluative est renforcée par l'alerte et l'injonction."
            },
            {
              id: "r2",
              label: "Ceux qui n'ont pas travaillé vont le sentir.",
              feedback: "À sélectionner : la phrase annonce une conséquence négative ciblée. Elle transforme le contrôle en menace implicite plutôt qu'en information de préparation."
            },
            {
              id: "r3",
              label: "Dépêchez-vous, après je ramasse tout.",
              feedback: "À sélectionner : l'urgence est formulée comme une injonction brusque. Elle peut augmenter l'activation physiologique et réduire les ressources attentionnelles disponibles."
            },
            {
              id: "r4",
              label: "Les autres ont déjà presque terminé, vous devriez en être là.",
              feedback: "À sélectionner : la comparaison sociale met les élèves en compétition et peut renforcer la peur d'être en retard ou jugé devant le groupe."
            }
          ],
          correctIds: ["r1", "r2", "r3", "r4"],
          successMessage: "Vous avez isolé les formulations où le langage ajoute une pression évitable.",
          retryMessage: "Ne cochez pas seulement ce qui parle d'une note ou du temps : cochez les phrases qui ajoutent une menace, un jugement, une comparaison ou une injonction brutale."
        },
        {
          id: "obj3-a1-t3",
          type: "segment-select",
          level: "Niveau 2",
          title: "Surligner seulement le surplus anxiogène",
          description: "Dans chaque annonce, cliquez sur les segments à retirer ou à reformuler, sans toucher à l'information utile.",
          cue: "Une même phrase peut contenir une information à garder et un marqueur de pression à alléger.",
          prompt: "Sélectionnez uniquement les segments qui ajoutent une pression évitable.",
          reviewAllOptions: true,
          source: "Logique scientifique : les ressources distinguent le stresseur contextuel (évaluation, temps, exposition) et les formulations qui majorent la menace perçue.",
          cases: [
            {
              id: "case1",
              label: "Phrase 1",
              description: "Annonce d'une activité notée",
              segments: [
                { id: "c1s1", text: "Cette activité est notée", feedback: "À écarter : c'est l'information évaluative utile. Elle peut être sensible, mais elle doit être annoncée clairement." },
                { id: "c1s2", text: "et comptera pour votre bulletin.", feedback: "À écarter : c'est une conséquence institutionnelle à connaître. Le problème n'est pas l'information, mais son habillage menaçant." },
                { id: "c1s3", text: "Attention,", feedback: "À sélectionner : le mot fonctionne comme une alerte et augmente l'enjeu perçu avant même la consigne." },
                { id: "c1s4", text: "ne faites pas d'erreurs.", feedback: "À sélectionner : l'injonction de perfection centre l'élève sur l'échec possible, ce qui peut nourrir l'anxiété de performance." }
              ],
              correctIds: ["c1s3", "c1s4"]
            },
            {
              id: "case2",
              label: "Phrase 2",
              description: "Annonce d'un contrôle",
              segments: [
                { id: "c2s1", text: "Vous aurez un contrôle vendredi sur le chapitre 3.", feedback: "À écarter : la date et le contenu rendent l'évaluation prévisible, ce qui aide la préparation." },
                { id: "c2s2", text: "Ceux qui n'ont pas travaillé", feedback: "À sélectionner : le segment cible un groupe d'élèves et prépare une sanction implicite." },
                { id: "c2s3", text: "vont le sentir.", feedback: "À sélectionner : la conséquence reste menaçante et floue ; elle intensifie la pression au lieu d'indiquer comment se préparer." }
              ],
              correctIds: ["c2s2", "c2s3"]
            },
            {
              id: "case3",
              label: "Phrase 3",
              description: "Annonce du temps restant",
              segments: [
                { id: "c3s1", text: "Il vous reste 5 minutes", feedback: "À écarter : c'est une information temporelle utile si elle est donnée calmement." },
                { id: "c3s2", text: "pour terminer l'essentiel.", feedback: "À écarter : le segment aide à prioriser l'action et peut sécuriser la tâche." },
                { id: "c3s3", text: "Dépêchez-vous,", feedback: "À sélectionner : l'injonction accélère brutalement et peut faire monter la tension." },
                { id: "c3s4", text: "après je ramasse tout.", feedback: "À sélectionner : la formulation ferme la possibilité d'ajustement et transforme le ramassage en menace." }
              ],
              correctIds: ["c3s3", "c3s4"]
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
          description: "Associez chaque surplus de pression à sa famille dominante pour comprendre le mécanisme en jeu.",
          cue: "Cherchez le mécanisme principal : alerte évaluative, urgence, menace, comparaison ou jugement.",
          prompt: "Attribuez à chaque formulation la bonne famille de stresseur.",
          source: "Logique scientifique : le stress scolaire peut être renforcé par l'évaluation, l'urgence temporelle, l'exposition sociale et le jugement. La catégorie aide à choisir ensuite une reformulation ciblée.",
          categories: [
            { id: "evaluation-alert", label: "Alerte évaluative" },
            { id: "performance", label: "Injonction de performance" },
            { id: "temps", label: "Urgence temporelle brutale" },
            { id: "menace", label: "Menace implicite" },
            { id: "comparaison", label: "Comparaison sociale" },
            { id: "jugement", label: "Jugement dévalorisant" }
          ],
          items: [
            {
              id: "cat1",
              label: "Attention, c'est noté.",
              correctCategory: "evaluation-alert",
              feedback: "La pression vient surtout de l'alerte accolée à l'évaluation : la note n'est pas cachée, mais elle est dramatisée."
            },
            {
              id: "cat2",
              label: "Ne faites pas d'erreurs.",
              correctCategory: "performance",
              feedback: "La phrase exige une performance sans erreur et oriente l'attention vers l'échec possible."
            },
            {
              id: "cat3",
              label: "Dépêchez-vous.",
              correctCategory: "temps",
              feedback: "Le problème dominant est l'accélération imposée, qui peut renforcer la tension corporelle et cognitive."
            },
            {
              id: "cat4",
              label: "Ceux qui n'ont pas travaillé vont le sentir.",
              correctCategory: "menace",
              feedback: "La phrase annonce une conséquence négative sans préciser d'aide ou de critère : elle fonctionne comme menace implicite."
            },
            {
              id: "cat5",
              label: "Les autres ont déjà presque fini.",
              correctCategory: "comparaison",
              feedback: "La pression vient du regard social et de la comparaison avec les pairs."
            },
            {
              id: "cat6",
              label: "C'est décevant.",
              correctCategory: "jugement",
              feedback: "Le message ne décrit pas une action à améliorer : il porte un jugement global qui peut menacer l'estime de soi."
            }
          ],
          successMessage: "Les grandes familles de stresseurs sont maintenant repérées.",
          retryMessage: "Reprenez la logique dominante de chaque phrase : alerter autour d'une note, exiger la perfection, presser, menacer, comparer ou juger."
        },
        {
          id: "obj3-a1-t5",
          type: "bucket-sort",
          level: "Niveau 3",
          title: "Isoler le noyau pédagogique utile",
          description: "Répartissez chaque fragment dans la bonne colonne : information utile à conserver ou pression ajoutée à alléger.",
          cue: "Gardez seulement ce dont l'élève a objectivement besoin pour agir dans la tâche.",
          prompt: "Classez chaque fragment dans la bonne colonne.",
          source: "Logique scientifique : pour réduire un stresseur scolaire évitable, on garde le cadre qui permet d'agir et on retire les signaux qui augmentent la menace perçue.",
          buckets: [
            { id: "utile", label: "Information utile" },
            { id: "pression", label: "Pression ajoutée" }
          ],
          items: [
            {
              id: "bucket1",
              label: "contrôle vendredi sur le chapitre 3",
              correctBucket: "utile",
              feedback: "Utile : date et contenu aident l'élève à se préparer."
            },
            {
              id: "bucket2",
              label: "activité notée et coefficient annoncé",
              correctBucket: "utile",
              feedback: "Utile : l'enjeu évaluatif doit être connu pour que l'élève comprenne le cadre."
            },
            {
              id: "bucket3",
              label: "5 minutes pour finaliser l'essentiel",
              correctBucket: "utile",
              feedback: "Utile : le temps restant est associé à une priorité d'action, ce qui peut aider la régulation."
            },
            {
              id: "bucket4",
              label: "copies rendues avec points à renforcer",
              correctBucket: "utile",
              feedback: "Utile : la restitution est liée à une progression possible plutôt qu'à un jugement."
            },
            {
              id: "bucket5",
              label: "attention",
              correctBucket: "pression",
              feedback: "Pression ajoutée : l'alerte dramatise le message sans donner d'action supplémentaire."
            },
            {
              id: "bucket6",
              label: "ne faites pas d'erreurs",
              correctBucket: "pression",
              feedback: "Pression ajoutée : l'injonction de perfection focalise sur la faute et l'échec possible."
            },
            {
              id: "bucket7",
              label: "vont le sentir",
              correctBucket: "pression",
              feedback: "Pression ajoutée : la conséquence est présentée comme sanction implicite."
            },
            {
              id: "bucket8",
              label: "c'est décevant",
              correctBucket: "pression",
              feedback: "Pression ajoutée : c'est un jugement dévalorisant, pas une indication pour progresser."
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
          description: "Expliquez pourquoi deux formulations proches n'ont pas le même effet probable sur le ressenti de l'élève.",
          cue: "Votre justification doit distinguer l'information utile de l'alerte anxiogène.",
          prompt: "Expliquez pourquoi « Attention, c'est noté, donc ne faites pas d'erreurs » est plus à risque que « Cette activité est notée et comptera pour votre bulletin ». Appuyez-vous sur l'information utile et sur le surplus de pression.",
          placeholder: "Ex. Les deux phrases annoncent une évaluation, mais la première ajoute...",
          minLength: 120,
          requiredGroups: [
            ["noté", "notée", "évaluation", "evaluation", "bulletin"],
            ["information", "utile", "conserver", "garder", "cadre"],
            ["attention", "alerte", "erreur", "erreurs", "perfection"],
            ["menace", "pression", "stress", "peur", "anxiété", "anxiete"]
          ],
          requiredGroupLabels: [
            "mention de l'enjeu évaluatif",
            "distinction avec l'information utile à conserver",
            "repérage de l'alerte ou de l'injonction de perfection",
            "explication du mécanisme de pression ou de menace"
          ],
          source: "Logique scientifique : les ressources de l'axe 2 indiquent que la pression évaluative peut déclencher des réponses émotionnelles et physiologiques ; l'enjeu est donc de réduire les signaux de menace tout en gardant l'information scolaire.",
          successMessage: "Votre justification distingue clairement l'information évaluative utile du surplus qui augmente la menace perçue.",
          retryMessage: "Développez votre réponse : mentionnez l'évaluation utile, ce qu'il faut conserver, l'alerte ou l'injonction d'erreur, puis le mécanisme de pression."
        },
        {
          id: "obj3-a1-t7",
          type: "compare",
          level: "Niveau 4",
          title: "Comparer deux versions d'une même annonce",
          description: "Choisissez, pour chaque situation, la version la plus neutre puis expliquez ce qui change dans le ressenti possible.",
          cue: "La meilleure version informe clairement sans menace, sans urgence brutale et sans jugement.",
          source: "Logique scientifique : la formulation contenante réduit les signaux de menace tout en maintenant la prévisibilité, deux conditions importantes pour limiter la pression scolaire.",
          cases: [
            {
              id: "cmp1",
              prompt: "Quelle version annonce un contrôle sans ajouter de pression inutile ?",
              options: [
                {
                  id: "a",
                  label: "Vendredi, vous avez un contrôle. Ceux qui n'ont pas travaillé vont le sentir.",
                  feedback: "Version à écarter : elle conserve l'information utile mais ajoute une menace implicite dirigée vers certains élèves."
                },
                {
                  id: "b",
                  label: "Vendredi, vous aurez un contrôle. Vous pouvez revoir les points essentiels avant la séance.",
                  feedback: "Version attendue : elle garde la date et le contrôle, puis donne une action de préparation sans menace."
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
                  label: "Dépêchez-vous, vous avez 5 minutes pour finir.",
                  feedback: "Version à écarter : le temps est utile, mais « dépêchez-vous » ajoute une urgence corporelle et brutale."
                },
                {
                  id: "b",
                  label: "Il vous reste 5 minutes pour terminer l'essentiel de votre travail.",
                  feedback: "Version attendue : elle conserve le temps restant et indique une priorité, ce qui soutient l'action."
                }
              ],
              correctId: "b",
              noteLabel: "Expliquez ce qui change pour l'élève dans cette formulation.",
              notePlaceholder: "Ex. le cadre temporel reste clair, mais sans injonction brutale."
            },
            {
              id: "cmp3",
              prompt: "Quelle version rend les copies sans jugement dévalorisant ?",
              options: [
                {
                  id: "a",
                  label: "Je vous rends les copies. Certains résultats sont décevants.",
                  feedback: "Version à écarter : le jugement global peut être vécu comme une atteinte à la valeur de l'élève et n'indique pas comment progresser."
                },
                {
                  id: "b",
                  label: "Je vous rends les copies. Nous regarderons les points à renforcer pour progresser.",
                  feedback: "Version attendue : elle conserve la restitution et transforme le retour en appui d'apprentissage."
                }
              ],
              correctId: "b",
              noteLabel: "Expliquez pourquoi cette version soutient mieux l'apprentissage.",
              notePlaceholder: "Ex. elle parle de points à renforcer plutôt que de juger les élèves."
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
          description: "Complétez trois repères concrets que vous pourrez réutiliser avant une annonce évaluative.",
          cue: "Vos repères doivent être observables dans une phrase, pas seulement des intentions générales.",
          source: "Logique scientifique : les ressources de l'axe 2 invitent à agir sur des stresseurs contextuels évitables ; des repères linguistiques précis rendent cette prévention applicable en classe.",
          fields: [
            {
              id: "mot",
              label: "1. Un mot à surveiller",
              placeholder: "Ex. attention, dépêchez-vous...",
              feedback: "Repère attendu : un mot qui signale une alerte ou une urgence inutile."
            },
            {
              id: "tournure",
              label: "2. Une tournure à reformuler",
              placeholder: "Ex. ne faites pas d'erreurs, vont le sentir...",
              feedback: "Repère attendu : une tournure qui menace, exige la perfection, compare ou juge."
            },
            {
              id: "reflexe",
              label: "3. Un réflexe professionnel à adopter",
              placeholder: "Ex. annoncer d'abord l'information utile, puis proposer une marche à suivre.",
              feedback: "Repère attendu : un geste de formulation transférable, par exemple garder le cadre puis enlever l'alerte."
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
        label: "Article PDF",
        usage: "Version PDF de Prokofieva et al. (2017), en lecture d'appui pour comprendre le stress de l'évaluation.",
        href: "Stress de l’évaluation scolaire _ un nouveau regard sur un problème ancien.pdf",
        actionLabel: "Ouvrir le PDF"
      },
      {
        label: "Article scientifique",
        usage: "Version DOI de Prokofieva et al. (2017), pour citer ou consulter la référence académique.",
        href: "https://doi.org/10.4000/rechercheseducations.4657",
        actionLabel: "Lire l'article"
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

const axe3Objective2Activities = [
  {
    number: 1,
    moduleType: "observe",
    title: "Visionnage d'une vidéo simulée + repérage",
    duration: "15 min",
    difficulty: "Fondations",
    taskCount: 4,
    instruction:
      "Visionnez la scène une première fois sans interruption, puis une seconde fois en prenant des notes pour repérer le moment où une intervention devient nécessaire.",
    feedbacks: [
      "Repérez l'augmentation du bruit, les interruptions et l'agitation corporelle avant de conclure qu'une intervention s'impose.",
      "Cherchez le point de bascule : le moment où ne rien faire risque d'aggraver la situation.",
      "Avant d'agir, considérez la situation comme un moment où l'enseignant peut soutenir la régulation émotionnelle."
    ],
    observeTask: {
      subtitle: "Distance avant le présentiel",
      objective: "Repérer le moment où une intervention devient nécessaire et identifier les signes qu'une tension émotionnelle est en train de monter.",
      videoTitle: "Vidéo simulée de classe",
      videoDescription: "Le lien vidéo est un lien modèle à remplacer. En attendant, utilisez cette fiche pour guider votre observation et votre prise de notes.",
      videoNote: "Lien modèle à remplacer sur la plateforme.",
      watchSteps: [
        "Visionnez une première fois sans interruption pour saisir la dynamique globale de la scène.",
        "Visionnez une seconde fois avec prise de notes pour repérer le point précis où vous interviendriez.",
        "Justifiez votre choix à partir d'indices observables, sans partir d'une simple impression générale."
      ],
      cues: [
        "augmentation du bruit ou des interruptions",
        "agitation corporelle visible",
        "changement de ton ou accélération du rythme",
        "propagation de la tension à plusieurs élèves"
      ],
      prompts: [
        {
          id: "interventionMoment",
          label: "1. À quel moment précis j'interviendrais ?",
          placeholder: "Situez le moment choisi dans la scène et expliquez ce qui vous fait dire que l'intervention devient nécessaire."
        },
        {
          id: "justBefore",
          label: "2. Qu'ai-je vu juste avant ce moment ?",
          placeholder: "Relevez les indices observables qui montrent une montée de tension."
        },
        {
          id: "noInterventionRisk",
          label: "3. Que risque-t-il de se passer si personne n'intervient ?",
          placeholder: "Expliquez ce que l'absence d'intervention pourrait provoquer pour le groupe ou l'élève."
        },
        {
          id: "avoidResponse",
          label: "4. Quel type de réponse faudrait-il éviter ?",
          placeholder: "Précisez une réponse qui augmenterait la pression au lieu d'apaiser la situation."
        }
      ],
      tiksNote: "Repère TIK-S utile : avant d'agir, il s'agit d'abord de repérer la montée de tension et de considérer la situation comme un moment où l'enseignant peut soutenir la régulation émotionnelle.",
      supportResources: [
        {
          type: "PDF",
          label: "Fiche ressource - Tâche 8",
          description: "Repérez rapidement les 5 appuis TIK-S pour valider, apaiser et cadrer une situation de classe.",
          href: "1.PDF à part tout au début_Fiche_ressource_Tache8_Intervenir_pour_apaiser.pdf",
          actionLabel: "Ouvrir le PDF"
        },
        {
          type: "Article scientifique",
          label: "Bølstad et al. (2023)",
          description: "Référence scientifique mobilisée dans l'axe 3 pour relier intervention rapide, accompagnement émotionnel et climat de classe.",
          href: "https://doi.org/10.1016/j.mhp.2023.200273",
          actionLabel: "Consulter la référence"
        }
      ]
    }
  },
  {
    number: 2,
    moduleType: "checklist",
    title: "Checklist du point de bascule",
    duration: "10 min",
    difficulty: "Guidé",
    taskCount: 5,
    instruction:
      "Décidez si la situation observée a atteint le point de bascule, c'est-à-dire le moment où une intervention n'est plus seulement utile mais nécessaire.",
    feedbacks: [
      "Cochez chaque item en vous appuyant sur des faits observables dans la scène ou dans une situation réelle comparable.",
      "Si plusieurs items passent au vert, l'intervention devient pertinente : la question devient surtout comment intervenir sans augmenter la pression.",
      "L'objectif n'est pas de réagir vite à tout prix, mais d'identifier le moment juste pour valider, apaiser et cadrer."
    ],
    checklistTask: {
      subtitle: "Distance avant le présentiel",
      objective: "Décider si la situation observée a atteint le point de bascule et préparer une intervention brève et soutenante.",
      intro: "Ouvrez la checklist interactive et répondez à chaque item par Oui ou Non en fonction de la scène observée.",
      items: [
        {
          id: "noiseRise",
          label: "Le bruit ou la tension augmentent de manière visible."
        },
        {
          id: "frameFragile",
          label: "Le cadre de travail commence à se fragiliser."
        },
        {
          id: "visibleAgitation",
          label: "Un élève ou plusieurs élèves montrent des signes manifestes d'agitation."
        },
        {
          id: "riskEscalation",
          label: "Une absence d'intervention risquerait d'aggraver la situation."
        },
        {
          id: "justifyTiming",
          label: "Je suis capable d'expliquer pourquoi j'interviens à ce moment-là."
        }
      ],
      yesThreshold: 3,
      interpretation:
        "Si plusieurs items sont cochés oui, l'intervention devient pertinente. La question n'est pas seulement : faut-il intervenir ?, mais comment intervenir sans augmenter la pression ?",
      closingPrompt: "Notez en une phrase ce qui vous fait dire que le point de bascule est atteint ou non.",
      closingPlaceholder: "Ex. Le cadre commence à se fragiliser et l'absence d'intervention ferait monter la tension chez plusieurs élèves."
    }
  },
  {
    number: 3,
    moduleType: "reflect",
    title: "Retour réflexif sur sa pratique",
    duration: "10 min",
    difficulty: "Réflexif",
    taskCount: 4,
    instruction:
      "Stabilisez vos apprentissages après l'entraînement en présence et préparez le transfert vers votre propre classe.",
    feedbacks: [
      "Montrez que vous avez identifié le bon moment d'intervention et retenu une formulation brève.",
      "Reliez toujours votre analyse à une situation réelle de votre classe pour préparer le transfert.",
      "Évitez les formulations trop générales : précisez ce que vous gardez, ce que vous ajustez et ce que vous testerez ensuite."
    ],
    reflectionTask: {
      objective: "Stabiliser les apprentissages après le présentiel et préparer une réutilisation réaliste dans sa pratique de classe.",
      timerMinutes: 10,
      timerLabel: "Retour réflexif",
      timerDescription: "Un temps court pour fixer le bon moment d'intervention, la formulation choisie et le transfert vers votre classe.",
      quickSituations: [
        "Montée de bruit",
        "Transition agitée",
        "Consigne reprise",
        "Tension diffuse",
        "Débordement d'un élève"
      ],
      roadmap: [
        "Revenir sur le moment choisi",
        "Nommer la formulation la plus efficace",
        "Pointer ce qu'il reste à ajuster",
        "Préparer un transfert dans sa classe"
      ],
      prompts: [
        {
          id: "chosenMoment",
          label: "1. À quel moment ai-je choisi d'intervenir, et pourquoi ?",
          placeholder: "Expliquez le moment retenu et les indices qui justifient votre choix."
        },
        {
          id: "effectivePhrase",
          label: "2. Quelle formulation a été la plus efficace pour moi ?",
          placeholder: "Notez la phrase ou l'appui verbal qui vous a semblé le plus juste pour valider, apaiser et cadrer."
        },
        {
          id: "improveNext",
          label: "3. Qu'est-ce que je dois encore améliorer ?",
          placeholder: "Soyez précis : ton, brièveté, timing, clarté de la relance, posture..."
        },
        {
          id: "realTransfer",
          label: "4. Dans quelle situation réelle de ma classe pourrais-je réutiliser cette intervention ?",
          placeholder: "Décrivez un contexte de classe concret où cette intervention pourrait être transférée."
        }
      ],
      summaryFields: [
        { id: "chosenMoment", label: "Moment d'intervention retenu" },
        { id: "effectivePhrase", label: "Formulation la plus efficace" },
        { id: "improveNext", label: "Point à améliorer" },
        { id: "realTransfer", label: "Situation de transfert" }
      ]
    }
  },
  {
    number: 4,
    moduleType: "forum",
    title: "Forum - ma phrase d'apaisement",
    duration: "10 min",
    difficulty: "Performance",
    taskCount: 2,
    instruction:
      "Postez une phrase d'intervention courte, réaliste et soutenante, puis commentez la proposition d'au moins un pair.",
    feedbacks: [
      "Votre phrase doit rester courte, transférable et utilisable telle quelle en classe.",
      "Votre commentaire doit expliciter ce qui valide, apaise ou cadre efficacement la situation.",
      "Gardez le critère simple du parcours : la formulation aide-t-elle à valider, apaiser et cadrer en une ou deux phrases maximum ?"
    ],
    forumTask: {
      objective: "Mutualiser des formulations courtes et transférables, puis bénéficier d'un retour des pairs sur leur clarté et leur potentiel d'apaisement.",
      intro: "Postez votre phrase d'apaisement, puis commentez au moins une proposition de pair en indiquant ce qui, selon vous, valide, apaise ou cadre efficacement la situation.",
      phraseLabel: "Ma phrase d'apaisement",
      phrasePlaceholder: "Ex. Je vois que ça monte. On s'arrête une minute et on reprend plus calmement.",
      phraseHint: "Une ou deux phrases maximum, courtes, réalistes et soutenantes.",
      commentLabel: "Mon commentaire",
      commentPlaceholder: "Expliquez ce qui valide, apaise ou cadre efficacement la situation.",
      criterion: "Critère simple pour commenter un pair : la formulation aide-t-elle à valider, apaiser et cadrer en une ou deux phrases maximum ?",
      peerPosts: [
        {
          id: "peer-1",
          author: "Pair 1",
          phrase: "Je vois que ça monte. On s'arrête une minute et on reprend plus calmement."
        },
        {
          id: "peer-2",
          author: "Pair 2",
          phrase: "Je vois que c'est difficile. Viens près de moi deux minutes, puis on continue."
        },
        {
          id: "peer-3",
          author: "Pair 3",
          phrase: "Là, la tension augmente. On reprend une consigne à la fois."
        }
      ]
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
          duration: "2 h 05",
          activities: axe1Objective2Activities
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
          activities: axe3Objective2Activities
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
    "axe-1": [
      {
        type: "Présentation",
        title: "Le rôle des émotions dans les apprentissages et le bien être des élèves",
        description: "Diaporama structuré utilisé dans l'activité A.1.",
        meta: "Axe 1, objectif 2, activité A.1.",
        href: "zenclass_axe1_tache2/materiel_role_des_emotions/presentation_role_emotions.html",
        actionLabel: "Ouvrir la présentation"
      },
      {
        type: "Article scientifique",
        title: "Longitudinal effects of stress in an academic context on psychological well-being, physiological markers, health behaviors, and academic performance in university students",
        description: "Lecture mobilisée dans l'activité A.1.",
        meta: "Benítez-Agudelo, Restrepo, Navarro-Jiménez & Clemente-Suárez (2025). BMC Psychology, 13.",
        href: "https://link.springer.com/article/10.1186/s40359-025-03041-z",
        actionLabel: "Lire l'article"
      },
      {
        type: "Fiche",
        title: "Prise de notes guidée",
        description: "Fiche facultative de prise de notes pour l'activité A.1.",
        meta: "Consigne : Nous vous proposons cette feuille facultative pour la prise de note. Vous pouvez la télécharger en cliquant sur le lien suivant.",
        href: "zenclass_axe1_tache2/materiel_role_des_emotions/prisedenote_role_des_emotions_dans_les_apprentissages.md",
        actionLabel: "Ouvrir la fiche"
      }
    ],
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
        type: "Article PDF",
        title: "Stress de l'évaluation scolaire : un nouveau regard sur un problème ancien",
        description: "Version PDF du texte de Prokofieva et al. (2017) à mobiliser directement dans le parcours axe 2 / objectif 3.",
        meta: "Article utilisé comme ressource d'appui pour les consignes stressantes et la pression évaluative.",
        href: "Stress de l’évaluation scolaire _ un nouveau regard sur un problème ancien.pdf",
        actionLabel: "Ouvrir le PDF"
      },
      {
        type: "Article scientifique",
        title: "Stress de l'évaluation scolaire : un nouveau regard sur un problème ancien",
        description: "Référence centrale pour l'objectif 3 de l'axe 2 : comprendre pourquoi certaines annonces évaluatives agissent comme des stresseurs contextuels prévisibles.",
        meta: "Prokofieva, Brandt-Pomares, Velay, Hérold et Kostromina (2017). Recherches & éducations, 18.",
        href: "https://doi.org/10.4000/rechercheseducations.4657",
        actionLabel: "Lire l'article"
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
    ],
    "axe-3": [
      {
        type: "Article PDF",
        title: "Fiche ressource - Intervenir pour apaiser une situation de classe",
        description: "Support d'appui pour la tâche 8 : repérer le bon moment d'intervention, formuler une réponse brève et soutenir un cadre sécurisant.",
        meta: "Axe 3, tâche 8. Repère TIK-S en ouverture d'activité.",
        href: "1.PDF à part tout au début_Fiche_ressource_Tache8_Intervenir_pour_apaiser.pdf",
        actionLabel: "Ouvrir le PDF"
      },
      {
        type: "Article PDF",
        title: "Parcours numérique - Apaiser la classe",
        description: "Document de parcours regroupant les activités A.1, A.2, A.7 et A.8 à consulter avant et après le présentiel.",
        meta: "Axe 3, tâche 8. Ordre conseillé de consultation inclus.",
        href: "2.Apprenant_Axe3_Tache8_Parcours_numerique_apaiser_la_classe.pdf",
        actionLabel: "Ouvrir le PDF"
      },
      {
        type: "Article scientifique",
        title: "Emotional competence training promotes teachers' emotion socialization and classroom environment",
        description: "Référence scientifique mobilisée dans l'axe 3 pour relier intervention rapide, accompagnement émotionnel et climat positif de classe.",
        meta: "Bølstad, Koleini, Skoe, Kehoe, Nygaard & Havighurst (2023). Mental Health & Prevention, 30, 200273.",
        href: "https://doi.org/10.1016/j.mhp.2023.200273",
        actionLabel: "Lire l'article"
      }
    ]
  }
};
