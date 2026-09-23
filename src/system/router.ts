import { useCallback, useEffect, useState } from "react";
import { normalisePath } from "./filesystem";

const readPath = () => normalisePath(window.location.pathname);

export const navigate = (path: string, { replace = false } = {}) => {
  const target = normalisePath(path);
  if (target === readPath() && !replace) return;
  window.history[replace ? "replaceState" : "pushState"]({}, "", target);
  // pushState doesn't fire popstate, so tell our own listeners ourselves.
  window.dispatchEvent(new PopStateEvent("popstate"));
};

export const usePath = (): string => {
  const [path, setPath] = useState(readPath);

  useEffect(() => {
    const sync = () => setPath(readPath());
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  return path;
};

/**
 * Intercepts clicks on in-site anchors so they route without a page load,
 * while leaving them as real hrefs for crawlers, middle-click and tap.
 */
export const useLinkHandler = () =>
  useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href") ?? "";
    const isExternal = /^[a-z]+:/i.test(href);
    const isModified =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (isExternal || isModified || event.button !== 0) return;
    event.preventDefault();
    navigate(href);
  }, []);
