// whatsapp.mjs — Trasto Petit WhatsApp Bot
// Twilio webhook → Gemini API → TwiML response
// Suporta modificació de fitxers HTML/CSS/JS via GitHub API

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
const GITHUB_API = 'https://api.github.com/repos/jordininotpie/taulerarqui/contents';

const SYSTEM_PROMPT = `Ets el Trasto Petit, l'assistent personal del Jordi Ninot de Sabadell (Catalunya).
Ajudes amb qualsevol tasca: cerques, fitxers, dades, CSVs, codi, redaccions, preguntes diverses.

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

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function twimlResponse(message) {
  const text = message.length > 1490 ? message.substring(0, 1487) + '...' : message;
  const twiml = `<?xml version="1.0" encoding="UTF-8"?><Response><Message>${escapeXml(text)}</Message></Response>`;
  return new Response(twiml, {
    status: 200,
    headers: { 'Content-Type': 'text/xml; charset=utf-8' }
  });
}

async function callGemini(prompt, maxTokens = 800) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('GEMINI_API_KEY no configurada a Netlify.');

  const res = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
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
      return twimlResponse('Hola! Soc el Trasto Petit. Escriu-me el que necessites i t\'ajudare!');
    }

    // Fase 1: classificar intencio
    const phase1Prompt = SYSTEM_PROMPT + '\n\nMissatge de l\'usuari: ' + body;
    const phase1Response = await callGemini(phase1Prompt, 400);

    // Intentar parsejar com a JSON d'accio
    let parsed = null;
    try {
      const jsonMatch = phase1Response.match(/\{[\s\S]*\}/);
      if (jsonMatch) parsed = JSON.parse(jsonMatch[0]);
    } catch (e) { /* no es JSON, resposta normal */ }

    if (parsed?.action === 'modify' && parsed?.file && parsed?.instruction) {
      const githubToken = process.env.GITHUB_TOKEN;
      if (!githubToken) {
        return twimlResponse('Error: GITHUB_TOKEN no configurada. Demana al Jordi que l\'afegeixi a Netlify.');
      }

      const filename = parsed.file;
      const instruction = parsed.instruction;
      const allowedFiles = ['index.html', 'app.html', 'visor_terrasses_ds.html', 'styles.css'];

      if (!allowedFiles.includes(filename)) {
        return twimlResponse(`No tinc permisos per modificar "${filename}". Fitxers permesos: ${allowedFiles.join(', ')}.`);
      }

      console.log(`[trasto-wa] Modificant ${filename}: ${instruction.substring(0, 80)}`);

      // Llegir fitxer actual de GitHub
      const { content: currentContent, sha } = await getGithubFile(filename, githubToken);

      // Fase 2: Gemini edita el fitxer
      const phase2Prompt = `${EDITOR_PROMPT}\n\nFITXER: ${filename}\nINSTRUCCIO: ${instruction}\n\nCONTINGUT ACTUAL:\n${currentContent}`;
      const newContent = await callGemini(phase2Prompt, 8000);

      // Netejar possible markdown de Gemini
      const cleanContent = newContent
        .replace(/^```[\w]*\n?/, '')
        .replace(/\n?```$/, '')
        .trim();

      // Commitejar a GitHub
      await commitGithubFile(filename, cleanContent, sha, githubToken);

      return twimlResponse(`✅ ${filename} modificat i publicat! Els canvis es desplegaran a Netlify en uns segons.\n\nCanvi aplicat: ${instruction.substring(0, 150)}`);
    }

    // Resposta de text normal
    return twimlResponse(phase1Response);

  } catch (err) {
    console.error('[trasto-wa] Error:', err.message);
    return twimlResponse(`Error: ${err.message.substring(0, 150)}. Prova-ho de nou.`);
  }
}

export const config = { path: '/api/whatsapp' };
