

# DNI Fix: Harden SPA Fallback and Query Parameter Handling

## What's changing (and what's NOT)

**NOT touched:** All SEO elements -- meta tags, structured data/schema, canonical URLs, sitemap, robots.txt, Open Graph, tracking pixels. Zero changes.

**Changed:** Only the SPA redirect plumbing (3 files) to ensure `?src=fbj` survives the GitHub Pages 404-redirect cycle.

---

## Root Cause

When someone visits `integrityevsolutions.com/?src=fbj`, GitHub Pages serves `404.html` which stores the path+query in `sessionStorage` and redirects to `/`. Then `index.html` restores the URL via `history.replaceState`. However, this restore happens *before* React mounts, and the timing/format can cause `useSearchParams()` to miss the `?src=` parameter -- so the hook falls back to the default phone number.

## Changes

### 1. `public/404.html` -- Store redirect data as structured JSON

Instead of concatenating path+search+hash into one string, store them as a namespaced JSON object with a timestamp. This makes restore logic precise and avoids accidental query loss.

### 2. `index.html` -- Smarter restore logic (lines 6-13 only)

Update the bootstrap script to:
- Read the new namespaced key (`spa_redirect_v1`)
- Only restore if fresh (within 30 seconds, prevents stale redirects)
- Preserve any query params already on the current URL (so direct visits with `?src=` are never overwritten)
- Clear storage after use
- Fall back gracefully if old-format `sessionStorage.redirect` is present (backward compat during rollout)

### 3. `src/hooks/use-tracking-phone.ts` -- Add `window.location.search` fallback

Add a secondary parse of `window.location.search` as a safety net in case `useSearchParams()` returns empty (which can happen if `replaceState` fires at an awkward time relative to React Router hydration). Also adds optional debug logging behind `?debug_dni=1`.

## Risk Assessment

- **SEO impact:** None. No HTML structure, meta tags, or schema changes.
- **404 fallback regression:** None. The redirect-to-root mechanism is preserved; only the storage format is improved.
- **Backward compatibility:** Old `sessionStorage.redirect` format is handled as a fallback during the transition.

## Verification Steps

After GitHub Pages deploys:
1. Incognito tab: `integrityevsolutions.com/?src=fbj` -- should show `(470) 688-3436`
2. Incognito tab: `integrityevsolutions.com/?src=igj` -- should show `(470) 634-1457`
3. Test deep link: `integrityevsolutions.com/services/tesla-powerwall?src=fbj` -- should route correctly AND show tracking number
4. Test bare URL: `integrityevsolutions.com` -- should show default `(470) 262-2660`
5. Debug mode: `integrityevsolutions.com/?src=fbj&debug_dni=1` -- open console to see resolution log

