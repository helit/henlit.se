import { Typography } from "@mui/material";
import * as Styled from "./styled";

export const Greetings = () => {
  return (
    <Styled.Wrapper>
      <Styled.Intro>
        <Typography variant='h4'>Hello, my name is Henrik</Typography>
        <Typography variant='h6'>I am a fullstack web developer.</Typography>
        <Typography variant='body1'>
          I like to code things... but I also do other stuff! Take a look below
          to see some of my work.
        </Typography>
      </Styled.Intro>
      <Styled.ImageWrapper>
        <Styled.Image src={"./src/assets/images/avatar.png"} alt='Headshot' />
      </Styled.ImageWrapper>
    </Styled.Wrapper>
  );
};
