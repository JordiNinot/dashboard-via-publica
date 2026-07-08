// whatsapp.mjs — Trasto Petit WhatsApp Bot
// Twilio webhook → Gemini API → Twilio REST API response
// Suporta modificació de fitxers HTML/CSS/JS via GitHub API
// Memòria de conversa per usuari via Netlify Blobs

import { getStore } from '@netlify/blobs';

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
const GITHUB_API = 'https://api.github.com/repos/JordiNinot/taulerarqui/contents';
const MAX_HISTORY = 20; // màxim missatges a recordar (10 intercanvis)

const SYSTEM_PROMPT = `Ets el Trasto Petit, l'assistent personal del Jordi Ninot de Sabadell (Catalunya).
Ajudes amb qualsevol tasca: cerques, fitxers, dades, CSVs, codi, redaccions, preguntes diverses.

MEMÒRIA: Tens accés a les converses anteriors amb aquest usuari. Usa el context per donar respostes coherents i continuar fils de conversa oberts. Si l'usuari fa referència a alguna cosa anterior, recorda-ho.

FITXERS QUE POTS MODIFICAR al web de taulerarqui:
- index.html (pàgina principal)
- app.html (aplicació)
- visor_terrasses_ds.html (visor terrasses)
- styles.css (estils globals)

NORMES:
- Contesta SEMPRE en català (o en l'idioma en que t'escriguin).
- Via WhatsApp sigues concís: màxim 3 paràgrafs.
- Usa text plà sense markdown (WhatsApp no renderitza **negreta** ni # headers).
- Si la petició implica modificar un d'aquests fitxers, respon ÚNICAMENT amb aquest JSON exacte (sense cap text addicional):
  {"action":"modify","file":"NOM_FITXER","instruction":"INSTRUCCIO_DETALLADA_EN_CATALA"}
- Si cal accés a fitxers del Mac que no siguin els del web, avisa que s'ha de fer des del Cowork.
`;

const EDITOR_PROMPT = `Ets un editor de codi expert. L'usuari et donarà el contingut actual d'un fitxer i una instrucció de modificació.
Retorna ÚNICAMENT el contingut complet i correcte del fitxer modificat, sense cap explicació, sense markdown, sense cap caràcter fora del codi.`;

// ── Memòria de conversa ──────────────────────────────────────────────────────

function historyKey(from) {
  return 'wa_' + from.replace(/[^a-zA-Z0-9]/g, '_');
}

async function getHistory(from) {
  try {
    const store = getStore('trasto-history');
    const data = await store.get(historyKey(from), { type: 'json' });
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function saveHistory(from, history) {
  try {
    const store = getStore('trasto-history');
    const trimmed = history.slice(-MAX_HISTORY);
    await store.set(historyKey(from), JSON.stringify(trimmed));
  } catch (e) {
    console.error('[trasto-wa] history save error:', e.message);
  }
}

async function clearHistory(from) {
  try {
    const store = getStore('trasto-history');
    await store.delete(historyKey(from));
  } catch { /* no passa res */ }
}

// ── Gemini ───────────────────────────────────────────────────────────────────

async function callGemini(systemPrompt, history, userMessage, maxTokens = 800) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('GEMINI_API_KEY no configurada a Netlify.');

  const contents = [
    ...history,
    { role: 'user', parts: [{ text: userMessage }] }
  ];

  const res = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: systemPrompt }] },
      contents,
      generationConfig: { temperature: 0.7, maxOutputTokens: maxTokens, topP: 0.9 }
    })
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini API ${res.status}: ${err.substring(0, 200)}`);
  }

  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? 'No he pogut generar una resposta.';
}

// ── GitHub ───────────────────────────────────────────────────────────────────

async function getGithubFile(filename, token) {
  const res = await fetch(`${GITHUB_API}/${filename}`, {
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Trasto-Petit-Bot'
    }
  });
  if (!res.ok) throw new Error(`GitHub GET ${filename}: ${res.status} ${res.statusText}`);
  const data = await res.json();
  const content = atob(data.content.replace(/\n/g, ''));
  return { content, sha: data.sha };
}

async function commitGithubFile(filename, content, sha, token) {
  const encoded = btoa(unescape(encodeURIComponent(content)));
  const res = await fetch(`${GITHUB_API}/${filename}`, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      'User-Agent': 'Trasto-Petit-Bot'
    },
    body: JSON.stringify({
      message: `Trasto Petit: modifica ${filename} via WhatsApp`,
      content: encoded,
      sha: sha
    })
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GitHub PUT ${filename}: ${res.status} ${err.substring(0, 200)}`);
  }
  return await res.json();
}

// ── Twilio REST API ──────────────────────────────────────────────────────────

async function sendWhatsApp(to, message) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM;

  if (!accountSid || !authToken || !from) {
    console.error('[trasto-wa] Twilio credentials not configured');
    return;
  }

  // Partir missatges llargs en trossos de 1500 chars
  const MAX = 1500;
  const parts = [];
  let remaining = message.trim();
  while (remaining.length > MAX) {
    let cutAt = remaining.lastIndexOf('\n\n', MAX);
    if (cutAt < MAX * 0.6) cutAt = remaining.lastIndexOf('\n', MAX);
    if (cutAt < MAX * 0.6) cutAt = MAX;
    parts.push(remaining.substring(0, cutAt).trim());
    remaining = remaining.substring(cutAt).trim();
  }
  if (remaining) parts.push(remaining);

  for (const part of parts) {
    const res = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa(accountSid + ':' + authToken),
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({ From: from, To: to, Body: part }).toString()
      }
    );
    if (!res.ok) {
      const err = await res.text();
      console.error(`[trasto-wa] Twilio send error ${res.status}: ${err.substring(0, 200)}`);
    }
  }
}

