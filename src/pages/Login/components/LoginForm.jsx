import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import Link from '@mui/material/Link';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useFetchAndLoad, useAuth } from "../../../hooks";
import { userSessionAdapter } from "../../../adapters";
import { login } from "../services/login.service";
import { LabelTextInput } from "../../../components/LabelTextInput";
import useStyles from "../styles/LoginForm.styles";

export const LoginForm = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const { session, setSession } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const { formTitle, formInput, loginContent, loadingButton, textButton, textError } = useStyles;

  useEffect(() => {
    session?.user && navigate("/home");
  }, [session, navigate]);

  const initialValues = {
    email: "root@kikoya.io",
    password: "12345678",
  };

  const onSubmit = async ({ email, password }) => {
    try {
      const { data } = await callEndpoint(login({ email, password, host: "kikoya.io" }));

      const userSession = userSessionAdapter(data);
      setSession(userSession);
    } catch (error) {
      // console.log("ERROR BACK", error.response);
      if (error?.response?.data) setErrorMessage(error.response.data.message);
    }
  };
  return (
    <>
      <Typography component={Box} variant="h3" sx={{ ...formTitle }} gutterBottom>
        Inicio de sesión
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          email: Yup.string().email('Formato inválido, sólo se admite el formato "correo@ejemplo.com"').required("Campo obligatorio"),
          password: Yup.string().required("Campos obligatorio"),
        })}
      >
        {(formik) => (
          <Form>
            <LabelTextInput
              type="text"
              name="email"
              label="Correo electrónico"
              labelProps={{ ml: 1 }}
              placeholder="correo@ejemplo.com"
              variant="outlined"
              sx={{ ...formInput }}
            />
            <LabelTextInput
              type="password"
              name="password"
              label="Contraseña"
              labelProps={{ ml: 1 }}
              placeholder="contraseña"
              variant="outlined"
              sx={{ ...formInput }}
            />
            <Box sx={{ ...loginContent }}>
              <Box sx={{ width: "50%", height: "100%" }}>
                <LoadingButton type="submit" variant="contained" size="medium" loading={loading} sx={{ ...loadingButton }}>
                  <Typography component="span" color="common.white" sx={{ ...textButton }}>
                    Inicio de sesión
                  </Typography>
                </LoadingButton>
              </Box>
              <Box sx={{ width: "45%" }}>
                <Typography component="span" color="red" sx={{ ...textError }}>
                  {errorMessage && errorMessage}
                </Typography>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
      <Typography
        component={Box}
        sx={{
          p: 1,
          width: "100%",
          fontWeight: "medium",
          fontSize: 12,
          marginBottom: 3,
        }}
        gutterBottom
      >
        ¿Has olvidado tu contraseña? <Link component={RouterLink} to="/recovery-password">Recupérala aquí.</Link>
      </Typography>
    </>
  );
};
