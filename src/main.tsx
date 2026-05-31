import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

/**
 * Restore SPA redirect state saved by 404.html before React mounts.
 * This ensures ?src= (and other query params) survive the GitHub Pages
 * 404 → index.html redirect flow even when the inline <head> script
 * doesn't fire reliably with prerendered HTML.
 */
function restoreSpaRedirect() {
  try {
    // v1: structured JSON
    const raw = sessionStorage.getItem("spa_redirect_v1");
    if (raw) {
      sessionStorage.removeItem("spa_redirect_v1");
      const data = JSON.parse(raw);
      if (data && Date.now() - data.ts < 30000) {
        let target = data.path || "/";
        const cur = new URLSearchParams(window.location.search);
        const red = new URLSearchParams(data.search || "");
        red.forEach((v, k) => { if (!cur.has(k)) cur.set(k, v); });
        const qs = cur.toString();
        if (qs) target += "?" + qs;
        if (data.hash) target += data.hash;
        window.history.replaceState(null, "", target);
        return;
      }
    }

    // Backward compat: legacy format (only if no existing query params)
    const legacy = sessionStorage.getItem("redirect");
    if (legacy) {
      sessionStorage.removeItem("redirect");
      if (legacy !== "/" && !window.location.search) {
        window.history.replaceState(null, "", "/" + legacy);
      }
    }
  } catch {
    // sessionStorage unavailable — noop
  }
}

restoreSpaRedirect();

createRoot(document.getElementById("root")!).render(<App />);
