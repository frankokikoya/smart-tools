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

export const lastProcessed = () => {
    const controller = loadAbort();
    return {
        call: axiosInstance().get(
            `${baseURL}/accesories/file/lastProcessed`,
            { signal: controller.signal }
        ),
        controller,
    };
};

export const validateCSV = ({ file }) => {
    const controller = loadAbort();
    const data = new FormData()
    data.append('file', file)
    return {
        call: axiosInstance().post(
            `${baseURL}/accesories/file/validator`, data,
            { signal: controller.signal }
        ),
        controller,
    };
};

export const processCSV = ({ file }) => {
    const controller = loadAbort();
    const data = new FormData()
    data.append('file', file)
    return {
        call: axiosInstance().post(
            `${baseURL}/accesories/file/process`, data,
            { signal: controller.signal }
        ),
        controller,
    };
};