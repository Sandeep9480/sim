import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SearchComponent from "./searchComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchComponent />
  </StrictMode>
);
