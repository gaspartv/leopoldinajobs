import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AnimationProvider from "./contexts/AnimationContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimationProvider>
        <App />
      </AnimationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
