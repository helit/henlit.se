import { ThemeProvider } from "@mui/material";
import { Main } from "./App.styled";
import theme from "./themes/theme";
import { Greetings, NextSectionButton } from "./components";
import { PageSection } from "./components/PageSection/PageSection";
import { useRef } from "react";

function App() {
  const sectionRefs = [
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
  ];

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <PageSection
          backgroundColor={"#AA4A44"}
          centerX
          footerContent={
            <NextSectionButton
              scrollTo={() =>
                sectionRefs[1].current?.scrollIntoView({ behavior: "smooth" })
              }
            />
          }
          ref={sectionRefs[0]}
        >
          <Greetings />
        </PageSection>
        <PageSection
          backgroundColor={"dodgerblue"}
          centerX
          footerContent={
            <NextSectionButton
              scrollTo={() =>
                sectionRefs[2].current?.scrollIntoView({ behavior: "smooth" })
              }
            />
          }
          ref={sectionRefs[1]}
        >
          <Greetings />
        </PageSection>
        <PageSection
          backgroundColor={"orange"}
          centerX
          footerContent={
            <NextSectionButton
              scrollTo={() =>
                sectionRefs[0].current?.scrollIntoView({ behavior: "smooth" })
              }
              toTop
            />
          }
          ref={sectionRefs[2]}
        >
          <Greetings />
        </PageSection>
      </Main>
    </ThemeProvider>
  );
}

export default App;
