import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
