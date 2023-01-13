import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
const rootContainer = document.getElementById("root");

createRoot(rootContainer).render(
  <Provider store={store}>
    <App />
  </Provider>
);
