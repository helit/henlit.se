/** A line of page content. Pages are data, not JSX, so commands can read them. */
export type Block =
  | { kind: "text"; value: string }
  | { kind: "heading"; value: string }
  | { kind: "rule" }
  | { kind: "spacer" }
  | { kind: "ascii"; value: string }
  /** Label/value pairs rendered as an aligned two-column table. */
  | { kind: "fields"; rows: { label: string; value: string }[] }
  /** Selectable rows. Internal targets are paths, external ones full URLs. */
  | { kind: "links"; items: Link[] };

export interface Link {
  label: string;
  /** In-site path, e.g. "/help". */
  path?: string;
  /** External destination, or a file under /public. */
  href?: string;
  /** A file to save rather than a page to open. Suppresses client routing. */
  download?: boolean;
  note?: string;
}

export interface Page {
  /** Shown in the corner readout and the document title. */
  title: string;
  /** The page's <h1>. Read by assistive technology, never painted. */
  heading: string;
  /** Shown top right; defaults to the machine status. */
  status?: string;
  /** Used for <title> and the meta description. */
  summary: string;
  blocks: Block[];
  unlisted?: boolean;
}
