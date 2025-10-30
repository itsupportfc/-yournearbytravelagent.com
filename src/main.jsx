import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// ✅ StrictMode comes from React
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
 