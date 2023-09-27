import styled from "@emotion/styled";
import { colors } from "@mui/material";

export const SectionWrapper = styled.div`
  margin: 4rem 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const SectionContentWrapper = styled.div`
  text-align: left;
  width: 100%;
`;

export const SectionType = styled.div`
  position: relative;
`;

export const SectionLine = styled.div`
  border-left: 1px solid ${colors.blueGrey[600]};
  height: 100%;
  margin: 0 4rem 0 0;
  color: ${colors.blueGrey[600]};
`;

export const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  background-color: #fff;
  color: ${colors.blueGrey[600]};
  top: 0;
  left: calc((-32px / 2) - 1px);
`;
