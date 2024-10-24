import { ReactNode, forwardRef } from "react";

import * as Styled from "./styled";

export type PageSectionProps = {
  backgroundColor?: string;
  centerX?: boolean;
  headerContent?: ReactNode;
  footerContent?: ReactNode;
  children: ReactNode;
};

export const PageSection = forwardRef<HTMLElement, PageSectionProps>(
  (
    {
      backgroundColor = "#fff",
      centerX = false,
      headerContent,
      footerContent,
      children,
    },
    ref
  ) => {
    return (
      <Styled.Wrapper
        backgroundColor={backgroundColor}
        centerX={centerX}
        ref={ref}
      >
        <Styled.Header>{headerContent}</Styled.Header>
        <Styled.Content>{children}</Styled.Content>
        <Styled.Footer>{footerContent}</Styled.Footer>
      </Styled.Wrapper>
    );
  }
);

PageSection.displayName = "PageSection";
