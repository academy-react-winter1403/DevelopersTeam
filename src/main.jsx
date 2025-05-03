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


// { /*تیکت/* }
// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import { Provider } from 'react-redux';
// // import { store } from './redux/store'; // ایمپورت استور
// // import App from './App';

// // ReactDOM.render(
// //   <Provider store={store}>
// //     <App />
// //   </Provider>,
// //   document.getElementById('root')
// // );
