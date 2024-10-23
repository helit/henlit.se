import { IconButton, ThemeProvider } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { Main } from "./App.styled";
import theme from "./themes/theme";
import { Greetings } from "./components";
import { PageSection } from "./components/PageSection/PageSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <PageSection
          backgroundColor={"#AA4A44"}
          centerX
          footerContent={
            <IconButton>
              <ArrowForwardIos />
            </IconButton>
          }
        >
          <Greetings />
        </PageSection>
        <PageSection backgroundColor={"dodgerblue"}>
          <Greetings />
        </PageSection>
        <PageSection backgroundColor={"orange"}>
          <Greetings />
        </PageSection>
      </Main>
    </ThemeProvider>
  );
}

export default App;
