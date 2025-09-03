import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Title from "./Title.jsx";
import App from "./App.jsx";
import "./main.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Title />
    <App />
  </StrictMode>
);
