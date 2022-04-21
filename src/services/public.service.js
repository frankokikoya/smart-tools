import axiosInstance from "../interceptors/axiosInstance";
import { loadAbort } from "../utilities";

const baseURL = process.env.REACT_APP_BASE_URL;

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