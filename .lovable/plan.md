

# Update Meta Descriptions to Reflect Full Service Range

## Problem
Similar to the titles, several meta descriptions focus too heavily on EV charging and don't mention the broader electrical services. Google displays roughly 150-160 characters for meta descriptions, so each should be concise, keyword-rich, and reflect the full scope of services where appropriate.

## Current vs. Proposed Descriptions

### 1. Homepage (index.html + src/pages/Index.tsx)

**index.html `<meta name="description">`:**
Current: "Professional EV charger installation in Georgia. Fast, certified, rebate-ready installations by licensed electricians. Serving Atlanta & Northern Georgia. Get your free estimate today!" (183 chars -- too long, EV-only focus)

Proposed: "Licensed electrician in Georgia offering EV charger installation, generators, panel upgrades, Tesla Powerwall, and full electrical services. Free estimates!" (155 chars)

**index.html `og:description`:**
Current: "Licensed electricians providing fast, certified EV charger installations across Georgia. Rebate assistance included. Get your free estimate!"

Proposed: "Licensed electricians in Georgia. EV chargers, generators, Tesla Powerwall, panel upgrades, and full electrical services. Free estimates!" (136 chars)

**index.html `twitter:description`:**
Current: "Licensed electricians providing fast, certified EV charger installations across Georgia. Rebate assistance included."

Proposed: Same as the new og:description above.

**src/pages/Index.tsx SEO component:**
Current: "Professional EV charger installation in Georgia. Fast, certified, rebate-ready installations by licensed electricians. Serving Atlanta & Northern Georgia. Get your free estimate today!"

Proposed: "Licensed electrician in Georgia offering EV charger installation, generators, panel upgrades, Tesla Powerwall, and full electrical services. Free estimates!"

### 2. Residential EV Charging

Current: "Professional Level 2 EV charger installation for homes in Atlanta and Georgia. Tesla Wall Connector certified. Rebate assistance included. Free estimates!" (155 chars)

Proposed: No change needed -- already well-scoped for its service page and under the limit.

### 3. Commercial EV Charging

Current: "Professional commercial EV charging installation for businesses, apartments, and fleets in Georgia. DC fast chargers, load management, and scalable solutions." (158 chars)

Proposed: No change needed -- already well-scoped and near the limit.

### 4. General Electrical

Current: "Licensed electrical services in Atlanta and Georgia. Outlets, lighting, repairs, surge protection, and safety inspections. 24/7 emergency service available." (155 chars)

Proposed: No change needed -- already well-scoped and under the limit.

### 5. Electrical Panel Upgrades

Current: "Professional electrical panel upgrades in Atlanta and Georgia. EV-ready panels, 200A upgrades, smart breakers. Licensed electricians. Free estimates!" (148 chars)

Proposed: No change needed -- already well-scoped.

### 6. Tesla Powerwall

Current: "Certified Tesla Powerwall installer in Georgia. Home battery backup, solar integration, and energy independence. Professional installation with warranty." (153 chars)

Proposed: No change needed -- already well-scoped.

### 7. Generator Installation

Current: "Professional generator installation in Atlanta and Georgia. Whole-home backup power, automatic transfer switches, and maintenance. Licensed electricians. Free estimates!" (169 chars -- slightly over limit)

Proposed: "Generator installation in Georgia. Whole-home backup power, automatic transfer switches, and maintenance by licensed electricians. Free estimates!" (145 chars)

### 8. index.html `<meta name="keywords">`

Current: "EV charger installation, electric vehicle charging, Tesla charger, Level 2 charger, Atlanta electrician, Georgia EV installation, residential charging, commercial charging"

Proposed: "electrician Georgia, EV charger installation, generator installation, Tesla Powerwall, electrical panel upgrade, Atlanta electrician, licensed electrician, electrical services Georgia"

## Summary of Files to Update

| File | What Changes |
|------|-------------|
| `index.html` | `description`, `og:description`, `twitter:description`, `keywords` meta tags |
| `src/pages/Index.tsx` | SEO component `description` prop |
| `src/pages/services/GeneratorInstallation.tsx` | `metaDescription` prop (trim length) |

The remaining service pages, legal pages, and sitemap page already have well-scoped descriptions that don't need changes.

