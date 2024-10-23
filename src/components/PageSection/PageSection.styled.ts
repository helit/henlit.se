import styled from "@emotion/styled";
import { PageSectionProps } from "./PageSection";

export const SectionWrapper = styled.div<
  Pick<PageSectionProps, "backgroundColor" | "centerX">
>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${(props) => (props.centerX ? "center" : "flex-start")};
  /* width: 100vw; */
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.backgroundColor};
  padding: 16px;
`;

export const SectionHeader = styled.div`
  height: 100px;
  width: 100%;
`;

export const SectionContent = styled.div`
  width: 900px;
`;

export const SectionFooter = styled.div`
  height: 100px;
  width: 100%;
`;
