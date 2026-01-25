
# Fix Hero Layout and Prioritize Tesla Services

## Overview
Address two issues: (1) Cody's photo overlapping the "Rebate Assistance" card in the hero section, and (2) reorder services to prioritize Tesla offerings.

## Issue 1: Hero Photo Overlapping Content

### Problem
Cody's photo is positioned with `md:absolute md:bottom-20 md:right-10` which places it directly over the third value proposition card, cutting off "Rebate Assistance" text.

### Solution
Reposition the owner photo to avoid overlap with the value proposition cards. Two options:

**Option A (Recommended)**: Move photo below the CTA buttons in a dedicated row
- Remove absolute positioning
- Place photo in a flex container alongside trust statement
- Creates cleaner visual hierarchy

**Option B**: Adjust absolute positioning to bottom-left or reduce photo size
- Keep absolute positioning but move to a less intrusive location
- May still cause issues on different screen sizes

### Files to Modify
- `src/components/Hero.tsx` - Restructure the owner photo positioning

## Issue 2: Prioritize Tesla Services

### Current Order (Navigation and Services)
1. Residential EV Charging
2. Commercial EV Charging
3. Tesla Powerwall
4. Panel Upgrades
5. General Electrical

### New Order (Tesla First)
1. Tesla Powerwall
2. Residential EV Charging (includes Tesla Wall Connector)
3. Commercial EV Charging
4. Panel Upgrades
5. General Electrical

### Files to Modify
- `src/components/Navigation.tsx` - Reorder `serviceItems` array
- `src/components/Services.tsx` - Reorder services array (optional - currently doesn't show Tesla Powerwall as separate card)

## Implementation Details

### Hero.tsx Changes
Remove the absolute positioning from the owner photo section and integrate it into the main content flow:

```text
Current structure:
- Content Container (centered)
  - Trust badges
  - Headline
  - Value propositions (3 cards)
  - CTA buttons
  - Trust statement
- Owner Photo (absolute positioned, overlapping)

New structure:
- Content Container (centered)
  - Trust badges
  - Headline
  - Value propositions (3 cards)
  - CTA buttons  
  - Trust statement + Owner Photo (side by side or below)
```

### Navigation.tsx Changes
Reorder the `serviceItems` array:

```javascript
const serviceItems = [
  { name: "Tesla Powerwall", href: "/services/tesla-powerwall" },
  { name: "Residential EV Charging", href: "/services/residential-ev-charging" },
  { name: "Commercial EV Charging", href: "/services/commercial-ev-charging" },
  { name: "Panel Upgrades", href: "/services/electrical-panel-upgrades" },
  { name: "General Electrical", href: "/services/general-electrical" },
];
```

## Summary
- Fix the hero layout so Cody's photo doesn't cover content
- Prioritize Tesla Powerwall as the first service in navigation
- Both changes are straightforward CSS/order adjustments
