import React from "react";
import ReactDOM from "react-dom/client";
import { ContextAuthProvider } from "./context/context-authentication";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextAuthProvider>
    <App />
  </ContextAuthProvider>
);
