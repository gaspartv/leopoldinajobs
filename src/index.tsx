import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AnimationProvider from "./contexts/AnimationContext";
import LoadProvider from "./contexts/LoadContext";
import UserProvider from "./contexts/UserContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimationProvider>
        <LoadProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </LoadProvider>
      </AnimationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
