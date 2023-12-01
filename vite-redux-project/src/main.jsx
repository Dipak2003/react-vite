import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Routing } from "react-router-dom";
import { store } from "./store.jsx";
import {Provider} from 'react-redux'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routing>
      <Provider store={store}>

      <App />
      </Provider>

    </Routing>
  </React.StrictMode>
);