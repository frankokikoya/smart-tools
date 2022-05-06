import axios from "axios";

const axiosInstance = (history = null) => {
  const baseURL = process.env.REACT_APP_API_URL;
  let session = localStorage.getItem("SESSION") ? JSON.parse(localStorage.getItem("SESSION")) : null;

  let headers = {};

  if (session) {
    headers.Authorization = `Bearer ${session?.accessToken}`;
  }

  const instance = axios.create({ baseURL, headers });

  instance.interceptors.request.use(
    (req) => {

      // const getPath = window.location.pathname;

      if (!session) {
        session = localStorage.getItem("SESSION") ? JSON.parse(localStorage.getItem("SESSION")) : null;
        req.headers.Authorization = `Bearer ${session?.accessToken}`;
      }

      return req;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      if (error.response.status === 403) {
        localStorage.removeItem("SESSION");

        if (history) {
          history.push("/");
        } else {
          window.location = "/";
        }
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );
  return instance;
};

export default axiosInstance;
