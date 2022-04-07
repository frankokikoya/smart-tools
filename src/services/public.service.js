import axios from "axios";
import { loadAbort } from "../utilities";

export const login = (C) => {
  const controller = loadAbort();
  return {
    call: axios.get(`https://rickandmortyapi.com/api/character/${C}`, { signal: controller.signal }),
    controller,
  };
};
