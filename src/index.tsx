import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ContextStoreProvider from './components/store-context/store';
ReactDOM.render(
    <ContextStoreProvider>
      <Router>
        <App />
      </Router>
    </ContextStoreProvider>,
  document.getElementById("root")
);
