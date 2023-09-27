import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const CardWrapper = styled(Paper)`
  height: 300px;
  width: 100%;
  overflow: hidden;
`;

export const CardContent = styled.div`
  height: 100%;
`;

export const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
