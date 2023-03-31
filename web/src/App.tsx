import React from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import './App.css';
import MetaMaskProvider from "./providers/MetaMaskProvider";
import ChecklistProvider from "./providers/ChecklistProvider";
import Header from "./components/Header";
import Home from "./pages/Home";

let theme = createTheme({
  typography: {
    fontFamily: [
      "Space Grotesk", 
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxSizing: "border-box",
          borderRadius: "0",
          textTransform: "none",
          margin: "1.0em 1.5em 1.0em 0.0em",
          padding: "0.5em 2.5em 0.5em 2.5em",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <MetaMaskProvider>
        <ChecklistProvider>
          <div className="App">
            <Header />
            <Home />
          </div>
        </ChecklistProvider>
      </MetaMaskProvider>
    </ThemeProvider>
  );
}

export default App;
