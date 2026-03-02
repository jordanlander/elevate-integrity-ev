import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const PHONE_MAP: Record<string, string> = {
  fbj: "4706883436",
  igj: "4706341457",
  radioj: "4706139714",
  printj: "4702566974",
  jordan: "4705176159",
};

const DEFAULT_RAW = "4702622660";
const STORAGE_KEY = "dni_src";

function formatPhone(raw: string): string {
  return `(${raw.slice(0, 3)}) ${raw.slice(3, 6)}-${raw.slice(6)}`;
}

/**
 * Dynamic Number Insertion hook.
 * Reads `?src=` from the URL (React Router + window.location fallback),
 * persists it in localStorage, and returns the mapped phone number.
 */
export function useTrackingPhone() {
  const [searchParams] = useSearchParams();

  const { display, href } = useMemo(() => {
    const debug = searchParams.get("debug_dni") === "1" ||
      new URLSearchParams(window.location.search).get("debug_dni") === "1";

    // Primary: React Router
    let srcParam = searchParams.get("src")?.trim().toLowerCase() || undefined;

    // Fallback 1: window.location.search (covers replaceState race)
    if (!srcParam) {
      try {
        srcParam = new URLSearchParams(window.location.search).get("src")?.trim().toLowerCase() || undefined;
      } catch {
        // noop
      }
    }

    // Fallback 2: parse full href (covers edge-case encodings)
    if (!srcParam) {
      try {
        const url = new URL(window.location.href);
        srcParam = url.searchParams.get("src")?.trim().toLowerCase() || undefined;
      } catch {
        // noop
      }
    }

    if (debug) console.log("[DNI] srcParam from URL:", srcParam);

    // Persist if present
    if (srcParam) {
      try {
        localStorage.setItem(STORAGE_KEY, srcParam);
      } catch {
        // localStorage unavailable
      }
    }

    // Resolve: URL param → localStorage → default
    let src = srcParam;
    if (!src) {
      try {
        src = localStorage.getItem(STORAGE_KEY) || undefined;
      } catch {
        // noop
      }
    }

    if (debug) console.log("[DNI] resolved src:", src, "→", src && PHONE_MAP[src] ? PHONE_MAP[src] : DEFAULT_RAW);

    const raw = (src && PHONE_MAP[src]) || DEFAULT_RAW;
    return { display: formatPhone(raw), href: `tel:${raw}` };
  }, [searchParams]);

  return { display, href };
}
