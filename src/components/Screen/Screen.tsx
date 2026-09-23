import { forwardRef } from "react";
import styled from "@emotion/styled";
import { COMPACT_QUERY, glow, theme } from "@/theme";

/** Breathing room between the 4:3 stage and the edge of the window. */
const GUTTER = "clamp(8px, 2vmin, 28px)";

/** The glass, edge to edge. No frame, no furniture, no room around it. */
const Glass = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${GUTTER};
  overflow: hidden;
  background: ${theme.screen};
  color: ${theme.text};
  text-shadow: ${glow(theme.text)};

  @media ${COMPACT_QUERY} {
    position: static;
    display: block;
    padding: 0;
    overflow: visible;
    min-height: 100dvh;
  }
`;

/**
 * An invisible 4:3 box holding everything: the readouts, the content and the
 * prompt. Nothing is drawn for it. It exists so the page composes like a CRT
 * even though the glass runs to the edge of the browser.
 */
const Stage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  aspect-ratio: 4 / 3;
  width: min(100%, calc((100vh - 2 * ${GUTTER}) * 4 / 3));
  width: min(100%, calc((100dvh - 2 * ${GUTTER}) * 4 / 3));
  max-height: 100%;

  @media ${COMPACT_QUERY} {
    aspect-ratio: auto;
    width: 100%;
    max-height: none;
    min-height: 100dvh;
  }
`;

/**
 * Scanlines, vignette and flicker sit in one non-interactive overlay so no
 * effect ever costs a frame of JS or blocks a click on the text underneath.
 *
 * Fixed, not absolute: the glass is a screen, so it stays put while content
 * scrolls behind it. Absolute would also break outright on narrow screens,
 * where the parent is static and there is no positioned ancestor to resolve
 * against, leaving the overlay one viewport tall at the top of the document.
 */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  background: repeating-linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0px,
      rgba(0, 0, 0, 0) 2px,
      rgba(0, 0, 0, 0.2) 3px,
      rgba(0, 0, 0, 0.2) 4px
    ),
    radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 55%,
      rgba(0, 0, 0, 0.45) 100%
    );
  animation: flicker 6s steps(30) infinite;

  @keyframes flicker {
    0%,
    100% {
      opacity: 1;
    }
    48% {
      opacity: 0.94;
    }
    52% {
      opacity: 1.02;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

`;

/**
 * Machine readout, floating on the glass rather than sitting in a bar. Dim
 * enough to read as chrome, not as content.
 */
const Corners = styled.div`
  flex: none;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: clamp(12px, 3vmin, 26px) clamp(20px, 6vw, 60px) 0;
  color: ${theme.dim};
  text-shadow: none;
  font-size: clamp(12px, 1.75vw, 15px);
  letter-spacing: 0.14em;
  white-space: nowrap;
  overflow: hidden;
`;

const Corner = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;

/** Clips rather than scrolls: anything that doesn't fit is paginated instead. */
const Viewport = styled.div<{ alignTop?: boolean }>`
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  /* Centres the screenful between the corner readouts and the prompt. Safe
     because pagination guarantees the content already fits. */
  display: flex;
  flex-direction: column;
  justify-content: ${({ alignTop }) => (alignTop ? "flex-start" : "center")};
  padding: clamp(10px, 2.5vmin, 26px) clamp(20px, 6vw, 60px)
    clamp(6px, 1.5vmin, 14px);

  @media ${COMPACT_QUERY} {
    flex: none;
    min-height: 0;
    overflow: visible;
    justify-content: flex-start;
  }
`;

interface ScreenProps {
  /** Page heading for assistive technology; never painted. */
  heading: string;
  /** Top-left readout, e.g. "HENLIT.SE v2.0.0". */
  machine: string;
  /** Top-right readout: status, or the page counter when paginated. */
  status: string;
  /** Announced politely when the keyboard selection moves. */
  announcement?: string;
  /** Anchors content to the top, for output that writes downward. */
  alignTop?: boolean;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Screen = forwardRef<HTMLDivElement, ScreenProps>(
  (
    { heading, machine, status, announcement, alignTop, children, footer },
    ref
  ) => (
    <Glass>
      <Overlay />
      <Stage>
        <h1 className='sr-only'>{heading}</h1>
        <Corners>
          <Corner>{machine}</Corner>
          <Corner aria-live='polite'>{status}</Corner>
        </Corners>
        <Viewport ref={ref} alignTop={alignTop}>
          {children}
        </Viewport>
        {footer}
        <div className='sr-only' role='status' aria-live='polite'>
          {announcement}
        </div>
      </Stage>
    </Glass>
  )
);

Screen.displayName = "Screen";
