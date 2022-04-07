import axios from "axios";
import { loadAbort } from "../../../utilities";

const baseURL = process.env.REACT_APP_BASE_URL;

export const login = ({ email = "", password = "" }) => {
  const controller = loadAbort();
  return {
    call: axios.post(
      `${baseURL}/cotizador/api/sso/login`,
      { correoElectronico: email, contrasenia: password },
      { signal: controller.signal }
    ),
    controller,
  };
};
