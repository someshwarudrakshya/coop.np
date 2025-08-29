// index.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Import HashRouter
import "./global.css";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter> {/* Wrap your app in HashRouter */}
      <App />
    </HashRouter>
  </StrictMode>
);
