# Paroles & preuves

Prototype public d'observatoire des affirmations factuelles de responsables politiques français.

**Site :** https://abroudin.github.io/paroles-et-preuves/

## Données intégrées

- **50 profils publics**, au 22 novembre 2026 : 40 candidatures annoncées, 7 candidatures envisagées ou conditionnelles et 3 responsables institutionnels.
- **12 affirmations documentées** pour Emmanuel Macron (6), Sébastien Lecornu (3), Laurent Nuñez (3), issues des 19 et 20 novembre 2026. Aucune affirmation vérifiée n'a encore été enregistrée pour les candidats suivis.
- Répartition des **analyses préliminaires** sur ces 12 affirmations : 3 confirmées, 3 à nuancer, 3 indéterminées, 3 à vérifier.
- Les candidatures ne constituent **pas la liste définitive des candidats** au sens électoral : les 500 parrainages restent nécessaires. L'inventaire peut être incomplet et les statuts évoluer.
- Les dates, sources des annonces et réserves propres à certaines candidatures figurent dans les fiches.

Fichiers publics :
- [`data/people.json`](data/people.json) : liste et statut des 50 personnes avec sources et date de mise à jour ;
- [`data/claims.json`](data/claims.json) : 12 affirmations et leurs analyses documentaires.

Le code du site contient aussi ces données initiales pour fonctionner sans serveur. Pour une mise à jour publique, les fichiers JSON et le code doivent rester synchronisés.

**Important :** les analyses sont des travaux documentaires préliminaires assistés par IA, **non validés par une rédaction indépendante**. Elles ne constituent pas des verdicts éditoriaux définitifs. Le corpus n'est pas exhaustif et ne permet pas de comparer la fiabilité des responsables politiques entre eux.

## Indicateurs par personne

Une fiche de personne affiche le **nombre d'affirmations recensées**, la **part de ce corpus analysée** et les **effectifs par conclusion** (confirmé, à nuancer, contredit, indéterminé, en attente). Il n'existe **pas de note personnelle** de type 7/10 ou 72/100 : l'échantillonnage actuel serait trop petit et hétérogène pour établir une mesure sérieuse de la fiabilité des propos.

Pour les personnes sans affirmation contrôlée, l'interface affiche **non évalué**, jamais une note de zéro.

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
