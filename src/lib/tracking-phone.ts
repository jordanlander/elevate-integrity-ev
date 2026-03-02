const PHONE_MAP: Record<string, string> = {
  fbj: "4706883436",
  igj: "4706341457",
  printj: "4702566974",
  radioj: "4706139714",
  jordan: "4705176159",
};

const DEFAULT_RAW_PHONE = "4702622660";

export type TrackingPhoneResolution = {
  raw: string;
  display: string;
  href: string;
  src?: string;
  reason: "mapped_src" | "unknown_src" | "no_src";
};

function formatPhone(raw: string): string {
  return `${raw.slice(0, 3)}-${raw.slice(3, 6)}-${raw.slice(6)}`;
}

function readSrcParam(searchParams?: URLSearchParams): string | undefined {
  const src = searchParams?.get("src")?.trim().toLowerCase();
  return src || undefined;
}

export function getTrackingPhoneNumber(searchParams?: URLSearchParams): TrackingPhoneResolution {
  const src = readSrcParam(searchParams) || readSrcParam(new URLSearchParams(window.location.search));
  const mapped = src ? PHONE_MAP[src] : undefined;
  const raw = mapped || DEFAULT_RAW_PHONE;

  const reason: TrackingPhoneResolution["reason"] = src
    ? (mapped ? "mapped_src" : "unknown_src")
    : "no_src";

  const isDebug = new URLSearchParams(window.location.search).get("debug_phone") === "1";
  if (isDebug) {
    console.log("[PhoneTracking]", { src: src || null, reason, raw, href: `tel:${raw}` });
  }

  return {
    raw,
    display: formatPhone(raw),
    href: `tel:${raw}`,
    src,
    reason,
  };
}

