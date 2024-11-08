import { Text } from "@mantine/core"
import * as Styled from "./Greetings.styled"

export const Greetings = () => {
  return (
    <Styled.Wrapper>
      <Styled.Intro>
        <Text variant="h4">Hello, my name is Henrik</Text>
        <Text variant="h6">I am a fullstack web developer.</Text>
        <Text variant="body1">
          I like to code things... but I also do other stuff! Take a look below
          to see some of my work.
        </Text>
      </Styled.Intro>
      <Styled.ImageWrapper>
        <Styled.Image src={"./src/assets/images/avatar.png"} alt="Headshot" />
      </Styled.ImageWrapper>
    </Styled.Wrapper>
  )
}
