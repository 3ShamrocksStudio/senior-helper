# Ezra — turning on real AI (one-time, free, ~3 minutes)

**You don't have to do this for Ezra to work.** Out of the box, Ezra answers with a
built-in on-device brain — Hebrew-first, warm, and genuinely useful (help menu,
scam-safety, task guidance, time/date, accessibility, emotional support, and every
"do it for you" task flow). **Users never see or enter anything technical, ever.**

This upgrade adds Google Gemini so Ezra can also **understand photos** (the camera
"מה זה?") and hold **open-ended conversations**. The key lives **server-side** in a
free Cloudflare Worker — the senior user never sees it.

## Steps (all free, no credit card, no billing)

1. **Free Gemini key** — go to <https://aistudio.google.com> → **"Get API key"** → copy it (starts with `AIza…`).
2. **Free Cloudflare account** — <https://dash.cloudflare.com>.
3. **Create the Worker** — Workers & Pages → **Create** → **Worker** → paste the contents of [`cloudflare-worker.js`](cloudflare-worker.js) → **Deploy**.
4. **Add the key as a secret** — open the Worker → **Settings → Variables and Secrets** → add:
   - Name: `GEMINI_KEY`
   - Value: your `AIza…` key
   - Type: **Secret / Encrypt**
5. **Copy the Worker URL** — e.g. `https://ezra-ai.yourname.workers.dev`.
6. **Point Ezra at it** — in [`index.html`](index.html), set:
   ```js
   var PROXY_URL = "https://ezra-ai.yourname.workers.dev";
   ```
   Commit + push. GitHub Pages redeploys, and Ezra now uses real AI — **invisibly, for free.**

## Notes
- **No spend, ever.** Gemini's free tier and Cloudflare Workers' free tier both cost $0.
- **The key is never in the app or the repo** — only inside the Worker's secret store.
- The Worker is locked to the live site origin (`ALLOWED_ORIGIN` in the file), so the key can't be borrowed by other sites. Change that constant if you host Ezra elsewhere.
- If the free daily quota is ever hit, Ezra silently falls back to the on-device brain — the user never sees an error.

© 2026 3Shamrocks Studio.
