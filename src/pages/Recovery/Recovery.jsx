import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import { LoginGrid } from "../../components/LoginGrid";
import { LabelTextInput } from "../../components/LabelTextInput";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams] = useSearchParams();
  const getToken = searchParams.get("token");
  const { formTitle, formInput, loginContent, loadingButton, textButton } = useStyles;

  const initialValues = {
    email: ""
  };

  const onSubmit = (values) => {
    console.log(values);
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
                <LoadingButton type="submit" variant="contained" size="medium" sx={{ ...loadingButton }}>
                  <Typography component="span" color="common.white" sx={{ ...textButton }}>
                    Enviar correo
                  </Typography>
                </LoadingButton>
              </Box>
              {getToken}
            </Box>
          </Form>
        )}
      </Formik>
    </LoginGrid>
  )
};

export { Recovery };