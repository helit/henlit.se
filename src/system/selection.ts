import { collectLinks } from "./pages";
import type { Block } from "./types";

/**
 * Which screenful each of a page's links ended up on, in reading order.
 *
 * Selection is page-wide while rendering is screenful-wide, and this is the
 * bridge: without it, a screenful that happens to contain no links leaves the
 * arrow keys doing nothing at all.
 */
export const mapLinksToScreens = (screens: Block[][]): number[] =>
  screens.flatMap((blocks, screen) => collectLinks(blocks).map(() => screen));

/** Steps the selection, entering the list from either end when nothing is set. */
export const nextSelection = (
  current: number,
  step: number,
  total: number
): number => {
  if (total === 0) return -1;
  if (current < 0) return step > 0 ? 0 : total - 1;
  return (current + step + total) % total;
};

/** Index of the first link on a screenful, or -1 when it holds none. */
export const firstLinkOnScreen = (
  screenOfLink: number[],
  screen: number
): number => screenOfLink.indexOf(screen);
