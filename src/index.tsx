import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "./context/ThemeContext";
import { StatsigProvider } from "@statsig/react-bindings";
import { statsigUser, STATSIG_CLIENT_KEY } from "./statsig/config";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
`;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <React.StrictMode>
        <StatsigProvider sdkKey={STATSIG_CLIENT_KEY} user={statsigUser}>
            <ThemeProvider>
                <GlobalStyle />
                <Router>
                    <App />
                </Router>
            </ThemeProvider>
        </StatsigProvider>
    </React.StrictMode>,
);
