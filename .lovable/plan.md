
Goal: fix the DNI number swap so `?src=` is reliably captured on GitHub Pages, even when the 404 fallback flow or prerendered HTML timing interferes.

What I found:
- The current fix correctly hardens `public/404.html`, `index.html`, and `useTrackingPhone`.
- But the restore logic still depends on an inline script in `index.html`.
- On GitHub Pages + prerendered output, inline bootstrap timing/presence can be brittle, which can leave the app at `/` without restored query params, causing fallback to default `470-262-2660`.

Proposed implementation (next edit pass):
1) Move redirect restore into JS runtime before React mounts
- File: `src/main.tsx`
- Add a tiny `restoreSpaRedirect()` function that runs before `createRoot(...)`.
- It will:
  - read `sessionStorage.spa_redirect_v1`
  - validate JSON + 30s TTL
  - merge restored params with current URL params
  - apply `history.replaceState(...)`
  - clear consumed storage key
- Keep backward compatibility for `sessionStorage.redirect`, but only apply it when safe (no existing query params), to avoid stale overwrite.

2) Keep `index.html` script, but make it defensive/no-op-safe
- File: `index.html`
- Keep current logic for non-JS edge cases, but align behavior with `main.tsx` bootstrap so both paths are consistent.
- Add guard so legacy redirect cannot override an existing `?src=` on direct visits.

3) Make DNI hook resilient to alternate param locations
- File: `src/hooks/use-tracking-phone.ts`
- Expand source extraction priority:
  1. `useSearchParams().get("src")`
  2. `window.location.search`
  3. (safety) parse `window.location.href` once
  4. localStorage fallback
- Keep `debug_dni=1` logs.
- Keep existing map/default behavior unchanged.

4) Add a tiny normalization helper for `src`
- In `use-tracking-phone.ts`, normalize incoming values (trim/lowercase) before lookup.
- This prevents misses from common ad URL formatting variants.

5) Preserve SEO/schema unchanged
- No changes to meta tags, canonical, JSON-LD schema, sitemap, robots, OG/Twitter cards.
- Only runtime URL restoration + DNI resolution logic changes.

Validation plan after deploy:
1. Root visit with source:
- `https://www.integrityevsolutions.com/?src=fbj`
- Expected: tracking number for `fbj`.
2. Deep-link 404 flow:
- `https://www.integrityevsolutions.com/services/tesla-powerwall?src=fbj`
- Expected: page route restored + tracking number preserved.
3. Alternate source:
- `...?src=igj` returns mapped IG number.
4. No source:
- bare domain returns default number.
5. Debug check:
- `...?src=fbj&debug_dni=1` logs resolved source + selected number in console.

Technical notes:
- This approach removes dependence on head-inline script timing by enforcing restoration in application bootstrap (`main.tsx`), which always runs when React runs.
- It is backward compatible and safer against stale legacy session keys.
- It does not affect indexing or Search Console optimization because rendered content metadata/schema is untouched.
