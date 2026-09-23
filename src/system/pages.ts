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
        "Type a command and press ENTER. Arrow keys move between links, TAB completes, and a bare path like /help works on its own.",
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
    { kind: "spacer" },
    { kind: "links", items: [{ label: "PAGE TREE", path: "/sitemap" }] },
  ],
});

/** Renders the page tree as indented ASCII, then again as selectable links. */
const buildTreePage = (): Page => {
  const content = listPaths().filter((path) => path !== "/");
  const paths = [...content, "/help", "/sitemap"];
  const lines = ["/"];
  paths.forEach((path, index) => {
    const tip = index === paths.length - 1 ? "`--" : "|--";
    lines.push(`${tip} ${path.slice(1)}`);
  });

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
