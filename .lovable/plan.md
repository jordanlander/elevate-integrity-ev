

# Optimize Tab Titles to Reflect Full Service Range

## Problem
The homepage title ("Professional EV Charger Installation | Integrity EV Solutions | Georgia") focuses exclusively on EV chargers, but the business provides a full range of electrical services including generators, panel upgrades, Tesla Powerwall, and general electrical work.

All titles also exceed Google's 55-60 character display limit.

## Changes

### 1. Homepage (index.html + src/pages/Index.tsx)

**Before:** `Professional EV Charger Installation | Integrity EV Solutions | Georgia` (70 chars)
**After:** `Electrician & EV Solutions Georgia | Integrity EV Solutions` (58 chars)

- Leads with "Electrician" to capture the broader service identity
- "EV Solutions" matches the brand name and covers charging
- Stays under 60 characters
- Updates in both `index.html` (`<title>`, `og:title`, `twitter:title`) and the SEO component in `Index.tsx`

### 2. Service Pages -- Consistent Pattern: `[Service] Georgia | Integrity EV Solutions`

| Page | New Title | Chars |
|------|-----------|-------|
| Residential EV | `Home EV Charger Installation | Integrity EV Solutions` | 54 |
| Commercial EV | `Commercial EV Charging | Integrity EV Solutions` | 48 |
| General Electrical | `Electrical Services Georgia | Integrity EV Solutions` | 53 |
| Panel Upgrades | `Electrical Panel Upgrades | Integrity EV Solutions` | 51 |
| Tesla Powerwall | `Tesla Powerwall Installation | Integrity EV Solutions` | 54 |
| Generator | `Generator Installation Georgia | Integrity EV Solutions` | 55 |

### 3. Legal/Utility Pages (no changes needed)
`Privacy Policy | Integrity EV Solutions` and `Terms of Service | Integrity EV Solutions` are already clean and short.

## Technical Details

Files to update:
- **`index.html`** -- `<title>`, `og:title`, and `twitter:title` meta tags
- **`src/pages/Index.tsx`** -- SEO component `title` prop
- **`src/pages/services/ResidentialEvCharging.tsx`** -- `metaTitle` prop
- **`src/pages/services/CommercialEvCharging.tsx`** -- `metaTitle` prop
- **`src/pages/services/GeneralElectrical.tsx`** -- `metaTitle` prop
- **`src/pages/services/ElectricalPanelUpgrades.tsx`** -- `metaTitle` prop
- **`src/pages/services/TeslaPowerwall.tsx`** -- `metaTitle` prop
- **`src/pages/services/GeneratorInstallation.tsx`** -- `metaTitle` prop
