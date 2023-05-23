import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SingUp from "./pages/signup";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/Home";
import ReservarBox from "./pages/ReservarPage";

const theme = createTheme();

const App = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SingUp />} />
        <Route path="/dashboard" element={<DashboardPage></DashboardPage>} />
        {user && user.ROLL_NOMBREROL === "EGRESADO" && (
          <Route path="/prestamo" element={<h1>Prestamo</h1>}></Route>
        )}
        <Route path="/solicitar" element={<HomePage />} />
        <Route path="/reservar/:id" element={<ReservarBox />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
