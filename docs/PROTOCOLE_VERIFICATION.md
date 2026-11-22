# Protocole de vérification des déclarations

Dernière révision : 22 novembre 2026.

## Règle fondamentale : distinguer la déclaration de la transcription

Un site officiel n’est pas une garantie que la retranscription des propos est exacte.
Si un texte attribue une formulation litigieuse à un orateur, **vérifier les paroles dans l’audio ou la vidéo d’origine**, avec un lien et un horodatage. Une publication originale écrite et signée (ou un message sur un compte personnel authentifié) peut prouver l’attribution du propos écrit. Une transcription seule ne suffit pas pour attribuer un lapsus ou une erreur de langage.

**Cas d’école (22/11/2026)** : une retranscription d’un discours de Jean-Luc Mélenchon semblait inverser « SMIG » et « SMIC », tandis qu’une publication du même orateur donnait la chronologie correcte. Le verdict « contredit » avait été publié prématurément. **La fiche a été retirée**. Sans contrôle de la vidéo, ne pas attribuer cette inversion à l’orateur.

## Liste de contrôle avant publication

1. **Identification de la source primaire** : auteur du propos, date réelle, URL directe, contexte et mots exacts. Distinguer discours, entretien, message personnel, texte signé, programme collectif ou commentaire du parti.
2. **Fidélité de l’attribution** : pour les propos oraux, revoir le passage audio/vidéo, consigner l’horodatage et contrôler qu’il ne s’agit pas d’une erreur de retranscription. Une correction visible du même auteur rend la première version suspecte.
3. **Recherche des contradictions** : comparer les autres versions primaires du propos. Si les versions divergent, **suspendre l’attribution litigieuse et le verdict**, et demander un contrôle humain.
4. **Contrôle du fait, distinct de l’attribution** : rechercher une preuve indépendante, dater ses chiffres, vérifier champ, période, dénominateurs, définition et incertitudes. Un communiqué de campagne ne valide pas ses propres statistiques.
5. **Choix de catégorie** : « confirmé », « à nuancer », « contredit » uniquement si les preuves étayent ce jugement. Sinon « indéterminé » pour une affirmation examinée sans preuve concluante ou « à vérifier » si le contrôle reste incomplet.
6. **Pas d’inférence sur l’intention** : aucune note d’honnêteté, aucune interprétation de bonne ou mauvaise foi à partir de la seule exactitude d’une affirmation.
7. **Correction publique** : retirer ou corriger la fiche, dater la correction, conserver une trace explicite et chercher les autres entrées issues de la même source.
8. **Échantillonnage** : ne pas sélectionner uniquement les erreurs d’un responsable. Travailler sur les mêmes critères pour toutes les personnes.

## Métadonnées obligatoires pour les prochaines affirmations

Le champ `sourceAudit` est obligatoire pour chaque **nouvelle entrée** ou changement de verdict d’une entrée historique. Il contient :

```json
{
  "sourceType": "original_video",
  "originalUrl": "https://URL-ORIGINALE",
  "sourceExcerpt": "Extrait exact consulté, sans correction silencieuse.",
  "originalChecked": true,
  "attributionVerified": true,
  "checkedAt": "2026-11-22",
  "originalMediaTimestamp": "01:12:34",
  "conflictingSources": [],
  "verificationMethod": "Décrire l'accès à l'original, le contexte, la méthode et les limites de l'attribution.",
  "independentEvidenceVerified": true,
  "editorialStatus": "preliminary"
}
```

`sourceType` admis : `original_video`, `original_audio`, `original_post`, `signed_text`, `signed_statement`, `direct_interview`. Pour `original_video` ou `original_audio`, l'horodatage est obligatoire. `direct_interview` exige également un passage audio/vidéo et son horodatage lorsqu'il s'agit d'une citation orale.

Si le propos est seulement rapporté par une retranscription non recoupée, il **ne doit pas** être créé comme affirmation attribuée. Si une version originale contredit la retranscription, ne pas publier de verdict avant clarification.

Une conclusion `confirme`, `nuance` ou `contredit` nécessite `independentEvidenceVerified: true` et des sources complémentaires vérifiables. `attente` est préférable en cas de doute.

## Contrôle automatisé

Le script `scripts/validate-claims.mjs` vérifie la cohérence des fichiers, la présence de preuves et la traçabilité des nouvelles entrées. Il ne peut pas établir tout seul qu’une vidéo a réellement été écoutée, qu’une personne est bien l’auteur d’un message ni qu’une statistique est exacte. Ces vérifications restent des actes documentaires.

Le fichier `data/legacy-claim-ids.json` fige les fiches existantes au moment de l’ajout de ce protocole. **Elles ne sont pas considérées comme rétrospectivement validées.** Les reprendre progressivement, en priorité celles qui classent une déclaration « contredite » ou « confirmée ».

L'absence de résultat conforme signifie **aucune publication de verdict**, même si le volume de données progresse moins vite.
