import { ReactNode, forwardRef } from "react";

import * as Styled from "./PageSection.styled";

export type PageSectionProps = {
  bgColor?: string;
  textColor?: "dark" | "light";
  headerContent?: ReactNode;
  footerContent?: ReactNode;
  children: ReactNode;
};

export const PageSection = forwardRef<HTMLDivElement, PageSectionProps>(
  (
    { bgColor, textColor = "dark", headerContent, footerContent, children },
    ref
  ) => {
    return (
      <Styled.Wrapper bgColor={bgColor} textColor={textColor} ref={ref}>
        {headerContent && <Styled.Header>{headerContent}</Styled.Header>}
        <Styled.Content>{children}</Styled.Content>
        {footerContent && <Styled.Footer>{footerContent}</Styled.Footer>}
      </Styled.Wrapper>
    );
  }
);

PageSection.displayName = "PageSection";
