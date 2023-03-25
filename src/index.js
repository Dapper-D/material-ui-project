import { Paper, ThemeProvider, useMediaQuery } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    /
    <ThemeProvider theme={theme}>
      <Paper sx={{ height: "100vh" }}>
        <App />
      </Paper>
    </ThemeProvider>
  </React.StrictMode>
);
