# עזרה — Ezra

A **lean proof-of-concept** for a plain-Hebrew digital helper for older people.
It guides Hebrew-speaking seniors through simple computer/online tasks **step-by-step**,
in warm, plain Hebrew, with big text, big buttons, read-aloud, and gentle scam-safety.

> ⚠️ The name **"Ezra" / "עזרה" is provisional** — pending a naming / trademark check.

## Live demo

**https://3shamrocksstudio.github.io/senior-helper/**

## What it is (and isn't)

- ✅ **GUIDE-ME mode only.** Every step is **simulated** — a faithful demo of the guidance
  experience. It does **not** touch real accounts, send real messages, or move any money.
- 🚫 The "do-it-for-me" automation is a later, careful phase. See [`CONCEPT.md`](CONCEPT.md).

## Features

- Six big common-task cards: WhatsApp · video call · email · pay a bill · book a doctor ·
  fill a form — each with a friendly, paced walkthrough.
- Senior-first UI: very large text (3 sizes), high-contrast light + dark themes,
  ≥64px touch targets, Hebrew-first RTL, simple icons, WCAG-AAA-leaning contrast.
- Voice: Hebrew read-aloud on every step + optional voice input, with honest fallbacks.
- Simulated "family helper" (one trusted relative, on-device).
- Scam-safety education woven into the bill and email flows.

## Tech

- Single self-contained `index.html` — no dependencies, no build, no network calls.
- `localStorage` for preferences only. No accounts, no tracking. No `eval`; user input escaped.
- Product name lives in one swappable `BRAND` config at the top of the script.

## Run locally

```bash
cd Senior-Helper
python3 -m http.server 4187
# open http://localhost:4187
```

---

© 2026 **3Shamrocks Studio**. All rights reserved.
