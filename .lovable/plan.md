
# Update Favicon to Integrity EV Solutions Logo

## Overview
Replace all default Lovable favicon files with your Integrity EV Solutions logo (the green plug with leaf design) so that Google and browsers display your brand correctly.

## What Will Be Done

### Step 1: Copy Logo to Public Directory
Copy your uploaded logo (`android-chrome-512x512.png`) to the public folder for use as the primary favicon and app icon.

### Step 2: Update index.html Favicon References
Update all favicon `<link>` tags to point to your new logo:
- Apple Touch Icon (180x180)
- Favicon 96x96
- Web App Manifest icons (192x192 and 512x512)
- Default favicon.ico reference
- SVG favicon reference

### Step 3: Update Web Manifest
Update `site.webmanifest` to reference your logo for the Progressive Web App icons.

## Files to Modify
1. **Copy**: `user-uploads://android-chrome-512x512.png` to `public/integrity-logo.png`
2. **Edit**: `index.html` - Update all favicon link references
3. **Edit**: `site.webmanifest` - Update icon paths

## Technical Notes
- Your uploaded image is 512x512 which is perfect for high-resolution displays
- The same image will be used for all favicon sizes (browsers will scale appropriately)
- Google may take some time to re-crawl and update the favicon in search results after deployment
- To speed up Google's update, you can request re-indexing via Google Search Console after publishing
