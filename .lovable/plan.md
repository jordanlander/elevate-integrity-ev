

# Dynamic Number Insertion (DNI) — React-Native Implementation

## What This Does
Swaps the visible phone number across the entire site based on a `?src=` URL parameter, so each ad channel gets its own trackable number for attribution.

| `?src=` param | Number shown | Channel |
|---|---|---|
| *(none/default)* | 470-262-2660 | Organic / Google Ads |
| `fbj` | 470-688-3436 | Facebook Ads |
| `igj` | 470-634-1457 | Instagram Ads |
| `radioj` | 470-613-9714 | Radio |
| `printj` | 470-256-6974 | Print |
| `jordan` | 470-517-6159 | Website / Jordan |

## Implementation Steps

### 1. Create `useTrackingPhone` hook
New file: `src/hooks/use-tracking-phone.ts`

- Reads `?src=` from the URL on mount
- If found, saves the source to `localStorage` so the number persists across SPA navigations and return visits
- Returns `{ display, href }` — e.g. `{ display: "(470) 688-3436", href: "tel:4706883436" }`
- Falls back to the default number if no source is found

### 2. Update 6 components to use the hook

Replace every hardcoded phone number with the hook's return values:

- **Navigation.tsx** — 2 spots (desktop header + mobile menu)
- **Footer.tsx** — 1 spot (contact section)
- **MobileCTA.tsx** — 1 spot (sticky bottom bar)
- **ContactForm.tsx** — 3 spots (call/text card value, call action, emergency line button)
- **Services.tsx** — 1 spot (emergency CTA button)
- **ServicePageLayout.tsx** — 2 spots (sidebar + bottom CTA)

### 3. Leave structured data alone
The JSON-LD schema in `index.html` keeps the canonical business number (`+1-470-262-2660`) for SEO — only visible/clickable elements swap.

## Why This Approach Over Vanilla JS
React owns the DOM. A vanilla `querySelectorAll` swap runs once on load but gets overwritten whenever React re-renders (page navigation, state changes, etc.). The hook integrates directly into React's lifecycle so the correct number is always rendered.

