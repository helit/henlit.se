import { ReactNode } from "react";
import {
  SectionContent,
  SectionFooter,
  SectionHeader,
  SectionWrapper,
} from "./PageSection.styled";

export type PageSectionProps = {
  backgroundColor?: string;
  centerX?: boolean;
  headerContent?: ReactNode;
  footerContent?: ReactNode;
  children: ReactNode;
};

export const PageSection = ({
  backgroundColor = "#fff",
  centerX = false,
  headerContent,
  footerContent,
  children,
}: PageSectionProps) => {
  return (
    <SectionWrapper backgroundColor={backgroundColor} centerX={centerX}>
      <SectionHeader>{headerContent}</SectionHeader>
      <SectionContent>{children}</SectionContent>
      <SectionFooter>{footerContent}</SectionFooter>
    </SectionWrapper>
  );
};
