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
  // "4706883436" → "(470) 688-3436"
  return `(${raw.slice(0, 3)}) ${raw.slice(3, 6)}-${raw.slice(6)}`;
}

/**
 * Dynamic Number Insertion hook.
 * Reads `?src=` from the URL, persists it in localStorage,
 * and returns the mapped phone number for ad attribution.
 */
export function useTrackingPhone() {
  const [searchParams] = useSearchParams();

  const { display, href } = useMemo(() => {
    const srcParam = searchParams.get("src")?.toLowerCase();

    // If a new src param is present, persist it
    if (srcParam) {
      try {
        localStorage.setItem(STORAGE_KEY, srcParam);
      } catch {
        // localStorage unavailable — silent fail
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

    const raw = (src && PHONE_MAP[src]) || DEFAULT_RAW;
    return { display: formatPhone(raw), href: `tel:${raw}` };
  }, [searchParams]);

  return { display, href };
}
