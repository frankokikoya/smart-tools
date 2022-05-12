import axios from "axios";
import { loadAbort } from "../../../utilities";

const baseURL = process.env.REACT_APP_API_URL;

export const createPassword = ({ password = "", token = "" }) => {
    const controller = loadAbort();
    return {
        call: axios.patch(
            `${baseURL}/users/security/setpswd`,
            { password },
            { headers: { "Authorization": `Bearer ${token}` } },
            { signal: controller.signal }
        ),
        controller,
    };
};

export const recoveryPassword = ({ email = "", token = "", host = "" }) => {
    const controller = loadAbort();
    return {
        call: axios.patch(
            `${baseURL}/users/security/recovery`,
            { email, host },
            { headers: { "Authorization": `Bearer ${token}` } },
            { signal: controller.signal }
        ),
        controller,
    };
};