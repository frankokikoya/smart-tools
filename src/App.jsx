import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { Navigation } from "./components/Navigation";
import ModalError from "./components/ModalError/ModalError";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ModalError/>
        <Suspense fallback={<div>Loading ...</div>}>
          <BrowserRouter>
            <Navigation/>
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
