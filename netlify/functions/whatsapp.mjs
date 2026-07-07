// whatsapp.mjs — Trasto Petit WhatsApp Bot
// Twilio webhook → Gemini API → TwiML response
// Usa GEMINI_API_KEY (ja configurada a Netlify)

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

const SYSTEM_PROMPT = `Ets el Trasto Petit, l'assistent personal del Jordi Ninot de Sabadell (Catalunya).
Ajudes amb qualsevol tasca: cerques, fitxers, dades, CSVs, codi, redaccions, preguntes diverses.

NORMES:
- Contesta SEMPRE en català (o en l'idioma en que t'escriguin).
- Via WhatsApp sigues concís: màxim 3 paràgrafs.
- Usa text plà sense markdown (WhatsApp no renderitza **negreta** ni # headers).
- Si cal accés directe als fitxers del Mac, avisa que s'ha de fer des del Cowork.
`;

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

async function callGemini(userMessage) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return 'Error: GEMINI_API_KEY no configurada a Netlify.';
  }

  const res = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        role: 'user',
        parts: [{ text: SYSTEM_PROMPT + '\n\nMissatge de l\'usuari: ' + userMessage }]
      }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 800,
        topP: 0.9
      }
    })
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini API ${res.status}: ${err.substring(0, 200)}`);
  }

  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? 'No he pogut generar una resposta. Prova-ho de nou.';
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

    const reply = await callGemini(body);
    return twimlResponse(reply);

  } catch (err) {
    console.error('[trasto-wa] Error:', err.message);
    return twimlResponse(`Error: ${err.message.substring(0, 100)}. Prova-ho de nou.`);
  }
}

export const config = { path: '/api/whatsapp' };
