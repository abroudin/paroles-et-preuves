# Paroles & preuves

Observatoire documentaire public des affirmations factuelles de responsables politiques français.

**Site :** https://abroudin.github.io/paroles-et-preuves/

## Corpus du 22 novembre 2026

- 50 profils : 40 candidatures annoncées, 7 envisagées ou conditionnelles et 3 responsables institutionnels. Il ne s'agit pas de la liste officielle définitive des candidats à la présidentielle 2027.
- 29 affirmations publiques recensées, dont 17 concernant 15 candidats ou personnalités pressenties et 12 concernant Emmanuel Macron, Sébastien Lecornu et Laurent Nuñez.
- Analyses préliminaires fondées sur les sources indiquées dans les fiches, non validées indépendamment par une rédaction. Certaines déclarations restent à vérifier.
- 32 portraits provenant de Wikimedia Commons. Le nom du fichier et le lien vers sa fiche (auteur, crédit, licence) sont associés à chaque profil concerné. Pour les autres profils, les initiales restent affichées.

Fichiers de données : [`data/people.json`](data/people.json) et [`data/claims.json`](data/claims.json).

## Interface

Le site est **en consultation uniquement** : aucun formulaire d'ajout ou de modification de verdict, aucun bouton d'import ou d'export de données.

Pages :
- Vue générale ;
- Affirmations, recherche et filtres ;
- Responsables politiques, avec portrait et source du statut de candidature ;
- Comparatif des faits, donnant le nombre de déclarations étudiées et les effectifs par conclusion ;
- Méthodologie.

Le tableau comparatif ne classe pas les personnes par « honnêteté ». Les déclarations recensées ne forment ni un inventaire exhaustif ni un échantillon homogène ; les résultats ne permettent donc pas de mesurer la fiabilité individuelle des responsables, et encore moins une intention de mentir.

## Statuts des affirmations

- **Confirmé** : le fait examiné est corroboré par les éléments cités ;
- **À nuancer** : le contexte, le champ ou les dates restreignent la portée de l'énoncé ;
- **Contredit** : les éléments cités contredisent l'affirmation ;
- **Indéterminé** : les sources ne permettent pas de trancher ;
- **À vérifier** : vérification non menée à son terme.

Ces descriptions portent sur les propositions factuelles, pas sur l'intégrité des personnes.

## Sources et licences des portraits

Les portraits ne sont pas intégrés au dépôt. Ils sont affichés depuis Wikimedia Commons, en fonction de l'accessibilité des fichiers et sous réserve de leur disponibilité. Les fiches de crédits et licences sont accessibles depuis les profils et sont répertoriées dans `data/people.json` dans le champ `photoSource`.

**Attention aux licences :** les conditions varient selon l'image (CC BY, CC BY-SA, CC0, etc.). Les crédits complets et obligations éventuelles d'attribution sont détaillés sur la page Wikimedia Commons de chaque fichier.

## Déploiement et mise à jour

Page statique (HTML, CSS et JavaScript), hébergée via GitHub Pages à partir de la branche `main`.

Les déclarations et les profils sont initialisés directement dans `index.html`, en cohérence avec les fichiers JSON publics. Il n'y a ni collecte automatique ni recherche documentaire en temps réel. Chaque mise à jour publique nécessite une modification du code et des fichiers de données, avec contrôle des sources.

Sources méthodologiques : [European Fact-Checking Standards Network](https://efcsn.com/code-of-standards/) et [Full Fact](https://fullfact.org/about/how-we-fact-check/).
