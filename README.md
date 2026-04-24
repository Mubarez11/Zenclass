# ZenClass 2

Point d'entree rapide pour reprendre le projet.

## A lire en premier

- `README-ZENCLASS2.md` : contexte general du projet
- `HANDOFF-2026-04-24.md` : resume detaille de la derniere session
- `HANDOFF-2026-04-23.md` : integration axe 3 / objectif 2

## Focus actuel

- Page activite principale : `activite.html?axe=axe-2&objectif=obj-3&activite=1`
- Objectif travaille : distinguer information utile et pression ajoutee dans les consignes evaluatives.
- Supports inclus dans le push : dossier `zenclass_axe1_tache2/` et ressources associees.

## Fichiers modifies aujourd'hui

- `plateforme-etudiante/data.js`
- `plateforme-etudiante/activity-modules.js`
- `plateforme-etudiante/styles.css`
- `README-ZENCLASS2.md`
- `HANDOFF-2026-04-24.md`
- `README.md`
- `zenclass_axe1_tache2/`

## Reprendre localement

Depuis `C:\Users\moham\Desktop\zenclass2` :

```bash
python -m http.server 8765 --bind 127.0.0.1
```

Puis ouvrir :

- `http://127.0.0.1:8765/activite.html?axe=axe-2&objectif=obj-3&activite=1`
- `http://127.0.0.1:8765/plateforme-etudiante-zenclass-ressources-theoriques.html?axe=axe-2`

## Prochaines actions conseillees

1. Tester le parcours complet de `axe-2 / obj-3 / activite-1` avec plusieurs combinaisons de reponses.
2. Verifier que les feedbacks restent lisibles sur mobile apres plusieurs validations successives.
3. Si besoin, harmoniser les autres activites `pathway` avec le meme modele de feedback detaille.
