/**
 * Amber phosphor on the dark blue-grey ground the site has always used. One
 * hue, four intensities: a real terminal had no second colour, it varied
 * brightness and inverted the video for selection.
 *
 * Contrast against `screen`, measured: dim 5.1:1, text 7.3:1, bright 11.2:1.
 * `dim` carries real text (hints, labels, chrome) so it has to clear 4.5:1
 * with room to spare, because the scanline overlay darkens it further.
 */
export const theme = {
  screen: "#1a1b26",
  faint: "#544835",
  dim: "#ab8646",
  text: "#d99f4a",
  bright: "#ffc871",
};

/** Phosphor bloom, kept on text so glyph edges stay readable at small sizes. */
export const glow = (color: string) => `0 0 1px ${color}80, 0 0 10px ${color}33`;

/** Below this the site stops paginating and becomes a scrolling document. */
export const COMPACT_QUERY = "(max-width: 640px)";
