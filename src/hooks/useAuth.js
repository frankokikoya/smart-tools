import { useLocalStorage } from "./useStorage";
//import { useContext } from "react";
//import AuthContext from "../context/AuthProvider";

// const useAuth = () => {
//     return useContext(AuthContext);
// }

const useAuth = () => {
    return useLocalStorage("session");
};

export default useAuth;