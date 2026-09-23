import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Screen } from "@/components/Screen/Screen";
import { Boot } from "@/components/Boot/Boot";
import { Prompt, type PromptMessage } from "@/components/Terminal/Prompt";
import { COLUMN_GAP, PageView } from "@/components/Views/PageView";
import { usePagination } from "@/components/Views/usePagination";
import { MACHINE } from "@/system/filesystem";
import { collectLinks, getPage } from "@/system/pages";
import { complete, runCommand } from "@/system/commands";
import { navigate, usePath } from "@/system/router";
import { useCompactLayout } from "@/system/layout";
import {
  openExternal,
  saveFile,
  useBootSequence,
  useDocumentMetadata,
  useWindowKeydown,
} from "@/system/browser";
import {
  firstLinkOnScreen,
  mapLinksToScreens,
  nextSelection,
} from "@/system/selection";
import type { Block } from "@/system/types";

/** Stable empty page, so an out-of-range index doesn't churn memo deps. */
const NO_BLOCKS: Block[] = [];

/** How many past commands ctrl+p walks back through. */
const HISTORY_LIMIT = 50;

/** The tab always reads as the site, not as whichever page is open. */
const SITE_TITLE = "henlit.se";

export const App = () => {
  const path = usePath();
  const page = useMemo(() => getPage(path), [path]);

  const viewportRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const compact = useCompactLayout();
  const pages = usePagination(
    page.blocks,
    viewportRef,
    measureRef,
    COLUMN_GAP,
    !compact
  );

  const { booting, finish: finishBoot, restart: reboot } = useBootSequence();
  const [pageIndex, setPageIndex] = useState(0);
  const [selected, setSelected] = useState(0);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState<PromptMessage | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const historyIndex = useRef(-1);

  const currentIndex = Math.min(pageIndex, pages.length - 1);
  const visibleBlocks = pages[currentIndex] ?? NO_BLOCKS;

  // Selection spans the whole page, not just the screenful on view: arrowing
  // past the last link on screen turns to the next one rather than dead-ending.
  const links = useMemo(() => collectLinks(page.blocks), [page.blocks]);
  const screenOfLink = useMemo(() => mapLinksToScreens(pages), [pages]);
  const linkOffset = useMemo(
    () => firstLinkOnScreen(screenOfLink, currentIndex),
    [screenOfLink, currentIndex]
  );

  useDocumentMetadata(SITE_TITLE, page.summary);

  useEffect(() => {
    setPageIndex(0);
    setMessage(null);
  }, [page]);

  // Landing on a screenful highlights its first link, or nothing if it has
  // none. Touch gets no default highlight: with no arrow keys to move it, a
  // filled row reads as "this one is active" rather than "these are tappable".
  useEffect(() => {
    setSelected(compact ? -1 : firstLinkOnScreen(screenOfLink, currentIndex));
  }, [screenOfLink, currentIndex, compact]);

  // A physical keyboard means we can focus the prompt eagerly; on touch that
  // would throw up the on-screen keyboard over the page, so we wait to be asked.
  useEffect(() => {
    if (booting) return;
    if (window.matchMedia("(pointer: fine)").matches) inputRef.current?.focus();
  }, [booting, path]);

  const openLink = useCallback(
    (index: number) => {
      const link = index < 0 ? undefined : links[index];
      if (!link) return;
      if (link.download && link.href) saveFile(link.href);
      else if (link.href) openExternal(link.href);
      else if (link.path) navigate(link.path);
    },
    [links]
  );

  const submit = useCallback((raw: string) => {
    const result = runCommand(raw);
    setHistory((entries) => [raw, ...entries].slice(0, HISTORY_LIMIT));
    historyIndex.current = -1;
    setInput("");
    if (!result) return;

    switch (result.kind) {
      case "navigate":
        navigate(result.path);
        break;
      case "external":
        openExternal(result.href);
        break;
      case "download":
        saveFile(result.href);
        break;
      case "back":
        window.history.back();
        break;
      case "reboot":
        reboot();
        break;
      case "message":
        setMessage({ tone: result.tone, text: result.text });
        break;
    }
  }, [reboot]);

  const turnPage = useCallback(
    (step: number) => {
      setPageIndex((current) =>
        Math.min(Math.max(current + step, 0), pages.length - 1)
      );
    },
    [pages.length]
  );

  // Bound to the window rather than the input: the prompt's own keydown still
  // bubbles here, and navigation keeps working when focus is on a link.
  useWindowKeydown((event) => {
    const { key, ctrlKey, metaKey, altKey } = event;
    if (metaKey || altKey) return;
    // While the log is running its own skip handler owns the keyboard,
    // otherwise the keypress that skips the boot also fires a navigation.
    if (booting) return;
    const isEmpty = input.length === 0;
    const onLink = document.activeElement instanceof HTMLAnchorElement;

    if (key === "Enter") {
      // A tab-focused link activates itself; don't open two things at once.
      if (onLink) return;
      event.preventDefault();
      if (input.trim()) submit(input);
      else openLink(selected);
      return;
    }

    if (key === "Tab") {
      // Only hijack Tab when it has something to complete, so it still moves
      // focus through the links for anyone navigating that way.
      const completion = input.trim() ? complete(input) : null;
      if (!completion) return;
      event.preventDefault();
      setInput(completion);
      return;
    }

    if (key === "Escape") {
      setInput("");
      setMessage(null);
      return;
    }

    if (key === "ArrowDown" || key === "ArrowUp") {
      if (links.length === 0) return;
      event.preventDefault();
      const step = key === "ArrowDown" ? 1 : -1;
      const next = nextSelection(selected, step, links.length);
      setSelected(next);
      // Following the selection off this screenful turns the page with it.
      const screen = screenOfLink[next];
      if (screen !== undefined) setPageIndex(screen);
      inputRef.current?.focus();
      return;
    }

    // Left and right turn the page, but only when they aren't being used to
    // move the caret through a half-typed command.
    if ((key === "ArrowLeft" || key === "ArrowRight") && isEmpty) {
      if (pages.length < 2) return;
      event.preventDefault();
      turnPage(key === "ArrowRight" ? 1 : -1);
      return;
    }

    if (ctrlKey && (key === "p" || key === "n")) {
      event.preventDefault();
      const next = historyIndex.current + (key === "p" ? 1 : -1);
      historyIndex.current = Math.max(-1, Math.min(next, history.length - 1));
      setInput(history[historyIndex.current] ?? "");
    }
  });


  if (booting) {
    return (
      <Screen
        heading={page.heading}
        machine={`${MACHINE.name} ${MACHINE.version}`}
        status='BOOT'
        alignTop
      >
        <Boot onDone={finishBoot} />
      </Screen>
    );
  }

  const hasPages = pages.length > 1;
  const status = hasPages
    ? `PAGE ${currentIndex + 1}/${pages.length}`
    : page.status ?? "READY";

  const hint = compact
    ? "tap a row to open it, or type a command"
    : [
        links.length > 0 && "↑↓ select",
        links.length > 0 && "ENTER open",
        hasPages && "←→ page",
        "type 'help'",
      ]
        .filter(Boolean)
        .join(" · ");

  // Arrow-key selection moves no DOM focus, so it has to be spoken instead.
  const selectedLink = links[selected];
  const announcement =
    !compact && selectedLink
      ? `${selectedLink.label}, ${selected + 1} of ${links.length}`
      : "";

  return (
    // Clicking anywhere on a desktop screen returns focus to the prompt. On
    // touch that would raise the on-screen keyboard unasked, so there the
    // prompt line itself is the only thing that takes focus.
    <div
      onPointerDown={(event) => {
        if (event.pointerType !== "touch") inputRef.current?.focus();
      }}
    >
      <Screen
        ref={viewportRef}
        heading={page.heading}
        machine={`${MACHINE.name} ${MACHINE.version}`}
        status={status}
        announcement={announcement}
        footer={
          <Prompt
            ref={inputRef}
            path={path}
            value={input}
            message={message}
            hint={hint}
            onChange={setInput}
          />
        }
      >
        {!compact && (
          <PageView
            ref={measureRef}
            blocks={page.blocks}
            selectedIndex={-1}
            measuring
          />
        )}
        <PageView
          blocks={visibleBlocks}
          selectedIndex={linkOffset < 0 ? -1 : selected - linkOffset}
        />
      </Screen>
    </div>
  );
};

export default App;
