import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // it will run the code more than one time.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
