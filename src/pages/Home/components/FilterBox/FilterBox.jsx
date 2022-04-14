import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Typography } from "@mui/material";
import { FilterTextInput } from "./FilterTextInput";

const useStyles = {
  itemContent: {
    flexWrap: "wrap",
    display: "flex",
    height: "10%",
    alignItems: "flex-start",
  },
};

export const FilterBox = () => {
  const { itemContent } = useStyles;

  const initialValues = {
    email: "",
    phone: "",
    applicant: "",
    folio: "",
  };

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={Yup.object({
        email: Yup.string().email("Formato inválido"),
        phone: Yup.string(),
        applicant: Yup.string(),
        folio: Yup.string(),
      })}
    >
      {(formik) => (
        <Box component={Form} sx={{ ...itemContent, pt: 1 }}>
          <FilterTextInput name="email" size="small" label="Correo electrónico" variant="outlined" sx={{ ml: 2 }} />
          <FilterTextInput name="phone" size="small" label="Celular" variant="outlined" sx={{ ml: 2 }} />
          <FilterTextInput name="applicant" size="small" label="Solicitante" variant="outlined" sx={{ ml: 2 }} />
          <FilterTextInput name="folio" size="small" label="Folio" variant="outlined" sx={{ ml: 2 }} />
          <LoadingButton
            type="submit"
            variant="contained"
            size="medium"
            // loading={loading}
            sx={{
              textTransform: "none",
              borderRadius: 10,
              width: "10%",
              height: "45%",
              ml: 2,
            }}
          >
            <Typography component="span" color="common.white" sx={{ fontWeight: "bold", fontSize: 14 }}>
              Buscar
            </Typography>
          </LoadingButton>
        </Box>
      )}
    </Formik>
  );
};
