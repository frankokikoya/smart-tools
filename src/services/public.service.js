// import axios from "axios";
import axiosInstance from "../interceptors/axiosInstance";
import { loadAbort } from "../utilities";

const baseURL = process.env.REACT_APP_API_URL;

export const logout = () => {
  const controller = loadAbort();
  return {
    call: axiosInstance().get(
      `${baseURL}/sso/logout`, 
      { signal: controller.signal }
    ),
    controller,
  };
};