# עֶזְרָא (Ezra) — Concept

> A Hebrew-first **agentic** helper for older adults — it doesn't just explain, it **does it for you**.
> **Name is Hebrew-first: עֶזְרָא leads; Latin "EZRA" is secondary.** Official brand: the EZRA
> connection-mark + wordmark, electric blue `#005cff` + dark navy `#041933`.
> Built by 3Shamrocks Studio. © 2026.

---

## 1. The problem

Many older Hebrew-speaking adults are locked out of everyday digital life — not because
they *can't* learn, but because interfaces are small, fast, English-leaning, and
unforgiving. The result is dependence ("wait till my grandson visits"), missed
appointments and bills, and real exposure to scams that prey on uncertainty.

Most "senior tech help" today is either a person on the phone (doesn't scale, not
always available) or a generic tutorial (too abstract, not in the moment, not in plain
Hebrew). A *tutorial* still leaves all the work — and all the anxiety — on the person.
The real gap is a **capable assistant that can actually do the thing for them**, in plain
Hebrew, while quietly teaching them along the way.

## 2. The product (vision) — an assistant that acts, not just instructs

**עֶזְרָא is an agent.** Its core promise: **the person does as little as possible and learns
as much as possible.** Where a tutorial says *"here are 6 steps, now you do them,"* עֶזְרָא
says *"leave it to me — I've done it for you,"* and then shows, in one warm line, what it
did so the person grows more confident each time.

Two complementary modes, with the **agentic mode as the heart of the product**:

- **🤲 עֶזְרָא עושָׂה את זה (Ezra does it for you)** — *(the core)* the assistant performs the
  task on the person's behalf: it finds the right app/site, fetches the exact link or
  access they need, completes the setup steps it safely can, fills the form, makes the
  connection, and reports back **"עשיתי לך — מוכן"** ("done — it's ready") with one-tap
  access to the result. The person taps **once** to approve; עֶזְרָא does the rest.
- **🧭 עֶזְרָא מראָה לי (Ezra shows me / do-it-with-me)** — for anyone who'd rather learn by
  doing, the same task as a calm, big-text, read-aloud walkthrough they tap through
  themselves. Always one tap away from "just do it for me."

The tone is the product as much as the function: reassuring, unhurried, never
condescending, and **never makes the person feel they failed for not knowing.**

### The signature flow — "connect this to that"

The clearest demonstration of agency: the person **photographs two items** (e.g. new
wireless headphones and their phone) and asks *"how do I connect these?"* עֶזְרָא:
1. **Recognises both items** and names them in plain Hebrew.
2. **Explains simply** what's about to happen (so it's never a black box).
3. **Does the work** — opens the right settings, pairs the devices, completes the
   connection on the person's behalf.
4. **Closes the loop** — *"חיברתי לך את האוזניות לטלפון ✓"* ("I connected your headphones
   to your phone"), with a one-tap **"נסו עכשיו"** ("try it now"), a short **"מה עשיתי
   בשבילך"** ("what I did for you") transparency list, and the option to loop in family.

## 3. What this concept demonstrates

- **Hebrew-first, senior-first UI** — very large text, large touch targets (≥64px),
  generous spacing, simple icons, RTL, high-contrast light theme (+ dark), three text
  sizes. The **Hebrew name עֶזְרָא leads** everywhere; Latin EZRA is secondary chrome.
- A warm home screen — greeting where **עֶזְרָא speaks first** — with big common-task cards
  (WhatsApp · video-call family · email · check/pay a bill · doctor appointment · the
  camera "what is this / connect this to that") and a speak-or-type bar.
- **Agentic task completion**, not just walkthroughs: a clear **"עֶזְרָא is doing it for you →
  done, here's the result"** experience, with progress the person can watch, a one-tap
  result, and a plain-Hebrew summary of what was done.
- The **camera "connect this to that"** flow that ends in עֶזְרָא *acting*: identify → explain
  → **set it up for you** → one-tap access + direct link.
- **Conversation** that resolves in action: ask in Hebrew (speak or type) → עֶזְרָא does it →
  *"שלחתי בשבילך ✓"* ("I sent it for you"), not "here's step 1 of 4."
- **Voice** read-aloud + voice input as additive, with honest fallbacks.
- **Family oversight + gentle scam-safety** woven throughout (see §5).

## 4. Accessibility notes

- Base text 20px scaling to ~27px+ via the on-screen A/א control; line-height 1.6.
- Color contrast targets AAA. Brand actions use white text on `#005cff`; ink is `#041933`
  on light surfaces. Both light and dark themes checked.
- Touch/click targets ≥ 64px. `:focus-visible` rings throughout. `prefers-reduced-motion`
  honored. Semantic landmarks, ARIA labels, `aria-live` on state changes.
- Voice is **additive**, never required — every action and result is always on screen in text.

## 5. Doing this responsibly — the guardrails the agentic product requires

Acting on a vulnerable person's behalf is the high-value *and* high-responsibility part.
It is the product, so these are **requirements, not afterthoughts**:

**Consent & control**
- Explicit, per-task, revocable consent. A clear **"עֶזְרָא is about to do X"** preview and a
  single, unmissable confirm before any irreversible action (send, pay, submit, share).
- **Family-oversight layer**: a trusted relative can be notified, can review an audit log,
  and can be *required* to co-approve sensitive actions (payments, sharing personal data).

**Security & privacy**
- Credentials are **never** handled by the assistant in plain text. Use the device's own
  credential manager / platform auth (passkeys, OS autofill); the person approves sign-in
  in the trusted system UI — עֶזְרָא never sees the secret.
- Never enter card/bank numbers, passwords, codes, or government IDs on the user's behalf.
- Minimal data, on-device first, encrypted; clear retention and deletion; a **Reset** that
  erases everything.

**Scam protection (built into agency)**
- Active detection of pressure/urgency, requests for codes/passwords/remote-access, and
  unfamiliar payees — surfaced as a calm "let's pause and check" with one-tap family loop-in.
- Verified directories for real institutions (banks, kupot, utilities) so עֶזְרָא routes to
  the *real* site, never a link from an SMS/email. Every external link/instruction is
  treated as untrusted until verified.

**Trust & quality**
- A natural Hebrew voice; co-design and usability testing **with actual older users**.
- An **audit log** of every action עֶזְרָא took, in plain Hebrew, that the person and family
  can review — so "done for you" is always transparent, never a black box.

> The PoC simulates the acting (no real accounts, money, or messages move) to demonstrate
> the *experience* of an assistant that does the work for you. Real agency ships only behind
> the §5 guardrails.

---

*עֶזְרָא / Ezra — a Hebrew-first agentic concept by 3Shamrocks Studio. © 2026.*
