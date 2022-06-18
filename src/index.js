import React from 'react';

import axios from 'axios';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import axiosInstance from './interceptors/axiosInstance'
import { store } from './redux/store';

axiosInstance(axios, store);
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
