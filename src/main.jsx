import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./assets/components/header/header.jsx";
import Cards from "./assets/components/cards/cards.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Header />
    <Cards />
  </React.StrictMode>
);
