# ZenClass 2

Point d'entree rapide pour reprendre le projet demain.

## A lire en premier

- `README-ZENCLASS2.md` : contexte general du projet
- `HANDOFF-2026-04-23.md` : resume detaille de la session du jour

## Focus actuel

- Page objectif principale : `objectif.html?axe=axe-3&objectif=obj-2`
- Page activite principale : `activite.html?axe=axe-3&objectif=obj-2&activite=1`
- Ressources a verifier :
  - `plateforme-etudiante-zenclass-ressources-theoriques.html?axe=axe-3`
  - `plateforme-etudiante-zenclass-ressources-theoriques.html?axe=axe-2`

## Fichiers modifies aujourd'hui

- `plateforme-etudiante/data.js`
- `plateforme-etudiante/activity-modules.js`
- `plateforme-etudiante/app.js`
- `README-ZENCLASS2.md`
- `HANDOFF-2026-04-23.md`
- `README.md`

## Reprendre localement

Depuis `C:\Users\moham\Desktop\zenclass2` :

```bash
python -m http.server 8123
```

Puis ouvrir :

- `http://127.0.0.1:8123/objectif.html?axe=axe-3&objectif=obj-2`
- `http://127.0.0.1:8123/activite.html?axe=axe-3&objectif=obj-2&activite=1`

## Prochaines actions conseillees

1. Remplacer le lien video modele de l'activite 1 axe 3 / objectif 2 si une vraie video est fournie.
2. Ajouter des visuels dedies pour les 4 activites de `axe-3 / obj-2` si l'utilisateur veut des cartes plus editoriales.
3. Tester plus largement les parcours enrichis sur les pages racine et dans `plateforme-etudiante/`.
