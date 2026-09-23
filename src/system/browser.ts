import { useCallback, useEffect, useRef, useState } from "react";

/** Triggers a save, so keyboard activation behaves like clicking the row. */
export const saveFile = (href: string) => {
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.download = "";
  anchor.click();
};

/** Opens an external destination without handing over the referrer. */
export const openExternal = (href: string) =>
  window.open(href, "_blank", "noreferrer");

/** sessionStorage throws in some privacy modes; a miss is never fatal here. */
const readSession = (key: string): string | null => {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
};

const writeSession = (key: string, value: string) => {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    /* private mode: the flag just doesn't persist */
  }
};

const BOOT_KEY = "booted";

/**
 * The boot sequence is a first impression, not a toll gate: it plays once per
 * tab, and not at all for anyone who has asked for less motion.
 */
export const useBootSequence = (): [boolean, () => void] => {
  const [booting, setBooting] = useState(
    () =>
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      readSession(BOOT_KEY) !== "true"
  );

  const finish = useCallback(() => {
    setBooting(false);
    writeSession(BOOT_KEY, "true");
  }, []);

  return [booting, finish];
};

/** Keeps the crawler-facing description in step with whatever page is open. */
export const useDocumentMetadata = (title: string, description: string) => {
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [title, description]);
};

/**
 * Window-level keydown, bound once. The handler is read through a ref so it
 * always sees current state without the listener being torn down and rebuilt
 * on every keystroke, and without a dependency list that has to be kept in
 * step with everything the handler touches.
 */
export const useWindowKeydown = (handler: (event: KeyboardEvent) => void) => {
  const latest = useRef(handler);

  useEffect(() => {
    latest.current = handler;
  });

  useEffect(() => {
    const listener = (event: KeyboardEvent) => latest.current(event);
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);
};
