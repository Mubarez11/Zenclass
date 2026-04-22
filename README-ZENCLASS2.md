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

## Handoff 2026-04-23

### axe-3 / obj-2 - Tache 8 integree

Le parcours numerique de la tache 8 a ete integre dans `axe-3 / obj-2` avec 4 activites enrichies :

- `Activite 1` : `observe`
- `Activite 2` : `checklist`
- `Activite 3` : `reflect`
- `Activite 4` : `forum`

### Ressources ajoutees

- Axe 3 :
  - `1.PDF à part tout au début_Fiche_ressource_Tache8_Intervenir_pour_apaiser.pdf`
  - `2.Apprenant_Axe3_Tache8_Parcours_numerique_apaiser_la_classe.pdf`
  - article `Bølstad et al. (2023)` via DOI
- Axe 2 / objectif 3 :
  - PDF local `Stress de l’évaluation scolaire _ un nouveau regard sur un problème ancien.pdf`
  - DOI `Prokofieva et al. (2017)` conserve comme reference academique

### Fichiers modifies

- `plateforme-etudiante/data.js`
- `plateforme-etudiante/activity-modules.js`
- `plateforme-etudiante/app.js`
- `README.md`
- `HANDOFF-2026-04-23.md`

### Verifications faites

- Syntaxe JS OK sur les 3 fichiers modifies
- Verification navigateur OK sur les pages `objectif`, `activite` et `ressources theoriques` des axes 2 et 3
- Console OK hors `favicon.ico` manquant

## Handoff 2026-04-19

### objectif.html - Page Objectif redesign (axe-2, obj-3)

Nouvelle section hero inspirée du composant 21st.dev "A Modern Hero Section" :

**Hero Section (nouveau design):**
- Layout deux colonnes : texte à gauche, carte "AI Dashboard" à droite
- Badge "AXE 2" avec dot animé violet (pulse)
- Titre en Playfair Display avec gradient violet sur mots-clés
- Description de l'objectif
- Meta items : durée estimée + progression avec icônes SVG
- Carte sombre avec :
  - Grille de pixels 8x6 générée dynamiquement (violet/jaune/bleu)
  - Animation au hover (rotation → 0°)
  - Stats : 4 activités, 30 min+
  - Barre de progression
- Barre de confiance : Émotions, Bien-être, Communication, Climat, Ressources

**Section Activités (Flip Reveal):**
- Toggle filtres : Tous, Fondations, Guidé, Réflexif, Performance
- Animation GSAP : scale + opacity au filtrage
- 4 cartes avec images (pour axe-2 obj-3)
- Badges colorés sur les images
- Numéro d'activité en overlay
- Flèche → qui apparaît au hover
- Animation d'entrée staggered au chargement

**Fichiers modifiés:**
- `objectif.html` : CSS inline complet, hero HTML/JS, Flip Reveal cards

**Images intégrées (axe-2, obj-3):**
- `activité 1 axe 2 objectif 3.png`
- `activité 2 axe 2 objectif 3 vrai.png`
- `activité 3 axe 2 objectif 3.png`
- `activité 4 axe2 objectif 3.png`

## Handoff 2026-04-21

### activite.html - Hero globe 3D (axe-2, obj-3, activite-1)

Refonte du hero de la page activite pour remplacer la sphere surchargee par un globe 3D plus lisible et plus proche de l'intention 21st.dev.

**Hero Activity (nouveau design):**
- Titre conserve hors du globe, dans une colonne a gauche
- Globe `cobe` charge dynamiquement via CDN ESM
- Globe large, draggable, avec rendu plus 3D et lueur legere
- Suppression du faux fond/cercle blanc derriere le globe
- Labels derives du contenu reel de la page : `Axe 2`, `Objectif 3`, `Activité 1`, `Durée 20 min`, `Niveau Fondations`, `8 tâches`
- Labels repositionnes autour et partiellement dans le globe selon l'espace disponible
- Ajustements responsive verifies sur desktop et mobile

**Fonctions importantes:**
- `enhanceHero(meta)` : reconstruit le hero activite
- `buildHeroGlobeData(meta)` : prepare les labels du globe
- `mountHeroGlobe(hero, globeData)` : initialise `cobe`, drag et resize

**Fichiers modifiés:**
- `activite.html` : CSS inline du hero globe + JS de construction/rendu du globe
- `README.md` : point d'entree rapide pour la reprise
- `HANDOFF-2026-04-21.md` : resume detaille de la session

**Vérifications faites:**
- `1280x900`
- `1280x533`
- `390x844`
- Console OK hors `favicon.ico` manquant

## Règle de travail pour le prochain agent

- Si l'utilisateur demande de travailler sur une section précise, ne modifier que cette section et les liens ou scripts strictement nécessaires à son fonctionnement
- Ne pas toucher aux autres sections par "amélioration", "harmonisation" ou "nettoyage" sans demande explicite
- Avant de modifier une autre zone de la page, vérifier que l'utilisateur l'a bien demandé
- En cas de doute, préserver l'existant hors de la zone ciblée

## Pour reprendre demain

1. Ouvrir `README.md`
2. Ouvrir `HANDOFF-2026-04-23.md`
3. Ouvrir `objectif.html?axe=axe-3&objectif=obj-2`
4. Ouvrir `activite.html?axe=axe-3&objectif=obj-2&activite=1`
   - vérifier l'encadre ressource
   - vérifier le flux de prise de notes
5. Ouvrir `activite.html?axe=axe-3&objectif=obj-2&activite=4`
   - vérifier la phrase personnelle
   - vérifier le commentaire sur un pair
6. Vérifier `plateforme-etudiante-zenclass-ressources-theoriques.html?axe=axe-2`
7. Vérifier `plateforme-etudiante-zenclass-ressources-theoriques.html?axe=axe-3`

## Pense-bête technique

- `window.platformData` charge les données depuis `plateforme-etudiante/data.js`
- Les activités sont filtrées par `moduleType` → catégorie CSS
- Les images axe-2 obj-3 sont dans le dossier racine
- `app.js` écrit dans `#objectiveHero` (masqué) — ne pas supprimer
- GSAP 3.12.5 est chargé via CDN pour les animations

## Structure actuelle

- Les axes sont définis dans `window.platformData.axes`
- Chaque axe contient des `objectives`
- Chaque objectif contient des `activities`
- Les activités simples utilisent la structure par défaut
- Les activités enrichies utilisent un `moduleType`
  - `observe`
  - `checklist`
  - `sort`
  - `prep`
  - `verbatim`
  - `evaluation`
  - `reflect`
  - `rephrase`
  - `pathway`
  - `forum`

## Fichiers à modifier en priorité

- `plateforme-etudiante/data.js`
  - ajouter ou compléter les activités dans chaque axe / objectif
  - ajouter des ressources théoriques
  - ajouter des ressources pour la classe si besoin
- `plateforme-etudiante/activity-modules.js`
  - uniquement si vous créez un nouveau type d'activité interactive
- `plateforme-etudiante/styles.css`
  - uniquement pour de petits ajustements visuels

## Bon réflexe avant envoi

- Ouvrir `plateforme-etudiante-zenclass.html`
- Cliquer sur chaque axe
- Ouvrir une page objectif
- Ouvrir une activité
- Tester au moins une page interactive
