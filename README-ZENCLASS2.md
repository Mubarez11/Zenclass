# ZenClass 2

Base de travail autonome pour compléter la plateforme ZenClass par axe, objectif et activité.

## Ouvrir la plateforme

- Page d'accueil : `plateforme-etudiante-zenclass.html`
- Pages liées :
  - `plateforme-etudiante-zenclass-axe.html`
  - `plateforme-etudiante-zenclass-ressources-theoriques.html`
  - `plateforme-etudiante-zenclass-progression.html`
  - `objectif.html`
  - `activite.html`

## Handoff 2026-04-18

- `ma-classe.html` contient maintenant les blocs déplacés depuis la page principale :
  - `Documentation pédagogique`
  - `Forum`
  - footer `Équipe`
- `plateforme-etudiante-zenclass.html` ne doit plus contenir :
  - la section `Documentation pédagogique`
  - la section `Forum`
- Sur la page principale, les liens menu `Forum` et `Équipe` du menu overlay point désormais vers `ma-classe.html#forum` et `ma-classe.html#equipe`

## Règle de travail pour le prochain agent

- Si l'utilisateur demande de travailler sur une section précise, ne modifier que cette section et les liens ou scripts strictement nécessaires à son fonctionnement
- Ne pas toucher aux autres sections par "amélioration", "harmonisation" ou "nettoyage" sans demande explicite
- Avant de modifier une autre zone de la page, vérifier que l'utilisateur l'a bien demandé
- En cas de doute, préserver l'existant hors de la zone ciblée

## Fichiers à modifier en priorité

- `plateforme-etudiante/data.js`
  - ajouter ou compléter les activités dans chaque axe / objectif
  - ajouter des ressources théoriques
  - ajouter des ressources pour la classe si besoin
- `plateforme-etudiante/activity-modules.js`
  - uniquement si vous créez un nouveau type d'activité interactive
- `plateforme-etudiante/styles.css`
  - uniquement pour de petits ajustements visuels

## Structure actuelle

- Les axes sont définis dans `window.platformData.axes`
- Chaque axe contient des `objectives`
- Chaque objectif contient des `activities`
- Les activités simples utilisent la structure par défaut
- Les activités enrichies utilisent un `moduleType`
  - `sort`
  - `prep`
  - `verbatim`
  - `evaluation`
  - `reflect`
  - `rephrase`

## Etat actuel - Axe 2 / Objectif 3

- Objectif : `Reformuler les consignes stressantes en consignes neutres`
- Page objectif : `objectif.html?axe=axe-2&objectif=obj-3`
- Activité 3 : `activite.html?axe=axe-2&objectif=obj-3&activite=3`
  - module interactif `reflect`
  - timer de réflexion 10 min
  - carnet de recul, situations fréquentes, checkpoints, synthèse personnelle
- Activité 4 : `activite.html?axe=axe-2&objectif=obj-3&activite=4`
  - module interactif `rephrase`
  - studio de reformulation avec timer circulaire
  - phases `Session complete`, `Lancement`, `Studio`, `Relecture`
  - compteurs en direct, validation `3/4`, corrections possibles

## Fichiers modifiés pour cet objectif

- `plateforme-etudiante/data.js`
  - contenu complet des activités 1 a 4 de l'objectif 3
  - données du module `reflect`
  - données du module `rephrase`
  - ressource théorique `Prokofieva et al. (2017)` ajoutée pour l'axe 2
- `plateforme-etudiante/activity-modules.js`
  - nouveau module `reflect`
  - nouveau module `rephrase`
  - timers, synthèse, progression, validation
- `plateforme-etudiante/styles.css`
  - styles premium pour les cartes, timers, métriques, états de réussite
  - responsive et animations légères

## Pour reprendre demain

- Ouvrir d'abord `activite.html?axe=axe-2&objectif=obj-3&activite=3`
  - vérifier la logique de réflexion
  - compléter ou ajuster les prompts si besoin
- Puis ouvrir `activite.html?axe=axe-2&objectif=obj-3&activite=4`
  - tester les 4 reformulations
  - ajuster les `requiredGroups` et `blockedPhrases` dans `plateforme-etudiante/data.js` si la validation est trop stricte ou trop permissive
- Si tu veux pousser encore le rendu
  - affiner les textes de feedback activité par activité
  - ajouter une dernière couche narrative ou sonore légère
  - éventuellement relier la synthèse de l'activité 3 à l'activité 4

## Pense-bête technique

- Les activités 3 et 4 sauvegardent leur état en `localStorage`
- Les timers sont gérés dans `plateforme-etudiante/activity-modules.js`
- La validation de l'activité 4 repose sur des indices textuels simples, pas sur une analyse sémantique avancée
- Si tu modifies le contenu d'une consigne, pense à mettre à jour aussi son `neutralExample`, ses `requiredGroups` et ses `blockedPhrases`

## Conseils pour l'équipe

- Ne pas renommer les fichiers ou dossiers principaux
- Conserver les identifiants existants des axes et objectifs
- Si vous ajoutez une activité, gardez une numérotation continue
- Si vous ajoutez un PDF, une image ou une vidéo locale, placez-la dans un chemin déjà utilisé par la plateforme ou mettez à jour le chemin dans `data.js`
- Vérifier systématiquement les liens après ajout d'une nouvelle ressource

## Ressources incluses

- Navigation principale harmonisée
- Pages interactives
- Ressources théoriques
- Ressources pour ma classe
- Vidéo locale `videoADID.mp4`
- Documents PDF / DOCX déjà liés dans la plateforme

## Bon réflexe avant envoi

- Ouvrir `plateforme-etudiante-zenclass.html`
- Cliquer sur chaque axe
- Ouvrir une page objectif
- Ouvrir une activité
- Tester au moins une page interactive
