import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { getTrackingPhoneNumber } from "@/lib/tracking-phone";

export function useTrackingPhone() {
  const [searchParams] = useSearchParams();

  return useMemo(
    () => getTrackingPhoneNumber(searchParams),
    [searchParams],
  );
}
