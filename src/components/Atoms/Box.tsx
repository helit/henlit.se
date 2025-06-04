import styled from "@emotion/styled";
import { theme } from "../../theme";

const BoxWrapper = styled.div`
  width: 100%;
  padding: 8px;
  background-color: ${theme.container};
  border-radius: 8px;
`;

export interface BoxProps {
  children?: React.ReactNode;
}

export const Box = ({ children }: BoxProps) => {
  return <BoxWrapper>{children}</BoxWrapper>;
};
