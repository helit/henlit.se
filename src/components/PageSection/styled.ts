import styled from "@emotion/styled";
import { PageSectionProps } from "./PageSection";

export const Wrapper = styled.section<
  Pick<PageSectionProps, "backgroundColor" | "centerX">
>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${(props) => (props.centerX ? "center" : "flex-start")};
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.backgroundColor};
  padding: 16px;
`;

export const Header = styled.div`
  height: 50px;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 900px;
`;

export const Footer = styled.div`
  height: 50px;
  width: 100%;
`;
