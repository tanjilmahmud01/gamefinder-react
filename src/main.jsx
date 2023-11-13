import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "flowbite";
import { SanityDataProvider } from "./context/SanityContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SanityDataProvider>
        <App />
      </SanityDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
