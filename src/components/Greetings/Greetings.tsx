import { Typography } from "@mui/material";
import { Wrapper, ImageWrapper, Intro, Image } from "./Greetings.styled";

export const Greetings = () => {
  return (
    <Wrapper>
      <Intro>
        <Typography variant='h5'>Hello, my name is Henrik Littke</Typography>
        <Typography variant='body1'>
          I am a fullstack web developer by trade. But I also do other stuff.
        </Typography>
      </Intro>
      <ImageWrapper>
        <Image src={"./src/assets/images/avatar.png"} alt='Headshot' />
      </ImageWrapper>
    </Wrapper>
  );
};
