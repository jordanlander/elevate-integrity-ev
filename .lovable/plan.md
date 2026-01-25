

# Add Generator Install Page and Update Content

## Overview

This plan addresses three requests from the owner:
1. Add a new Generator Installation service page
2. Update residential EV charger install time to 1-3 hours
3. Replace all "Georgia Power" references with "local EMC"

---

## 1. Replace "Georgia Power" with "Local EMC"

Found 4 occurrences across 3 files:

### File: `src/pages/services/ResidentialEvCharging.tsx`
**Line 66** - FAQ answer about rebates:
- Change: "Georgia Power offers rebates..." 
- To: "Your local EMC offers rebates..."

### File: `src/pages/services/ElectricalPanelUpgrades.tsx`
**Line 42** - Process step description:
- Change: "...coordinate with Georgia Power for any required..."
- To: "...coordinate with your local EMC for any required..."

**Line 60** - FAQ answer about panel upgrade time:
- Change: "...service upgrade from Georgia Power is required..."
- To: "...service upgrade from your local EMC is required..."

### File: `src/pages/services/CommercialEvCharging.tsx`
**Line 71** - FAQ answer about commercial rebates:
- Change: "Georgia Power and federal programs..."
- To: "Your local EMC and federal programs..."

---

## 2. Update Residential EV Charger Install Time

### File: `src/pages/services/ResidentialEvCharging.tsx`
**Line 56** - FAQ answer about installation time:
- Change: "Most residential installations are completed in 2-4 hours."
- To: "Most residential installations are completed in 1-3 hours."

---

## 3. Create Generator Installation Service Page

### New File: `src/pages/services/GeneratorInstallation.tsx`

Create a new service page following the existing pattern with:

**Page Content:**
- **Title**: Generator Installation
- **Meta Title**: Generator Installation Atlanta | Whole-Home Backup Power | Integrity EV
- **Meta Description**: Professional generator installation in Atlanta and Georgia. Whole-home backup power, automatic transfer switches, and maintenance. Licensed electricians. Free estimates!
- **Hero Title**: Generator Installation
- **Hero Subtitle**: Keep your home powered during outages with professional whole-home generator installation.
- **Badge**: Backup Power Experts

**Benefits:**
- Whole-home standby generators
- Portable generator hookups
- Automatic transfer switches
- Load management for critical circuits
- Propane and natural gas options
- Permit handling and inspections
- Maintenance and service plans
- 24/7 emergency repairs

**Certifications:**
- Licensed Georgia Electrician
- Generac Authorized Dealer (or similar - to confirm with owner)
- Insured and Bonded
- Georgia License #EN217457

**Process:**
1. Free Consultation - Assess power needs, fuel options, and placement
2. Professional Installation - Install generator, transfer switch, and fuel connections
3. Testing and Training - Test full system and walk through operation

**FAQs:**
- How long does generator installation take?
- What size generator do I need?
- Do I need a permit?
- How does an automatic transfer switch work?
- What fuel type should I choose?

**Related Services:**
- Panel Upgrades
- General Electrical
- Tesla Powerwall

**Note:** A hero image will be needed. Options:
- Use a placeholder initially
- Owner can provide a generator installation photo
- Use the general-electrical.jpg as temporary fallback

---

## 4. Add Route to App.tsx

Add new route for the generator installation page:

```tsx
import GeneratorInstallation from "./pages/services/GeneratorInstallation";

// Add route:
<Route path="/services/generator-installation" element={<GeneratorInstallation />} />
```

---

## 5. Update Navigation Menu

### File: `src/components/Navigation.tsx`

Add Generator Installation to the serviceItems array:

```tsx
const serviceItems = [
  { name: "Tesla Powerwall", href: "/services/tesla-powerwall" },
  { name: "Residential EV Charging", href: "/services/residential-ev-charging" },
  { name: "Commercial EV Charging", href: "/services/commercial-ev-charging" },
  { name: "Generator Installation", href: "/services/generator-installation" }, // NEW
  { name: "Panel Upgrades", href: "/services/electrical-panel-upgrades" },
  { name: "General Electrical", href: "/services/general-electrical" },
];
```

---

## 6. Update XML Sitemap

### File: `public/sitemap.xml`

Add new URL entry:

```xml
<url>
  <loc>https://www.integrityevsolutions.com/services/generator-installation</loc>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

---

## 7. Update HTML Sitemap Page

### File: `src/pages/Sitemap.tsx`

Add Generator Installation to the services list:

```tsx
<li>
  <Link className="underline hover:text-accent" to="/services/generator-installation">
    Generator Installation
  </Link>
</li>
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/services/ResidentialEvCharging.tsx` | Change "Georgia Power" to "Your local EMC", update install time to "1-3 hours" |
| `src/pages/services/ElectricalPanelUpgrades.tsx` | Change "Georgia Power" to "your local EMC" (2 places) |
| `src/pages/services/CommercialEvCharging.tsx` | Change "Georgia Power" to "Your local EMC" |
| `src/pages/services/GeneratorInstallation.tsx` | Create new file |
| `src/App.tsx` | Add route for generator installation |
| `src/components/Navigation.tsx` | Add generator to services dropdown |
| `public/sitemap.xml` | Add generator installation URL |
| `src/pages/Sitemap.tsx` | Add generator installation link |

---

## Question for Owner

For the Generator Installation page hero image:
- Do you have a photo of a generator installation you'd like to use?
- If not, I can use a placeholder or the general electrical image temporarily

---

## After Deployment

Once these changes are pushed:
1. The new Generator Installation page will be live
2. All "Georgia Power" references will be updated to "local EMC"
3. Residential EV install time will show 1-3 hours
4. Submit the updated sitemap.xml to Google Search Console for re-indexing

