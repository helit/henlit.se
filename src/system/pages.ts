import { COMMANDS } from "./commands";
import { listPaths, pages } from "./filesystem";
import type { Block, Link, Page } from "./types";

const buildHelpPage = (): Page => ({
  title: "COMMAND INDEX",
  heading: "Command index",
  summary: "Every command this machine understands.",
  blocks: [
    { kind: "heading", value: "> help" },
    {
      kind: "text",
      value:
        "Type a command and press ENTER. TAB completes, arrow keys move the selection where a page has one, and a bare path like /sitemap works on its own.",
    },
    { kind: "spacer" },
    {
      kind: "fields",
      rows: COMMANDS.map((command) => ({
        label: [command.names[0], command.args].filter(Boolean).join(" "),
        value: command.description,
      })),
    },
    { kind: "rule" },
    {
      kind: "text",
      value: `Aliases: ${COMMANDS.filter((command) => command.names.length > 1)
        .map((command) => command.names.join(", "))
        .join(" · ")}`,
    },
  ],
});

/** Renders the page tree as indented ASCII, then again as selectable links. */
const buildTreePage = (): Page => {
  const branches = [
    ...listPaths().filter((path) => path !== "/"),
    "/help",
    "/sitemap",
  ];
  const lines = ["/"];
  branches.forEach((path, index) => {
    const tip = index === branches.length - 1 ? "`--" : "|--";
    lines.push(`${tip} ${path.slice(1)}`);
  });

  // Root is listed as a row too, so the tree can get you home as well as away.
  const paths = ["/", ...branches];

  return {
    title: "PAGE TREE",
    heading: "Page tree",
    summary: "Every page on henlit.se.",
    blocks: [
      { kind: "heading", value: "> show pages" },
      { kind: "ascii", value: lines.join("\n") },
      { kind: "rule" },
      {
        kind: "links",
        items: paths.map((path) => ({
          label: pages[path] ? pages[path].title : path.slice(1).toUpperCase(),
          path,
          note: path,
        })),
      },
    ],
  };
};

export const getPage = (path: string): Page => {
  if (path === "/help") return buildHelpPage();
  if (path === "/sitemap") return buildTreePage();
  return pages[path] ?? pages["/404"];
};

/** Every link in a block list, in reading order: the order the arrows follow. */
export const collectLinks = (blocks: Block[]): Link[] =>
  blocks.flatMap((block) => (block.kind === "links" ? block.items : []));
