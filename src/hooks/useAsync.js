import { useEffect } from "react";
export const useAsync = (
  asyncFn, // Funcion asíncrona de axios
  successFunction, // Funcion para retornar el resultado de la llamada
  errorFunction, // Handle errors
  returnFunction, // Funcion de retorno para cuando se destruye
  dependencies = [] // dependencias del useEffect
) => {
  useEffect(() => {
    let isActive = true; // componente activo
    asyncFn()
      .then((result) => {
        if (isActive) successFunction(result);
      })
      .catch(({ response }) => {
        if (isActive) errorFunction(response);
      });
    return () => {
      returnFunction && returnFunction();
      isActive = false;
    };
  }, dependencies); // eslint-disable-line
};
