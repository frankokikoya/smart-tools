import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import axios from "axios";
import { store } from "./redux/store";
import axiosInstance from "./interceptors/axiosInstance"
import App from "./App";

axiosInstance(axios, store);
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