function emptyTwiml() {
  return new Response(
    '<?xml version="1.0" encoding="UTF-8"?><Response/>',
    { status: 200, headers: { 'Content-Type': 'text/xml; charset=utf-8' } }
  );
}

// ── Handler principal ────────────────────────────────────────────────────────

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const bodyText = await req.text();
    const params = new URLSearchParams(bodyText);
    const from = params.get('From') || 'unknown';
    const body = params.get('Body') || '';

    console.log(`[trasto-wa] From: ${from} | "${body.substring(0, 80)}"`);

    if (!body.trim()) {
      await sendWhatsApp(from, 'Hola! Soc el Trasto Petit. Escriu-me el que necessites i t\'ajudare!');
      return emptyTwiml();
    }

    // Comanda de reset de memòria
    const bodyUpper = body.trim().toUpperCase();
    if (bodyUpper === 'RESET' || bodyUpper === 'OBLIDAR' || bodyUpper === 'NOVA CONVERSA') {
      await clearHistory(from);
      await sendWhatsApp(from, '✅ Memòria esborrada. Comencem de nou!');
      return emptyTwiml();
    }

    // Carregar historial de conversa
    const history = await getHistory(from);
    console.log(`[trasto-wa] Historial: ${history.length} missatges`);

    // Fase 1: classificar intencio (tokens curts, per detectar JSON)
    const phase1Response = await callGemini(SYSTEM_PROMPT, history, body, 150);

    // Intentar parsejar com a JSON d'accio
    let parsed = null;
    try {
      const jsonMatch = phase1Response.match(/\{[\s\S]*\}/);
      if (jsonMatch) parsed = JSON.parse(jsonMatch[0]);
    } catch (e) { /* no es JSON, resposta normal */ }

    // Resposta de text normal (no acció)
    if (!parsed?.action) {
      const fullResponse = await callGemini(SYSTEM_PROMPT, history, body, 2000);

      // Desar a l'historial
      const newHistory = [
        ...history,
        { role: 'user', parts: [{ text: body }] },
        { role: 'model', parts: [{ text: fullResponse }] }
      ];
      await saveHistory(from, newHistory);
      await sendWhatsApp(from, fullResponse);
      return emptyTwiml();
    }

    // Acció: modificar fitxer
    if (parsed?.action === 'modify' && parsed?.file && parsed?.instruction) {
      const githubToken = process.env.GITHUB_TOKEN;
      if (!githubToken) {
        await sendWhatsApp(from, 'Error: GITHUB_TOKEN no configurada. Demana al Jordi que l\'afegeixi a Netlify.');
        return emptyTwiml();
      }

      const filename = parsed.file;
      const instruction = parsed.instruction;
      const allowedFiles = ['index.html', 'app.html', 'visor_terrasses_ds.html', 'styles.css'];

      if (!allowedFiles.includes(filename)) {
        await sendWhatsApp(from, `No tinc permisos per modificar "${filename}". Fitxers permesos: ${allowedFiles.join(', ')}.`);
        return emptyTwiml();
      }

      console.log(`[trasto-wa] Modificant ${filename}: ${instruction.substring(0, 80)}`);

      // Llegir fitxer actual de GitHub
      const { content: currentContent, sha } = await getGithubFile(filename, githubToken);

      // Fase 2: Gemini edita el fitxer (sense historial, és una tasca directa)
      const newContent = await callGemini(EDITOR_PROMPT, [], `FITXER: ${filename}\nINSTRUCCIO: ${instruction}\n\nCONTINGUT ACTUAL:\n${currentContent}`, 8000);

      // Netejar possible markdown de Gemini
      const cleanContent = newContent
        .replace(/^```[\w]*\n?/, '')
        .replace(/\n?```$/, '')
        .trim();

      // Commitejar a GitHub
      await commitGithubFile(filename, cleanContent, sha, githubToken);

      const successMsg = `✅ ${filename} modificat i publicat! Els canvis es desplegaran a Netlify en uns segons.\n\nCanvi: ${instruction.substring(0, 150)}`;

      // Desar a l'historial
      const newHistory = [
        ...history,
        { role: 'user', parts: [{ text: body }] },
        { role: 'model', parts: [{ text: successMsg }] }
      ];
      await saveHistory(from, newHistory);
      await sendWhatsApp(from, successMsg);
      return emptyTwiml();
    }

    // Fallback: resposta normal
    const finalResponse = await callGemini(SYSTEM_PROMPT, history, body, 2000);
    const newHistory = [
      ...history,
      { role: 'user', parts: [{ text: body }] },
      { role: 'model', parts: [{ text: finalResponse }] }
    ];
    await saveHistory(from, newHistory);
    await sendWhatsApp(from, finalResponse);
    return emptyTwiml();

  } catch (err) {
    console.error('[trasto-wa] Error:', err.message);
    await sendWhatsApp(from, `Error: ${err.message.substring(0, 150)}. Prova-ho de nou.`).catch(() => {});
    return emptyTwiml();
  }
}

export const config = { path: '/api/whatsapp' };
