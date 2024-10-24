import { ArrowForwardIos } from "@mui/icons-material";

import * as Styled from "./styled";

type NextSectionButtonProps = {
  scrollTo: () => void;
  toTop?: boolean;
};

export const NextSectionButton = ({
  scrollTo,
  toTop,
}: NextSectionButtonProps) => {
  return (
    <Styled.Wrapper>
      <Styled.NextButton onClick={scrollTo} toTop={toTop} size='large'>
        <ArrowForwardIos />
      </Styled.NextButton>
    </Styled.Wrapper>
  );
};
