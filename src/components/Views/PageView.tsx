import { Fragment, forwardRef } from "react";
import styled from "@emotion/styled";
import { COMPACT_QUERY, glow, theme } from "@/theme";
import { useLinkHandler } from "@/system/router";
import type { Block } from "@/system/types";

/** Shared by the visible column and the hidden measuring column. */
export const COLUMN_GAP = 14;

const Column = styled.div<{ measuring?: boolean }>`
  max-width: 72ch;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${COLUMN_GAP}px;
  font-size: clamp(17px, 2.2vw, 19px);
  line-height: 1.55;

  ${({ measuring }) =>
    measuring &&
    `position: absolute;
     left: 0;
     right: 0;
     top: 0;
     visibility: hidden;
     pointer-events: none;`}
`;

const Heading = styled.h2`
  margin: 0;
  font-size: inherit;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${theme.bright};
  text-shadow: ${glow(theme.bright)};
`;

const Paragraph = styled.p`
  margin: 0;
`;

const Rule = styled.hr`
  width: 100%;
  margin: 0;
  border: 0;
  border-top: 1px solid ${theme.faint};
`;

const Spacer = styled.div`
  height: 10px;
`;

const Ascii = styled.pre`
  margin: 0;
  overflow: hidden;
  color: ${theme.bright};
  text-shadow: ${glow(theme.bright)};
  font-size: clamp(4px, 1.4vw, 11px);
  line-height: 1.1;
`;

const Fields = styled.dl`
  display: grid;
  grid-template-columns: minmax(6ch, max-content) 1fr;
  gap: 2px 16px;
  margin: 0;

  dt {
    color: ${theme.dim};
    letter-spacing: 0.08em;
  }
  dd {
    margin: 0;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 0;
    dd {
      margin-bottom: 8px;
    }
  }
`;

const LinkList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Row = styled.a<{ active: boolean }>`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  padding: 3px 10px;

  /* Wrapping rather than stacking, so the "> " marker stays on the label's
     line instead of becoming a flex item of its own above it. */
  @media ${COMPACT_QUERY} {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0 8px;
    padding: 6px 10px;
  }
  text-decoration: none;
  color: ${({ active }) => (active ? theme.screen : theme.text)};
  background: ${({ active }) => (active ? theme.bright : "transparent")};
  text-shadow: ${({ active }) => (active ? "none" : glow(theme.text))};
  outline: none;

  &:hover {
    background: ${({ active }) =>
      active ? theme.bright : "rgba(217, 159, 74, 0.1)"};
  }

  &::before {
    content: "> ";
    color: ${({ active }) => (active ? theme.screen : theme.dim)};
  }
`;

const Note = styled.span`
  color: inherit;
  opacity: 0.75;
  text-align: right;

  @media ${COMPACT_QUERY} {
    flex-basis: 100%;
    text-align: left;
  }
`;

/** Renders **emphasis** in body copy. Deliberately the only markup we support. */
const renderInline = (value: string) =>
  value.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong
        key={index}
        style={{ color: theme.bright, textShadow: glow(theme.bright) }}
      >
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    )
  );

interface PageViewProps {
  blocks: Block[];
  /** Index into this block list's links; -1 selects nothing. */
  selectedIndex: number;
  /** Renders off-screen for measurement rather than for reading. */
  measuring?: boolean;
}

export const PageView = forwardRef<HTMLDivElement, PageViewProps>(
  ({ blocks, selectedIndex, measuring }, ref) => {
    const onLinkClick = useLinkHandler();
    let linkIndex = -1;

    const renderBlock = (block: Block, key: number) => {
      switch (block.kind) {
        case "heading":
          return <Heading key={key}>{block.value}</Heading>;
        case "text":
          return <Paragraph key={key}>{renderInline(block.value)}</Paragraph>;
        case "rule":
          return <Rule key={key} />;
        case "spacer":
          return <Spacer key={key} />;
        case "ascii":
          // Decorative: a screen reader would otherwise read every block glyph.
          return (
            <Ascii key={key} aria-hidden='true'>
              {block.value}
            </Ascii>
          );
        case "fields":
          return (
            <Fields key={key}>
              {block.rows.map((row) => (
                <Fragment key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{renderInline(row.value)}</dd>
                </Fragment>
              ))}
            </Fields>
          );
        case "links":
          return (
            <LinkList key={key}>
              {block.items.map((item) => {
                linkIndex += 1;
                const isRoute = !item.href;
                const isExternal = Boolean(item.href) && !item.download;
                return (
                  <Row
                    key={item.label}
                    href={item.href ?? item.path ?? "/"}
                    active={linkIndex === selectedIndex}
                    // Only in-site routes are intercepted. Files and external
                    // destinations stay plain anchors and behave natively.
                    onClick={isRoute ? onLinkClick : undefined}
                    download={item.download ? "" : undefined}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    tabIndex={measuring ? -1 : undefined}
                    aria-hidden={measuring || undefined}
                    aria-current={
                      !measuring && linkIndex === selectedIndex
                        ? "true"
                        : undefined
                    }
                  >
                    <span>{item.label}</span>
                    {item.note && <Note>{item.note}</Note>}
                  </Row>
                );
              })}
            </LinkList>
          );
      }
    };

    return (
      <Column
        ref={ref}
        measuring={measuring}
        aria-hidden={measuring}
        inert={measuring}
      >
        {blocks.map(renderBlock)}
      </Column>
    );
  }
);

PageView.displayName = "PageView";
