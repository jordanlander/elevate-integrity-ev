

# CTA Fixes and Lead Tracking for JCLander LLC

## Overview

This plan will:
1. Fix all service page CTAs to link directly to the main contact form
2. Add lead tracking so you can prove which leads came from your referrals and get your 15%

---

## Your Referral Links

Once implemented, share these links when promoting the business:

**Main Link:**
```
https://www.integrityevsolutions.com/?utm_source=JCLander_LLC&utm_medium=referral&utm_campaign=promo
```

**For specific channels, use different campaigns:**
- **Facebook:** `?utm_source=JCLander_LLC&utm_medium=social&utm_campaign=facebook`
- **Instagram:** `?utm_source=JCLander_LLC&utm_medium=social&utm_campaign=instagram`
- **Business Card:** `?utm_source=JCLander_LLC&utm_medium=print&utm_campaign=business_card`
- **Word of Mouth:** `?utm_source=JCLander_LLC&utm_medium=referral&utm_campaign=word_of_mouth`

Every form submission from these links will include "JCLander_LLC" as the source, so the business owner can see exactly which leads you brought in.

---

## Part 1: Fix CTA Buttons

### Issue 1: Hero "Get Free Estimate" Button (Service Pages)
**Current:** Scrolls to a banner at the bottom of the same service page
**Fix:** Navigate directly to `/#contact` on the main page

### Issue 2: Mobile "Free Estimate" Button
**Current:** Uses `#contact` which only works on the home page
**Fix:** Change to `/#contact` so it works from any page

---

## Part 2: Lead Source Tracking

### How It Works
1. Visitor clicks your referral link
2. The contact form captures the UTM parameters from the URL
3. Parameters are stored in browser storage (persist even if user navigates around)
4. When they submit the form, the lead source is included in the email notification
5. Business owner sees "Lead Source: JCLander_LLC" and knows you get 15%

---

## Technical Implementation

### File 1: `src/components/ServicePageLayout.tsx`

**Change (lines 110-121):** Replace the onClick scroll behavior with a Link to the main contact form

```tsx
// Before: onClick scrolls to #contact-cta on same page
<Button
  size="lg"
  className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500..."
  onClick={() =>
    document.getElementById("contact-cta")?.scrollIntoView({ behavior: "smooth" })
  }
>

// After: Link navigates to main page contact form
<Button
  size="lg"
  className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500..."
  asChild
>
  <Link to="/#contact">
    Get Free Estimate
    <ArrowRight className="w-5 h-5 ml-2" />
  </Link>
</Button>
```

### File 2: `src/components/MobileCTA.tsx`

**Change (line 18):** Replace `#contact` with `/#contact` using Link component

```tsx
// Before
<a href="#contact" className="flex-1">

// After
<Link to="/#contact" className="flex-1">
```

### File 3: `src/components/ContactForm.tsx`

**Add UTM capture logic:**

1. Import `useEffect` and `Link` from react-router-dom
2. Add state for UTM parameters
3. Add useEffect to capture UTM params on page load and store in localStorage
4. Include UTM values in form submission

```tsx
// New state
const [utmParams, setUtmParams] = useState({
  utm_source: '',
  utm_medium: '',
  utm_campaign: ''
});

// Capture UTM params on mount
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const captured = {
    utm_source: params.get('utm_source') || localStorage.getItem('utm_source') || '',
    utm_medium: params.get('utm_medium') || localStorage.getItem('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || localStorage.getItem('utm_campaign') || ''
  };
  
  // Store in localStorage so they persist across page navigations
  if (params.get('utm_source')) {
    localStorage.setItem('utm_source', params.get('utm_source')!);
    localStorage.setItem('utm_medium', params.get('utm_medium') || '');
    localStorage.setItem('utm_campaign', params.get('utm_campaign') || '');
  }
  
  setUtmParams(captured);
}, []);

// Include in form submission
body: JSON.stringify({
  ...result.data,
  lead_source: utmParams.utm_source,
  lead_medium: utmParams.utm_medium,
  lead_campaign: utmParams.utm_campaign,
  _captcha: "false",
}),
```

Also add Tesla Powerwall to the service dropdown since it's a primary offering:
```tsx
<SelectItem value="tesla-powerwall">Tesla Powerwall Installation</SelectItem>
```

---

## Summary of Changes

| File | Change |
|------|--------|
| `ServicePageLayout.tsx` | Hero CTA uses `Link` to `/#contact` instead of scrolling |
| `MobileCTA.tsx` | Uses `Link` to `/#contact` (works on all pages) |
| `ContactForm.tsx` | Captures UTM params, stores in localStorage, includes in submissions; adds Tesla Powerwall option |

---

## Result

After implementation:
- All CTAs on all pages take users directly to the contact form
- Your referral links track leads back to **JCLander LLC**
- The business owner's email notifications will include the lead source
- You have proof of which leads you generated for your 15% commission

