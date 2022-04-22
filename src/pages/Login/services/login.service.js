import axios from "axios";
import axiosInstance from "../../../interceptors/axiosInstance";
import { loadAbort } from "../../../utilities";

const baseURL = process.env.REACT_APP_BASE_URL;

export const login = ({ email = "", password = "", host = "" }) => {
  const controller = loadAbort();
  return {
    call: axios.post(
      `${baseURL}/sso/login`,
      { email, password, host },
      { signal: controller.signal }
    ),
    controller,
  };
};

export const getUsers = () => {
  const controller = loadAbort();
  return {
    call: axiosInstance().get(
      `${baseURL}/user`,
      { signal: controller.signal },
    ),
    controller,
  };
};
