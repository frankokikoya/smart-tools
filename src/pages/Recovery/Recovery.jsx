import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import { LoginGrid } from "../../components/LoginGrid";
import { LabelTextInput } from "../../components/LabelTextInput";
import { useFetchAndLoad } from "../../hooks";
import { recoveryPassword } from "./services/recovery.service";

const useStyles = {
  formTitle: {
    p: 1,
    width: "100%",
    fontWeight: "bold",
    marginBottom: 3,
  },
  formInput: { p: 1, width: "100%" },
  loginContent: {
    marginTop: 1,
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "space-between",
  },
  loadingButton: { textTransform: "none", borderRadius: 10, width: "100%", p: 1 },
  textButton: { fontWeight: "bold", fontSize: 14 }
};

const Recovery = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const navigate = useNavigate();
  const { formTitle, formInput, loginContent, loadingButton, textButton } = useStyles;

  const initialValues = {
    email: ""
  };

  const onSubmit = async ({ email }) => {
    try {
      const { status } = await callEndpoint(recoveryPassword({ email, host: "kikoya.io" }));
      console.log(status);
      if (status === 200) navigate("/success-email");
    } catch (error) {
      console.log("Error generate-pass ", error);
      navigate("/error-system");
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Formato inválido, sólo se admite el formato "correo@ejemplo.com"').required("Campo obligatorio"),
  });

  return (
    <LoginGrid>
      <Typography component={Box} variant="h4" sx={{ ...formTitle }} gutterBottom>
        Restablece tu contraseña
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <LabelTextInput
              type="text"
              name="email"
              label="Correo electrónico"
              labelProps={{ ml: 1 }}
              placeholder="example@example.com"
              variant="outlined"
              sx={{ ...formInput }}
            />
            <Box sx={{ ...loginContent }}>
              <Box sx={{ width: "80%", height: "100%" }}>
                <LoadingButton type="submit" variant="contained" size="medium" loading={loading} sx={{ ...loadingButton }}>
                  <Typography component="span" color="common.white" sx={{ ...textButton }}>
                    Enviar correo
                  </Typography>
                </LoadingButton>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </LoginGrid>
  )
};

export { Recovery };