import { CV_PATH, MACHINE, normalisePath, pages } from "./filesystem";

type CommandResult =
  | { kind: "navigate"; path: string }
  | { kind: "external"; href: string }
  | { kind: "download"; href: string }
  | { kind: "back" }
  | { kind: "reboot" }
  | { kind: "message"; tone: "info" | "error"; text: string };

interface CommandSpec {
  /** First name is canonical; the rest are accepted aliases. */
  names: string[];
  args?: string;
  description: string;
  run: (args: string) => CommandResult;
}

const goTo = (path: string): CommandResult => ({
  kind: "navigate",
  path: normalisePath(path),
});

export const COMMANDS: CommandSpec[] = [
  {
    names: ["help", "?", "man"],
    description: "List every command this machine understands",
    run: () => goTo("/help"),
  },
  {
    names: ["goto", "cd", "open", "go"],
    args: "<path>",
    description: "Navigate to a page, e.g. goto /help",
    run: (args) => {
      if (!args) return goTo("/");
      if (args === "..") return { kind: "back" };
      const path = normalisePath(args);
      if (!isKnownPath(path)) {
        return {
          kind: "message",
          tone: "error",
          text: `no such page: ${path}. try 'show pages'`,
        };
      }
      return goTo(path);
    },
  },
  {
    names: ["pages", "ls", "dir", "tree", "sitemap"],
    description: "Show the page tree",
    run: () => goTo("/sitemap"),
  },
  {
    names: ["home", "main", "start"],
    description: "Return to the splash screen",
    run: () => goTo("/"),
  },
  {
    names: ["back"],
    description: "Step back through history",
    run: () => ({ kind: "back" }),
  },
  {
    names: ["reboot", "restart"],
    description: "Restart the system",
    run: () => ({ kind: "reboot" }),
  },
  {
    names: ["cv", "resume"],
    description: "Download my CV as a pdf",
    run: () => ({ kind: "download", href: CV_PATH }),
  },
  {
    names: ["email", "mail"],
    description: "Open a new mail to Henrik",
    run: () => ({ kind: "external", href: `mailto:${MACHINE.email}` }),
  },
  {
    names: ["source", "repo", "github"],
    description: "The source code for this site",
    run: () => ({ kind: "external", href: MACHINE.github }),
  },
  {
    names: ["date", "time"],
    description: "System clock",
    run: () => ({
      kind: "message",
      tone: "info",
      text: new Date().toLocaleString("en-GB"),
    }),
  },
  {
    names: ["echo"],
    args: "<text>",
    description: "Repeat text back",
    run: (args) => ({ kind: "message", tone: "info", text: args || " " }),
  },
  {
    names: ["exit", "logout", "quit"],
    description: "Terminate the session",
    run: () => ({
      kind: "message",
      tone: "error",
      text: "session cannot be terminated. you are already outside.",
    }),
  },
];

const isKnownPath = (path: string) =>
  path in pages || path === "/help" || path === "/sitemap";

/** Commands commonly typed with a leading noise word: "show pages". */
const NOISE_PREFIXES = ["show", "list", "display", "print"];

export const runCommand = (input: string): CommandResult | null => {
  const raw = input.trim();
  if (!raw) return null;

  const words = raw.split(/\s+/);
  if (words.length > 1 && NOISE_PREFIXES.includes(words[0].toLowerCase())) {
    words.shift();
  }

  const name = words[0].toLowerCase();
  const args = words.slice(1).join(" ");
  const command = COMMANDS.find((entry) => entry.names.includes(name));
  if (command) return command.run(args);

  // A bare path is treated as navigation: typing "/help" just works.
  const asPath = normalisePath(raw);
  if (isKnownPath(asPath)) return goTo(asPath);

  return {
    kind: "message",
    tone: "error",
    text: `unknown command: ${name}. type 'help' for a list`,
  };
};

/** Tab completion over command names and page paths, on the last word typed. */
export const complete = (input: string): string | null => {
  const words = input.split(/\s+/);
  const word = words[words.length - 1].toLowerCase();
  if (!word) return null;

  const candidates = word.startsWith("/")
    ? Object.keys(pages).concat("/help", "/sitemap")
    : COMMANDS.map((command) => command.names[0]);
  const matches = candidates.filter((candidate) => candidate.startsWith(word));
  if (matches.length === 0) return null;

  const shared = matches.reduce((prefix, match) => {
    let index = 0;
    while (index < prefix.length && prefix[index] === match[index]) index += 1;
    return prefix.slice(0, index);
  });
  words[words.length - 1] = shared;
  return words.join(" ");
};
