import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = process.env.REACT_APP_BASE_URL;

let authToken = localStorage.getItem("TOKEN") ? JSON.parse(localStorage.getItem("TOKEN")) : null;

const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${authToken}` },
});

axiosInstance.interceptors.request.use(async (req) => {
  if (!authToken) {
    authToken = localStorage.getItem("TOKEN") ? JSON.parse(localStorage.getItem("TOKEN")) : null;
    req.headers.Authorization = `Bearer ${authToken}`;
  }

  const user = jwt_decode(authToken);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  if (!isExpired) return req;

  //   const response = await axios.post(`${baseURL}/api/token/refresh/`, {
  //     refresh: authToken.refresh,
  //   });

  //   localStorage.setItem("authToken", JSON.stringify(response.data));
  //   req.headers.Authorization = `Bearer ${response.data.access}`;
  return req;
});

export default axiosInstance;
