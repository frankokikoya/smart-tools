import axiosInstance from '../../../interceptors/axiosInstance';
import { loadAbort } from '../../../utilities';

//const baseURL = process.env.REACT_APP_API_URL;

export const getAccessories = ({ page = 0, size = 5 }) => {
    const controller = loadAbort();
    return {
        call: axiosInstance().get(
            `/accesories?page=${page}&size=${size}&sort=id,asc`,
            { signal: controller.signal }
        ),
        controller,
    };
};

export const lastProcessed = () => {
    const controller = loadAbort();
    return {
        call: axiosInstance().get(
            `/accesories/file/lastProcessed`,
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
            `/accesories/file/validator`, data,
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
            `/accesories/file/process`, data,
            { signal: controller.signal }
        ),
        controller,
    };
};

export const getCatalog = ({ id, page = 0, size = 5 }) => {
    const controller = loadAbort();
    return {
        call: axiosInstance().get(
            `/internal/${id}/childs?page=${page}&size=${size}&sort=id,asc`,
            { signal: controller.signal }
        ),
        controller,
    };
};

export const createCatalog = (data) => {
    const controller = loadAbort();
    return {
        call: axiosInstance().post(
            `/internal`, data,
            { signal: controller.signal }
        ),
        controller,
    };
};

export const deleteCatalog = (id) => {
    const controller = loadAbort();
    return {
        call: axiosInstance().delete(
            `/internal/${id}`,
            { signal: controller.signal }
        ),
        controller,
    };
};

export const updateCatalog = ({ id, data }) => {
    const controller = loadAbort();
    return {
        call: axiosInstance().put(
            `/internal/${id}`, data,
            { signal: controller.signal }
        ),
        controller,
    };
};