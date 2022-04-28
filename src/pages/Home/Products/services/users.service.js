import axiosInstance from "../../../../interceptors/axiosInstance";
import { loadAbort } from "../../../../utilities";

export const getUsers = () => {
    const controller = loadAbort();
    return {
        call: axiosInstance().get(
            `/users`,
            { signal: controller.signal },
        ),
        controller,
    };
};

export const getOneUser = (id) => {
    const controller = loadAbort();
    return {
        call: axiosInstance().get(
            `/users/${id}`,
            { signal: controller.signal },
        ),
        controller,
    };
};

export const createUser = ({ email, name, surname, secondSurname, phone, branch, role }) => {
    const controller = loadAbort();
    return {
        call: axiosInstance().post(
            `/users`,
            { email, name, surname, secondSurname, phone, branch, role },
            { signal: controller.signal },
        ),
        controller,
    };
};

export const updateUser = (id, user) => {
    const controller = loadAbort();
    return {
        call: axiosInstance().put(
            `/users/${id}`,
            { ...user },
            { signal: controller.signal },
        ),
        controller,
    };
};

export const deleteUser = (id) => {
    const controller = loadAbort();
    return {
        call: axiosInstance().delete(
            `/users/${id}`,
            { signal: controller.signal },
        ),
        controller,
    };
};