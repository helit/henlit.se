import { ThemeProvider, Typography } from "@mui/material";
import { Main } from "./App.styled";
import theme from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Typography variant='h1'>henlit.se</Typography>
      </Main>
    </ThemeProvider>
  );
}

export default App;
