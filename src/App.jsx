import React from "react";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Container>
  </ThemeProvider>
);

export default App;
