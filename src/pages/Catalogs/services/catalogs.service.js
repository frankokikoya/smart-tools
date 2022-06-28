import axiosInstance from '../../../interceptors/axiosInstance';
import { loadAbort } from '../../../utilities';

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

export const getCatalog = ({ id, page = 0, size = 5 }) => {
    const controller = loadAbort();
    return {
        call: axiosInstance().get(
            `${baseURL}/internal/${id}/childs?page=${page}&size=${size}&sort=id,desc`,
            { signal: controller.signal }
        ),
        controller,
    };
};

export const createCatalog = (data) => {
    const controller = loadAbort();
    return {
        call: axiosInstance().post(
            `${baseURL}/internal`, data,
            { signal: controller.signal }
        ),
        controller,
    };
};

export const deleteCatalog = (id) => {
    const controller = loadAbort();
    return {
        call: axiosInstance().delete(
            `${baseURL}/internal/${id}`,
            { signal: controller.signal }
        ),
        controller,
    };
};

export const updateCatalog = ({ id, data }) => {
    const controller = loadAbort();
    return {
        call: axiosInstance().put(
            `${baseURL}/internal/${id}`, data,
            { signal: controller.signal }
        ),
        controller,
    };
};