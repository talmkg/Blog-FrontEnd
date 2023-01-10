import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { createRoot } from "react-dom/client";

const rootContainer = document.getElementById("root");

createRoot(rootContainer).render(<App />);
