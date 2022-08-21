import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import { initPlausible } from "./utils/stats";
import App from "./App";

if (typeof window !== "undefined") {
  initPlausible();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
