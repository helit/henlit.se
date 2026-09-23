import { useEffect, useState, type RefObject } from "react";
import type { Block } from "@/system/types";

/**
 * Packs blocks into screenfuls, greedily, given their measured heights.
 *
 * A block taller than the viewport gets a page to itself rather than being
 * dropped. Pure, so the packing can be tested without a DOM.
 */
export const paginate = (
  blocks: Block[],
  heights: number[],
  available: number,
  gap: number
): Block[][] => {
  const result: Block[][] = [];
  let current: Block[] = [];
  let used = 0;

  blocks.forEach((block, index) => {
    const height = heights[index] ?? 0;
    const cost = current.length === 0 ? height : height + gap;
    if (current.length > 0 && used + cost > available) {
      result.push(current);
      current = [block];
      used = height;
    } else {
      current.push(block);
      used += cost;
    }
  });
  if (current.length > 0) result.push(current);

  return result.length > 0 ? result : [[]];
};

/**
 * Splits a page's blocks into screenfuls so the site never scrolls.
 *
 * The whole block list is rendered once off-screen at the real width; each
 * child's measured height is then packed into the viewport.
 */
export const usePagination = (
  blocks: Block[],
  viewport: RefObject<HTMLElement | null>,
  measure: RefObject<HTMLElement | null>,
  gap: number,
  enabled: boolean
): Block[][] => {
  const [pages, setPages] = useState<Block[][]>([blocks]);

  useEffect(() => {
    if (!enabled) {
      setPages([blocks]);
      return;
    }

    const compute = () => {
      const viewportElement = viewport.current;
      const measureElement = measure.current;
      if (!viewportElement || !measureElement) return;

      const heights = Array.from(measureElement.children).map(
        (child) => (child as HTMLElement).offsetHeight
      );
      setPages(
        paginate(blocks, heights, viewportElement.clientHeight, gap)
      );
    };

    compute();

    const observer = new ResizeObserver(compute);
    if (viewport.current) observer.observe(viewport.current);
    // Web fonts land after first paint and change every measurement.
    document.fonts?.ready.then(compute).catch(() => {});

    return () => observer.disconnect();
  }, [blocks, gap, viewport, measure, enabled]);

  return pages;
};
