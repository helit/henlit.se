import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const NextButton = styled(IconButton)<{ toTop?: boolean }>`
  color: #fff;
  transform: ${({ toTop }) => (toTop ? "rotate(-90deg)" : "rotate(90deg)")};
`;
