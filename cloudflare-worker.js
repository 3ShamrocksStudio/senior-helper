/**
 * עֶזְרָא / Ezra — free server-side AI proxy (Cloudflare Worker).
 *
 * Holds Dave's FREE Google Gemini key SERVER-SIDE so the app can use real AI
 * WITHOUT ever exposing a key or asking the (senior) user for anything.
 *
 * The Ezra web app POSTs a Gemini request body to this Worker; the Worker
 * injects the key and forwards it to Google, then returns Gemini's response.
 *
 * ── ONE-TIME SETUP (free, ~3 minutes, no billing) ────────────────────────
 * 1. Get a free Gemini key: https://aistudio.google.com  →  "Get API key".
 * 2. Create a free Cloudflare account: https://dash.cloudflare.com
 * 3. Workers & Pages → Create → Worker → paste this file → Deploy.
 * 4. The Worker → Settings → Variables and Secrets → add a SECRET named
 *      GEMINI_KEY   = <your AIza… key>
 *    (Use "Encrypt"/Secret so it's never visible.)
 * 5. Copy the Worker URL (e.g. https://ezra-ai.<you>.workers.dev).
 * 6. In index.html set:  var PROXY_URL = "https://ezra-ai.<you>.workers.dev";
 *    commit + push. Done — Ezra now uses real AI, invisibly, for free.
 *
 * If you never do this, Ezra still works great on its built-in on-device brain.
 * ─────────────────────────────────────────────────────────────────────────
 */

const MODEL = "gemini-2.0-flash";
// Lock this to the live site so the key can't be borrowed by other sites:
const ALLOWED_ORIGIN = "https://3shamrocksstudio.github.io";

export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "content-type",
    };
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST") return new Response("POST only", { status: 405, headers: cors });
    if (!env.GEMINI_KEY) return new Response("Missing GEMINI_KEY secret", { status: 500, headers: cors });

    let body;
    try { body = await request.text(); } catch (_) { return new Response("bad body", { status: 400, headers: cors }); }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${env.GEMINI_KEY}`;
    const upstream = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body,
    });

    const text = await upstream.text();
    return new Response(text, {
      status: upstream.status,
      headers: { ...cors, "content-type": "application/json" },
    });
  },
};
