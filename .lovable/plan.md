## Goal

Make the preview match commit `014b23f` ("Use professional native FormSubmit estimate form" by jordanlander/Codex), and stop the drift caused by my earlier edits.

## What I found

Comparing `014b23f` to the current working tree, **only one file differs**:

- `src/components/ContactForm.tsx`

Everything else (Hero, theme, navigation, services, etc.) already matches `014b23f`. My previous turn reverted the form to an older version (`ef29fee`) — that was the wrong target. The correct target is `014b23f`.

The `014b23f` version of the form is the professional native FormSubmit version:
- Posts to FormSubmit (`https://formsubmit.co/integrityevsolutions@gmail.com`)
- Submit button: "Send Secure Estimate Request"
- Backup options: "Copy Details" and "Call or Text" (mailto / phone)
- Trust badges: No obligation / Free estimate / 24-hour response

## Plan

1. Restore `src/components/ContactForm.tsx` to its exact contents from commit `014b23f` (`git show 014b23f:src/components/ContactForm.tsx`).
2. Verify the working tree then has zero diff against `014b23f` (excluding `.lovable/` internal files), so the preview is byte-identical to the Codex commit.
3. Confirm the build is clean and the form renders in the preview.

## Not touched

- No theme, Hero, navigation, or copy changes.
- No deploy workflow / README changes in this step (they don't affect the preview).
- No Supabase, tracking, or DNI changes.
