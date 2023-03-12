import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

const theme = createTheme();

const App = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<h1>La chupa</h1>} />
        {user && user.ROLL_NOMBREROL === "EGRESADO" && (
          <Route path="/prestamo" element={<h1>Prestamo</h1>}></Route>
        )}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
