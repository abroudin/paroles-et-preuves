#!/usr/bin/env node
// Controle technique. Ne remplace pas la consultation des sources primaires.
import { readFileSync } from 'node:fs';

const read = p => JSON.parse(readFileSync(p, 'utf8'));
const bundle = read('data/claims.json');
const registry = read('data/people.json');
const legacyFile = read('data/legacy-claim-ids.json');
const html = readFileSync('index.html', 'utf8');
const errors = [];
const problem = text => errors.push(text);
const https = u => {
  try { return typeof u === 'string' && new URL(u).protocol === 'https:'; }
  catch { return false; }
};
const hasText = (s, min=1) => typeof s === 'string' && s.trim().length >= min;
const validDate = s => typeof s === 'string' && /^\d{4}(-\d{2}(-\d{2})?)?$/.test(s);
const statuses = new Set(['attente','confirme','nuance','contredit','indetermine']);
const sources = new Set(['original_video','original_audio','original_post','signed_text','signed_statement','direct_interview']);

const seed = html.match(/const SEED=(\[[^\n]*\]);/);
const peopleBlock = html.match(/const PEOPLE=(\[[^\n]*\]);/);
if (!seed || !peopleBlock) {
  console.error('ÉCHEC : données embarquées dans index.html absentes.');
  process.exit(1);
}
let htmlClaims, htmlPeople;
try {
  htmlClaims = JSON.parse(seed[1]);
  htmlPeople = JSON.parse(peopleBlock[1]);
} catch (e) {
  console.error('ÉCHEC : données embarquées illisibles :', e.message);
  process.exit(1);
}
if (JSON.stringify(htmlClaims) !== JSON.stringify(bundle.claims))
  problem('index.html et data/claims.json sont différents');
if (JSON.stringify(htmlPeople) !== JSON.stringify(registry.people))
  problem('index.html et data/people.json sont différents');

const peopleIds = new Set(registry.people.map(p => p.id));
const old = new Map(legacyFile.entries.map(x => [x.id, x.status]));
const seen = new Set();
let fresh = 0;
for (const c of bundle.claims) {
  const id = c.id || '(sans id)';
  const error = issue => problem(id + ' : ' + issue);
  if (!hasText(c.id) || seen.has(c.id)) error('identifiant absent ou répété');
  seen.add(c.id);
  if (!peopleIds.has(c.personId)) error('personne non référencée');
  if (!hasText(c.claim, 12)) error('affirmation absente');
  if (!validDate(c.date)) error('date absente ou invalide');
  if (!statuses.has(c.status)) error('statut inconnu');
  if (!https(c.source)) error('source d’origine non https');
  if (c.status !== 'attente' && !hasText(c.explanation, 35)) error('justification insuffisante');
  if (['confirme','nuance','contredit'].includes(c.status) && ![c.evidence,...(c.evidenceLinks || [])].some(https))
    error('absence de référence probante complémentaire');

  const oldStatus = old.get(c.id);
  // La liste gelée n'authentifie pas les fiches historiques :
  // elle permet uniquement une migration sans les faire passer pour contrôlées.
  const needsAudit = oldStatus === undefined || (oldStatus !== c.status && c.status !== 'attente');
  if (!needsAudit) continue;
  fresh++;
  const a = c.sourceAudit;
  if (!a || typeof a !== 'object') {
    error('nouvelle fiche ou verdict révisé sans sourceAudit');
    continue;
  }
  if (!sources.has(a.sourceType)) error('source primaire non reconnue ou simple retranscription');
  if (!https(a.originalUrl) || a.originalUrl !== c.source)
    error('source originale absente ou incohérente');
  if (a.originalChecked !== true || a.attributionVerified !== true)
    error('consultation et attribution de la source non confirmées');
  if (!validDate(a.checkedAt)) error('date de vérification absente');
  if (!hasText(a.sourceExcerpt, 12)) error('extrait littéral absent');
  if (!hasText(a.verificationMethod, 55)) error('méthode de vérification trop vague');
  if (a.editorialStatus !== 'preliminary') error('mention de statut éditorial absente');
  if (!Array.isArray(a.conflictingSources)) error('contrôle des sources discordantes non renseigné');
  else if (a.conflictingSources.length && c.status !== 'attente')
    error('sources originales contradictoires : verdict interdit');
  if (['original_video','original_audio','direct_interview'].includes(a.sourceType)
    && !/^(?:\d{1,2}:)?\d{1,2}:\d{2}$/.test(a.originalMediaTimestamp || ''))
    error('timecode de la vidéo ou de l’audio absent');
  if (['confirme','nuance','contredit'].includes(c.status)
    && a.independentEvidenceVerified !== true)
    error('verdict sans recoupement indépendant consigné');
}
if (old.size > 0 && legacyFile.entries.some(x => !hasText(x.id) || !statuses.has(x.status)))
  problem('liste historique invalide');
if (errors.length) {
  console.error('ÉCHEC DU CONTRÔLE :');
  for (const error of errors) console.error(' - ' + error);
  process.exit(1);
}
console.log('OK : ' + bundle.claims.length + ' fiches cohérentes, ' + fresh + ' nouvelles ou révisées avec sourceAudit.');
console.log('Attention : vérification automatique des champs seulement. Les sources et le verbatim exigent un contrôle documentaire réel.');
