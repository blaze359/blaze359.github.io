import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from "./context/ThemeContext";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
