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

## Règle de travail pour le prochain agent

- Si l'utilisateur demande de travailler sur une section précise, ne modifier que cette section et les liens ou scripts strictement nécessaires à son fonctionnement
- Ne pas toucher aux autres sections par "amélioration", "harmonisation" ou "nettoyage" sans demande explicite
- Avant de modifier une autre zone de la page, vérifier que l'utilisateur l'a bien demandé
- En cas de doute, préserver l'existant hors de la zone ciblée

## Pour reprendre demain

1. Ouvrir `objectif.html?axe=axe-2&objectif=obj-3`
   - Vérifier que le hero s'affiche correctement
   - Tester les filtres d'activités
   - Vérifier que les images des activités chargent
2. Tester d'autres objectifs/axes pour vérifier la rétrocompatibilité
3. Si demandé : étendre le design hero aux autres pages objectif

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
  - `sort`
  - `prep`
  - `verbatim`
  - `evaluation`
  - `reflect`
  - `rephrase`
  - `pathway`

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
