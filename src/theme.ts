/**
 * One phosphor, four intensities. A real terminal had no second hue: it varied
 * brightness and inverted the video for selection, which is what this does.
 *
 * Contrast against `screen`, measured: dim 5.2:1, text 8.3:1, bright 12.6:1.
 * `dim` carries real text (hints, labels, chrome) so it has to clear 4.5:1
 * with room to spare, because the scanline overlay darkens it further.
 */
export const theme = {
  screen: "#100e0a",
  faint: "#52401f",
  dim: "#a37f40",
  text: "#d99f4a",
  bright: "#ffc871",
};

/** Phosphor bloom, kept on text so glyph edges stay readable at small sizes. */
export const glow = (color: string) => `0 0 1px ${color}80, 0 0 10px ${color}33`;

/** Below this the site stops paginating and becomes a scrolling document. */
export const COMPACT_QUERY = "(max-width: 640px)";
