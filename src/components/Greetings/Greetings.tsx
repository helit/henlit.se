import { Box, Typography, useTheme } from "@mui/material";
import * as Styled from "./Greetings.styled";

export const Greetings = () => {
  const { palette } = useTheme();
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
    >
      <Styled.Content>
        <Box
          style={{
            borderRadius: "50%",
            border: "3px solid " + palette.common.white,
            margin: "0 auto",
            width: "50%",
            overflow: "hidden",
          }}
        >
          <img
            style={{ height: "100%", width: "100%" }}
            src={"./src/assets/images/avatar.png"}
          />
        </Box>
        <Styled.Intro>
          <Typography variant="h3" component="h1">
            Hello!
          </Typography>
          <Typography variant="subtitle1">
            My name is Henrik. I am a fullstack web developer.
          </Typography>
          <Typography variant="body1">
            I like to code things, but I also do other stuff! Take a look below
            to see some of my work.
          </Typography>
        </Styled.Intro>
      </Styled.Content>
    </Box>
  );
};
