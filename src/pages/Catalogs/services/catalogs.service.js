import axiosInstance from "../../../interceptors/axiosInstance";
import { loadAbort } from "../../../utilities";

const baseURL = process.env.REACT_APP_CATALOGS_API_URL;

export const getAccessories = ({ page = 0, size = 5 }) => {
    const controller = loadAbort();
    return {
        call: axiosInstance().get(
            `${baseURL}/accesories?page=${page}&size=${size}&sort=id,asc`,
            { signal: controller.signal }
        ),
        controller,
    };
};