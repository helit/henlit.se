import { Main } from "./App.styled"
import theme from "./themes/theme"
import { MantineProvider } from "@mantine/core"
import { Greetings, NextSectionButton } from "./components"
import { PageSection } from "./components/PageSection/PageSection"
import { useRef } from "react"
import { Contact } from "./components/Contact/Contact"

function App() {
  const sectionRefs = [
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
  ]

  return (
    <MantineProvider theme={theme}>
      <Main>
        <PageSection
          backgroundColor={"#AA4A44"}
          centerX
          footerContent={
            <NextSectionButton
              scrollTo={() =>
                sectionRefs[2].current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
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
          backgroundColor={"orange"}
          centerX
          footerContent={
            <NextSectionButton
              scrollTo={() =>
                sectionRefs[0].current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              isScrollToTop={true}
            />
          }
          ref={sectionRefs[2]}
        >
          <Contact />
        </PageSection>
      </Main>
    </MantineProvider>
  )
}

export default App
