## Goal
Replace the misleading single "Send Request" button (which silently opens a mailto draft) with an explicit, honest lead flow: clearly labeled email-app, copy-details, and call/text options — so no UI implies a real server submit that isn't happening. Add a source-code note so future edits don't reintroduce the disguised-submit pattern.

## Why
The current button says "Send Request" but performs `window.location.href = mailto:...`. To a visitor that looks like a normal form post; it's actually opening their email client. That mismatch is the regression you flagged. The fix is to make the mechanism obvious in the button labels and helper text, not hidden behind a generic CTA.

## Changes (all in `src/components/ContactForm.tsx`)

### 1. Restore explicit action buttons
Replace the single "Send Request" button with clearly named actions:
- **"Open Email to Send"** — opens the user's email app with the estimate pre-filled (the existing mailto). Label states what it does.
- **"Copy Request Details"** — copies the formatted summary to clipboard for manual paste.
- **"Call or Text {phone}"** — direct `tel:` action using `useTrackingPhone`.

### 2. Honest helper text
Add a short, plain notice above the actions: this form doesn't submit to a server — it prepares your request to send by email, copy, or phone. (Honest version of the note that was removed, no "fake submit".)

### 3. Keep validation + post-action helper
- Keep zod validation gating all actions.
- Keep the "ready to send / copy / call" helper block with the readonly summary textarea as the reliable fallback.

### 4. Source-code guard note
Add a clear comment block at the top of the submit/actions section, e.g.:

```text
// INTENTIONAL: This form has NO backend submit. Actions must stay explicit
// (Open Email / Copy / Call) and clearly labeled. Do NOT relabel these as a
// generic "Send"/"Submit" button that implies a server submission — that
// misleads visitors. If a real backend is added, wire it up explicitly first.
```

### 5. Revert the dark redesign? (your call)
The dark "high-tech" section is a separate change. I can keep it or revert the section back to the lighter styling — tell me which. The button-flow fix above is independent of the color theme.

## What stays the same
All fields, zod validation, `useTrackingPhone` DNI, UTM capture, contact cards, and the no-Supabase architecture.

## Verify
Reload `#contact`, confirm: button labels state exactly what they do, email-app action opens a pre-filled draft, copy works, call/text works, and validation blocks empty/invalid forms.