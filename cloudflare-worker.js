/**
 * עֶזְרָא / Ezra — Claude AI proxy (Cloudflare Worker)
 * Holds the Anthropic API key server-side. Ezra POSTs here; worker injects key.
 *
 * ONE-TIME SETUP (~3 minutes):
 * 1. dash.cloudflare.com → Workers & Pages → Create → Worker → paste this → Deploy
 * 2. Worker → Settings → Variables and Secrets → add Secret:
 *      ANTHROPIC_KEY = sk-ant-api03-... (your Anthropic key)
 * 3. Copy Worker URL → in index.html set PROXY_URL = "https://ezra-ai.YOUR_NAME.workers.dev"
 * 4. Commit + push. Done. Ezra now runs Claude 3 Haiku — fast, cheap, Hebrew-native.
 */

const MODEL = "claude-haiku-4-5";
const ALLOWED_ORIGIN = "https://3shamrocksstudio.github.io";

export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: cors });
    }

    let body;
    try { body = await request.json(); } catch {
      return new Response("Bad JSON", { status: 400, headers: cors });
    }

    // Build Anthropic request from Ezra payload
    const messages = body.messages || [];
    const system = body.system || `אתה עֶזְרָא, עוזר דיגיטלי חכם וסבלני לאנשים מבוגרים בישראל.
אתה מדבר עברית פשוטה וברורה. אתה מבצע פעולות דיגיטליות בשבילם בצורה ישירה.
כשמישהו מבקש לשלוח הודעה, לחפש מידע, או לבצע פעולה — אתה עושה את זה.
תשובותיך קצרות, חמות, וברורות. לא יותר מ-3 משפטים.`;

    const anthropicPayload = {
      model: MODEL,
      max_tokens: 512,
      system,
      messages: messages.map(m => ({
        role: m.role === "model" ? "assistant" : "user",
        content: m.parts ? m.parts[0].text : (m.content || "")
      }))
    };

    try {
      const upstream = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": env.ANTHROPIC_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify(anthropicPayload),
      });

      const data = await upstream.json();

      // Return in Gemini-compatible format so Ezra needs no changes
      const text = data.content?.[0]?.text || "";
      const geminiCompat = {
        candidates: [{ content: { parts: [{ text }] } }]
      };

      return new Response(JSON.stringify(geminiCompat), {
        status: 200,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: String(e) }), {
        status: 502,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }
  }
};
