
# Fix Blank Page on Refresh for All Pages

## Problem

When refreshing any page on the production site (especially nested routes like `/services/general-electrical`), the page goes blank. This affects:

- All 5 service pages (`/services/*`)
- Privacy Policy (`/privacy-policy`)
- Terms of Service (`/terms-of-service`)
- Sitemap (`/sitemap`)

## Root Cause

The `vite.config.ts` currently has `base: "./"` which generates **relative paths** for assets:

```html
<script type="module" src="./assets/index-abc123.js"></script>
```

When you're on a nested route like `/services/general-electrical` and refresh:
1. The browser requests `/services/general-electrical`
2. GitHub Pages serves the `404.html` which redirects to `/`
3. The `index.html` loads with relative paths
4. The browser tries to load `./assets/index.js` relative to the **current URL**
5. This resolves to `/services/assets/index.js` which doesn't exist
6. The JavaScript never loads, leaving a blank page

## Solution

Change `base` from `"./"` to `"/"` to use **absolute paths**:

```html
<script type="module" src="/assets/index-abc123.js"></script>
```

This ensures assets are always loaded from the root, regardless of the current URL path.

---

## Implementation

### Step 1: Update Vite Configuration

**File**: `vite.config.ts`

Change line 8 from:
```typescript
base: "./",
```

To:
```typescript
base: "/",
```

---

## Files to Change

| File | Change |
|------|--------|
| `vite.config.ts` | Change `base` from `"./"` to `"/"` |

---

## Pages This Fixes

After this single change, all pages will work correctly on refresh:

| Route | Status |
|-------|--------|
| `/` | Will work |
| `/privacy-policy` | Will work |
| `/terms-of-service` | Will work |
| `/sitemap` | Will work |
| `/services/residential-ev-charging` | Will work |
| `/services/commercial-ev-charging` | Will work |
| `/services/tesla-powerwall` | Will work |
| `/services/electrical-panel-upgrades` | Will work |
| `/services/general-electrical` | Will work |

---

## After Deployment

Once this change is pushed:
1. GitHub Actions will automatically build and deploy
2. The new build will use absolute paths for all assets
3. Combined with the existing `404.html` SPA redirect, all pages will load correctly on refresh
4. Direct links to any page will work properly
