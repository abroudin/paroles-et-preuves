# Paroles & preuves

Observatoire documentaire public d'affirmations factuelles de responsables politiques français.

**Site :** https://abroudin.github.io/paroles-et-preuves/

## Périmètre

Le site affiche **la totalité des affirmations recensées, sans limite temporelle ni purge automatique**. Les dates de déclarations sont conservées pour contextualiser les affirmations et les recherches quotidiennes ajoutent progressivement de nouvelles fiches au corpus cumulatif.

**Situation au 22 novembre 2026 :** 50 profils et 34 affirmations recensées au total, sans filtre de période. Le corpus reste **partiel et non exhaustif** ; il ne répertorie pas toutes les interventions des 50 personnes.

Les profils distinguent candidatures annoncées, envisagées ou conditionnelles, retirées et responsables institutionnels. François Ruffin a retiré sa candidature le 21 novembre 2026 ([LCP, 21 novembre 2026](https://lcp.fr/actualites/francois-ruffin-se-retire-de-la-presidentielle-2027-sans-soutenir-aucun-des-candidats-de)).

Les fiches contiennent la date (parfois partielle), le contexte, la source d'origine, une explication des limites et des références documentaires. Les analyses ont été préparées avec assistance IA et n'ont pas été relues par une rédaction indépendante. La date de déclaration et celle de la vérification sont deux informations distinctes.

## Données

- [data/people.json](data/people.json) : personnes suivies et statut de candidature sourcé.
- [data/claims.json](data/claims.json) : affirmations et analyses.
- [index.html](index.html) : interface statique avec les données intégrées.

Ces fichiers sont synchronisés lors de la publication. Les 42 portraits référencés utilisent des liens vers Wikimedia Commons, et le navigateur peut remplacer une ancienne adresse d'image par une miniature liée à l'article exact de Wikipédia. En cas d'absence d'image ou d'échec de chargement, les initiales restent affichées. La disponibilité effective de chaque image dépend de Wikimedia. Les sources et fiches de licence sont indiquées dans les profils lorsqu'elles sont disponibles.

## Consultation

Le site ne propose ni ajout manuel d'affirmations, ni export de données depuis l'interface. Il présente les vues Vue générale, Affirmations, Responsables, Comparatif des faits et Méthodologie.

Le tableau comparatif affiche des **effectifs par type de conclusion**, pas un classement ou une note de sincérité des personnes. Les petits échantillons, non représentatifs, ne permettent pas de comparer la fiabilité personnelle.

Les catégories « Confirmé », « À nuancer », « Contredit », « Indéterminé », « À vérifier » s'appliquent uniquement aux affirmations factuelles, et non aux intentions, promesses ou opinions.

## Mise à jour

Hébergement statique GitHub Pages sur `main`. Une veille quotidienne recherche les nouvelles déclarations, vérifie les sources et tente de les ajouter au corpus historique sans supprimer les anciennes, puis de synchroniser les fichiers du dépôt ; cette tâche ne garantit ni l'exhaustivité ni une publication automatique en cas d'indisponibilité de GitHub. Le dépôt et l'historique des modifications restent les sources de vérité.

Références méthodologiques : [EFCSN](https://efcsn.com/code-of-standards/), [Full Fact](https://fullfact.org/about/how-we-fact-check/).
