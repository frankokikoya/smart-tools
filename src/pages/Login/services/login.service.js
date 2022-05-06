import axios from "axios";
import { loadAbort } from "../../../utilities";

const baseURL = process.env.REACT_APP_API_URL;

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