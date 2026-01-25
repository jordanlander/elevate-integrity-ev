
# Fix 404 on Page Refresh (SPA Routing for GitHub Pages)

## Problem

When you refresh any service page (like `/services/general-electrical`), you get a 404 error. This happens because:

1. Your app uses client-side routing with React Router
2. Your site is deployed to GitHub Pages
3. When you refresh, the browser requests `/services/general-electrical` from the server
4. GitHub Pages looks for an actual file at that path, doesn't find one, and returns 404
5. The SPA's JavaScript (which handles routing) never gets a chance to load

## Solution

Add a `404.html` fallback that redirects all requests back to the main app. This is a standard workaround for SPAs on GitHub Pages.

---

## How It Works

GitHub Pages serves `404.html` for any path it can't find. We'll create a `404.html` that:
1. Captures the current URL path
2. Redirects to the home page with the path stored in session storage
3. The main app then reads this stored path and navigates to it using React Router

---

## Implementation

### Step 1: Create `public/404.html`

This file captures the URL and redirects to the index page with the path preserved:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      // Single Page App redirect for GitHub Pages
      // Stores the path in sessionStorage and redirects to index
      var pathSegmentsToKeep = 0;
      var l = window.location;
      sessionStorage.redirect = l.pathname.slice(1) + l.search + l.hash;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/'
      );
    </script>
  </head>
  <body>
    Redirecting...
  </body>
</html>
```

### Step 2: Update `index.html`

Add a script in the `<head>` section (before the React app loads) to check for a stored redirect path:

```html
<!-- SPA redirect handler for GitHub Pages -->
<script>
  (function() {
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== '/') {
      window.history.replaceState(null, null, '/' + redirect);
    }
  })();
</script>
```

This script runs before React mounts and restores the original URL, so React Router sees the correct path.

---

## Files to Change

| File | Change |
|------|--------|
| `public/404.html` | Create new file - captures path and redirects to index |
| `index.html` | Add redirect handler script in `<head>` section |

---

## Result

After this fix:
- Refreshing any page (like `/services/general-electrical`) will work correctly
- Direct links to any route will work
- The redirect happens instantly with no visible flicker
- No changes needed to React Router or any components
- Works specifically with GitHub Pages hosting
