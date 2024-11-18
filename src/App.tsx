import styles from "./App.module.css";
import { Greetings, NextSectionButton } from "./components";
import { PageSection } from "./components/PageSection/PageSection";
import { useRef } from "react";
import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { Contact } from "./components/Contact/Contact";
import { Cases } from "./components/Cases/Cases";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffb300",
      },
    },
    typography: {
      allVariants: {
        color: "white",
      },
    },
  });

  const sectionRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        className={styles.main}
        style={{
          background:
            "linear-gradient(330deg, #1d1d3c 0%, #556575 65%, #a58c62 100%)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <PageSection
          // bgColor={
          //   "linear-gradient(344deg, #1d1d3c 0%, #556575 65%, #c28674 100%)"
          // }
          textColor="light"
          footerContent={
            <NextSectionButton
              scrollTo={() =>
                sectionRefs[1].current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              iconColor="light"
            />
          }
          ref={sectionRefs[0]}
        >
          <Greetings />
        </PageSection>
        <PageSection
          headerContent={
            <Typography variant="h4" component="h2">
              Cases
            </Typography>
          }
          // bgColor={"#1d1d3c"}
          textColor="light"
          footerContent={
            <NextSectionButton
              scrollTo={() =>
                sectionRefs[2].current?.scrollIntoView({ behavior: "smooth" })
              }
              iconColor="light"
            />
          }
          ref={sectionRefs[1]}
        >
          <Cases />
        </PageSection>
        <PageSection
          headerContent={
            <Typography variant="h4" component="h2">
              Contact me
            </Typography>
          }
          // bgColor={"#556575"}
          textColor="light"
          footerContent={
            <NextSectionButton
              scrollTo={() =>
                sectionRefs[0].current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              isScrollToTop={true}
              iconColor="light"
            />
          }
          ref={sectionRefs[2]}
        >
          <Contact />
        </PageSection>
      </Box>
    </ThemeProvider>
  );
}

export default App;
