
# Comprehensive SEO Enhancement Plan

## Overview

This plan adds proper XML sitemap support, enhances structured data, and improves meta tags across all pages for better search engine visibility.

---

## 1. Create XML Sitemap

**File**: `public/sitemap.xml`

Create a proper XML sitemap that Google Search Console can read:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.integrityevsolutions.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.integrityevsolutions.com/services/residential-ev-charging</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.integrityevsolutions.com/services/commercial-ev-charging</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.integrityevsolutions.com/services/tesla-powerwall</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.integrityevsolutions.com/services/electrical-panel-upgrades</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.integrityevsolutions.com/services/general-electrical</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.integrityevsolutions.com/privacy-policy</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://www.integrityevsolutions.com/terms-of-service</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

---

## 2. Update robots.txt with Sitemap Reference

**File**: `public/robots.txt`

Add sitemap location so crawlers can find it:

```txt
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

Sitemap: https://www.integrityevsolutions.com/sitemap.xml
```

---

## 3. Enhance SEO Component with Full Meta Support

**File**: `src/components/SEO.tsx`

Upgrade to support canonical URLs, Open Graph, and structured data per page:

```tsx
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEO = ({ 
  title, 
  description, 
  canonicalUrl,
  ogImage = "https://storage.googleapis.com/gpt-engineer-file-uploads/gtGoGfp5TFdeN5Cd8MngjemUqJU2/social-images/social-1757547517521-logo.png",
  structuredData
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    updateMeta("description", description);
    
    // Update Open Graph tags
    updateMeta("og:title", title, "property");
    updateMeta("og:description", description, "property");
    updateMeta("og:image", ogImage, "property");
    
    // Update Twitter tags
    updateMeta("twitter:title", title, "property");
    updateMeta("twitter:description", description, "property");
    
    // Update canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute("href", canonicalUrl);
      } else {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        canonical.setAttribute("href", canonicalUrl);
        document.head.appendChild(canonical);
      }
    }
    
    // Add page-specific structured data
    if (structuredData) {
      // Remove any existing page-specific structured data
      const existingScript = document.getElementById("page-structured-data");
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement("script");
      script.id = "page-structured-data";
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, canonicalUrl, ogImage, structuredData]);

  return null;
};

function updateMeta(name: string, content: string, attr: string = "name") {
  let meta = document.querySelector(`meta[${attr}="${name}"]`);
  if (meta) {
    meta.setAttribute("content", content);
  } else {
    meta = document.createElement("meta");
    meta.setAttribute(attr, name);
    meta.setAttribute("content", content);
    document.head.appendChild(meta);
  }
}

export default SEO;
```

---

## 4. Add FAQ Structured Data to Service Pages

**File**: `src/components/ServicePageLayout.tsx`

Pass FAQ structured data to the SEO component for rich search results:

```tsx
// Inside ServicePageLayout component, create FAQ schema:
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

// Update SEO component usage:
<SEO 
  title={metaTitle} 
  description={metaDescription}
  canonicalUrl={`https://www.integrityevsolutions.com${window.location.pathname}`}
  structuredData={faqSchema}
/>
```

---

## 5. Fix Canonical URL in index.html

**File**: `index.html`

Update the canonical link from relative to absolute:

```html
<!-- Change this line -->
<link rel="canonical" href="/" />

<!-- To this -->
<link rel="canonical" href="https://www.integrityevsolutions.com/" />
```

Also update Open Graph URLs:

```html
<meta property="og:url" content="https://www.integrityevsolutions.com/" />
```

---

## Files to Change

| File | Change |
|------|--------|
| `public/sitemap.xml` | Create new XML sitemap |
| `public/robots.txt` | Add sitemap reference |
| `src/components/SEO.tsx` | Enhance with canonical, OG, and structured data support |
| `src/components/ServicePageLayout.tsx` | Add FAQ schema and canonical URLs |
| `index.html` | Fix canonical and OG URLs to be absolute |

---

## After Implementation: Google Search Console Steps

Once deployed, here's what to do in Google Search Console:

1. **Go to** [Google Search Console](https://search.google.com/search-console)
2. **Select your property** (`www.integrityevsolutions.com`)
3. **Submit sitemap**:
   - Navigate to "Sitemaps" in the left menu
   - Enter `sitemap.xml` in the field
   - Click "Submit"
4. **Request re-indexing** for any pages that were showing 404:
   - Go to "URL Inspection"
   - Enter each service page URL
   - Click "Request Indexing"

---

## SEO Benefits

| Enhancement | Benefit |
|-------------|---------|
| XML Sitemap | Google discovers all pages automatically |
| Sitemap in robots.txt | Crawlers find sitemap without Search Console |
| Canonical URLs | Prevents duplicate content issues |
| FAQ Schema | Enables rich FAQ snippets in search results |
| Dynamic OG tags | Better social media previews when sharing |
| Absolute URLs | Ensures proper indexing of all pages |
