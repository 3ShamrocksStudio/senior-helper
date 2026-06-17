# עזרה (Ezra) — Concept

> A plain-Hebrew digital helper for older people.
> **Name "Ezra" / "עזרה" is PROVISIONAL** — pending a proper naming / trademark check.
> Built by 3Shamrocks Studio. © 2026.

---

## 1. The problem

Many older Hebrew-speaking adults are locked out of everyday digital life — not because
they *can't* learn, but because interfaces are small, fast, English-leaning, and
unforgiving. The result is dependence ("wait till my grandson visits"), missed
appointments and bills, and real exposure to scams that prey on uncertainty.

Most "senior tech help" today is either a person on the phone (doesn't scale, not
always available) or a generic tutorial (too abstract, not in the moment, not in plain
Hebrew). The gap is a **patient, always-available, dignified guide** that speaks plainly
and never makes you feel stupid.

## 2. The product (vision)

A warm assistant that helps a senior do a simple online task in one of two modes:

- **🧭 GUIDE ME** — walks the person through the task step-by-step, in plain warm Hebrew,
  with big visuals and read-aloud. The person stays in control and does each tap
  themselves, learning as they go. *(This PoC.)*
- **🤲 DO IT FOR ME** — *(future, careful phase)* the assistant performs the task on the
  person's behalf with their consent and family oversight. **Not built here** — see §5.

The tone is the product as much as the function: reassuring, unhurried, never
condescending. "Let's do this together" — not "here's a tutorial."

## 3. What this PoC actually is (scope)

This proof-of-concept demonstrates **GUIDE-ME mode only**, and it **simulates** every
step — it does NOT touch any real account, send any real message, or move any money.
It is a faithful demo of the *guidance experience*, not a working automation tool.

**Included:**
- Big, high-contrast, senior-first UI — very large text, large touch targets (≥64px),
  generous spacing, simple icons, Hebrew-first RTL, light (low-glare) background, plus a
  dark mode. Three live text-size levels.
- A warm home screen — **"?במה אפשר לעזור"** — with six big common-task cards:
  WhatsApp message · video-call family · read/reply to email · check/pay a bill ·
  book a doctor appointment · fill a form.
- Per-task **step-by-step guided walkthroughs** in plain Hebrew, with simulated
  on-screen mock visuals, a progress bar, and back/next at the person's own pace.
- **Voice:** read-aloud (TTS, Hebrew voice when the browser/OS provides one) on every
  step; optional **voice input** ("just tell me what you need") that matches spoken
  Hebrew keywords to a task. **Honest fallbacks** when the browser blocks or lacks voice.
- A simulated **"family helper"** concept — store one trusted relative on-device and
  "ask them for help" from any step (demo only; nothing is actually sent).
- **Gentle scam-safety education** woven into the flows (the bill and email walkthroughs
  carry "stop and check" warnings) plus a standing safety tip on the home screen.

**Tech / standard:**
- Single self-contained `index.html` (HTML+CSS+JS, no dependencies, no build step).
- `localStorage` only for preferences (text size, dark mode, voice on/off, the family
  helper, completed-task count). No accounts, no network calls, no tracking.
- No `eval`, user text escaped before injection, sanitized rendering.
- Responsive desktop + mobile; verified for no element overlaps; WCAG-AAA-leaning
  contrast and visible focus styles.
- Product name lives in **one swappable config** (`BRAND` near the top of the script) so
  renaming the whole app is a one-line change.

## 4. Accessibility notes

- Base text 20px scaling to ~27px+ via the on-screen A/א control; line-height 1.6.
- Color contrast targets AAA (ink-on-paper ≈ 14:1; brand and accent buttons use white
  text on dark fills). Both light and dark themes checked.
- Touch/click targets ≥ 64px. `:focus-visible` rings throughout. `prefers-reduced-motion`
  honored. Semantic landmarks, ARIA labels, `aria-live` on step changes and hints.
- Voice is **additive**, never required — every instruction is always on screen in text.

## 5. The real "DO IT FOR ME" + scam-protection phase (what it needs)

This is deliberately **not** in the PoC. Doing it responsibly requires:

**Consent & control**
- Explicit, per-task, revocable consent. Clear "the assistant is about to do X" preview
  and a hard confirm before any irreversible action (send, pay, submit).
- A real **family-oversight** layer: a trusted relative can be notified, can review, and
  can be required to co-approve sensitive actions (payments, sharing personal data).

**Security & privacy**
- Credentials must **never** be handled by the assistant in plain text. Use the device's
  own credential/password manager and platform auth (passkeys, OS autofill); the senior
  approves sign-in in the trusted system UI, the assistant never sees the secret.
- Never enter card/bank numbers, passwords, codes, or government IDs on the user's behalf.
- Minimal data, on-device first, encrypted; clear retention and deletion.

**Scam protection (the high-value part)**
- Active detection of pressure/urgency, requests for codes/passwords/remote-access, and
  unfamiliar payees — surfaced as a calm "let's pause and check" with one-tap loop-in of
  the family helper.
- Verified directories for real institutions (banks, kupot, utilities) so the assistant
  routes to the *real* site, never a link from an SMS/email.
- A short, friendly safety curriculum the person absorbs by doing.

**Safety engineering**
- Treat every link/instruction from email/SMS/web as untrusted by default; humans confirm
  side-effectful and outward-facing actions.
- Audit log of assistant actions the family can review.

**Trust & quality**
- Hebrew TTS/voice quality matters a lot here — invest in a natural Hebrew voice.
- Co-design and usability testing **with actual older users**, iterating on pace, wording,
  and reassurance.

---

*עזרה / Ezra is an early concept by 3Shamrocks Studio. The name is provisional.*
