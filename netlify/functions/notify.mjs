// netlify/functions/notify.mjs
// Outbound Twilio WhatsApp notification
// Required env vars:
//   TWILIO_ACCOUNT_SID  — Twilio Account SID (starts with AC)
//   TWILIO_AUTH_TOKEN   — Twilio Auth Token
//   TWILIO_FROM         — Twilio WhatsApp sender, e.g. whatsapp:+14155238886
//   NOTIFY_TO           — Your WhatsApp number, e.g. whatsapp:+34612345678

export default async (req) => {
  // Only accept POST
  if (req.method !== 'POST' && req.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 });
  }

  const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM, NOTIFY_TO } = process.env;

  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_FROM || !NOTIFY_TO) {
    return new Response(
      JSON.stringify({ error: 'Missing Twilio env vars. Set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM, NOTIFY_TO in Netlify.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Parse optional message from body or use default
  let body = {};
  try {
    const text = await req.text();
    if (text) body = JSON.parse(text);
  } catch (_) {}

  const message = body.message || '✅ Acció completada a Via Pública · Eines Tècniques';

  // Call Twilio Messages API
  const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`;
  const credentials = btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`);

  const form = new URLSearchParams();
  form.set('From', TWILIO_FROM);
  form.set('To', NOTIFY_TO);
  form.set('Body', message);

  const twilioRes = await fetch(twilioUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: form.toString(),
  });

  const twilioData = await twilioRes.json();

  if (!twilioRes.ok) {
    return new Response(
      JSON.stringify({ error: twilioData.message || 'Twilio error', code: twilioData.code }),
      { status: 502, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return new Response(
    JSON.stringify({ ok: true, sid: twilioData.sid, status: twilioData.status }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};

export const config = { path: '/api/notify' };
