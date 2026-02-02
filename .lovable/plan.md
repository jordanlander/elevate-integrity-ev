
# Homepage Trust Signal Reorganization Plan

## Summary
Restructure the homepage hero section to lead with trust signals (your photo + reviews) as the primary visual element, remove/deprioritize the value proposition cards, and ensure service photos are the immediate next section.

---

## Proposed New Layout

### Current Hero Flow:
```text
Badges --> Headline --> Value Cards --> CTAs --> Owner Photo + Reviews
```

### New Hero Flow:
```text
Owner Photo + Reviews --> Headline --> CTAs
```

---

## Detailed Changes

### 1. Elevate Trust Signal (Owner Photo + Reviews)

Move the owner photo block from the bottom of the hero to the **top**, right after the trust badges but before the main headline. This creates immediate personal connection.

**New structure:**
- Trust badges (Licensed & Insured, Tesla Certified, etc.) - keep as subtle indicators
- **Owner photo + star rating + customer count** - prominent, centered
- Main headline ("Professional EV Charger Installation")
- Subheading with rebate mention
- CTA buttons

### 2. Remove Value Proposition Cards

Remove the 3 cards (Fast Installation, Certified & Safe, Rebate Assistance) from the hero section entirely. The information is already communicated through:
- Trust badges at the top
- The "rebate-ready" callout in the subheading
- The services section details

This declutters the hero and speeds up the path to seeing your work.

### 3. Page Flow After Changes

1. **Hero** - Owner photo + reviews first, then headline + CTAs
2. **WorkShowcase** (unchanged) - Service photos immediately visible after hero
3. **Services** - Detailed service cards
4. **Testimonials** - More reviews and stats
5. **Contact Form**
6. **Footer**

---

## Technical Details

### File Modified: `src/components/Hero.tsx`

**Changes:**
1. Move the owner photo block (lines 128-153) to appear earlier in the component, right after the trust badges
2. Delete the value proposition cards grid (lines 72-103) - the entire 3-card section
3. Adjust animation delays for remaining elements

### Visual Enhancement

The owner photo section will be enhanced with:
- Larger photo size on desktop for better visibility
- Star rating and customer count more prominently displayed
- Smooth fade-in animation as the first content element

---

## Expected Result

When visitors land on the page:
1. First they see **your photo with the 5-star rating and 47+ satisfied customers** - building immediate trust
2. Then the **main headline** reinforces what you do
3. **CTA buttons** are directly accessible
4. **Scrolling down** immediately shows the work showcase photos

This creates a clear trust-first hierarchy: "Here's who I am, here's what I do, here's my work."
