

# Remove All Supabase References

## Summary
Completely remove all Supabase infrastructure from the project to ensure it's a pure static site with no backend dependencies or security scan noise.

---

## Files to Delete

| File/Folder | Reason |
|-------------|--------|
| `src/integrations/supabase/client.ts` | Supabase client connection |
| `src/integrations/supabase/types.ts` | Database type definitions |
| `src/integrations/` folder | Empty after removing supabase subfolder |
| `supabase/config.toml` | Supabase configuration |
| `supabase/` folder | Empty after removing config |

---

## Package.json Update

Remove the Supabase dependency from `package.json`:

```
"@supabase/supabase-js": "^2.91.1"  ← DELETE THIS LINE
```

---

## Environment Variables

The `.env` file likely contains `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` variables that can also be removed (though they won't cause issues if left).

---

## Result

After these changes:
- No Supabase code or dependencies in the project
- Security scans won't flag database-related issues
- The site remains a clean, static website
- Smaller bundle size without the Supabase SDK

