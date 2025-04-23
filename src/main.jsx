import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App";
import "./assets/styles/fonts.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/theme/themeContext";
import store from "./redux/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
        <Toaster />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
