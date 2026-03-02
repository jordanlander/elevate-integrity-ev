

# Fix: DNI Not Working on Live Site

## Problem
Two issues are preventing the Dynamic Number Insertion from working:

### Issue 1: Changes not published
The DNI hook code exists in the Lovable preview but hasn't been published to your live domain (`www.integrityevsolutions.com`). You need to hit **Publish** in Lovable for the changes to go live.

### Issue 2: CallRail `swap.js` conflict
Line 52 of `index.html` loads CallRail's own number-swapping script:
```
<script src="//cdn.callrail.com/companies/880005963/.../swap.js"></script>
```
CallRail's swap.js runs after page load and **overwrites** phone numbers in the DOM -- undoing exactly what the React hook sets. These two systems fight each other.

## Solution Options

**Option A (Recommended): Remove CallRail swap.js, keep the React hook**
- Delete the CallRail script from `index.html` (line 52)
- The React `useTrackingPhone` hook handles all number swapping natively
- This is cleaner because React controls the DOM -- no conflicts

**Option B: Keep CallRail, remove the React hook**
- Remove the `useTrackingPhone` hook and revert components to hardcoded numbers
- Let CallRail handle all swapping via its own `swap.js`
- You'd configure the number mapping in CallRail's dashboard instead of in code
- Downside: CallRail may flash the default number briefly before swapping

## Recommended Plan (Option A)

### Step 1: Remove CallRail swap.js from index.html
Delete line 52 (`<script type="text/javascript" src="//cdn.callrail.com/..."></script>`) since the React hook now handles DNI.

### Step 2: Publish
After the change, publish the site so it goes live on `www.integrityevsolutions.com`.

### Step 3: Test
Visit `https://www.integrityevsolutions.com/?src=fbj` and confirm the number shows `(470) 688-3436` in the nav, footer, mobile bar, contact form, and services section.

