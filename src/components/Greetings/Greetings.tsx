import { Grid, Text, Title } from "@mantine/core";
import styles from "./Greetings.module.css";
import { breakpoints } from "../../themes/breakpoints";

export const Greetings = () => {
  return (
    <Grid type="container" breakpoints={breakpoints}>
      <Grid.Col span={{ base: 12, md: 12, sm: 4 }}>
        <div className={styles["image-wrapper"]}>
          <img
            className={styles.image}
            src={"./src/assets/images/avatar.png"}
            alt="Headshot"
          />
        </div>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 12, sm: 8 }}>
        <div className={styles.intro}>
          <Title size="h2">Hello, my name is Henrik</Title>
          <Title size="h4">I am a fullstack web developer.</Title>
          <Text size="md">
            I like to code things... but I also do other stuff! Take a look
            below to see some of my work.
          </Text>
        </div>
      </Grid.Col>
    </Grid>
  );
};
