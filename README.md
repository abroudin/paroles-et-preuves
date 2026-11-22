# Paroles & preuves

Prototype d'un observatoire sourcé des affirmations factuelles des responsables politiques français.

## Objet

Cette démonstration permet de consulter un registre d'affirmations, de filtrer les déclarations, de documenter les sources et les conclusions, et d'importer ou d'exporter des données au format JSON.

Les conclusions doivent être fondées sur des sources vérifiables et validées humainement. Aucune déclaration n'est automatiquement qualifiée de vraie ou de fausse par le prototype.

## Limitations

- Application statique, sans serveur ni base de données partagée.
- Les saisies sont enregistrées uniquement dans le navigateur utilisé (stockage local).
- Pas de collecte automatique des déclarations, ni de vérification automatique.
- Les données de démonstration ne constituent pas une analyse exhaustive des interventions publiques.

## Déploiement GitHub Pages

Site statique destiné à être publié depuis la branche `main`, dossier `/ (root)`.

1. Créer un dépôt **public** `paroles-et-preuves` sur le compte `abroudin`.
2. Ajouter `index.html`, `README.md` et `.nojekyll` à la racine, puis valider les modifications.
3. Dans `Settings > Pages`, choisir `Deploy from a branch`, `main`, `/ (root)`, puis enregistrer.
4. Adresse attendue une fois GitHub Pages activé : https://abroudin.github.io/paroles-et-preuves/

Aucune modification de `abroudin.github.io` n'est nécessaire.