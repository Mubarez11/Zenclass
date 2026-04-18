/**
 * ZenClass AI Agent - Assistant Pédagogique Intelligent
 * =====================================================
 * Un chatbot intelligent spécialisé dans la gestion du stress
 * pour la plateforme pédagogique ZenClass (MALTT - ADID)
 * 
 * Caractéristiques:
 * - Intelligence contextuelle avancée
 * - Réponses pédagogiques complètes
 * - Compréhension du langage naturel
 * - Suggestions dynamiques
 * - Support de toutes les fonctionnalités de la plateforme
 */

document.addEventListener('DOMContentLoaded', () => {
    // ===== ÉLÉMENTS DOM =====
    const widget = document.getElementById('aiAgentWidget');
    const toggle = document.getElementById('agentToggle');
    const closeBtn = document.getElementById('agentCloseBtn');
    const messagesContainer = document.getElementById('agentMessages');
    const input = document.getElementById('agentInput');
    const sendBtn = document.getElementById('agentSend');

    // ===== BASE DE CONNAISSANCES ZENCLASS =====
    const zenClassKnowledge = {
        // Informations générales sur la plateforme
        plateforme: {
            nom: "ZenClass",
            description: "Une plateforme pédagogique innovante dédiée à la gestion du stress en milieu scolaire",
            cours: "ADID (Apprentissage DIgital et formation à Distance)",
            formation: "MALTT (Master of Science in Learning and Teaching Technologies)",
            universite: "Université de Genève",
            labo: "TECFA (Technologies de Formation et Apprentissage)",
            public: "Enseignants du primaire et secondaire",
            objectif: "Accompagner les élèves vers le bien-être et la sérénité en milieu scolaire"
        },

        // Activités disponibles
        activites: {
            video: {
                nom: "Vidéo pédagogique",
                description: "Une vidéo complète sur la gestion du stress avec navigation par chapitres",
                page: "../plateforme-etudiante-zenclass.html#parcours",
                icon: "fa-play-circle",
                contenu: ["Introduction au stress", "Les 4 types de stress", "Techniques de gestion", "Activités pratiques"]
            },
            quiz: {
                nom: "Quiz Interactif",
                description: "Testez vos connaissances sur la gestion du stress avec 10 questions",
                page: "quiz.html",
                icon: "fa-question-circle",
                contenu: ["10 questions", "Score en pourcentage", "Badge à obtenir", "Révision des réponses"]
            },
            autoEvaluation: {
                nom: "Auto-évaluation",
                description: "Évaluez votre niveau de stress personnel avec un questionnaire scientifique",
                page: "auto-evaluation.html",
                icon: "fa-chart-bar",
                contenu: ["8 questions d'évaluation", "Graphique radar", "Conseils personnalisés", "Suivi de progression"]
            },
            respiration: {
                nom: "Respiration 4-7-8",
                description: "Une technique de relaxation guidée pour calmer instantanément le système nerveux",
                page: "respiration.html",
                icon: "fa-wind",
                contenu: ["4 secondes inspiration", "7 secondes rétention", "8 secondes expiration", "Cycles personnalisables"]
            },
            classification: {
                nom: "Classification du Stress",
                description: "Apprenez à identifier et catégoriser les différentes sources de stress",
                page: "classification.html",
                icon: "fa-layer-group",
                contenu: ["Stress scolaire", "Stress social", "Stress personnel", "Stress environnemental"]
            },
            jeuRoles: {
                nom: "Jeu de Rôles",
                description: "Entraînez-vous à communiquer vos émotions à travers des mises en situation",
                page: "jeu-roles.html",
                icon: "fa-theater-masks",
                contenu: ["10 scénarios", "Rôle A et Rôle B", "Vocabulaire des émotions", "Conseils de jeu"]
            }
        },

        // Ressources téléchargeables
        ressources: {
            pdf: ["Fiches pédagogiques", "Guide de l'enseignant", "Cartes du jeu de rôles", "Grille d'auto-évaluation"],
            description: "Plus de 6 ressources PDF téléchargeables pour accompagner la formation"
        },

        // Types de stress
        typesStress: {
            scolaire: {
                nom: "Stress Scolaire",
                description: "Lié aux études, examens, devoirs",
                exemples: ["Peur de l'échec scolaire", "Surcharge de devoirs", "Examens importants", "Pression des notes"],
                solutions: ["Planification", "Techniques de mémorisation", "Pauses régulières", "Demander de l'aide"]
            },
            social: {
                nom: "Stress Social",
                description: "Lié aux relations avec les autres",
                exemples: ["Conflits avec des camarades", "Peur du jugement", "Solitude", "Pression des pairs"],
                solutions: ["Communication ouverte", "Écoute active", "Affirmation de soi", "Cercle de confiance"]
            },
            personnel: {
                nom: "Stress Personnel",
                description: "Lié aux émotions et à la santé",
                exemples: ["Manque de confiance", "Fatigue chronique", "Anxiété", "Problèmes de sommeil"],
                solutions: ["Auto-compassion", "Exercice physique", "Routine de sommeil", "Activités plaisir"]
            },
            environnemental: {
                nom: "Stress Environnemental",
                description: "Lié au contexte et à l'organisation",
                exemples: ["Bruit excessif", "Désorganisation", "Transports difficiles", "Manque de temps"],
                solutions: ["Aménagement de l'espace", "Gestion du temps", "Routines", "Réduction des distractions"]
            }
        },

        // Technique de respiration 4-7-8
        respiration478: {
            nom: "Technique 4-7-8",
            inventeur: "Dr Andrew Weil",
            etapes: [
                "Inspirez calmement par le nez pendant 4 secondes",
                "Retenez votre souffle pendant 7 secondes",
                "Expirez lentement par la bouche pendant 8 secondes"
            ],
            bienfaits: ["Réduit l'anxiété", "Favorise l'endormissement", "Calme le système nerveux", "Améliore la concentration"],
            frequence: "3 à 4 cycles recommandés, 2 fois par jour minimum"
        },

        // Équipe
        equipe: {
            contexte: "Projet réalisé dans le cadre du MALTT à l'Université de Genève",
            partenaires: ["TECFA", "Université de Genève", "Master MALTT"]
        }
    };

    // ===== SYSTÈME DE COMPRÉHENSION DU LANGAGE =====
    const nlpPatterns = {
        // Salutations
        salutations: {
            patterns: [/bonjour/i, /salut/i, /hello/i, /coucou/i, /bonsoir/i, /hey/i, /yo/i, /hi/i],
            responses: [
                "Bonjour ! 👋 Je suis l'assistant ZenClass, spécialisé dans la gestion du stress. Comment puis-je vous aider aujourd'hui ?",
                "Salut ! 😊 Bienvenue sur ZenClass. Je suis là pour vous guider dans votre apprentissage de la gestion du stress.",
                "Hello ! Ravi de vous accueillir sur la plateforme ZenClass. Que souhaitez-vous explorer ?"
            ]
        },

        // Questions sur la plateforme
        plateforme: {
            patterns: [/qu'?est[- ]ce que|c'?est quoi|présente|explique/i, /zenclass|plateforme|site/i],
            response: `<b>ZenClass</b> est une plateforme pédagogique innovante créée dans le cadre du <b>Master MALTT</b> à l'<b>Université de Genève</b>. 🎓<br><br>
            <b>Notre mission :</b> Accompagner les enseignants du primaire et secondaire à aider leurs élèves à gérer le stress scolaire.<br><br>
            <b>Ce que vous trouverez ici :</b>
            <ul>
                <li>📹 Une vidéo pédagogique complète</li>
                <li>🎯 Des activités interactives</li>
                <li>📊 Des outils d'auto-évaluation</li>
                <li>🧘 Des exercices de relaxation</li>
                <li>📚 Des ressources téléchargeables</li>
            </ul>`
        },

        // Questions sur les activités
        activites: {
            patterns: [/activité|exercice|faire|pratiquer|apprendre|interactif/i],
            response: () => {
                let html = `<b>Voici les 5 activités interactives</b> disponibles sur ZenClass : 🎮<br><br>`;
                Object.entries(zenClassKnowledge.activites).forEach(([key, act]) => {
                    if (key !== 'video') {
                        html += `<a href="${act.page}" class="page-link"><i class="fas ${act.icon}"></i> ${act.nom}</a><br>`;
                    }
                });
                html += `<br>Chaque activité vous aide à mieux comprendre et gérer le stress. Laquelle vous intéresse ?`;
                return html;
            }
        },

        // Quiz
        quiz: {
            patterns: [/quiz|question|test(er)?|connaissance/i],
            response: `<b>Le Quiz Interactif</b> 📝<br><br>
            Testez vos connaissances sur la gestion du stress !<br><br>
            <b>Comment ça marche :</b>
            <ul>
                <li>10 questions à choix multiples</li>
                <li>Score affiché en pourcentage</li>
                <li>Révision des réponses à la fin</li>
                <li>Badge "Expert du bien-être" à obtenir !</li>
            </ul>
            <a href="quiz.html" class="page-link"><i class="fas fa-question-circle"></i> Faire le quiz</a>`
        },

        // Auto-évaluation
        autoEval: {
            patterns: [/auto[- ]?évaluation|évaluer|niveau|mesurer|stress|anxieux|anxiété/i],
            response: `<b>L'Auto-évaluation</b> 📊<br><br>
            Mesurez votre niveau de stress avec notre questionnaire scientifique !<br><br>
            <b>Ce que vous obtenez :</b>
            <ul>
                <li>8 questions sur votre ressenti</li>
                <li>Graphique radar personnalisé</li>
                <li>Score global de 1 à 50</li>
                <li>Conseils adaptés à votre profil</li>
            </ul>
            <a href="auto-evaluation.html" class="page-link"><i class="fas fa-chart-bar"></i> M'auto-évaluer</a>`
        },

        // Respiration
        respiration: {
            patterns: [/respir|souffle|calme|relax|4[- ]?7[- ]?8|détendre|anxiété|paniqu/i],
            response: `<b>La Technique de Respiration 4-7-8</b> 🧘<br><br>
            Une méthode puissante créée par le Dr Andrew Weil pour calmer instantanément votre système nerveux !<br><br>
            <b>Les 3 étapes :</b>
            <ol>
                <li><b>Inspirez</b> par le nez pendant <b>4 secondes</b></li>
                <li><b>Retenez</b> votre souffle pendant <b>7 secondes</b></li>
                <li><b>Expirez</b> par la bouche pendant <b>8 secondes</b></li>
            </ol>
            <b>Bienfaits :</b> Réduit l'anxiété, favorise le sommeil, améliore la concentration.<br><br>
            <a href="respiration.html" class="page-link"><i class="fas fa-wind"></i> Pratiquer maintenant</a>`
        },

        // Classification
        classification: {
            patterns: [/class(ifi|er)|catégor|type|source|identifier|reconnaître/i],
            response: `<b>La Classification du Stress</b> 🗂️<br><br>
            Apprenez à identifier les différentes sources de stress pour mieux les gérer !<br><br>
            <b>Les 4 catégories :</b>
            <ul>
                <li>📚 <b>Stress Scolaire</b> - examens, devoirs, notes</li>
                <li>👥 <b>Stress Social</b> - amis, famille, conflits</li>
                <li>💭 <b>Stress Personnel</b> - émotions, confiance en soi</li>
                <li>🌍 <b>Stress Environnemental</b> - bruit, organisation, temps</li>
            </ul>
            <a href="classification.html" class="page-link"><i class="fas fa-layer-group"></i> Classer les situations</a>`
        },

        // Jeu de rôles
        jeuRoles: {
            patterns: [/jeu|rôle|scénario|situation|communiqu|émotion|exprimer|parler/i],
            response: `<b>Le Jeu de Rôles</b> 🎭<br><br>
            Entraînez-vous à communiquer vos émotions à travers des mises en situation !<br><br>
            <b>Comment ça marche :</b>
            <ul>
                <li>Tirez une carte avec un scénario</li>
                <li>Jouez le Rôle A (personne stressée) ou Rôle B (aidant)</li>
                <li>Utilisez le vocabulaire des émotions proposé</li>
                <li>10 scénarios variés disponibles</li>
            </ul>
            <b>Conseil :</b> Idéal pour pratiquer en binôme avec un collègue ou en classe avec vos élèves !<br><br>
            <a href="jeu-roles.html" class="page-link"><i class="fas fa-theater-masks"></i> Jouer maintenant</a>`
        },

        // Vidéo
        video: {
            patterns: [/vidéo|regarder|voir|film|chapitre|introduction/i],
            response: `<b>La Vidéo Pédagogique</b> 📹<br><br>
            Découvrez notre formation complète sur la gestion du stress !<br><br>
            <b>Contenu de la vidéo :</b>
            <ul>
                <li>Introduction à la gestion du stress</li>
                <li>Les 4 types de stress expliqués</li>
                <li>Présentation des techniques</li>
                <li>Les 4 activités pratiques</li>
            </ul>
            <b>Fonctionnalité :</b> Navigation par chapitres pour aller directement à la section souhaitée !<br><br>
            <a href="../plateforme-etudiante-zenclass.html#parcours" class="page-link"><i class="fas fa-compass"></i> Voir le parcours</a>`
        },

        // Stress scolaire
        stressScolaire: {
            patterns: [/examen|devoir|note|école|scolaire|étude|révision|travail scolaire/i],
            response: `<b>Stress Scolaire</b> 📚<br><br>
            Le stress lié aux études est très courant. Voici comment l'identifier et le gérer :<br><br>
            <b>Exemples de situations :</b>
            <ul>
                <li>Peur de l'échec scolaire</li>
                <li>Surcharge de devoirs</li>
                <li>Examens importants</li>
                <li>Pression des notes</li>
            </ul>
            <b>Solutions recommandées :</b>
            <ul>
                <li>✅ Planifier son travail à l'avance</li>
                <li>✅ Découper les tâches en petites étapes</li>
                <li>✅ Faire des pauses régulières</li>
                <li>✅ Demander de l'aide si besoin</li>
            </ul>
            <div class="tip-box"><i class="fas fa-lightbulb"></i> Essayez l'exercice de respiration 4-7-8 avant un examen !</div>`
        },

        // Stress social
        stressSocial: {
            patterns: [/ami|camarade|social|relation|conflit|moquerie|harcèlement|jugement|solitude/i],
            response: `<b>Stress Social</b> 👥<br><br>
            Les relations avec les autres peuvent être source de stress. Voici des pistes :<br><br>
            <b>Exemples de situations :</b>
            <ul>
                <li>Conflits avec des camarades</li>
                <li>Peur du jugement des autres</li>
                <li>Sentiment de solitude</li>
                <li>Pression des pairs</li>
            </ul>
            <b>Solutions recommandées :</b>
            <ul>
                <li>✅ Communiquer ouvertement ses sentiments</li>
                <li>✅ Pratiquer l'écoute active</li>
                <li>✅ S'affirmer avec respect</li>
                <li>✅ Créer un cercle de confiance</li>
            </ul>
            <div class="tip-box"><i class="fas fa-lightbulb"></i> Le jeu de rôles est parfait pour s'entraîner à communiquer !</div>`
        },

        // Aide et navigation
        aide: {
            patterns: [/aide|aider|comment|besoin|perdu|guide|navigation/i],
            response: `<b>Comment puis-je vous aider ?</b> 🤝<br><br>
            Je suis votre assistant ZenClass et je peux vous guider sur :<br><br>
            <ul>
                <li>📹 La <b>vidéo pédagogique</b> principale</li>
                <li>🎯 Les <b>5 activités interactives</b></li>
                <li>📊 Les techniques de <b>gestion du stress</b></li>
                <li>📚 Les <b>ressources téléchargeables</b></li>
                <li>ℹ️ Le <b>fonctionnement</b> de la plateforme</li>
            </ul>
            <b>Posez-moi simplement votre question !</b><br><br>
            <i>Exemples : "Comment fonctionne la respiration 4-7-8 ?", "Où est le quiz ?", "C'est quoi le stress scolaire ?"</i>`
        },

        // Ressources PDF
        ressources: {
            patterns: [/ressource|pdf|télécharger|fiche|document|matériel/i],
            response: `<b>Ressources Téléchargeables</b> 📥<br><br>
            ZenClass propose plus de <b>6 ressources PDF</b> pour accompagner votre enseignement :<br><br>
            <ul>
                <li>📄 Fiches pédagogiques pour chaque activité</li>
                <li>📖 Guide complet de l'enseignant</li>
                <li>🎴 Cartes imprimables du jeu de rôles</li>
                <li>📊 Grille d'auto-évaluation vierge</li>
            </ul>
            <a href="../ma-classe.html" class="page-link"><i class="fas fa-download"></i> Accéder aux ressources</a>`
        },

        // MALTT / ADID / TECFA
        formation: {
            patterns: [/maltt|adid|tecfa|université|genève|master|formation|cours/i],
            response: `<b>À propos de ZenClass</b> 🎓<br><br>
            Cette plateforme est un projet pédagogique réalisé dans le cadre de :<br><br>
            <ul>
                <li><b>ADID</b> - Cours d'Apprentissage DIgital et formation à Distance</li>
                <li><b>MALTT</b> - Master of Science in Learning and Teaching Technologies</li>
                <li><b>TECFA</b> - Technologies de Formation et Apprentissage</li>
                <li><b>Université de Genève</b></li>
            </ul>
            <b>Public cible :</b> Enseignants du primaire et secondaire souhaitant aider leurs élèves à gérer le stress.`
        },

        // Conseils pratiques
        conseils: {
            patterns: [/conseil|astuce|recommandation|suggestion|que faire|comment faire/i],
            response: `<b>Mes conseils pour gérer le stress</b> 💡<br><br>
            Voici mes recommandations principales :<br><br>
            <ol>
                <li><b>Identifiez</b> vos sources de stress (utilisez l'auto-évaluation)</li>
                <li><b>Classifiez</b> le type de stress (scolaire, social, personnel, environnemental)</li>
                <li><b>Pratiquez</b> la respiration 4-7-8 quotidiennement</li>
                <li><b>Communiquez</b> vos émotions (entraînez-vous avec le jeu de rôles)</li>
                <li><b>Testez</b> vos connaissances avec le quiz</li>
            </ol>
            <div class="tip-box"><i class="fas fa-heart"></i> Rappelez-vous : le stress est normal, c'est sa gestion qui fait la différence !</div>`
        },

        // Enseignant
        enseignant: {
            patterns: [/enseignant|professeur|prof|classe|élève|étudiant|enseigner/i],
            response: `<b>Pour les enseignants</b> 👨‍🏫<br><br>
            ZenClass est conçu pour vous aider à intégrer la gestion du stress dans votre enseignement :<br><br>
            <b>Comment utiliser la plateforme :</b>
            <ul>
                <li>📹 Diffusez la vidéo en classe comme introduction</li>
                <li>🎮 Faites réaliser les activités individuellement ou en groupe</li>
                <li>📥 Téléchargez les fiches pédagogiques et cartes de jeu</li>
                <li>🧘 Pratiquez la respiration 4-7-8 collectivement avant un contrôle</li>
            </ul>
            <a href="../ma-classe.html" class="page-link"><i class="fas fa-chalkboard-teacher"></i> Ressources enseignant</a>`
        },

        // Merci / Politesse
        remerciement: {
            patterns: [/merci|super|génial|parfait|excellent|top|cool|bravo/i],
            responses: [
                "Je vous en prie ! 😊 N'hésitez pas si vous avez d'autres questions sur ZenClass.",
                "Avec plaisir ! Je suis là pour vous aider à tout moment. 🌟",
                "Merci à vous ! Bonne exploration de la plateforme et prenez soin de vous ! 💜"
            ]
        },

        // Au revoir
        aurevoir: {
            patterns: [/au revoir|bye|à bientôt|salut$|ciao|à plus/i],
            responses: [
                "Au revoir ! 👋 N'oubliez pas de pratiquer la respiration 4-7-8 régulièrement. À bientôt !",
                "À bientôt sur ZenClass ! 🌟 Prenez soin de vous.",
                "Bye ! N'hésitez pas à revenir si vous avez des questions. 💜"
            ]
        },

        // Page actuelle
        pageActuelle: {
            patterns: [/où suis[- ]je|page actuelle|ici|cette page/i],
            response: () => {
                const currentPage = window.location.pathname.split('/').pop() || 'quiz.html';
                const pageInfo = {
                    'videoADID.html': { nom: 'Accueil', desc: 'une ancienne page de présentation ZenClass' },
                    'quiz.html': { nom: 'Quiz', desc: 'le quiz interactif pour tester vos connaissances' },
                    'auto-evaluation.html': { nom: 'Auto-évaluation', desc: "l'outil pour mesurer votre niveau de stress" },
                    'respiration.html': { nom: 'Respiration 4-7-8', desc: "l'exercice de respiration guidée" },
                    'classification.html': { nom: 'Classification', desc: "l'activité de classification des sources de stress" },
                    'jeu-roles.html': { nom: 'Jeu de rôles', desc: "l'activité pour pratiquer la communication des émotions" }
                };
                const info = pageInfo[currentPage] || { nom: 'ZenClass', desc: 'la plateforme de gestion du stress' };
                return `Vous êtes sur la page <b>${info.nom}</b> 📍<br><br>C'est ${info.desc}.<br><br>Souhaitez-vous naviguer vers une autre section ?`;
            }
        }
    };

    // ===== RÉPONSE PAR DÉFAUT INTELLIGENTE =====
    const defaultResponses = [
        `Je ne suis pas sûr de bien comprendre votre question. 🤔<br><br>
        Voici ce que je peux vous aider avec :
        <ul>
            <li>Les <b>activités interactives</b> (quiz, respiration, classification...)</li>
            <li>Les <b>techniques de gestion du stress</b></li>
            <li>Le <b>fonctionnement de ZenClass</b></li>
            <li>Les <b>ressources téléchargeables</b></li>
        </ul>
        Pouvez-vous reformuler votre question ?`,
        
        `Hmm, je n'ai pas trouvé d'information précise sur ce sujet. 🧐<br><br>
        Essayez de me poser des questions sur :
        <ul>
            <li>La <b>respiration 4-7-8</b></li>
            <li>Le <b>quiz</b> ou <b>l'auto-évaluation</b></li>
            <li>Les <b>types de stress</b></li>
            <li>Le <b>jeu de rôles</b></li>
        </ul>`,
        
        `Je suis spécialisé dans la gestion du stress et la plateforme ZenClass. 🎯<br><br>
        Comment puis-je vous aider ? Vous pouvez me demander :
        <ul>
            <li>"Comment fonctionne la respiration 4-7-8 ?"</li>
            <li>"Où est le quiz ?"</li>
            <li>"Qu'est-ce que le stress scolaire ?"</li>
            <li>"Comment utiliser cette plateforme ?"</li>
        </ul>`
    ];

    // ===== SUGGESTIONS DYNAMIQUES =====
    const suggestions = {
        initial: [
            { text: "C'est quoi ZenClass ?", icon: "fa-info-circle", question: "plateforme" },
            { text: "Voir les activités", icon: "fa-gamepad", question: "activites" },
            { text: "Respiration 4-7-8", icon: "fa-wind", question: "respiration" },
            { text: "Aide", icon: "fa-question", question: "aide" }
        ],
        afterStress: [
            { text: "Faire l'exercice de respiration", icon: "fa-wind", question: "respiration" },
            { text: "M'auto-évaluer", icon: "fa-chart-bar", question: "auto-evaluation" },
            { text: "Conseils pratiques", icon: "fa-lightbulb", question: "conseils" }
        ],
        afterActivity: [
            { text: "Autre activité", icon: "fa-random", question: "activites" },
            { text: "Retour à l'accueil", icon: "fa-home", question: "video" },
            { text: "Télécharger des ressources", icon: "fa-download", question: "ressources" }
        ]
    };

    // ===== ANALYSE DU MESSAGE =====
    function analyzeMessage(message) {
        const lowerMsg = message.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        // Parcourir tous les patterns
        for (const [key, data] of Object.entries(nlpPatterns)) {
            if (data.patterns) {
                for (const pattern of data.patterns) {
                    if (pattern.test(lowerMsg)) {
                        // Gérer les réponses multiples (aléatoires)
                        if (data.responses && Array.isArray(data.responses)) {
                            return {
                                response: data.responses[Math.floor(Math.random() * data.responses.length)],
                                category: key
                            };
                        }
                        // Gérer les réponses fonctionnelles
                        if (typeof data.response === 'function') {
                            return { response: data.response(), category: key };
                        }
                        return { response: data.response, category: key };
                    }
                }
            }
        }
        
        // Réponse par défaut
        return {
            response: defaultResponses[Math.floor(Math.random() * defaultResponses.length)],
            category: 'default'
        };
    }

    // ===== AFFICHER UN MESSAGE =====
    function addMessage(content, type, suggestions = null) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${type}`;
        messageDiv.innerHTML = `<div class="message-content">${content}</div>`;
        messagesContainer.appendChild(messageDiv);
        
        // Ajouter des suggestions si fournies
        if (suggestions && type === 'bot') {
            const suggestionsDiv = document.createElement('div');
            suggestionsDiv.className = 'chat-suggestions';
            suggestions.forEach(s => {
                const btn = document.createElement('button');
                btn.className = 'suggestion-btn';
                btn.innerHTML = `<i class="fas ${s.icon}"></i> ${s.text}`;
                btn.addEventListener('click', () => sendMessage(s.text));
                suggestionsDiv.appendChild(btn);
            });
            messagesContainer.appendChild(suggestionsDiv);
        }
        
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // ===== INDICATEUR DE FRAPPE =====
    function showTyping() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message bot';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return typingDiv;
    }

    // ===== ENVOYER UN MESSAGE =====
    function sendMessage(message) {
        if (!message.trim()) return;

        // Afficher le message de l'utilisateur
        addMessage(message, 'user');
        input.value = '';

        // Afficher l'indicateur de frappe
        const typing = showTyping();

        // Analyser et répondre après un délai réaliste
        const delay = 600 + Math.random() * 800;
        setTimeout(() => {
            typing.remove();
            
            const analysis = analyzeMessage(message);
            
            // Choisir les suggestions appropriées
            let currentSuggestions = null;
            if (analysis.category === 'salutations' || analysis.category === 'aide' || analysis.category === 'plateforme') {
                currentSuggestions = suggestions.initial;
            } else if (analysis.category.includes('stress') || analysis.category === 'conseils') {
                currentSuggestions = suggestions.afterStress;
            } else if (analysis.category !== 'default' && analysis.category !== 'remerciement' && analysis.category !== 'aurevoir') {
                currentSuggestions = suggestions.afterActivity;
            }
            
            addMessage(analysis.response, 'bot', currentSuggestions);
        }, delay);
    }

    // ===== TOGGLE WIDGET =====
    function toggleWidget() {
        widget.classList.toggle('open');
        if (widget.classList.contains('open')) {
            input.focus();
        }
    }

    function closeWidget() {
        widget.classList.remove('open');
    }

    // ===== EVENT LISTENERS =====
    toggle.addEventListener('click', toggleWidget);
    closeBtn.addEventListener('click', closeWidget);

    // Fermer avec Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && widget.classList.contains('open')) {
            closeWidget();
        }
    });

    // Envoyer un message
    sendBtn.addEventListener('click', () => sendMessage(input.value));
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage(input.value);
    });

    // Gestion des suggestions initiales
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.dataset.question || btn.textContent;
            sendMessage(question);
        });
    });

    // ===== AUTO-OUVERTURE APRÈS DÉLAI (optionnel) =====
    // Décommentez pour ouvrir automatiquement après 8 secondes
    /*
    setTimeout(() => {
        if (!widget.classList.contains('open')) {
            toggleWidget();
        }
    }, 8000);
    */
});
