import { useEffect, useState } from "react";
import { COMPACT_QUERY } from "@/theme";

/**
 * True on narrow screens, where pagination is the wrong answer: there is no
 * keyboard to turn pages with, and scrolling is what people expect.
 */
export const useCompactLayout = (): boolean => {
  const [compact, setCompact] = useState(
    () => window.matchMedia(COMPACT_QUERY).matches
  );

  useEffect(() => {
    const query = window.matchMedia(COMPACT_QUERY);
    const sync = () => setCompact(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return compact;
};
