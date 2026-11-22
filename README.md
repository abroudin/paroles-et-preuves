# Paroles & preuves

Prototype public d'observatoire des affirmations factuelles de responsables politiques français.

**Site :** https://abroudin.github.io/paroles-et-preuves/

## Données intégrées

- **12 affirmations recensées**, datées des **19 et 20 novembre 2026**.
- Périmètre initial : Emmanuel Macron (6), Sébastien Lecornu (3), Laurent Nuñez (3).
- Répartition des **analyses préliminaires** : 3 confirmées, 3 à nuancer, 3 indéterminées, 3 à vérifier.
- Chaque fiche indique le contexte, la date, la source de la déclaration, une explication et, selon les cas, plusieurs sources complémentaires.
- **Dernière révision : 22 novembre 2026.** Les résultats ne sont pas automatiquement mis à jour.

Le fichier [`data/claims.json`](data/claims.json) contient l'instantané exploitable par machine. L'application inclut également cet instantané dans `index.html`, pour afficher les fiches sans serveur ni connexion à une API.

**Important :** les analyses sont des travaux documentaires préliminaires assistés par IA, **non validés par une rédaction indépendante**. Elles ne constituent pas des verdicts éditoriaux définitifs. Le corpus n'est pas exhaustif et ne permet pas de comparer la fiabilité des responsables politiques entre eux.

## Comprendre les états

- **Confirmé** : corroboration des éléments retenus et limites décrites.
- **À nuancer** : contexte, dates ou définition de l'indicateur changent la portée du propos.
- **Indéterminé** : éléments publiquement accessibles insuffisants pour conclure.
- **À vérifier** : vérification non finalisée.
- **Contredit** : catégorie disponible, sans cas retenu à ce jour.

Une annonce, une prévision ou une intention ne doivent pas être confondues avec un résultat déjà observé. La réalité d'une annonce est distincte de son éventuelle réalisation.

## Fonctionnement et confidentialité

Site statique : HTML, CSS et JavaScript. La publication s'effectue via GitHub Pages, sur la branche `main`, dossier racine.

Les affirmations saisies ou éditées dans l'interface et les importations JSON sont stockées **localement dans le navigateur** (`localStorage`). Ces changements ne sont **pas diffusés au public** et ne modifient pas ce dépôt. Les fiches initiales publiques sont rechargées à partir du code déployé; les ajouts personnels locaux sont conservés. La remise à zéro efface les ajouts locaux.

L'application ne réalise **ni collecte automatique** des déclarations, **ni vérification automatique** en temps réel. Pour actualiser publiquement le corpus, modifier le fichier `index.html` et maintenir `data/claims.json` cohérent.

## Références de méthode

- European Fact-Checking Standards Network : https://efcsn.com/code-of-standards/
- Full Fact : https://fullfact.org/about/how-we-fact-check/
- Assemblée nationale, données publiques : https://data.assemblee-nationale.fr/
