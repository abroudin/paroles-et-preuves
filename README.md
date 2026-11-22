# Paroles & preuves

Observatoire documentaire public d'affirmations factuelles de responsables politiques français.

**Site :** https://abroudin.github.io/paroles-et-preuves/

## Périmètre

Le site affiche **par défaut les 30 derniers jours de déclarations** (fenêtre glissante calculée selon l'heure de Paris). Il conserve un accès au corpus complet, y compris aux affirmations plus anciennes ou dont le jour exact n'a pas été établi.

**Situation au 22 novembre 2026 :** 50 profils, 34 affirmations recensées au total, dont 25 avec une date de déclaration comprise entre le 24 octobre et le 22 novembre 2026 inclus. Le corpus reste **partiel et non exhaustif** ; il ne répertorie pas toutes les interventions des 50 personnes.

Les profils distinguent candidatures annoncées, envisagées ou conditionnelles, retirées et responsables institutionnels. François Ruffin a retiré sa candidature le 21 novembre 2026 ([LCP, 21 novembre 2026](https://lcp.fr/actualites/francois-ruffin-se-retire-de-la-presidentielle-2027-sans-soutenir-aucun-des-candidats-de)).

Les fiches contiennent la date (parfois partielle), le contexte, la source d'origine, une explication des limites et des références documentaires. Les analyses ont été préparées avec assistance IA et n'ont pas été relues par une rédaction indépendante. Les 30 jours représentent la **période de déclaration**, pas la date de publication des analyses.

## Données

- [data/people.json](data/people.json) : personnes suivies et statut de candidature sourcé.
- [data/claims.json](data/claims.json) : affirmations et analyses.
- [index.html](index.html) : interface statique avec les données intégrées.

Ces fichiers sont synchronisés lors de la publication. Les 32 portraits paramétrés utilisent des liens Wikimedia Commons avec repli sur des initiales, et une fiche de crédits photographiques par profil lorsqu'une photographie est configurée.

## Consultation

Le site ne propose ni ajout manuel d'affirmations, ni export de données depuis l'interface. Il présente les vues Vue générale, Affirmations, Responsables, Comparatif des faits et Méthodologie.

Le tableau comparatif affiche des **effectifs par type de conclusion**, pas un classement ou une note de sincérité des personnes. Les petits échantillons, non représentatifs, ne permettent pas de comparer la fiabilité personnelle.

Les catégories « Confirmé », « À nuancer », « Contredit », « Indéterminé », « À vérifier » s'appliquent uniquement aux affirmations factuelles, et non aux intentions, promesses ou opinions.

## Mise à jour

Hébergement statique GitHub Pages sur `main`. Une veille quotidienne recherche les nouvelles déclarations, vérifie les sources puis tente de synchroniser les fichiers du dépôt ; cette tâche ne garantit ni l'exhaustivité ni une publication automatique en cas d'indisponibilité de GitHub. Le dépôt et l'historique des modifications restent les sources de vérité.

Références méthodologiques : [EFCSN](https://efcsn.com/code-of-standards/), [Full Fact](https://fullfact.org/about/how-we-fact-check/).
