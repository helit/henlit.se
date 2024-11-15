import { PageSectionProps } from "./PageSection";
import { styled } from "@mui/system";

export const Wrapper = styled("div")<PageSectionProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  height: 100vh;
  background: ${({ bgColor }) => bgColor};
  color: ${({ theme: { palette }, textColor }) =>
    textColor === "light" ? palette.primary.main : "black"};
  padding: 24px 24px 16px;
`;

export const Header = styled("div")`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;

export const Content = styled("div")`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;

export const Footer = styled("div")`
  margin: 0 auto;
  max-width: 1200px;
`;
