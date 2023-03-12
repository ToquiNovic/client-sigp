import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import axios from "axios";
import App from "./App";

axios.defaults.baseURL =
  process.env.REACT_APP_URL_BACKEND || "http://localhost:3001";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
