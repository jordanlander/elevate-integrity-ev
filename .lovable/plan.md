
# Add AI-Generated Professional Images to Service Pages

## Overview

Add professional, AI-generated images to each of the 5 service pages to make them more visually appealing and engaging. The images will be displayed prominently in the hero section of each page.

---

## Approach

Since the project doesn't have Supabase/Lovable Cloud connected, I'll use the Nano banana model (google/gemini-2.5-flash-image-preview) through an edge function approach. However, since you prefer not to use Supabase, I'll take an alternative approach:

**Recommended Approach**: Generate static images upfront and save them to the project. This avoids the need for runtime image generation and keeps the site fast.

---

## Implementation Plan

### Step 1: Update ServicePageLayout to Display Hero Image

Modify the hero section to show an image alongside the text content when a `heroImage` prop is provided.

**File**: `src/components/ServicePageLayout.tsx`

**Changes**:
- Restructure the hero section to a 2-column layout on desktop
- Left column: existing text content (title, subtitle, badges, buttons)
- Right column: professional service image with styling
- Add smooth fade-in animation and shadow effects
- Make the image responsive (stacked on mobile, side-by-side on desktop)

### Step 2: Add heroImage Prop to Each Service Page

Add the `heroImage` prop to all 5 service pages with appropriate image paths:

| Service Page | Image Description |
|--------------|------------------|
| Tesla Powerwall | Tesla Powerwall battery unit installed on a home exterior wall |
| Residential EV Charging | Modern home garage with Tesla Wall Connector and electric car |
| Commercial EV Charging | Commercial parking lot with multiple EV charging stations |
| Electrical Panel Upgrades | Modern 200A electrical panel with clean wiring |
| General Electrical | Professional electrician working with modern electrical equipment |

**Files to update**:
- `src/pages/services/TeslaPowerwall.tsx`
- `src/pages/services/ResidentialEvCharging.tsx`
- `src/pages/services/CommercialEvCharging.tsx`
- `src/pages/services/ElectricalPanelUpgrades.tsx`
- `src/pages/services/GeneralElectrical.tsx`

---

## Visual Layout

```
DESKTOP VIEW:
+--------------------------------------------------+
| HERO SECTION (gradient background)               |
| +----------------------+ +---------------------+ |
| | Badge                | |                     | |
| | Hero Title           | |   [Professional     | |
| | Hero Subtitle        | |    Service Image]   | |
| | Trust Badges         | |                     | |
| | [CTA Buttons]        | |                     | |
| +----------------------+ +---------------------+ |
+--------------------------------------------------+

MOBILE VIEW:
+------------------------+
| Badge                  |
| Hero Title             |
| Hero Subtitle          |
| [Service Image]        |
| Trust Badges           |
| [CTA Buttons]          |
+------------------------+
```

---

## Image Generation

I will generate 5 professional images using AI (Gemini image generation) with prompts tailored to each service:

1. **Tesla Powerwall**: "Professional photo of Tesla Powerwall 3 battery unit installed on a clean white garage wall, modern home setting, high quality, realistic"

2. **Residential EV Charging**: "Professional photo of a Tesla Wall Connector EV charger installed in a modern home garage, electric car plugged in charging, clean installation, high quality"

3. **Commercial EV Charging**: "Professional photo of commercial EV charging stations in a modern parking lot, multiple ChargePoint or Tesla Supercharger units, business setting, high quality"

4. **Electrical Panel Upgrades**: "Professional photo of a modern 200-amp electrical panel with clean organized wiring, circuit breakers labeled, electrical work, high quality"

5. **General Electrical**: "Professional photo of a licensed electrician in safety gear working on electrical installation, modern equipment, clean work environment, high quality"

---

## Technical Details

### ServicePageLayout Changes

```tsx
// In hero section, add grid layout:
<div className="container mx-auto px-4 pt-12 relative z-10">
  <div className="grid lg:grid-cols-2 gap-8 items-center">
    {/* Left column: existing content */}
    <div className="max-w-xl">
      {/* breadcrumb, badge, title, subtitle, trust badges, buttons */}
    </div>
    
    {/* Right column: image */}
    {heroImage && (
      <div className="hidden lg:block">
        <img 
          src={heroImage} 
          alt={title}
          className="rounded-2xl shadow-2xl"
        />
      </div>
    )}
  </div>
</div>
```

---

## Files to Change

| File | Changes |
|------|---------|
| `src/components/ServicePageLayout.tsx` | Add 2-column hero layout with image display |
| `src/pages/services/TeslaPowerwall.tsx` | Add `heroImage` prop |
| `src/pages/services/ResidentialEvCharging.tsx` | Add `heroImage` prop |
| `src/pages/services/CommercialEvCharging.tsx` | Add `heroImage` prop |
| `src/pages/services/ElectricalPanelUpgrades.tsx` | Add `heroImage` prop |
| `src/pages/services/GeneralElectrical.tsx` | Add `heroImage` prop |
| `public/images/services/` | Add 5 AI-generated images (new directory) |

---

## Result

After implementation:
- Each service page will have a professional, relevant image in the hero section
- Images will be displayed on desktop screens alongside the hero text
- On mobile, the layout stacks naturally for good user experience
- The visual appeal of service pages will be significantly improved
- Images will load fast since they're static assets
