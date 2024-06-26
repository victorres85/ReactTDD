import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "./Components/Header/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
);
