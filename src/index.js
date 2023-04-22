import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// 先重置全部 CSS 为空
import "normalize.css";
// 在引入自己的全部 CSS 样式
import "@/assets/css/index.less";
import App from "@/App";
import store from "./store";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Suspense fallback="loading">
    <Provider store={store}>
      <HashRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
      </HashRouter>
    </Provider>
  </Suspense>
  // </React.StrictMode>
);
