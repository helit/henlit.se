import { forwardRef, useId, useState } from "react";
import styled from "@emotion/styled";
import { COMPACT_QUERY, glow, theme } from "@/theme";

const Footer = styled.div`
  flex: none;
  padding: 6px clamp(20px, 6vw, 60px) clamp(12px, 2.5vmin, 22px);
  font-size: clamp(16px, 2.1vw, 18px);

  @media ${COMPACT_QUERY} {
    padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 16px);
  }
`;

const Message = styled.div<{ tone: "info" | "error" }>`
  color: ${({ tone }) => (tone === "error" ? theme.bright : theme.dim)};
  text-shadow: ${({ tone }) => (tone === "error" ? glow(theme.bright) : "none")};
  margin-bottom: 4px;
  white-space: pre-wrap;
  word-break: break-word;
`;

const Entry = styled.label`
  position: relative;
  display: flex;
  align-items: baseline;
  cursor: text;
  overflow: hidden;
`;

const Sigil = styled.span`
  flex: none;
  color: ${theme.dim};
  text-shadow: none;
  margin-right: 1ch;
  white-space: nowrap;
`;

/**
 * Sized in `ch` so the block cursor sits flush after the text. The native
 * caret is hidden in favour of that block, which is why the font must stay
 * monospaced.
 */
const Field = styled.input<{ length: number }>`
  flex: none;
  width: ${({ length }) => Math.max(length, 0)}ch;
  max-width: 100%;
  border: 0;
  padding: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-shadow: inherit;
  caret-color: transparent;
  outline: none;
`;

/**
 * Positioned from the caret index rather than floated after the text, so it
 * stops lying when you arrow back into a half-typed command. A block when it
 * sits at the end, a bar when it sits between two characters.
 *
 * Only correct while the command fits the line: past that the input scrolls
 * internally and this drifts. Commands here are a dozen characters at most.
 */
const Cursor = styled.span<{ idle: boolean; offset: number; atEnd: boolean }>`
  position: absolute;
  left: ${({ offset }) => offset}ch;
  bottom: 0;
  pointer-events: none;
  color: ${theme.bright};
  text-shadow: ${glow(theme.bright)};

  ${({ atEnd }) =>
    !atEnd &&
    `top: auto;
     height: 2px;
     width: 1ch;
     background: currentColor;
     overflow: hidden;
     text-indent: -99em;`}

  animation: ${({ idle }) => (idle ? "blink 1s steps(1) infinite" : "none")};

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Hint = styled.div`
  margin-top: 6px;
  color: ${theme.dim};
  font-size: 0.85em;
  text-shadow: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${COMPACT_QUERY} {
    white-space: normal;
    overflow: visible;
  }
`;

export interface PromptMessage {
  tone: "info" | "error";
  text: string;
}

interface PromptProps {
  path: string;
  value: string;
  message: PromptMessage | null;
  hint: string;
  onChange: (value: string) => void;
}

export const Prompt = forwardRef<HTMLInputElement, PromptProps>(
  ({ path, value, message, hint, onChange }, ref) => {
    const hintId = useId();
    const [caret, setCaret] = useState(0);
    const sigil = `henlit:${path}$`;
    const position = Math.min(caret, value.length);
    const atEnd = position === value.length;

    const trackCaret = (
      event: React.SyntheticEvent<HTMLInputElement>
    ) => setCaret(event.currentTarget.selectionStart ?? value.length);

    return (
      <Footer>
        {message && <Message tone={message.tone}>{message.text}</Message>}
        <Entry>
          <Sigil>{sigil}</Sigil>
          <Field
            ref={ref}
            length={value.length}
            value={value}
            onChange={(event) => {
              onChange(event.target.value);
              trackCaret(event);
            }}
            onKeyUp={trackCaret}
            onSelect={trackCaret}
            onFocus={trackCaret}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="go"
            aria-label="Command input"
            aria-describedby={hintId}
          />
          <Cursor
            idle={value.length === 0}
            offset={sigil.length + 1 + position}
            atEnd={atEnd}
            aria-hidden="true"
          >
            █
          </Cursor>
        </Entry>
        <Hint id={hintId}>{hint}</Hint>
      </Footer>
    );
  }
);

Prompt.displayName = "Prompt";
