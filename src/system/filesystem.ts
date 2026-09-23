import type { Page } from "./types";

export const MACHINE = {
  name: "HENLIT.SE",
  version: "v2.0.0",
  email: "henrik@henlit.se",
  github: "https://github.com/helit",
  // TODO: unconfirmed. Henrik to verify or replace before this goes live.
  linkedin: "https://www.linkedin.com/in/henriklittke/",
};

/** Served straight from /public. */
export const CV_PATH = "/cv.pdf";

const LOGO = [
  "██   ██ ███████ ███    ██ ██      ██ ████████",
  "██   ██ ██      ████   ██ ██      ██    ██",
  "███████ █████   ██ ██  ██ ██      ██    ██",
  "██   ██ ██      ██  ██ ██ ██      ██    ██",
  "██   ██ ███████ ██   ████ ███████ ██    ██",
].join("\n");

export const pages: Record<string, Page> = {
  "/": {
    title: "MAIN",
    heading: "Henrik Littke, senior software developer",
    status: "READY",
    summary:
      "Henrik Littke, senior software developer based in Gothenburg, Sweden.",
    blocks: [
      { kind: "ascii", value: LOGO },
      { kind: "rule" },
      {
        kind: "text",
        value: "**Hello**, nice to meet you!",
      },
      {
        kind: "text",
        value:
          "My name is **Henrik Littke**, I'm a senior software developer based in Gothenburg, Sweden.",
      },
      {
        kind: "text",
        value:
          "I want to move away from web development and do more heavy stuff + AI. I also like to code other things and tinker with computers. I sometimes make video games and 3d models.",
      },
      {
        kind: "text",
        value:
          "If this sounds interesting to you and you want to work together, contact me below!",
      },
      { kind: "spacer" },
      {
        kind: "links",
        items: [
          {
            label: "EMAIL",
            href: `mailto:${MACHINE.email}`,
            note: MACHINE.email,
          },
          {
            label: "GITHUB",
            href: MACHINE.github,
            note: "github.com/helit",
          },
          {
            label: "LINKEDIN",
            href: MACHINE.linkedin,
            note: "in/henriklittke",
          },
          {
            label: "CV",
            href: CV_PATH,
            download: true,
            note: "download (pdf)",
          },
        ],
      },
    ],
  },

  "/404": {
    title: "NOT FOUND",
    heading: "Page not found",
    status: "ERROR",
    unlisted: true,
    summary: "No such page.",
    blocks: [
      { kind: "heading", value: "> segment not found" },
      {
        kind: "text",
        value: "That path isn't on this machine.",
      },
      { kind: "spacer" },
      { kind: "links", items: [{ label: "MAIN", path: "/" }] },
    ],
  },
};

/** Normalises user input into a canonical path: "Help/" -> "/help". */
export const normalisePath = (input: string): string => {
  const trimmed = input.trim().toLowerCase().replace(/\/+$/, "");
  if (!trimmed || trimmed === "/") return "/";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
};

export const listPaths = (): string[] =>
  Object.keys(pages).filter((path) => !pages[path].unlisted);
