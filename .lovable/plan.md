

# Fix Hash Navigation to Contact Form

## Problem

When clicking CTA buttons (like "Get Free Estimate"), the page navigates to the home page (`/`) but doesn't scroll down to the contact form section. This happens because React Router's `Link` component with hash (`/#contact`) navigates to the route but doesn't automatically handle scrolling to anchor elements.

---

## Solution

Add a custom scroll-to-hash handler that runs when the page loads or when the URL hash changes. This will ensure that whenever someone navigates to `/#contact`, the page automatically scrolls to the contact form.

---

## Implementation

### Option: Create a ScrollToHash Component

Create a reusable component that handles hash-based scrolling and add it to the App.

**New file: `src/components/ScrollToHash.tsx`**

This component will:
1. Listen for location changes (including hash changes)
2. When a hash is present in the URL (like `#contact`), find that element and scroll to it
3. Handle a small delay to ensure the page has rendered before scrolling

```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to ensure page has rendered
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1)); // Remove # from hash
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Scroll to top when navigating to a page without hash
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
```

**Update: `src/App.tsx`**

Add the ScrollToHash component inside BrowserRouter so it can access the location:

```tsx
import ScrollToHash from "@/components/ScrollToHash";

// Inside the BrowserRouter, add:
<BrowserRouter>
  <ScrollToHash />
  <Routes>
    ...
  </Routes>
</BrowserRouter>
```

---

## Files to Change

| File | Change |
|------|--------|
| `src/components/ScrollToHash.tsx` | **NEW** - Create component to handle hash scrolling |
| `src/App.tsx` | Add `ScrollToHash` component inside `BrowserRouter` |

---

## How It Works

1. User clicks "Get Free Estimate" button on a service page
2. React Router navigates to `/#contact`
3. The `ScrollToHash` component detects the hash change
4. After a brief delay (100ms) to let the page render, it finds the element with `id="contact"` and smoothly scrolls to it
5. The contact form is now visible and ready for the user to fill out

---

## Result

After this fix:
- All CTA buttons on service pages will navigate to the home page AND scroll to the contact form
- The mobile "Free Estimate" button will work from any page
- UTM tracking for JCLander LLC will continue to work as implemented
- Smooth scrolling animation provides a polished user experience

