

# Add Missing Page to sitemap.xml

## Issue Found
The `/sitemap` page exists as a route and is pre-rendered, but it's **missing from `public/sitemap.xml`**.

---

## Change

**File: `public/sitemap.xml`**

Add the `/sitemap` page entry:

```xml
<url>
  <loc>https://www.integrityevsolutions.com/sitemap</loc>
  <changefreq>monthly</changefreq>
  <priority>0.3</priority>
</url>
```

This will be inserted after the terms-of-service entry (line 47), keeping the legal/utility pages grouped together.

---

## About the Second Page

If you're seeing two pages not crawled, the second might be:
- The **404 page** (`/404`) - This should NOT be in the sitemap (it's an error page)
- An **external link** that's broken
- A **hash route** like `/#contact` which crawlers sometimes flag

Could you share which specific URLs weren't crawled? That would help identify if there's another issue.

