import axios from "axios";
import { loadAbort } from "../../../utilities";

const baseURL = process.env.REACT_APP_API_URL;

export const createPassword = ({ password = "", token = "" }) => {
    const controller = loadAbort();
    return {
        call: axios.patch(
            `${baseURL}/uisers/security/setpswd`,
            { password },
            { headers: { "Authorization": `Bearer ${token}` } },
            { signal: controller.signal }
        ),
        controller,
    };
};