import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App";
import "./assets/styles/fonts.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/theme/themeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <Toaster />
    </ThemeProvider>
  </StrictMode>
);
