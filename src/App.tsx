import styles from "./App.module.css";
import theme from "./themes/theme";
import { MantineProvider, Title } from "@mantine/core";
import { Greetings, NextSectionButton } from "./components";
import { PageSection } from "./components/PageSection/PageSection";
import { useRef } from "react";
import { Contact } from "./components/Contact/Contact";

function App() {
  const sectionRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  return (
    <MantineProvider theme={theme}>
      <div className={styles.main}>
        <PageSection
          backgroundColor={"#AA4A44"}
          textColor="light"
          centerX
          footerContent={
            <NextSectionButton
              scrollTo={() =>
                sectionRefs[2].current?.scrollIntoView({
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
        {/* <PageSection
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
          <CasesCarousel />
        </PageSection> */}
        <PageSection
          headerContent={<Title variant="h2">Contact me</Title>}
          backgroundColor={"orange"}
          centerX
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
      </div>
    </MantineProvider>
  );
}

export default App;
