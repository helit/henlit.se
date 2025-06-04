import { theme } from "@/theme";
import styled from "@emotion/styled";

export const OuterWrapper = styled.div`
  font-family: "Ubuntu Sans Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  background-color: ${theme.background};
  color: ${theme.text};
  padding: 4px;
  height: 100%;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  height: inherit;
`;

interface WrapperProps {
  children?: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <OuterWrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </OuterWrapper>
  );
};
