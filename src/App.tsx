import React from "react";

// Import themes
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/theme";

// Router
import Router from "./router";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./themes/globalStyles";
import "./themes/global.css";

import I18n from "./components/i18n";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GlobalStyle>
      <I18n />
    </ThemeProvider>
  );
}

export default App;
